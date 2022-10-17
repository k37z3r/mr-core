import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';
export let HighEndHouse6 = {
	ipl : [],
	Enable : function(state, Strip, Booze, Smoke){
        let StripId, BoozeId, SmokeId;
		if (state){
 			EnableIpl(HighEndHouse6.ipl, state);
            if (Strip == "set1")
                StripId = "Apart_Mid_Strip_A";
            else if (Strip == "set2")
                StripId = "Apart_Mid_Strip_B";
            else
                StripId = "Apart_Mid_Strip_C";
            SetIplProp(207361, StripId, true);
            if (Booze == "set1")
                BoozeId = "Apart_Mid_Booze_A";
            else if (Booze == "set2")
                BoozeId = "Apart_Mid_Booze_B";
            else
                BoozeId = "Apart_Mid_Booze_C";
            SetIplProp(207361, BoozeId, true);
            if (Smoke == "stage1")
                SmokeId = "Apart_Mid_Smoke_A";
            else if (Smoke == "stage2")
                SmokeId = "Apart_Mid_Smoke_B";
            else
                SmokeId = "Apart_Mid_Smoke_C";
            SetIplProp(207361, SmokeId, true);
            native.refreshInterior(207361);
        }
    }
}