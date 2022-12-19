import * as alt from 'alt';
import axios from 'axios';
import { WHITELIST, SECRETPID, MINAGE, getConfig } from 'mr-functions';
let TopListUpdate;
async function doPostRequest() {
    let wl = "no";
    if (WHITELIST == "true")
        wl = 'yes';
    else
        wl = 'no';
    var postdata = {
        minage: MINAGE,
        whitelist: wl,
        language: getConfig("LANGUAGE"),
        framework: 'mr-core',
        voice: 'Utilize alt:V builtin Voice',
        chat: 'ingame Discord',
        servername: alt.getServerConfig().name,
        serverip: alt.getServerConfig().host,
        serverport: alt.getServerConfig().port,
        gamemode: alt.getServerConfig().gamemode,
        platform: 'altv',
        onlineplayers: alt.Player.all.length,
        maxplayers: alt.getServerConfig().players,
        secretToken: alt.getServerConfig().secretSID,
        secretToken2: SECRETPID
    };
    var headers = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        };
        await axios.post("https://gta-spot.com/announce.php", postdata, headers)
        .then(response => {
            if (response.data == "ok")
                alt.log("data transfer success");
            else
                alt.log(response.data);
        })
          .catch(error => {
            if (error.response)
                alt.log(error.response.status);
            else if (error.request)
                alt.log(error.request);
            else
                alt.log(error.message);
        });
    }
    TopListUpdate = alt.setInterval(doPostRequest, 540000);
    doPostRequest();
