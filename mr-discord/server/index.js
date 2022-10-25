import * as alt from 'alt';
import axios from 'axios';
import Discord from 'discord.js';
const { Client, GatewayIntentBits } = Discord;
const discordClient = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, ] });
import { DISCORD_APP_ID, DISCORD_SERVER_ID, DISCORD_TOKEN, DISCORD_CITIZEN_ID, DISCORD_ADMIN_ID, DISCORD_MOD_ID, DISCORD_SUPPORTER_ID, DISCORD_STATUS_CHANNEL, DISCORD_INVITE_LINK, DISCORD_PREFIX, WHITELIST, LOG_WHITELIST, LOG_MYSQL, ANNOUNCE_LOG_IN_OUT, mysql_callback, _L, getConfig } from 'mr-functions';
let WhitelistUpdate;
var CurrentOnlineUsers = [];
var WhiteList = [];
discordClient.on('guildMemberUpdate', (oldMember, newMember) => {
	refreshWhitelist();
});

discordClient.on("messageCreate", (message) => {
	if (!message.content.startsWith(DISCORD_PREFIX) || message.author.bot)
		return;

	if (message.content.startsWith(`${DISCORD_PREFIX}whitelist`)) {
		let userlist='';
		message.guild.roles.cache.get(DISCORD_CITIZEN_ID).members.forEach(m=>{
			let sf_citizen = (element) => element == m.user.id;
			let index = WhiteList.findIndex(sf_citizen);
			userlist += '\n' + m.user.username;
		});
		message.channel.send(_L("discord_whitelist", [userlist]));
	}
	else if (message.content.startsWith(`${DISCORD_PREFIX}altv`)) {
		message.channel.send(_L("discord_altv"));
	}
	else if (message.content.startsWith(`${DISCORD_PREFIX}help`)) {
		message.channel.send(_L("discord_help"));
	}
});
alt.on('playerConnect', (player) => {
	alt.emitClient(player, 'mr-core:discord:set_discord_app_id',  DISCORD_APP_ID);
});
alt.on('playerDisconnect', (player) => {
	if (ANNOUNCE_LOG_IN_OUT=="true"){
		let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
		server.channels.cache.get(DISCORD_STATUS_CHANNEL).send(_L("leaved", [getDiscordNameById(player.id)]));
	}
	mysql_callback("UPDATE users SET id = ? WHERE dsid = ?", [-1, getDiscordById(player.id)], function(result){
		if (result[0] > 0 && LOG_MYSQL=="true")
			alt.log(_L("log_user_leaved",[getDiscordNameById(player.id)]));
	});
	if (getOnlineUsersById(player.id) > -1)
		CurrentOnlineUsers.splice(getOnlineUsersById(player.id), 1);
});
alt.onClient('mr-core:discord:token', async (player, token) => {
	const request = await axios.get('https://discordapp.com/api/users/@me', {
		'headers': {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': `Bearer ${token}`
		}
	}).catch(function(error) {
		if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
		return null;
	});
    if (!request || !request.data || !request.data.id || !request.data.username) {
        player.kick(_L("discord_needed"));
        return;
    }
	if (WhiteList.indexOf(request.data.id) === -1){
        player.kick(_L("no_whitelisted", [DISCORD_INVITE_LINK]));
        return;
	}
	mysql_callback('SELECT id FROM users WHERE dsid = ?', [request.data.id], function(result){
		if (result[0] == 0){
			mysql_callback("INSERT INTO users SET ?", {id: player.id, dsid: request.data.id, username: request.data.username}, function(result2){
				if (result2[0] == 1 && LOG_MYSQL=="true")
					alt.log(_L("log_insert_user",[request.data.username]));
			});
		}
		else{
			mysql_callback("UPDATE users SET id = ? WHERE dsid = ?", [player.id, request.data.id], function(result2){
				if (result2[0] == 1 && LOG_MYSQL=="true")
					alt.log(_L("log_update_user",[request.data.username]));
			});
		}
	});
	if (ANNOUNCE_LOG_IN_OUT=="true"){
		let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
		server.channels.cache.get(DISCORD_STATUS_CHANNEL).send(_L("joined", [getDiscordNameById(player.id)]));
	}
	CurrentOnlineUsers.push({id: player.id, dsid: request.data.id, username: request.data.username});
	alt.emitClient(player, "mr-core:discord:loggedin", "success");
});
function refreshWhitelist(){
	let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
	server.members.fetch().then(members => {
		members.forEach(member =>{
			let isCitizen = member.roles.cache.has(DISCORD_CITIZEN_ID);
			let sf_citizen = (element) => element == member.user.id;
			let index = WhiteList.findIndex(sf_citizen);
			let isAdmin = member.roles.cache.has(DISCORD_ADMIN_ID);
			let sf_Admin = (element) => element == member.user.id;
			let isMod = member.roles.cache.has(DISCORD_MOD_ID);
			let sf_Mod = (element) => element == member.user.id;
			let isSupporter = member.roles.cache.has(DISCORD_SUPPORTER_ID);
			let sf_Supporter = (element) => element == member.user.id;
			if (WHITELIST=="true"){
				if (!isCitizen){
					if (index > -1){
						WhiteList.splice(index, 1);
						if (LOG_WHITELIST=="true")
							alt.log(_L("log_whitelist_del",[member.user.username]));
						if (getIdByDiscord(member.user.id) != -1){
							getIdByDiscord(member.user.id).kick(_L("no_whitelisted", [DISCORD_INVITE_LINK]));
							if (getOnlineUsersByDsid(member.user.id) != -1)
								WhiteList.splice(getOnlineUsersByDsid(member.user.id), 1);
						}
					}
				}
				else if (isCitizen){
					if (index <= -1){
						WhiteList.push(member.user.id);
						if (LOG_WHITELIST=="true")
							alt.log(_L("log_whitelist_add",[member.user.username]));
					}
				}
			}
			else{
				if (index <= -1){
					WhiteList.push(member.user.id);
					if (LOG_WHITELIST=="true")
						alt.log(_L("log_whitelist_add",[member.user.username]));
				}
			}
			mysql_callback('SELECT id FROM users WHERE dsid = ?', [member.user.id], function(result){
				if(result[0] > 0){
					if (!isAdmin){
						mysql_callback('UPDATE users SET isAdmin="no" WHERE dsid = ?', [member.user.id], function(result2){
							if (result2[0] > 0 && LOG_MYSQL=="true")
								alt.log(_L("log_adminlist_del",[member.user.username]));
						});
					}
					else if (isAdmin){
						mysql_callback('UPDATE users SET isAdmin="yes" WHERE dsid = ?', [member.user.id], function(result2){
							if (result2[0] > 0 && LOG_MYSQL=="true")
								alt.log(_L("log_adminlist_add",[member.user.username]));
						});
					}

					if (!isMod){
						mysql_callback('UPDATE users SET isMod="no" WHERE dsid = ?', [member.user.id], function(result3) {
							if (result3[0] > 0 && LOG_MYSQL=="true")
								alt.log(_L("log_modlist_del",[member.user.username]));
						});
					}
					else if (isMod){
						mysql_callback('UPDATE users SET isMod="yes" WHERE dsid = ?', [member.user.id], function (result3) {
							if (result3[0] > 0 && LOG_MYSQL=="true")
								alt.log(_L("log_modlist_add",[member.user.username]));
						});
					}

					if (!isSupporter){
						mysql_callback('UPDATE users SET isSupporter="no" WHERE dsid = ?', [member.user.id], function (result4) {
							if (result4[0] > 0 && LOG_MYSQL=="true")
								alt.log(_L("log_supporterlist_del",[member.user.username]));
						});
					}
					else if (isSupporter){
						mysql_callback('UPDATE users SET isSupporter="yes" WHERE dsid = ?', [member.user.id], function (result4) {
							if (result4[0] > 0 && LOG_MYSQL=="true")
								alt.log(_L("log_supporterlist_add",[member.user.username]));
						});
					}
				}
			});
		});
	});
}
function getIdByDiscord(dsid){
  for (let i=0; i< CurrentOnlineUsers.length; i++){
    if (dsid == CurrentOnlineUsers[i].dsid)
      return CurrentOnlineUsers[i].id;
  }
  return -1;
}
function getDiscordNameById(id){
  for (let i=0; i< CurrentOnlineUsers.length; i++){
    if (id == CurrentOnlineUsers[i].id)
      return CurrentOnlineUsers[i].username;
  }
  return -1;
}
function getDiscordById(id){
  for (let i=0; i< CurrentOnlineUsers.length; i++){
    if (id == CurrentOnlineUsers[i].id)
      return CurrentOnlineUsers[i].dsid;
  }
  return -1;
}
function getOnlineUsersByDsid(dsid){
  for (let i=0; i< CurrentOnlineUsers.length; i++){
    if (dsid == CurrentOnlineUsers[i].dsid)
      return i;
  }
  return -1;
}
function getOnlineUsersById(id){
  for (let i=0; i< CurrentOnlineUsers.length; i++){
    if (id == CurrentOnlineUsers[i].id)
      return i;
  }
  return -1;
}
WhitelistUpdate = alt.setInterval(refreshWhitelist, 300000);
alt.on('resourceStart', () => {
    discordClient.login(DISCORD_TOKEN).then(() => refreshWhitelist());
});