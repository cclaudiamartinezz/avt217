$(document).ready(function() {
    // run function on initial page load
    clickDemo();
});

function clickDemo() {
  $('#topSquare').hover(function(){
    $('#topSquare').toggleClass('off');
  });
   $('#bottomSquare').click(function(){
    $('#topSquare').removeClass('off');
  });
}
