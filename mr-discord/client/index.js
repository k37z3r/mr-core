import * as alt from 'alt';
import * as native from 'natives';
import { _L } from 'mr-functions';
const view = new alt.WebView("http://resource/client/html/index.html");
const lang_array = [_L("teleport_to_coords"), _L("teleport_to_player"), _L("call_admin")];
async function getOAuthToken(DISCORD_APP_ID) {
    try {
        const token = await alt.Discord.requestOAuth2Token(DISCORD_APP_ID);
        alt.emitServer('mr-core:discord:token', token);
    } catch (e) {
        alt.logError(e);
    }
}
native.freezeEntityPosition(alt.Player.local.scriptID, true);
alt.onServer('mr-core:discord:set_discord_app_id', (APP_ID) => {
	getOAuthToken(APP_ID);
    alt.showCursor(true);
	native.triggerScreenblurFadeIn(0);
});
alt.onServer('mr-core:discord:loggedin', (success) =>{
	if (success == "success"){
		native.triggerScreenblurFadeOut(0);
		alt.showCursor(false);
		native.freezeEntityPosition(alt.Player.local.scriptID, false);
	}
});
alt.on("connectionComplete", () => {
	alt.emitServer('mr-core:discord:loadmessages');
});
alt.onServer('mr-core:discord:setmessages', (messages) =>{
	view.emit("setMessages", messages);
});
view.on('mr-core:discord:sendmessage', sendmessage);
function sendmessage(msg){
	msg = msg.replace('<div><br></div>', '');
	alt.emitServer('mr-core:discord:msgtodiscord', msg);
}
alt.onServer('mr-core:discord:getmessages', (messages) =>{
	alt.emitServer("mr-core:discord:loadmessages");
});
alt.onServer('mr-core:discord:set_help_tp', (rule) => {
	view.emit('set_help_tp', rule);
});
view.on('mr-core:discord:close_chat', close_chat);
let opened = false;
alt.on("keyup", (keycode) => {
	switch (keycode) {
		case 84: // Key: T
			if (!opened && alt.gameControlsEnabled()){
				open_chat();
			}
		break;
		case 27: // Key: escape
			if (opened && !alt.gameControlsEnabled()){
				close_chat();
			}
		break;
	}
});
function open_chat(){
	alt.emitServer('mr-core:discord:set_help_tp');
	opened = true;
	view.emit("openChat", lang_array);
	alt.toggleGameControls(false);
	alt.showCursor(true);
	alt.toggleRmlControls(true);
	view.focus();
}
function close_chat(){
	opened = false;
	view.emit("closeChat");
	alt.toggleGameControls(true);
	alt.showCursor(false);
	alt.toggleRmlControls(false);
	view.unfocus();
}