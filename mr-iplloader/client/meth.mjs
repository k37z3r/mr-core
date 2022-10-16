import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';

export let BikerMethLab = {
	ipl : ["bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo"],
	Enable : function(state, Style, Security, Production){
		if (state){
			EnableIpl(BikerMethLab.ipl, state);
			if (Style == "empty")
				SetIplProp(247041, "meth_lab_empty", true);
			else if (Style == "basic"){
				SetIplProp(247041, "meth_lab_basic", true);
				SetIplProp(247041, "meth_lab_setup", true);
			}
			else if (Style == "upgrade"){
				SetIplProp(247041, "meth_lab_upgrade", true);
				SetIplProp(247041, "meth_lab_setup", true);
			}
			else{}
			SetIplProp(247041, "meth_lab_security_high", Security);
			SetIplProp(247041, "meth_lab_production", Production);
			native.refreshInterior(247041);
		}
	}
}