import * as native from 'natives';
import { EnableIpl, SetIplProp, SetPropColor, getConfig } from 'mr-functions';
export let BikerClubhouse2 = {
    ipl : ["bkr_biker_interior_placement_interior_1_biker_dlc_int_02_milo"],
    Enable : function(state){
        if (state){
            let WallsStyleId, colorid, Lowercolorid, FurnituresId, Furniturescolorid, DecorationId, MuralId, GunLockerId, ModBoothId;
            EnableIpl(BikerClubhouse2.ipl, state);
            if (getConfig("Load_BikerClubhouse2_WallsStyle") == "walls2")
                WallsStyleId = "walls_02";
            else
                WallsStyleId = "walls_01";
            SetIplProp(246529, WallsStyleId, true);
            if (getConfig("Load_BikerClubhouse2_WallColor") == "greengray")
                colorid = 1;
            else if(getConfig("Load_BikerClubhouse2_WallColor") == "multicolor")
                colorid = 2;
            else if(getConfig("Load_BikerClubhouse2_WallColor") == "orangegray")
                colorid = 3;
            else if(getConfig("Load_BikerClubhouse2_WallColor") == "blue")
                colorid = 4;
            else if(getConfig("Load_BikerClubhouse2_WallColor") == "lightbluesable")
                colorid = 5;
            else if(getConfig("Load_BikerClubhouse2_WallColor") == "greenred")
                colorid = 6;
            else if(getConfig("Load_BikerClubhouse2_WallColor") == "yellowgray")
                colorid = 7;
            else if(getConfig("Load_BikerClubhouse2_WallColor") == "red")
                colorid = 8;
            else if(getConfig("Load_BikerClubhouse2_WallColor") == "fuchsiangray")
                colorid = 9;
            else
                colorid = 0;
            SetPropColor(246529, WallsStyleId, colorid);
            SetIplProp(246529, "lower_walls_default", true);
            if (getConfig("Load_BikerClubhouse2_LowerWallscolor") == "greengray")
                Lowercolorid = 1;
            else if(getConfig("Load_BikerClubhouse2_LowerWallscolor") == "multicolor")
                Lowercolorid = 2;
            else if(getConfig("Load_BikerClubhouse2_LowerWallscolor") == "orangegray")
                Lowercolorid = 3;
            else if(getConfig("Load_BikerClubhouse2_LowerWallscolor") == "blue")
                Lowercolorid = 4;
            else if(getConfig("Load_BikerClubhouse2_LowerWallscolor") == "lightbluesable")
                Lowercolorid = 5;
            else if(getConfig("Load_BikerClubhouse2_LowerWallscolor") == "greenred")
                Lowercolorid = 6;
            else if(getConfig("Load_BikerClubhouse2_LowerWallscolor") == "yellowgray")
                Lowercolorid = 7;
            else if(getConfig("Load_BikerClubhouse2_LowerWallscolor") == "red")
                Lowercolorid = 8;
            else if(getConfig("Load_BikerClubhouse2_LowerWallscolor") == "fuchsiangray")
                Lowercolorid = 9;
            else
                Lowercolorid = 0;
            SetPropColor(246529, "lower_walls_default", Lowercolorid);
            if (getConfig("Load_BikerClubhouse2_Furnitures") == "furnishings2")
                FurnituresId = "furnishings_02";
            else
                FurnituresId = "furnishings_01";
            SetIplProp(246529, FurnituresId, true);
            if (getConfig("Load_BikerClubhouse2_Furniturescolor") == "darkBrown")
                Furniturescolorid = 1;
            else if(getConfig("Load_BikerClubhouse2_Furniturescolor") == "brown")
                Furniturescolorid = 2;
            else if(getConfig("Load_BikerClubhouse2_Furniturescolor") == "turquoise2")
                Furniturescolorid = 3;
            else if(getConfig("Load_BikerClubhouse2_Furniturescolor") == "brown2")
                Furniturescolorid = 4;
            else if(getConfig("Load_BikerClubhouse2_Furniturescolor") == "gray")
                Furniturescolorid = 5;
            else if(getConfig("Load_BikerClubhouse2_Furniturescolor") == "red")
                Furniturescolorid = 6;
            else if(getConfig("Load_BikerClubhouse2_Furniturescolor") == "darkgray")
                Furniturescolorid = 7;
            else if(getConfig("Load_BikerClubhouse2_Furniturescolor") == "black")
                Furniturescolorid = 8;
            else if(getConfig("Load_BikerClubhouse2_Furniturescolor") == "red2")
                Furniturescolorid = 9;
            else
                Furniturescolorid = 0;
            SetPropColor(246529, FurnituresId, Furniturescolorid);
            if (getConfig("Load_BikerClubhouse2_Decoration") == "decorative2")
                DecorationId = "decorative_02";
            else
                DecorationId = "decorative_01";
            SetIplProp(246529, DecorationId, true);
            if (getConfig("Load_BikerClubhouse2_Mural") == "death1")
                MuralId = "mural_01";
            else if (getConfig("Load_BikerClubhouse2_Mural") == "citycolor1")
                MuralId = "mural_02";
            else if (getConfig("Load_BikerClubhouse2_Mural") == "death2")
                MuralId = "mural_03"; 
            else if (getConfig("Load_BikerClubhouse2_Mural") == "citycolor2")
                MuralId = "mural_04";
            else if (getConfig("Load_BikerClubhouse2_Mural") == "graffitis")
                MuralId = "mural_05"; 
            else if (getConfig("Load_BikerClubhouse2_Mural") == "citycolor3")
                MuralId = "mural_06"; 
            else if (getConfig("Load_BikerClubhouse2_Mural") == "citycolor4")
                MuralId = "mural_07"; 
            else if (getConfig("Load_BikerClubhouse2_Mural") == "cityblack")
                MuralId = "mural_08";
            else if (getConfig("Load_BikerClubhouse2_Mural") == "death3")
                MuralId = "mural_09";
            else
                MuralId = "none";
            if (MuralId != "none"){
                SetIplProp(246529, MuralId, true);
            }
            if (getConfig("Load_BikerClubhouse2_GunLocker") == "off")
                GunLockerId = "no_gun_locker";
            else if (getConfig("Load_BikerClubhouse2_GunLocker") == "on")
                GunLockerId = "gun_locker";
            else
                GunLockerId = "none";
            if (GunLockerId != "none"){
                SetIplProp(246529, GunLockerId, true);
            }
            if (getConfig("Load_BikerClubhouse2_ModBooth") == "off")
                ModBoothId = "no_mod_booth";
            else if (getConfig("Load_BikerClubhouse2_ModBooth") == "on")
                ModBoothId = "mod_booth";
            else
                ModBoothId = "none";
            if (ModBoothId != "none"){
                SetIplProp(246529, ModBoothId, true);
            }
            if (getConfig("Load_BikerClubhouse2_Meth") == "stage1")
                SetIplProp(246529, "meth_small", true);
            else if (getConfig("Load_BikerClubhouse2_Meth") == "stage2"){
                SetIplProp(246529, "meth_small", true);
                SetIplProp(246529, "meth_medium", true);
            }
            else if (getConfig("Load_BikerClubhouse2_Meth") == "stage3"){
                SetIplProp(246529, "meth_small", true);
                SetIplProp(246529, "meth_medium", true);
                SetIplProp(246529, "meth_large", true);
            }
            else{}
            if (getConfig("Load_BikerClubhouse2_Cash") == "stage1")
                SetIplProp(246529, "cash_small", true);
            else if (getConfig("Load_BikerClubhouse2_Cash") == "stage2"){
                SetIplProp(246529, "cash_small", true);
                SetIplProp(246529, "cash_medium", true);
            }
            else if (getConfig("Load_BikerClubhouse2_Cash") == "stage3"){
                SetIplProp(246529, "cash_small", true);
                SetIplProp(246529, "cash_medium", true);
                SetIplProp(246529, "cash_large", true);
            }
            else{}
            if (getConfig("Load_BikerClubhouse2_Weed") == "stage1")
                SetIplProp(246529, "weed_small", true);
            else if (getConfig("Load_BikerClubhouse2_Weed") == "stage2"){
                SetIplProp(246529, "weed_small", true);
                SetIplProp(246529, "weed_medium", true);
            }
            else if (getConfig("Load_BikerClubhouse2_Weed") == "stage3"){
                SetIplProp(246529, "weed_small", true);
                SetIplProp(246529, "weed_medium", true);
                SetIplProp(246529, "weed_large", true);
            }
            else{}
            if (getConfig("Load_BikerClubhouse2_Coke") == "stage1")
                SetIplProp(246529, "coke_small", true);
            else if (getConfig("Load_BikerClubhouse2_Coke") == "stage2"){
                SetIplProp(246529, "coke_small", true);
                SetIplProp(246529, "coke_medium", true);
            }
            else if (getConfig("Load_BikerClubhouse2_Coke") == "stage3"){
                SetIplProp(246529, "coke_small", true);
                SetIplProp(246529, "coke_medium", true);
                SetIplProp(246529, "coke_large", true);
            }
            else{}
            if (getConfig("Load_BikerClubhouse2_Counterfeit") == "stage1")
                SetIplProp(246529, "counterfeit_small", true);
            else if (getConfig("Load_BikerClubhouse2_Counterfeit") == "stage2"){
                SetIplProp(246529, "counterfeit_small", true);
                SetIplProp(246529, "counterfeit_medium", true);
            }
            else if (getConfig("Load_BikerClubhouse2_Counterfeit") == "stage3"){
                SetIplProp(246529, "counterfeit_small", true);
                SetIplProp(246529, "counterfeit_medium", true);
                SetIplProp(246529, "counterfeit_large", true);
            }
            else{}
            if (getConfig("Load_BikerClubhouse2_Documents") == "stage1")
                SetIplProp(246529, "id_small", true);
            else if (getConfig("Load_BikerClubhouse2_Documents") == "stage2"){
                SetIplProp(246529, "id_small", true);
                SetIplProp(246529, "id_medium", true);
            }
            else if (getConfig("Load_BikerClubhouse2_Documents") == "stage3"){
                SetIplProp(246529, "id_small", true);
                SetIplProp(246529, "id_medium", true);
                SetIplProp(246529, "id_large", true);
            }
            else{}
            native.refreshInterior(246529);
        }
    }
}