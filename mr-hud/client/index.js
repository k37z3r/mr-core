import * as alt from 'alt';
import * as native from 'natives';
import { getConfig } from 'mr-functions';
const view = new alt.WebView("http://resource/client/html/index.html");
let UpdateHud;
let UpdateRunning;
let hudopened = false;
alt.on("keyup", (keycode) => {
    switch (keycode) {
        case 73: // Key: I
            if (!hudopened && alt.gameControlsEnabled()){
                view.emit("openhud");
                hudopened = true;
            }
            else if (hudopened && alt.gameControlsEnabled()){
                view.emit("closehud");
                hudopened = false;
            }
        break;
    }
});
alt.onServer('vehicle:setVehicleIndicatorLights', (vehicle, turnSignal, toggle) => {
    native.setVehicleIndicatorLights(vehicle.scriptID, turnSignal, toggle);
});
alt.onServer('mr-core:hud:set_hud', (results) => {
    let pisdead = native.isPlayerDead(alt.Player.local.scriptID);
    if ((results.hunger < 20 || results.thirsty < 20 || results.toilet > 80 || results.temperatur < 20 || results.temperatur > 80 || results.isdead == "yes" || pisdead) && !hudopened){
        view.emit("openhud");
        hudopened = true;
    }
    view.emit('set_hud', {uid: results.uid, username: results.username, hunger: results.hunger, thirsty: results.thirsty, toilet: results.toilet, temperatur: results.temperatur, stress: results.stress, cash: results.cash, bank: results.bank, bmoney: results.bmoney});
});
function doUpdateHud(){
    alt.emitServer('mr-core:hud:updateHUD');
}
function doUpdateRunning(){
    let pisdead = native.isPlayerDead(alt.Player.local.scriptID);
    let parmour = native.getPedArmour(alt.Player.local.scriptID);
    let phealth = (native.getEntityHealth(alt.Player.local.scriptID)/2);
    let pstamina = (100 - native.getPlayerSprintStaminaRemaining(alt.Player.local.scriptID));
    let poxygen = (native.getPlayerUnderwaterTimeRemaining(alt.Player.local.scriptID) * 20);
    if ((phealth < 20 || poxygen < 20 || pisdead) && !hudopened){
        view.emit("openhud");
        hudopened = true;
    }
    view.emit('set_running', {health: phealth, running: pstamina, oxygen: poxygen, shield: parmour});
}
UpdateRunning = alt.setInterval(doUpdateRunning, 1000);
UpdateHud = alt.setInterval(doUpdateHud, 1000*getConfig("STATUS_INTERVAL"));