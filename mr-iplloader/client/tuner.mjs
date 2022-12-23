import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let Tunergarage = {
    ipl : ["tr_tuner_shop_burton", "tr_tuner_shop_mesa", "tr_tuner_shop_mission", "tr_tuner_shop_rancho", "tr_tuner_shop_strawberry"],
    Enable : function(state){
        if (state){
            EnableIpl(Tunergarage.ipl, state);
            SetIplProp(285953, "entity_set_bedroom", getConfig("Load_TunergarageBedroom"));
            SetIplProp(285953, "entity_set_bedroom_empty", getConfig("Load_TunergarageBedroomempty"));
            SetIplProp(285953, "entity_set_bombs", getConfig("Load_TunergarageBombs"));
            SetIplProp(285953, "entity_set_box_clutter", getConfig("Load_TunergarageClutter"));
            SetIplProp(285953, "entity_set_cabinets", getConfig("Load_TunergarageCabinets"));
            SetIplProp(285953, "entity_set_car_lift_cutscene", getConfig("Load_TunergarageCutscene"));
            SetIplProp(285953, "entity_set_car_lift_default", getConfig("Load_TunergarageLiftdefault"));
            SetIplProp(285953, "entity_set_car_lift_purchase", getConfig("Load_TunergarageLiftpurchase"));
            SetIplProp(285953, "entity_set_chalkboard", getConfig("Load_TunergarageChalkboard"));
            SetIplProp(285953, "entity_set_container", getConfig("Load_TunergarageContainer"));
            SetIplProp(285953, "entity_set_cut_seats", getConfig("Load_TunergarageSeats"));
            SetIplProp(285953, "entity_set_def_table", getConfig("Load_TunergarageDeftable"));
            SetIplProp(285953, "entity_set_drive", getConfig("Load_TunergarageDrive"));
            SetIplProp(285953, "entity_set_ecu", getConfig("Load_TunergarageEcu"));
            SetIplProp(285953, "entity_set_IAA", getConfig("Load_TunergarageIaa"));
            SetIplProp(285953, "entity_set_jammers", getConfig("Load_TunergarageJammers"));
            SetIplProp(285953, "entity_set_laptop", getConfig("Load_TunergarageLaptop"));
            SetIplProp(285953, "entity_set_lightbox", getConfig("Load_TunergarageLightbox"));
            SetIplProp(285953, "entity_set_methLab", getConfig("Load_TunergarageMethlab"));
            SetIplProp(285953, "entity_set_plate", getConfig("Load_TunergaragePlate"));
            SetIplProp(285953, "entity_set_scope", getConfig("Load_TunergarageScope"));
            SetIplProp(285953, "entity_set_style_1", getConfig("Load_TunergarageStyle1"));
            SetIplProp(285953, "entity_set_style_2", getConfig("Load_TunergarageStyle2"));
            SetIplProp(285953, "entity_set_style_3", getConfig("Load_TunergarageStyle3"));
            SetIplProp(285953, "entity_set_style_4", getConfig("Load_TunergarageStyle4"));
            SetIplProp(285953, "entity_set_style_5", getConfig("Load_TunergarageStyle5"));
            SetIplProp(285953, "entity_set_style_6", getConfig("Load_TunergarageStyle6"));
            SetIplProp(285953, "entity_set_style_7", getConfig("Load_TunergarageStyle7"));
            SetIplProp(285953, "entity_set_style_8", getConfig("Load_TunergarageStyle8"));
            SetIplProp(285953, "entity_set_style_9", getConfig("Load_TunergarageStyle9"));
            SetIplProp(285953, "entity_set_table", getConfig("Load_TunergarageTable"));
            SetIplProp(285953, "entity_set_thermal", getConfig("Load_TunergarageThermal"));
            SetIplProp(285953, "entity_set_tints", getConfig("Load_TunergarageTints"));
            SetIplProp(285953, "entity_set_train", getConfig("Load_TunergarageTrain"));
            SetIplProp(285953, "entity_set_virus", getConfig("Load_TunergarageVirus"));
            native.refreshInterior(285953);
        }
    }
}