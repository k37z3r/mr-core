import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';

export let BikerClubhouse1 = {
	ipl : ["bkr_biker_interior_placement_interior_0_biker_dlc_int_01_milo"],
	Enable : function(state, WallsStyle, color, Furnitures, Furniturescolor, Decoration, Mural, GunLocker, ModBooth, Meth, Cash, Weed, Coke, Counterfeit, Documents){
		if (state){
			let WallsStyleId, colorid, FurnituresId, Furniturescolorid, DecorationId, MuralId, GunLockerId, ModBoothId;
			EnableIpl(BikerClubhouse1.ipl, state);
			if (WallsStyle == "walls2")
				WallsStyleId = "walls_02";
			else
				WallsStyleId = "walls_01";
			SetIplProp(246273, WallsStyleId, true);
			if (color == "yellowgray")
				colorid = 1;
			else if(color == "red")
				colorid = 2;
			else if(color == "brown")
				colorid = 3;
			else if(color == "yellow")
				colorid = 4;
			else if(color == "lightyellow")
				colorid = 5;
			else if(color == "lightyellowgray")
				colorid = 6;
			else if(color == "lightgray")
				colorid = 7;
			else if(color == "orange")
				colorid = 8;
			else if(color == "gray")
				colorid = 9;
			else
				colorid = 0;
			native.setInteriorEntitySetColor(246273, WallsStyleId, colorid);
			if (Furnitures == "furnishings2")
				FurnituresId = "furnishings_02";
			else
				FurnituresId = "furnishings_01";
			SetIplProp(246273, FurnituresId, true);
			if (Furniturescolor == "yellowgray")
				Furniturescolorid = 1;
			else if(Furniturescolor == "red")
				Furniturescolorid = 2;
			else if(Furniturescolor == "brown")
				Furniturescolorid = 3;
			else if(Furniturescolor == "yellow")
				Furniturescolorid = 4;
			else if(Furniturescolor == "lightyellow")
				Furniturescolorid = 5;
			else if(Furniturescolor == "lightyellowgray")
				Furniturescolorid = 6;
			else if(Furniturescolor == "lightgray")
				Furniturescolorid = 7;
			else if(Furniturescolor == "orange")
				Furniturescolorid = 8;
			else if(Furniturescolor == "gray")
				Furniturescolorid = 9;
			else
				Furniturescolorid = 0;
			native.setInteriorEntitySetColor(246273, FurnituresId, Furniturescolorid);
			if (Decoration == "decorative2")
				DecorationId = "decorative_02";
			else
				DecorationId = "decorative_01";
			SetIplProp(246273, DecorationId, true);
			if (Mural == "ridefree")
				MuralId = "mural_01";
			else if (Mural == "mods")
				MuralId = "mural_02";
			else if (Mural == "brave")
				MuralId = "mural_03"; 
			else if (Mural == "fist")
				MuralId = "mural_04";
			else if (Mural == "forest")
				MuralId = "mural_05"; 
			else if (Mural == "mods2")
				MuralId = "mural_06"; 
			else if (Mural == "rideforever")
				MuralId = "mural_07"; 
			else if (Mural == "heart")
				MuralId = "mural_08";
			else if (Mural == "route68")
				MuralId = "mural_09";
			else
				MuralId = "none";
			if (MuralId != "none"){
				SetIplProp(246273, MuralId, true);
			}
			if (GunLocker == "off")
				GunLockerId = "no_gun_locker";
			else if (GunLocker == "on")
				GunLockerId = "gun_locker";
			else
				GunLockerId = "none";
			if (GunLockerId != "none"){
				SetIplProp(246273, GunLockerId, true);
			}
			if (ModBooth == "off")
				ModBoothId = "no_mod_booth";
			else if (ModBooth == "on")
				ModBoothId = "mod_booth";
			else
				ModBoothId = "none";
			if (ModBoothId != "none"){
				SetIplProp(246273, ModBoothId, true);
			}
			if (Meth == "stage1")
				SetIplProp(246273, "meth_stash1", true);
			else if (Meth == "stage2"){
				SetIplProp(246273, "meth_stash1", true);
				SetIplProp(246273, "meth_stash2", true);
			}
			else if (Meth == "stage3"){
				SetIplProp(246273, "meth_stash1", true);
				SetIplProp(246273, "meth_stash2", true);
				SetIplProp(246273, "meth_stash3", true);
			}
			else{}
			if (Cash == "stage1")
				SetIplProp(246273, "cash_stash1", true);
			else if (Cash == "stage2"){
				SetIplProp(246273, "cash_stash1", true);
				SetIplProp(246273, "cash_stash2", true);
			}
			else if (Cash == "stage3"){
				SetIplProp(246273, "cash_stash1", true);
				SetIplProp(246273, "cash_stash2", true);
				SetIplProp(246273, "cash_stash3", true);
			}
			else{}
			if (Cash == "stage1")
				SetIplProp(246273, "cash_stash1", true);
			else if (Cash == "stage2"){
				SetIplProp(246273, "cash_stash1", true);
				SetIplProp(246273, "cash_stash2", true);
			}
			else if (Cash == "stage3"){
				SetIplProp(246273, "cash_stash1", true);
				SetIplProp(246273, "cash_stash2", true);
				SetIplProp(246273, "cash_stash3", true);
			}
			else{}
			if (Weed == "stage1")
				SetIplProp(246273, "weed_stash1", true);
			else if (Weed == "stage2"){
				SetIplProp(246273, "weed_stash1", true);
				SetIplProp(246273, "weed_stash2", true);
			}
			else if (Weed == "stage3"){
				SetIplProp(246273, "weed_stash1", true);
				SetIplProp(246273, "weed_stash2", true);
				SetIplProp(246273, "weed_stash3", true);
			}
			else{}
			if (Coke == "stage1")
				SetIplProp(246273, "coke_stash1", true);
			else if (Coke == "stage2"){
				SetIplProp(246273, "coke_stash1", true);
				SetIplProp(246273, "coke_stash2", true);
			}
			else if (Coke == "stage3"){
				SetIplProp(246273, "coke_stash1", true);
				SetIplProp(246273, "coke_stash2", true);
				SetIplProp(246273, "coke_stash3", true);
			}
			else{}
			if (Counterfeit == "stage1")
				SetIplProp(246273, "counterfeit_stash1", true);
			else if (Counterfeit == "stage2"){
				SetIplProp(246273, "counterfeit_stash1", true);
				SetIplProp(246273, "counterfeit_stash2", true);
			}
			else if (Counterfeit == "stage3"){
				SetIplProp(246273, "counterfeit_stash1", true);
				SetIplProp(246273, "counterfeit_stash2", true);
				SetIplProp(246273, "counterfeit_stash3", true);
			}
			else{}
			if (Documents == "stage1")
				SetIplProp(246273, "id_stash1", true);
			else if (Documents == "stage2"){
				SetIplProp(246273, "id_stash1", true);
				SetIplProp(246273, "id_stash2", true);
			}
			else if (Documents == "stage3"){
				SetIplProp(246273, "id_stash1", true);
				SetIplProp(246273, "id_stash2", true);
				SetIplProp(246273, "id_stash3", true);
			}
			else{}
			native.refreshInterior(246273);
		}
	}
}