import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let Warehouse = {
    ipl : ["reh_int_placement_sum2_interior_1_dlc_int_04_sum2_milo_"],
    Enable : function(state){
        if (state){
            EnableIpl(Warehouse.ipl, state);
            SetIplProp(289793, "entity_set_style_1", getConfig("Load_WarehouseStyle1"));
            SetIplProp(289793, "entity_set_style_2", getConfig("Load_WarehouseStyle2"));
            SetIplProp(289793, "entity_set_style_3", getConfig("Load_WarehouseStyle3"));
            SetIplProp(289793, "entity_set_style_4", getConfig("Load_WarehouseStyle4"));
            SetIplProp(289793, "entity_set_style_5", getConfig("Load_WarehouseStyle5"));
            native.refreshInterior(289793);
        }
    }
}