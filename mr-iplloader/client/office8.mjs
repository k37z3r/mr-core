import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let SecurityOffice4 = {
    ipl : ["sf_fixeroffice_kt1_08"],
    Enable : function(state){
        if (state){
            EnableIpl(SecurityOffice4.ipl, state);
            SetIplProp(287745, "Entity_Set_Wpaper_1", getConfig("Load_SecurityOffice4Wallpaper1"));
            SetIplProp(287745, "Entity_Set_Wpaper_2", getConfig("Load_SecurityOffice4Wallpaper2"));
            SetIplProp(287745, "Entity_Set_Wpaper_3", getConfig("Load_SecurityOffice4Wallpaper3"));
            SetIplProp(287745, "Entity_Set_Wpaper_4", getConfig("Load_SecurityOffice4Wallpaper4"));
            SetIplProp(287745, "Entity_Set_Wpaper_5", getConfig("Load_SecurityOffice4Wallpaper5"));
            SetIplProp(287745, "Entity_Set_Wpaper_6", getConfig("Load_SecurityOffice4Wallpaper6"));
            SetIplProp(287745, "Entity_Set_Wpaper_7", getConfig("Load_SecurityOffice4Wallpaper7"));
            SetIplProp(287745, "Entity_Set_Wpaper_8", getConfig("Load_SecurityOffice4Wallpaper8"));
            SetIplProp(287745, "Entity_Set_Wpaper_9", getConfig("Load_SecurityOffice4Wallpaper9"));
            SetIplProp(287745, "Entity_Set_M_Trip_01", getConfig("Load_SecurityOffice4Trip1"));
            SetIplProp(287745, "Entity_Set_M_Trip_02", getConfig("Load_SecurityOffice4Trip2"));
            SetIplProp(287745, "Entity_Set_M_Trip_03", getConfig("Load_SecurityOffice4Trip3"));
            SetIplProp(287745, "Entity_set_disc_01", getConfig("Load_SecurityOffice4Disc1"));
            SetIplProp(287745, "Entity_set_disc_02", getConfig("Load_SecurityOffice4Disc2"));
            SetIplProp(287745, "Entity_set_disc_03", getConfig("Load_SecurityOffice4Disc3"));
            SetIplProp(287745, "Entity_set_disc_04", getConfig("Load_SecurityOffice4Disc4"));
            SetIplProp(287745, "Entity_set_disc_05", getConfig("Load_SecurityOffice4Disc5"));
            SetIplProp(287745, "Entity_set_disc_06", getConfig("Load_SecurityOffice4Disc6"));
            SetIplProp(287745, "Entity_Set_Art_1", getConfig("Load_SecurityOffice4Art1"));
            SetIplProp(287745, "Entity_Set_Art_2", getConfig("Load_SecurityOffice4Art2"));
            SetIplProp(287745, "Entity_Set_Art_3", getConfig("Load_SecurityOffice4Art3"));
            SetIplProp(287745, "Entity_Set_Moving", getConfig("Load_SecurityOffice4Moving"));
            SetIplProp(287745, "Entity_Set_Tint_AG", getConfig("Load_SecurityOffice4TintAG"));
            SetIplProp(287745, "Entity_Set_Spare_Seats", getConfig("Load_SecurityOffice4SpareSeats"));
            SetIplProp(287745, "Entity_Set_Player_Seats", getConfig("Load_SecurityOffice4PlayerSeats"));
            SetIplProp(287745, "Entity_Set_Player_Desk", getConfig("Load_SecurityOffice4PlayerDesk"));
            SetIplProp(287745, "Entity_Set_M_Golf_Intro", getConfig("Load_SecurityOffice4GolfIntro"));
            SetIplProp(287745, "Entity_Set_M_Setup", getConfig("Load_SecurityOffice4Setup"));
            SetIplProp(287745, "Entity_Set_M_Nightclub", getConfig("Load_SecurityOffice4Nightclub"));
            SetIplProp(287745, "Entity_Set_M_Yacht", getConfig("Load_SecurityOffice4Yacht"));
            SetIplProp(287745, "Entity_Set_M_Promoter", getConfig("Load_SecurityOffice4Promoter"));
            SetIplProp(287745, "Entity_Set_M_Limo_Photo", getConfig("Load_SecurityOffice4LimoPhoto"));
            SetIplProp(287745, "Entity_Set_M_Limo_Wallet", getConfig("Load_SecurityOffice4LimoWallet"));
            SetIplProp(287745, "Entity_Set_M_The_Way", getConfig("Load_SecurityOffice4TheWay"));
            SetIplProp(287745, "Entity_Set_M_Billionaire", getConfig("Load_SecurityOffice4Billionaire"));
            SetIplProp(287745, "Entity_Set_M_Families", getConfig("Load_SecurityOffice4Families"));
            SetIplProp(287745, "Entity_Set_M_Ballas", getConfig("Load_SecurityOffice4Ballas"));
            SetIplProp(287745, "Entity_Set_M_Hood", getConfig("Load_SecurityOffice4Hood"));
            SetIplProp(287745, "Entity_Set_M_Fire_Booth", getConfig("Load_SecurityOffice4FireBooth"));
            SetIplProp(287745, "Entity_Set_M_50", getConfig("Load_SecurityOffice450"));
            SetIplProp(287745, "Entity_Set_M_Taxi", getConfig("Load_SecurityOffice4Taxi"));
            SetIplProp(287745, "Entity_Set_M_Gone_Golfing", getConfig("Load_SecurityOffice4GoneGolfing"));
            SetIplProp(287745, "Entity_Set_M_Motel", getConfig("Load_SecurityOffice4Motel"));
            SetIplProp(287745, "Entity_Set_M_Construction", getConfig("Load_SecurityOffice4Construction"));
            SetIplProp(287745, "Entity_Set_M_Hit_List", getConfig("Load_SecurityOffice4HitList"));
            SetIplProp(287745, "Entity_Set_M_Tuner", getConfig("Load_SecurityOffice4Tuner"));
            SetIplProp(287745, "Entity_Set_M_Attack", getConfig("Load_SecurityOffice4Attack"));
            SetIplProp(287745, "Entity_Set_M_Vehicles", getConfig("Load_SecurityOffice4Vehicles"));
            SetIplProp(287745, "Entity_Set_Armoury", getConfig("Load_SecurityOffice4Armoury"));
            SetIplProp(287745, "Entity_Set_Standard_Office", getConfig("Load_SecurityOffice4StandardOffice"));
            SetIplProp(287745, "Entity_Set_Blocker", getConfig("Load_SecurityOffice4Blocker"));
            native.refreshInterior(287745);
        }
    }
}