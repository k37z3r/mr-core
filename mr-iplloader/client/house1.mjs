import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';
export let LowEndHouse = {
	ipl : [],
	Enable : function(state, Strip, Booze, Smoke){
        let StripId, BoozeId, SmokeId;
		if (state){
 			EnableIpl(LowEndHouse.ipl, state);
            if (Strip == "set1")
                StripId = "Studio_Lo_Strip_A";
            else if (Strip == "set2")
                StripId = "Studio_Lo_Strip_B";
            else
                StripId = "Studio_Lo_Strip_C";
            SetIplProp(149761, StripId, true);
            if (Booze == "set1")
                BoozeId = "Studio_Lo_Booze_A";
            else if (Booze == "set2")
                BoozeId = "Studio_Lo_Booze_B";
            else
                BoozeId = "Studio_Lo_Booze_C";
            SetIplProp(149761, BoozeId, true);
            if (Smoke == "stage1")
                SmokeId = "Studio_Lo_Smoke_A";
            else if (Smoke == "stage2")
                SmokeId = "Studio_Lo_Smoke_B";
            else if (Smoke == "stage3")
                SmokeId = "Studio_Lo_Smoke_C";
            else
                SmokeId = "none";
            if (SmokeId != "none"){
                SetIplProp(149761, SmokeId, true);
            }
            native.refreshInterior(149761);
        }
    }
}