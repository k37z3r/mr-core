import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp, SetPropColor } from 'mr-functions';
export let Hangar = {
    ipl : ["sm_smugdlc_interior_placement_interior_0_smugdlc_int_01_milo_ "],
    Enable : function(state){
        let ColorId, FloorStyleId, DecalId, CranesId, ModAreaId, OfficeId, BedroomStyleId, BedroomBlindsId, FakeLightColorId, BedroomCeilingId, BedroomWallsId;
        if (state){
            EnableIpl(Hangar.ipl, state);
            if (getConfig("Load_HangarWallColor") == "sablered")
                ColorId = 1;
            else if (getConfig("Load_HangarWallColor") == "whiteblue")
                ColorId = 2;
            else if (getConfig("Load_HangarWallColor") == "grayorange")
                ColorId = 3;
            else if (getConfig("Load_HangarWallColor") == "grayblue")
                ColorId = 4;
            else if (getConfig("Load_HangarWallColor") == "graylightgray")
                ColorId = 5;
            else if (getConfig("Load_HangarWallColor") == "yellowgray")
                ColorId = 6;
            else if (getConfig("Load_HangarWallColor") == "lightblackwhite")
                ColorId = 7;
            else if (getConfig("Load_HangarWallColor") == "darkblackwhite")
                ColorId = 8;
            else
                ColorId = 9;
            SetIplProp(260353, "set_tint_shell", true);
            SetPropColor(260353, "set_tint_shell", ColorId);
            if (getConfig("Load_HangarFloorStyle") == "plain")
                FloorStyleId = "set_floor_2";
            else
                FloorStyleId = "set_floor_1";
            SetIplProp(260353, FloorStyleId, true);
            if (getConfig("Load_HangarDecals") == "decal1")
                DecalId = "set_floor_decal_1";
            if (getConfig("Load_HangarDecals") == "decal2")
                DecalId = "set_floor_decal_2";
            if (getConfig("Load_HangarDecals") == "decal3")
                DecalId = "set_floor_decal_3";
            if (getConfig("Load_HangarDecals") == "decal4")
                DecalId = "set_floor_decal_4";
            if (getConfig("Load_HangarDecals") == "decal5")
                DecalId = "set_floor_decal_5";
            if (getConfig("Load_HangarDecals") == "decal6")
                DecalId = "set_floor_decal_6";
            if (getConfig("Load_HangarDecals") == "decal7")
                DecalId = "set_floor_decal_7";
            if (getConfig("Load_HangarDecals") == "decal8")
                DecalId = "set_floor_decal_8";
            else
                DecalId = "set_floor_decal_9";
            SetIplProp(260353, DecalId, true);
            SetPropColor(260353, DecalId, ColorId);
            if (getConfig("Load_HangarCranes") == "on")
                CranesId = "set_crane_tint";
            else
                CranesId = "none";
            SetIplProp(260353, CranesId, true);
            SetPropColor(260353, CranesId, ColorId);
            if (getConfig("Load_HangarModArea") == "on")
                ModAreaId = "set_modarea";
            else
                ModAreaId = "none";
            SetIplProp(260353, ModAreaId, true);
            SetPropColor(260353, ModAreaId, ColorId);
            if (getConfig("Load_HangarOffice") == "basic")
                OfficeId = "set_office_basic";
            else if (getConfig("Load_HangarOffice") == "modern")
                OfficeId = "set_office_modern";
            else
                OfficeId = "set_office_traditional";
            SetIplProp(260353, OfficeId, true);
            if (getConfig("Load_HangarBedroomStyle") == "modern")
                BedroomStyleId = "set_bedroom_modern";
            else if (getConfig("Load_HangarBedroomStyle") == "traditional")
                BedroomStyleId = "set_bedroom_traditional";
            else
                BedroomStyleId = "none";
            if (BedroomStyleId != "none"){            
                SetIplProp(260353, BedroomStyleId, true);
                SetIplProp(260353, "set_bedroom_tint", true);
            }
            if (getConfig("Load_HangarBedroomBlinds") == "openend")
                BedroomBlindsId = "set_bedroom_blinds_open";
            else if (getConfig("Load_HangarBedroomBlinds") == "closed")
                BedroomBlindsId = "set_bedroom_blinds_closed";
            else
                BedroomBlindsId = "none";
            SetIplProp(260353, BedroomBlindsId, true);
            if (getConfig("Load_HangarBedroomFakeLights") == "yellow")
                FakeLightColorId = 2;
            else if (getConfig("Load_HangarBedroomFakeLights") == "blue")
                FakeLightColorId = 1;
            else if (getConfig("Load_HangarBedroomFakeLights") == "white")
                FakeLightColorId = 0;
            else
                FakeLightColorId = "none";
            if (FakeLightColorId != "none"){
                SetIplProp(260353, "set_lighting_tint_props", true);
                SetPropColor(260353, "set_lighting_tint_props", FakeLightColorId);
            }
            if (getConfig("Load_HangarBedroomCeiling") == "yellow")
                BedroomCeilingId = "set_lighting_hangar_a";
            else if (getConfig("Load_HangarBedroomCeiling") == "blue")
                BedroomCeilingId = "set_lighting_hangar_b";
            else if (getConfig("Load_HangarBedroomCeiling") == "white")
                BedroomCeilingId = "set_lighting_hangar_c";
            else
                BedroomCeilingId = "none";
            if (BedroomCeilingId != "none"){
                SetIplProp(260353, BedroomCeilingId, true);
            }
            if (getConfig("Load_HangarBedroomWalls") == "neutral")
                BedroomWallsId = "set_lighting_wall_neutral";
            if (getConfig("Load_HangarBedroomWalls") == "blue")
                BedroomWallsId = "set_lighting_wall_tint01";
            if (getConfig("Load_HangarBedroomWalls") == "orange")
                BedroomWallsId = "set_lighting_wall_tint02";
            if (getConfig("Load_HangarBedroomWalls") == "lightyellow")
                BedroomWallsId = "set_lighting_wall_tint03";
            if (getConfig("Load_HangarBedroomWalls") == "lightyellow2")
                BedroomWallsId = "set_lighting_wall_tint04";
            if (getConfig("Load_HangarBedroomWalls") == "dimmed")
                BedroomWallsId = "set_lighting_wall_tint05";
            if (getConfig("Load_HangarBedroomWalls") == "strongyellow")
                BedroomWallsId = "set_lighting_wall_tint06";
            if (getConfig("Load_HangarBedroomWalls") == "white")
                BedroomWallsId = "set_lighting_wall_tint07";
            if (getConfig("Load_HangarBedroomWalls") == "lightgreen")
                BedroomWallsId = "set_lighting_wall_tint08";
            if (getConfig("Load_HangarBedroomWalls") == "yellow")
                BedroomWallsId = "set_lighting_wall_tint09";
            else
                BedroomWallsId = "none";
            if (BedroomWallsId != "none"){
                SetIplProp(260353, BedroomWallsId, true);
            }
            SetIplProp(260353, "set_bedroom_clutter", getConfig("Load_HangarBedroomClutter"));
            native.refreshInterior(260353);
        }
    }
}