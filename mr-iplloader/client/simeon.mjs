import * as native from 'natives';
import { EnableIpl, getInteriorByType, SetIplProp } from 'mr-functions';
export let Simeon = {
	ipl : ["shr_int"],
	Enable : function(state, style, shutter){
		EnableIpl(Simeon.ipl, state);
		if (state){
			let styleid, shutterid;
			if (style == "noGlass")
				styleid = "csr_inMission";
			else if (style == "destroyed")
				styleid = "csr_afterMissionA";
			else if (style == "fixed")
				styleid = "csr_afterMissionB";
			else
				styleid = "csr_beforeMission";
			SetIplProp(7170, styleid, true);
			if (shutter == "opened")
				shutterid = "shutter_open";
			else if (shutter == "closed")
				shutterid = "shutter_closed";
			else
				shutterid = "none";
			if ((shutterid != "none" && shutterid == "shutter_closed") || (shutterid != "none" && shutterid == "shutter_opened")){
				SetIplProp(7170, shutterid, true);
			}
		}
	}
}