import * as alt from "alt";
import { getConfig } from 'mr-functions';
alt.onClient("mr-iplloader:playerisconnected", (player) => {
    alt.emitClient(player, 'mr-iplloader:loadped',  getConfig("Load_NightClubDancingPedAtNightclub"));
});
