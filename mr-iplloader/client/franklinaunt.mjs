import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let FranklinAunt = {
	ipl : [],
	Enable : function(state, style, bandana, bag){
		if (state){
			let styleid;
			if (style == "stuff")
				styleid = "V_57_FranklinStuff";
			else if (shutter == "left")
				styleid = "V_57_Franklin_LEFT";
			else
				styleid = "none";
			if ((styleid != "none" && styleid == "V_57_FranklinStuff") || (styleid != "none" && styleid == "V_57_Franklin_LEFT")){
				SetIplProp(197889, styleid, true);
			}
			SetIplProp(197889, "V_57_GangBandana", bandana);
			SetIplProp(197889, "V_57_Safari", bag);
			native.refreshInterior(197889);
		}
	}
}