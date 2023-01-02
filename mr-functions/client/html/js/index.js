let show = false;
let openmapping = false;
if (window.alt === undefined) {
    window.alt = {
        emit: () => {},
        on: () => {},
    };
}
alt.on("mr-core:functions:openkeymapping", openkeymapping);
alt.on("mr-core:functions:closekeymapping", closekeymapping);
alt.on("mr-core:functions:setkeymapping", setkeymapping);
alt.on("mr-core:functions:drawText", (id) => {
    $("#" + id).animate({'left':'-20px'}, 500);
});
alt.on('mr-core:functions:hideText', (id) => {
    $("#" + id).animate({'left':'-1000px'}, 500);
});
alt.on('mr-core:functions:setText', (id, txt) => {
    let element = `<div style="position: absolute; left: -1000px;" id="${id}" class="position"><div class="txt header"><div class="font">${txt}</div></div></div>`;
    $("#container").append(element);
});
function openkeymapping(txt){
    $("#divhelptext").animate({'left':'-200px'}, 500);
    $("div.helptxt.header").css('padding', `13px ${($("div.helptxt.header").outerHeight() / 2) * 1.5}px`);
}
function closekeymapping(){
    $("#divhelptext").animate({'left':'-2000px'}, 500);
}
function setkeymapping(txt){
    let element = `<div style="position: absolute; left: -2000px;" class="helpposition" id="divhelptext"><div class="helptxt header" id="helptxt"><div class="font">${txt}</div></div></div>`;
    $("#container").append(element);
}