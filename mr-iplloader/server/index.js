import * as alt from 'alt-server';
import { getConfig } from 'mr-functions';
alt.onClient("mr-iplloader:entry", (player, coords) => {
	player.spawn(coords.x, coords.y, coords.z, coords.w);
});