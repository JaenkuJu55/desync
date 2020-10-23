$( document ).ready(function(){
  $(".preload").removeClass("fade");
  $('.preload').delay(1000).queue(function (next) { 
  $(this).hide(); 
  next(); 
});
})


var path = document.querySelector('#svg_4');
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;

// When the page scrolls...
window.addEventListener("scroll", function(e) {
 
    // What % down is it? 
    var scrollPercentage = (document.documentElement.scrollTop -400 + document.body.scrollTop) / (document.documentElement.scrollHeight-400 - document.documentElement.clientHeight);
      
    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;
    
    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;
    

      // When complete, remove the dash array, otherwise shape isn't quite sharp
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }

  });