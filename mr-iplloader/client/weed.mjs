import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp } from 'mr-functions';

export let BikerWeedFarm = {
	ipl : ["bkr_biker_interior_placement_interior_3_biker_dlc_int_ware02_milo"],
	Enable : function(state, Style, Security, Plant1Stage, Plant1Light, Plant2Stage, Plant2Light, Plant3Stage, Plant3Light, Plant4Stage, Plant4Light, Plant5Stage, Plant5Light, Plant6Stage, Plant6Light, Plant7Stage, Plant7Light, Plant8Stage, Plant8Light, Plant9Stage, Plant9Light, Production, Fans, Drying, Chairs){
		if (state){
			let StyleId, SecurityId, Plant1StageId, Plant1LightId, Plant2StageId, Plant2LightId, Plant3StageId, Plant3LightId, Plant4StageId, Plant4LightId, Plant5StageId, Plant5LightId, Plant6StageId, Plant6LightId, Plant7StageId, Plant7LightId, Plant8StageId, Plant8LightId, Plant9StageId, Plant9LightId;
			EnableIpl(BikerWeedFarm.ipl, state);
			if (Style == "upgrade")
				StyleId = "weed_upgrade_equip";
			else
				StyleId = "weed_standard_equip";
			SetIplProp(247297, StyleId, true);
			if (Security == "upgrade")
				SecurityId = "weed_security_upgrade";
			else
				SecurityId = "weed_low_security";
			SetIplProp(247297, SecurityId, true);
			if (Plant1Stage == "full")
				Plant1StageId = "weed_growtha_stage3";
			else if (Plant1Stage == "medium")
				Plant1StageId = "weed_growtha_stage2";
			else
				Plant1StageId = "weed_growtha_stage1";
			SetIplProp(247297, Plant1StageId, true);
			if (Plant1Light == "upgrade")
				Plant1LightId = "light_growtha_stage23_upgrade";
			else
				Plant1LightId = "light_growtha_stage23_standard";
			SetIplProp(247297, Plant1LightId, true);
			if (Plant2Stage == "full")
				Plant2StageId = "weed_growthb_stage3";
			else if (Plant2Stage == "medium")
				Plant2StageId = "weed_growthb_stage2";
			else
				Plant2StageId = "weed_growthb_stage1";
			SetIplProp(247297, Plant2StageId, true);
			if (Plant2Light == "upgrade")
				Plant2LightId = "light_growthb_stage23_upgrade";
			else
				Plant2LightId = "light_growthb_stage23_standard";
			SetIplProp(247297, Plant2LightId, true);
			if (Plant3Stage == "full")
				Plant3StageId = "weed_growthc_stage3";
			else if (Plant3Stage == "medium")
				Plant3StageId = "weed_growthc_stage2";
			else
				Plant3StageId = "weed_growthc_stage1";
			SetIplProp(247297, Plant3StageId, true);
			if (Plant3Light == "upgrade")
				Plant3LightId = "light_growthc_stage23_upgrade";
			else
				Plant3LightId = "light_growthc_stage23_standard";
			SetIplProp(247297, Plant3LightId, true);
			if (Plant4Stage == "full")
				Plant4StageId = "weed_growthd_stage3";
			else if (Plant4Stage == "medium")
				Plant4StageId = "weed_growthd_stage2";
			else
				Plant4StageId = "weed_growthd_stage1";
			SetIplProp(247297, Plant4StageId, true);
			if (Plant4Light == "upgrade")
				Plant4LightId = "light_growthd_stage23_upgrade";
			else
				Plant4LightId = "light_growthd_stage23_standard";
			SetIplProp(247297, Plant4LightId, true);
			if (Plant5Stage == "full")
				Plant5StageId = "weed_growthe_stage3";
			else if (Plant5Stage == "medium")
				Plant5StageId = "weed_growthe_stage2";
			else
				Plant5StageId = "weed_growthe_stage1";
			SetIplProp(247297, Plant5StageId, true);
			if (Plant5Light == "upgrade")
				Plant5LightId = "light_growthe_stage23_upgrade";
			else
				Plant5LightId = "light_growthe_stage23_standard";
			SetIplProp(247297, Plant5LightId, true);
			if (Plant6Stage == "full")
				Plant6StageId = "weed_growthf_stage3";
			else if (Plant6Stage == "medium")
				Plant6StageId = "weed_growthf_stage2";
			else
				Plant6StageId = "weed_growthf_stage1";
			SetIplProp(247297, Plant6StageId, true);
			if (Plant6Light == "upgrade")
				Plant6LightId = "light_growthf_stage23_upgrade";
			else
				Plant6LightId = "light_growthf_stage23_standard";
			SetIplProp(247297, Plant6LightId, true);
			if (Plant7Stage == "full")
				Plant7StageId = "weed_growthg_stage3";
			else if (Plant7Stage == "medium")
				Plant7StageId = "weed_growthg_stage2";
			else
				Plant7StageId = "weed_growthg_stage1";
			SetIplProp(247297, Plant7StageId, true);
			if (Plant7Light == "upgrade")
				Plant7LightId = "light_growthg_stage23_upgrade";
			else
				Plant7LightId = "light_growthg_stage23_standard";
			SetIplProp(247297, Plant7LightId, true);
			if (Plant8Stage == "full")
				Plant8StageId = "weed_growthh_stage3";
			else if (Plant8Stage == "medium")
				Plant8StageId = "weed_growthh_stage2";
			else
				Plant8StageId = "weed_growthh_stage1";
			SetIplProp(247297, Plant8StageId, true);
			if (Plant8Light == "upgrade")
				Plant8LightId = "light_growthh_stage23_upgrade";
			else
				Plant8LightId = "light_growthh_stage23_standard";
			SetIplProp(247297, Plant8LightId, true);
			if (Plant9Stage == "full")
				Plant9StageId = "weed_growthi_stage3";
			else if (Plant9Stage == "medium")
				Plant9StageId = "weed_growthi_stage2";
			else
				Plant9StageId = "weed_growthi_stage1";
			SetIplProp(247297, Plant9StageId, true);
			if (Plant9Light == "upgrade")
				Plant9LightId = "light_growthi_stage23_upgrade";
			else
				Plant9LightId = "light_growthi_stage23_standard";
			SetIplProp(247297, Plant9LightId, true);
			
			SetIplProp(247297, "weed_production", Production);
			SetIplProp(247297, "weed_set_up", Fans);
			SetIplProp(247297, "weed_drying", Drying);
			SetIplProp(247297, "weed_chairs", Chairs);
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