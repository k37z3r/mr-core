import * as alt from "alt";
import { close_phone, open_phone, getConfig } from 'mr-functions';
let opened = false;
const view = new alt.WebView("http://resource/client/html/index.html");
alt.on("keyup", (keycode) => {
    switch (keycode) {
        case getConfig("PHONE_OPEN_BUTTON"):
            if (!opened && alt.gameControlsEnabled()){
                opened = true;
                view.emit("mr-core:phone:openPhone");
                view.focus();
                open_phone();
            }
        break;
        case getConfig("PHONE_CLOSE_BUTTON"):
            if (opened && !alt.gameControlsEnabled()){
                opened = false;
                view.emit("mr-core:phone:closePhone");
                view.unfocus();
                close_phone();
            }
        break;
    }
});
alt.emitServer("mr-core:phone:get_scripts");
alt.onServer('mr-core:phone:set_scripts', (p_array) => {
    view.emit("mr-core:phone:load_res_plugins", p_array);
});
alt.onServer('mr-core:phone:set_language', (p_array) => {
    view.emit("mr-core:phone:load_language", p_array);
});