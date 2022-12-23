import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let BikerWeedFarm = {
    ipl : ["bkr_biker_interior_placement_interior_3_biker_dlc_int_ware02_milo"],
    Enable : function(state){
        if (state){
            let StyleId, SecurityId, Plant1StageId, Plant1LightId, Plant2StageId, Plant2LightId, Plant3StageId, Plant3LightId, Plant4StageId, Plant4LightId, Plant5StageId, Plant5LightId, Plant6StageId, Plant6LightId, Plant7StageId, Plant7LightId, Plant8StageId, Plant8LightId, Plant9StageId, Plant9LightId;
            EnableIpl(BikerWeedFarm.ipl, state);
            if (getConfig("Load_BikerWeedFarmStyle") == "upgrade")
                StyleId = "weed_upgrade_equip";
            else
                StyleId = "weed_standard_equip";
            SetIplProp(247297, StyleId, true);
            if (getConfig("Load_BikerWeedFarmSecurity") == "upgrade")
                SecurityId = "weed_security_upgrade";
            else
                SecurityId = "weed_low_security";
            SetIplProp(247297, SecurityId, true);
            if (getConfig("Load_BikerWeedFarmPlant1Stage") == "full")
                Plant1StageId = "weed_growtha_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant1Stage") == "medium")
                Plant1StageId = "weed_growtha_stage2";
            else
                Plant1StageId = "weed_growtha_stage1";
            SetIplProp(247297, Plant1StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant1Light") == "upgrade")
                Plant1LightId = "light_growtha_stage23_upgrade";
            else
                Plant1LightId = "light_growtha_stage23_standard";
            SetIplProp(247297, Plant1LightId, true);
            if (getConfig("Load_BikerWeedFarmPlant2Stage") == "full")
                Plant2StageId = "weed_growthb_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant2Stage") == "medium")
                Plant2StageId = "weed_growthb_stage2";
            else
                Plant2StageId = "weed_growthb_stage1";
            SetIplProp(247297, Plant2StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant2Light") == "upgrade")
                Plant2LightId = "light_growthb_stage23_upgrade";
            else
                Plant2LightId = "light_growthb_stage23_standard";
            SetIplProp(247297, Plant2LightId, true);
            if (getConfig("Load_BikerWeedFarmPlant3Stage") == "full")
                Plant3StageId = "weed_growthc_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant3Stage") == "medium")
                Plant3StageId = "weed_growthc_stage2";
            else
                Plant3StageId = "weed_growthc_stage1";
            SetIplProp(247297, Plant3StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant3Light") == "upgrade")
                Plant3LightId = "light_growthc_stage23_upgrade";
            else
                Plant3LightId = "light_growthc_stage23_standard";
            SetIplProp(247297, Plant3LightId, true);
            if (getConfig("Load_BikerWeedFarmPlant4Stage") == "full")
                Plant4StageId = "weed_growthd_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant4Stage") == "medium")
                Plant4StageId = "weed_growthd_stage2";
            else
                Plant4StageId = "weed_growthd_stage1";
            SetIplProp(247297, Plant4StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant4Light") == "upgrade")
                Plant4LightId = "light_growthd_stage23_upgrade";
            else
                Plant4LightId = "light_growthd_stage23_standard";
            SetIplProp(247297, Plant4LightId, true);
            if (getConfig("Load_BikerWeedFarmPlant5Stage") == "full")
                Plant5StageId = "weed_growthe_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant5Stage") == "medium")
                Plant5StageId = "weed_growthe_stage2";
            else
                Plant5StageId = "weed_growthe_stage1";
            SetIplProp(247297, Plant5StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant5Light") == "upgrade")
                Plant5LightId = "light_growthe_stage23_upgrade";
            else
                Plant5LightId = "light_growthe_stage23_standard";
            SetIplProp(247297, Plant5LightId, true);
            if (getConfig("Load_BikerWeedFarmPlant6Stage") == "full")
                Plant6StageId = "weed_growthf_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant6Stage") == "medium")
                Plant6StageId = "weed_growthf_stage2";
            else
                Plant6StageId = "weed_growthf_stage1";
            SetIplProp(247297, Plant6StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant6Light") == "upgrade")
                Plant6LightId = "light_growthf_stage23_upgrade";
            else
                Plant6LightId = "light_growthf_stage23_standard";
            SetIplProp(247297, Plant6LightId, true);
            if (getConfig("Load_BikerWeedFarmPlant7Stage") == "full")
                Plant7StageId = "weed_growthg_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant7Stage") == "medium")
                Plant7StageId = "weed_growthg_stage2";
            else
                Plant7StageId = "weed_growthg_stage1";
            SetIplProp(247297, Plant7StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant7Light") == "upgrade")
                Plant7LightId = "light_growthg_stage23_upgrade";
            else
                Plant7LightId = "light_growthg_stage23_standard";
            SetIplProp(247297, Plant7LightId, true);
            if (getConfig("Load_BikerWeedFarmPlant8Stage") == "full")
                Plant8StageId = "weed_growthh_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant8Stage") == "medium")
                Plant8StageId = "weed_growthh_stage2";
            else
                Plant8StageId = "weed_growthh_stage1";
            SetIplProp(247297, Plant8StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant8Light") == "upgrade")
                Plant8LightId = "light_growthh_stage23_upgrade";
            else
                Plant8LightId = "light_growthh_stage23_standard";
            SetIplProp(247297, Plant8LightId, true);
            if (getConfig("Load_BikerWeedFarmPlant9Stage") == "full")
                Plant9StageId = "weed_growthi_stage3";
            else if (getConfig("Load_BikerWeedFarmPlant9Stage") == "medium")
                Plant9StageId = "weed_growthi_stage2";
            else
                Plant9StageId = "weed_growthi_stage1";
            SetIplProp(247297, Plant9StageId, true);
            if (getConfig("Load_BikerWeedFarmPlant9Light") == "upgrade")
                Plant9LightId = "light_growthi_stage23_upgrade";
            else
                Plant9LightId = "light_growthi_stage23_standard";
            SetIplProp(247297, Plant9LightId, true);
            
            SetIplProp(247297, "weed_production", getConfig("Load_BikerWeedFarmProduction"));
            SetIplProp(247297, "weed_set_up", getConfig("Load_BikerWeedFarmFans"));
            SetIplProp(247297, "weed_drying", getConfig("Load_BikerWeedFarmDrying"));
            SetIplProp(247297, "weed_chairs", getConfig("Load_BikerWeedFarmChairs"));
            SetIplProp(247297, "weed_hosea", true);
            SetIplProp(247297, "weed_hoseb", true);
            SetIplProp(247297, "weed_hosec", true);
            SetIplProp(247297, "weed_hosed", true);
            SetIplProp(247297, "weed_hosee", true);
            SetIplProp(247297, "weed_hosef", true);
            SetIplProp(247297, "weed_hoseg", true);
            SetIplProp(247297, "weed_hoseh", true);
            SetIplProp(247297, "weed_hosei", true);
            native.refreshInterior(247297);            
        }
    }
}