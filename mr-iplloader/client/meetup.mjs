import * as native from 'natives';
import { EnableIpl, getConfig, SetIplProp } from 'mr-functions';
export let TunerMeetup = {
    ipl : ["tr_tuner_meetup", "tr_tuner_race_line"],
    Enable : function(state){
        if (state){
            EnableIpl(TunerMeetup.ipl, state);
            SetIplProp(285697, "entity_set_meet_crew", getConfig("Load_TunerMeetupCrew"));
            SetIplProp(285697, "entity_set_meet_lights", getConfig("Load_TunerMeetupLights"));
            SetIplProp(285697, "entity_set_meet_lights_cheap", getConfig("Load_TunerMeetupLightsCheap"));
            SetIplProp(285697, "entity_set_player", getConfig("Load_TunerMeetupPlayer"));
            SetIplProp(285697, "entity_set_test_crew", getConfig("Load_TunerMeetupTestCrew"));
            SetIplProp(285697, "entity_set_test_lights", getConfig("Load_TunerMeetupTestLights"));
            SetIplProp(285697, "entity_set_test_lights_cheap", getConfig("Load_TunerMeetupTestLightsCheap"));
            SetIplProp(285697, "entity_set_time_trial", getConfig("Load_TunerMeetupTrial"));
            native.refreshInterior(285697);
        }
    }
}