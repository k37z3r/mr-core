import * as native from 'natives';
import { SetIplProp, getConfig } from 'mr-functions';
export let Ammunations = {
    ipl : [],
    Enable : function(state){
        if (state){
            if (getConfig("Load_AmmunationsGunStore")){
                let key, IPL_IDS = [140289, 153857, 168193, 164609, 176385, 175617, 200961, 180481, 178689];
                for (key in IPL_IDS){
                    SetIplProp(IPL_IDS[key], "GunStoreHooks");
                }
            }
            if (getConfig("Load_AmmunationsGunClub")){
                let key_a, IPL_IDS_a = [137729, 248065];
                for (key_a in IPL_IDS_a){
                    SetIplProp(IPL_IDS_a[key_a], "GunClubWallHooks");
                }
            }
            native.refreshInterior(140289);
            native.refreshInterior(153857);
            native.refreshInterior(168193);
            native.refreshInterior(164609);
            native.refreshInterior(176385);
            native.refreshInterior(175617);
            native.refreshInterior(200961);
            native.refreshInterior(180481);
            native.refreshInterior(178689);
            native.refreshInterior(137729);
            native.refreshInterior(248065);
        }
    }
}