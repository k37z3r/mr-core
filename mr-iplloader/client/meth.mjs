import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let BikerMethLab = {
    ipl : ["bkr_biker_interior_placement_interior_2_biker_dlc_int_ware01_milo"],
    Enable : function(state){
        if (state){
            EnableIpl(BikerMethLab.ipl, state);
            if (getConfig("Load_BikerMethLabStyle") == "empty")
                SetIplProp(247041, "meth_lab_empty", true);
            else if (getConfig("Load_BikerMethLabStyle") == "basic"){
                SetIplProp(247041, "meth_lab_basic", true);
                SetIplProp(247041, "meth_lab_setup", true);
            }
            else if (getConfig("Load_BikerMethLabStyle") == "upgrade"){
                SetIplProp(247041, "meth_lab_upgrade", true);
                SetIplProp(247041, "meth_lab_setup", true);
            }
            else{}
            SetIplProp(247041, "meth_lab_security_high", getConfig("Load_BikerMethLabSecurity"));
            SetIplProp(247041, "meth_lab_production", getConfig("Load_BikerMethLabProduction"));
            native.refreshInterior(247041);
        }
    }
}