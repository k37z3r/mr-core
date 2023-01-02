let show = false;
if (window.alt === undefined) {
    window.alt = {
        emit: () => {},
        on: () => {},
    };
}
var opened = false;
var showhelp = false;
var msg = "";
var language = [];
var tp_help = false;
var sv_help = false;
alt.on("mr-core:discord:closeChat", closeChat);
alt.on("mr-core:discord:openChat", openChat);
alt.on('mr-core:discord:set_help', (rule) => {
    if (rule.can_tp == "yes")
        tp_help = true;
    else
        tp_help = false;
    if (rule.can_sv == "yes")
        sv_help = true;
    else
        sv_help = false;
});
function openChat(lang_array){
    if (!opened){
        $(".container").animate({'bottom':'0px'}, 500, function() {   
            language = lang_array;
            opened = true;
            $("#msg").focus();
        });
    }
}
function closeChat(){
    if (opened){
        $(".container").animate({'bottom':'-400px'}, 500);
        $("#msg").focus();
        opened = false;
    }
}
function set_date_time(timestamp){
    var date = new Date(timestamp);
    var newdate = date.toLocaleString()
    return newdate;
}
$(document).ready(function(){
    $(document).on('keyup', '#msg', function(e) {
        if (e.which == 13){ // Key: Enter
            e.preventDefault();
            alt.emit('mr-core:discord:sendmessage', $("#msg").html());
            $("#msg").html("");
        }
    });
    $(document).on('click', '.fa-rectangle-xmark', function(e){
        alt.emit('mr-core:discord:close_chat');
    });
    $(document).on('click', '.fa-circle-question', function(e){
        if (showhelp){
            showhelp = false;
            $('.helpdesk').fadeOut(500);
        }
        else{
            $('.helpdesk').html(((tp_help)?`${language[0]}: <span style="font-weight:bolder">/tp X,Y,Z</span><br>${language[1]}: <span style="font-weight:bolder">/tp2player playername</span><br>${language[3]}: <span style="font-weight:bolder">/tp2wp</span><br>`:'') + ((sv_help)?`${language[4]}: <span style="font-weight:bolder">/spawnvehicle</span><br>`:'') + language[2] + ': <span style="font-weight:bolder">/calladmin</span>');
            showhelp = true;
            $('.helpdesk').fadeIn(500);
        }
    });
});
alt.on('mr-core:discord:setMessages', (messages) => {
    $('#messages').html("");
    let msg = "";
    for (let i = 0; i < messages.length; i++){
        if (messages[i][2].length > 0){
            msg += set_date_time(messages[i][0]) + ` <span style="color: ${messages[i][3]}">${messages[i][1]}</span>: ${messages[i][2]}<br>`;
        }
    }
    $('#messages').html(msg);
});