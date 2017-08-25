$( document ).ready(function() {
///first we need to tell our skript to listen for a mouse click on the burger button.

  $(".burger-button").click(function(){
    $(".burger-menu").slideToggle();
    $(".burger-button").toggleClass("active");
  })
});
