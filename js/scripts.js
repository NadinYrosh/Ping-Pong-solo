// $(document).ready(function() {
//   $("#submit-result").click(function(event) {
//     event.preventDefault();
//     $("#output li").remove();
//     var userInput = $("#user-input").val();
//     for (var i = 1; i <= userInput; i += 1) {
//       if (i % 15 === 0){
//         $("#output").append("<li>PingPong</li>");
//       } else if(i % 3 === 0){
//         $("#output").append("<li>Ping</li>");
//       } else if (i % 5 === 0){
//           $("#output").append("<li>Pong</li>");
//       } else {
//         $("#output").append("<li>" + i + "</li>");
//       }
//     }
//   });
// });
var pingPong = function(num){
  var userInput = parseInt(num);
  var result = [];
  for (var i = 1; i <= userInput; i += 1) {
    if (i % 15 === 0){
      result.push("<li>" + "PingPong" + "</li>"); //?? is it the right way to display it
      // $("#output").append("<li>PingPong</li>");
    } else if(i % 3 === 0){
      result.push("<li>" + "Ping" + "</li>");
      // $("#output").append("<li>Ping</li>");
    } else if (i % 5 === 0){
      result.push("<li>" + "Pong" + "</li>");
        // $("#output").append("<li>Pong</li>");
    } else {
      result.push("<li>" + i + "</li>");
      // $("#output").append("<li>" + i + "</li>");
    }
  }
  return result;
}


$(document).ready(function() {
  $("#submit-result").click(function(event) {
    event.preventDefault();
    $("#output li").remove();
    var userInput = $("#user-input").val();
    var result = pingPong(userInput);//need a var name!!!!
    result.forEach(function(item) { //need a foreach loop to go throgh the result array
      $("#output").append(item);
    });
  });
});
