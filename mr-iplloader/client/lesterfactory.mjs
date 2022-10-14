import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let LesterFactory = {
	ipl : [],
	Enable : function(state, blueprint, kitbag, fireman, armour, gasmask, agency){
		if (state){
			SetIplProp(92674, "V_53_Agency_Blueprint", blueprint);
			SetIplProp(92674, "V_35_KitBag", kitbag);
			SetIplProp(92674, "V_35_Fireman", fireman);
			SetIplProp(92674, "V_35_Body_Armour", armour);
			SetIplProp(92674, "Jewel_Gasmasks", gasmask);
			SetIplProp(92674, "v_53_agency _overalls", agency);
			native.refreshInterior(92674);
		}
	}
}