import * as alt from 'alt';
import * as native from 'natives';
import { getOAuthToken, sendmessage, open_chat, close_chat, tpToWaypoint, getConfig } from 'mr-functions';
const view = new alt.WebView("http://resource/client/html/index.html");
native.freezeEntityPosition(alt.Player.local.scriptID, true);
alt.onServer('mr-core:discord:set_discord_app_id', (APP_ID) => {
    getOAuthToken(APP_ID);
    alt.showCursor(true);
    native.triggerScreenblurFadeIn(0);
});
alt.onServer('mr-core:discord:loggedin', (data) =>{
    if (data.status == "success"){
        native.triggerScreenblurFadeOut(0);
        alt.showCursor(false);
        native.freezeEntityPosition(alt.Player.local.scriptID, false);
    }
});
alt.on('mr-core:discord:openchat', (lang_array) =>{
    view.emit("mr-core:discord:openChat", lang_array);
    view.focus();
});
alt.on('mr-core:discord:closechat', () =>{
    view.emit("mr-core:discord:closeChat");
    view.unfocus();
});
alt.on("connectionComplete", () => {
    alt.emitServer('mr-core:discord:loadmessages');
});
alt.onServer('mr-core:discord:setmessages', (messages) =>{
    view.emit("mr-core:discord:setMessages", messages);
});
view.on('mr-core:discord:sendmessage', sendmessage);
alt.onServer('mr-core:discord:getmessages', (messages) =>{
    alt.emitServer("mr-core:discord:loadmessages");
});
alt.onServer('mr-core:discord:set_help', (rule) => {
    view.emit('mr-core:discord:set_help', rule);
});
alt.onServer('mr-core:discord:teleportToMarker', tpToWaypoint);
alt.onServer('mr-core:discord:close_chat', () => {
    opened = false;
    close_chat();
});
view.on('mr-core:discord:close_chat', () => {
    opened = false;
    close_chat();
});
let opened = false;
alt.on("keyup", (keycode) => {
    switch (keycode) {
        case getConfig("DISCORD_OPEN_CHAT"):
            if (!opened && alt.gameControlsEnabled()){
                opened = true;
                open_chat();
            }
        break;
        case getConfig("DISCORD_CLOSE_CHAT"): // Key: escape
            if (opened && !alt.gameControlsEnabled()){
                opened = false;
                close_chat();
            }
        break;
    }
});