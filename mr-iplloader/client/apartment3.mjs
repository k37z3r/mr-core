import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let ExecutiveApartment3 = {
    ipl : [],
    Enable : function(state){
        let IPL, INTID, StripId, BoozeId, SmokeId;
        if (state){
            if (getConfig("Load_ExecutiveApartment3Style") == "modern"){
                IPL = "apa_v_mp_h_01_c";
                INTID = 227841;
            }
            else if (getConfig("Load_ExecutiveApartment3Style") == "moody"){
                IPL = "apa_v_mp_h_02_c";
                INTID = 228609;
            }
            else if (getConfig("Load_ExecutiveApartment3Style") == "vibrant"){
                IPL = "apa_v_mp_h_03_c";
                INTID = 229377;
            }
            else if (getConfig("Load_ExecutiveApartment3Style") == "sharp"){
                IPL = "apa_v_mp_h_04_c";
                INTID = 230145;
            }
            else if (getConfig("Load_ExecutiveApartment3Style") == "monochrome"){
                IPL = "apa_v_mp_h_05_c";
                INTID = 230913;
            }
            else if (getConfig("Load_ExecutiveApartment3Style") == "seductive"){
                IPL = "apa_v_mp_h_06_c";
                INTID = 231681;
            }
            else if (getConfig("Load_ExecutiveApartment3Style") == "regal"){
                IPL = "apa_v_mp_h_07_c";
                INTID = 232449;
            }
            else{
                IPL = "apa_v_mp_h_08_c";
                INTID = 233217;
            }
            EnableIpl(IPL, state);
            if (getConfig("Load_ExecutiveApartment3Strip") == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (getConfig("Load_ExecutiveApartment3Strip") == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(INTID, StripId, true);
            if (getConfig("Load_ExecutiveApartment3Booze") == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (getConfig("Load_ExecutiveApartment3Booze") == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(INTID, BoozeId, true);
            if (getConfig("Load_ExecutiveApartment3Smoke") == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (getConfig("Load_ExecutiveApartment3Smoke") == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (getConfig("Load_ExecutiveApartment3Smoke") == "stage3")
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