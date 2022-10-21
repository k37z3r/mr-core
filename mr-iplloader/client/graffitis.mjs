import { EnableIpl } from 'mr-functions';
export let Graffitis = {
    ipl : [
        "ch3_rd2_bishopschickengraffiti",
        "cs5_04_mazebillboardgraffiti",
        "cs5_roads_ronoilgraffiti"
    ],
    Enable : function(state){ EnableIpl(Graffitis.ipl, state) }
}