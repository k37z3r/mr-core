import * as native from 'natives';
import { SetIplProp, getConfig } from 'mr-functions';
export let Floyd = {
    ipl : [],
    Enable : function(state){
        if (state){
            let styleid, mrjamid, key;
            if (getConfig("Load_FloydStyle") == "messedup")
                styleid = ["layer_mess_A", "layer_mess_B", "layer_mess_C", "layer_sextoys_a", "swap_sofa_B", "swap_wade_sofa_A", "layer_wade_shit", "layer_torture"];
            else
                styleid = ["swap_clean_apt", "layer_debra_pic", "layer_whiskey", "swap_sofa_A"];
            for (key in styleid){
                SetIplProp(171777, styleid[key], true);
            }
            if (getConfig("Load_FloydMrJam") == "jammedontable")
                mrjamid = "swap_mrJam_C";
            else if (getConfig("Load_FloydMrJam") == "jammed")
                mrjamid = "swap_mrJam_B";
            else
                mrjamid = "swap_mrJam_A";
            SetIplProp(171777, mrjamid, true);
            native.refreshInterior(171777);
        }
    }
}