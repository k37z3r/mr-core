element = '<section id="phone_appstore" class="phone_bgr_appstore_icon"><i class="fa-brands fa-app-store phone_bottom_icons phone_top_icons phone_appstore_icon"></i><section>';
phone_top_apps_arr.push(element);
insert_apps_to_start();
$(document).ready(function(){
    $(document).on('click', '#phone_appstore', function(e) {
        $("#phone_container").html("");
        let list = list_app_store_apps();
        element='<input type="hidden" style="display:none;" value="phone_appstore" class="fake_id_to_load_from_cache">'+list;
        if (phone_cache.indexOf(element) == -1)
            phone_cache.push(element);
        $("#phone_container").append(element);
    });
});
function list_app_store_apps(){
    let ret = "<div id='appstore_overview'><table cellspacing='0' cellpadding='2px' style='background-color: hsla(110, 0%, 70%, 1);padding: 5px;'>";
    for (let i = 0; i < app_store.length; i++){
        ret += "<tr><td colspan='2' align='center' style='border: 1px solid black;font-weight: bolder;text-decoration-line: underline overline;'>" + app_store[i][0] + "</td></tr><tr><td style='border-left:1px solid black;' valign='top'>" + app_store[i][2] + "</td><td style='border-right:1px solid black;' valign='center'>" + app_store[i][1] + "</td></tr><tr><td colspan='2' style='border-right:1px solid black; border-left:1px solid black;border-bottom:1px solid black;' id='td_" + app_store[i][0] + "'>" + ((is_installed_app(app_store[i][0]))?"<kbd class='appStoreButton' onclick='uninstall_app(\"" + app_store[i][0] + "\")'>" + language_array[6] + "</kbd>&nbsp;&nbsp;&nbsp;<kbd class='appStoreButton' onclick='open_app(\"" + app_store[i][3] + "\")'>" + language_array[7] + "</kbd>":"<kbd class='appStoreButton' onclick='install_app(\"" + app_store[i][0] + "\", \"" + app_store[i][3] + "\" )'>" + language_array[5] + "</kbd>") + "</td></tr>";
    }
    ret += "</table></div>"
    return ret;
}
function open_app(appid){
    $("#phone_container").html("");
    $("#phone_container").html('<div id="' + appid + '">loading...</div>');
    $("#" + appid).click();
}
function install_app(app, appid){
    installed.push(app);
    localStorage.setItem("installed_apps", JSON.stringify(installed));
    $("#td_" + app).html("");
    $("#td_" + app).html("<kbd class='appStoreButton' onclick='uninstall_app(\"" + app + "\")'>" + language_array[6] + "</kbd>&nbsp;&nbsp;&nbsp;<kbd class='appStoreButton' onclick='open_app(\"" + appid + "\")'>" + language_array[7] + "</kbd>");
}
function uninstall_app(app){
    let findapp = installed.indexOf(app);
    installed.splice(findapp, 1);
    localStorage.setItem("installed_apps", JSON.stringify(installed));
    $("#td_" + app).html("");
    $("#td_" + app).html("<kbd class='appStoreButton' onclick='install_app(\"" + app + "\")'>" + language_array[5] + "</kbd>");
}