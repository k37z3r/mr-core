import * as native from 'natives';
import { getConfig, SetIplProp, SetPropColor } from 'mr-functions';
export let TunerMethLab = {
    ipl : [],
    Enable : function(state){
        if (state){
            SetIplProp(284673, "tintable_walls", getConfig("Load_TunerMethLabWalls"));
            SetPropColor(284673, "tintable_walls", 3);
            native.refreshInterior(284673);
        }
    }
}