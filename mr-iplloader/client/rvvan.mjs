import * as native from 'natives';
import { EnableIpl, SetIplProp } from 'mr-functions';
export let RVVAN = {
    ipl : ["xm3_dlc_int_01_xm3"],
    Enable : function(state){
        if (state){
            EnableIpl(RVVAN.ipl, state);
            SetIplProp(290305, "set_equipment_upgrade", true);
            SetIplProp(290305, "set_product_01", true);
            SetIplProp(290305, "set_product_02", true);
            SetIplProp(290305, "set_product_03", true);
            SetIplProp(290305, "set_product_04", true);
            SetIplProp(290305, "set_product_05", true);
            SetIplProp(290305, "set_supplies_01", true);
            SetIplProp(290305, "set_supplies_02", true);
            SetIplProp(290305, "set_supplies_03", true);
            SetIplProp(290305, "set_supplies_04", true);
            SetIplProp(290305, "set_supplies_05", true);
            native.refreshInterior(290305);
        }
    }
}