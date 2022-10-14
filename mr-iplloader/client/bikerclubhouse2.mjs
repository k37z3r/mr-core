import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';

export let BikerClubhouse2 = {
	ipl : ["bkr_biker_interior_placement_interior_1_biker_dlc_int_02_milo"],
	Enable : function(state, WallsStyle, color, LowerWallsStyle, LowerWallscolor, Furnitures, Furniturescolor, Decoration, Mural, GunLocker, ModBooth, Meth, Cash, Weed, Coke, Counterfeit, Documents){
		let WallsStyleId, colorid, LowerWallsStyleId, Lowercolorid, FurnituresId, Furniturescolorid, DecorationId, MuralId, GunLockerId, ModBoothId;
		EnableIpl(BikerClubhouse2.ipl, state);
		if (WallsStyle == "walls2")
			WallsStyleId = "walls_02";
		else
			WallsStyleId = "walls_01";
		SetIplProp(246529, WallsStyleId, true);
		if (color == "greengray")
			colorid = 1;
		else if(color == "multicolor")
			colorid = 2;
		else if(color == "orangegray")
			colorid = 3;
		else if(color == "blue")
			colorid = 4;
		else if(color == "lightbluesable")
			colorid = 5;
		else if(color == "greenred")
			colorid = 6;
		else if(color == "yellowgray")
			colorid = 7;
		else if(color == "red")
			colorid = 8;
		else if(color == "fuchsiangray")
			colorid = 9;
		else
			colorid = 0;
		native.setInteriorEntitySetColor(246529, WallsStyleId, colorid);
		if (LowerWallsStyle == "walls2")
			LowerWallsStyleId = "walls_02";
		else
			LowerWallsStyleId = "walls_01";
		SetIplProp(246529, LowerWallsStyleId, true);
		if (LowerWallscolor == "greengray")
			Lowercolorid = 1;
		else if(LowerWallscolor == "multicolor")
			Lowercolorid = 2;
		else if(LowerWallscolor == "orangegray")
			Lowercolorid = 3;
		else if(LowerWallscolor == "blue")
			Lowercolorid = 4;
		else if(LowerWallscolor == "lightbluesable")
			Lowercolorid = 5;
		else if(LowerWallscolor == "greenred")
			Lowercolorid = 6;
		else if(LowerWallscolor == "yellowgray")
			Lowercolorid = 7;
		else if(LowerWallscolor == "red")
			Lowercolorid = 8;
		else if(LowerWallscolor == "fuchsiangray")
			Lowercolorid = 9;
		else
			Lowercolorid = 0;
		native.setInteriorEntitySetColor(246529, LowerWallsStyleId, Lowercolorid);
		if (Furnitures == "furnishings2")
			FurnituresId = "furnishings_02";
		else
			FurnituresId = "furnishings_01";
		SetIplProp(246529, FurnituresId, true);
		if (Furniturescolor == "darkBrown")
			Furniturescolorid = 1;
		else if(Furniturescolor == "brown")
			Furniturescolorid = 2;
		else if(Furniturescolor == "turquoise2")
			Furniturescolorid = 3;
		else if(Furniturescolor == "brown2")
			Furniturescolorid = 4;
		else if(Furniturescolor == "gray")
			Furniturescolorid = 5;
		else if(Furniturescolor == "red")
			Furniturescolorid = 6;
		else if(Furniturescolor == "darkgray")
			Furniturescolorid = 7;
		else if(Furniturescolor == "black")
			Furniturescolorid = 8;
		else if(Furniturescolor == "red2")
			Furniturescolorid = 9;
		else
			Furniturescolorid = 0;
		native.setInteriorEntitySetColor(246529, FurnituresId, Furniturescolorid);
		if (Decoration == "decorative2")
			DecorationId = "decorative_02";
		else
			DecorationId = "decorative_01";
		SetIplProp(246529, DecorationId, true);
		if (Mural == "death1")
			MuralId = "mural_01";
		else if (Mural == "citycolor1")
			MuralId = "mural_02";
		else if (Mural == "death2")
			MuralId = "mural_03"; 
		else if (Mural == "citycolor2")
			MuralId = "mural_04";
		else if (Mural == "graffitis")
			MuralId = "mural_05"; 
		else if (Mural == "citycolor3")
			MuralId = "mural_06"; 
		else if (Mural == "citycolor4")
			MuralId = "mural_07"; 
		else if (Mural == "cityblack")
			MuralId = "mural_08";
		else if (Mural == "death3")
			MuralId = "mural_09";
		else
			MuralId = "none";
		if (MuralId != "none"){
			SetIplProp(246529, MuralId, true);
		}
		if (GunLocker == "off")
			GunLockerId = "no_gun_locker";
		else if (GunLocker == "on")
			GunLockerId = "gun_locker";
		else
			GunLockerId = "none";
		if (GunLockerId != "none"){
			SetIplProp(246529, GunLockerId, true);
		}
		if (ModBooth == "off")
			ModBoothId = "no_mod_booth";
		else if (ModBooth == "on")
			ModBoothId = "mod_booth";
		else
			ModBoothId = "none";
		if (ModBoothId != "none"){
			SetIplProp(246529, ModBoothId, true);
		}
		if (Meth == "stage1")
			SetIplProp(246529, "meth_small", true);
		else if (Meth == "stage2"){
			SetIplProp(246529, "meth_small", true);
			SetIplProp(246529, "meth_medium", true);
		}
		else if (Meth == "stage3"){
			SetIplProp(246529, "meth_small", true);
			SetIplProp(246529, "meth_medium", true);
			SetIplProp(246529, "meth_large", true);
		}
		else{}
		if (Cash == "stage1")
			SetIplProp(246529, "cash_small", true);
		else if (Cash == "stage2"){
			SetIplProp(246529, "cash_small", true);
			SetIplProp(246529, "cash_medium", true);
		}
		else if (Cash == "stage3"){
			SetIplProp(246529, "cash_small", true);
			SetIplProp(246529, "cash_medium", true);
			SetIplProp(246529, "cash_large", true);
		}
		else{}
		if (Cash == "stage1")
			SetIplProp(246529, "cash_small", true);
		else if (Cash == "stage2"){
			SetIplProp(246529, "cash_small", true);
			SetIplProp(246529, "cash_medium", true);
		}
		else if (Cash == "stage3"){
			SetIplProp(246529, "cash_small", true);
			SetIplProp(246529, "cash_medium", true);
			SetIplProp(246529, "cash_large", true);
		}
		else{}
		if (Weed == "stage1")
			SetIplProp(246529, "weed_small", true);
		else if (Weed == "stage2"){
			SetIplProp(246529, "weed_small", true);
			SetIplProp(246529, "weed_medium", true);
		}
		else if (Weed == "stage3"){
			SetIplProp(246529, "weed_small", true);
			SetIplProp(246529, "weed_medium", true);
			SetIplProp(246529, "weed_large", true);
		}
		else{}
		if (Coke == "stage1")
			SetIplProp(246529, "coke_small", true);
		else if (Coke == "stage2"){
			SetIplProp(246529, "coke_small", true);
			SetIplProp(246529, "coke_medium", true);
		}
		else if (Coke == "stage3"){
			SetIplProp(246529, "coke_small", true);
			SetIplProp(246529, "coke_medium", true);
			SetIplProp(246529, "coke_large", true);
		}
		else{}
		if (Counterfeit == "stage1")
			SetIplProp(246529, "counterfeit_small", true);
		else if (Counterfeit == "stage2"){
			SetIplProp(246529, "counterfeit_small", true);
			SetIplProp(246529, "counterfeit_medium", true);
		}
		else if (Counterfeit == "stage3"){
			SetIplProp(246529, "counterfeit_small", true);
			SetIplProp(246529, "counterfeit_medium", true);
			SetIplProp(246529, "counterfeit_large", true);
		}
		else{}
		if (Documents == "stage1")
			SetIplProp(246529, "id_small", true);
		else if (Documents == "stage2"){
			SetIplProp(246529, "id_small", true);
			SetIplProp(246529, "id_medium", true);
		}
		else if (Documents == "stage3"){
			SetIplProp(246529, "id_small", true);
			SetIplProp(246529, "id_medium", true);
			SetIplProp(246529, "id_large", true);
		}
		else{}
		native.refreshInterior(246529);
	}
}