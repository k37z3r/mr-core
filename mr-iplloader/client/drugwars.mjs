import { EnableIpl } from 'mr-functions';
export let DrugWars = {
    ipl : ["xm3_int_placement_xm3_interior_0_dlc_int_01_xm3_milo_",  "xm3_int_placement_xm3_interior_1_dlc_int_02_xm3_milo_",  "xm3_int_placement_xm3_interior_2_dlc_int_03_xm3_milo_",  "xm3_int_placement_xm3_interior_3_dlc_int_04_xm3_milo_",  "xm3_collision_fixes",  "xm3_cutscene_doors",  "xm3_doc_sign",  "xm3_garage_fix",  "xm3_security_fix",  "xm3_stash_cams",  "xm3_sum2_fix",  "xm3_sum2_fix",  "xm3_warehouse",  "xm3_warehouse_lod",  "xm3_warehouse_grnd"],
    Enable : function(state){
        if (state){ EnableIpl(DrugWars.ipl, state) }
    }
}