import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let BikerDocumentForgery = {
    ipl : ["bkr_biker_interior_placement_interior_6_biker_dlc_int_ware05_milo"],
    Enable : function(state){
        if (state){
            let StyleId, EquipmentId, SecurityId;
            EnableIpl(BikerDocumentForgery.ipl, state);
            if (getConfig("Load_BikerDocumentForgeryStyle") == "upgrade")
                StyleId = "interior_upgrade";
            else
                StyleId = "interior_basic";
            SetIplProp(246785, StyleId, true);
            if (getConfig("Load_BikerDocumentForgeryEquipment") == "upgrade")
                EquipmentId = "equipment_upgrade";
            else if (getConfig("Load_BikerDocumentForgeryEquipment") == "basic")
                EquipmentId = "equipment_basic";
            else
                EquipmentId = "none";
            if (EquipmentId != "none"){
                SetIplProp(246785, EquipmentId, true);
            }
            if (getConfig("Load_BikerDocumentForgerySecurity") == "upgrade")
                SecurityId = "security_high";
            else
                SecurityId = "security_low";
            SetIplProp(246785, SecurityId, true);
            if (getConfig("Load_BikerDocumentForgeryChairs")){
                SetIplProp(246785, "chair01", true);
                SetIplProp(246785, "chair02", true);
                SetIplProp(246785, "chair03", true);
                SetIplProp(246785, "chair04", true);
                SetIplProp(246785, "chair05", true);
                SetIplProp(246785, "chair06", true);
                SetIplProp(246785, "chair07", true);
            }
            SetIplProp(246785, "production", getConfig("Load_BikerDocumentForgeryProduction"));
            SetIplProp(246785, "set_up", getConfig("Load_BikerDocumentForgeryFurnitures"));
            SetIplProp(246785, "clutter", getConfig("Load_BikerDocumentForgeryClutter"));
            native.refreshInterior(246785);
        }
    }
}