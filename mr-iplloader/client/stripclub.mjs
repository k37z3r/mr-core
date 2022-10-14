import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let StripClub = {
	ipl : [],
	Enable : function(state, mess){
		if (state){
			SetIplProp(197121, "V_19_Trevor_Mess");
			native.refreshInterior(197121);
		}
	}
}