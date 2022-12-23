import * as alt from "alt";
import * as native from 'natives';
import { _CONFIG } from '../config/config.js';
import { translations } from '../language/language.js';
const view = new alt.WebView("http://resource/client/html/index.html");
alt.setWatermarkPosition(2);
export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
export const RequestModel = async (modelHash, timeoutMs = 10000) => {
    return new Promise((resolve, reject) => {
        if (!native.isModelValid(modelHash)) {
            reject(new Error(`Model does not exist: ${modelHash}`));
            return;
        }
        if (native.hasModelLoaded(modelHash)) {
            resolve(true);
            return;
        }
        native.requestModel(modelHash);
        const deadline = new Date().getTime() + timeoutMs;
        const inter = alt.setInterval(() => {
            if (native.hasModelLoaded(modelHash)) {
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
        if (native.hasAnimDictLoaded(Anim)){
            resolve(true);
            return;
        }
        native.requestAnimDict(Anim);
        const deadline = new Date().getTime() + timeoutMs;
        const inter = alt.setInterval(() => {
            if (native.hasAnimDictLoaded(Anim)) {
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
export function EnableIpl(ipl, activate){
    let key;
    for (key in ipl){
        if (activate)
            alt.requestIpl(ipl[key]);
        else
            alt.removeIpl(ipl[key]);
    }
}
export function setBlip(x,y,z, sprite, scale, color, sndcolor, seccolor, name){
    let Blip = native.addBlipForCoord(x, y, z);
    native.setBlipSprite(Blip, sprite);
    native.setBlipScale(Blip, scale);
    native.setBlipDisplay(Blip, 4);
    native.setBlipColour(Blip, color);
    if (sndcolor){
        native.setBlipSecondaryColour(Blip, seccolor.r, seccolor.g, seccolor.b);
    }
    native.setBlipAsShortRange(Blip, true);
    native.beginTextCommandSetBlipName("STRING");
    native.addTextComponentSubstringPlayerName(name);
    native.endTextCommandSetBlipName(Blip);
}
export function SetPropColor(id, prop, style){
    native.setInteriorEntitySetColor(id, prop, style);
    native.refreshInterior(id);
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
export function replace_buttons(btn1="", btn2=""){
    let btnn2;
    if (btn2.length>0)
        btnn2 = ' / <kbd style="background-color: #eee; border-radius: 3px;border: 1px solid #b4b4b4;box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset;color: #333;display: inline-block;font-weight: bolder;line-height: 1; padding: 4px 7px; white-space: nowrap;">' + btn2 + '</kbd>';
    else
        btnn2 = '';
    return `<kbd style="background-color: #eee; border-radius: 3px;border: 1px solid #b4b4b4;box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 2px 0 0 rgba(255, 255, 255, .7) inset;color: #333;display: inline-block;font-weight: bolder;line-height: 1; padding: 4px 7px; white-space: nowrap;">${btn1}</kbd>${btnn2}`;
}
export function format_txt(txt){
    let str = txt;
    str = str.replaceAll('[8]', replace_buttons('&larr;'));
    str = str.replaceAll('[13]', replace_buttons('&crarr;'));
    str = str.replaceAll('[27]', replace_buttons('ESC'));
    str = str.replaceAll('[38]', replace_buttons('E', 'RB'));
    str = str.replaceAll('[73]', replace_buttons('I'));
    str = str.replaceAll('[77]', replace_buttons('M'));
    str = str.replaceAll('[84]', replace_buttons('T'));
    str = str.replaceAll('[119]', replace_buttons('F8'));
    str = str.replaceAll('[121]', replace_buttons('F10'));
    return str;
}
function create_help(){
      var html = `<table><tr>`;
      var i = 0;
      for (const [key, value] of Object.entries(getConfig("HELP"))) {
        html += `<td valign="top" style="padding:10px"><table><tr><td style="text-decoration:underline">${_L(key)}</td></tr>`;
        for (var e=0; e<value.length; e++){
            html += `<tr><td>${format_txt(value[e].button)} ${_L(value[e].description)}</td></tr>`;
        }
        html += `</table></td>`;
        i++;
        if (i%3===0)
          html += `</tr><tr>`;
      }
      html += `</tr></table>`;
      return html;
}
export function getConfig(value){
    for(var key in _CONFIG) {
        if(key == value) {
            return _CONFIG[key];
        }
    }
    return 0;
}
export function _L(trans = "", opts="", lang = _CONFIG.LANGUAGE){
    var i = 0;
    var str;
    for (var key in translations){
        if (key == lang){
            str = translations[key][trans];
            str = (str || key+'.'+trans);
            for (var opt in opts){
                var search = `%s_${opt}`;
                str = str.replaceAll(search, opts[opt])
            }
        return str;
        i++;
        }
    }
    if (i==0)
        return lang+'.'+trans;
}
export function doUpdateHud(){
    alt.emitServer('mr-core:hud:updateHUD');
}
let keymappingopened = false;
view.emit("setkeymapping",create_help());
alt.on("keyup", (keycode) => {
    switch (keycode) {
        case 121: // Key: F10
            if (!keymappingopened && alt.gameControlsEnabled()){
                view.emit("openkeymapping");
                keymappingopened = true;
                alt.toggleGameControls(false);
                alt.showCursor(true);
                alt.toggleRmlControls(true);
                view.focus();
            }
            else if (keymappingopened && !alt.gameControlsEnabled()){
                view.emit("closekeymapping");
                keymappingopened = false;
                alt.toggleGameControls(true);
                alt.showCursor(false);
                alt.toggleRmlControls(false);
                view.unfocus();
            }
        break;
        case 27: // Key: esacape
            if (keymappingopened && !alt.gameControlsEnabled()){
                view.emit("closekeymapping");
                keymappingopened = false;
                alt.toggleGameControls(true);
                alt.showCursor(false);
                alt.toggleRmlControls(false);
                view.unfocus();
            }
        break;
    }
});
