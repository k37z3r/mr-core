import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let ExecutiveApartment2 = {
    ipl : [],
    Enable : function(state){
        let IPL, INTID, StripId, BoozeId, SmokeId;
        if (state){
            if (getConfig("Load_ExecutiveApartment2Style") == "modern"){
                IPL = "apa_v_mp_h_01_b";
                INTID = 227585;
            }
            else if (getConfig("Load_ExecutiveApartment2Style") == "moody"){
                IPL = "apa_v_mp_h_02_b";
                INTID = 228353;
            }
            else if (getConfig("Load_ExecutiveApartment2Style") == "vibrant"){
                IPL = "apa_v_mp_h_03_b";
                INTID = 229121;
            }
            else if (getConfig("Load_ExecutiveApartment2Style") == "sharp"){
                IPL = "apa_v_mp_h_04_b";
                INTID = 229889;
            }
            else if (getConfig("Load_ExecutiveApartment2Style") == "monochrome"){
                IPL = "apa_v_mp_h_05_b";
                INTID = 230657;
            }
            else if (getConfig("Load_ExecutiveApartment2Style") == "seductive"){
                IPL = "apa_v_mp_h_06_b";
                INTID = 231425;
            }
            else if (getConfig("Load_ExecutiveApartment2Style") == "regal"){
                IPL = "apa_v_mp_h_07_b";
                INTID = 232193;
            }
            else{
                IPL = "apa_v_mp_h_08_b";
                INTID = 232961;
            }
            EnableIpl(IPL, state);
            if (getConfig("Load_ExecutiveApartment2Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_ExecutiveApartment2Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(INTID, StripId, true);
            if (getConfig("Load_ExecutiveApartment2Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_ExecutiveApartment2Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(INTID, BoozeId, true);
            if (getConfig("Load_ExecutiveApartment2Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (getConfig("Load_ExecutiveApartment2Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (getConfig("Load_ExecutiveApartment2Smoke") == "stage3")
                SmokeId = "Apart_Hi_Smokes_C";
            else
                SmokeId = "none";
            if (SmokeId != "none"){
                SetIplProp(INTID, SmokeId, true);
            }
            native.refreshInterior(INTID);
        }
    }
}