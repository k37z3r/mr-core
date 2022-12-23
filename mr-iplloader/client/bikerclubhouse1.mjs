import * as native from 'natives';
import { EnableIpl, SetIplProp, SetPropColor, getConfig } from 'mr-functions';

export let BikerClubhouse1 = {
    ipl : ["bkr_biker_interior_placement_interior_0_biker_dlc_int_01_milo"],
    Enable : function(state){
        if (state){
            let WallsStyleId, colorid, FurnituresId, Furniturescolorid, DecorationId, MuralId, GunLockerId, ModBoothId;
            EnableIpl(BikerClubhouse1.ipl, state);
            if (getConfig("Load_WallsStyle") == "walls2")
                WallsStyleId = "walls_02";
            else
                WallsStyleId = "walls_01";
            SetIplProp(246273, WallsStyleId, true);
            if (getConfig("Load_WallColor") == "yellowgray")
                colorid = 1;
            else if(getConfig("Load_WallColor") == "red")
                colorid = 2;
            else if(getConfig("Load_WallColor") == "brown")
                colorid = 3;
            else if(getConfig("Load_WallColor") == "yellow")
                colorid = 4;
            else if(getConfig("Load_WallColor") == "lightyellow")
                colorid = 5;
            else if(getConfig("Load_WallColor") == "lightyellowgray")
                colorid = 6;
            else if(getConfig("Load_WallColor") == "lightgray")
                colorid = 7;
            else if(getConfig("Load_WallColor") == "orange")
                colorid = 8;
            else if(getConfig("Load_WallColor") == "gray")
                colorid = 9;
            else
                colorid = 0;
            SetPropColor(246273, WallsStyleId, colorid);
            if (getConfig("Load_Furnitures") == "furnishings2")
                FurnituresId = "furnishings_02";
            else
                FurnituresId = "furnishings_01";
            SetIplProp(246273, FurnituresId, true);
            if (getConfig("Load_Furniturescolor") == "yellowgray")
                Furniturescolorid = 1;
            else if(getConfig("Load_Furniturescolor") == "red")
                Furniturescolorid = 2;
            else if(getConfig("Load_Furniturescolor") == "brown")
                Furniturescolorid = 3;
            else if(getConfig("Load_Furniturescolor") == "yellow")
                Furniturescolorid = 4;
            else if(getConfig("Load_Furniturescolor") == "lightyellow")
                Furniturescolorid = 5;
            else if(getConfig("Load_Furniturescolor") == "lightyellowgray")
                Furniturescolorid = 6;
            else if(getConfig("Load_Furniturescolor") == "lightgray")
                Furniturescolorid = 7;
            else if(getConfig("Load_Furniturescolor") == "orange")
                Furniturescolorid = 8;
            else if(getConfig("Load_Furniturescolor") == "gray")
                Furniturescolorid = 9;
            else
                Furniturescolorid = 0;
            SetPropColor(246273, FurnituresId, Furniturescolorid);
            if (getConfig("Load_Decoration") == "decorative2")
                DecorationId = "decorative_02";
            else
                DecorationId = "decorative_01";
            SetIplProp(246273, DecorationId, true);
            if (getConfig("Load_Mural") == "ridefree")
                MuralId = "mural_01";
            else if (getConfig("Load_Mural") == "mods")
                MuralId = "mural_02";
            else if (getConfig("Load_Mural") == "brave")
                MuralId = "mural_03"; 
            else if (getConfig("Load_Mural") == "fist")
                MuralId = "mural_04";
            else if (getConfig("Load_Mural") == "forest")
                MuralId = "mural_05"; 
            else if (getConfig("Load_Mural") == "mods2")
                MuralId = "mural_06"; 
            else if (getConfig("Load_Mural") == "rideforever")
                MuralId = "mural_07"; 
            else if (getConfig("Load_Mural") == "heart")
                MuralId = "mural_08";
            else if (getConfig("Load_Mural") == "route68")
                MuralId = "mural_09";
            else
                MuralId = "none";
            if (MuralId != "none"){
                SetIplProp(246273, MuralId, true);
            }
            if (getConfig("Load_GunLocker") == "off")
                GunLockerId = "no_gun_locker";
            else if (getConfig("Load_GunLocker") == "on")
                GunLockerId = "gun_locker";
            else
                GunLockerId = "none";
            if (GunLockerId != "none"){
                SetIplProp(246273, GunLockerId, true);
            }
            if (getConfig("Load_ModBooth") == "off")
                ModBoothId = "no_mod_booth";
            else if (getConfig("Load_ModBooth") == "on")
                ModBoothId = "mod_booth";
            else
                ModBoothId = "none";
            if (ModBoothId != "none"){
                SetIplProp(246273, ModBoothId, true);
            }
            if (getConfig("Load_Meth") == "stage1")
                SetIplProp(246273, "meth_stash1", true);
            else if (getConfig("Load_Meth") == "stage2"){
                SetIplProp(246273, "meth_stash1", true);
                SetIplProp(246273, "meth_stash2", true);
            }
            else if (getConfig("Load_Meth") == "stage3"){
                SetIplProp(246273, "meth_stash1", true);
                SetIplProp(246273, "meth_stash2", true);
                SetIplProp(246273, "meth_stash3", true);
            }
            else{}
            if (getConfig("Load_Cash") == "stage1")
                SetIplProp(246273, "cash_stash1", true);
            else if (getConfig("Load_Cash") == "stage2"){
                SetIplProp(246273, "cash_stash1", true);
                SetIplProp(246273, "cash_stash2", true);
            }
            else if (getConfig("Load_Cash") == "stage3"){
                SetIplProp(246273, "cash_stash1", true);
                SetIplProp(246273, "cash_stash2", true);
                SetIplProp(246273, "cash_stash3", true);
            }
            else{}
            if (getConfig("Load_Weed") == "stage1")
                SetIplProp(246273, "weed_stash1", true);
            else if (getConfig("Load_Weed") == "stage2"){
                SetIplProp(246273, "weed_stash1", true);
                SetIplProp(246273, "weed_stash2", true);
            }
            else if (getConfig("Load_Weed") == "stage3"){
                SetIplProp(246273, "weed_stash1", true);
                SetIplProp(246273, "weed_stash2", true);
                SetIplProp(246273, "weed_stash3", true);
            }
            else{}
            if (getConfig("Load_Coke") == "stage1")
                SetIplProp(246273, "coke_stash1", true);
            else if (getConfig("Load_Coke") == "stage2"){
                SetIplProp(246273, "coke_stash1", true);
                SetIplProp(246273, "coke_stash2", true);
            }
            else if (getConfig("Load_Coke") == "stage3"){
                SetIplProp(246273, "coke_stash1", true);
                SetIplProp(246273, "coke_stash2", true);
                SetIplProp(246273, "coke_stash3", true);
            }
            else{}
            if (getConfig("Load_Counterfeit") == "stage1")
                SetIplProp(246273, "counterfeit_stash1", true);
            else if (getConfig("Load_Counterfeit") == "stage2"){
                SetIplProp(246273, "counterfeit_stash1", true);
                SetIplProp(246273, "counterfeit_stash2", true);
            }
            else if (getConfig("Load_Counterfeit") == "stage3"){
                SetIplProp(246273, "counterfeit_stash1", true);
                SetIplProp(246273, "counterfeit_stash2", true);
                SetIplProp(246273, "counterfeit_stash3", true);
            }
            else{}
            if (getConfig("Load_Documents") == "stage1")
                SetIplProp(246273, "id_stash1", true);
            else if (getConfig("Load_Documents") == "stage2"){
                SetIplProp(246273, "id_stash1", true);
                SetIplProp(246273, "id_stash2", true);
            }
            else if (getConfig("Load_Documents") == "stage3"){
                SetIplProp(246273, "id_stash1", true);
                SetIplProp(246273, "id_stash2", true);
                SetIplProp(246273, "id_stash3", true);
            }
            else{}
            native.refreshInterior(246273);
        }
    }
}