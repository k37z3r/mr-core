import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp, SetPropColor, getConfig } from 'mr-functions';
export let DoomsdayFacility = {
    ipl : ["xm_x17dlc_int_placement_interior_33_x17dlc_int_02_milo_", 'sm_smugdlc_interior_placement', 'sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_', 'xm_x17dlc_int_placement', 'xm_x17dlc_int_placement_interior_0_x17dlc_int_base_ent_milo_', 'xm_x17dlc_int_placement_interior_10_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_11_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_12_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_13_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_14_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_15_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_16_x17dlc_int_tun_straight_milo_', 'xm_x17dlc_int_placement_interior_17_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_18_x17dlc_int_tun_slope_flat_milo_', 'xm_x17dlc_int_placement_interior_19_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_1_x17dlc_int_base_loop_milo_', 'xm_x17dlc_int_placement_interior_20_x17dlc_int_tun_flat_slope_milo_', 'xm_x17dlc_int_placement_interior_21_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_22_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_23_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_24_x17dlc_int_tun_30d_r_milo_', 'xm_x17dlc_int_placement_interior_25_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_26_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_27_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_28_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_29_x17dlc_int_tun_30d_l_milo_', 'xm_x17dlc_int_placement_interior_2_x17dlc_int_bse_tun_milo_', 'xm_x17dlc_int_placement_interior_30_v_apart_midspaz_milo_', 'xm_x17dlc_int_placement_interior_31_v_studio_lo_milo_', 'xm_x17dlc_int_placement_interior_32_v_garagem_milo_', 'xm_x17dlc_int_placement_interior_34_x17dlc_int_lab_milo_', 'xm_x17dlc_int_placement_interior_35_x17dlc_int_tun_entry_milo_', 'xm_x17dlc_int_placement_interior_3_x17dlc_int_base_milo_', 'xm_x17dlc_int_placement_interior_4_x17dlc_int_facility_milo_', 'xm_x17dlc_int_placement_interior_5_x17dlc_int_facility2_milo_', 'xm_x17dlc_int_placement_interior_6_x17dlc_int_silo_01_milo_', 'xm_x17dlc_int_placement_interior_7_x17dlc_int_silo_02_milo_', 'xm_x17dlc_int_placement_interior_8_x17dlc_int_sub_milo_', 'xm_x17dlc_int_placement_interior_9_x17dlc_int_01_milo_', 'xm_x17dlc_int_placement_strm_0', 'xm_prop_x17_tem_control_01', 'xm_prop_x17_l_door_glass_01', 'xm_prop_x17_l_door_frame_01', 'xm_prop_x17_l_glass_01', 'xm_prop_x17_l_glass_02', 'xm_prop_x17_l_glass_03', 'xm_prop_x17_l_frame_01', 'xm_prop_x17_l_frame_02', 'xm_prop_x17_l_frame_03', 'xm_bunkerentrance_door', 'xm_mpchristmasadditions', 'xm_siloentranceclosed_x17', "xm_hatch_01_cutscene", "xm_hatch_02_cutscene", "xm_hatch_03_cutscene", "xm_hatch_04_cutscene", "xm_hatch_06_cutscene", "xm_hatch_07_cutscene", "xm_hatch_08_cutscene", "xm_hatch_09_cutscene", "xm_hatch_10_cutscene", "xm_hatch_closed", "xm_siloentranceclosed_x17", "xm_bunkerentrance_door", "xm_hatches_terrain", "xm_hatches_terrain_lod"],
    Enable : function(state){
        if (state){
            EnableIpl(DoomsdayFacility.ipl, state);
            let StyleId, DecalId, SleepingId, SecurityId, CannonId, LoungeId, TrophyStyleId, key;
            if (getConfig("Load_DoomsdayFacilityStyle") == "expertise")
                StyleId = 2;
            else if (getConfig("Load_DoomsdayFacilityStyle") == "altitude")
                StyleId = 3;
            else if (getConfig("Load_DoomsdayFacilityStyle") == "power")
                StyleId = 4;
            else if (getConfig("Load_DoomsdayFacilityStyle") == "authority")
                StyleId = 5;
            else if (getConfig("Load_DoomsdayFacilityStyle") == "influence")
                StyleId = 6;
            else if (getConfig("Load_DoomsdayFacilityStyle") == "order")
                StyleId = 7;
            else if (getConfig("Load_DoomsdayFacilityStyle") == "empire")
                StyleId = 8;
            else if (getConfig("Load_DoomsdayFacilityStyle") == "supremacy")
                StyleId = 9;
            else
                StyleId = 1;
            SetIplProp(269313, "set_int_02_shell", true);
            SetPropColor(269313, "set_int_02_shell", StyleId);
            if (getConfig("Load_DoomsdayFacilityDecal") == "decal_01")
                DecalId = "set_int_02_decal_01";
            else if (getConfig("Load_DoomsdayFacilityDecal") == "decal_02")
                DecalId = "set_int_02_decal_02";
            else if (getConfig("Load_DoomsdayFacilityDecal") == "decal_03")
                DecalId = "set_int_02_decal_03";
            else if (getConfig("Load_DoomsdayFacilityDecal") == "decal_04")
                DecalId = "set_int_02_decal_04";
            else if (getConfig("Load_DoomsdayFacilityDecal") == "decal_05")
                DecalId = "set_int_02_decal_05";
            else if (getConfig("Load_DoomsdayFacilityDecal") == "decal_06")
                DecalId = "set_int_02_decal_06";
            else if (getConfig("Load_DoomsdayFacilityDecal") == "decal_07")
                DecalId = "set_int_02_decal_07";
            else if (getConfig("Load_DoomsdayFacilityDecal") == "decal_08")
                DecalId = "set_int_02_decal_08";
            else if (getConfig("Load_DoomsdayFacilityDecal") == "decal_09")
                DecalId = "set_int_02_decal_09";
            else
                DecalId = "none";
            if (DecalId != "none"){
                SetIplProp(269313, DecalId, true);
            }
            if (getConfig("Load_DoomsdayFacilityLounge") == "prestige")
                LoungeId = "set_int_02_lounge2";
            else if (getConfig("Load_DoomsdayFacilityLounge") == "premier")
                LoungeId = "set_int_02_lounge3";
            else
                LoungeId = "set_int_02_lounge1";
            SetIplProp(269313, LoungeId, true);
            SetPropColor(269313, LoungeId, StyleId);
            if (getConfig("Load_DoomsdayFacilitySleeping") == "utility")
                SleepingId = "set_int_02_sleep";
            else if (getConfig("Load_DoomsdayFacilitySleeping") == "prestige")
                SleepingId = "set_int_02_sleep2";
            else if (getConfig("Load_DoomsdayFacilitySleeping") == "premier")
                SleepingId = "set_int_02_sleep3";
            else
                SleepingId = "set_int_02_no_sleep";
            SetIplProp(269313, SleepingId, true);
            SetPropColor(269313, SleepingId, StyleId);
            if (getConfig("Load_DoomsdayFacilitySecurity") == "on")
                SecurityId = "set_int_02_security";
            else
                SecurityId = "set_int_02_no_security";
            SetIplProp(269313, SecurityId, true);
            SetPropColor(269313, SecurityId, StyleId);
            if (getConfig("Load_DoomsdayFacilityCannon") == "on")
                CannonId = "set_int_02_cannon";
            else
                CannonId = "set_int_02_no_cannon";
            SetIplProp(269313, CannonId, true);
            SetPropColor(269313, CannonId, StyleId);
            let controlModelHash = alt.hash("xm_prop_x17_tem_control_01");
            let modelHash = alt.hash("xm_prop_x17_l_glass_03");
            let handle = native.getClosestObjectOfType(367.99, 4827.745, -59.0, 1.0, modelHash, false, false, false);
            if (handle == 0){
                native.requestModel(modelHash);
                if(native.hasModelLoaded(modelHash)){
                    let privacyGlass = native.createObject(modelHash, 367.99, 4827.745, -59.0, false, false, false);
                    native.setEntityAsMissionEntity(privacyGlass, true, 0);
                    native.setEntityCompletelyDisableCollision(privacyGlass, false, 0)
                    native.setEntityInvincible(privacyGlass, true)
                    native.setEntityAlpha(privacyGlass, 254, false)
                }
            }
            else{
                if (handle != 0){
                    native.setEntityAsMissionEntity(handle, false, false);
                    native.deleteEntity(handle);
                }
            }
            if (getConfig("Load_DoomsdayFacilityBedroom_Control")){
                    let handle_2 = native.getClosestObjectOfType(372.115, 4827.504, -58.47, 1.0, controlModelHash, false, false, false)
                    if (handle_2 == 0){
                        native.requestModel(controlModelHash);
                        if(native.hasModelLoaded(controlModelHash)){
                            let privacyGlass_2 = native.createObjectNoOffset(controlModelHash, 372.115, 4827.504, -58.47, true, true, false)
                            native.setEntityRotation(privacyGlass_2, 0.0, 0.0, 0.0, 2, true)
                            native.freezeEntityPosition(privacyGlass_2, true)
                            native.setEntityAsMissionEntity(privacyGlass_2, false, false)
                        }
                    }
                else{
                    if (handle_2 != 0){
                        native.setEntityAsMissionEntity(handle_2, false, false);
                        native.deleteEntity(handle_2);
                    }
                }
            }
            let LoungeModelHash = [
                [alt.hash("xm_prop_x17_l_door_glass_01"), alt.hash("xm_prop_x17_l_door_frame_01"), 359.22, 4846.043, -58.85],
                [alt.hash("xm_prop_x17_l_door_glass_01"), alt.hash("xm_prop_x17_l_door_frame_01"), 369.066, 4846.273, -58.85],
                [alt.hash("xm_prop_x17_l_glass_01"), alt.hash("xm_prop_x17_l_frame_01"), 358.843, 4845.103, -60.0],
                [alt.hash("xm_prop_x17_l_glass_02"), alt.hash("xm_prop_x17_l_frame_02"), 366.309, 4847.281, -60.0],
                [alt.hash("xm_prop_x17_l_glass_03"), alt.hash("xm_prop_x17_l_frame_03"), 371.194, 4841.27, -60.0]
            ];
            for (key in LoungeModelHash){
                let handle_3 = native.getClosestObjectOfType(LoungeModelHash[key][2], LoungeModelHash[key][3], LoungeModelHash[key][4], 1.0, LoungeModelHash[key][0], false, false, false);
                if (handle_3 == 0){
                    let entityToAttach = native.getClosestObjectOfType(LoungeModelHash[key][2], LoungeModelHash[key][3], LoungeModelHash[key][4], 1.0, LoungeModelHash[key][1], false, false, false);
                    if (entityToAttach != 0){
                        native.requestModel(LoungeModelHash[key][0]);
                        let privacyGlass_3 = CreateObject(glass.modelHash, glass.entityPos.x, glass.entityPos.y, glass.entityPos.z, false, false, false)
                        native.setEntityAsMissionEntity(privacyGlass_3, true, false)
                        native.setEntityCompletelyDisableCollision(privacyGlass_3, false, 0)
                        native.setEntityInvincible(privacyGlass_3, true)
                        native.setEntityAlpha(privacyGlass_3, 254, false)
                        native.attachEntityToEntity(privacyGlass_3, entityToAttach, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 2, 1)
                    }
                }
                else{
                    if (handle_3 != 0){
                        native.setEntityAsMissionEntity(handle_3, false, false);
                        native.deleteEntity(handle_3);
                    }
                }
            }
            if (getConfig("Load_DoomsdayFacilityLounge_Control")){
                    let handle_4 = native.getClosestObjectOfType(367.317, 4846.729, -58.448, 1.0, controlModelHash, false, false, false)
                    if (handle_4 == 0){
                        native.requestModel(controlModelHash);
                        if(native.hasModelLoaded(controlModelHash)){
                            let privacyGlass_4 = native.createObjectNoOffset(controlModelHash, 367.317, 4846.729, -58.448, true, true, false)
                            native.setEntityRotation(privacyGlass_4, 0.0, 0.0, -16.0, 2, true)
                            native.freezeEntityPosition(privacyGlass_4, true)
                            native.setEntityAsMissionEntity(privacyGlass_4, false, false)
                        }
                    }
                else{
                    if (handle_4 != 0){
                        native.setEntityAsMissionEntity(handle_4, false, false);
                        native.deleteEntity(handle_4);
                    }
                }
            }
            if (getConfig("Load_DoomsdayFacilityParts") == "set1"){
                SetIplProp(269313, "Set_Int_02_Parts_Panther1", true);
                SetIplProp(269313, "Set_Int_02_Parts_Riot1", true);
                SetIplProp(269313, "Set_Int_02_Parts_Cheno1", true);
                SetIplProp(269313, "Set_Int_02_Parts_Thruster1", true);
                SetIplProp(269313, "Set_Int_02_Parts_Avenger1", true);
            }
            else if (getConfig("Load_DoomsdayFacilityParts") == "set2"){
                SetIplProp(269313, "Set_Int_02_Parts_Panther2", true);
                SetIplProp(269313, "Set_Int_02_Parts_Riot2", true);
                SetIplProp(269313, "Set_Int_02_Parts_Cheno2", true);
                SetIplProp(269313, "Set_Int_02_Parts_Thruster2", true);
                SetIplProp(269313, "Set_Int_02_Parts_Avenger2", true);
            }
            else {
                SetIplProp(269313, "Set_Int_02_Parts_Panther3", true);
                SetIplProp(269313, "Set_Int_02_Parts_Riot3", true);
                SetIplProp(269313, "Set_Int_02_Parts_Cheno3", true);
                SetIplProp(269313, "Set_Int_02_Parts_Thruster3", true);
                SetIplProp(269313, "Set_Int_02_Parts_Avenger3", true);
            }
            if (getConfig("Load_DoomsdayFacilityClutterStyle") == "set1"){
                SetIplProp(269313, "set_int_02_clutter1", true);
                SetIplProp(269313, "set_int_02_clutter2", true);
            }
            else if  (getConfig("Load_DoomsdayFacilityClutterStyle") == "set2"){
                SetIplProp(269313, "set_int_02_clutter2", true);
                SetIplProp(269313, "set_int_02_clutter3", true);
            }
            else if  (getConfig("Load_DoomsdayFacilityClutterStyle") == "set3"){
                SetIplProp(269313, "set_int_02_clutter3", true);
                SetIplProp(269313, "set_int_02_clutter4", true);
            }
            else if  (getConfig("Load_DoomsdayFacilityClutterStyle") == "set4"){
                SetIplProp(269313, "set_int_02_clutter4", true);
                SetIplProp(269313, "set_int_02_clutter5", true);
            }
            else if  (getConfig("Load_DoomsdayFacilityClutterStyle") == "set5"){
                SetIplProp(269313, "set_int_02_clutter1", true);
            }
            else if  (getConfig("Load_DoomsdayFacilityClutterStyle") == "set6"){
                SetIplProp(269313, "set_int_02_clutter2", true);
            }
            else if  (getConfig("Load_DoomsdayFacilityClutterStyle") == "set7"){
                SetIplProp(269313, "set_int_02_clutter3", true);
            }
            else if  (getConfig("Load_DoomsdayFacilityClutterStyle") == "set8"){
                SetIplProp(269313, "set_int_02_clutter4", true);
            }
            else
                SetIplProp(269313, "set_int_02_clutter5", true);
            SetIplProp(269313, "set_int_02_crewemblem", getConfig("Load_DoomsdayFacilitycrewEmblem"));
            if (getConfig("Load_DoomsdayFacilityOutfits")){
                SetIplProp(269313, "Set_Int_02_outfit_paramedic", true);
                SetIplProp(269313, "Set_Int_02_outfit_morgue", true);
                SetIplProp(269313, "Set_Int_02_outfit_serverfarm", true);
                SetIplProp(269313, "Set_Int_02_outfit_iaa", true);
                SetIplProp(269313, "Set_Int_02_outfit_steal_avenger", true);
                SetIplProp(269313, "Set_Int_02_outfit_foundry", true);
                SetIplProp(269313, "Set_Int_02_outfit_riot_van", true);
                SetIplProp(269313, "Set_Int_02_outfit_stromberg", true);
                SetIplProp(269313, "Set_Int_02_outfit_sub_finale", true);
                SetIplProp(269313, "Set_Int_02_outfit_predator", true);
                SetIplProp(269313, "Set_Int_02_outfit_khanjali", true);
                SetIplProp(269313, "Set_Int_02_outfit_volatol", true);
                SetIplProp(269313, "set_int_02_paramedic_complete", true);
                SetIplProp(269313, "set_int_02_forcedentry_complete", true);
                SetIplProp(269313, "set_int_02_aqualungs_complete", true);
                SetIplProp(269313, "set_int_02_daylightrob_complete", true);
                SetIplProp(269313, "set_int_02_burglary_complete", true);
                SetIplProp(269313, "set_int_02_flightrecord_complete", true);
            }
            if (getConfig("Load_DoomsdayFacilityTrophy")){
                if (getConfig("Load_DoomsdayFacilityTrophyStyle") == "eagle")
                    TrophyStyleId = "set_int_02_trophy1";
                else if (getConfig("Load_DoomsdayFacilityTrophyStyle") == "submarine")
                    TrophyStyleId = "set_int_02_trophy_sub";
                else
                    TrophyStyleId = "set_int_02_trophy_iaa";
                SetIplProp(269313, TrophyStyleId, true);
                SetPropColor(269313, TrophyStyleId, StyleId);
            }
            native.refreshInterior(269313);
        }
    }
}

