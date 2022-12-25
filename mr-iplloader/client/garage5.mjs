import * as native from 'natives';
import { EnableIpl, SetIplProp, SetPropColor, getConfig } from 'mr-functions';
export let Garage5 = {
    ipl : ["xm3_int_placement_xm3_interior_1_dlc_int_01_xm3_milo_"],
    Enable : function(state){
        if (state){
            let colorid;
            EnableIpl(Garage5.ipl, state);
            SetIplProp(290561, "entity_set_shell_03", true)
            SetIplProp(290561, "entity_set_tint_01", true)
            SetIplProp(290561, "entity_set_numbers_01", true)
            if (getConfig("Garage5_Color_ID") == 1 || getConfig("Garage5_Color_ID") == 2 || getConfig("Garage5_Color_ID") == 3 || getConfig("Garage5_Color_ID") == 4 || getConfig("Garage5_Color_ID") == 5 || getConfig("Garage5_Color_ID") == 6 || getConfig("Garage5_Color_ID") == 7 || getConfig("Garage5_Color_ID") == 8 || getConfig("Garage5_Color_ID") == 9)
                colorid = getConfig("Garage5_Color_ID");
            else
                colorid = 6;
            SetPropColor(290561, "entity_set_tint_01", colorid);
            native.refreshInterior(290561);
        }
    }
}
