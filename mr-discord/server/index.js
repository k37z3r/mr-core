import * as alt from 'alt';
import axios from 'axios';
import fs from 'fs';
import util from 'util';
import Discord from 'discord.js'
const { Client, GatewayIntentBits } = Discord;
const discordClient = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, ] });
import { _CONFIG } from '../config/config.js';
import { _L } from '../language/language.js';
let WhitelistUpdate;
var onlineusers = [];
var WhiteList = [];
var AdminList = [];
var ModList = [];
var SupporterList = [];

discordClient.on('guildMemberUpdate', (oldMember, newMember) => {
	refreshWhitelist();
});
discordClient.on("messageCreate", (message) => {
	if (!message.content.startsWith(_CONFIG.DISCORD_PREFIX) || message.author.bot)
		return;

	if (message.content.startsWith(`${_CONFIG.DISCORD_PREFIX}whitelist`)) {
		let userlist='';
		message.guild.roles.cache.get(_CONFIG.DISCORD_CITIZEN_ID).members.forEach(m=>{
			let sf_citizen = (element) => element == m.user.id;
			let index = WhiteList.findIndex(sf_citizen);
			userlist += '\n' + m.user.username;
		});
		message.channel.send(_L("discord_whitelist", [userlist]));
	}
	else if (message.content.startsWith(`${_CONFIG.DISCORD_PREFIX}altv`)) {
		message.channel.send(_L("discord_altv"));
	}
	else if (message.content.startsWith(`${_CONFIG.DISCORD_PREFIX}help`)) {
		message.channel.send(_L("discord_help"));
	}
});
alt.on('playerConnect', (player) => {
	alt.emitClient(player, 'bao:discord:set_discord_app_id',  _CONFIG.DISCORD_APP_ID);
});
alt.on('playerDisconnect', (player) => {
	let server = discordClient.guilds.cache.get(_CONFIG.DISCORD_SERVER_ID);
	server.channels.cache.get(_CONFIG.DISCORD_STATUS_CHANNEL).send(_L("leaved", [getDiscordNameById(player)]));
	if (getOnlineUsersById(player) > -1)
		onlineusers.splice(getOnlineUsersById(player), 1);
});
alt.onClient('bao:discord:token', async (player, token) => {
	const request = await axios.get('https://discordapp.com/api/users/@me', {
		'headers': {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': `Bearer ${token}`
		}
	}).catch((err) => {
		return null;
	});
    if (!request || !request.data || !request.data.id || !request.data.username) {
        player.kick(_L("discord_needed"));
        return;
    }
	if (WhiteList.indexOf(request.data.id) === -1){
        player.kick(_L("no_whitelisted", [_CONFIG.DISCORD_INVITE_LINK]));
        return;
	}
	onlineusers.push({id: player, dsid: request.data.id, username: request.data.username});

	let server = discordClient.guilds.cache.get(_CONFIG.DISCORD_SERVER_ID);
	server.channels.cache.get(_CONFIG.DISCORD_STATUS_CHANNEL).send(_L("joined", [getDiscordNameById(player)]));
});

