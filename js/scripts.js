$(document).ready(function(){
  $('#choose').submit(function(event){
    var choice1;
    var choice2;
    var choice3;
    var choice4;
    var total;

    choice1 = parseInt($('#why').val());
    choice2 = parseInt($('#animal').val());
    choice3 = parseInt($('#topic').val());
    choice4 = parseInt($('#who').val());
    total = choice1 + choice2 + choice3 + choice4;
    // console.log(total);

    if (total <= 3) {
      $("#output").text("Harry");
    } else if (total > 3 || total <= 6) {
      $("#output").text("Ron");
    } else if (total > 6 || total <= 9) {
       $("#output").text("Hermione");
    } else if (total > 9 || total <= 12) {
       $("#output").text("Draco");
    }

    event.preventDefault();
  });
});
