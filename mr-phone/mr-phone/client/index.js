import * as alt from "alt";
let opened = false;

const view = new alt.WebView("http://resource/client/html/index.html");

alt.on("keyup", (keycode) => {
  switch (keycode) {
    case 77: // Key: M
		if (opened){
			opened = false;
			view.emit("closePhone");
			alt.toggleGameControls(true);
			alt.showCursor(false);
			alt.toggleRmlControls(false);
			view.unfocus();
		}
		else{
			opened = true;
			view.emit("openPhone");
			alt.toggleGameControls(false);
			alt.showCursor(true);
			alt.toggleRmlControls(true);
			view.focus();
		}
      break;
  }
});