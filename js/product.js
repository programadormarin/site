
$(document).ready(function(){
    $('#demo-simpleLens-gallery .simpleLens-thumbnails-container img').simpleGallery({
        loading_image: 'img/loader.gif'
    });
    $('#demo-simpleLens-gallery .simpleLens-big-image').simpleLens({
        loading_image: 'img/loader.gif'
    });

    //Add your review
    function addReview() {
      var $ = jQuery;
      
      $('a[href="#reviews"].add-review').click(function(){
        $('.tabs #tab3').trigger('click');
        $('html, body').animate({
          scrollTop: $("#tab3").offset().top - 186
        }, 1000);
      });
    }

    addReview();

});

//Removing # tag
( function( $ ) {
   $( 'a[href="#reviews"]' ).click( function(e) {
      e.preventDefault();
   } );
} )( jQuery );