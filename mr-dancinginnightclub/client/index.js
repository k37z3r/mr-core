import * as alt from "alt";
import * as natives from 'natives';
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
export const RequestModel = async (modelHash, timeoutMs = 10000) => {
    return new Promise((resolve, reject) => {
        if (!natives.isModelValid(modelHash)) {
            reject(new Error(`Model does not exist: ${modelHash}`));
            return;
        }
        if (natives.hasModelLoaded(modelHash)) {
            resolve(true);
            return;
        }
        natives.requestModel(modelHash);
        const deadline = new Date().getTime() + timeoutMs;
        const inter = alt.setInterval(() => {
            if (natives.hasModelLoaded(modelHash)) {
                alt.clearInterval(inter);
                resolve(true);
            } else if (deadline < new Date().getTime()) {
                alt.clearInterval(inter);
                const error = `Loading failed for model: ${modelHash}`;
                alt.logError(error);
                reject(new Error(error));
            }
        }, 100);
    });
};
export const RequestAnimDict = async (Anim, timeoutMs = 10000) => {
	return new Promise((resolve, reject) => {
		if (natives.hasAnimDictLoaded(Anim)){
            resolve(true);
            return;
        }
		natives.requestAnimDict(Anim);
		const deadline = new Date().getTime() + timeoutMs;
        const inter = alt.setInterval(() => {
            if (natives.hasAnimDictLoaded(Anim)) {
                alt.clearInterval(inter);
                resolve(true);
            } else if (deadline < new Date().getTime()) {
                alt.clearInterval(inter);
                const error = `Loading failed for animation: ${Anim}`;
                alt.logError(error);
                reject(new Error(error));
            }
        }, 100);
    });
};
alt.on("connectionComplete", () => {
	alt.emitServer("mr-iplloader:playerisconnected");
});
alt.onServer('mr-iplloader:loadped', async (CONFIG) => {
	if (CONFIG.DancingPedAtNightclub){
		let modelList = ["a_m_y_vinewood_02", "a_f_y_vinewood_03", "a_m_y_vinewood_03", "a_f_y_vinewood_04", "a_m_y_vinewood_04", "a_f_y_vinewood_02", "a_m_y_vinewood_01", "a_f_y_vinewood_01", "a_m_y_vindouche_01", "g_f_y_vagos_01", "csb_undercover", "a_f_y_soucent_03", "a_m_y_skater_02", "a_m_y_skater_01", "a_m_m_skater_01", "a_f_y_skater_01", "s_f_y_shop_mid", "s_f_y_shop_low", "ig_screen_writer", "g_m_y_salvagoon_03", "s_f_y_hooker_01", "s_f_y_hooker_03", "s_f_y_hooker_02", "a_f_y_hipster_04", "a_m_y_hipster_03", "a_f_y_hipster_03", "a_m_y_hipster_02", "a_f_y_hipster_02", "a_f_y_hipster_01", "a_m_y_hipster_01", "a_m_y_hippy_01", "a_f_y_hippie_01", "a_f_y_genhot_01", "a_f_y_eastsa_03"];
		let pos = [{ x: -1599.286, y: -3014.479, z: -79.00606,  w: 74.99979 },{ x: -1599.256, y: -3012.859, z: -79.00606,  w: 89.9997 },{ x: -1599.485, y: -3011.013, z: -79.00606,  w: 99.99955 },{ x: -1599.478, y: -3009.316, z: -79.00606,  w: 109.9995 },{ x: -1598.276, y: -3010.419, z: -79.00606,  w: 89.99937 },{ x: -1598.178, y: -3012.107, z: -79.00606,  w: 94.99931 },{ x: -1597.81, y: -3013.999, z: -79.00606,  w: 64.99922 },{ x: -1596.136, y: -3014.376, z: -79.00606,  w: 64.99922 },{ x: -1596.532, y: -3012.257, z: -79.00606,  w: 84.99911 },{ x: -1597.38, y: -3009.078, z: -79.00606,  w: 84.99911 },{ x: -1596.245, y: -3010.349, z: -79.00606,  w: 94.99898 },{ x: -1594.98, y: -3011.497, z: -79.00606,  w: 74.99896 },{ x: -1594.685, y: -3013.496, z: -79.00606,  w: 89.99895 },{ x: -1594.415, y: -3009.547, z: -79.00606,  w: 94.99889 },{ x: -1593.241, y: -3011.182, z: -79.00606,  w: 94.99889 },{ x: -1593.164, y: -3013.143, z: -79.00606,  w: 69.99878 },{ x: -1593.243, y: -3014.435, z: -79.00606,  w: 69.99878 },{ x: -1593.338, y: -3009.497, z: -79.00606,  w: 99.99875 },{ x: -1597.302, y: -3013.429, z: -79.00606,  w: 89.99841 },{ x: -1597.293, y: -3011.11, z: -79.00606,  w: 89.99841 },{ x: -1595.858, y: -3012.948, z: -79.00606,  w: 89.99841 },{ x: -1594.718, y: -3012.382, z: -79.00606,  w: 84.99833 },{ x: -1592.485, y: -3011.958, z: -79.00606,  w: 104.9983 },{ x: -1592.1, y: -3009.135, z: -79.00606,  w: 104.9983 },{ x: -1594.456, y: -3010.849, z: -79.00606,  w: 74.99818 },{ x: -1594.935, y: -3014.76, z: -79.00606,  w: 79.99802 },{ x: -1593.958, y: -3012.06, z: -79.00606,  w: 79.99802 },{ x: -1592.025, y: -3014.925, z: -79.00606,  w: 74.99796 },{ x: -1592.057, y: -3013.273, z: -79.00606,  w: 74.99796 },{ x: -1597.023, y: -3015.123, z: -79.00606,  w: 84.99932 },{ x: -1596.166, y: -3011.476, z: -79.00606,  w: 119.999 },{ x: -1595.68, y: -3009.549, z: -79.00606,  w: 119.999 },{ x: -1592.181, y: -3010.726, z: -79.00606,  w: 119.999 },{ x: -1598.637, y: -3008.974, z: -79.00606,  w: 129.9987 },{ x: -1589.201, y: -3013.824, z: -79.00606,  w: 349.998 },{ x: -1588.086, y: -3012.85, z: -79.00606,  w: 139.9975 },{ x: -1589.525, y: -3011.373, z: -79.00606,  w: 104.9997 },{ x: -1589.588, y: -3009.793, z: -79.00606,  w: 134.9996 },{ x: -1590.238, y: -3016.211, z: -79.00606,  w: 64.99924 },{ x: -1612.493, y: -3008.006, z: -79.00598,  w: 0.0 },{ x: -1612.234, y: -3007.077, z: -79.00598,  w: 184.9996 },{ x: -1603.387, y: -3004.944, z: -79.00606,  w: 199.9994 },{ x: -1601.498, y: -3005.343, z: -79.00606,  w: 164.9993 },{ x: -1601.012, y: -3006.264, z: -79.00606,  w: 159.9992 },{ x: -1597.325, y: -3017.721, z: -79.00606,  w: 59.99892 },{ x: -1598.735, y: -3018.321, z: -79.00606,  w: 34.99891 },{ x: -1599.519, y: -3017.069, z: -79.00606,  w: 34.99886 },{ x: -1598.335, y: -3016.935, z: -79.00606,  w: 34.99886 },{ x: -1600.323, y: -3017.858, z: -79.00606,  w: 24.99882 },{ x: -1605.931, y: -3014.545, z: -77.79105,  w: 309.9981 },{ x: -1606.391, y: -3013.633, z: -77.79105,  w: 274.998 },/*{ x: -1606.21, y: -3011.844, z: -77.79105,  w: 254.9979 },{ x: -1606.034, y: -3010.969, z: -77.79105,  w: 254.9979 },{ x: -1605.556, y: -3012.632, z: -77.79105,  w: 279.9979 },{ x: -1605.393, y: -3011.575, z: -77.79105,  w: 264.9979 },{ x: -1605.247, y: -3013.838, z: -77.79105,  w: 309.9977 },{ x: -1588.297, y: -3017.595, z: -79.00606,  w: 49.99993 },{ x: -1589.377, y: -3017.98, z: -79.00606,  w: 9.999737 },{ x: -1586.512, y: -3013.608, z: -79.00606,  w: 109.9994 },{ x: -1586.575, y: -3014.707, z: -79.00606,  w: 84.99927 },{ x: -1591.812, y: -3016.253, z: -79.00606,  w: 79.9994 },{ x: -1597.269, y: -3009.916, z: -79.00606,  w: 139.9992 },{ x: -1595.497, y: -3010.56, z: -79.00606,  w: 89.99896 },{ x: -1594.243, y: -3014.202, z: -79.00606,  w: 89.99896 },{ x: -1592.819, y: -3014.009, z: -79.00606,  w: 89.99896 },{ x: -1593.165, y: -3012.437, z: -79.00606,  w: 89.99896 },{ x: -1593.301, y: -3010.349, z: -79.00606,  w: 89.99896 },{ x: -1597.35, y: -3011.214, z: -79.00606,  w: 89.99896 },{ x: -1598.791, y: -3013.354, z: -79.00606,  w: 89.99896 },{ x: -1598.803, y: -3011.52, z: -79.00606,  w: 89.99896 },{ x: -1599.409, y: -3010.063, z: -79.00606,  w: 89.99896 },{ x: -1594.033, y: -3010.641, z: -79.00606,  w: 89.99896 },{ x: -1586.844, y: -3007.437, z: -76.005,  w: 119.9996 },{ x: -1588.096, y: -3007.108, z: -76.005,  w: 219.9995 },{ x: -1587.767, y: -3008.194, z: -76.005,  w: 69.99921 },{ x: -1591.617, y: -3005.606, z: -76.005,  w: 184.9989 },{ x: -1590.441, y: -3005.738, z: -76.005,  w: 149.9988 },{ x: -1590.841, y: -3010.893, z: -76.005,  w: 99.99868 },{ x: -1590.943, y: -3013.203, z: -76.005,  w: 69.99854 },{ x: -1588.974, y: -3009.629, z: -76.005,  w: 104.9985 },{ x: -1589.04, y: -3010.499, z: -76.005,  w: 89.99847 },{ x: -1589.088, y: -3011.289, z: -76.005,  w: 59.99844 },{ x: -1589.014, y: -3014.441, z: -76.005,  w: 84.9984 },{ x: -1589.096, y: -3015.45, z: -76.005,  w: 84.9984 },{ x: -1598.902, y: -3002.512, z: -75.80515,  w: 169.9981 },{ x: -1596.829, y: -3002.128, z: -75.80515,  w: 179.9978 },{ x: -1595.684, y: -3002.082, z: -75.80515,  w: 179.9978 },{ x: -1594.913, y: -3002.999, z: -75.80515,  w: 129.9978 }*/];
		let animList = ["hi_dance_crowd_15_v2_female^1","hi_dance_crowd_15_v2_female^2","hi_dance_crowd_15_v2_female^3","hi_dance_crowd_15_v2_female^4","hi_dance_crowd_15_v2_female^5","hi_dance_crowd_15_v2_female^6","hi_dance_crowd_15_v2_male^1","hi_dance_crowd_15_v2_male^2","hi_dance_crowd_15_v2_male^3","hi_dance_crowd_15_v2_male^4","hi_dance_crowd_15_v2_male^5","hi_dance_crowd_15_v2_male^6","hi_dance_crowd_17_v1_female^1","hi_dance_crowd_17_v1_female^2","hi_dance_crowd_17_v1_female^3","hi_dance_crowd_17_v1_female^4","hi_dance_crowd_17_v1_female^5","hi_dance_crowd_17_v1_female^6","hi_dance_crowd_17_v1_male^1","hi_dance_crowd_17_v1_male^2","hi_dance_crowd_09_v1_female^1","hi_dance_crowd_17_v1_male^3","hi_dance_crowd_09_v1_female^2","hi_dance_crowd_17_v1_male^4","hi_dance_crowd_17_v1_male^5","hi_dance_crowd_09_v1_female^3","hi_dance_crowd_17_v1_male^6","hi_dance_crowd_17_v2_female^1","hi_dance_crowd_09_v1_female^4","hi_dance_crowd_17_v2_female^2","hi_dance_crowd_17_v2_female^3","hi_dance_crowd_09_v1_female^5","hi_dance_crowd_17_v2_female^4","hi_dance_crowd_17_v2_female^5","hi_dance_crowd_09_v1_female^6","hi_dance_crowd_17_v2_female^6","hi_dance_crowd_09_v1_male^1","hi_dance_crowd_17_v2_male^1","hi_dance_crowd_17_v2_male^2","hi_dance_crowd_09_v1_male^2","hi_dance_crowd_17_v2_male^3","hi_dance_crowd_17_v2_male^4","hi_dance_crowd_09_v1_male^3","hi_dance_crowd_17_v2_male^5","hi_dance_crowd_17_v2_male^6","hi_dance_crowd_09_v1_male^4","hi_dance_crowd_09_v1_male^5","hi_dance_crowd_09_v1_male^6","hi_dance_crowd_09_v2_female^1","hi_dance_crowd_09_v2_female^2","hi_dance_crowd_09_v2_female^3","hi_dance_crowd_09_v2_female^4","hi_dance_crowd_09_v2_female^5","hi_dance_crowd_09_v2_female^6","hi_dance_crowd_09_v2_male^1","hi_dance_crowd_09_v2_male^2","hi_dance_crowd_09_v2_male^3","hi_dance_crowd_09_v2_male^4","hi_dance_crowd_09_v2_male^5","hi_dance_crowd_09_v2_male^6","hi_dance_crowd_11_v1_female^1","hi_dance_crowd_11_v1_female^2","hi_dance_crowd_11_v1_female^3","hi_dance_crowd_11_v1_female^4","hi_dance_crowd_11_v1_female^5","hi_dance_crowd_11_v1_female^6","hi_dance_crowd_11_v1_male^1","hi_dance_crowd_11_v1_male^2","hi_dance_crowd_11_v1_male^3","hi_dance_crowd_11_v1_male^4","hi_dance_crowd_11_v1_male^5","hi_dance_crowd_11_v1_male^6","hi_dance_crowd_13_v2_female^1","hi_dance_crowd_13_v2_female^2","hi_dance_crowd_13_v2_female^3","hi_dance_crowd_13_v2_female^4","hi_dance_crowd_13_v2_female^5","hi_dance_crowd_13_v2_female^6","hi_dance_crowd_13_v2_male^1","hi_dance_crowd_13_v2_male^2","hi_dance_crowd_13_v2_male^3","hi_dance_crowd_13_v2_male^4","hi_dance_crowd_13_v2_male^5","hi_dance_crowd_13_v2_male^6","hi_dance_crowd_15_v1_female^1","hi_dance_crowd_15_v1_female^2","hi_dance_crowd_15_v1_female^3","hi_dance_crowd_15_v1_female^4","hi_dance_crowd_15_v1_female^5","hi_dance_crowd_15_v1_female^6","hi_dance_crowd_15_v1_male^1","hi_dance_crowd_15_v1_male^2","hi_dance_crowd_15_v1_male^3","hi_dance_crowd_15_v1_male^4","hi_dance_crowd_15_v1_male^5","hi_dance_crowd_15_v1_male^6"];
		let key_k, key_l;
		for (key_k in pos){
			const modelHash = natives.getHashKey(modelList[getRandomInt(modelList.length)]);
			await RequestModel(modelHash);
			let dancer = natives.createPed(4, modelHash, pos[key_k].x, pos[key_k].y, pos[key_k].z, pos[key_k].w, false, false);
			natives.setBlockingOfNonTemporaryEvents(dancer, true);
			natives.setEntityInvincible(dancer, true);
			natives.setPedCanRagdoll(dancer, false);
			natives.taskTurnPedToFaceEntity(dancer, natives.getPlayerPed(alt.Player.local), 1000);
			await RequestAnimDict("anim@amb@nightclub@dancers@crowddance_groups@hi_intensity");
			natives.taskPlayAnim(dancer, "anim@amb@nightclub@dancers@crowddance_groups@hi_intensity", animList[getRandomInt(animList.length)], 8.0, -8.0, -1, 9, 1, false, false, false);
		}
		const djHash = natives.getHashKey("ig_djtalignazio");
		await RequestModel(djHash);
		let dj = natives.createPed(4, djHash ,-1602.862, -3012.739, -78.606, -81.6721, false, false);
		natives.taskSetBlockingOfNonTemporaryEvents(dj, 1);
		natives.freezeEntityPosition(dj, true);
		natives.setEntityInvincible(dj, true);
		natives.setPedRandomComponentVariation(dj, 0);
		natives.setPedRandomProps(dj);
		natives.setPedCanRagdoll(dj, true);
		natives.setEntityCollision(dj, 1, 0);
		await RequestAnimDict("mini@strip_club@idles@dj@base");
		natives.taskPlayAnim(dj, "mini@strip_club@idles@dj@base", "base", 8.0, -8.0, -1, 9, 1, false, false, false);
		
		const seller_e = natives.getHashKey("s_f_y_shop_mid");
		await RequestModel(seller_e);
		let ticketseller = natives.createPed(0, seller_e, -1572.3560, -3013.7670, -74.4139, -90.0, false, false);
		natives.taskSetBlockingOfNonTemporaryEvents(ticketseller, 1);
		natives.setEntityInvincible(ticketseller, true);
		natives.setPedCanRagdoll(ticketseller, true);
		natives.taskStartScenarioInPlace(ticketseller, "WORLD_HUMAN_STAND_MOBILE", 0, true);
	}
});