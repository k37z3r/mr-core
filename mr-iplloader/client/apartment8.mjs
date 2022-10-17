import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';
export let HighLifeApartment5 = {
	ipl : ["mpbusiness_int_placement_interior_v_mp_apt_h_01_milo__4"],
	Enable : function(state, Strip, Booze, Smoke){
        let StripId, BoozeId, SmokeId;
		if (state){
 			EnableIpl(HighLifeApartment5.ipl, state);
            if (Strip == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (Strip == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(147201, StripId, true);
            if (Booze == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (Booze == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(147201, BoozeId, true);
            if (Smoke == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (Smoke == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (Smoke == "stage3")
                SmokeId = "Apart_Hi_Smokes_C";
            SetIplProp(147201, SmokeId, true);
            native.refreshInterior(147201);
        }
    }
}