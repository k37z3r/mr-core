import * as alt from "alt";
import fs from "fs";
import { _L, get_dsid, mysql_callback, mysql_select_while_cb, get_prefix, get_suffix } from 'mr-functions';
var plugin_array = [];
var path = "resources/mr-phone/client/html/plugins";
var language_array = [_L("no_open_apps"), _L("description_snake"), _L("highscore"), _L("score"), _L("game_over"), _L("install"), _L("uninstall"), _L("open"), _L("call_ringtone"), _L("sms_ringtone"), _L("whatsapp_ringtone"), _L("whatsapp_msg_ringtone"), _L("email_ringtone"), _L("volume"), _L("keytones"), _L("listen_touched"), _L("see_touched"), _L("background_image"), _L("factory_defaults"), _L("do_you_have_defaults"), _L("untouchable_apps"), _L("yes"), _L("no"), _L("discord_msg_ringtone")];
var is_calling = [];
var conferences = [];
let voiceChannels = [];
fs.readdir(path, function(err, files){
    if (err)
        console.log(err.message);
    else{
        files.forEach(function(file){
            plugin_array.push(file);
        });
    }
});
function create_call(caller, called){
    is_calling.push(caller);
    is_calling.push(called);
    let c = [];
    c.push(caller);
    c.push(called);
    conferences.push(c);
    alt.emitClient(called, 'mr-core:phone:phone:callin', caller);
}
function accept_call(caller, called){
    for(let i=0;i<conferences.length;i++){
        if (conferences[i][0] == caller && conferences[i][1] == called){
            let newVoiceChannel = new alt.VoiceChannel(false, 1);
            newVoiceChannel.setMeta("conference", `${conferences[i]}`);
            newVoiceChannel.addPlayer(caller);
            newVoiceChannel.addPlayer(called);
            player.setMeta("voiceChannel", newVoiceChannel);
            voiceChannels.push(newVoiceChannel);
        }
    }
}
alt.onClient('mr-core:phone:callout', async (player, number) => {
    get_dsid(player, function(caller){
        if (caller[0] > 0){
            mysql_callback('SELECT phone.phone_number FROM phone WHERE phone.dsid = ?', [caller[1]], function(res){
                if (res[0] > 0){
                    let playerList = alt.Player.all;
                    playerList.forEach((called_player) => {
                        mysql_callback('SELECT phone.dsid FROM phone WHERE phone.phone_number = ?', [number], function(res2){
                            if (res[0] > 0){
                                mysql_callback('SELECT users.id FROM users WHERE users.dsid = ?', [res2[1].dsid], function(res3){
                                    if (res3[1].id == -1){
                                        //nicht erreichbar
                                    }
                                    else{
                                        if (called_player.id == res[1].id){
                                            if (is_calling.indexOf(called_player) == -1){
                                                create_call(player, called_player);
                                            }
                                            else{
                                                //besetzt
                                            }
                                        }
                                    }
                                });
                            }
                        });
                    });
                }
            });
        }
    });
});
alt.onClient('mr-core:phone:get_scripts', player => {
    alt.emitClient(player, 'mr-core:phone:set_scripts', plugin_array);
    alt.emitClient(player, 'mr-core:phone:set_language', language_array);
    get_dsid(player, function(result){
        if (result[0] > 0){
            mysql_callback('SELECT * FROM phone WHERE phone.dsid = ?', [result[1]], function(res){
                if (res[0] < 1){
                    let phone_num = parseInt(get_prefix() + "" + get_suffix());
                    mysql_callback('SELECT phone.dsid FROM phone WHERE phone.phone_number = ?', [phone_num], function(res1){
                        if (res1[0] == 0){
                            mysql_callback("INSERT INTO phone SET ?", {dsid: result[1], phone_number: phone_num, imei: Math.round((Math.random() * 1000000000000000) + 1000000000000000)}, function(result){});
                        }
                        else{
                            mysql_select_while_cb('SELECT phone.phone_number FROM phone', "", function(res2){
                                let numbers = [];
                                for (let i=0; i<res2[1].length; i++){
                                    numbers.push(console.log(res2[1][i].phone_number));
                                }
                                let count = 1;
                                while(count > 0){
                                    let phone_num = parseInt(get_prefix() + "" + get_suffix());
                                    if (numbers.indexOf(phone_num) == -1){
                                        mysql_callback("INSERT INTO phone SET ?", {dsid: result[1], phone_number: phone_num, imei: Math.round((Math.random() * 1000000000000000) + 1000000000000000)}, function(result){});
                                        break;
                                    }
                                }
                            });
                        }
                    });
                }
            });
        }
    });
});
