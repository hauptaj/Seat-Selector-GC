//this is a modal, that pops using a photo
//<a href="path/to/img.jpg" class="ssi-imgBox">My cat</a>
//<div class="modal">
// 
// <div class="modal-body">
//   <h5>Popover in a modal</h5>
//   <p>This <a href="#" role="button" class="btn btn-secondary popover-test"
//   title="Popover title" data-content="Do you wish to reserve this Seat?">choose</a> </p>
//   <hr>

$(document).ready(function() {
  $("img.seat").on('click', function() {
    $(this).attr('src', "assets/occupiedSeat.png");
  });
<<<<<<< HEAD
=======

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

>>>>>>> 40a317e5ecbcb8729d499936459da2785acb0a2b
});
