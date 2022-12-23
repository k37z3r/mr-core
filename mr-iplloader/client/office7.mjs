import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let SecurityOffice3 = {
    ipl : ["sf_fixeroffice_kt1_05"],
    Enable : function(state){
        if (state){
            EnableIpl(SecurityOffice3.ipl, state);
            SetIplProp(288001, "Entity_Set_Wpaper_1", getConfig("Load_SecurityOffice3Wallpaper1"));
            SetIplProp(288001, "Entity_Set_Wpaper_2", getConfig("Load_SecurityOffice3Wallpaper2"));
            SetIplProp(288001, "Entity_Set_Wpaper_3", getConfig("Load_SecurityOffice3Wallpaper3"));
            SetIplProp(288001, "Entity_Set_Wpaper_4", getConfig("Load_SecurityOffice3Wallpaper4"));
            SetIplProp(288001, "Entity_Set_Wpaper_5", getConfig("Load_SecurityOffice3Wallpaper5"));
            SetIplProp(288001, "Entity_Set_Wpaper_6", getConfig("Load_SecurityOffice3Wallpaper6"));
            SetIplProp(288001, "Entity_Set_Wpaper_7", getConfig("Load_SecurityOffice3Wallpaper7"));
            SetIplProp(288001, "Entity_Set_Wpaper_8", getConfig("Load_SecurityOffice3Wallpaper8"));
            SetIplProp(288001, "Entity_Set_Wpaper_9", getConfig("Load_SecurityOffice3Wallpaper9"));
            SetIplProp(288001, "Entity_Set_M_Trip_01", getConfig("Load_SecurityOffice3Trip1"));
            SetIplProp(288001, "Entity_Set_M_Trip_02", getConfig("Load_SecurityOffice3Trip2"));
            SetIplProp(288001, "Entity_Set_M_Trip_03", getConfig("Load_SecurityOffice3Trip3"));
            SetIplProp(288001, "Entity_set_disc_01", getConfig("Load_SecurityOffice3Disc1"));
            SetIplProp(288001, "Entity_set_disc_02", getConfig("Load_SecurityOffice3Disc2"));
            SetIplProp(288001, "Entity_set_disc_03", getConfig("Load_SecurityOffice3Disc3"));
            SetIplProp(288001, "Entity_set_disc_04", getConfig("Load_SecurityOffice3Disc4"));
            SetIplProp(288001, "Entity_set_disc_05", getConfig("Load_SecurityOffice3Disc5"));
            SetIplProp(288001, "Entity_set_disc_06", getConfig("Load_SecurityOffice3Disc6"));
            SetIplProp(288001, "Entity_Set_Art_1", getConfig("Load_SecurityOffice3Art1"));
            SetIplProp(288001, "Entity_Set_Art_2", getConfig("Load_SecurityOffice3Art2"));
            SetIplProp(288001, "Entity_Set_Art_3", getConfig("Load_SecurityOffice3Art3"));
            SetIplProp(288001, "Entity_Set_Moving", getConfig("Load_SecurityOffice3Moving"));
            SetIplProp(288001, "Entity_Set_Tint_AG", getConfig("Load_SecurityOffice3TintAG"));
            SetIplProp(288001, "Entity_Set_Spare_Seats", getConfig("Load_SecurityOffice3SpareSeats"));
            SetIplProp(288001, "Entity_Set_Player_Seats", getConfig("Load_SecurityOffice3PlayerSeats"));
            SetIplProp(288001, "Entity_Set_Player_Desk", getConfig("Load_SecurityOffice3PlayerDesk"));
            SetIplProp(288001, "Entity_Set_M_Golf_Intro", getConfig("Load_SecurityOffice3GolfIntro"));
            SetIplProp(288001, "Entity_Set_M_Setup", getConfig("Load_SecurityOffice3Setup"));
            SetIplProp(288001, "Entity_Set_M_Nightclub", getConfig("Load_SecurityOffice3Nightclub"));
            SetIplProp(288001, "Entity_Set_M_Yacht", getConfig("Load_SecurityOffice3Yacht"));
            SetIplProp(288001, "Entity_Set_M_Promoter", getConfig("Load_SecurityOffice3Promoter"));
            SetIplProp(288001, "Entity_Set_M_Limo_Photo", getConfig("Load_SecurityOffice3LimoPhoto"));
            SetIplProp(288001, "Entity_Set_M_Limo_Wallet", getConfig("Load_SecurityOffice3LimoWallet"));
            SetIplProp(288001, "Entity_Set_M_The_Way", getConfig("Load_SecurityOffice3TheWay"));
            SetIplProp(288001, "Entity_Set_M_Billionaire", getConfig("Load_SecurityOffice3Billionaire"));
            SetIplProp(288001, "Entity_Set_M_Families", getConfig("Load_SecurityOffice3Families"));
            SetIplProp(288001, "Entity_Set_M_Ballas", getConfig("Load_SecurityOffice3Ballas"));
            SetIplProp(288001, "Entity_Set_M_Hood", getConfig("Load_SecurityOffice3Hood"));
            SetIplProp(288001, "Entity_Set_M_Fire_Booth", getConfig("Load_SecurityOffice3FireBooth"));
            SetIplProp(288001, "Entity_Set_M_50", getConfig("Load_SecurityOffice350"));
            SetIplProp(288001, "Entity_Set_M_Taxi", getConfig("Load_SecurityOffice3Taxi"));
            SetIplProp(288001, "Entity_Set_M_Gone_Golfing", getConfig("Load_SecurityOffice3GoneGolfing"));
            SetIplProp(288001, "Entity_Set_M_Motel", getConfig("Load_SecurityOffice3Motel"));
            SetIplProp(288001, "Entity_Set_M_Construction", getConfig("Load_SecurityOffice3Construction"));
            SetIplProp(288001, "Entity_Set_M_Hit_List", getConfig("Load_SecurityOffice3HitList"));
            SetIplProp(288001, "Entity_Set_M_Tuner", getConfig("Load_SecurityOffice3Tuner"));
            SetIplProp(288001, "Entity_Set_M_Attack", getConfig("Load_SecurityOffice3Attack"));
            SetIplProp(288001, "Entity_Set_M_Vehicles", getConfig("Load_SecurityOffice3Vehicles"));
            SetIplProp(288001, "Entity_Set_Armoury", getConfig("Load_SecurityOffice3Armoury"));
            SetIplProp(288001, "Entity_Set_Standard_Office", getConfig("Load_SecurityOffice3StandardOffice"));
            SetIplProp(288001, "Entity_Set_Blocker", getConfig("Load_SecurityOffice3Blocker"));
            native.refreshInterior(288001);
        }
    }
}