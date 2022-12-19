import * as alt from 'alt-server';
import mysql from 'mysql';
import dotenv from 'dotenv';
import { _CONFIG } from '../config/config.js';
import { translations } from '../language/language.js';
dotenv.config();
const neededValues = [
    'MYSQL_HOST',
	'MYSQL_PORT',
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
	'DISCORD_STATUS_CHANNEL',
	'DISCORD_INGAME_CHANNEL',
	'DISCORD_INVITE_LINK',
	'DISCORD_PREFIX',
	'WHITELIST',
	'LOG_WHITELIST',
	'LOG_MYSQL',
	'ANNOUNCE_LOG_IN_OUT',
	'DISCORD_ADMINCALL_CHANNEL',
	'MINAGE',
    	'LANGUAGE',
   	'SECRETPID'
];
neededValues.forEach((value) => {
    if (!(value in process.env)) {
        alt.log(`the needed key '${value}' is missing in .env file`);
        process.exit(0);
    }
});
const con = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
});


let cmdHandlers = {};
export function registerChatCmd(cmd, callback) {
	cmd = cmd.toLowerCase();
	if (cmdHandlers[cmd] !== undefined)
		return false;
	else
		cmdHandlers[cmd] = callback;
}
export var canSplit = function(str, token){
    return (str || '').split(token).length > 1;         
}
export function invokeChatCmd(player, cmd, args) {
	cmd = cmd.toLowerCase();
	const callback = cmdHandlers[cmd];
	if (callback)
		callback(player, args);
	else
		return false;
}
export async function mysql_callback(msql, values, cb){
	if (msql.substr(0,6) == "INSERT"){
		var connection = con.query(msql, values, function(err, result){
			if (err){
				throw err;
				process.exit(0);
			}
			let numrows = 0;
			numrows = result.affectedRows;
			return cb([numrows, ((result[0]==undefined)?null:result[0])]);
		});
	}
	else if (msql.substr(0,6) == "UPDATE"){
		con.query(msql, values, function(err, result){
			if (err){
				throw err;
				process.exit(0);
			}
			let numrows = 0;
			numrows = result.changedRows;
			return cb([numrows, ((result[0]==undefined)?null:result[0])]);
		});
	}
	else{
		var connection = con.query(msql, [values], function(err, result){
			if (err){
				throw err;
				process.exit(0);
			}
			let numrows = 0;
			if (msql.substr(0,6) == "SELECT")
				numrows = result.length;
			else
				numrows = result.affectedRows;
			return cb([numrows, ((result[0]==undefined)?null:result[0])]);
		});
	}
}
export async function mysql_select_while_cb(msql, values, cb){
	var connection = con.query(msql, [values], function(err, result){
		if (err){
			throw err;
			process.exit(0);
		}
		let numrows = result.length;
		return cb([numrows, ((result[0]==undefined)?null:result)]);
	});
}
export const DISCORD_APP_ID = process.env.DISCORD_APP_ID;
export const DISCORD_SERVER_ID = process.env.DISCORD_SERVER_ID;
export const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
export const DISCORD_CITIZEN_ID = process.env.DISCORD_CITIZEN_ID;
export const DISCORD_ADMIN_ID = process.env.DISCORD_ADMIN_ID;
export const DISCORD_MOD_ID = process.env.DISCORD_MOD_ID;
export const DISCORD_SUPPORTER_ID = process.env.DISCORD_SUPPORTER_ID;
export const DISCORD_STATUS_CHANNEL = process.env.DISCORD_STATUS_CHANNEL;
export const DISCORD_INGAME_CHANNEL = process.env.DISCORD_INGAME_CHANNEL;
export const DISCORD_INVITE_LINK = process.env.DISCORD_INVITE_LINK;
export const DISCORD_PREFIX = process.env.DISCORD_PREFIX;
export const WHITELIST = process.env.WHITELIST;
export const LOG_WHITELIST = process.env.LOG_WHITELIST;
export const LOG_MYSQL = process.env.LOG_MYSQL;
export const ANNOUNCE_LOG_IN_OUT = process.env.ANNOUNCE_LOG_IN_OUT;
export const DISCORD_ADMINCALL_CHANNEL = process.env.DISCORD_ADMINCALL_CHANNEL;
export const MINAGE = process.env.MINAGE;
export const SECRETPID = process.env.SECRETPID;
export function getConfig(value){
	for(var key in _CONFIG) {
		if(key == value) {
			return _CONFIG[key];
		}
	}
	return 0;
}
export function _L(trans = "", opts="", lang = _CONFIG.LANGUAGE){
	var i = 0;
	var str;
	for (var key in translations){
		if (key == lang){
			str = translations[key][trans];
			str = (str || key+'.'+trans);
			for (var opt in opts){
				var search = "%s_" + opt;
				str = str.replaceAll(search, opts[opt])
			}
		return str;
		i++;
		}
	}
	if (i==0)
		return lang+'.'+trans;
}
export function get_dsid(disid, cb){
	var msql = 'SELECT * FROM users WHERE id = ?';
	var connection = con.query(msql, [disid.id], function(err, result){
		if (err){
			throw err;
			process.exit(0);
		}
		let numrows = 0;
		numrows = result.length;
		return cb([numrows, ((result[0]==undefined)?null:result[0].dsid)]);
	});
}
export function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
