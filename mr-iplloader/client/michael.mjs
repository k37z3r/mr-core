import * as native from 'natives';
import { SetIplProp, getConfig } from 'mr-functions';
export let Michael = {
    ipl : [],
    Enable : function(state){
        if (state){
            let styleid, bedid, key;
            if (getConfig("Load_MichaelStyle") == "moved")
                styleid = ["V_Michael_bed_Messy", "V_Michael_M_moved", "V_Michael_D_Moved", "V_Michael_L_Moved", "V_Michael_S_items_swap", "V_Michael_M_items_swap"];
            else
                styleid = ["V_Michael_bed_tidy", "V_Michael_M_items", "V_Michael_D_items", "V_Michael_S_items", "V_Michael_L_Items"];
            for (key in styleid){
                SetIplProp(166657, styleid[key], true);
            }
            SetIplProp(166657, "Michael_premier", getConfig("Load_MichaelMoviePoster"));
            SetIplProp(166657, "V_Michael_FameShame", getConfig("Load_MichaelFameShamePoster"));
            SetIplProp(166657, "V_Michael_plane_ticket", getConfig("Load_MichaelPlaneTicket"));
            SetIplProp(166657, "V_Michael_JewelHeist", getConfig("Load_MichaelSpyGlasses"));
            SetIplProp(166657, "burgershot_yoga", getConfig("Load_MichaelBurgerShot"));
            SetIplProp(166401, "V_Michael_Scuba", getConfig("Load_MichaelGarage"));
            native.refreshInterior(166657);
            native.refreshInterior(166401);
        }
    }
}