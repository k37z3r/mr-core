element = '<div id="phone_adressbook"><i class="fa-solid fa-square-phone phone_bottom_icons"></i></div>';
phone_bottom_menu_arr.push(element);
insert_bottom_menu();
$(document).ready(function(){
    $(document).on('click', '#phone_adressbook', function(e) {
        $("#phone_container").html("");
        element='<input type="hidden" style="display:none;" value="phone_adressbook" class="fake_id_to_load_from_cache"><div id="phone_call"><div id="phone_search_con"><div id="phone_search_field" contenteditable="true"></div><div id="phone_search"><i class="fa-solid fa-magnifying-glass"></i></div></div><div id="phone_suggestions"></div><div id="phone_number_con"><div id="phone_number_input" contenteditable="true"></div><div id="phone_del"><i class="fa-solid fa-delete-left"></i></div></div><div id="phone_numberfield"><div class="phone_number_row"><div class="phone_numfield_button" id="phone_button_1"><i class="fa-solid fa-1"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-voicemail"></i></span></div><div class="phone_numfield_button" id="phone_button_2"><i class="fa-solid fa-2"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-a"></i><i class="fa-solid fa-b"></i><i class="fa-solid fa-c"></i></span></div><div class="phone_numfield_button" id="phone_button_3"><i class="fa-solid fa-3"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-d"></i><i class="fa-solid fa-e"></i><i class="fa-solid fa-f"></i></span></div></div><div class="phone_number_row"><div class="phone_numfield_button" id="phone_button_4"><i class="fa-solid fa-4"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-g"></i><i class="fa-solid fa-h"></i><i class="fa-solid fa-i"></i></span></div><div class="phone_numfield_button" id="phone_button_5"><i class="fa-solid fa-5"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-j"></i><i class="fa-solid fa-k"></i><i class="fa-solid fa-l"></i></span></div><div class="phone_numfield_button" id="phone_button_6"><i class="fa-solid fa-6"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-m"></i><i class="fa-solid fa-n"></i><i class="fa-solid fa-o"></i></span></div></div><div class="phone_number_row"><div class="phone_numfield_button" id="phone_button_7"><i class="fa-solid fa-7"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-p"></i><i class="fa-solid fa-q"></i><i class="fa-solid fa-r"></i><i class="fa-solid fa-s"></i></span></div><div class="phone_numfield_button" id="phone_button_8"><i class="fa-solid fa-8"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-t"></i><i class="fa-solid fa-u"></i><i class="fa-solid fa-v"></i></span></div><div class="phone_numfield_button" id="phone_button_9"><i class="fa-solid fa-9"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-w"></i><i class="fa-solid fa-x"></i><i class="fa-solid fa-y"></i><i class="fa-solid fa-z"></i></span></div></div><div class="phone_number_row"><div class="phone_numfield_button" id="phone_button_star"><i class="fa-solid fa-asterisk"></i></div><div class="phone_numfield_button" id="phone_button_0"><i class="fa-solid fa-0"></i><br><span class="phone_numfield_sup"><i class="fa-solid fa-plus"></i></span></div><div class="phone_numfield_button" id="phone_button_sharp"><i class="fa-solid fa-hashtag"></i></div></div><div class="phone_number_row"><div class="phone_numfield_func_button addcontact"><i class="fa-solid fa-user-plus"></i></div><div class="phone_numfield_func_button pickup" id="phone_pickup"><i class="fa-solid fa-phone"></i></div><div class="phone_numfield_func_button adressbook"><i class="fa-solid fa-address-book"></i></div></div></div></div>';
        if (phone_cache.indexOf(element) == -1)
            phone_cache.push(element);
        $("#phone_container").append(element);
    });
    $(document).on('keydown', '#phone_number_input', function(e){
        let allowedKeys = ['0','1','2','3','4','5','6','7','8','9','*','#'];
        if (allowedKeys.indexOf(e.key) === -1){
            e.preventDefault();
        }
    });
    $(document).on('click', '#phone_del', function(e){
        let str = $("#phone_number_input").html();
        $("#phone_number_input").html(str.slice(0, -1));
    });
    $(document).on('click', '#phone_button_1', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '1');
    });
    $(document).on('click', '#phone_button_2', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '2');
    });
    $(document).on('click', '#phone_button_3', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '3');
    });
    $(document).on('click', '#phone_button_4', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '4');
    });
    $(document).on('click', '#phone_button_5', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '5');
    });
    $(document).on('click', '#phone_button_6', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '6');
    });
    $(document).on('click', '#phone_button_7', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '7');
    });
    $(document).on('click', '#phone_button_8', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '8');
    });
    $(document).on('click', '#phone_button_9', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '9');
    });
    $(document).on('click', '#phone_button_0', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '0');
    });
    $(document).on('click', '#phone_button_star', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '*');
    });
    $(document).on('click', '#phone_button_sharp', function(e){
        $("#phone_number_input").html($("#phone_number_input").html() + '#');
    });
    $(document).on('click', '#phone_pickup', function(e){
        alt.emitServer('mr-core:phone:phone:callout', $("#phone_number_input").html());
    /*if ($("#phone_number_input").html() == "*#06#")
        //eigene seriennummer zeigen
    if ($("#phone_number_input").html() == "*135#")
        //eigene handynummer zeigen
    if ($("#phone_number_input").html() == "110")
        //polizei
    if ($("#phone_number_input").html() == "112")
        //notruf
    */
    });
});