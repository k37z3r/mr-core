import * as native from 'natives';
import { EnableIpl, SetIplProp, getConfig } from 'mr-functions';
export let VehicleWarehouse = {
	ipl : ["imp_impexp_interior_placement_interior_1_impexp_intwaremed_milo_", "imp_impexp_interior_placement_interior_3_impexp_int_02_milo_"],
	Enable : function(state){
        let StyleId, PumpId;
		if (state){
			EnableIpl(VehicleWarehouse.ipl, state);
			if (getConfig("Load_VehicleWarehouseStyle") == "basic")
				StyleId = "basic_style_set";
			else if (getConfig("Load_VehicleWarehouseStyle") == "branded")
				StyleId = "branded_style_set";
			else
				StyleId = "urban_style_set";
			SetIplProp(252673, StyleId, true);
			SetIplProp(252673, "car_floor_hatch", getConfig("Load_VehicleWarehousefloorHatch"));
			SetIplProp(252673, "door_blocker", getConfig("Load_VehicleWarehousedoorBlocker"));
			if (getConfig("Load_VehicleWarehousePump") == "set1")
				PumpId = "pump_01";
			else if (getConfig("Load_VehicleWarehousePump") == "set2")
				PumpId = "pump_02";
			else if (getConfig("Load_VehicleWarehousePump") == "set3")
				PumpId = "pump_03";
			else if (getConfig("Load_VehicleWarehousePump") == "set4")
				PumpId = "pump_04";
			else if (getConfig("Load_VehicleWarehousePump") == "set5")
				PumpId = "pump_05";
			else if (getConfig("Load_VehicleWarehousePump") == "set6")
				PumpId = "pump_06";
			else if (getConfig("Load_VehicleWarehousePump") == "set7")
				PumpId = "pump_07";
			else
				PumpId = "pump_08";
			SetIplProp(253185, PumpId, true);
			native.refreshInterior(253185);
			native.refreshInterior(252673);
		}
	}
}