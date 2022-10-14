import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let Franklin = {
	ipl : [],
	Enable : function(state, style, glassdoor, progress_flyer, progress_tux, progress_tshirt, bong_and_wine){
		if (state){
			let styleid, glassdoorid, key;
			if (style == "unpacking")
				styleid = ["franklin_unpacking"];
			else if (style == "settled")
				styleid = ["franklin_unpacking", "franklin_settled"];
			else if (style == "cardboxes")
				styleid = ["showhome_only"];
			else
				styleid = "none";
			if (styleid != "none" && (style == "unpacking" || style == "settled" || style == "cardboxes")){
				for (key in styleid){
					SetIplProp(206849, styleid[key], true);
				}
			}
			if (glassdoor == "unlocked")
				glassdoorid = "unlocked";
			else
				glassdoorid = "locked";
			SetIplProp(206849, glassdoorid, true);
			SetIplProp(206849, "progress_flyer", progress_flyer);
			SetIplProp(206849, "progress_tux", progress_tux);
			SetIplProp(206849, "progress_tshirt", progress_tshirt);
			SetIplProp(206849, "bong_and_wine", bong_and_wine);
			native.refreshInterior(206849);
		}
	}
}