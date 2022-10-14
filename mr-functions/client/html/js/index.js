let show = false;
if (window.alt === undefined) {
	window.alt = {
		emit: () => {},
		on: () => {},
	};
}

alt.on('drawText', (id) => {
    $("#" + id).animate({'left':'-20px'}, 500);
});

alt.on('hideText', (id) => {
	$("#" + id).animate({'left':'-1000px'}, 500);
});

alt.on('setText', (id, txt) => {
	let element = `<div style="position: absolute; left: -1000px;" id="${id}" class="divposition"><div class="txt header"><div class="font">${txt}</div></div></div>`;
	$("#container").append(element);
});
			