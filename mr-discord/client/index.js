import * as alt from 'alt';
import * as native from 'natives';
let view;
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
