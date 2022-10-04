import * as alt from "alt";
import fs from "fs";
import { _L } from 'mr-functions';
var plugin_array = [];
var path = "resources/mr-phone/client/html/plugins";
var language_array = [_L("no_open_apps"), _L("description_snake"), _L("highscore"), _L("score"), _L("game_over"), _L("install"), _L("uninstall"), _L("open"), _L("call_ringtone"), _L("sms_ringtone"), _L("whatsapp_ringtone"), _L("whatsapp_msg_ringtone"), _L("email_ringtone"), _L("volume"), _L("keytones"), _L("listen_touched"), _L("see_touched"), _L("background_image"), _L("factory_defaults"), _L("do_you_have_defaults"), _L("untouchable_apps"), _L("yes"), _L("no"), _L("discord_msg_ringtone")];
fs.readdir(path, function(err, files){
	if (err)
		console.log(err.message);
	else{
		files.forEach(function(file){
			plugin_array.push(file);
		});
	}
});
alt.onClient('mr-phone:get_scripts', player => {
    alt.emitClient(player, 'mr-phone:set_scripts', plugin_array);
    alt.emitClient(player, 'mr-phone:set_language', language_array);
});