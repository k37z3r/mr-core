import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let Simeon = {
    ipl : ["shr_int", "reh_simeonfix"],
    Enable : function(state){
        EnableIpl(Simeon.ipl, state);
        if (state){
            let styleid, shutterid;
            if (getConfig("Load_SimeonStyle") == "noGlass")
                styleid = "csr_inMission";
            else if (getConfig("Load_SimeonStyle") == "destroyed")
                styleid = "csr_afterMissionA";
            else if (getConfig("Load_SimeonStyle") == "fixed")
                styleid = "csr_afterMissionB";
            else
                styleid = "csr_beforeMission";
            SetIplProp(7170, styleid, true);
            if (getConfig("Load_SimeonShutter") == "opened")
                shutterid = "shutter_open";
            else if (getConfig("Load_SimeonShutter") == "closed")
                shutterid = "shutter_closed";
            else
                shutterid = "none";
            if (shutterid != "none"){
                SetIplProp(7170, shutterid, true);
            }
            native.refreshInterior(7170);
        }
    }
}