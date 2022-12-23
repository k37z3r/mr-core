import { EnableIpl } from 'mr-functions';
export let SecurityBillboards = {
    ipl : ["sf_billboards"],
    Enable : function(state){
        if (state){
            EnableIpl(SecurityBillboards.ipl, state);
        }
    }
}