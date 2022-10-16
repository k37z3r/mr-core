import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, getInteriorByType, SetIplProp, get_posters, drawTv, CreateNamedRenderTargetForModel, RegisterPoi, _L, getConfig } from 'mr-functions';
let tvactive = false;
export let Nightclub = {
	ipl : ["ba_int_placement_ba", "ba_int_placement_ba_interior_0_dlc_int_01_ba_milo_", "xs_arena_interior_vip", "xs_arena_interior_mod_2", "xs_arena_interior_mod", "xs_arena_interior"],
	Enable : function(state, style, podiumstyle, name, speaker, security, turntables, turntablesstyle, lights, bar, booze, trophy, color, trophystyle, dryice, clutter, worklamps, truck, lightRigsOff, roofLightsOff, floorTradLights, chest, vaultAmmunations, vaultMeth, vaultFakeID, vaultWeed, vaultCoke, vaultCash, mesabarrier, mesaposter, missionrowbarrier, missionrowposter, strawberrybarrier, strawberryposter, vinewoodwestbarrier, vinewoodwestposter, cypressbarrier, cypressposter, delperrobarrier, delperroposter, airportbarrier, airportposter, elysianbarrier, elysianposter, vinewoodbarrier, vinewoodposter, vespuccibarrier, vespucciposter){
		if (state){
			EnableIpl(Nightclub.ipl, state);
			EnableIpl("ba_barriers_case0", mesabarrier);
			let key, key_a, key_b, key_c, key_d, key_e, key_f, key_g, key_h, key_i, key_j, nameid, styleid, speakerid, turntablesid, lightsid, colorid, trophystyleid, podiumstyleid;
			let mesaposters = get_posters(0, mesaposter);
			EnableIpl(mesaposters, true);
			EnableIpl("ba_barriers_case1", missionrowbarrier);
			let missionrowposters = get_posters(1, missionrowposter);
			EnableIpl(missionrowposters, true);
			EnableIpl("ba_barriers_case2", strawberrybarrier);
			let strawberryposters = get_posters(2, strawberryposter);
			EnableIpl(strawberryposters, true);
			EnableIpl("ba_barriers_case3", vinewoodwestbarrier);
			let vinewoodwestposters = get_posters(3, vinewoodwestposter);
			EnableIpl(vinewoodwestposters, true);
			EnableIpl("ba_barriers_case4", cypressbarrier);
			let cypressposters = get_posters(4, cypressposter);
			EnableIpl(cypressposters, true);
			EnableIpl("ba_barriers_case5", delperrobarrier);
			let delperroposters = get_posters(5, delperroposter);
			EnableIpl(delperroposters, true);
			EnableIpl("ba_barriers_case6", airportbarrier);
			let airportposters = get_posters(6, airportposter);
			EnableIpl(airportposters, true);
			EnableIpl("ba_barriers_case7", elysianbarrier);
			let elysianposters = get_posters(7, elysianposter);
			EnableIpl(elysianposters, true);
			EnableIpl("ba_barriers_case8", vinewoodbarrier);
			let vinewoodposters = get_posters(8, vinewoodposter);
			EnableIpl(vinewoodposters, true);
			EnableIpl("ba_barriers_case9", vespuccibarrier);
			let vespucciposters = get_posters(9, vespucciposter);
			EnableIpl(vespucciposters, true);
			if (name == "galaxy")
				nameid = "Int01_ba_clubname_01";
			else if (name == "studio")
				nameid = "Int01_ba_clubname_02";
			else if (name == "omega")
				nameid = "Int01_ba_clubname_03";
			else if (name == "technologie")
				nameid = "Int01_ba_clubname_04";
			else if (name == "gefangnis")
				nameid = "Int01_ba_clubname_05";
			else if (name == "maisonette")
				nameid = "Int01_ba_clubname_06";
			else if (name == "tony")
				nameid = "Int01_ba_clubname_07";
			else if (name == "palace")
				nameid = "Int01_ba_clubname_08";
			else
				nameid = "Int01_ba_clubname_09";
			SetIplProp(271617, nameid, true);
			if (style == "glam")
				styleid = "Int01_ba_Style03";
			else if (style == "edgy")
				styleid = "Int01_ba_Style02";
			else
				styleid = "Int01_ba_Style01";
			SetIplProp(271617, styleid, true);
			if (podiumstyle == "trad")
				podiumstyleid = "Int01_ba_Style01_podium";
			else if (podiumstyle == "glam")
				podiumstyleid = "Int01_ba_Style03_podium";
			else if (podiumstyle == "edgy")
				podiumstyleid = "Int01_ba_Style02_podium";
			else
				podiumstyleid = "none";
			if (podiumstyleid != "none"){
				SetIplProp(271617, podiumstyleid, true);
			}
			if (speaker == "upgrade")
				speakerid = ["Int01_ba_equipment_setup", "Int01_ba_equipment_upgrade"];
			else if (speaker == "basic")
				speakerid = ["Int01_ba_equipment_setup"];
			else
				speakerid = ["none"];
			if (speakerid[0] == "Int01_ba_equipment_setup"){
				for (key_j in speakerid){
					SetIplProp(271617, speakerid[key_j], true);
				}
			}
			if (security){
				SetIplProp(271617, "Int01_ba_security_upgrade", true);
			}
			if (turntables){
				if (turntablesstyle == "style2")
					turntablesid = "Int01_ba_dj02";
				else if (turntablesstyle == "style3")
					turntablesid = "Int01_ba_dj03";
				else if (turntablesstyle == "style4")
					turntablesid = "Int01_ba_dj04";
				else
					turntablesid = "Int01_ba_dj01";
				SetIplProp(271617, turntablesid, true);
			}
			if (lights == "Droplets_green")
				lightsid = "DJ_02_Lights_01";
			else if (lights == "Droplets_white")
				lightsid = "DJ_03_Lights_01";
			else if (lights == "Droplets_purple")
				lightsid = "DJ_04_Lights_01";
			else if (lights == "Neons_yellow")
				lightsid = "DJ_01_Lights_02";
			else if (lights == "Neons_white")
				lightsid = "DJ_02_Lights_02";
			else if (lights == "Neons_purple")
				lightsid = "DJ_03_Lights_02";
			else if (lights == "Neons_cyan")
				lightsid = "DJ_04_Lights_02";
			else if (lights == "Bands_yellow")
				lightsid = "DJ_01_Lights_03";
			else if (lights == "Bands_green")
				lightsid = "DJ_02_Lights_03";
			else if (lights == "Bands_white")
				lightsid = "DJ_03_Lights_03";
			else if (lights == "Bands_cyan")
				lightsid = "DJ_04_Lights_03";
			else if (lights == "Laser_yellow")
				lightsid = "DJ_01_Lights_04";
			else if (lights == "Laser_green")
				lightsid = "DJ_02_Lights_04";
			else if (lights == "Laser_white")
				lightsid = "DJ_03_Lights_04";
			else if (lights == "Laser_purple")
				lightsid = "DJ_04_Lights_04";
			else
				lightsid = "DJ_01_Lights_01";
			SetIplProp(271617, lightsid, true);
			if (bar){
				SetIplProp(271617, "Int01_ba_bar_content", true);
			}
			if (booze){
				SetIplProp(271617, "Int01_ba_booze_01", true);
				SetIplProp(271617, "Int01_ba_booze_02", true);
				SetIplProp(271617, "Int01_ba_booze_03", true);
			}
			if (trophy){
				if (trophystyle == "battler")
					trophystyleid = "Int01_ba_trophy02";
				else if (trophystyle == "dancer")
					trophystyleid = "Int01_ba_trophy03";
				else
					trophystyleid = "Int01_ba_trophy01";
				SetIplProp(271617, trophystyleid, true)
				if (color == "silver")
					colorid = 1;
				else if (color == "gold")
					colorid = 2;
				else
					colorid = 0;
				native.setInteriorEntitySetColor(271617, trophystyleid, colorid);
			}
			if (dryice){
				native.requestNamedPtfxAsset("scr_ba_club");
				if (!native.hasNamedPtfxAssetLoaded("scr_ba_club"))
					native.requestNamedPtfxAsset("scr_ba_club");
				if (native.hasNamedPtfxAssetLoaded("scr_ba_club")){
					native.useParticleFxAsset("scr_ba_club");
					native.startParticleFxLoopedAtCoord("scr_ba_club_smoke_machine", -1602.932, -3019.1, -79.99, 0.0, -10.0, 66.0, 5.0, false, false, false, true);
					native.useParticleFxAsset("scr_ba_club");
					native.startParticleFxLoopedAtCoord("scr_ba_club_smoke_machine", -1593.238, -3017.05, -79.99, 0.0, -10.0, 110.0, 5.0, false, false, false, true);
					native.useParticleFxAsset("scr_ba_club");
					native.startParticleFxLoopedAtCoord("scr_ba_club_smoke_machine", -1597.134, -3008.2, -79.99, 0.0, -10.0, -122.53, 5.0, false, false, false, true);
					native.useParticleFxAsset("scr_ba_club");
					native.startParticleFxLoopedAtCoord("scr_ba_club_smoke_machine", -1589.966, -3008.518, -79.99, 0.0, -10.0, -166.97, 5.0, false, false, false, true);
				}
			}
			else{
				native.RemoveParticleFxInRange(-1602.932, -3019.1, -79.99, 1.0);
				native.RemoveParticleFxInRange(-1593.238, -3017.05, -79.99, 1.0);
				native.RemoveParticleFxInRange(-1597.134, -3008.2, -79.99, 1.0);
				native.RemoveParticleFxInRange( -1589.966, -3008.518, -79.99, 1.0);
			}
			SetIplProp(271617, "Int01_ba_dry_ice", dryice);
			SetIplProp(271617, "Int01_ba_Clutter", clutter);
			SetIplProp(271617, "Int01_ba_Worklamps", worklamps);
			SetIplProp(271617, "Int01_ba_deliverytruck", truck);
			SetIplProp(271617, "light_rigs_off", lightRigsOff);
			SetIplProp(271617, "Int01_ba_lightgrid_01", roofLightsOff);
			SetIplProp(271617, "Int01_ba_trad_lights", floorTradLights);
			SetIplProp(271617, "Int01_ba_trophy04", chest);
			SetIplProp(271617, "Int01_ba_trophy05", vaultAmmunations);
			SetIplProp(271617, "Int01_ba_trophy07", vaultMeth);
			SetIplProp(271617, "Int01_ba_trophy08", vaultFakeID);
			SetIplProp(271617, "Int01_ba_trophy09", vaultWeed);
			SetIplProp(271617, "Int01_ba_trophy10", vaultCoke);
			SetIplProp(271617, "Int01_ba_trophy11", vaultCash);
			SetIplProp(217617, "int01_ba_lights_screen", false);
			SetIplProp(217617, "Int02_ba_floor01", false);
			SetIplProp(217617, "Int02_ba_floor02", false);
			SetIplProp(217617, "Int02_ba_floor03", false);
			SetIplProp(217617, "Int02_ba_floor04", false);
			SetIplProp(217617, "Int02_ba_floor05", true);
			native.refreshInterior(271617);
		}
	}
}
if (getConfig("Load_Nightclub")){
	alt.everyTick(() => {
		if (drawTv()) {
			let model = native.getHashKey("ba_prop_club_screens_01");
			let handle = CreateNamedRenderTargetForModel("Club_Projector", model);
			native.setTvAudioFrontend(false);
			native.setTextRenderId(handle);
			native.setScriptGfxDrawBehindPausemenu(true);
			native.drawTvChannel(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
			native.setTextRenderId(native.getDefaultScriptRendertargetRenderId());
			native.setScriptGfxDrawBehindPausemenu(false);
		}
		else
			drawTv();
		const distance_entry = alt.Player.local.pos.distanceTo(new alt.Vector3(988.06, 80.52, 79.97));
		const distance_exit = alt.Player.local.pos.distanceTo(new alt.Vector3(-1569.4, -3017.1, -73.41));
		RegisterPoi("mr_iplloader_nightclub_entry", 988.06, 80.52, 80.97, 1.5, _L("enter_nightclub"));
		RegisterPoi("mr_iplloader_nightclub_leave", -1569.4, -3017.1, -74.41, 1.5, _L("leave_nightclub"));
		if (distance_entry < 1.5 && native.isControlJustPressed(1, 38)){
			alt.emitServer('mr-iplloader:entry', {x:-1569.4, y:-3017.1, z:-75, w:0});
		}
		if (distance_exit < 1.5 && native.isControlJustPressed(1, 38)){
			alt.emitServer('mr-iplloader:entry', {x:988.06, y:80.52, z:80.5, w:0});
		}
	});
}