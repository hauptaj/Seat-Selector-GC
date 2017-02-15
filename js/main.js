$(document).ready(function() {
  $("img.seat").on('click', function() {
    $(this).attr('src', "assets/occupiedSeat.png");
  });
});

$(".leftImg").rotate({bind:{
  click: function(){
    $(this).rotate({
      angle: 0,
      center: ["50%", "100%"],
      animateTo:180
      })
    }
  }
});
