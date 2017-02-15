$(document).ready(function() {

    var seatArray = [];

    $("img.seat").on('click', function() {
        $(this).attr('src', "assets/selectSeat.png");
        //form class changes to visible
    });

    $("img.seat").on("click", function() {
        var seatId = $(this).attr("id");
        console.log(seatId);
    });

    $("img.seat").on('click', function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('button #loadButton').on('click', function() {
        var practice = new userInfo($("#firstName").val(), $("#lastName").val(), $("#email").val(), $("#phone").val());
        console.log(practice);
        seatArray.push(practice);
        console.log(seatArray);
        console.log($("#firstName").val());
        console.log($("#lastName").val());
        console.log($("#email").val());
        console.log($("#phone").val());
    });

    function userInfo(firstName, lastName, email, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }

});
