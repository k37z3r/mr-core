import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let SecurityStudio = {
    ipl : ["sf_int_placement_sec_interior_1_dlc_studio_sec_milo_ "],
    Enable : function(state){
        if (state){
            EnableIpl(SecurityStudio.ipl, state);
            SetIplProp(286977, "Entity_Set_FIX_STU_EXT_P3A1", getConfig("Load_SecurityStudioP3A1"));
            SetIplProp(286977, "Entity_Set_FIX_TRIP1_INT_P2", getConfig("Load_SecurityStudioP2"));
            SetIplProp(286977, "Entity_Set_FIX_STU_EXT_P1", getConfig("Load_SecurityStudioP1"));
            SetIplProp(286977, "Entity_Set_Fire", getConfig("Load_SecurityStudioFire"));
            SetIplProp(286977, "entity_set_default", getConfig("Load_SecurityStudiodefault"));
            native.refreshInterior(286977);
        }
    }
}