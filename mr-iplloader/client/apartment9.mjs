import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let HighLifeApartment6 = {
    ipl : ["mpbusiness_int_placement_interior_v_mp_apt_h_01_milo__5"],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(HighLifeApartment6.ipl, state);
            if (getConfig("Load_HighLifeApartment6Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_HighLifeApartment6Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(147457, StripId, true);
            if (getConfig("Load_HighLifeApartment6Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_HighLifeApartment6Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(147457, BoozeId, true);
            if (getConfig("Load_HighLifeApartment6Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (getConfig("Load_HighLifeApartment6Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (getConfig("Load_HighLifeApartment6Smoke") == "stage3")
                SmokeId = "Apart_Hi_Smokes_C";
            SetIplProp(147457, SmokeId, true);
            native.refreshInterior(147457);
        }
    }
}