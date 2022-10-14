import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let TrevorsTrailer = {
	ipl : [],
	Enable : function(state, style, cophelmet, briefcase, michaelstuff){
		if (state){
			let styleid;
			if (style == "trash")
				styleid = "TrevorsTrailerTrash";
			else
				styleid = "trevorstrailertidy";
			SetIplProp(2562, styleid, true);
			SetIplProp(2562, "V_26_Trevor_Helmet3", cophelmet);
			SetIplProp(2562, "V_24_Trevor_Briefcase3", briefcase);
			SetIplProp(2562, "V_26_Michael_Stay3", michaelstuff);
			native.refreshInterior(206849);
		}
	}
}