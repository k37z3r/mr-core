import { EnableIpl } from 'mr-functions';
export let redCarpet = {
    ipl : ["redCarpet"],
    Enable : function(state){ EnableIpl(redCarpet.ipl, state) }
}