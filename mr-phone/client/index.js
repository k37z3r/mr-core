import * as alt from "alt";
let opened = false;
const view = new alt.WebView("http://resource/client/html/index.html");
alt.on("keyup", (keycode) => {
	switch (keycode) {
		case 77: // Key: M
			if (!opened && alt.gameControlsEnabled()){
				open_phone();
			}
		break;
		case 27: // Key: escape
			if (opened && !alt.gameControlsEnabled()){
				close_phone();
			}
		break;
	}
});
function close_phone(){
	opened = false;
	view.emit("closePhone");
	alt.toggleGameControls(true);
	alt.showCursor(false);
	alt.toggleRmlControls(false);
	view.unfocus();
}
function open_phone(){
	opened = true;
	view.emit("openPhone");
	alt.toggleGameControls(false);
	alt.showCursor(true);
	alt.toggleRmlControls(true);
	view.focus();
}
alt.emitServer("mr-phone:get_scripts");
alt.onServer('mr-phone:set_scripts', (p_array) => {
	view.emit("load_res_plugins", p_array);
});
alt.onServer('mr-phone:set_language', (p_array) => {
	view.emit("load_language", p_array);
});