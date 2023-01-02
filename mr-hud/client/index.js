import * as alt from 'alt';
import * as native from 'natives';
import { getConfig, doUpdateHud, doUpdateRunning } from 'mr-functions';
const view = new alt.WebView("http://resource/client/html/index.html");
let UpdateHud;
let UpdateRunning;
var hudopened = false;
alt.on('mr-core:hud:set_running', (data) =>{
    view.emit('mr-core:hud:set_running', data);
});
alt.on('mr-core:hud:openhud', () =>{
    view.emit("mr-core:hud:openhud");
    hudopened = true;
});
alt.on("keyup", (keycode) => {
    switch (keycode) {
        case getConfig("HUD_OPEN_CLOSE"):
            if (!hudopened && alt.gameControlsEnabled()){
                view.emit("mr-core:hud:openhud");
                alt.emit('mr-core:functions:hudopened', true);
                hudopened = true;
            }
            else if (hudopened && alt.gameControlsEnabled()){
                view.emit("mr-core:hud:closehud");
                alt.emit('mr-core:functions:hudopened', false);
                hudopened = false;
            }
        break;
    }
});
alt.onServer('mr-core:hud:set_hud', (results) => {
    let pisdead = native.isPlayerDead(alt.Player.local.scriptID);
    if ((results.hunger < 20 || results.thirsty < 20 || results.toilet > 80 || results.temperatur < 20 || results.temperatur > 80 || results.isdead == "yes" || pisdead) && !hudopened){
        view.emit("mr-core:hud:openhud");
        alt.emit('mr-core:functions:hudopened', true);
        hudopened = true;
    }
    view.emit('mr-core:hud:set_hud', {uid: results.uid, username: results.username, hunger: results.hunger, thirsty: results.thirsty, toilet: results.toilet, temperatur: results.temperatur, stress: results.stress, cash: results.cash, bank: results.bank, bmoney: results.bmoney});
});
UpdateRunning = alt.setInterval(doUpdateRunning, 1000);
UpdateHud = alt.setInterval(doUpdateHud, 1000*getConfig("STATUS_INTERVAL"));