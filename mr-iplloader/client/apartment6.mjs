import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let HighLifeApartment3 = {
    ipl : ["mpbusiness_int_placement_interior_v_mp_apt_h_01_milo__2"],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(HighLifeApartment3.ipl, state);
            if (getConfig("Load_HighLifeApartment3Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_HighLifeApartment3Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(146689, StripId, true);
            if (getConfig("Load_HighLifeApartment3Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_HighLifeApartment3Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(146689, BoozeId, true);
            if (getConfig("Load_HighLifeApartment3Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (getConfig("Load_HighLifeApartment3Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (getConfig("Load_HighLifeApartment3Smoke") == "stage3")
                SmokeId = "Apart_Hi_Smokes_C";
            SetIplProp(146689, SmokeId, true);
            native.refreshInterior(146689);
        }
    }
}