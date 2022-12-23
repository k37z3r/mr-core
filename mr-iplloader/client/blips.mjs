import { setBlip, getConfig } from 'mr-functions';
export let Blips = {
    Enable : function(state){
        if (state){
            if (getConfig("Load_HighEndHouseBlips")){
                let HighEndPentHouses = [
                    [-169.286, 486.4938, 137.4436],
                    [340.9412, 437.1798, 149.3925],
                    [373.023, 416.105, 145.7006],
                    [-676.127, 588.612, 145.1698],
                    [-763.107, 615.906, 144.1401],
                    [-857.798, 682.563, 152.6529],
                    [120.5, 549.952, 184.097],
                    [-1288, 440.748, 97.69459]
                ], key;
                for (key in HighEndPentHouses){
                    setBlip(HighEndPentHouses[key][0], HighEndPentHouses[key][1], HighEndPentHouses[key][2], getConfig("Load_HighEndHouseBlips_Blip"), getConfig("Load_HighEndHouseBlips_Scale"), getConfig("Load_HighEndHouseBlips_Color"), getConfig("Load_HighEndHouseBlips_SecondColor"), getConfig("Load_HighEndHouseBlips_SecondRolor_RGB"), getConfig("Load_HighEndHouseBlips_Name"));
                }
            }
            if (getConfig("Load_MidEndHouseBlips")){
                setBlip(347.2686, -999.2955, -99.19622, getConfig("Load_MidEndHouseBlips_Blip"), getConfig("Load_MidEndHouseBlips_Scale"), getConfig("Load_MidEndHouseBlips_Color"), getConfig("Load_MidEndHouseBlips_SecondColor"), getConfig("Load_MidEndHouseBlips_SecondRolor_RGB"), getConfig("Load_MidEndHouseBlips_Name"));
            }
            if (getConfig("Load_LowEndHouseBlips")){
                setBlip(261.4586, -998.8196, -99.00863, getConfig("Load_LowEndHouseBlips_Blip"), getConfig("Load_LowEndHouseBlips_Scale"), getConfig("Load_LowEndHouseBlips_Color"), getConfig("Load_LowEndHouseBlips_SecondColor"), getConfig("Load_LowEndHouseBlips_SecondRolor_RGB"), getConfig("Load_LowEndHouseBlips_Name"));
            }
            if (getConfig("Load_HighEndApartmentBlips")){
                let HighEndApartments = [
                    [-35.31277, -580.4199, 88.71221],
                    [-1477.14, -538.7499, 55.5264],
                ], key_a;
                for (key_a in HighEndApartments){
                    setBlip(HighEndApartments[key_a][0], HighEndApartments[key_a][1], HighEndApartments[key_a][2], getConfig("Load_HighEndApartmentBlips_Blip"), getConfig("Load_HighEndApartmentBlips_Scale"), getConfig("Load_HighEndApartmentBlips_Color"), getConfig("Load_HighEndApartmentBlips_SecondColor"), getConfig("Load_HighEndApartmentBlips_SecondRolor_RGB"), getConfig("Load_HighEndApartmentBlips_Name"));
                }
            }
            if (getConfig("Load_HighLifeApartmentBlips")){
                let HighLifeApartments = [
                    [-1462.281, -539.6276, 72.44434],
                    [-914.9026, -374.8731, 112.6748],
                    [-609.5669, 51.28212, 96.60023],
                    [-778.5061, 331.316, 210.3972],
                    [-22.61353, -590.1432, 78.43091],
                    [-609.5669, 51.28212, -183.9808]
                ], key_b;
                for (key_b in HighLifeApartments){
                    setBlip(HighLifeApartments[key_b][0], HighLifeApartments[key_b][1], HighLifeApartments[key_b][2], getConfig("Load_HighLifeApartmentBlips_Blip"), getConfig("Load_HighLifeApartmentBlips_Scale"), getConfig("Load_HighLifeApartmentBlips_Color"), getConfig("Load_HighLifeApartmentBlips_SecondColor"), getConfig("Load_HighLifeApartmentBlips_SecondRolor_RGB"), getConfig("Load_HighLifeApartmentBlips_Name"));
                }
            }
            if (getConfig("Load_ExecutiveApartmentBlips")){
                let ExecutiveApartments = [
                    [-787.7805, 334.92320, 215.8384],
                    [-773.2258, 322.8252, 194.8862],
                    [-787.7805, 334.9232, 186.1134]
                ], key_c;
                for (key_c in ExecutiveApartments){
                    setBlip(ExecutiveApartments[key_c][0], ExecutiveApartments[key_c][1], ExecutiveApartments[key_c][2], getConfig("Load_ExecutiveApartmentBlips_Blip"), getConfig("Load_ExecutiveApartmentBlips_Scale"), getConfig("Load_ExecutiveApartmentBlips_Color"), getConfig("Load_ExecutiveApartmentBlips_SecondColor"), getConfig("Load_ExecutiveApartmentBlips_SecondRolor_RGB"), getConfig("Load_ExecutiveApartmentBlips_Name"));
                }
            }
            if (getConfig("Load_NightclubBlips_Blips")){
                setBlip(988.06, 80.52, 80.97, getConfig("Load_NightclubBlips_Blip"), getConfig("Load_NightclubBlips_Scale"), getConfig("Load_NightclubBlips_Color"), getConfig("Load_NightclubBlips_SecondColor"), getConfig("Load_NightclubBlips_SecondRolor_RGB"), getConfig("Load_NightclubBlips_Name"));
            }
            
        }
    }
}