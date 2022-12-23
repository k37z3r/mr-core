import { EnableIpl } from 'mr-functions';
export let Yacht = {
    ipl : [
        "smboat",
        "smboat_lod",
        "hei_yacht_heist",
        "hei_yacht_heist_bar",
        "hei_yacht_heist_bar_lod",
        "hei_yacht_heist_bedrm",
        "hei_yacht_heist_bedrm_lod",
        "hei_yacht_heist_bridge",
        "hei_yacht_heist_bridge_lod",
        "hei_yacht_heist_enginrm",
        "hei_yacht_heist_enginrm_lod",
        "hei_yacht_heist_lod",
        "hei_yacht_heist_lounge",
        "hei_yacht_heist_lounge_lod",
        "hei_yacht_heist_slod"
    ],
    Enable : function(state){
        EnableIpl(Yacht.ipl, state);
    }
}