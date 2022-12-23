import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let HighEndHouse8 = {
    ipl : [],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(HighEndHouse8.ipl, state);
            if (getConfig("Load_HighEndHouse8Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_HighEndHouse8Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(208385, StripId, true);
            if (getConfig("Load_HighEndHouse8Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_HighEndHouse8Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(208385, BoozeId, true);
            if (getConfig("Load_HighEndHouse8Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smoke_A";
            else if (getConfig("Load_HighEndHouse8Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smoke_B";
            else
                SmokeId = "Apart_Hi_Smoke_C";
            SetIplProp(208385, SmokeId, true);
            native.refreshInterior(208385);
        }
    }
}