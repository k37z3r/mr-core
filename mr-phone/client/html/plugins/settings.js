element = '<section class="phone_bgr_settings_icon" id="phone_settings"><i class="fa-solid fa-gear phone_bottom_icons phone_top_icons phone_settings_icon"></i></section>';
phone_top_apps_arr.push(element);
insert_apps_to_start();
$(document).ready(function(){
    $(document).on('click', '#phone_settings', function(e) {
        $("#phone_container").html("");
        element = '<input type="hidden" style="display:none;" value="phone_settings" class="fake_id_to_load_from_cache"><div class="phone_settings"><div id="phone_ringtones_call" class="settings_menu">' + language_array[8] + '<i id="phone_ringtones_call_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_ringtones_call" style="display:none;"></div><div id="phone_ringtones_sms" class="settings_menu">' + language_array[9] + '<i id="phone_ringtones_sms_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_ringtones_sms" style="display:none;"></div><div id="phone_ringtones_whatsapp_call" class="settings_menu">' + language_array[10] + '<i id="phone_ringtones_whatsapp_call_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_ringtones_whatsapp_call" style="display:none;"></div><div id="phone_ringtones_whatsapp_msg" class="settings_menu">' + language_array[11] + '<i id="phone_ringtones_whatsapp_msg_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_ringtones_whatsapp_msg" style="display:none;"></div><div id="phone_ringtones_discord_msg" class="settings_menu">' + language_array[22] + '<i id="phone_ringtones_discord_msg_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_ringtones_discord_msg" style="display:none;"></div><div id="phone_ringtones_email" class="settings_menu">' + language_array[12] + '<i id="phone_ringtones_email_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_ringtones_email" style="display:none;"></div><div id="phone_ringtones_volume" class="settings_menu">' + language_array[13] + '<i id="phone_ringtones_volume_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_ringtones_volume" style="display:none;"><div class="sub_menu">' + language_array[8] + ': <input type="range" min="0" max="1" step="0.01" class="sound_slider" id="phone_ringtones_call_volume"></div><div class="sub_menu">' + language_array[9] + ': <input type="range" min="0" max="1" step="0.01" class="sound_slider" id="phone_ringtones_sms_volume"></div><div class="sub_menu">' + language_array[10] + ': <input type="range" min="0" max="1" step="0.01" class="sound_slider" id="phone_ringtones_whatsapp_call_volume"></div><div class="sub_menu">' + language_array[11] + ': <input type="range" min="0" max="1" step="0.01" class="sound_slider" id="phone_ringtone_whatsapp_msg_volume"></div><div class="sub_menu">' + language_array[22] + ': <input type="range" min="0" max="1" step="0.01" class="sound_slider" id="phone_ringtones_discord_msg_volume"></div><div class="sub_menu">' + language_array[12] + ': <input type="range" min="0" max="1" step="0.01" class="sound_slider" id="phone_ringtones_email_volume"></div><div class="sub_menu">' + language_array[14] + ': <input type="range" min="0" max="1" step="0.01" class="sound_slider" id="soundtouched_volume"></div></div><div id="phone_keytones" class="settings_menu">' + language_array[14] + ':<i id="phone_keytones_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_keytones" style="display:none;"><div class="sub_menu">' + language_array[15] + ': <div id="soundtouched_bgd" class="slider_bgd"><div id="soundtouched" class="slider"></div></div></div><div class="sub_menu">' + language_array[16] + ': <div id="seetouched_bgd" class="slider_bgd"><div id="seetouched" class="slider"></div></div></div></div><div id="phone_background_image" class="settings_menu">' + language_array[17] + '<i id="phone_background_image_pm" class="fa-solid fa-plus"></i></div><div id="sub_phone_background_image" style="display:none;"><div class="sub_menu_img"></div></div><div id="phone_default_settings" class="settings_menu">' + language_array[18] + '</div><div id="default_settings_confirm" style="display:none;"><div class="default_setting_confirm_content"><div class="default_setting_confirm_header">' + language_array[18] + '?</div><div class="default_setting_confirm_text"' + language_array[19] + '<br><br>*' + language_array[20] + '</div><div class="default_setting_confirm_buttons"><div class="confirm_button" id="phone_default_settings_yes">' + language_array[21] + '</div><div class="confirm_button" id="phone_default_settings_no">' + language_array[22] + '</div></div></div></div></div>';
        $("#phone_container").append(element);
        insert_ringtones("sub_phone_ringtones","call");
        insert_ringtones("sub_phone_ringtones","whatsapp_call");
        insert_msgtones("sub_phone_ringtones","sms");
        insert_msgtones("sub_phone_ringtones","whatsapp_msg");
        insert_msgtones("sub_phone_ringtones","discord_msg");
        insert_msgtones("sub_phone_ringtones","email");
        insert_background_images();
        get_phone_settings();
        if (phone_cache.indexOf(element) == -1)
            phone_cache.push(element);
        $("#seetouched_bgd").click(function(){
            if ($("#seetouched").css("left") == "25px"){
                $("#seetouched").animate({ "left": "-=22px" }, "slow" );
                $("#seetouched").css("background", "hsla(0, 0%, 75%, 1)");
                localStorage.setItem("seetouched", "false");
            }
            else{
                $("#seetouched").animate({ "left": "+=22px" }, "slow" );
                $("#seetouched").css("background", "hsla(120, 65%, 55%, 1)");
                localStorage.setItem("seetouched", "true");
            }
        });
        $( "#soundtouched_bgd" ).click(function(){
            if ($("#soundtouched").css("left") == "25px"){
                $("#soundtouched").animate({ "left": "-=22px" }, "slow" );
                $("#soundtouched").css("background", "hsla(0, 0%, 75%, 1)");
                localStorage.setItem("soundtouched", "false");
            }
            else{
                $("#soundtouched").animate({ "left": "+=22px" }, "slow" );
                $( "#soundtouched" ).css("background", "hsla(120, 65%, 55%, 1)");
                localStorage.setItem("soundtouched", "true");
            }
        });
        $(".sub_menu_img > div").map(function(){
            $("#" + this.id).click(function() {
                for (let i = 0; i < background_images_arr.length; i++){
                    $("#" + background_images_arr[i]).removeClass("img_preview_active");
                    $("#" + background_images_arr[i]).addClass("img_preview");
                }
                $("#" + this.id).removeClass("img_preview");
                $("#" + this.id).addClass("img_preview_active");
                $("#phone_container").css("background-image", "url(./img/" + this.id + ".jpg)");
                localStorage.setItem("phone_background_image", this.id);
            });
        });
        $("#sub_phone_ringtones_call > div").map(function(){
            $("#" + this.id).click(function() {
                for (let i = 0; i < ringtones_arr.length; i++)
                    $("#" + ringtones_arr[i]).removeClass("sub_menu_active");
                $("#" + this.id).addClass("sub_menu_active");
                localStorage.setItem("phone_ringtones_call", this.id);
            });
        });
        $("#sub_phone_ringtones_whatsapp_call > div").map(function(){
            $("#" + this.id).click(function() {
                for (let i = 0; i < ringtones_arr.length; i++)
                    $("#" + ringtones_arr[i]).removeClass("sub_menu_active");
                $("#" + this.id).addClass("sub_menu_active");
                localStorage.setItem("phone_ringtones_whatsapp_call", this.id);
            });
        });
        $("#sub_phone_ringtones_sms > div").map(function(){
            $("#" + this.id).click(function() {
                for (let i = 0; i < ringtones_arr.length; i++)
                    $("#" + ringtones_arr[i]).removeClass("sub_menu_active");
                $("#" + this.id).addClass("sub_menu_active");
                localStorage.setItem("phone_ringtones_sms", this.id);
            });
        });
        $("#sub_phone_ringtones_whatsapp_msg > div").map(function(){
            $("#" + this.id).click(function() {
                for (let i = 0; i < ringtones_arr.length; i++)
                    $("#" + ringtones_arr[i]).removeClass("sub_menu_active");
                $("#" + this.id).addClass("sub_menu_active");
                localStorage.setItem("phone_ringtones_whatsapp_msg", this.id);
            });
        });
        $("#sub_phone_ringtones_discord_msg > div").map(function(){
            $("#" + this.id).click(function() {
                for (let i = 0; i < ringtones_arr.length; i++)
                    $("#" + ringtones_arr[i]).removeClass("sub_menu_active");
                $("#" + this.id).addClass("sub_menu_active");
                localStorage.setItem("phone_ringtones_discord_msg", this.id);
            });
        });
        $("#sub_phone_ringtones_email > div").map(function(){
            $("#" + this.id).click(function() {
                for (let i = 0; i < ringtones_arr.length; i++){
                    $("#" + ringtones_arr[i]).removeClass("sub_menu_active");
                }
                $("#" + this.id).addClass("sub_menu_active");
                localStorage.setItem("phone_ringtones_email", this.id);
            });
        });
        $(".sub_menu > input[type='range']").map(function(){
            $("#" + this.id).change(function() {
                localStorage.setItem(this.id, this.value);
            });
        });
        $("#phone_default_settings").click(function(){
            $("#default_settings_confirm").show(1000);
        });
        $("#phone_default_settings_yes").click(function(){
            localStorage.clear();
            $("#default_settings_confirm").hide(1000);
        });
        $("#phone_default_settings_no").click(function(){
            $("#default_settings_confirm").hide(1000);
        });
    });

    get_phone_settings();
    $(document).on('click', '#phone_ringtones_call, #phone_ringtones_sms, #phone_ringtones_whatsapp_msg, #phone_ringtones_whatsapp_call, #phone_ringtones_discord_msg, #phone_ringtones_email, #phone_keytones, #phone_background_image, #phone_ringtones_volume', function(e) {
            switches(this.id);
    });
});
function insert_background_images(){
    let background_images = [];
    background_images.push("amber-7327252_640");
    background_images.push("book-cover-3803468_1920");
    background_images.push("border-971239_1280");
    background_images.push("california-140113_1920");
    background_images.push("city-6075716_1920");
    background_images.push("jesus-653472_1920");
    background_images.push("jesus-2232024_1280");
    background_images.push("man-7412527_1280");
    background_images.push("phone_background_std");
    background_images.push("phone-wallpaper-4497496_1920");
    background_images.push("sunset-2076685_1920");
    background_images.push("young-woman-4619230_1920");
    for (let i = 0; i < background_images.length; i++){
        $(".sub_menu_img").append('<div style="background-image:url(\'./img/' + background_images[i] + '.jpg\');" id="' + background_images[i] + '" class="img_preview"></div>');
        background_images_arr.push(background_images[i]);
    }
}
function insert_ringtones(id, val){
    let ringtones = [];
    ringtones.push("oversimplified-alarm-clock-113180");
    ringtones.push("808-kick-boom-bass-snare-hit-hats-roll-140-bpm-3-trap-loop-15-12764");
    ringtones.push("beethoven-fur-elise-guitar-lead-65705");
    ringtones.push("blockbuster-logo-13085");
    ringtones.push("nigh-in-detroit-2-34979");
    ringtones.push("dark-evil-piano-32205");
    ringtones.push("children-logo-116101");
    ringtones.push("grinder-drum-loop-6697");
    ringtones.push("hard-rock-logo-108960");
    ringtones.push("80s-hiphop-loop-76134");
    for (let i = 0; i < ringtones.length; i++){
        let str = ringtones[i].charAt(0).toUpperCase() + ringtones[i].slice(1);
        str = str.replace(val, "");
        str = str.replaceAll(/[^\w\d]/g, " ");
        str = str.replaceAll(/[\d]{5,}/g, " ");
        str = str.replaceAll("-", " ");
        str = str.replaceAll("\s+", " ");
        let rname = str.split(' ');
        let ret = "";
        for (let i = 0; i < 3 && i < rname.length; i++){
            ret += ((i>0)?' ':'')+rname[i].charAt(0).toUpperCase() + rname[i].slice(1);
        }
        str =  ret;
        $("#" + id + "_" + val).append('<div id="' + ringtones[i] + '_' + val + '" class="sub_menu">' + ret + '<i class="fa-solid fa-chevron-right"></i></div>');
        ringtones_arr.push(ringtones[i] + '_' + val);
    }
}
function insert_msgtones(id, val){
    let ringtones = [];
    ringtones.push("old-cell-mobile-phone-text-sms-message-sound-87787");
    ringtones.push("smsreceived-98662");
    ringtones.push("recepcion_mensaje1_valentinp-45120");
    ringtones.push("textalert-88621");
    ringtones.push("recepcion_mensaje2_valentinp-98885");
    ringtones.push("samsung-whistle-soundalike-105086");
    ringtones.push("friend-request-14878");
    ringtones.push("announcement-sound-4-21464");
    ringtones.push("supermarket-pa-104750");
    ringtones.push("answering-machine-female-hi-its-me-83956");
    ringtones.push("081723_fx-40246");
    ringtones.push("recepcion_mensaje_robotica_almalaut-80619");
    ringtones.push("new-message-81200");
    ringtones.push("message-notification-103496");
    ringtones.push("dreamer-88881");
    for (let i = 0; i < ringtones.length; i++){
        let str = ringtones[i].charAt(0).toUpperCase() + ringtones[i].slice(1);
        str = str.replace(val, "");
        str = str.replaceAll(/[^\w\d]/g, " ");
        str = str.replaceAll(/[\d]{5,}/g, " ");
        str = str.replaceAll("-", " ");
        str = str.replaceAll("_", " ");
        str = str.replaceAll("\s+", " ");
        str = str.trim();
        let rname = str.split(' ');
        let ret = "";
        for (let i = 0; i < 2 && i < rname.length; i++){
            ret += ((i>0)?' ':'')+rname[i].charAt(0).toUpperCase() + rname[i].slice(1);
        }
        str =  ret;
        $("#" + id + "_" + val).append('<div id="' + ringtones[i] + '_' + val + '" class="sub_menu">' + ret + '<i class="fa-solid fa-chevron-right"></i></div>');
        ringtones_arr.push(ringtones[i] + '_' + val);
    }
}
function switches(id){
    if ($("#" + id + "_pm").attr('class') == "fa-solid fa-plus"){
        $("#" + id + "_pm").removeClass('fa-plus');
        $("#" + id + "_pm").addClass('fa-minus');
    }
    else{
        $("#" + id + "_pm").removeClass('fa-minus');
        $("#" + id + "_pm").addClass('fa-plus');
    }
    $("#sub_" + id).toggle("slow");
}
function get_phone_settings(){
    for (let i=0, iC=localStorage.length; i<iC; ++i) { 
        let storageKey = localStorage.key(i);
        for (let i = 0; i < ringtones_arr.length; i++){
            if (ringtones_arr[i] == localStorage.getItem(storageKey))
                $("#" + ringtones_arr[i]).addClass("sub_menu_active");
        }
        for (let i = 0; i < background_images_arr.length; i++){
            if (background_images_arr[i] == localStorage.getItem(storageKey)){
                $("#" + background_images_arr[i]).removeClass("img_preview");
                $("#" + background_images_arr[i]).addClass("img_preview_active");
            }
        }
    }
    if (phone_seetouched_storage === "false")
        $("#seetouched").css("left", "3px");
    else{
        $("#seetouched").css("left", "25px");
        $("#seetouched").css("background", "hsla(120, 65%, 55%, 1)");
    }
    if (phone_soundtouched_storage == "false")
        $("#soundtouched").css("left", "3px");
    else{
        $("#soundtouched").css("left", "25px");
        $("#soundtouched").css("background", "hsla(120, 65%, 55%, 1)");
    }
    $("#phone_ringtones_call_volume").val(phone_ringtones_call_volume_storage);
    $("#phone_ringtones_whatsapp_call_volume").val(phone_ringtones_whatsapp_call_volume_storage);
    $("#phone_ringtones_sms_volume").val(phone_ringtones_sms_volume_storage);
    $("#phone_ringtones_email_volume").val(phone_ringtones_email_volume_storage);
    $("#phone_ringtones_discord_msg_volume").val(phone_ringtones_discord_msg_volume_storage);
    $("#phone_ringtone_whatsapp_msg_volume").val(phone_ringtone_whatsapp_msg_storage);
    $("#soundtouched_volume").val(soundtouched_volume_storage);
    $("#phone_container").css("background-image", "url(./img/" + phone_background_storage + ".jpg)");
    ringtone_storage = ((localStorage.getItem("phone_ringtones_call")==null)?"oversimplified-alarm-clock-113180":localStorage.getItem("phone_ringtones_call"));
    wac_ringtone_storage = ((localStorage.getItem("phone_ringtones_whatsapp_call")==null)?"oversimplified-alarm-clock-113180":localStorage.getItem("phone_ringtones_whatsapp_call"));
    ringtone_sms_storage = ((localStorage.getItem("phone_ringtones_sms")==null)?"old-cell-mobile-phone-text-sms-message-sound-87787":localStorage.getItem("phone_ringtones_sms"));
    ringtone_email_storage = ((localStorage.getItem("phone_ringtones_email")==null)?"old-cell-mobile-phone-text-sms-message-sound-87787":localStorage.getItem("phone_ringtones_email"));
    ringtone_discord_storage = ((localStorage.getItem("phone_ringtones_discord_msg")==null)?"old-cell-mobile-phone-text-sms-message-sound-87787":localStorage.getItem("phone_ringtones_discord_msg"));
    ringtone_whatsapp_msg_storage = ((localStorage.getItem("phone_ringtones_whatsapp_msg")==null)?"old-cell-mobile-phone-text-sms-message-sound-87787":localStorage.getItem("phone_ringtones_whatsapp_msg"));
    phone_background_storage = ((localStorage.getItem("phone_background_image")==null)?"phone_background_std":localStorage.getItem("phone_background_image"));
    phone_seetouched_storage = ((localStorage.getItem("seetouched")==null)?"true":localStorage.getItem("seetouched"));
    phone_soundtouched_storage = ((localStorage.getItem("soundtouched")==null)?"true":localStorage.getItem("soundtouched"));
    phone_ringtones_call_volume_storage = ((localStorage.getItem("phone_ringtones_call_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_call_volume"));
    phone_ringtones_whatsapp_call_volume_storage = ((localStorage.getItem("phone_ringtones_whatsapp_call_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_whatsapp_call_volume"));
    phone_ringtones_sms_volume_storage = ((localStorage.getItem("phone_ringtones_sms_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_sms_volume"));
    phone_ringtones_email_volume_storage = ((localStorage.getItem("phone_ringtones_email_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_email_volume"));
    phone_ringtones_discord_msg_volume_storage = ((localStorage.getItem("phone_ringtones_discord_msg_volume")==null)?"0.8":localStorage.getItem("phone_ringtones_discord_msg_volume"));
    phone_ringtone_whatsapp_msg_storage = ((localStorage.getItem("phone_ringtone_whatsapp_msg_volume")==null)?"0.8":localStorage.getItem("phone_ringtone_whatsapp_msg_volume"));
    soundtouched_volume_storage = ((localStorage.getItem("soundtouched_volume")==null)?"0.3":localStorage.getItem("soundtouched_volume"));
}