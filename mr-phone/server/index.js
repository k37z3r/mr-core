import * as alt from "alt";
import fs from "fs";
var plugin_array = [];
var path = "resources/mr-phone/client/html/plugins";
fs.readdir(path, function(err, files){
	if (err)
		console.log(err.message);
	else{
		files.forEach(function(file){
			plugin_array.push(file);
		});
	}
});
alt.onClient('mr-phone:get_scripts', player => {
    alt.emitClient(player, 'mr-phone:set_scripts', plugin_array);
});