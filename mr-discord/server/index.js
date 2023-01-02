import * as alt from 'alt';
import axios from 'axios';
import Discord from 'discord.js';
const { Client, GatewayIntentBits, EmbedBuilder } = Discord;
const discordClient = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers, ] });
import { DISCORD_OWNER_ID, DISCORD_APP_ID, DISCORD_SERVER_ID, DISCORD_TOKEN, DISCORD_CITIZEN_ID, DISCORD_ADMIN_ID, DISCORD_MOD_ID, DISCORD_SUPPORTER_ID, DISCORD_STATUS_CHANNEL, DISCORD_INVITE_LINK, DISCORD_PREFIX, WHITELIST, LOG_WHITELIST, LOG_MYSQL, ANNOUNCE_LOG_IN_OUT, DISCORD_INGAME_CHANNEL, mysql_callback, _L, sortFunction, registerChatCmd, invokeChatCmd, canSplit, DISCORD_ADMINCALL_CHANNEL, getIdByDiscord, getDiscordNameById, getOnlineUsersByDsid, getDiscordById, refreshWhitelist } from 'mr-functions';
var CurrentOnlineUsers = [];
var WhiteList = [];
var msg = [];
let UpdateWhiteList;
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
        message.channel.send(_L("DISCORD_WHITELIST", [userlist]));
    }
    else if (message.content.startsWith(`${DISCORD_PREFIX}altv`)) {
        message.channel.send(_L("DISCORD_ALTV"));
    }
    else if (message.content.startsWith(`${DISCORD_PREFIX}help`)) {
        message.channel.send(_L("DISCORD_HELP"));
    }
    if (message.channel.id === DISCORD_INGAME_CHANNEL) {
        alt.emitAllClients('mr-core:discord:getmessages');
    }
});
alt.on('playerConnect', (player) => {
    alt.emitClient(player, 'mr-core:discord:set_discord_app_id', DISCORD_APP_ID);
});
alt.onClient('mr-core:discord:teleportToMarker', (player, coords) => {
    mysql_callback('SELECT users.id AS ID, rank.can_tp AS CAN_TP FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
        if (result[0] > 0){
            if (result[1].CAN_TP == "yes"){
                player.pos = coords;
                alt.emitClient(player, 'mr-core:discord:close_chat');
            }
        }
    });
})
registerChatCmd("tp2wp", (player) => {
    mysql_callback('SELECT users.id AS ID, rank.can_tp AS CAN_TP FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
        if (result[0] > 0){
            if (result[1].CAN_TP == "yes"){
                alt.emitClient(player, 'mr-core:discord:teleportToMarker');
                alt.emitClient(player, 'mr-core:discord:close_chat');
            }
        }
    });
});
registerChatCmd("tp2player", (player, args) => {
    mysql_callback('SELECT users.id AS ID, rank.can_tp AS CAN_TP FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
        if (result[0] > 0){
            if (result[1].CAN_TP == "yes"){
                let playername = args.join(' ');
                const foundPlayers = alt.Player.all.filter((p) => p.name === playername);
                if (foundPlayers && foundPlayers.length > 0) {
                    let position = new alt.Vector3(foundPlayers[0].pos.x, foundPlayers[0].pos.y, foundPlayers[0].pos.z)
                    player.pos = position;
                    alt.emitClient(player, 'mr-core:discord:close_chat');
                }
            }
        }
    });
});
registerChatCmd("spawnvehicle", (player, args) => {
    mysql_callback('SELECT users.id AS ID, rank.can_spawn_vehicle AS SPAWN_VEH FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
        if (result[0] > 0){
            if (result[1].SPAWN_VEH == "yes"){
                mysql_callback('SELECT blacklisted AS B_LIST FROM vehicles WHERE hashname = ?', [args[0]], function(result2){
                    if (result2[0] > 0){
                        if (result2[1].B_LIST == "no"){
                            let vehicle = new alt.Vehicle(args[0], player.pos.x+1, player.pos.y+1, player.pos.z, 0, 0, 0);
                            let pvehs = player.getMeta("vehicles");
                            if (pvehs.length >= 3) {
                                let toDestroy = pvehs.pop();
                                if (toDestroy != null) {
                                    toDestroy.destroy();
                                }
                            }
                            pvehs.unshift(vehicle);
                            player.setMeta("vehicles", pvehs);
                            alt.emitClient(player, 'mr-core:discord:close_chat');
                        }
                    }
                });
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
                if (args.length == 3 && !isNaN(parseFloat(args[0].trim().replace(",",""))) && !isNaN(parseFloat(args[1].trim().replace(",",""))) && !isNaN(parseFloat(args[2].trim().replace(",","")))){
                    posX = args[0];
                    posY = args[1];
                    posZ = args[2];
                }
                else{
                    if (canSplit(args[0], ",")){
                        let pos = args[0].split(",");
                        if (pos.length == 3 && !isNaN(parseFloat(pos[0].trim().replace(",",""))) && !isNaN(parseFloat(pos[1].trim().replace(",",""))) && !isNaN(parseFloat(pos[2].trim().replace(",","")))){
                            posX = pos[0];
                            posY = pos[1];
                            posZ = pos[2];
                        }
                    }
                }
                if (posX.length > 0 && posY.length > 0 && posZ.length > 0){
                    posX = parseFloat(posX.trim().replace(",",""));
                    posY = parseFloat(posY.trim().replace(",",""));
                    posZ = parseFloat(posZ.trim().replace(",",""));
                    if (!isNaN(posX) && !isNaN(posY) && !isNaN(posZ)){
                        let position = new alt.Vector3(posX, posY, posZ)
                        player.pos = position;
                        alt.emitClient(player, 'mr-core:discord:close_chat');
                    }
                }
            }
        }
    });
});
registerChatCmd("calladmin", (player, args) => {
    mysql_callback('SELECT users.username FROM users WHERE users.id = ?', [player.id], function(result){
        if (result[0] > 0){
            let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
            server.channels.cache.get(DISCORD_ADMINCALL_CHANNEL).send("<@&" + DISCORD_ADMIN_ID + "> <@&" + DISCORD_MOD_ID + "> <@&" + DISCORD_SUPPORTER_ID + ">\r\n" + _L("NEED_HELP", [result[1].username]));
            alt.emitAllClients('mr-core:discord:getmessages');
        }
    });
});
alt.onClient('mr-core:discord:msgtodiscord', async (player, msg) => {
    mysql_callback('SELECT users.username, users.rank FROM users WHERE users.id = ?', [player.id], function(result){
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
                if (result[1].rank == "admin" || result[1].rank == "owner")
                    ColorId = server.roles.cache.get(DISCORD_ADMIN_ID).hexColor;
                let Embed = new EmbedBuilder().setColor(ColorId).setAuthor({ name: result[1].username }).setDescription(msg);
                channel.send({ embeds: [Embed] });
                alt.emitAllClients('mr-core:discord:getmessages');
            }
        }
    });
});
alt.onClient('mr-core:discord:set_help', async (player) => {
    mysql_callback('SELECT users.id AS ID, rank.can_tp AS CAN_TP, rank.can_spawn_vehicle AS SPAWN_VEH FROM `users` INNER JOIN rank ON users.rank=rank.rank WHERE users.id = ?', [player.id], function(result){
        if (result[0] > 0){
            let allow_tp, allow_sv;
            if (result[1].CAN_TP == "yes")
                allow_tp = "yes";
            else
                allow_tp = "no";
            if (result[1].SPAWN_VEH == "yes")
                allow_sv = "yes";
            else
                allow_sv = "no";
            alt.emitClient(player, 'mr-core:discord:set_help', {can_tp: allow_tp, can_sv: allow_sv});
        }
        else
            alt.emitClient(player, 'mr-core:discord:set_help', {can_tp: "no", can_sv: "no"});
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
//chat ende
alt.on('playerDisconnect', async (player) => {
    let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
    let playerid = player.id;
    let playername = getDiscordNameById(playerid, CurrentOnlineUsers);
    if (ANNOUNCE_LOG_IN_OUT=="true"){
        server.channels.cache.get(DISCORD_STATUS_CHANNEL).send(_L("LEAVED", [playername]));
    }
    await mysql_callback("UPDATE users SET users.id = ? WHERE users.dsid = ?", [-1, getDiscordById(playerid, CurrentOnlineUsers)], function(result){
        if (result[0] > 0 && LOG_MYSQL=="true"){
            alt.log(_L("LOG_USER_LEAVED",[playername]));
        }

    });
    if (getOnlineUsersById(playerid, CurrentOnlineUsers) > -1)
        CurrentOnlineUsers.splice(getOnlineUsersById(playerid, CurrentOnlineUsers), 1);
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
            player.kick(_L("DISCORD_ERROR"));
        }
        else if (error.request){
            console.log(error.request);
            player.kick(_L("DISCORD_ERROR"));
        }
        else{
            console.log('Error', error.message);
            player.kick(_L("DISCORD_ERROR"));
        }
        return null;
    });
    if (!request || !request.data || !request.data.id || !request.data.username) {
        player.kick(_L("DISCORD_NEEDED"));
        return;
    }
    if (WhiteList.indexOf(request.data.id) === -1){
        player.kick(_L("NO_WHITELISTED", [DISCORD_INVITE_LINK]));
        return;
    }
    mysql_callback('SELECT users.id FROM users WHERE users.dsid = ?', [request.data.id], function(result){
        if (result[0] == 0){
            mysql_callback("INSERT INTO users.users SET ?", {id: player.id, dsid: request.data.id, username: request.data.username}, function(result2){
                if (result2[0] == 1 && LOG_MYSQL=="true")
                    alt.log(_L("LOG_INSERT_USER",[request.data.username]));
            });
        }
        else{
            mysql_callback("UPDATE users SET users.id = ? WHERE users.dsid = ?", [player.id, request.data.id], function(result2){
                if (result2[0] == 1 && LOG_MYSQL=="true")
                    alt.log(_L("LOG_UPDATE_USER",[request.data.username]));
            });
        }
    });
    CurrentOnlineUsers.push({id: player.id, dsid: request.data.id, username: request.data.username});
    if (ANNOUNCE_LOG_IN_OUT=="true"){
        server.channels.cache.get(DISCORD_STATUS_CHANNEL).send(_L("JOINED", [getDiscordNameById(player.id, CurrentOnlineUsers)]));
    }
    alt.emitClient(player, "mr-core:discord:loggedin", { status: "success", clientID: request.data.id });
    /*
    wss://gateway.discord.gg/?v=6&encoding=json
    let client = discordClient.user;
    client.setPresence({
        status: 'idle',
        activity: {
            name: 'mr-core',
            type: 'PLAYING'
        }
    });*/
});
alt.on('mr-core:discord:refreshWL', async () =>{
    let server = discordClient.guilds.cache.get(DISCORD_SERVER_ID);
    await server.members.fetch().then(members => {
        members.forEach(member =>{
            let isCitizen = member.roles.cache.has(DISCORD_CITIZEN_ID);
            let sf_citizen = (element) => element == member.user.id;
            let index = WhiteList.findIndex(sf_citizen);
            let isOwner = (member.id == DISCORD_OWNER_ID ? true : false);
            let isAdmin = member.roles.cache.has(DISCORD_ADMIN_ID);
            let isMod = member.roles.cache.has(DISCORD_MOD_ID);
            let isSupporter = member.roles.cache.has(DISCORD_SUPPORTER_ID);
            if (WHITELIST=="true"){
                if (!isCitizen){
                    if (index > -1){
                        WhiteList.splice(index, 1);
                        if (LOG_WHITELIST=="true")
                            alt.log(_L("LOG_WHITELIST_DEL",[member.user.username]));
                        if (getIdByDiscord(member.user.id, CurrentOnlineUsers) != -1){
                            getIdByDiscord(member.user.id, CurrentOnlineUsers).kick(_L("NO_WHITELISTED", [DISCORD_INVITE_LINK]));
                            if (getOnlineUsersByDsid(member.user.id, CurrentOnlineUsers) != -1)
                                WhiteList.splice(getOnlineUsersByDsid(member.user.id, CurrentOnlineUsers), 1);
                        }
                    }
                }
                else if (isCitizen){
                    if (index <= -1){
                        WhiteList.push(member.user.id);
                        if (LOG_WHITELIST=="true")
                            alt.log(_L("LOG_WHITELIST_ADD",[member.user.username]));
                    }
                }
            }
            else{
                if (index <= -1){
                    WhiteList.push(member.user.id);
                    if (LOG_WHITELIST=="true")
                        alt.log(_L("LOG_WHITELIST_ADD",[member.user.username]));
                }
            }
            mysql_callback('SELECT users.id FROM users WHERE users.dsid = ?', [member.user.id], function(result){
                if(result[0] > 0){
                    let rank = "citizen";
                    if (isOwner)
                        rank = "owner";
                    else if (isAdmin)
                        rank = "admin";
                    else if (isMod)
                        rank = "moderator";
                    else if (isSupporter)
                        rank = "supporter";
                    else
                        rank = "citizen";
                    mysql_callback('UPDATE users SET users.rank="' + rank + '" WHERE users.dsid = ?', [member.user.id], function(result2){
                        if (result2[0] > 0 && LOG_MYSQL=="true")
                            alt.log(_L("LOG_UPDATE_USER",[member.user.username]));
                    });
                }
            });
        });
    });
});
UpdateWhiteList = alt.setInterval(refreshWhitelist, 300000);
alt.on('resourceStart', async () => {
    await discordClient.login(DISCORD_TOKEN).then(() => refreshWhitelist());
    mysql_callback('UPDATE users SET users.id = ? WHERE users.id > ?', [-1, -1], function(result2){
        if (result2[0] == 1 && LOG_MYSQL=="true")
            alt.log(_L("LOG_RESET_LOGIN"));
    });
});