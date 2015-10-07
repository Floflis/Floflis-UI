$(document).ready(function() {
  $("#title").html("Loading - Modern OS");
  $("#bootscreen").html("<span class='boot-text'>Loading....</span><span class='boot-status'>Undefined</span><div class='bootball'></div>")
})

window.onload = function() {
  $("#title").html("Modern OS");
  var p = document.getElementById('onlyboot');
  var pdiv = document.getElementById('onlyboot');
  p.remove(pdiv)
}