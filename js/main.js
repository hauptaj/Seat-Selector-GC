

$(document).ready(function() {
  $("img.seat").on('click', function() {
    $(this).attr('src', "assets/selectSeat.png");
    console.log($(this).attr('id'));
    //form class changes to visible
  });

  $("img.seat").on("click", function(){


    console.log($(this).attr("id"));
  });





  $("img.seat").on('click', function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

});

function userInfo(firstName, lastName, email, phone) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
}

var a1 = new userInfo("Spencer", "White", "swhite215@live.com", 3133483830);
console.log(a1);
