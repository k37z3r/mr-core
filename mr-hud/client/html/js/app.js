if (window.alt === undefined) {
    window.alt = {
        emit: () => {},
        on: () => {},
    };
}
alt.on("mr-core:hud:openhud", openHUD);
alt.on("mr-core:hud:closehud", closeHUD);
alt.on("mr-core:hud:set_hud", setHUD);
alt.on("mr-core:hud:set_running", setrunning);
let opened = false;
function openHUD(){
    if (!opened){
        $(".container").animate({'top':'0px'}, 500);
        opened = true;
    }
}
function closeHUD(){
    if (opened){
        $(".container").animate({'top':'-100px'}, 500);
        opened = false;
    }
}
function setrunning(results){
    if (results.health<20)
        $(".status.health").addClass("blink");
    else
        $(".status.health").removeClass("blink");
    if (results.oxygen<40)
        $(".status.oxygen").addClass("blink");
    else
        $(".status.oxygen").removeClass("blink");
    $("#running").html(`${Math.round(results.running)}%`);
    $("div.status.running").css('background', `linear-gradient(to right, rgba(0, 168, 98, 1) ${Math.round(results.running)}%,rgba(255, 0, 0, 0) ${Math.round(results.running)}%)`);
    $("#health").html(`${Math.round(results.health)}%`);
    $("div.status.health").css('background', `linear-gradient(to right, rgba(255, 0, 0, 1) ${Math.round(results.health)}%,rgba(255, 0, 0, 0) ${Math.round(results.health)}%)`);
    $("#shield").html(`${Math.round(results.shield)}%`);
    $("div.status.shield").css('background', `linear-gradient(to right, rgba(0, 0, 0, 1) ${Math.round(results.shield)}%,rgba(255, 0, 0, 0) ${Math.round(results.shield)}%)`);
    $("#oxygen").html(`${Math.round((results.oxygen)/2)}%`);
    $("div.status.oxygen").css('background', `linear-gradient(to right, rgba(73, 0, 168, 1) ${Math.round((results.oxygen)/2)}%,rgba(255, 0, 0, 0) ${Math.round((results.oxygen)/2)}%)`);
}
function setHUD(results){
    $("#uid").html(`<i class="fa-solid fa-hashtag"></i> ${results.uid}`);
    $("#name").html(`${results.username}`);
    $("#cash").html(`<i class="fa-solid fa-dollar-sign"></i> ${results.cash}`);
    $("#bank").html(`<i class="fa-solid fa-dollar-sign"></i> ${results.bank}`);
    $("#blackm").html(`<i class="fa-solid fa-dollar-sign"></i> ${results.bmoney}`);
    if (results.hunger<20)
        $(".status.hunger").addClass("blink");
    else
        $(".status.hunger").removeClass("blink");
    if (results.thirsty<20)
        $(".status.thirsty").addClass("blink");
    else
        $(".status.thirsty").removeClass("blink");
    if (results.toilet>80)
        $(".status.toilet").addClass("blink");
    else
        $(".status.toilet").removeClass("blink");
    if (results.temperatur>80 || results.temperatur < 20)
        $(".status.temperatur").addClass("blink");
    else
        $(".status.temperatur").removeClass("blink");

    if (results.stress>80)
        $(".status.stress").addClass("blink");
    else
        $(".status.stress").removeClass("blink");
    $("#hunger").html(`${Math.round(results.hunger)}%`);
    $("#thirsty").html(`${Math.round(results.thirsty)}%`);
    $("#toilet").html(`${Math.round(results.toilet)}%`);
    $("#temperatur").html(`${Math.round(results.temperatur)}%`);
    $("#stress").html(`${Math.round(results.stress)}%`);
    $("div.status.hunger").css('background', `linear-gradient(to right, rgba(255, 128, 0, 1) ${Math.round(results.hunger)}%,rgba(255, 0, 0, 0) ${Math.round(results.hunger)}%)`);
    $("div.status.thirsty").css('background', `linear-gradient(to right, rgba(0, 127, 255, 1) ${Math.round(results.thirsty)}%,rgba(255, 0, 0, 0) ${Math.round(results.thirsty)}%)`);
    $("div.status.toilet").css('background', `linear-gradient(to right, rgba(139, 69, 19, 1) ${Math.round(results.toilet)}%,rgba(255, 0, 0, 0) ${Math.round(results.toilet)}%)`);
    $("div.status.stress").css('background', `linear-gradient(to right, rgba(0, 120, 168, 1) ${Math.round(results.stress)}%,rgba(255, 0, 0, 0) ${Math.round(results.stress)}%)`);
}