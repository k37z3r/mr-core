import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let Garage4 = {
    ipl : [],
    Enable : function(state){
        let IPL, INTID, StyleId, Garage4LevelNumsId, Garage4LightningId, Garage4floorId;
        if (state){
            if (getConfig("Load_Garage4Part") == "garage1"){
                IPL = "imp_sm_15_cargarage_a";
                INTID = 256513;
            }
            else if (getConfig("Load_Garage4Part") == "garage2"){
                IPL = "imp_sm_15_cargarage_b";
                INTID = 256769;
            }
            else{
                IPL = "imp_sm_15_cargarage_c";
                INTID = 257025;
            }
            EnableIpl(IPL, state);
            if (getConfig("Load_Garage4Style") == "set1")
                StyleId = "garage_decor_01";
            else if (getConfig("Load_Garage4Style") == "set2")
                StyleId = "garage_decor_02";
            else if (getConfig("Load_Garage4Style") == "set3")
                StyleId = "garage_decor_03";
            else
                StyleId = "garage_decor_04";
            SetIplProp(INTID, StyleId, true);
            SetIplProp(257281, "imp_sm_13_modgarage", true);
            if (getConfig("Load_Garage4LevelNums") == "set1")
                Garage4LevelNumsId = "numbering_style01_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set2")
                Garage4LevelNumsId = "numbering_style02_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set3")
                Garage4LevelNumsId = "numbering_style03_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set4")
                Garage4LevelNumsId = "numbering_style04_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set5")
                Garage4LevelNumsId = "numbering_style05_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set6")
                Garage4LevelNumsId = "numbering_style06_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set7")
                Garage4LevelNumsId = "numbering_style07_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set8")
                Garage4LevelNumsId = "numbering_style08_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set9")
                Garage4LevelNumsId = "numbering_style09_n1";
            else if (getConfig("Load_Garage4LevelNums") == "set10")
                Garage4LevelNumsId = "numbering_style01_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set11")
                Garage4LevelNumsId = "numbering_style02_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set12")
                Garage4LevelNumsId = "numbering_style03_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set13")
                Garage4LevelNumsId = "numbering_style04_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set14")
                Garage4LevelNumsId = "numbering_style05_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set15")
                Garage4LevelNumsId = "numbering_style06_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set16")
                Garage4LevelNumsId = "numbering_style07_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set17")
                Garage4LevelNumsId = "numbering_style08_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set18")
                Garage4LevelNumsId = "numbering_style09_n2";
            else if (getConfig("Load_Garage4LevelNums") == "set19")
                Garage4LevelNumsId = "numbering_style01_n3";
            else if (getConfig("Load_Garage4LevelNums") == "set20")
                Garage4LevelNumsId = "numbering_style02_n3";
            else if (getConfig("Load_Garage4LevelNums") == "set21")
                Garage4LevelNumsId = "numbering_style03_n3";
            else if (getConfig("Load_Garage4LevelNums") == "set22")
                Garage4LevelNumsId = "numbering_style04_n3";
            else if (getConfig("Load_Garage4LevelNums") == "set23")
                Garage4LevelNumsId = "numbering_style05_n3";
            else if (getConfig("Load_Garage4LevelNums") == "set24")
                Garage4LevelNumsId = "numbering_style06_n3";
            else if (getConfig("Load_Garage4LevelNums") == "set25")
                Garage4LevelNumsId = "numbering_style07_n3";
            else if (getConfig("Load_Garage4LevelNums") == "set26")
                Garage4LevelNumsId = "numbering_style08_n3";
            else if (getConfig("Load_Garage4LevelNums") == "set27")
                Garage4LevelNumsId = "numbering_style09_n3";
            else
                Garage4LevelNumsId = "none";
            if (Garage4LevelNumsId != "none"){
                SetIplProp(INTID, Garage4LevelNumsId, true);
            }
            if (getConfig("Load_Garage4Lightning") == "set1")
                Garage4LightningId = "lighting_option01";
            else if (getConfig("Load_Garage4Lightning") == "set2")
                Garage4LightningId = "lighting_option02";
            else if (getConfig("Load_Garage4Lightning") == "set3")
                Garage4LightningId = "lighting_option03";
            else if (getConfig("Load_Garage4Lightning") == "set4")
                Garage4LightningId = "lighting_option04";
            else if (getConfig("Load_Garage4Lightning") == "set5")
                Garage4LightningId = "lighting_option05";
            else if (getConfig("Load_Garage4Lightning") == "set6")
                Garage4LightningId = "lighting_option06";
            else if (getConfig("Load_Garage4Lightning") == "set7")
                Garage4LightningId = "lighting_option07";
            else if (getConfig("Load_Garage4Lightning") == "set8")
                Garage4LightningId = "lighting_option08";
            else if (getConfig("Load_Garage4Lightning") == "set9")
                Garage4LightningId = "lighting_option09";
            else
                Garage4LightningId = "none";
            if (Garage4LightningId != "none"){
                SetIplProp(INTID, Garage4LightningId, true);
            }
            if (getConfig("Load_Garage4floor") == "city")
                Garage4floorId = "floor_vinyl_01";
            else if (getConfig("Load_Garage4floor") == "seabed")
                Garage4floorId = "floor_vinyl_02";
            else if (getConfig("Load_Garage4floor") == "aliens")
                Garage4floorId = "floor_vinyl_03";
            else if (getConfig("Load_Garage4floor") == "clouds")
                Garage4floorId = "floor_vinyl_04";
            else if (getConfig("Load_Garage4floor") == "money")
                Garage4floorId = "floor_vinyl_05";
            else if (getConfig("Load_Garage4floor") == "zebra")
                Garage4floorId = "floor_vinyl_06";
            else if (getConfig("Load_Garage4floor") == "blackwhite")
                Garage4floorId = "floor_vinyl_07";
            else if (getConfig("Load_Garage4floor") == "barcode")
                Garage4floorId = "floor_vinyl_08";
            else if (getConfig("Load_Garage4floor") == "paintbrushbw")
                Garage4floorId = "floor_vinyl_09";
            else if (getConfig("Load_Garage4floor") == "grid")
                Garage4floorId = "floor_vinyl_10";
            else if (getConfig("Load_Garage4floor") == "splashes")
                Garage4floorId = "floor_vinyl_11";
            else if (getConfig("Load_Garage4floor") == "squares")
                Garage4floorId = "floor_vinyl_12";
            else if (getConfig("Load_Garage4floor") == "mosaic")
                Garage4floorId = "floor_vinyl_13";
            else if (getConfig("Load_Garage4floor") == "paintbrushcolor")
                Garage4floorId = "floor_vinyl_14";
            else if (getConfig("Load_Garage4floor") == "curvescolor")
                Garage4floorId = "floor_vinyl_15";
            else if (getConfig("Load_Garage4floor") == "marblebrown")
                Garage4floorId = "floor_vinyl_16";
            else if (getConfig("Load_Garage4floor") == "marbleblue")
                Garage4floorId = "floor_vinyl_17";
            else if (getConfig("Load_Garage4floor") == "marblebw")
                Garage4floorId = "floor_vinyl_18";
            else if (getConfig("Load_Garage4floor") == "maze")
                Garage4floorId = "floor_vinyl_19";
            else
                Garage4floorId = "none";
            if (Garage4floorId != "none"){
                SetIplProp(257281, Garage4floorId, true);
            }
            native.refreshInterior(257281);
            native.refreshInterior(INTID);
        }
    }
}