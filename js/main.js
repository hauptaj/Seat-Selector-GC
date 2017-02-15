//this is a modal, that pops using a photo
//<a href="path/to/img.jpg" class="ssi-imgBox">My cat</a>
//<div class="modal">
//
// <div class="modal-body">
//   <h5>Popover in a modal</h5>
//   <p>This <a href="#" role="button" class="btn btn-secondary popover-test"
//   title="Popover title" data-content="Do you wish to reserve this Seat?">choose</a> </p>
//   <hr>

function userInfo(firstName, lastName, email, phone) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
}

var seatArray = [];

$(document).ready(function() {
  // $("img.seat").on('click', function() {
  //   $(this).attr('src', "assets/selectSeat.png");
  //   console.log($(this).attr('id'));
  //   //form class changes to visible
  // });


  // $("img.seat").on('click', function() {
  //   $('[data-toggle="tooltip"]').tooltip();
  // });

  $('button#loadButton').on('click', function() {
    var practice =  new userInfo($("#firstName").val(), $("#lastName").val(), $("#email").val(), $("#phone").val());
    console.log(practice);
    seatArray.push(practice);
    console.log(seatArray);
    // console.log($("#firstName").val());
    // console.log($("#lastName").val());
    // console.log($("#email").val());
    // console.log($("#phone").val());
  });
});
// var a1 = new userInfo("Spencer", "White", "swhite215@live.com", 3133483830);
// console.log(a1);
