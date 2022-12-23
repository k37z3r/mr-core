import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let Garage2 = {
    ipl : [],
    Enable : function(state){
        let IPL, INTID, StyleId, Garage2LevelNumsId, Garage2LightningId, Garage2floorId;
        if (state){
            if (getConfig("Load_Garage2Part") == "garage1"){
                IPL = "imp_dt1_11_cargarage_a";
                INTID = 254465;
            }
            else if (getConfig("Load_Garage2Part") == "garage2"){
                IPL = "imp_dt1_11_cargarage_b";
                INTID = 254721;
            }
            else{
                IPL = "imp_dt1_11_cargarage_c";
                INTID = 254977;
            }
            EnableIpl(IPL, state);
            if (getConfig("Load_Garage2Style") == "set1")
                StyleId = "garage_decor_01";
            else if (getConfig("Load_Garage2Style") == "set2")
                StyleId = "garage_decor_02";
            else if (getConfig("Load_Garage2Style") == "set3")
                StyleId = "garage_decor_03";
            else
                StyleId = "garage_decor_04";
            SetIplProp(INTID, StyleId, true);
            SetIplProp(255233, "imp_dt1_11_modgarage", true);
            if (getConfig("Load_Garage2LevelNums") == "set1")
                Garage2LevelNumsId = "numbering_style01_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set2")
                Garage2LevelNumsId = "numbering_style02_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set3")
                Garage2LevelNumsId = "numbering_style03_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set4")
                Garage2LevelNumsId = "numbering_style04_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set5")
                Garage2LevelNumsId = "numbering_style05_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set6")
                Garage2LevelNumsId = "numbering_style06_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set7")
                Garage2LevelNumsId = "numbering_style07_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set8")
                Garage2LevelNumsId = "numbering_style08_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set9")
                Garage2LevelNumsId = "numbering_style09_n1";
            else if (getConfig("Load_Garage2LevelNums") == "set10")
                Garage2LevelNumsId = "numbering_style01_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set11")
                Garage2LevelNumsId = "numbering_style02_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set12")
                Garage2LevelNumsId = "numbering_style03_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set13")
                Garage2LevelNumsId = "numbering_style04_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set14")
                Garage2LevelNumsId = "numbering_style05_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set15")
                Garage2LevelNumsId = "numbering_style06_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set16")
                Garage2LevelNumsId = "numbering_style07_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set17")
                Garage2LevelNumsId = "numbering_style08_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set18")
                Garage2LevelNumsId = "numbering_style09_n2";
            else if (getConfig("Load_Garage2LevelNums") == "set19")
                Garage2LevelNumsId = "numbering_style01_n3";
            else if (getConfig("Load_Garage2LevelNums") == "set20")
                Garage2LevelNumsId = "numbering_style02_n3";
            else if (getConfig("Load_Garage2LevelNums") == "set21")
                Garage2LevelNumsId = "numbering_style03_n3";
            else if (getConfig("Load_Garage2LevelNums") == "set22")
                Garage2LevelNumsId = "numbering_style04_n3";
            else if (getConfig("Load_Garage2LevelNums") == "set23")
                Garage2LevelNumsId = "numbering_style05_n3";
            else if (getConfig("Load_Garage2LevelNums") == "set24")
                Garage2LevelNumsId = "numbering_style06_n3";
            else if (getConfig("Load_Garage2LevelNums") == "set25")
                Garage2LevelNumsId = "numbering_style07_n3";
            else if (getConfig("Load_Garage2LevelNums") == "set26")
                Garage2LevelNumsId = "numbering_style08_n3";
            else if (getConfig("Load_Garage2LevelNums") == "set27")
                Garage2LevelNumsId = "numbering_style09_n3";
            else
                Garage2LevelNumsId = "none";
            if (Garage2LevelNumsId != "none"){
                SetIplProp(INTID, Garage2LevelNumsId, true);
            }
            if (getConfig("Load_Garage2Lightning") == "set1")
                Garage2LightningId = "lighting_option01";
            else if (getConfig("Load_Garage2Lightning") == "set2")
                Garage2LightningId = "lighting_option02";
            else if (getConfig("Load_Garage2Lightning") == "set3")
                Garage2LightningId = "lighting_option03";
            else if (getConfig("Load_Garage2Lightning") == "set4")
                Garage2LightningId = "lighting_option04";
            else if (getConfig("Load_Garage2Lightning") == "set5")
                Garage2LightningId = "lighting_option05";
            else if (getConfig("Load_Garage2Lightning") == "set6")
                Garage2LightningId = "lighting_option06";
            else if (getConfig("Load_Garage2Lightning") == "set7")
                Garage2LightningId = "lighting_option07";
            else if (getConfig("Load_Garage2Lightning") == "set8")
                Garage2LightningId = "lighting_option08";
            else if (getConfig("Load_Garage2Lightning") == "set9")
                Garage2LightningId = "lighting_option09";
            else
                Garage2LightningId = "none";
            if (Garage2LightningId != "none"){
                SetIplProp(INTID, Garage2LightningId, true);
            }
            if (getConfig("Load_Garage2floor") == "city")
                Garage2floorId = "floor_vinyl_01";
            else if (getConfig("Load_Garage2floor") == "seabed")
                Garage2floorId = "floor_vinyl_02";
            else if (getConfig("Load_Garage2floor") == "aliens")
                Garage2floorId = "floor_vinyl_03";
            else if (getConfig("Load_Garage2floor") == "clouds")
                Garage2floorId = "floor_vinyl_04";
            else if (getConfig("Load_Garage2floor") == "money")
                Garage2floorId = "floor_vinyl_05";
            else if (getConfig("Load_Garage2floor") == "zebra")
                Garage2floorId = "floor_vinyl_06";
            else if (getConfig("Load_Garage2floor") == "blackwhite")
                Garage2floorId = "floor_vinyl_07";
            else if (getConfig("Load_Garage2floor") == "barcode")
                Garage2floorId = "floor_vinyl_08";
            else if (getConfig("Load_Garage2floor") == "paintbrushbw")
                Garage2floorId = "floor_vinyl_09";
            else if (getConfig("Load_Garage2floor") == "grid")
                Garage2floorId = "floor_vinyl_10";
            else if (getConfig("Load_Garage2floor") == "splashes")
                Garage2floorId = "floor_vinyl_11";
            else if (getConfig("Load_Garage2floor") == "squares")
                Garage2floorId = "floor_vinyl_12";
            else if (getConfig("Load_Garage2floor") == "mosaic")
                Garage2floorId = "floor_vinyl_13";
            else if (getConfig("Load_Garage2floor") == "paintbrushcolor")
                Garage2floorId = "floor_vinyl_14";
            else if (getConfig("Load_Garage2floor") == "curvescolor")
                Garage2floorId = "floor_vinyl_15";
            else if (getConfig("Load_Garage2floor") == "marblebrown")
                Garage2floorId = "floor_vinyl_16";
            else if (getConfig("Load_Garage2floor") == "marbleblue")
                Garage2floorId = "floor_vinyl_17";
            else if (getConfig("Load_Garage2floor") == "marblebw")
                Garage2floorId = "floor_vinyl_18";
            else if (getConfig("Load_Garage2floor") == "maze")
                Garage2floorId = "floor_vinyl_19";
            else
                Garage2floorId = "none";
            if (Garage2floorId != "none"){
                SetIplProp(255233, Garage2floorId, true);
            }
            native.refreshInterior(255233);
            native.refreshInterior(INTID);
        }
    }
}