import * as alt from "alt";
import fs from "fs";
import { _L, get_dsid, mysql_callback, mysql_select_while_cb } from 'mr-functions';
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
    alt.emitClient(called, 'mr-core:phone:callin', caller);
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
alt.onClient('mr-phone:get_scripts', player => {
    alt.emitClient(player, 'mr-phone:set_scripts', plugin_array);
    alt.emitClient(player, 'mr-phone:set_language', language_array);
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
function get_suffix(){
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
function get_prefix(){
    let prefix = [205, 251, 256, 334, 907, 403, 780, 264, 480, 520, 602, 623, 928, 501, 870, 604, 778, 209, 341, 369, 408, 424, 442, 510, 530, 559, 626, 627, 628, 650, 657, 661, 669, 707, 747, 752, 764, 805, 831, 951, 242, 246, 268, 284, 340, 345, 441, 473, 649, 664, 670, 758, 787, 809, 868, 869, 876, 303, 719, 720, 970, 203, 475, 860, 959, 302, 202, 767, 305, 321, 352, 386, 407, 561, 754, 786, 813, 850, 863, 904, 941, 954, 229, 404, 470, 478, 678, 706, 770, 912, 905, 671, 808, 208, 217, 224, 309, 312, 331, 464, 618, 630, 708, 773, 815, 847, 872, 219, 317, 765, 812, 319, 515, 563, 641, 712, 316, 620, 785, 913, 270, 502, 606, 859, 310, 312, 323, 562, 225, 318, 337, 504, 985, 207, 204, 227, 240, 301, 410, 443, 667, 339, 351, 413, 508, 617, 774, 781, 857, 978, 231, 248, 278, 313, 517, 586, 616, 679, 734, 810, 906, 947, 989, 218, 302, 507, 612, 651, 763, 952, 228, 601, 662, 314, 417, 557, 573, 636, 660, 816, 975, 406, 308, 402, 702, 775, 506, 603, 201, 609, 732, 856, 908, 973, 505, 212, 315, 347, 516, 518, 607, 646, 716, 718, 845, 914, 931, 252, 336, 704, 828, 910, 919, 980, 701, 216, 234, 283, 330, 419, 440, 513, 567, 614, 740, 937, 405, 580, 918, 289, 416, 519, 613, 647, 705, 807, 714, 949, 503, 541, 971, 215, 267, 412, 445, 484, 570, 610, 717, 724, 814, 835, 878, 902, 939, 418, 438, 514, 819, 401, 909, 916, 619, 760, 858, 935, 415, 818, 925, 306, 843, 864, 605, 784, 423, 615, 731, 865, 901, 931, 210, 214, 254, 281, 361, 409, 469, 512, 682, 713, 737, 806, 817, 830, 832, 903, 915, 936, 940, 956, 972, 979, 385, 435, 801, 802, 304, 434, 540, 571, 703, 757, 804, 206, 253, 360, 425, 509, 564, 262, 414, 608, 715, 920, 307, 867, 163, 177, 178, 160, 170, 171, 175, 162, 172, 173, 174, 176, 179];
    let x =Math.round(Math.random() * (prefix.length-1));
    return parseInt(prefix[x]);
}
