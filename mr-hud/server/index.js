import * as alt from 'alt';
import { mysql_callback } from 'mr-functions';
alt.onClient('mr-core:hud:updateHUD', async (player) => {
    mysql_callback('SELECT users.id AS UID, users.username AS USERNAME, users.hunger AS HUNGER, users.thirsty AS THIRSTY, users.toilet AS TOILET, users.temperatur AS TEMPERATUR, users.stress AS STRESS, users.isdead AS ISDEAD, users.cash as CASH, users.bank AS BANK, users.bmoney AS BMONEY FROM users WHERE users.id = ?', [player.id], function(result){
        if (result[0] > 0){
            alt.emitClient(player, 'mr-core:hud:set_hud', { uid: result[1].UID, username: result[1].USERNAME, hunger: result[1].HUNGER, thirsty: result[1].THIRSTY, toilet: result[1].TOILET, temperatur: result[1].TEMPERATUR, stress: result[1].STRESS, isdead: result[1].ISDEAD, cash: result[1].CASH, bank: result[1].BANK, bmoney: result[1].BMONEY });
        }
    });
});