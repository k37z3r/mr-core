var phone_cache = [];
var phone_bottom_menu_arr = [];
var phone_top_apps_arr = [];
var ringtones_arr = [];
var background_images_arr = [];
var ringtone_storage = ((localStorage.getItem("phone_ringtones_call")==null)?"oversimplified-alarm-clock-113180":localStorage.getItem("phone_ringtones_call"));
var wac_ringtone_storage = ((localStorage.getItem("phone_ringtones_whatsapp_call")==null)?"oversimplified-alarm-clock-113180":localStorage.getItem("phone_ringtones_whatsapp_call"));
var ringtone_sms_storage = ((localStorage.getItem("phone_ringtones_sms")==null)?"old-cell-mobile-phone-text-sms-message-sound-87787":localStorage.getItem("phone_ringtones_sms"));
var ringtone_email_storage = ((localStorage.getItem("phone_ringtones_email")==null)?"old-cell-mobile-phone-text-sms-message-sound-87787":localStorage.getItem("phone_ringtones_email"));
var ringtone_discord_storage = ((localStorage.getItem("phone_ringtones_discord_msg")==null)?"old-cell-mobile-phone-text-sms-message-sound-87787":localStorage.getItem("phone_ringtones_discord_msg"));
var ringtone_whatsapp_msg_storage = ((localStorage.getItem("phone_ringtones_whatsapp_msg")==null)?"old-cell-mobile-phone-text-sms-message-sound-87787":localStorage.getItem("phone_ringtones_whatsapp_msg"));
var phone_background_storage = ((localStorage.getItem("phone_background_image")==null)?"phone_background_std":localStorage.getItem("phone_background_image"));
var phone_seetouched_storage = ((localStorage.getItem("seetouched")==null)?"true":localStorage.getItem("seetouched"));
var phone_soundtouched_storage = ((localStorage.getItem("soundtouched")==null)?"true":localStorage.getItem("soundtouched"));
var phone_ringtones_call_volume_storage = ((localStorage.getItem("phone_ringtones_call_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_call_volume"));
var phone_ringtones_whatsapp_call_volume_storage = ((localStorage.getItem("phone_ringtones_whatsapp_call_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_whatsapp_call_volume"));
var phone_ringtones_sms_volume_storage = ((localStorage.getItem("phone_ringtones_sms_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_sms_volume"));
var phone_ringtones_email_volume_storage = ((localStorage.getItem("phone_ringtones_email_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_email_volume"));
var phone_ringtones_discord_msg_volume_storage = ((localStorage.getItem("phone_ringtones_discord_msg_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_discord_msg_volume"));
var phone_ringtone_whatsapp_msg_storage = ((localStorage.getItem("phone_ringtone_whatsapp_msg_volume")==null)?"0.8":localStorage.getItem("phone_ringtone_whatsapp_msg_volume"));
var soundtouched_volume_storage = ((localStorage.getItem("soundtouched_volume")==null)?"0.3":localStorage.getItem("soundtouched_volume"));
var start_display = '<div id="phone_top_apps"></div><div id="phone_bottom_menu"></div>';
var show = false;
var app_store = [];
var installed = [];
var language_array = [];
if (localStorage.getItem("installed_apps") != null){
    let datas = JSON.parse(localStorage.getItem("installed_apps"));
    for (let i = 0; i < datas.length; i++){
        if (installed.indexOf(datas[i]) == -1){
            installed.push(datas[i]);
        }
    }
}        
if (window.alt === undefined) {
  window.alt = {
    emit: () => {},
    on: () => {},
  };
}
$(document).ready(function(){
    var element=start_display;
    $("#phone_container").append(element);
    $(document).on('click', '.fa-solid.fa-circle-xmark.phone_icons', function(e) {
        element=start_display;
        if ($("#phone_container").html() !== element){
            phone_cache = phone_cache.slice(0, -1);
        }
        $("#phone_container").html("");
        $("#phone_container").append(element);
        insert_bottom_menu();
        insert_apps_to_start();
    });
    $(document).on('click', '.fa-solid.fa-circle-chevron-left.phone_icons', function(e) {
        element=start_display;
        $("#phone_container").html("");
        $("#phone_container").append(element);
        insert_bottom_menu();
        insert_apps_to_start();
    });
    $(document).on('click', '.fa-solid.fa-square-up-right.phone_icons', function(e){
        load_overview();
    });
    $(document).on('click', '#phone_container', function(e){
        e.preventDefault();
        if (phone_soundtouched_storage == "true"){
            var myAudio = new Audio('./audio/click-21156.mp3');
            myAudio.volume = soundtouched_volume_storage;
            myAudio.play();
        }
        if (phone_seetouched_storage == "true"){
            applyCursorRippleEffect(e, '#phone_container');
        }
    });
    $(document).on('click', '#phone_buttons', function(e){
        e.preventDefault();
        if (phone_soundtouched_storage == "true"){
            var myAudio = new Audio('./audio/click-21156.mp3');
            myAudio.volume = soundtouched_volume_storage;
            myAudio.play();
        }
        if (phone_seetouched_storage == "true"){
            applyCursorRippleEffect(e, '#phone_buttons');
        }
    });
    alt.on("mr-core:phone:closePhone", closePhone);
    alt.on("mr-core:phone:openPhone", openPhone);
    alt.on('mr-core:phone:load_res_plugins', p_array => {
        dynamicallyLoadScript(p_array);
    });
    alt.on('mr-core:phone:load_language', p_array => {
        language_array = p_array;
    });
});
function dynamicallyLoadScript(url) {
    for (let i = 0; i < url.length; i++){
        var script = document.createElement("script");
        script.src = "./plugins/" + url[i];
        document.head.appendChild(script);
    }
}
function applyCursorRippleEffect(e, a) {
    const ripple = document.createElement("div");
    ripple.className = "ripple";
    $(a).append(ripple);
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`; 
    ripple.style.animation = `ripple-effect .4s  linear`;
    ripple.onanimationend = () => {
        $(ripple).remove();
    }
}
function close_from_overview(id){
    phone_cache = phone_cache.slice(id, -1);
    load_overview();
}
function load_overview(){
    $("#phone_container").html("");
    $("#phone_container").html("<div id='temp' style='display:none'></div><div id='phone_overview'>" + ((phone_cache.length==0)?"<span class='no_open_apps'>" + language_array[0] + "</span>":"") + "</div>");
    for (let i = 0; i < phone_cache.length; i++){
        $("#temp").html(phone_cache[i]);
        $("#phone_overview").append("<div class='overview_item_overlay'><div class='overview_item_open' onclick='open_from_overview(\"" + $('.fake_id_to_load_from_cache').val() + "\");'><div class='phone_overview_item'>" + phone_cache[i] + "</div></div><div class='overview_item_close' onclick='close_from_overview(" + i + ");'><i class='fa-solid fa-circle-xmark'></i></div></div>");
    }
}
function open_from_overview(id){
    $("#phone_container").html("");
    element=start_display;
    $("#phone_container").html(element);
    insert_apps_to_start();
    insert_bottom_menu();
    $("#" + id).click();
}
function insert_bottom_menu(){
    $("#phone_bottom_menu").html("");
    for (let i = 0; i < phone_bottom_menu_arr.length; i++){
        $("#phone_bottom_menu").append(phone_bottom_menu_arr[i]);
    }
}
function insert_apps_to_start(){
    install_apps();
    $("#phone_top_apps").html("");
    for (let i = 0; i < phone_top_apps_arr.length; i++){
        $("#phone_top_apps").append(phone_top_apps_arr[i]);
    }
}
function openPhone(){
    if (!show){
        $("#phone").animate({'bottom':'30px'}, 2000);
        show = true;
    }
}
function closePhone(){
    if (show){
        $("#phone").animate({'bottom':'-550px'}, 2000);
        show = false;
    }
}
function is_installed_app(app){
    if (installed.indexOf(app) === -1)
        return false;
    else
        return true;
}
function install_apps(){
    for (let i = 0; i < app_store.length; i++){
        if (is_installed_app(app_store[i][0])){
            if (phone_top_apps_arr.indexOf(app_store[i][2]) == -1)
                phone_top_apps_arr.push(app_store[i][2]);
        }
    }
}