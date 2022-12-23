import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let Counterfeit = {
    ipl : ["bkr_biker_interior_placement_interior_5_biker_dlc_int_ware04_milo"],
    Enable : function(state){
        if (state){
            let PrinterId, SecurityId, Dryer1Id, Dryer2Id, Dryer3Id, Dryer4Id;
            EnableIpl(Counterfeit.ipl, state);
            if (getConfig("Load_CounterfeitPrinter") == "upgradeProduction")
                PrinterId = "counterfeit_upgrade_equip";
            else if (getConfig("Load_CounterfeitPrinter") == "upgrade")
                PrinterId = "counterfeit_upgrade_equip_no_prod";
            else if (getConfig("Load_CounterfeitPrinter") == "basicProduction")
                PrinterId = "counterfeit_standard_equip";
            else if (getConfig("Load_CounterfeitPrinter") == "basic")
                PrinterId = "counterfeit_standard_equip_no_prod";
            else
                PrinterId = "none";
            if (PrinterId != "none"){
                SetIplProp(247809, PrinterId, true);
            }
            if (getConfig("Load_CounterfeitSecurity") == "upgrade")
                SecurityId = "counterfeit_security";
            else
                SecurityId = "counterfeit_low_security";
            SetIplProp(247809, SecurityId, true);
            if (getConfig("Load_CounterfeitDryer1") == "open")
                Dryer1Id = "dryera_open";
            else if (getConfig("Load_CounterfeitDryer1") == "off")
                Dryer1Id = "dryera_off";
            else if (getConfig("Load_CounterfeitDryer1") == "on")
                Dryer1Id = "dryera_on";
            else
                Dryer1Id = "none";
            if (Dryer1Id != "none"){
                SetIplProp(247809, Dryer1Id, true);
            }
            if (getConfig("Load_CounterfeitDryer2") == "open")
                Dryer2Id = "dryerb_open";
            else if (getConfig("Load_CounterfeitDryer2") == "off")
                Dryer2Id = "dryerb_off";
            else if (getConfig("Load_CounterfeitDryer2") == "on")
                Dryer2Id = "dryerb_on";
            else
                Dryer2Id = "none";
            if (Dryer2Id != "none"){
                SetIplProp(247809, Dryer2Id, true);
            }
            if (getConfig("Load_CounterfeitDryer3") == "open")
                Dryer3Id = "dryerc_open";
            else if (getConfig("Load_CounterfeitDryer3") == "off")
                Dryer3Id = "dryerc_off";
            else if (getConfig("Load_CounterfeitDryer3") == "on")
                Dryer3Id = "dryerc_on";
            else
                Dryer3Id = "none";
            if (Dryer3Id != "none"){
                SetIplProp(247809, Dryer3Id, true);
            }
            if (getConfig("Load_CounterfeitDryer4") == "open")
                Dryer4Id = "dryerd_open";
            else if (getConfig("Load_CounterfeitDryer4") == "off")
                Dryer4Id = "dryerd_off";
            else if (getConfig("Load_CounterfeitDryer4") == "on")
                Dryer4Id = "dryerd_on";
            else
                Dryer4Id = "none";
            if (Dryer4Id != "none"){
                SetIplProp(247809, Dryer4Id, true);
            }
            if (getConfig("Load_CounterfeitCash") == 100){
                SetIplProp(247809, "counterfeit_cashpile100a", true);
                SetIplProp(247809, "counterfeit_cashpile100b", true);
                SetIplProp(247809, "counterfeit_cashpile100c", true);
                SetIplProp(247809, "counterfeit_cashpile100d", true);
            }
            else if (getConfig("Load_CounterfeitCash") == 20){
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
            SetIplProp(247809, "special_chairs", getConfig("Load_CounterfeitChairs"));
            SetIplProp(247809, "money_cutter", getConfig("Load_CounterfeitCutter"));
            SetIplProp(247809, "counterfeit_setup", getConfig("Load_CounterfeitFurnitures"));
            native.refreshInterior(247809);
        }
    }
}