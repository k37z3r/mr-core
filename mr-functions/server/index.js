import * as alt from 'alt-server';
import mysql from 'mysql';
import dotenv from 'dotenv';
import axios from 'axios';
import { _CONFIG } from '../config/config.js';
import { translations } from '../language/language.js';
dotenv.config();
const neededValues = [
    'MYSQL_HOST',
    'MYSQL_PORT',
    'MYSQL_USER',
    'MYSQL_PASSWORD',
    'MYSQL_DATABASE',
    'DISCORD_OWNER_ID',
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
    'SECRETPID',
    'HUNGER_RATE',
    'THIRSTY_RATE',
    'UPDATE_INTERVAL'
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
let UpdateValues;
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
export const HUNGER_RATE = process.env.HUNGER_RATE;
export const THIRSTY_RATE = process.env.THIRSTY_RATE;
export const UPDATE_INTERVAL = process.env.UPDATE_INTERVAL;
export const DISCORD_OWNER_ID = process.env.DISCORD_OWNER_ID;
function doUpdateValues(){
    alt.Player.all.forEach((player) => {
        mysql_callback('SELECT users.username AS UNAME, users.id AS UID, users.hunger AS HUNGER, users.thirsty AS THIRSTY, users.isdead AS ISDEAD FROM users WHERE users.id = ?', [player.id], function(result){
            if (result[0] > 0){
                if (result[1].ISDEAD == "no" && result[1].UID != -1){
                    let newhunger, newisdead, newthirsty;
                    if (result[1].HUNGER < HUNGER_RATE)
                        newhunger = 0;
                    else
                        newhunger = result[1].HUNGER - HUNGER_RATE;
                    if (result[1].THIRSTY < THIRSTY_RATE)
                        newthirsty = 0;
                    else
                        newthirsty = result[1].THIRSTY - THIRSTY_RATE;
                    if (newthirsty <= 0 || newhunger <= 0)
                        newisdead = "yes";
                    else
                        newisdead = "no";
                    mysql_callback('UPDATE users SET users.hunger = ?, users.thirsty = ?, users.isdead = ? WHERE id = ?', [newhunger, newthirsty, newisdead, result[1].UID], function(result2){
                        if (result2[0] == 1 && LOG_MYSQL=="true")
                        alt.log(_L("LOG_UPDATE_USER",[result[1].UNAME]));
                    });
                }
            }
        });
    });
}
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
    var msql = 'SELECT * FROM users WHERE users.id = ?';
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
    if (a[0] === b[0])
        return 0;
    else
        return (a[0] < b[0]) ? -1 : 1;
}
export async function doPostRequest() {
    let wl = "no";
    if (WHITELIST == "true")
        wl = "yes";
    else
        wl = "no";
    var postdata = {
        minage: MINAGE,
        whitelist: wl,
        language: getConfig(LANGUAGE),
        framework: "mr-core",
        voice: "Utilize alt:V builtin Voice",
        chat: "ingame Discord",
        servername: alt.getServerConfig().name,
        serverip: alt.getServerConfig().host,
        serverport: alt.getServerConfig().port,
        gamemode: alt.getServerConfig().gamemode,
        platform: "altv",
        onlineplayers: alt.Player.all.length,
        maxplayers: alt.getServerConfig().players,
        secretToken: alt.getServerConfig().secretSID,
        secretToken2: SECRETPID
    };
    var headers = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }
    await axios.post('https://gta-spot.com/announce.php', postdata, headers)
    .then(response => {
        if (response.data == "ok")
            alt.log("data transfer success");
        else
            alt.log(response.data);
    })
    .catch(error => {
        if (error.response)
            alt.log(error.response.status);
        else if (error.request)
            alt.log(error.request);
        else
            alt.log(error.message);
    });
}
export function getIdByDiscord(dsid, CurrentOnlineUsers){
    let key;
    for (key in CurrentOnlineUsers){
        if (CurrentOnlineUsers[key].dsid == dsid)
            return CurrentOnlineUsers[key].id;
    }
    return -1;
}
export function getDiscordNameById(id, CurrentOnlineUsers){
    let key;
    for (key in CurrentOnlineUsers){
        if (CurrentOnlineUsers[key].id == id)
            return CurrentOnlineUsers[key].username;
    }
    return -1;
}
export function getDiscordById(id, CurrentOnlineUsers){
    let key;
    for (key in CurrentOnlineUsers){
        if (CurrentOnlineUsers[key].id == id)
            return CurrentOnlineUsers[key].dsid;
    }
    return -1;
}
export function getOnlineUsersByDsid(dsid, CurrentOnlineUsers){
    for (let i=0; i< CurrentOnlineUsers.length; i++){
        if (dsid == CurrentOnlineUsers[i].dsid)
            return i;
    }
    return -1;
}
export function getOnlineUsersById(id, CurrentOnlineUsers){
    for (let i=0; i< CurrentOnlineUsers.length; i++){
        if (id == CurrentOnlineUsers[i].id)
            return i;
    }
    return -1;
}
export function refreshWhitelist(){
    alt.emit('mr-core:discord:refreshWL');
}
export function get_suffix(){
    let x = Math.round((Math.random() * 5) + 5);
    let start_end_suffix = [1,2,3,4,5,6,7,8,9]
    let between_suffix = [0,1,2,3,4,5,6,7,8,9];
    let suffix = "";
    for (let i = 0; i < x; i++){
        if (i==0 || i == (x-1))
            suffix += start_end_suffix[Math.round(Math.random() * 8)];
        else
            suffix += between_suffix[Math.round(Math.random() * 9)];
    }
    return parseInt(suffix);
}
export function get_prefix(){
    let prefix = [205, 251, 256, 334, 907, 403, 780, 264, 480, 520, 602, 623, 928, 501, 870, 604, 778, 209, 341, 369, 408, 424, 442, 510, 530, 559, 626, 627, 628, 650, 657, 661, 669, 707, 747, 752, 764, 805, 831, 951, 242, 246, 268, 284, 340, 345, 441, 473, 649, 664, 670, 758, 787, 809, 868, 869, 876, 303, 719, 720, 970, 203, 475, 860, 959, 302, 202, 767, 305, 321, 352, 386, 407, 561, 754, 786, 813, 850, 863, 904, 941, 954, 229, 404, 470, 478, 678, 706, 770, 912, 905, 671, 808, 208, 217, 224, 309, 312, 331, 464, 618, 630, 708, 773, 815, 847, 872, 219, 317, 765, 812, 319, 515, 563, 641, 712, 316, 620, 785, 913, 270, 502, 606, 859, 310, 312, 323, 562, 225, 318, 337, 504, 985, 207, 204, 227, 240, 301, 410, 443, 667, 339, 351, 413, 508, 617, 774, 781, 857, 978, 231, 248, 278, 313, 517, 586, 616, 679, 734, 810, 906, 947, 989, 218, 302, 507, 612, 651, 763, 952, 228, 601, 662, 314, 417, 557, 573, 636, 660, 816, 975, 406, 308, 402, 702, 775, 506, 603, 201, 609, 732, 856, 908, 973, 505, 212, 315, 347, 516, 518, 607, 646, 716, 718, 845, 914, 931, 252, 336, 704, 828, 910, 919, 980, 701, 216, 234, 283, 330, 419, 440, 513, 567, 614, 740, 937, 405, 580, 918, 289, 416, 519, 613, 647, 705, 807, 714, 949, 503, 541, 971, 215, 267, 412, 445, 484, 570, 610, 717, 724, 814, 835, 878, 902, 939, 418, 438, 514, 819, 401, 909, 916, 619, 760, 858, 935, 415, 818, 925, 306, 843, 864, 605, 784, 423, 615, 731, 865, 901, 931, 210, 214, 254, 281, 361, 409, 469, 512, 682, 713, 737, 806, 817, 830, 832, 903, 915, 936, 940, 956, 972, 979, 385, 435, 801, 802, 304, 434, 540, 571, 703, 757, 804, 206, 253, 360, 425, 509, 564, 262, 414, 608, 715, 920, 307, 867, 163, 177, 178, 160, 170, 171, 175, 162, 172, 173, 174, 176, 179];
    let x =Math.round(Math.random() * (prefix.length-1));
    return parseInt(prefix[x]);
}
UpdateValues = alt.setInterval(doUpdateValues, UPDATE_INTERVAL*60*1000);