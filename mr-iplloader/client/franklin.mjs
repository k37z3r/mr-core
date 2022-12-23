import * as native from 'natives';
import { SetIplProp, getConfig } from 'mr-functions';
export let Franklin = {
    ipl : [],
    Enable : function(state){
        if (state){
            let styleid, glassdoorid, key;
            if (getConfig("Load_FranklinStyle") == "unpacking")
                styleid = ["franklin_unpacking"];
            else if (getConfig("Load_FranklinStyle") == "settled")
                styleid = ["franklin_unpacking", "franklin_settled"];
            else if (getConfig("Load_FranklinStyle") == "cardboxes")
                styleid = ["showhome_only"];
            else
                styleid = "none";
            if (styleid != "none" && (getConfig("Load_FranklinStyle") == "unpacking" || getConfig("Load_FranklinStyle") == "settled" || getConfig("Load_FranklinStyle") == "cardboxes")){
                for (key in styleid){
                    SetIplProp(206849, styleid[key], true);
                }
            }
            if (getConfig("Load_FranklinGlassDoor") == "unlocked")
                glassdoorid = "unlocked";
            else
                glassdoorid = "locked";
            SetIplProp(206849, glassdoorid, true);
            SetIplProp(206849, "progress_flyer", getConfig("Load_FranklinProgressFlyer"));
            SetIplProp(206849, "progress_tux", getConfig("Load_FranklinProgressTux"));
            SetIplProp(206849, "progress_tshirt", getConfig("Load_FranklinProgressTshirt"));
            SetIplProp(206849, "bong_and_wine", getConfig("Load_FranklinBongAndWine"));
            native.refreshInterior(206849);
        }
    }
}