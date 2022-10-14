import * as alt from "alt";
import * as native from 'natives';
const view = new alt.WebView("http://resource/client/html/index.html");
export function EnableIpl(ipl, activate){
	let key;
	for (key in ipl){
		if (activate)
			alt.requestIpl(ipl[key]);
		else
			alt.removeIpl(ipl[key]);
	}
}
export function getInteriorByType(x, y, z, name, iplName){
	let id = 0;
	alt.requestIpl(iplName);
	id = native.getInteriorAtCoordsWithType(x, y, z, name);
	return id;
}
export function SetIplProp(interiorId, props, active){
	if (active)
		native.activateInteriorEntitySet(interiorId, props);
	else
		native.deactivateInteriorEntitySet(interiorId, props);
	native.refreshInterior(interiorId);
}
export function UnSetIplProp(interiorId, props){
	let key;
	for (key in props){
		SetIplProp(interiorId, props[key], false);
	}
}
export function get_posters(id, posters){
	let ret = [];
	let poster = posters;
	return "ba_case" + id + "_" + poster;
}
export function CreateNamedRenderTargetForModel(name, model){
	let handle = 0
	if (!native.isNamedRendertargetRegistered(name))
		native.registerNamedRendertarget(name, false)
	if (!native.isNamedRendertargetLinked(model))
		native.linkNamedRendertarget(model)
	if (native.isNamedRendertargetRegistered(name))
		handle = native.getNamedRendertargetRenderId(name)
	return handle;
}
export function drawTv() {
    native.registerScriptWithAudio(0);
    native.setTvChannelPlaylist(2, "PL_TOU_LED_PALACE", false);
    native.setTvChannel(2);
    native.enableMovieSubtitles(true);
	return true;
}
let pois = [];
let poi_id = [];
export function RegisterPoi(id, posX, posY, posZ, maxDistance, txt){
	if (poi_id.indexOf(id) === -1){
		poi_id.push(id);
		pois.push([id, txt, false, false, posX, posY, posZ, maxDistance]);
	}
	let key;
	for (key in pois){
		if(!pois[key][2]){
			view.emit("setText", pois[key][0], format_txt(pois[key][1]));
			pois[key][2] = true;
		}
		if (pois[key][3] == false && alt.Player.local.pos.distanceTo(new alt.Vector3(pois[key][4], pois[key][5], pois[key][6])) < pois[key][7]){
				view.emit("drawText", pois[key][0]);
				pois[key][3] = true;
		}
		if (pois[key][3] == true && alt.Player.local.pos.distanceTo(new alt.Vector3(pois[key][4], pois[key][5], pois[key][6])) > pois[key][7]){
				view.emit("hideText", pois[key][0]);
				pois[key][3] = false;
		}
	}
	native.drawMarker(1, posX, posY, posZ-1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 84, 220, 220, 100, false, true, 2, true, undefined, undefined, false);
}
function format_txt(txt){
	let str = txt;
	str = str.replace('[38]', '<kbd style="background-color: #eee; border-radius: 3px;border: 1px solid #b4b4b4;box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset;color: #333;display: inline-block;font-weight: bolder;line-height: 1; padding: 4px 7px; white-space: nowrap;">E</kbd> / <kbd style="background-color: #eee; border-radius: 3px;border: 1px solid #b4b4b4;box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset;color: #333;display: inline-block;font-weight: bolder;line-height: 1; padding: 4px 7px; white-space: nowrap;">RB</kbd>');
	return str;
}

