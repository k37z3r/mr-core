import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let Michael = {
	ipl : [],
	Enable : function(state, style, bed, moviePoster, fameShamePoste, planeTicket, spyGlasses, bugershot, garage){
		if (state){
			let styleid, bedid, key;
			if (style == "moved")
				styleid = ["V_Michael_bed_Messy", "V_Michael_M_moved", "V_Michael_D_Moved", "V_Michael_L_Moved", "V_Michael_S_items_swap", "V_Michael_M_items_swap"];
			else
				styleid = ["V_Michael_bed_tidy", "V_Michael_M_items", "V_Michael_D_items", "V_Michael_S_items", "V_Michael_L_Items"];
			for (key in styleid){
				SetIplProp(166657, styleid[key], true);
			}
			if (bed == "tidy")
				bedid = "V_Michael_bed_tidy";
			else
				bedid = "V_Michael_bed_Messy";
			SetIplProp(166657, bedid, true);
			SetIplProp(166657, "Michael_premier", moviePoster);
			SetIplProp(166657, "V_Michael_FameShame", fameShamePoste);
			SetIplProp(166657, "V_Michael_plane_ticket", planeTicket);
			SetIplProp(166657, "V_Michael_JewelHeist", spyGlasses);
			SetIplProp(166657, "burgershot_yoga", bugershot);
			SetIplProp(166401, "V_Michael_Scuba", garage);
			native.refreshInterior(166657);
			native.refreshInterior(166401);
		}
	}
}