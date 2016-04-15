$(document).ready(function () {
    $(document).click(function (e) {
        if ($(e.target).closest(".topbar-current,.topbar-notifications,.toggled").length) {
            $(".toggled").toggle();
            e.preventDefault();
        } else {
            $(".toggled").hide();
        }

    });
});

$("li.myclass").hover(function(){
     $(this).children("img").attr("src", $(this).children("img").attr("src").replace("#black", "#white") );
     }, function(){
     $(this).children("img").attr("src", $(this).children("img").attr("src").replace("#white", "#black") );
}); 

$(".app-title").each(function () {
    text = $(this).text();
    if (text.length > 12) {
        $(this).html(text.substr(0, 186) + '<span class="elipsis">' + text.substr(186) + '</span><a class="elipsis" href="#">....</a>');
    }
});

function whiteline() {
document.getElementById("handle-line").style.background="#fff"
}

function destroywhite() {
document.getElementById("handle-line").style.background="rgba(255, 255, 255, 0.5)"
}