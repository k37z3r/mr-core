import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let HighEndHouse2 = {
    ipl : [],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(HighEndHouse2.ipl, state);
            if (getConfig("Load_HighEndHouse2Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_HighEndHouse2Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(206081, StripId, true);
            if (getConfig("Load_HighEndHouse2Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_HighEndHouse2Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(206081, BoozeId, true);
            if (getConfig("Load_HighEndHouse2Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smoke_A";
            else if (getConfig("Load_HighEndHouse2Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smoke_B";
            else
                SmokeId = "Apart_Hi_Smoke_C";
            SetIplProp(206081, SmokeId, true);
            native.refreshInterior(206081);
        }
    }
}