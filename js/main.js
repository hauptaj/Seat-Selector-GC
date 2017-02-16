$(document).ready(function() {

    //create array to store all user information
    var seatArray = [];

    //identify clicked seat as chosen.
    $("img.seat").on('click', function() {
        $(this).attr('src', "assets/occupiedSeat.png");
    });

    //send seatID to form.
    $("img.seat").on("click", function() {
        var seatId = $(this).attr("id");
        $("#seatPlace").val(seatId);
    });

    //create tooltip when hovering
    $("img.seat").on('hover', function() {
      $('[data-toggle="tooltip"]').tooltip();
    });

    //submit button to store form information in array.
    $('button#loadButton').on('click', function() {
        var practice = new userInfo($("#seatPlace").val(), $("#firstName").val(),$("#lastName").val(), $("#email").val(), $("#phone").val());
        console.log(practice);
        seatArray.push(practice);
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
