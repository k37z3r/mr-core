import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';

export let BikerDocumentForgery = {
	ipl : ["bkr_biker_interior_placement_interior_6_biker_dlc_int_ware05_milo"],
	Enable : function(state, Style, Equipment, Security, Chairs, Production, Furnitures, Clutter){
		if (state){
			let StyleId, EquipmentId, SecurityId;
			EnableIpl(BikerDocumentForgery.ipl, state);
			if (Style == "upgrade")
				StyleId = "interior_upgrade";
			else
				StyleId = "interior_basic";
			SetIplProp(246785, StyleId, true);
			if (Equipment == "upgrade")
				EquipmentId = "equipment_upgrade";
			else if (Equipment == "basic")
				EquipmentId = "equipment_basic";
			else
				EquipmentId = "none";
			if (EquipmentId != "none"){
				SetIplProp(246785, EquipmentId, true);
			}
			if (Security == "upgrade")
				SecurityId = "security_high";
			else
				SecurityId = "security_low";
			SetIplProp(246785, SecurityId, true);
			if (Chairs){
				SetIplProp(246785, "chair01", true);
				SetIplProp(246785, "chair02", true);
				SetIplProp(246785, "chair03", true);
				SetIplProp(246785, "chair04", true);
				SetIplProp(246785, "chair05", true);
				SetIplProp(246785, "chair06", true);
				SetIplProp(246785, "chair07", true);
			}
			SetIplProp(246785, "production", Production);
			SetIplProp(246785, "set_up", Furnitures);
			SetIplProp(246785, "clutter", Clutter);
			native.refreshInterior(246785);
		}
	}
}