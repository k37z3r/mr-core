import * as native from 'natives';
import { SetIplProp, getConfig } from 'mr-functions';
export let FranklinAunt = {
    ipl : [],
    Enable : function(state){
        if (state){
            let styleid;
            if (getConfig("Load_FranklinAuntStyle") == "stuff")
                styleid = "V_57_FranklinStuff";
            else if (shutter == "left")
                styleid = "V_57_Franklin_LEFT";
            else
                styleid = "none";
            if (styleid != "none"){
                SetIplProp(197889, styleid, true);
            }
            SetIplProp(197889, "V_57_GangBandana", getConfig("Load_FranklinAuntBandana"));
            SetIplProp(197889, "V_57_Safari", getConfig("Load_FranklinAuntBag"));
            native.refreshInterior(197889);
        }
    }
}