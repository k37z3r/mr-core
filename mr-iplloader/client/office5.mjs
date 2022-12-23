import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let SecurityOffice1 = {
    ipl : ["sf_fixeroffice_bh1_05"],
    Enable : function(state){
        if (state){
            EnableIpl(SecurityOffice1.ipl, state);
            SetIplProp(287489, "Entity_Set_Wpaper_1", getConfig("Load_SecurityOffice1Wallpaper1"));
            SetIplProp(287489, "Entity_Set_Wpaper_2", getConfig("Load_SecurityOffice1Wallpaper2"));
            SetIplProp(287489, "Entity_Set_Wpaper_3", getConfig("Load_SecurityOffice1Wallpaper3"));
            SetIplProp(287489, "Entity_Set_Wpaper_4", getConfig("Load_SecurityOffice1Wallpaper4"));
            SetIplProp(287489, "Entity_Set_Wpaper_5", getConfig("Load_SecurityOffice1Wallpaper5"));
            SetIplProp(287489, "Entity_Set_Wpaper_6", getConfig("Load_SecurityOffice1Wallpaper6"));
            SetIplProp(287489, "Entity_Set_Wpaper_7", getConfig("Load_SecurityOffice1Wallpaper7"));
            SetIplProp(287489, "Entity_Set_Wpaper_8", getConfig("Load_SecurityOffice1Wallpaper8"));
            SetIplProp(287489, "Entity_Set_Wpaper_9", getConfig("Load_SecurityOffice1Wallpaper9"));
            SetIplProp(287489, "Entity_Set_M_Trip_01", getConfig("Load_SecurityOffice1Trip1"));
            SetIplProp(287489, "Entity_Set_M_Trip_02", getConfig("Load_SecurityOffice1Trip2"));
            SetIplProp(287489, "Entity_Set_M_Trip_03", getConfig("Load_SecurityOffice1Trip3"));
            SetIplProp(287489, "Entity_set_disc_01", getConfig("Load_SecurityOffice1Disc1"));
            SetIplProp(287489, "Entity_set_disc_02", getConfig("Load_SecurityOffice1Disc2"));
            SetIplProp(287489, "Entity_set_disc_03", getConfig("Load_SecurityOffice1Disc3"));
            SetIplProp(287489, "Entity_set_disc_04", getConfig("Load_SecurityOffice1Disc4"));
            SetIplProp(287489, "Entity_set_disc_05", getConfig("Load_SecurityOffice1Disc5"));
            SetIplProp(287489, "Entity_set_disc_06", getConfig("Load_SecurityOffice1Disc6"));
            SetIplProp(287489, "Entity_Set_Art_1", getConfig("Load_SecurityOffice1Art1"));
            SetIplProp(287489, "Entity_Set_Art_2", getConfig("Load_SecurityOffice1Art2"));
            SetIplProp(287489, "Entity_Set_Art_3", getConfig("Load_SecurityOffice1Art3"));
            SetIplProp(287489, "Entity_Set_Moving", getConfig("Load_SecurityOffice1Moving"));
            SetIplProp(287489, "Entity_Set_Tint_AG", getConfig("Load_SecurityOffice1TintAG"));
            SetIplProp(287489, "Entity_Set_Spare_Seats", getConfig("Load_SecurityOffice1SpareSeats"));
            SetIplProp(287489, "Entity_Set_Player_Seats", getConfig("Load_SecurityOffice1PlayerSeats"));
            SetIplProp(287489, "Entity_Set_Player_Desk", getConfig("Load_SecurityOffice1PlayerDesk"));
            SetIplProp(287489, "Entity_Set_M_Golf_Intro", getConfig("Load_SecurityOffice1GolfIntro"));
            SetIplProp(287489, "Entity_Set_M_Setup", getConfig("Load_SecurityOffice1Setup"));
            SetIplProp(287489, "Entity_Set_M_Nightclub", getConfig("Load_SecurityOffice1Nightclub"));
            SetIplProp(287489, "Entity_Set_M_Yacht", getConfig("Load_SecurityOffice1Yacht"));
            SetIplProp(287489, "Entity_Set_M_Promoter", getConfig("Load_SecurityOffice1Promoter"));
            SetIplProp(287489, "Entity_Set_M_Limo_Photo", getConfig("Load_SecurityOffice1LimoPhoto"));
            SetIplProp(287489, "Entity_Set_M_Limo_Wallet", getConfig("Load_SecurityOffice1LimoWallet"));
            SetIplProp(287489, "Entity_Set_M_The_Way", getConfig("Load_SecurityOffice1TheWay"));
            SetIplProp(287489, "Entity_Set_M_Billionaire", getConfig("Load_SecurityOffice1Billionaire"));
            SetIplProp(287489, "Entity_Set_M_Families", getConfig("Load_SecurityOffice1Families"));
            SetIplProp(287489, "Entity_Set_M_Ballas", getConfig("Load_SecurityOffice1Ballas"));
            SetIplProp(287489, "Entity_Set_M_Hood", getConfig("Load_SecurityOffice1Hood"));
            SetIplProp(287489, "Entity_Set_M_Fire_Booth", getConfig("Load_SecurityOffice1FireBooth"));
            SetIplProp(287489, "Entity_Set_M_50", getConfig("Load_SecurityOffice150"));
            SetIplProp(287489, "Entity_Set_M_Taxi", getConfig("Load_SecurityOffice1Taxi"));
            SetIplProp(287489, "Entity_Set_M_Gone_Golfing", getConfig("Load_SecurityOffice1GoneGolfing"));
            SetIplProp(287489, "Entity_Set_M_Motel", getConfig("Load_SecurityOffice1Motel"));
            SetIplProp(287489, "Entity_Set_M_Construction", getConfig("Load_SecurityOffice1Construction"));
            SetIplProp(287489, "Entity_Set_M_Hit_List", getConfig("Load_SecurityOffice1HitList"));
            SetIplProp(287489, "Entity_Set_M_Tuner", getConfig("Load_SecurityOffice1Tuner"));
            SetIplProp(287489, "Entity_Set_M_Attack", getConfig("Load_SecurityOffice1Attack"));
            SetIplProp(287489, "Entity_Set_M_Vehicles", getConfig("Load_SecurityOffice1Vehicles"));
            SetIplProp(287489, "Entity_Set_Armoury", getConfig("Load_SecurityOffice1Armoury"));
            SetIplProp(287489, "Entity_Set_Standard_Office", getConfig("Load_SecurityOffice1StandardOffice"));
            SetIplProp(287489, "Entity_Set_Blocker", getConfig("Load_SecurityOffice1Blocker"));
            native.refreshInterior(287489);
        }
    }
}