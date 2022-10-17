import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';
export let ExecutiveApartment1 = {
	ipl : [],
	Enable : function(state, Style, Strip, Booze, Smoke){
        let IPL, INTID, StripId, BoozeId, SmokeId;
		if (state){
            if (Style == "modern"){
                IPL = "apa_v_mp_h_01_a";
                INTID = 227329;
            }
            else if (Style == "moody"){
                IPL = "apa_v_mp_h_02_a";
                INTID = 228097;
            }
            else if (Style == "vibrant"){
                IPL = "apa_v_mp_h_03_a";
                INTID = 228865;
            }
            else if (Style == "sharp"){
                IPL = "apa_v_mp_h_04_a";
                INTID = 229633;
            }
            else if (Style == "monochrome"){
                IPL = "apa_v_mp_h_05_a";
                INTID = 230401;
            }
            else if (Style == "seductive"){
                IPL = "apa_v_mp_h_06_a";
                INTID = 231169;
            }
            else if (Style == "regal"){
                IPL = "apa_v_mp_h_07_a";
                INTID = 231937;
            }
            else{
                IPL = "apa_v_mp_h_08_a";
                INTID = 232705;
            }
			EnableIpl(IPL, state);
            if (Strip == "set1")
                StripId = "Apart_Hi_Strip_A";
            else if (Strip == "set2")
                StripId = "Apart_Hi_Strip_B";
            else
                StripId = "Apart_Hi_Strip_C";
            SetIplProp(INTID, StripId, true);
            if (Booze == "set1")
                BoozeId = "Apart_Hi_Booze_A";
            else if (Booze == "set2")
                BoozeId = "Apart_Hi_Booze_B";
            else
                BoozeId = "Apart_Hi_Booze_C";
            SetIplProp(INTID, BoozeId, true);
            if (Smoke == "stage1")
                SmokeId = "Apart_Hi_Smokes_A";
            else if (Smoke == "stage2")
                SmokeId = "Apart_Hi_Smokes_B";
            else if (Smoke == "stage3")
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