import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let Bunkers = { //entry 857.3017, -3250.10, -98.32        //entry with veh 1169.608, -2971.05, 5.9020
    ipl : [
        "gr_case0_bunkerclosed",
        "gr_case1_bunkerclosed",
        "gr_case2_bunkerclosed",
        "gr_case3_bunkerclosed",
        "gr_case4_bunkerclosed",
        "gr_case5_bunkerclosed",
        "gr_case6_bunkerclosed",
        "gr_case7_bunkerclosed",
        "gr_case9_bunkerclosed",
        "gr_case10_bunkerclosed",
        "gr_case11_bunkerclosed",
        "gr_grdlc_int_02",
        "gr_grdlc_int_01",
        "grdlc_int_01_shell",
        "gr_entrance_placement",
        "gr_grdlc_interior_placement",
        "gr_grdlc_interior_placement_interior_0_grdlc_int_01_milo_",
        "gr_grdlc_interior_placement_interior_1_grdlc_int_02_milo_"
    ],
    Enable : function(state){
        EnableIpl(Bunkers.ipl, state);
        if (state){
            let styleid, tierid, securityid;
            if (getConfig("Load_BunkersStyle") == "yellow")
                styleid = "Bunker_Style_C"
            else if (getConfig("Load_BunkersStyle") == "blue")
                styleid = "Bunker_Style_B"
            else
                styleid = "Bunker_Style_A"
            SetIplProp(258561, styleid, true);
            if (getConfig("Load_BunkersTier") == "upgrade")
                tierid = "upgrade_bunker_set";
            else
                tierid = "standard_bunker_set";
            SetIplProp(258561, tierid, true);
            if (getConfig("Load_BunkersSecurity") == "upgrade")
                securityid = "security_upgrade";
            else
                securityid = "standard_security_set";
            SetIplProp(258561, securityid, true);
            SetIplProp(258561, "Office_Upgrade_set", getConfig("Load_BunkersOffice"));
            SetIplProp(258561, "Office_blocker_set", getConfig("Load_BunkersOfficeLocked"));
            SetIplProp(258561, "gun_locker_upgrade", getConfig("Load_BunkersLocker"));
            SetIplProp(258561, "gun_range_lights", getConfig("Load_BunkersRangeLights"));
            SetIplProp(258561, "gun_wall_blocker", getConfig("Load_BunkersRangeWall"));
            SetIplProp(258561, "gun_range_blocker_set", getConfig("Load_BunkersRangeLocked"));
            SetIplProp(258561, "Gun_schematic_set", getConfig("Load_BunkersSchematic"));
            native.refreshInterior(258561);
        }
    }
}