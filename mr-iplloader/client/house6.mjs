import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let HighEndHouse4 = {
    ipl : [],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(HighEndHouse4.ipl, state);
            if (getConfig("Load_HighEndHouse4Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_HighEndHouse4Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(208129, StripId, true);
            if (getConfig("Load_HighEndHouse4Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_HighEndHouse4Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(208129, BoozeId, true);
            if (getConfig("Load_HighEndHouse4Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smoke_A";
            else if (getConfig("Load_HighEndHouse4Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smoke_B";
            else
                SmokeId = "Apart_Hi_Smoke_C";
            SetIplProp(208129, SmokeId, true);
            native.refreshInterior(208129);
        }
    }
}