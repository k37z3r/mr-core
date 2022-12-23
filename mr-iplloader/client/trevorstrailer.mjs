import * as native from 'natives';
import { SetIplProp, getConfig } from 'mr-functions';
export let TrevorsTrailer = {
    ipl : [],
    Enable : function(state){
        if (state){
            let styleid;
            if (getConfig("Load_TrevorsTrailerStyle") == "trash")
                styleid = "TrevorsTrailerTrash";
            else
                styleid = "trevorstrailertidy";
            SetIplProp(2562, styleid, true);
            SetIplProp(2562, "V_26_Trevor_Helmet3", getConfig("Load_TrevorsTrailerCopHelmet"));
            SetIplProp(2562, "V_24_Trevor_Briefcase3", getConfig("Load_TrevorsTrailerBriefCase"));
            SetIplProp(2562, "V_26_Michael_Stay3", getConfig("Load_TrevorsTrailerMichaelStuff"));
            native.refreshInterior(2562);
        }
    }
}