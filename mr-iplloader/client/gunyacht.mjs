import { EnableIpl } from 'mr-functions';
export let Gun_Yacht = {
    ipl : [
        "gr_heist_yacht2",
        "gr_heist_yacht2_lod",
        "gr_heist_yacht2_bar",
        "gr_heist_yacht2_bar_lod",
        "gr_heist_yacht2_bedrm",
        "gr_heist_yacht2_bedrm_lod",
        "gr_heist_yacht2_bridge",
        "gr_heist_yacht2_bridge_lod",
        "gr_heist_yacht2_enginrm",
        "gr_heist_yacht2_enginrm_lod",
        "gr_heist_yacht2_lounge",
        "gr_heist_yacht2_lounge_lod",
        "gr_heist_yacht2_slod"
    ],
    Enable : function(state){
        EnableIpl(Gun_Yacht.ipl, state);
    }
}