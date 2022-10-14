import * as alt from "alt";
import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let Gun_Yacht = {
	ipl : [
        "gr_heist_yacht2",
        "gr_heist_yacht2_bar",
        "gr_heist_yacht2_bar_lod",
        "gr_heist_yacht2_bedrm",
        "gr_heist_yacht2_bedrm_lod",
        "gr_heist_yacht2_bridge",
        "gr_heist_yacht2_bridge_lod",
        "gr_heist_yacht2_enginrm",
        "gr_heist_yacht2_enginrm_lod",
        "gr_heist_yacht2_lod",
        "gr_heist_yacht2_lounge",
        "gr_heist_yacht2_lounge_lod",
        "gr_heist_yacht2_slod",
	],
	Enable : function(state){
		EnableIpl(Gun_Yacht.ipl, state);
		let modelHash = alt.hash("apa_mp_apa_yacht_jacuzzi_ripple1");
		let handle = native.getClosestObjectOfType(-1369.0, 6736.0, 5.40, 5.0, modelHash, false, false, false)
		if (state){
			if (handle == 0){
                native.requestModel(modelHash);
				if(native.hasModelLoaded(modelHash)){
					let water = native.createObjectNoOffset(modelHash, -1369.0, 6736.0, 5.40, false, false, false)
                    native.setEntityAsMissionEntity(water, false, false)
				}
			}
            else{
                if (handle != 0){
                    native.setEntityAsMissionEntity(handle, false, false)
                    native.deleteEntity(handle)
                }
            }
		}
	}
}