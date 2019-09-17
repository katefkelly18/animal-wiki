$(document).ready(function() {
  var animal = prompt("Between elephants, tigers, and penguins, which one would you like to learn more about?");

  if (animal === "elephant") {
    $("#elephant").show();
  } else if (animal === "tiger") {
      $("#tiger").show();
  }  else if (animal === "penguin"){
    $("#penguin").show();
  } else {
    $("#potato").show();
  }
});
