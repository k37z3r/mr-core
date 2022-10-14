import * as alt from "alt";
import { getConfig } from 'mr-functions';
alt.onClient("mr-iplloader:playerisconnected", (player) => {
	let CONFIG = {
		DancingPedAtNightclub: getConfig("Load_NightClubDancingPedAtNightclub"),
	};
	alt.emitClient(player, 'mr-iplloader:loadped',  CONFIG);
});