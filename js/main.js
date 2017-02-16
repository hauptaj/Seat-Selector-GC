$(document).ready(function() {

    //create array to store all user information
    var seatArray = [];

    // identify clicked seat as chosen.
    $("img.seat").on('click', function() {
        $(this).attr('src', "assets/selectSeat.png");
        })
    });

    //send seatID to form.
    $("img.seat").on("click", function() {
        var seatId = $(this).attr("id");
        $("#seatPlace").val(seatId);
    });

    //function for tooltip hover Bootstrap*
    $( function() {
      $( "img.seat" ).tooltip();
    });

    //submit button to store form information in array.
    $('button#loadButton').on('click', function() {
        var practice = new userInfo($("#seatPlace").val(), $("#firstName").val(),$("#lastName").val(), $("#email").val(), $("#phone").val());
        seatArray.push(practice);

    //function to change selected seats to occupied seats after submit confirmation.
        $('img.seat').each(function() {
          for (var i = 0; i < seatArray.length; i++) {
            if ($(this).attr('id') === seatArray[i].seatPosition) {
              $(this).attr('src', "assets/occupiedSeat.png");
            }
          }
        })

    //clear all previously entered values to reset form.
      $('#seatPlace').val('');
      $('#firstName').val('');
      $('#lastName').val('');
      $('#email').val('');
      $('#phone').val('');



    });

    //constructor function to create object of person's information.
    function userInfo(seatPosition, firstName, lastName, email, phone) {
        this.seatPosition = seatPosition;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }

});
