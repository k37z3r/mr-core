import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let LowEndHouse = {
    ipl : [],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(LowEndHouse.ipl, state);
            if (getConfig("Load_LowEndHouseStrip") == "set1")
                StripId = "Studio_Lo_Strip_A";
            else if (getConfig("Load_LowEndHouseStrip") == "set2")
                StripId = "Studio_Lo_Strip_B";
            else
                StripId = "Studio_Lo_Strip_C";
            SetIplProp(149761, StripId, true);
            if (getConfig("Load_LowEndHouseBooze") == "set1")
                BoozeId = "Studio_Lo_Booze_A";
            else if (getConfig("Load_LowEndHouseBooze") == "set2")
                BoozeId = "Studio_Lo_Booze_B";
            else
                BoozeId = "Studio_Lo_Booze_C";
            SetIplProp(149761, BoozeId, true);
            if (getConfig("Load_LowEndHouseSmoke") == "stage1")
                SmokeId = "Studio_Lo_Smoke_A";
            else if (getConfig("Load_LowEndHouseSmoke") == "stage2")
                SmokeId = "Studio_Lo_Smoke_B";
            else if (getConfig("Load_LowEndHouseSmoke") == "stage3")
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