import * as alt from 'alt-server';
import { getConfig } from 'mr-functions';
alt.onClient("mr-iplloader:entry", (player, coords) => {
	let position = new alt.Vector3(coords.x, coords.y, coords.z);
	player.pos = position;
});