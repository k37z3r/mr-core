import * as alt from "alt";
import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let Yacht = {
	ipl : [
		"smboat",
		"smboat_lod",
		"hei_yacht_heist",
        "hei_yacht_heist_bar",
        "hei_yacht_heist_bar_lod",
        "hei_yacht_heist_bedrm",
        "hei_yacht_heist_bedrm_lod",
        "hei_yacht_heist_bridge",
        "hei_yacht_heist_bridge_lod",
        "hei_yacht_heist_enginrm",
        "hei_yacht_heist_enginrm_lod",
        "hei_yacht_heist_lod",
        "hei_yacht_heist_lounge",
        "hei_yacht_heist_lounge_lod",
        "hei_yacht_heist_slod"
	],
	Enable : function(state){
		EnableIpl(Yacht.ipl, state);
		let modelHash = alt.hash("apa_mp_apa_yacht_jacuzzi_ripple1");
		let handle = native.getClosestObjectOfType(-2023.773, -1038.0, 5.40, 5.0, modelHash, false, false, false)
		if (state){
			if (handle == 0){
                native.requestModel(modelHash);
				if(native.hasModelLoaded(modelHash)){
					let water = native.createObjectNoOffset(modelHash, -2023.773, -1038.0, 5.40, false, false, false)
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