$(document).ready(function () {
$("li.navi-item").hover(function() {
  $(this).find("img").attr("src", $(this).find("img").attr("src").replace("#black", "#white"));
}, function() {
  $(this).find("img").attr("src", $(this).find("img").attr("src").replace("#white", "#black"));
});
});

function whiteline() {
document.getElementById("handle-line").style.background="#fff"
}

function destroywhite() {
document.getElementById("handle-line").style.background="rgba(255, 255, 255, 0.5)"
}