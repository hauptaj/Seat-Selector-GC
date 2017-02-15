$(document).ready(function() {

    var seatArray = [];

    $("img.seat").on('click', function() {
        $(this).attr('src', "assets/selectSeat.png");
        //form class changes to visible
    });

    $("img.seat").on("click", function() {
        var seatId = $(this).attr("id");
        $("#seatPlace").val(seatId);
        console.log(seatId);
    });
    //get this variblae into the form.


    $("img.seat").on('hover', function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('button#loadButton').on('click', function() {
        var practice = new userInfo($("#seatPlace").val(), $("#firstName").val(),$("#lastName").val(), $("#email").val(), $("#phone").val());
        console.log(practice);
        seatArray.push(practice);
        console.log(seatArray);
        console.log($("#firstName").val());
        console.log($("#lastName").val());
        console.log($("#email").val());
        console.log($("#phone").val());
        console.log(practice.seatPosition);
        $(practice.seatPosition).attr("src", "assets/occupiedSeat.png");
    });

    function userInfo(seatPosition, firstName, lastName, email, phone) {
        this.seatPosition = seatPosition;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }

});
