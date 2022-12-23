import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let MidEndHouse = {
    ipl : [],
    Enable : function(state){
        let StripId, BoozeId, SmokeId;
        if (state){
            EnableIpl(MidEndHouse.ipl, state);
            if (getConfig("Load_MidEndHouseStrip") == "set1")
                StripId = "Apart_Mid_Strip_A";
            else if (getConfig("Load_MidEndHouseStrip") == "set2")
                StripId = "Apart_Mid_Strip_B";
            else
                StripId = "Apart_Mid_Strip_C";
            SetIplProp(148225, StripId, true);
            if (getConfig("Load_MidEndHouseBooze") == "set1")
                BoozeId = "Apart_Mid_Booze_A";
            else if (getConfig("Load_MidEndHouseBooze") == "set2")
                BoozeId = "Apart_Mid_Booze_B";
            else
                BoozeId = "Apart_Mid_Booze_C";
            SetIplProp(148225, BoozeId, true);
            if (getConfig("Load_MidEndHouseSmoke") == "stage1")
                SmokeId = "Apart_Mid_Smoke_A";
            else if (getConfig("Load_MidEndHouseSmoke") == "stage2")
                SmokeId = "Apart_Mid_Smoke_B";
            else if (getConfig("Load_MidEndHouseSmoke") == "stage3")
                SmokeId = "Apart_Mid_Smoke_C";
            else
                SmokeId = "none";
            if (SmokeId != "none"){
                SetIplProp(148225, SmokeId, true);
            }
            native.refreshInterior(148225);
        }
    }
}