$(document).ready(function() {

    //create array to store all user information
    var seatArray = [];

    //initially start the form as hidden.
    $('form').hide();
    $('div.popup').hide();

    //form always slidesDown when seat is selected.
    $('img.seat').on('click', function() {
      //make sure form only drops when seat is open or selected.
      if ($(this).attr('src') === 'assets/openSeat.png' || $(this).attr('src') === 'assets/selectSeat.png') {
      $('div.popup').slideDown('slow');
      $('form').slideDown('slow');
    }
  });

    // function to alter seat images and input seat ID.
    $("img.seat").on('click', function() {
        //change open seat to selected seat
        if ($(this).attr('src') === 'assets/openSeat.png') {
            $(this).attr('src', 'assets/selectSeat.png');
            var seatId = $(this).attr("id");
            $("#seatPlace").val(seatId);
            //change selected seats to open seats.
        } else if ($(this).attr('src') === 'assets/selectSeat.png') {
            $(this).attr('src', 'assets/openSeat.png');
            $("#seatPlace").val('');
            //display info for occupied seats.
        } else if ($(this).attr('src') === 'assets/occupiedSeat') {
            for (var i = 0; i < seatArray.length; i++) {
                if ($(this).attr('id') === seatArray[i].seatPosition) {

                }
            }
        }
    });

    //function for tooltip hover Bootstrap*
    $(function() {
        $("img.seat").tooltip();
    });

    //submit button to store form information in array.
    $('button#loadButton').on('click', function() {

        var practice = new userInfo($("#seatPlace").val(), $("#firstName").val(), $("#lastName").val(), $("#email").val(), $("#phone").val());
        seatArray.push(practice);

        //function to change selected seats to occupied seats after submit confirmation.
        $('img.seat').each(function() {
            for (var i = 0; i < seatArray.length; i++) {
                if ($(this).attr('id') === seatArray[i].seatPosition) {
                    $(this).attr('src', "assets/occupiedSeat.png");
                    //method to adjust tooltip text to appropriate reserved data.
                    $(this).attr('title', "Reserved for: " + seatArray[i].firstName + " " + seatArray[i].lastName).tooltip('fixTitle');
                }
            }
        });

        //clear all previously entered values to reset form.
        $('#seatPlace').val('');
        $('#firstName').val('');
        $('#lastName').val('');
        $('#email').val('');
        $('#phone').val('');

    });

    //form slides up after submit.
    $('button#loadButton').on('click', function() {
        $('form').slideUp('slow');
        $('div.popup').slideUp('slow');
    })

    //constructor function to create object of person's information.
    function userInfo(seatPosition, firstName, lastName, email, phone) {
        this.seatPosition = seatPosition;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }

  
});
