var array = []
 +var stringarray = array.toString();
  // var inputarray = input.split('');

 -var counter = function(input) {
 +var counter = function(input, name) {
    for (var i=0; i<=input; i++) {
      array.push(i);
      if (array[i] % 3 === 0) {
      array[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
      console.log(i);
    } if (array[i] % 10 === 0) {
 -    array[i] = "Beep!"}
 -  // } else if (array.forEach(array, 1)){
 -  //   array[i] = "Boop!"
 -  // }
 +    array[i] = "Beep!"
 +  } if (array[i] % 10 === 1) {
 +      array[i] = "Boop!"
 +    }
    }
  }
  // if (result.charAt(i) === 1) {
 @@ -35,14 +36,15 @@ $(document).ready(function() {
    $("form#evaluate").submit(function(event) {
      var input = parseInt($("input#number").val());
      event.preventDefault();
 -
 +    // var name = $("input#name").val()
      var result = counter(input);
      debugger;
      // if (!result) {
      //   console.log("keep working");
      // } else {
      //   console.log(dave);
      // }
 -      $("#result").text(array);
 +      $("#result").show();
 +      $(".contain").text(array);
    });
  });
