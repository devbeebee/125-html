function showHide(idstring) {
    console.log(idstring);
    if ($("#" + idstring).hasClass("btn-outline-primary")) {
        $("#" + idstring).removeClass("btn-outline-primary");
        $("#" + idstring).addClass("btn-outline-info");
        $("#" + idstring).text(" HIDDEN ");
    }else{
        $("#" + idstring).removeClass("btn-outline-info");
        $("#" + idstring).addClass("btn-outline-primary");
        $("#" + idstring).text(" SHOWING ");
    }
}