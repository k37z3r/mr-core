import { EnableIpl } from 'mr-functions';
export let TrainCrash = {
    ipl : ["xm3_train_crash"],
    Enable : function(state){
        if (state){ EnableIpl(TrainCrash.ipl, state) }
    }
}