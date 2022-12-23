import * as native from 'natives';
import { SetIplProp, getConfig } from 'mr-functions';
export let LesterFactory = {
    ipl : [],
    Enable : function(state){
        if (state){
            SetIplProp(92674, "V_53_Agency_Blueprint", getConfig("Load_LesterFactoryBluePrint"));
            SetIplProp(92674, "V_35_KitBag", getConfig("Load_LesterFactoryKitBag"));
            SetIplProp(92674, "V_35_Fireman", getConfig("Load_LesterFactoryFireman"));
            SetIplProp(92674, "V_35_Body_Armour", getConfig("Load_LesterFactoryArmour"));
            SetIplProp(92674, "Jewel_Gasmasks", getConfig("Load_LesterFactoryGasMask"));
            SetIplProp(92674, "v_53_agency _overalls", getConfig("Load_LesterFactoryAgency"));
            native.refreshInterior(92674);
        }
    }
}