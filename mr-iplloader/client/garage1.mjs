import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let Garage1 = {
    ipl : [],
    Enable : function(state){
        let IPL, INTID, StyleId, Garage1LevelNumsId, Garage1LightningId, Garage1floorId;
        if (state){
            if (getConfig("Load_Garage1Part") == "garage1"){
                IPL = "imp_dt1_02_cargarage_a";
                INTID = 253441;
            }
            else if (getConfig("Load_Garage1Part") == "garage2"){
                IPL = "imp_dt1_02_cargarage_b";
                INTID = 253697;
            }
            else{
                IPL = "imp_dt1_02_cargarage_c";
                INTID = 253953;
            }
            EnableIpl(IPL, state);
            if (getConfig("Load_Garage1Style") == "set1")
                StyleId = "garage_decor_01";
            else if (getConfig("Load_Garage1Style") == "set2")
                StyleId = "garage_decor_02";
            else if (getConfig("Load_Garage1Style") == "set3")
                StyleId = "garage_decor_03";
            else
                StyleId = "garage_decor_04";
            SetIplProp(INTID, StyleId, true);
            SetIplProp(254209, "imp_dt1_02_modgarage", true);
            if (getConfig("Load_Garage1LevelNums") == "set1")
                Garage1LevelNumsId = "numbering_style01_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set2")
                Garage1LevelNumsId = "numbering_style02_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set3")
                Garage1LevelNumsId = "numbering_style03_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set4")
                Garage1LevelNumsId = "numbering_style04_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set5")
                Garage1LevelNumsId = "numbering_style05_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set6")
                Garage1LevelNumsId = "numbering_style06_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set7")
                Garage1LevelNumsId = "numbering_style07_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set8")
                Garage1LevelNumsId = "numbering_style08_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set9")
                Garage1LevelNumsId = "numbering_style09_n1";
            else if (getConfig("Load_Garage1LevelNums") == "set10")
                Garage1LevelNumsId = "numbering_style01_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set11")
                Garage1LevelNumsId = "numbering_style02_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set12")
                Garage1LevelNumsId = "numbering_style03_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set13")
                Garage1LevelNumsId = "numbering_style04_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set14")
                Garage1LevelNumsId = "numbering_style05_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set15")
                Garage1LevelNumsId = "numbering_style06_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set16")
                Garage1LevelNumsId = "numbering_style07_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set17")
                Garage1LevelNumsId = "numbering_style08_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set18")
                Garage1LevelNumsId = "numbering_style09_n2";
            else if (getConfig("Load_Garage1LevelNums") == "set19")
                Garage1LevelNumsId = "numbering_style01_n3";
            else if (getConfig("Load_Garage1LevelNums") == "set20")
                Garage1LevelNumsId = "numbering_style02_n3";
            else if (getConfig("Load_Garage1LevelNums") == "set21")
                Garage1LevelNumsId = "numbering_style03_n3";
            else if (getConfig("Load_Garage1LevelNums") == "set22")
                Garage1LevelNumsId = "numbering_style04_n3";
            else if (getConfig("Load_Garage1LevelNums") == "set23")
                Garage1LevelNumsId = "numbering_style05_n3";
            else if (getConfig("Load_Garage1LevelNums") == "set24")
                Garage1LevelNumsId = "numbering_style06_n3";
            else if (getConfig("Load_Garage1LevelNums") == "set25")
                Garage1LevelNumsId = "numbering_style07_n3";
            else if (getConfig("Load_Garage1LevelNums") == "set26")
                Garage1LevelNumsId = "numbering_style08_n3";
            else if (getConfig("Load_Garage1LevelNums") == "set27")
                Garage1LevelNumsId = "numbering_style09_n3";
            else
                Garage1LevelNumsId = "none";
            if (Garage1LevelNumsId != "none"){
                SetIplProp(INTID, Garage1LevelNumsId, true);
            }
            if (getConfig("Load_Garage1Lightning") == "set1")
                Garage1LightningId = "lighting_option01";
            else if (getConfig("Load_Garage1Lightning") == "set2")
                Garage1LightningId = "lighting_option02";
            else if (getConfig("Load_Garage1Lightning") == "set3")
                Garage1LightningId = "lighting_option03";
            else if (getConfig("Load_Garage1Lightning") == "set4")
                Garage1LightningId = "lighting_option04";
            else if (getConfig("Load_Garage1Lightning") == "set5")
                Garage1LightningId = "lighting_option05";
            else if (getConfig("Load_Garage1Lightning") == "set6")
                Garage1LightningId = "lighting_option06";
            else if (getConfig("Load_Garage1Lightning") == "set7")
                Garage1LightningId = "lighting_option07";
            else if (getConfig("Load_Garage1Lightning") == "set8")
                Garage1LightningId = "lighting_option08";
            else if (getConfig("Load_Garage1Lightning") == "set9")
                Garage1LightningId = "lighting_option09";
            else
                Garage1LightningId = "none";
            if (Garage1LightningId != "none"){
                SetIplProp(INTID, Garage1LightningId, true);
            }
            if (getConfig("Load_Garage1floor") == "city")
                Garage1floorId = "floor_vinyl_01";
            else if (getConfig("Load_Garage1floor") == "seabed")
                Garage1floorId = "floor_vinyl_02";
            else if (getConfig("Load_Garage1floor") == "aliens")
                Garage1floorId = "floor_vinyl_03";
            else if (getConfig("Load_Garage1floor") == "clouds")
                Garage1floorId = "floor_vinyl_04";
            else if (getConfig("Load_Garage1floor") == "money")
                Garage1floorId = "floor_vinyl_05";
            else if (getConfig("Load_Garage1floor") == "zebra")
                Garage1floorId = "floor_vinyl_06";
            else if (getConfig("Load_Garage1floor") == "blackwhite")
                Garage1floorId = "floor_vinyl_07";
            else if (getConfig("Load_Garage1floor") == "barcode")
                Garage1floorId = "floor_vinyl_08";
            else if (getConfig("Load_Garage1floor") == "paintbrushbw")
                Garage1floorId = "floor_vinyl_09";
            else if (getConfig("Load_Garage1floor") == "grid")
                Garage1floorId = "floor_vinyl_10";
            else if (getConfig("Load_Garage1floor") == "splashes")
                Garage1floorId = "floor_vinyl_11";
            else if (getConfig("Load_Garage1floor") == "squares")
                Garage1floorId = "floor_vinyl_12";
            else if (getConfig("Load_Garage1floor") == "mosaic")
                Garage1floorId = "floor_vinyl_13";
            else if (getConfig("Load_Garage1floor") == "paintbrushcolor")
                Garage1floorId = "floor_vinyl_14";
            else if (getConfig("Load_Garage1floor") == "curvescolor")
                Garage1floorId = "floor_vinyl_15";
            else if (getConfig("Load_Garage1floor") == "marblebrown")
                Garage1floorId = "floor_vinyl_16";
            else if (getConfig("Load_Garage1floor") == "marbleblue")
                Garage1floorId = "floor_vinyl_17";
            else if (getConfig("Load_Garage1floor") == "marblebw")
                Garage1floorId = "floor_vinyl_18";
            else if (getConfig("Load_Garage1floor") == "maze")
                Garage1floorId = "floor_vinyl_19";
            else
                Garage1floorId = "none";
            if (Garage1floorId != "none"){
                SetIplProp(254209, Garage1floorId, true);
            }
            native.refreshInterior(254209);
            native.refreshInterior(INTID);
        }
    }
}