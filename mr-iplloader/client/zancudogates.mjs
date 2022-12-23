import { EnableIpl } from 'mr-functions';
export let ZancudoGates = {
    ipl : ["CS3_07_MPGates"],
    Enable : function(state){ EnableIpl(ZancudoGates.ipl, state) }
}