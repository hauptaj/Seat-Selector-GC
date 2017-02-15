$(document).ready(function() {
  $("img.seat").on('click', function() {
    $(this).attr('src', "assets/occupiedSeat.png");
  });
});
