import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';

export let Counterfeit = {
	ipl : ["bkr_biker_interior_placement_interior_5_biker_dlc_int_ware04_milo"],
	Enable : function(state, Printer, Security, Dryer1, Dryer2, Dryer3, Dryer4, Cash, Chairs, Cutter, Furnitures){
		if (state){
			let PrinterId, SecurityId, Dryer1Id, Dryer2Id, Dryer3Id, Dryer4Id;
			EnableIpl(Counterfeit.ipl, state);
			if (Printer == "upgradeProduction")
				PrinterId = "counterfeit_upgrade_equip";
			else if (Printer == "upgrade")
				PrinterId = "counterfeit_upgrade_equip_no_prod";
			else if (Printer == "basicProduction")
				PrinterId = "counterfeit_standard_equip";
			else if (Printer == "basic")
				PrinterId = "counterfeit_standard_equip_no_prod";
			else
				PrinterId = "none";
			if (PrinterId != "none"){
				SetIplProp(247809, PrinterId, true);
			}
			if (Security == "upgrade")
				SecurityId = "counterfeit_security";
			else
				SecurityId = "counterfeit_low_security";
			SetIplProp(247809, SecurityId, true);
			if (Dryer1 == "open")
				Dryer1Id = "dryera_open";
			else if (Dryer1 == "off")
				Dryer1Id = "dryera_off";
			else if (Dryer1 == "on")
				Dryer1Id = "dryera_on";
			else
				Dryer1Id = "none";
			if (Dryer1Id != "none"){
				SetIplProp(247809, Dryer1Id, true);
			}
			if (Dryer2 == "open")
				Dryer2Id = "dryerb_open";
			else if (Dryer2 == "off")
				Dryer2Id = "dryerb_off";
			else if (Dryer2 == "on")
				Dryer2Id = "dryerb_on";
			else
				Dryer2Id = "none";
			if (Dryer2Id != "none"){
				SetIplProp(247809, Dryer2Id, true);
			}
			if (Dryer3 == "open")
				Dryer3Id = "dryerc_open";
			else if (Dryer3 == "off")
				Dryer3Id = "dryerc_off";
			else if (Dryer3 == "on")
				Dryer3Id = "dryerc_on";
			else
				Dryer3Id = "none";
			if (Dryer3Id != "none"){
				SetIplProp(247809, Dryer3Id, true);
			}
			if (Dryer4 == "open")
				Dryer4Id = "dryerd_open";
			else if (Dryer4 == "off")
				Dryer4Id = "dryerd_off";
			else if (Dryer4 == "on")
				Dryer4Id = "dryerd_on";
			else
				Dryer4Id = "none";
			if (Dryer4Id != "none"){
				SetIplProp(247809, Dryer4Id, true);
			}
			if (Cash == 100){
				SetIplProp(247809, "counterfeit_cashpile100a", true);
				SetIplProp(247809, "counterfeit_cashpile100b", true);
				SetIplProp(247809, "counterfeit_cashpile100c", true);
				SetIplProp(247809, "counterfeit_cashpile100d", true);
			}
			else if (Cash == 20){
				SetIplProp(247809, "counterfeit_cashpile20a", true);
				SetIplProp(247809, "counterfeit_cashpile20b", true);
				SetIplProp(247809, "counterfeit_cashpile20c", true);
				SetIplProp(247809, "counterfeit_cashpile20d", true);
			}
			else{
				SetIplProp(247809, "counterfeit_cashpile10a", true);
				SetIplProp(247809, "counterfeit_cashpile10b", true);
				SetIplProp(247809, "counterfeit_cashpile10c", true);
				SetIplProp(247809, "counterfeit_cashpile10d", true);
			}
			SetIplProp(247809, "special_chairs", Chairs);
			SetIplProp(247809, "money_cutter", Cutter);
			SetIplProp(247809, "counterfeit_setup", Furnitures);
			native.refreshInterior(247809);
		}
	}
}