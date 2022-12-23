import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let Garage3 = {
    ipl : [],
    Enable : function(state){
        let IPL, INTID, StyleId, Garage3LevelNumsId, Garage3LightningId, Garage3floorId;
        if (state){
            if (getConfig("Load_Garage3Part") == "garage1"){
                IPL = "imp_sm_13_cargarage_a";
                INTID = 255489;
            }
            else if (getConfig("Load_Garage3Part") == "garage2"){
                IPL = "imp_sm_13_cargarage_b";
                INTID = 255745;
            }
            else{
                IPL = "imp_sm_13_cargarage_c";
                INTID = 256001;
            }
            EnableIpl(IPL, state);
            if (getConfig("Load_Garage3Style") == "set1")
                StyleId = "garage_decor_01";
            else if (getConfig("Load_Garage3Style") == "set2")
                StyleId = "garage_decor_02";
            else if (getConfig("Load_Garage3Style") == "set3")
                StyleId = "garage_decor_03";
            else
                StyleId = "garage_decor_04";
            SetIplProp(INTID, StyleId, true);
            SetIplProp(256257, "imp_sm_13_modgarage", true);
            if (getConfig("Load_Garage3LevelNums") == "set1")
                Garage3LevelNumsId = "numbering_style01_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set2")
                Garage3LevelNumsId = "numbering_style02_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set3")
                Garage3LevelNumsId = "numbering_style03_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set4")
                Garage3LevelNumsId = "numbering_style04_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set5")
                Garage3LevelNumsId = "numbering_style05_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set6")
                Garage3LevelNumsId = "numbering_style06_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set7")
                Garage3LevelNumsId = "numbering_style07_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set8")
                Garage3LevelNumsId = "numbering_style08_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set9")
                Garage3LevelNumsId = "numbering_style09_n1";
            else if (getConfig("Load_Garage3LevelNums") == "set10")
                Garage3LevelNumsId = "numbering_style01_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set11")
                Garage3LevelNumsId = "numbering_style02_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set12")
                Garage3LevelNumsId = "numbering_style03_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set13")
                Garage3LevelNumsId = "numbering_style04_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set14")
                Garage3LevelNumsId = "numbering_style05_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set15")
                Garage3LevelNumsId = "numbering_style06_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set16")
                Garage3LevelNumsId = "numbering_style07_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set17")
                Garage3LevelNumsId = "numbering_style08_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set18")
                Garage3LevelNumsId = "numbering_style09_n2";
            else if (getConfig("Load_Garage3LevelNums") == "set19")
                Garage3LevelNumsId = "numbering_style01_n3";
            else if (getConfig("Load_Garage3LevelNums") == "set20")
                Garage3LevelNumsId = "numbering_style02_n3";
            else if (getConfig("Load_Garage3LevelNums") == "set21")
                Garage3LevelNumsId = "numbering_style03_n3";
            else if (getConfig("Load_Garage3LevelNums") == "set22")
                Garage3LevelNumsId = "numbering_style04_n3";
            else if (getConfig("Load_Garage3LevelNums") == "set23")
                Garage3LevelNumsId = "numbering_style05_n3";
            else if (getConfig("Load_Garage3LevelNums") == "set24")
                Garage3LevelNumsId = "numbering_style06_n3";
            else if (getConfig("Load_Garage3LevelNums") == "set25")
                Garage3LevelNumsId = "numbering_style07_n3";
            else if (getConfig("Load_Garage3LevelNums") == "set26")
                Garage3LevelNumsId = "numbering_style08_n3";
            else if (getConfig("Load_Garage3LevelNums") == "set27")
                Garage3LevelNumsId = "numbering_style09_n3";
            else
                Garage3LevelNumsId = "none";
            if (Garage3LevelNumsId != "none"){
                SetIplProp(INTID, Garage3LevelNumsId, true);
            }
            if (getConfig("Load_Garage3Lightning") == "set1")
                Garage3LightningId = "lighting_option01";
            else if (getConfig("Load_Garage3Lightning") == "set2")
                Garage3LightningId = "lighting_option02";
            else if (getConfig("Load_Garage3Lightning") == "set3")
                Garage3LightningId = "lighting_option03";
            else if (getConfig("Load_Garage3Lightning") == "set4")
                Garage3LightningId = "lighting_option04";
            else if (getConfig("Load_Garage3Lightning") == "set5")
                Garage3LightningId = "lighting_option05";
            else if (getConfig("Load_Garage3Lightning") == "set6")
                Garage3LightningId = "lighting_option06";
            else if (getConfig("Load_Garage3Lightning") == "set7")
                Garage3LightningId = "lighting_option07";
            else if (getConfig("Load_Garage3Lightning") == "set8")
                Garage3LightningId = "lighting_option08";
            else if (getConfig("Load_Garage3Lightning") == "set9")
                Garage3LightningId = "lighting_option09";
            else
                Garage3LightningId = "none";
            if (Garage3LightningId != "none"){
                SetIplProp(INTID, Garage3LightningId, true);
            }
            if (getConfig("Load_Garage3floor") == "city")
                Garage3floorId = "floor_vinyl_01";
            else if (getConfig("Load_Garage3floor") == "seabed")
                Garage3floorId = "floor_vinyl_02";
            else if (getConfig("Load_Garage3floor") == "aliens")
                Garage3floorId = "floor_vinyl_03";
            else if (getConfig("Load_Garage3floor") == "clouds")
                Garage3floorId = "floor_vinyl_04";
            else if (getConfig("Load_Garage3floor") == "money")
                Garage3floorId = "floor_vinyl_05";
            else if (getConfig("Load_Garage3floor") == "zebra")
                Garage3floorId = "floor_vinyl_06";
            else if (getConfig("Load_Garage3floor") == "blackwhite")
                Garage3floorId = "floor_vinyl_07";
            else if (getConfig("Load_Garage3floor") == "barcode")
                Garage3floorId = "floor_vinyl_08";
            else if (getConfig("Load_Garage3floor") == "paintbrushbw")
                Garage3floorId = "floor_vinyl_09";
            else if (getConfig("Load_Garage3floor") == "grid")
                Garage3floorId = "floor_vinyl_10";
            else if (getConfig("Load_Garage3floor") == "splashes")
                Garage3floorId = "floor_vinyl_11";
            else if (getConfig("Load_Garage3floor") == "squares")
                Garage3floorId = "floor_vinyl_12";
            else if (getConfig("Load_Garage3floor") == "mosaic")
                Garage3floorId = "floor_vinyl_13";
            else if (getConfig("Load_Garage3floor") == "paintbrushcolor")
                Garage3floorId = "floor_vinyl_14";
            else if (getConfig("Load_Garage3floor") == "curvescolor")
                Garage3floorId = "floor_vinyl_15";
            else if (getConfig("Load_Garage3floor") == "marblebrown")
                Garage3floorId = "floor_vinyl_16";
            else if (getConfig("Load_Garage3floor") == "marbleblue")
                Garage3floorId = "floor_vinyl_17";
            else if (getConfig("Load_Garage3floor") == "marblebw")
                Garage3floorId = "floor_vinyl_18";
            else if (getConfig("Load_Garage3floor") == "maze")
                Garage3floorId = "floor_vinyl_19";
            else
                Garage3floorId = "none";
            if (Garage3floorId != "none"){
                SetIplProp(256257, Garage3floorId, true);
            }
            native.refreshInterior(256257);
            native.refreshInterior(INTID);
        }
    }
}