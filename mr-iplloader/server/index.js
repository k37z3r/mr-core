import * as alt from 'alt-server';
alt.onClient("mr-iplloader:entry", (player, coords) => {
    let position = new alt.Vector3(coords.x, coords.y, coords.z);
    player.pos = position;
});
