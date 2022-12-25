import * as native from 'natives';
import { SetIplProp, getConfig } from 'mr-functions';
export let Freakshow = {
    ipl : [],
    Enable : function(state){
        if (state){
            if (getConfig("Freak_Show_Door") == "open"){
                SetIplProp(290817, "entity_set_roller_door_closed", false);
                SetIplProp(290817, "entity_set_roller_door_open", true);}
            else{
                SetIplProp(290817, "entity_set_roller_door_closed", true);
                SetIplProp(290817, "entity_set_roller_door_open", false);
            }
            native.refreshInterior(290817);
        }
    }
}
