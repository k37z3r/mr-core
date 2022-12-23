import * as native from 'natives';
import * as alt from 'alt';
import { EnableIpl, SetIplProp, get_posters, drawTv, CreateNamedRenderTargetForModel, RegisterPoi, _L, getConfig, SetPropColor } from 'mr-functions';
export let Nightclub = {
    ipl : ["ba_int_placement_ba", "ba_int_placement_ba_interior_0_dlc_int_01_ba_milo_", "xs_arena_interior_vip", "xs_arena_interior_mod_2", "xs_arena_interior_mod", "xs_arena_interior"],
    Enable : function(state){
        if (state){
            EnableIpl(Nightclub.ipl, state);
            EnableIpl("ba_barriers_case0", getConfig("Load_NightClubMesaBarrier"));
            let key, nameid, styleid, speakerid, turntablesid, lightsid, colorid, trophystyleid, podiumstyleid;
            let mesaposters = get_posters(0, getConfig("Load_NightClubMesaPosters"));
            EnableIpl(mesaposters, true);
            EnableIpl("ba_barriers_case1", getConfig("Load_NightClubMissionRowBarrier"));
            let missionrowposters = get_posters(1, getConfig("Load_NightClubMissionRowPosters"));
            EnableIpl(missionrowposters, true);
            EnableIpl("ba_barriers_case2", getConfig("Load_NightClubStrawBerryBarrier"));
            let strawberryposters = get_posters(2, getConfig("Load_NightClubStrawBerryPosters"));
            EnableIpl(strawberryposters, true);
            EnableIpl("ba_barriers_case3", getConfig("Load_NightClubVineWoodWestBarrier"));
            let vinewoodwestposters = get_posters(3, getConfig("Load_NightClubVineWoodWestPosters"));
            EnableIpl(vinewoodwestposters, true);
            EnableIpl("ba_barriers_case4", getConfig("Load_NightClubCypressBarrier"));
            let cypressposters = get_posters(4, getConfig("Load_NightClubCypressPosters"));
            EnableIpl(cypressposters, true);
            EnableIpl("ba_barriers_case5", getConfig("Load_NightClubDelPerroBarrier"));
            let delperroposters = get_posters(5, getConfig("Load_NightClubDelPerroPosters"));
            EnableIpl(delperroposters, true);
            EnableIpl("ba_barriers_case6", getConfig("Load_NightClubAirPortBarrier"));
            let airportposters = get_posters(6, getConfig("Load_NightClubAirPortPosters"));
            EnableIpl(airportposters, true);
            EnableIpl("ba_barriers_case7", getConfig("Load_NightClubElysianBarrier"));
            let elysianposters = get_posters(7, getConfig("Load_NightClubElysianPosters"));
            EnableIpl(elysianposters, true);
            EnableIpl("ba_barriers_case8", getConfig("Load_NightClubVineWoodBarrier"));
            let vinewoodposters = get_posters(8, getConfig("Load_NightClubVineWoodPosters"));
            EnableIpl(vinewoodposters, true);
            EnableIpl("ba_barriers_case9", getConfig("Load_NightClubVespucciBarrier"));
            let vespucciposters = get_posters(9, getConfig("Load_NightClubVespucciPosters"));
            EnableIpl(vespucciposters, true);
            if (getConfig("Load_NightclubName") == "galaxy")
                nameid = "Int01_ba_clubname_01";
            else if (getConfig("Load_NightclubName") == "studio")
                nameid = "Int01_ba_clubname_02";
            else if (getConfig("Load_NightclubName") == "omega")
                nameid = "Int01_ba_clubname_03";
            else if (getConfig("Load_NightclubName") == "technologie")
                nameid = "Int01_ba_clubname_04";
            else if (getConfig("Load_NightclubName") == "gefangnis")
                nameid = "Int01_ba_clubname_05";
            else if (getConfig("Load_NightclubName") == "maisonette")
                nameid = "Int01_ba_clubname_06";
            else if (getConfig("Load_NightclubName") == "tony")
                nameid = "Int01_ba_clubname_07";
            else if (getConfig("Load_NightclubName") == "palace")
                nameid = "Int01_ba_clubname_08";
            else
                nameid = "Int01_ba_clubname_09";
            SetIplProp(271617, nameid, true);
            if (getConfig("Load_NightclubStyle") == "glam")
                styleid = "Int01_ba_Style03";
            else if (getConfig("Load_NightclubStyle") == "edgy")
                styleid = "Int01_ba_Style02";
            else
                styleid = "Int01_ba_Style01";
            SetIplProp(271617, styleid, true);
            if (getConfig("Load_NightclubPodiumStyle") == "trad")
                podiumstyleid = "Int01_ba_Style01_podium";
            else if (getConfig("Load_NightclubPodiumStyle") == "glam")
                podiumstyleid = "Int01_ba_Style03_podium";
            else if (getConfig("Load_NightclubPodiumStyle") == "edgy")
                podiumstyleid = "Int01_ba_Style02_podium";
            else
                podiumstyleid = "none";
            if (podiumstyleid != "none"){
                SetIplProp(271617, podiumstyleid, true);
            }
            if (getConfig("Load_NightclubSpeaker") == "upgrade")
                speakerid = ["Int01_ba_equipment_setup", "Int01_ba_equipment_upgrade"];
            else if (getConfig("Load_NightclubSpeaker") == "basic")
                speakerid = ["Int01_ba_equipment_setup"];
            else
                speakerid = ["none"];
            if (speakerid[0] == "Int01_ba_equipment_setup"){
                for (key in speakerid){
                    SetIplProp(271617, speakerid[key], true);
                }
            }
            if (getConfig("Load_NightclubSecurity")){
                SetIplProp(271617, "Int01_ba_security_upgrade", true);
            }
            if (getConfig("Load_NightclubTurnTables")){
                if (getConfig("Load_NightclubTurnTablesStyle") == "style2")
                    turntablesid = "Int01_ba_dj02";
                else if (getConfig("Load_NightclubTurnTablesStyle") == "style3")
                    turntablesid = "Int01_ba_dj03";
                else if (getConfig("Load_NightclubTurnTablesStyle") == "style4")
                    turntablesid = "Int01_ba_dj04";
                else
                    turntablesid = "Int01_ba_dj01";
                SetIplProp(271617, turntablesid, true);
            }
            if (getConfig("Load_NightclubLights") == "Droplets_green")
                lightsid = "DJ_02_Lights_01";
            else if (getConfig("Load_NightclubLights") == "Droplets_white")
                lightsid = "DJ_03_Lights_01";
            else if (getConfig("Load_NightclubLights") == "Droplets_purple")
                lightsid = "DJ_04_Lights_01";
            else if (getConfig("Load_NightclubLights") == "Neons_yellow")
                lightsid = "DJ_01_Lights_02";
            else if (getConfig("Load_NightclubLights") == "Neons_white")
                lightsid = "DJ_02_Lights_02";
            else if (getConfig("Load_NightclubLights") == "Neons_purple")
                lightsid = "DJ_03_Lights_02";
            else if (getConfig("Load_NightclubLights") == "Neons_cyan")
                lightsid = "DJ_04_Lights_02";
            else if (getConfig("Load_NightclubLights") == "Bands_yellow")
                lightsid = "DJ_01_Lights_03";
            else if (getConfig("Load_NightclubLights") == "Bands_green")
                lightsid = "DJ_02_Lights_03";
            else if (getConfig("Load_NightclubLights") == "Bands_white")
                lightsid = "DJ_03_Lights_03";
            else if (getConfig("Load_NightclubLights") == "Bands_cyan")
                lightsid = "DJ_04_Lights_03";
            else if (getConfig("Load_NightclubLights") == "Laser_yellow")
                lightsid = "DJ_01_Lights_04";
            else if (getConfig("Load_NightclubLights") == "Laser_green")
                lightsid = "DJ_02_Lights_04";
            else if (getConfig("Load_NightclubLights") == "Laser_white")
                lightsid = "DJ_03_Lights_04";
            else if (getConfig("Load_NightclubLights") == "Laser_purple")
                lightsid = "DJ_04_Lights_04";
            else
                lightsid = "DJ_01_Lights_01";
            SetIplProp(271617, lightsid, true);
            if (getConfig("Load_NightclubBar")){
                SetIplProp(271617, "Int01_ba_bar_content", true);
            }
            if (getConfig("Load_NightclubBooze")){
                SetIplProp(271617, "Int01_ba_booze_01", true);
                SetIplProp(271617, "Int01_ba_booze_02", true);
                SetIplProp(271617, "Int01_ba_booze_03", true);
            }
            if (getConfig("Load_NightclubTrophy")){
                if (getConfig("Load_NightclubTrophyStyle") == "battler")
                    trophystyleid = "Int01_ba_trophy02";
                else if (getConfig("Load_NightclubTrophyStyle") == "dancer")
                    trophystyleid = "Int01_ba_trophy03";
                else
                    trophystyleid = "Int01_ba_trophy01";
                SetIplProp(271617, trophystyleid, true)
                if (getConfig("Load_NightclubTrophyColor") == "silver")
                    colorid = 1;
                else if (getConfig("Load_NightclubTrophyColor") == "gold")
                    colorid = 2;
                else
                    colorid = 0;
                SetPropColor(271617, trophystyleid, colorid);
            }
            if (getConfig("Load_NightclubDryIce")){
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
            SetIplProp(271617, "Int01_ba_dry_ice", getConfig("Load_NightclubDryIce"));
            SetIplProp(271617, "Int01_ba_Clutter", getConfig("Load_NightClubClutter"));
            SetIplProp(271617, "Int01_ba_Worklamps", getConfig("Load_NightClubWorkLamps"));
            SetIplProp(271617, "Int01_ba_deliverytruck", getConfig("Load_NightClubTruck"));
            SetIplProp(271617, "light_rigs_off", getConfig("Load_NightClubLightRigsOff"));
            SetIplProp(271617, "Int01_ba_lightgrid_01", getConfig("Load_NightClubRoofLightsOff"));
            SetIplProp(271617, "Int01_ba_trad_lights", getConfig("Load_NightClubFloorTradLights"));
            SetIplProp(271617, "Int01_ba_trophy04", getConfig("Load_NightClubChest"));
            SetIplProp(271617, "Int01_ba_trophy05", getConfig("Load_NightClubVaultAmmunations"));
            SetIplProp(271617, "Int01_ba_trophy07", getConfig("Load_NightClubVaultMeth"));
            SetIplProp(271617, "Int01_ba_trophy08", getConfig("Load_NightClubVaultFakeID"));
            SetIplProp(271617, "Int01_ba_trophy09", getConfig("Load_NightClubVaultWeed"));
            SetIplProp(271617, "Int01_ba_trophy10", getConfig("Load_NightClubVaultCoke"));
            SetIplProp(271617, "Int01_ba_trophy11", getConfig("Load_NightClubVaultCash"));
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
    let model = alt.hash("ba_prop_club_screens_01");
    const entrancePos = new alt.Vector3(988.06, 80.52, 79.97);
    const extrancePos = new alt.Vector3(-1569.4, -3017.1, -73.41);
    let handle = CreateNamedRenderTargetForModel("Club_Projector", model);
    alt.everyTick(() => {
        const distance_entry = alt.Player.local.pos.distanceTo(entrancePos);
        const distance_exit = alt.Player.local.pos.distanceTo(extrancePos);
        if (drawTv()) {
            native.setTvAudioFrontend(false);
            native.setTextRenderId(handle);
            native.setScriptGfxDrawBehindPausemenu(true);
            native.drawTvChannel(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
            native.setTextRenderId(native.getDefaultScriptRendertargetRenderId());
            native.setScriptGfxDrawBehindPausemenu(false);
        }
        else
            drawTv();
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