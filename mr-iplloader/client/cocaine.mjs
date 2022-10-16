import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';

export let Cocaine = {
	ipl : ["bkr_biker_interior_placement_interior_4_biker_dlc_int_ware03_milo"],
	Enable : function(state, Style, Security, Coke1, Coke2, Coke3, Coke4, Coke5){
		if (state){
			let StyleId, SecurityId;
			EnableIpl(Cocaine.ipl, state);
			if (Style == "upgrade"){
				SetIplProp(247553, "set_up", true);
				SetIplProp(247553, "equipment_upgrade", true);
				SetIplProp(247553, "coke_press_upgrade", true);
				SetIplProp(247553, "production_upgrade", true);
				SetIplProp(247553, "table_equipment_upgrade", true);
			}
			else if (Style == "basic"){
				SetIplProp(247553, "set_up", true);
				SetIplProp(247553, "equipment_basic", true);
				SetIplProp(247553, "coke_press_basic", true);
				SetIplProp(247553, "production_basic", true);
				SetIplProp(247553, "table_equipment", true);
			}
			else{}
			if (Security == "upgrade")
				SecurityId = "security_high";
			else if (Security == "basic")
				SecurityId = "security_low";
			else
				SecurityId = "none"
			if (SecurityId != "none"){
				SetIplProp(247553, SecurityId, true);
			}
			SetIplProp(247553, "coke_cut_01", Coke1);
			SetIplProp(247553, "coke_cut_02", Coke2);
			SetIplProp(247553, "coke_cut_03", Coke3);
			SetIplProp(247553, "coke_cut_04", Coke4);
			SetIplProp(247553, "coke_cut_05", Coke5);
			native.refreshInterior(247553);
		}
	}
}