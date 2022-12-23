import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let ExecutiveApartment1 = {
    ipl : [],
    Enable : function(state){
        let IPL, INTID, StripId, BoozeId, SmokeId;
        if (state){
            if (getConfig("Load_ExecutiveApartment1Style") == "modern"){
                IPL = "apa_v_mp_h_01_a";
                INTID = 227329;
            }
            else if (getConfig("Load_ExecutiveApartment1Style") == "moody"){
                IPL = "apa_v_mp_h_02_a";
                INTID = 228097;
            }
            else if (getConfig("Load_ExecutiveApartment1Style") == "vibrant"){
                IPL = "apa_v_mp_h_03_a";
                INTID = 228865;
            }
            else if (getConfig("Load_ExecutiveApartment1Style") == "sharp"){
                IPL = "apa_v_mp_h_04_a";
                INTID = 229633;
            }
            else if (getConfig("Load_ExecutiveApartment1Style") == "monochrome"){
                IPL = "apa_v_mp_h_05_a";
                INTID = 230401;
            }
            else if (getConfig("Load_ExecutiveApartment1Style") == "seductive"){
                IPL = "apa_v_mp_h_06_a";
                INTID = 231169;
            }
            else if (getConfig("Load_ExecutiveApartment1Style") == "regal"){
                IPL = "apa_v_mp_h_07_a";
                INTID = 231937;
            }
            else{
                IPL = "apa_v_mp_h_08_a";
                INTID = 232705;
            }
            EnableIpl(IPL, state);
            if (getConfig("Load_ExecutiveApartment1Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_ExecutiveApartment1Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(INTID, StripId, true);
            if (getConfig("Load_ExecutiveApartment1Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_ExecutiveApartment1Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(INTID, BoozeId, true);
            if (getConfig("Load_ExecutiveApartment1Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (getConfig("Load_ExecutiveApartment1Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (getConfig("Load_ExecutiveApartment1Smoke") == "stage3")
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