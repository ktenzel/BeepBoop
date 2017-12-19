//backend
var array = []

var counter = function(input) {
  for (var i=0; i<=input; i++) {
    array.push(i);
    if (array[i] % 3 === 0) {
      array[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (i.toString().includes("0")) {
    array[i] = "Beep!";
  } else if (i.toString().includes("1")) {
    array[i] = "Boop!";
  } else {

  }
  }
    return array;
}

//frontend
$(document).ready(function() {
  $("form#evaluate").submit(function(event) {
    var input = parseInt($("input#number").val());
    event.preventDefault();
    var result = counter(input);
    debugger;
      $("#result").show();

      for(var i = 0; i < result.length; i++) {
        namelist = $("#result-list").append("<li>" + array[i] + "</li>");
      }
  });
});
