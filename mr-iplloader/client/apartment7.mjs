import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let HighLifeApartment4 = {
	ipl : ["mpbusiness_int_placement_interior_v_mp_apt_h_01_milo__3"],
	Enable : function(state){
        let StripId, BoozeId, SmokeId;
		if (state){
 			EnableIpl(HighLifeApartment4.ipl, state);
            if (getConfig("Load_HighLifeApartment4Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_HighLifeApartment4Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(146945, StripId, true);
            if (getConfig("Load_HighLifeApartment4Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_HighLifeApartment4Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(146945, BoozeId, true);
            if (getConfig("Load_HighLifeApartment4Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (getConfig("Load_HighLifeApartment4Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (getConfig("Load_HighLifeApartment4Smoke") == "stage3")
                SmokeId = "Apart_Hi_Smokes_C";
            SetIplProp(146945, SmokeId, true);
            native.refreshInterior(146945);
        }
    }
}