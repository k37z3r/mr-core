import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let HighEndApartment1 = {
    ipl : [],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(HighEndApartment1.ipl, state);
            if (getConfig("Load_HighEndApartment1Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_HighEndApartment1Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(141313, StripId, true);
            if (getConfig("Load_HighEndApartment1Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_HighEndApartment1Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(141313, BoozeId, true);
            if (getConfig("Load_HighEndApartment1Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (getConfig("Load_HighEndApartment1Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (getConfig("Load_HighEndApartment1Smoke") == "stage3")
                SmokeId = "Apart_Hi_Smokes_C";
            SetIplProp(141313, SmokeId, true);
            native.refreshInterior(141313);
        }
    }
}