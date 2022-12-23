import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let SecurityOffice2 = {
    ipl : ["sf_fixeroffice_hw1_08"],
    Enable : function(state){
        if (state){
            EnableIpl(SecurityOffice2.ipl, state);
            SetIplProp(288257, "Entity_Set_Wpaper_1", getConfig("Load_SecurityOffice2Wallpaper1"));
            SetIplProp(288257, "Entity_Set_Wpaper_2", getConfig("Load_SecurityOffice2Wallpaper2"));
            SetIplProp(288257, "Entity_Set_Wpaper_3", getConfig("Load_SecurityOffice2Wallpaper3"));
            SetIplProp(288257, "Entity_Set_Wpaper_4", getConfig("Load_SecurityOffice2Wallpaper4"));
            SetIplProp(288257, "Entity_Set_Wpaper_5", getConfig("Load_SecurityOffice2Wallpaper5"));
            SetIplProp(288257, "Entity_Set_Wpaper_6", getConfig("Load_SecurityOffice2Wallpaper6"));
            SetIplProp(288257, "Entity_Set_Wpaper_7", getConfig("Load_SecurityOffice2Wallpaper7"));
            SetIplProp(288257, "Entity_Set_Wpaper_8", getConfig("Load_SecurityOffice2Wallpaper8"));
            SetIplProp(288257, "Entity_Set_Wpaper_9", getConfig("Load_SecurityOffice2Wallpaper9"));
            SetIplProp(288257, "Entity_Set_M_Trip_01", getConfig("Load_SecurityOffice2Trip1"));
            SetIplProp(288257, "Entity_Set_M_Trip_02", getConfig("Load_SecurityOffice2Trip2"));
            SetIplProp(288257, "Entity_Set_M_Trip_03", getConfig("Load_SecurityOffice2Trip3"));
            SetIplProp(288257, "Entity_set_disc_01", getConfig("Load_SecurityOffice2Disc1"));
            SetIplProp(288257, "Entity_set_disc_02", getConfig("Load_SecurityOffice2Disc2"));
            SetIplProp(288257, "Entity_set_disc_03", getConfig("Load_SecurityOffice2Disc3"));
            SetIplProp(288257, "Entity_set_disc_04", getConfig("Load_SecurityOffice2Disc4"));
            SetIplProp(288257, "Entity_set_disc_05", getConfig("Load_SecurityOffice2Disc5"));
            SetIplProp(288257, "Entity_set_disc_06", getConfig("Load_SecurityOffice2Disc6"));
            SetIplProp(288257, "Entity_Set_Art_1", getConfig("Load_SecurityOffice2Art1"));
            SetIplProp(288257, "Entity_Set_Art_2", getConfig("Load_SecurityOffice2Art2"));
            SetIplProp(288257, "Entity_Set_Art_3", getConfig("Load_SecurityOffice2Art3"));
            SetIplProp(288257, "Entity_Set_Moving", getConfig("Load_SecurityOffice2Moving"));
            SetIplProp(288257, "Entity_Set_Tint_AG", getConfig("Load_SecurityOffice2TintAG"));
            SetIplProp(288257, "Entity_Set_Spare_Seats", getConfig("Load_SecurityOffice2SpareSeats"));
            SetIplProp(288257, "Entity_Set_Player_Seats", getConfig("Load_SecurityOffice2PlayerSeats"));
            SetIplProp(288257, "Entity_Set_Player_Desk", getConfig("Load_SecurityOffice2PlayerDesk"));
            SetIplProp(288257, "Entity_Set_M_Golf_Intro", getConfig("Load_SecurityOffice2GolfIntro"));
            SetIplProp(288257, "Entity_Set_M_Setup", getConfig("Load_SecurityOffice2Setup"));
            SetIplProp(288257, "Entity_Set_M_Nightclub", getConfig("Load_SecurityOffice2Nightclub"));
            SetIplProp(288257, "Entity_Set_M_Yacht", getConfig("Load_SecurityOffice2Yacht"));
            SetIplProp(288257, "Entity_Set_M_Promoter", getConfig("Load_SecurityOffice2Promoter"));
            SetIplProp(288257, "Entity_Set_M_Limo_Photo", getConfig("Load_SecurityOffice2LimoPhoto"));
            SetIplProp(288257, "Entity_Set_M_Limo_Wallet", getConfig("Load_SecurityOffice2LimoWallet"));
            SetIplProp(288257, "Entity_Set_M_The_Way", getConfig("Load_SecurityOffice2TheWay"));
            SetIplProp(288257, "Entity_Set_M_Billionaire", getConfig("Load_SecurityOffice2Billionaire"));
            SetIplProp(288257, "Entity_Set_M_Families", getConfig("Load_SecurityOffice2Families"));
            SetIplProp(288257, "Entity_Set_M_Ballas", getConfig("Load_SecurityOffice2Ballas"));
            SetIplProp(288257, "Entity_Set_M_Hood", getConfig("Load_SecurityOffice2Hood"));
            SetIplProp(288257, "Entity_Set_M_Fire_Booth", getConfig("Load_SecurityOffice2FireBooth"));
            SetIplProp(288257, "Entity_Set_M_50", getConfig("Load_SecurityOffice250"));
            SetIplProp(288257, "Entity_Set_M_Taxi", getConfig("Load_SecurityOffice2Taxi"));
            SetIplProp(288257, "Entity_Set_M_Gone_Golfing", getConfig("Load_SecurityOffice2GoneGolfing"));
            SetIplProp(288257, "Entity_Set_M_Motel", getConfig("Load_SecurityOffice2Motel"));
            SetIplProp(288257, "Entity_Set_M_Construction", getConfig("Load_SecurityOffice2Construction"));
            SetIplProp(288257, "Entity_Set_M_Hit_List", getConfig("Load_SecurityOffice2HitList"));
            SetIplProp(288257, "Entity_Set_M_Tuner", getConfig("Load_SecurityOffice2Tuner"));
            SetIplProp(288257, "Entity_Set_M_Attack", getConfig("Load_SecurityOffice2Attack"));
            SetIplProp(288257, "Entity_Set_M_Vehicles", getConfig("Load_SecurityOffice2Vehicles"));
            SetIplProp(288257, "Entity_Set_Armoury", getConfig("Load_SecurityOffice2Armoury"));
            SetIplProp(288257, "Entity_Set_Standard_Office", getConfig("Load_SecurityOffice2StandardOffice"));
            SetIplProp(288257, "Entity_Set_Blocker", getConfig("Load_SecurityOffice2Blocker"));
            native.refreshInterior(288257);
        }
    }
}