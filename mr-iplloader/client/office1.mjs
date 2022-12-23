import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let FinanceOffice1 = {
    ipl : [],
    Enable : function(state){
        let IPL, INTID, safe, CashId, CigsId, CounterfeitId, DrugBagsId, DrugStatueId, ElectronicId, FurCoatsId, GemsId, GunsId, IvoryId, JewelId, MedId, ArtId, PillsId, SilverId;
        if (state){
            if (getConfig("Load_FinanceOffice1Style") == "warm"){
                IPL = "ex_dt1_02_office_01a";
                safe = "ex_prop_safedoor_office1a";
                INTID = 236289;
            }
            else if (getConfig("Load_FinanceOffice1Style") == "classical"){
                IPL = "ex_dt1_02_office_01b";
                safe = "ex_prop_safedoor_office1b";
                INTID = 236545;
            }
            else if (getConfig("Load_FinanceOffice1Style") == "vintage"){
                IPL = "ex_dt1_02_office_01c";
                safe = "ex_prop_safedoor_office1c";
                INTID = 226801;
            }
            else if (getConfig("Load_FinanceOffice1Style") == "contrast"){
                IPL = "ex_dt1_02_office_02a";
                safe = "ex_prop_safedoor_office2a";
                INTID = 237057;
            }
            else if (getConfig("Load_FinanceOffice1Style") == "rich"){
                IPL = "ex_dt1_02_office_02b";
                safe = "ex_prop_safedoor_office2a";
                INTID = 237313;
            }
            else if (getConfig("Load_FinanceOffice1Style") == "cool"){
                IPL = "ex_dt1_02_office_02c";
                safe = "ex_prop_safedoor_office2a";
                INTID = 237569;
            }
            else if (getConfig("Load_FinanceOffice1Style") == "ice"){
                IPL = "ex_dt1_02_office_03a";
                safe = "ex_prop_safedoor_office3a";
                INTID = 237825;
            }
            else if (getConfig("Load_FinanceOffice1Style") == "conservative"){
                IPL = "ex_dt1_02_office_03b";
                safe = "ex_prop_safedoor_office3a";
                INTID = 238081;
            }
            else{
                IPL = "ex_dt1_02_office_03c";
                safe = "ex_prop_safedoor_office3c";
                INTID = 238337;
            }
            EnableIpl(IPL, state);
            SetIplProp(INTID, safe + '_l', true);
            SetIplProp(INTID, safe + '_r', true);
            if (getConfig("Load_FinanceOffice1Cash") == "set1")
                CashId = "cash_set_01";
            else if (getConfig("Load_FinanceOffice1Cash") == "set2")
                CashId = "cash_set_02";
            else if (getConfig("Load_FinanceOffice1Cash") == "set3")
                CashId = "cash_set_03";
            else if (getConfig("Load_FinanceOffice1Cash") == "set4")
                CashId = "cash_set_04";
            else if (getConfig("Load_FinanceOffice1Cash") == "set5")
                CashId = "cash_set_05";
            else if (getConfig("Load_FinanceOffice1Cash") == "set6")
                CashId = "cash_set_06";
            else if (getConfig("Load_FinanceOffice1Cash") == "set7")
                CashId = "cash_set_07";
            else if (getConfig("Load_FinanceOffice1Cash") == "set8")
                CashId = "cash_set_08";
            else if (getConfig("Load_FinanceOffice1Cash") == "set9")
                CashId = "cash_set_09";
            else if (getConfig("Load_FinanceOffice1Cash") == "set10")
                CashId = "cash_set_10";
            else if (getConfig("Load_FinanceOffice1Cash") == "set11")
                CashId = "cash_set_11";
            else if (getConfig("Load_FinanceOffice1Cash") == "set12")
                CashId = "cash_set_12";
            else if (getConfig("Load_FinanceOffice1Cash") == "set13")
                CashId = "cash_set_13";
            else if (getConfig("Load_FinanceOffice1Cash") == "set14")
                CashId = "cash_set_14";
            else if (getConfig("Load_FinanceOffice1Cash") == "set15")
                CashId = "cash_set_15";
            else if (getConfig("Load_FinanceOffice1Cash") == "set16")
                CashId = "cash_set_16";
            else if (getConfig("Load_FinanceOffice1Cash") == "set17")
                CashId = "cash_set_17";
            else if (getConfig("Load_FinanceOffice1Cash") == "set18")
                CashId = "cash_set_18";
            else if (getConfig("Load_FinanceOffice1Cash") == "set19")
                CashId = "cash_set_19";
            else if (getConfig("Load_FinanceOffice1Cash") == "set20")
                CashId = "cash_set_20";
            else if (getConfig("Load_FinanceOffice1Cash") == "set21")
                CashId = "cash_set_21";
            else if (getConfig("Load_FinanceOffice1Cash") == "set22")
                CashId = "cash_set_22";
            else if (getConfig("Load_FinanceOffice1Cash") == "set23")
                CashId = "cash_set_23";
            else if (getConfig("Load_FinanceOffice1Cash") == "set24")
                CashId = "cash_set_24";
            else
                CashId = "none";
            SetIplProp(INTID, CashId, true);
            if (getConfig("Load_FinanceOffice1Cigs") == "set1")
                CigsId = "swag_booze_cigs";
            else if (getConfig("Load_FinanceOffice1Cigs") == "set2")
                CigsId = "swag_booze_cigs2";
            else if (getConfig("Load_FinanceOffice1Cigs") == "set3")
                CigsId = "swag_booze_cigs3";
            else
                CigsId = "none";
            if (CigsId != "none"){
                SetIplProp(INTID, CigsId, true);
            }
            if (getConfig("Load_FinanceOffice1Counterfeit") == "set1")
                CounterfeitId = "swag_counterfeit";
            else if (getConfig("Load_FinanceOffice1Counterfeit") == "set2")
                CounterfeitId = "swag_counterfeit2";
            else if (getConfig("Load_FinanceOffice1Counterfeit") == "set3")
                CounterfeitId = "swag_counterfeit3";
            else
                CounterfeitId = "none";
            if (CounterfeitId != "none"){
                SetIplProp(INTID, CounterfeitId, true);
            }
            if (getConfig("Load_FinanceOffice1DrugBags") == "set1")
                DrugBagsId = "swag_drugbags";
            else if (getConfig("Load_FinanceOffice1DrugBags") == "set2")
                DrugBagsId = "swag_drugbags2";
            else if (getConfig("Load_FinanceOffice1DrugBags") == "set3")
                DrugBagsId = "swag_drugbags3";
            else
                DrugBagsId = "none";
            if (DrugBagsId != "none"){
                SetIplProp(INTID, DrugBagsId, true);
            }
            if (getConfig("Load_FinanceOffice1DrugStatue") == "set1")
                DrugStatueId = "swag_drugstatue";
            else if (getConfig("Load_FinanceOffice1DrugStatue") == "set2")
                DrugStatueId = "swag_drugstatue2";
            else if (getConfig("Load_FinanceOffice1DrugStatue") == "set3")
                DrugStatueId = "swag_drugstatue3";
            else
                DrugStatueId = "none";
            if (DrugStatueId != "none"){
                SetIplProp(INTID, DrugStatueId, true);
            }
            if (getConfig("Load_FinanceOffice1Electronic") == "set1")
                ElectronicId = "swag_electronic";
            else if (getConfig("Load_FinanceOffice1Electronic") == "set2")
                ElectronicId = "swag_electronic2";
            else if (getConfig("Load_FinanceOffice1Electronic") == "set3")
                ElectronicId = "swag_electronic3";
            else
                ElectronicId = "none";
            if (ElectronicId != "none"){
                SetIplProp(INTID, ElectronicId, true);
            }
            if (getConfig("Load_FinanceOffice1FurCoats") == "set1")
                FurCoatsId = "swag_furcoats";
            else if (getConfig("Load_FinanceOffice1FurCoats") == "set2")
                FurCoatsId = "swag_furcoats2";
            else if (getConfig("Load_FinanceOffice1FurCoats") == "set3")
                FurCoatsId = "swag_furcoats3";
            else
                FurCoatsId = "none";
            if (FurCoatsId != "none"){
                SetIplProp(INTID, FurCoatsId, true);
            }
            if (getConfig("Load_FinanceOffice1Gems") == "set1")
                GemsId = "swag_gems";
            else if (getConfig("Load_FinanceOffice1Gems") == "set2")
                GemsId = "swag_gems2";
            else if (getConfig("Load_FinanceOffice1Gems") == "set3")
                GemsId = "swag_gems3";
            else
                GemsId = "none";
            if (GemsId != "none"){
                SetIplProp(INTID, GemsId, true);
            }
            if (getConfig("Load_FinanceOffice1Guns") == "set1")
                GunsId = "swag_guns";
            else if (getConfig("Load_FinanceOffice1Guns") == "set2")
                GunsId = "swag_guns2";
            else if (getConfig("Load_FinanceOffice1Guns") == "set3")
                GunsId = "swag_guns3";
            else
                GunsId = "none";
            if (GunsId != "none"){
                SetIplProp(INTID, GunsId, true);
            }
            if (getConfig("Load_FinanceOffice1Ivory") == "set1")
                IvoryId = "swag_ivory";
            else if (getConfig("Load_FinanceOffice1Ivory") == "set2")
                IvoryId = "swag_ivory2";
            else if (getConfig("Load_FinanceOffice1Ivory") == "set3")
                IvoryId = "swag_ivory3";
            else
                IvoryId = "none";
            if (IvoryId != "none"){
                SetIplProp(INTID, IvoryId, true);
            }
            if (getConfig("Load_FinanceOffice1JewelWatch") == "set1")
                JewelId = "swag_jewelwatch";
            else if (getConfig("Load_FinanceOffice1JewelWatch") == "set2")
                JewelId = "swag_jewelwatch2";
            else if (getConfig("Load_FinanceOffice1JewelWatch") == "set3")
                JewelId = "swag_jewelwatch3";
            else
                JewelId = "none";
            if (JewelId != "none"){
                SetIplProp(INTID, JewelId, true);
            }
            if (getConfig("Load_FinanceOffice1Med") == "set1")
                MedId = "swag_med";
            else if (getConfig("Load_FinanceOffice1Med") == "set2")
                MedId = "swag_med2";
            else if (getConfig("Load_FinanceOffice1Med") == "set3")
                MedId = "swag_med3";
            else
                MedId = "none";
            if (MedId != "none"){
                SetIplProp(INTID, MedId, true);
            }
            if (getConfig("Load_FinanceOffice1Art") == "set1")
                ArtId = "swag_art";
            else if (getConfig("Load_FinanceOfficeArt") == "set2")
                ArtId = "swag_art2";
            else if (getConfig("Load_FinanceOffice1Art") == "set3")
                ArtId = "swag_art3";
            else
                ArtId = "none";
            if (ArtId != "none"){
                SetIplProp(INTID, ArtId, true);
            }
            if (getConfig("Load_FinanceOffice1Pills") == "set1")
                PillsId = "swag_pills";
            else if (getConfig("Load_FinanceOfficPills") == "set2")
                PillsId = "swag_pills2";
            else if (getConfig("Load_FinanceOffice1Pills") == "set3")
                PillsId = "swag_pills3";
            else
                PillsId = "none";
            if (PillsId != "none"){
                SetIplProp(INTID, PillsId, true);
            }
            if (getConfig("Load_FinanceOffice1Silver") == "set1")
                SilverId = "swag_silver";
            else if (getConfig("Load_FinanceOfficSilver") == "set2")
                SilverId = "swag_silver2";
            else if (getConfig("Load_FinanceOffice1Silver") == "set3")
                SilverId = "swag_silver3";
            else
                SilverId = "none";
            if (SilverId != "none"){
                SetIplProp(INTID, SilverId, true);
            }
            SetIplProp(INTID, "office_chairs", getConfig("Load_FinanceOffice1Chairs"));
            SetIplProp(INTID, "office_booze", getConfig("Load_FinanceOffice1Booze"));
            native.refreshInterior(INTID);
        }
    }
}