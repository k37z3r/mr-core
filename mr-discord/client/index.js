import * as alt from 'alt';
import * as native from 'natives';
import { _L } from 'mr-functions';
const view = new alt.WebView("http://resource/client/html/index.html");
const lang_array = [_L("teleport_to_coords"), _L("teleport_to_player"), _L("call_admin"), _L("teleport_to_waypoint")];
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
alt.onServer('mr-core:discord:set_help', (rule) => {
    view.emit('set_help', rule);
});
alt.onServer('teleportToMarker', tpToWaypoint)
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
    alt.emitServer('mr-core:discord:set_help');
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
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
let res = false
let finalZ
async function tpToWaypoint() {
    res = false
    const waypoint = native.getFirstBlipInfoId(8)
    if (native.doesBlipExist(waypoint)) {
        const coords = native.getBlipInfoIdCoord(waypoint)
        let getZ = coords.z
        while (!res || getZ > 1000) {
            getZ = getZ + 20
            const finalCoords = new alt.Vector3(coords.x, coords.y, getZ)
            result(finalCoords)
            await delay(1)
        }
        if (res) {
            alt.emitServer('teleportToMarker', finalZ)
        }
        alt.FocusData.clearFocus()
    }
}
function result(coords) {
    alt.FocusData.overrideFocus(coords)
    const result = native.getGroundZFor3dCoord(coords.x, coords.y,   coords.z, undefined, undefined, undefined)
    if (result[0]) {
        res = true
        finalZ = new alt.Vector3(coords.x, coords.y, result[1] + 1)
    }
}
