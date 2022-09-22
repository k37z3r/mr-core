import * as alt from 'alt';
import axios from 'axios';
import fs from 'fs';
import util from 'util';
import Discord from 'discord.js';
import dotenv from 'dotenv';
import mysql from 'mysql';
const { Client, GatewayIntentBits } = Discord;
const discordClient = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, ] });
import { _CONFIG } from '../config/config.js';
import { _L } from '../language/language.js';
let WhitelistUpdate;
var CurrentOnlineUsers = [];
var WhiteList = [];
//-----------------auszulagernde funktion
function mysql_callback(sql, cb){
	con.query(sql, (err, rows, fields) => {
		if (err){
			throw err;
			process.exit(0);
		}
		return cb(rows[0].COUNTER);
	});
}
//-------------------------
dotenv.config();
const neededValues = [
    'MYSQL_HOST',
    'MYSQL_USER',
    'MYSQL_PASSWORD',
    'MYSQL_DATABASE',
	'DISCORD_APP_ID',
	'DISCORD_SERVER_ID',
	'DISCORD_TOKEN',
	'DISCORD_CITIZEN_ID',
	'DISCORD_ADMIN_ID',
	'DISCORD_MOD_ID',
	'DISCORD_SUPPORTER_ID',
	'DISCORD_STATUS_CHANNEL'
];
neededValues.forEach((value) => {
    if (!(value in process.env)) {
        alt.log(`the needed key '${value}' is missing in .env file`);
        process.exit(0);
    }
});
var con = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});

discordClient.on('guildMemberUpdate', (oldMember, newMember) => {
	refreshWhitelist();
});
discordClient.on("messageCreate", (message) => {
	if (!message.content.startsWith(_CONFIG.DISCORD_PREFIX) || message.author.bot)
		return;

	if (message.content.startsWith(`${_CONFIG.DISCORD_PREFIX}whitelist`)) {
		let userlist='';
		message.guild.roles.cache.get(process.env.DISCORD_CITIZEN_ID).members.forEach(m=>{
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
	alt.emitClient(player, 'mr-core:discord:set_discord_app_id',  process.env.DISCORD_APP_ID);
});
alt.on('playerDisconnect', (player) => {
	let server = discordClient.guilds.cache.get(process.env.DISCORD_SERVER_ID);
	//server.channels.cache.get(process.env.DISCORD_STATUS_CHANNEL).send(_L("leaved", [getDiscordNameById(player)]));
	if (getOnlineUsersById(player.id) > -1)
		CurrentOnlineUsers.splice(getOnlineUsersById(player.id), 1);
	con.query("UPDATE users SET id = NULL WHERE id = " + con.escape(player.id), function(err, rows, fields){
		if (err){
			throw err.code;
			process.exit(0);
		}
	});
});
alt.onClient('mr-core:discord:token', async (player, token) => {
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
	mysql_callback('SELECT count(*) AS COUNTER FROM users WHERE dsid=' + con.escape(request.data.id), function(result){
		if(result == 0){
			con.query("INSERT INTO users (id, dsid, username) VALUES (" + con.escape(player.id) + ", " + con.escape(request.data.id) + ", " + con.escape(request.data.username) + ")", function(err, rows, fields){
				if (err){
					throw err.code;
					process.exit(0);
				}
			});
		}
		else{
			con.query("UPDATE users SET id = " + con.escape(player.id) + " WHERE dsid = " + con.escape(request.data.id), function(err, rows, fields){
				if (err){
					throw err.code;
					process.exit(0);
				}
			});
		}
	});
	let server = discordClient.guilds.cache.get(process.env.DISCORD_SERVER_ID);
	//server.channels.cache.get(process.env.DISCORD_STATUS_CHANNEL).send(_L("joined", [getDiscordNameById(player)]));
});

export function refreshWhitelist(){
	let server = discordClient.guilds.cache.get(process.env.DISCORD_SERVER_ID);
	server.members.fetch().then(members => {
		members.forEach(member =>{
			let isCitizen = member.roles.cache.has(process.env.DISCORD_CITIZEN_ID);
			let sf_citizen = (element) => element == member.user.id;
			let index = WhiteList.findIndex(sf_citizen);
			let isAdmin = member.roles.cache.has(process.env.DISCORD_ADMIN_ID);
			let sf_Admin = (element) => element == member.user.id;
			let isMod = member.roles.cache.has(process.env.DISCORD_MOD_ID);
			let sf_Mod = (element) => element == member.user.id;
			let isSupporter = member.roles.cache.has(process.env.DISCORD_SUPPORTER_ID);
			let sf_Supporter = (element) => element == member.user.id;
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
			mysql_callback('SELECT count(*) AS COUNTER FROM users WHERE dsid=' + con.escape(member.user.id), function(result){
				if(result > 0){
					if (!isAdmin){
						con.query('UPDATE users SET isAdmin="no" WHERE dsid=' + con.escape(member.user.id), (err, rows, fields) => {
							if (err){
								throw err;
								process.exit(0);
							}
						});
					}
					else if (isAdmin){
						con.query('UPDATE users SET isAdmin="yes" WHERE dsid=' + con.escape(member.user.id), (err, rows, fields) => {
							if (err){
								throw err;
								process.exit(0);
							}
						});
					}

					if (!isMod){
						con.query('UPDATE users SET isMod="no" WHERE dsid=' + con.escape(member.user.id), (err, rows, fields) => {
							if (err){
								throw err;
								process.exit(0);
							}
						});
					}
					else if (isMod){
						con.query('UPDATE users SET isMod="yes" WHERE dsid=' + con.escape(member.user.id), (err, rows, fields) => {
							if (err){
								throw err;
								process.exit(0);
							}
						});
					}

					if (!isSupporter){
						con.query('UPDATE users SET isSupporter="no" WHERE dsid=' + con.escape(member.user.id), (err, rows, fields) => {
							if (err){
								throw err;
								process.exit(0);
							}
						});
					}
					else if (isSupporter){
						con.query('UPDATE users SET isSupporter="yes" WHERE dsid=' + con.escape(member.user.id), (err, rows, fields) => {
							if (err){
								throw err;
								process.exit(0);
							}
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
    discordClient.login(process.env.DISCORD_TOKEN).then(() => refreshWhitelist());
});
