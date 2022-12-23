import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let SecurityGarage = {
    ipl : ["sf_int_placement_sec_interior_2_dlc_garage_sec_milo_"],
    Enable : function(state){
        if (state){
            EnableIpl(SecurityGarage.ipl, state);
            SetIplProp(286721, "Entity_Set_Art_1", getConfig("Load_SecurityGarageArt1"));
            SetIplProp(286721, "Entity_Set_Art_1", getConfig("Load_SecurityGarageArt2"));
            SetIplProp(286721, "Entity_Set_Art_1", getConfig("Load_SecurityGarageArt3"));
            SetIplProp(286721, "Entity_Set_Art_1_NoMod", getConfig("Load_SecurityGarageArt4"));
            SetIplProp(286721, "Entity_Set_Art_1_NoMod", getConfig("Load_SecurityGarageArt5"));
            SetIplProp(286721, "Entity_Set_Art_1_NoMod", getConfig("Load_SecurityGarageArt6"));
            SetIplProp(286721, "Entity_Set_Wallpaper_01", getConfig("Load_SecurityGarageWorkshopWallpaper1"));
            SetIplProp(286721, "Entity_Set_Wallpaper_02", getConfig("Load_SecurityGarageWorkshopWallpaper2"));
            SetIplProp(286721, "Entity_Set_Wallpaper_03", getConfig("Load_SecurityGarageWorkshopWallpaper3"));
            SetIplProp(286721, "Entity_Set_Wallpaper_04", getConfig("Load_SecurityGarageWorkshopWallpaper4"));
            SetIplProp(286721, "Entity_Set_Wallpaper_05", getConfig("Load_SecurityGarageWorkshopWallpaper5"));
            SetIplProp(286721, "Entity_Set_Wallpaper_06", getConfig("Load_SecurityGarageWorkshopWallpaper6"));
            SetIplProp(286721, "Entity_Set_Wallpaper_07", getConfig("Load_SecurityGarageWorkshopWallpaper7"));
            SetIplProp(286721, "Entity_Set_Wallpaper_08", getConfig("Load_SecurityGarageWorkshopWallpaper8"));
            SetIplProp(286721, "Entity_Set_Wallpaper_09", getConfig("Load_SecurityGarageWorkshopWallpaper9"));
            SetIplProp(286721, "Entity_Set_Workshop_Wall", getConfig("Load_SecurityGarageWorkshopWall"));
            SetIplProp(286721, "entity_set_tints", getConfig("Load_SecurityGaragetints"));
            SetIplProp(286721, "Entity_Set_Workshop_Lights", getConfig("Load_SecurityWorkshopLights"));
            native.refreshInterior(286721);
        }
    }
}