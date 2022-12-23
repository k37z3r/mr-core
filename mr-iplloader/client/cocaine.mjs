import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let Cocaine = {
    ipl : ["bkr_biker_interior_placement_interior_4_biker_dlc_int_ware03_milo"],
    Enable : function(state){
        if (state){
            let StyleId, SecurityId;
            EnableIpl(Cocaine.ipl, state);
            if (getConfig("Load_CocaineStyle") == "upgrade"){
                SetIplProp(247553, "set_up", true);
                SetIplProp(247553, "equipment_upgrade", true);
                SetIplProp(247553, "coke_press_upgrade", true);
                SetIplProp(247553, "production_upgrade", true);
                SetIplProp(247553, "table_equipment_upgrade", true);
            }
            else if (getConfig("Load_CocaineStyle") == "basic"){
                SetIplProp(247553, "set_up", true);
                SetIplProp(247553, "equipment_basic", true);
                SetIplProp(247553, "coke_press_basic", true);
                SetIplProp(247553, "production_basic", true);
                SetIplProp(247553, "table_equipment", true);
            }
            else{}
            if (getConfig("Load_CocaineSecurity") == "upgrade")
                SecurityId = "security_high";
            else if (getConfig("Load_CocaineSecurity") == "basic")
                SecurityId = "security_low";
            else
                SecurityId = "none"
            if (SecurityId != "none"){
                SetIplProp(247553, SecurityId, true);
            }
            SetIplProp(247553, "coke_cut_01", getConfig("Load_CocaineCoke1"));
            SetIplProp(247553, "coke_cut_02", getConfig("Load_CocaineCoke2"));
            SetIplProp(247553, "coke_cut_03", getConfig("Load_CocaineCoke3"));
            SetIplProp(247553, "coke_cut_04", getConfig("Load_CocaineCoke4"));
            SetIplProp(247553, "coke_cut_05", getConfig("Load_CocaineCoke5"));
            native.refreshInterior(247553);
        }
    }
}