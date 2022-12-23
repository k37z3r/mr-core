import { EnableIpl } from 'mr-functions';
export let SecurityMusicRoofTop = {
    ipl : ["sf_musicrooftop"],
    Enable : function(state){
        if (state){
            EnableIpl(SecurityMusicRoofTop.ipl, state);
        }
    }
}