function crossFader(){
  var interval, $next, $active;

  this.init = function() {
    interval = setInterval(crossFade, 3000);
  };

  this.stop = function() {
    clearInterval(interval);
  };

  function crossFade() {
    $active = $('.about-images .active');
    $next = ($active.next().length > 0) ? $active.next() : $('.about-images img:first');
    $next.css('z-index',2);//move the next image up the pile
    $active.fadeOut(1500, function() {//fade out the top image
      $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the image
      $next.css('z-index',3).addClass('active');//make the next image the top one
    });
  }
}