export function refreshWhitelist(){
	let server = discordClient.guilds.cache.get(_CONFIG.DISCORD_SERVER_ID);
	server.members.fetch().then(members => {
		members.forEach(member =>{
			let isCitizen = member.roles.cache.has(_CONFIG.DISCORD_CITIZEN_ID);
			let sf_citizen = (element) => element == member.user.id;
			let index = WhiteList.findIndex(sf_citizen);
			let isAdmin = member.roles.cache.has(_CONFIG.DISCORD_ADMIN_ID);
			let sf_Admin = (element) => element == member.user.id;
			let Adminindex = AdminList.findIndex(sf_Admin);
			let isMod = member.roles.cache.has(_CONFIG.DISCORD_MOD_ID);
			let sf_Mod = (element) => element == member.user.id;
			let Modindex = ModList.findIndex(sf_Mod);
			let isSupporter = member.roles.cache.has(_CONFIG.DISCORD_SUPPORTER_ID);
			let sf_Supporter = (element) => element == member.user.id;
			let Supporterindex = SupporterList.findIndex(sf_Supporter);
			if (_CONFIG.WHITELIST){
				if (!isCitizen){
					if (index > -1){
						WhiteList.splice(index, 1);
						alt.log(_L("log_whitelist_del",[member.user.username]));
						if (getIdByDiscord(member.user.id) != -1){
							getIdByDiscord(member.user.id).kick(_L("no_whitelisted", [_CONFIG.DISCORD_INVITE_LINK]));
							if (getOnlineUsersByDsid(member.user.id) != -1)
								WhiteList.splice(getOnlineUsersByDsid(member.user.id), 1);
						}
					}
				}
				else if (isCitizen){
					if (index <= -1){
						WhiteList.push(member.user.id);
						alt.log(_L("log_whitelist_add",[member.user.username]));
					}
				}
			}
			else{
				if (index <= -1){
					WhiteList.push(member.user.id);
					alt.log(_L("log_whitelist_add",[member.user.username]));
				}
			}

			if (!isAdmin){
				if (Adminindex > -1){
					AdminList.splice(adminindex, 1);
					alt.log(_L("log_adminlist_del",[member.user.username]));
				}
			}
			else if (isAdmin){
				if (Adminindex <= -1){
					AdminList.push(member.user.id);
					alt.log(_L("log_adminlist_add",[member.user.username]));
				}
			}

			if (!isMod){
				if (Modindex > -1){
					ModList.splice(Modindex, 1);
					alt.log(_L("log_modlist_del",[member.user.username]));
				}
			}
			else if (isMod){
				if (Modindex <= -1){
					ModList.push(member.user.id);
					alt.log(_L("log_modlist_add",[member.user.username]));
				}
			}

			if (!isSupporter){
				if (Supporterindex > -1){
					SupporterList.splice(Supporterindex, 1);
					alt.log(_L("log_supporterlist_del",[member.user.username]));
				}
			}
			else if (isSupporter){
				if (Supporterindex <= -1){
					SupporterList.push(member.user.id);
					alt.log(_L("log_supporterlist_add",[member.user.username]));
				}
			}
		});
	});
}
export function getIdByDiscord(dsid){
  for (let i=0; i< onlineusers.length; i++){
    if (dsid == onlineusers[i]["dsid"])
      return onlineusers[i]["id"];
  }
  return -1;
}
export function getDiscordById(id){
  for (let i=0; i< onlineusers.length; i++){
    if (id == onlineusers[i]["id"])
      return onlineusers[i]["dsid"];
  }
  return -1;
}
function getDiscordNameById(id){
  for (let i=0; i< onlineusers.length; i++){
    if (id == onlineusers[i]["id"])
      return onlineusers[i]["username"];
  }
  return -1;
}
function getOnlineUsersByDsid(dsid){
  for (let i=0; i< onlineusers.length; i++){
    if (dsid == onlineusers[i]["dsid"])
      return i;
  }
  return -1;
}
function getOnlineUsersById(id){
  for (let i=0; i< onlineusers.length; i++){
    if (id == onlineusers[i]["id"])
      return i;
  }
  return -1;
}
export function isAdmin(id){
	let server = discordClient.guilds.cache.get(_CONFIG.DISCORD_SERVER_ID);
	server.members.fetch().then(members => {
		members.forEach(member =>{
			if (getDiscordById(id) != -1){
				let sf_Admin = (element) => element == getDiscordById(id);
				let Adminindex = AdminList.findIndex(sf_Admin);
				return (Adminindex > -1)?true:false;
			}
			else
				return false;
		});
	});
}
export function isMod(id){
	let server = discordClient.guilds.cache.get(_CONFIG.DISCORD_SERVER_ID);
	server.members.fetch().then(members => {
		members.forEach(member =>{
			if (getDiscordById(id) != -1){
				let sf_Mod = (element) => element == getDiscordById(id);
				let Modindex = ModList.findIndex(sf_Admin);
				return (Modindex > -1)?true:false;
			}
			else
				return false;
		});
	});
}
export function isSupporter(id){
	let server = discordClient.guilds.cache.get(_CONFIG.DISCORD_SERVER_ID);
	server.members.fetch().then(members => {
		members.forEach(member =>{
			if (getDiscordById(id) != -1){
				let sf_Supporter = (element) => element == getDiscordById(id);
				let Supporterindex = ModList.findIndex(sf_Supporter);
				return (Supporterindex > -1)?true:false;
			}
			else
				return false;
		});
	});
}
WhitelistUpdate = alt.setInterval(refreshWhitelist, 300000);
alt.on('resourceStart', () => {
    discordClient.login(_CONFIG.DISCORD_TOKEN).then(() => refreshWhitelist());
});