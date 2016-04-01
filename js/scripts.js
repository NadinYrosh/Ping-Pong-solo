$(document).ready(function() {
  $("#submit-result").click(function(event) {
    event.preventDefault();
    $("#output li").remove();
    var userInput = $("#user-input").val();
    for (var i = 1; i <= userInput; i += 1) {
      if (i % 15 === 0){
        $("#output").append("<li>PingPong</li>");
      } else if(i % 3 === 0){
        $("#output").append("<li>Ping</li>");
      } else if (i % 5 === 0){
          $("#output").append("<li>Pong</li>");
      } else {
        $("#output").append("<li>" + i + "</li>");
      }
    }
  });
});
