import { EnableIpl } from 'mr-functions';
export let Newmorgue = {
    ipl : ["xm3_dlc_int_03_xm3"],
    Enable : function(state){
        if (state){
            EnableIpl(Newmorgue.ipl, state);
        }
    }
}