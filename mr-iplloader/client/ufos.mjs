import { EnableIpl } from 'mr-functions';
export let Ufos = {
    ipl : ["ufo", "ufo_eye", "ufo_lod"],
    Enable : function(state){ EnableIpl(Ufos.ipl, state) }
}