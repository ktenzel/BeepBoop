//backend
var array = []

var counter = function(input, name) {
  for (var i=0; i<=input; i++) {
    array.push(i);
    if (array[i] % 10 === 0) {
    array[i] = "Beep!";
    $("#result-list").append("<li>" + array[i] + "</li>")
    console.log(i);
  } else if (array[i] % 10 === 1) {
    array[i] = "Boop!";
    $("#result-list").append("<li>" + array[i] + "</li>")
  } else if (array[i] % 3 === 0) {
      array[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
      $("#result-list").append("<li>" + array[i] + "</li>")
  } else if (i.toString().includes("0")) {
    array[i] = "Beep!";
    $("#result-list").append("<li>" + array[i] + "</li>")
  } else if (i.toString().includes("1")) {
    array[i] = "Boop!";
    $("#result-list").append("<li>" + array[i] + "</li>")
  } else {
    $("#result-list").append("<li>" + array[i] + "</li>")
  }
  }
}

//frontend
$(document).ready(function() {
  $("form#evaluate").submit(function(event) {
    var input = parseInt($("input#number").val());
    event.preventDefault();
    var result = counter(input);
    debugger;
      $("#result").show();

      var listArray = function() {
        for(i = 0; i < array.length; i++) {
          $("#result-list").append("<li>" + array[i] + "</li>");
        }
    }

  });
});
