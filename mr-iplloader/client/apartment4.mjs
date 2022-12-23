import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let HighLifeApartment1 = {
    ipl : ["mpbusiness_int_placement_interior_v_mp_apt_h_01_milo_"],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(HighLifeApartment1.ipl, state);
            if (getConfig("Load_HighLifeApartment1Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_HighLifeApartment1Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(145921, StripId, true);
            if (getConfig("Load_HighLifeApartment1Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_HighLifeApartment1Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(145921, BoozeId, true);
            if (getConfig("Load_HighLifeApartment1Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (getConfig("Load_HighLifeApartment1Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (Smoke == "stage3")
                SmokeId = "Apart_Hi_Smokes_C";
            SetIplProp(145921, SmokeId, true);
            native.refreshInterior(145921);
        }
    }
}