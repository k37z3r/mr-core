import * as alt from 'alt';
async function getOAuthToken(DISCORD_APP_ID) {
    try {
        const token = await alt.Discord.requestOAuth2Token(DISCORD_APP_ID);
        alt.emitServer('bao:discord:token', token);
    } catch (e) {
        alt.logError(e);
    }
}
alt.onServer('bao:discord:set_discord_app_id', (APP_ID) => {
	getOAuthToken(APP_ID);
});