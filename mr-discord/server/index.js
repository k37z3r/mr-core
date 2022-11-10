import * as alt from 'alt';
import fs from "fs";
import axios from 'axios';
import Discord from 'discord.js';
const { Client, GatewayIntentBits, EmbedBuilder } = Discord;
const discordClient = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, ] });
import { DISCORD_APP_ID, DISCORD_SERVER_ID, DISCORD_TOKEN, DISCORD_CITIZEN_ID, DISCORD_ADMIN_ID, DISCORD_MOD_ID, DISCORD_SUPPORTER_ID, DISCORD_STATUS_CHANNEL, DISCORD_INVITE_LINK, DISCORD_PREFIX, WHITELIST, LOG_WHITELIST, LOG_MYSQL, ANNOUNCE_LOG_IN_OUT, DISCORD_INGAME_CHANNEL, mysql_callback, _L, getConfig, sortFunction, registerChatCmd, invokeChatCmd, canSplit, DISCORD_ADMINCALL_CHANNEL } from 'mr-functions';
let WhitelistUpdate;
var CurrentOnlineUsers = [];
var WhiteList = [];
var msg = [];
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
	if (message.channel.id === DISCORD_INGAME_CHANNEL) {
		set_message();
	}
});
alt.on('playerConnect', (player) => {
	alt.emitClient(player, 'mr-core:discord:set_discord_app_id', DISCORD_APP_ID);
});
alt.onClient('teleportToMarker', (player, coords) => {
	mysql_callback('SELECT users.id AS ID, rank.can_tp AS CAN_TP FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
		if (result[0] > 0){
			if (result[1].CAN_TP == "yes"){
				player.pos = coords;
			}
		}
	});
})
registerChatCmd("tp2wp", (player) => {
	mysql_callback('SELECT users.id AS ID, rank.can_tp AS CAN_TP FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
		if (result[0] > 0){
			if (result[1].CAN_TP == "yes"){
				alt.emitClient(player, 'teleportToMarker');
			}
		}
	});
});
registerChatCmd("tp", (player, args) => {
	mysql_callback('SELECT users.id AS ID, rank.can_tp AS CAN_TP FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
		if (result[0] > 0){
			if (result[1].CAN_TP == "yes"){
				let posX = "";
				let posY = "";
				let posZ = "";
				if (args.length == 3){
					posX = args[0];
					posY = args[1];
					posZ = args[2];
				}
				else{
					if (canSplit(args[0], ",")){
						let pos = args[0].split(",");
						if (pos.length == 3){
							posX = pos[0];
							posY = pos[1];
							posZ = pos[2];
						}
						else{
							const foundPlayers = alt.Player.all.filter((p) => p.name === args[0]);
							if (foundPlayers && foundPlayers.length > 0) {
								posX = foundPlayers[0].pos.x;
								posY = foundPlayers[0].pos.y;
								posZ = foundPlayers[0].pos.z;
							}
							else
								return false;
						}
					}
					else
						return false;
				}
				if (posX.length > 0 && posY.length > 0 && posZ.length > 0){
					posX = parseFloat(posX.trim().replace(",",""));
					posY = parseFloat(posY.trim().replace(",",""));
					posZ = parseFloat(posZ.trim().replace(",",""));
					if (!isNaN(posX) && !isNaN(posY) && !isNaN(posZ)){
						let position = new alt.Vector3(posX, posY, posZ)
						player.pos = position;
					}
					else{
						const foundPlayers = alt.Player.all.filter((p) => p.name === args[0]);
						if (foundPlayers && foundPlayers.length > 0) {
							let position = new alt.Vector3(foundPlayers[0].pos.x, foundPlayers[0].pos.y, foundPlayers[0].pos.z)
							player.pos = position;
						}
						else
							return false;
					}
				}
				else
					return false;
			}
			else
				return false;
		}
		else
			return false;
	});
});
registerChatCmd("calladmin", (player, args) => {
	mysql_callback('SELECT username FROM users WHERE id = ?', [player.id], function(result){
		if (result[0] > 0){
			let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
			server.channels.cache.get(DISCORD_ADMINCALL_CHANNEL).send("<@&" + DISCORD_ADMIN_ID + "> <@&" + DISCORD_MOD_ID + "> <@&" + DISCORD_SUPPORTER_ID + ">\r\n" + _L("need_help", [result[1].username]));
			set_message();
		}
	});
});
alt.onClient('mr-core:discord:msgtodiscord', async (player, msg) => {
	mysql_callback('SELECT username, rank FROM users WHERE id = ?', [player.id], function(result){
		if (result[0] > 0){
			if (msg[0] === "/"){
				msg = msg.trim().slice(1);
				if (msg.length>0){
					if (canSplit(msg, " ")){
						let args = msg.split(" ");
						let cmd = args.shift();
						invokeChatCmd(player, cmd, args);
					}
					else
						invokeChatCmd(player, msg, "");
				}
				else
					return false;
			}
			else{
				let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
				let channel = server.channels.cache.get(DISCORD_INGAME_CHANNEL);
				let ColorId = server.roles.cache.get(DISCORD_CITIZEN_ID).hexColor;
				if (result[1].rank == "supporter")
					ColorId = server.roles.cache.get(DISCORD_SUPPORTER_ID).hexColor;
				if (result[1].rank == "moderator")
					ColorId = server.roles.cache.get(DISCORD_MOD_ID).hexColor;
				if (result[1].rank == "admin")
					ColorId = server.roles.cache.get(DISCORD_ADMIN_ID).hexColor;
				let Embed = new EmbedBuilder().setColor(ColorId).setAuthor({ name: result[1].username }).setDescription(msg);
				channel.send({ embeds: [Embed] });
				set_message();
			}
		}
	});
});
alt.onClient('mr-core:discord:set_help_tp', async (player) => {
	mysql_callback('SELECT users.id AS ID, rank.can_tp AS CAN_TP FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
		if (result[0] > 0){
			if (result[1].CAN_TP == "yes")
				alt.emitClient(player, 'mr-core:discord:set_help_tp', 'yes');
			else
				alt.emitClient(player, 'mr-core:discord:set_help_tp', 'no');
		}
		else
			alt.emitClient(player, 'mr-core:discord:set_help_tp', 'no');
	});
});
alt.onClient('mr-core:discord:loadmessages', async (player) => {
	let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
	msg = [];
	await server.channels.cache.get(DISCORD_INGAME_CHANNEL).messages.fetch({ limit: 50 }).then(messages => {
		messages.forEach(message => {
			server.members.fetch(message.author.id).then(member => {
				if (message.embeds.length > 0 && message.author.bot == true)
					msg.push([message.createdTimestamp, message.embeds[0].author.name, message.embeds[0].description, message.embeds[0].hexColor]);
				else if (message.content.length > 0)
						msg.push([message.createdTimestamp, message.author.username, message.content, member.displayHexColor]);
			});
		});
	});
	msg.sort(sortFunction);
	alt.emitClient(player, "mr-core:discord:setmessages",  msg);
});
function set_message(){
	alt.emitAllClients('mr-core:discord:getmessages');
}
//chat ende
alt.on('playerDisconnect', async (player) => {
	let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
	let playerid = player.id;
	if (ANNOUNCE_LOG_IN_OUT=="true"){
		server.channels.cache.get(DISCORD_STATUS_CHANNEL).send(_L("leaved", [getDiscordNameById(playerid)]));
	}
	await mysql_callback("UPDATE users SET id = ? WHERE dsid = ?", [-1, getDiscordById(playerid)], function(result){
		if (result[0] > 0 && LOG_MYSQL=="true"){
			console.log(playerid);
			console.log(getDiscordNameById(playerid));
			console.log(CurrentOnlineUsers);
		}

	});
	if (getOnlineUsersById(playerid) > -1)
		CurrentOnlineUsers.splice(getOnlineUsersById(playerid), 1);
});
alt.onClient('mr-core:discord:token', async (player, token) => {
	let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
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
			player.kick(_L("discord_error"));
		}
		else if (error.request){
			console.log(error.request);
			player.kick(_L("discord_error"));
		}
		else{
			console.log('Error', error.message);
			player.kick(_L("discord_error"));
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
	CurrentOnlineUsers.push({id: player.id, dsid: request.data.id, username: request.data.username});
	if (ANNOUNCE_LOG_IN_OUT=="true"){
		server.channels.cache.get(DISCORD_STATUS_CHANNEL).send(_L("joined", [getDiscordNameById(player.id)]));
	}
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
			let isMod = member.roles.cache.has(DISCORD_MOD_ID);
			let isSupporter = member.roles.cache.has(DISCORD_SUPPORTER_ID);
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
					let rank = "citizen";
					if (isAdmin)
						rank = "admin";
					else if (isMod)
						rank = "moderator";
					else if (isSupporter)
						rank = "supporter";
					else
						rank = "citizen";
					mysql_callback('UPDATE users SET rank="' + rank + '" WHERE dsid = ?', [member.user.id], function(result2){
						if (result2[0] > 0 && LOG_MYSQL=="true")
							alt.log(_L("log_update_user",[member.user.username]));
					});
				}
			});
		});
	});
}
function getIdByDiscord(dsid){
	let key;
	for (key in CurrentOnlineUsers){
		if (CurrentOnlineUsers[key].dsid == dsid)
			return CurrentOnlineUsers[key].id;
	}
	return -1;
}
function getDiscordNameById(id){
	let key;
	for (key in CurrentOnlineUsers){
		if (CurrentOnlineUsers[key].id == id)
			return CurrentOnlineUsers[key].username;
	}
	return -1;
}
function getDiscordById(id){
	let key;
	for (key in CurrentOnlineUsers){
		if (CurrentOnlineUsers[key].id == id)
			return CurrentOnlineUsers[key].dsid;
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
alt.on('resourceStart', async () => {
    discordClient.login(DISCORD_TOKEN).then(() => refreshWhitelist());
});