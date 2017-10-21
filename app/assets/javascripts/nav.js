document.addEventListener("turbolinks:load", function() {

  var pageTitle = window.location.pathname,
      $nav = $("#nav-bar"),
      navVisible = false;
      

  $('a[href="'+pageTitle+'"]').addClass("active");

  function toggleNavVisibility() {
    $nav.toggleClass("visible");
    navVisible = !navVisible;
  }

  if (pageTitle === "/") {
    var followVisible = true,
      $follow = $('#follow'),
      bottom = $(window).height() - $follow[0].getBoundingClientRect().bottom;

    $(window).scroll(function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (!navVisible) {
          toggleNavVisibility();
        }
      } else {
        if (navVisible) {
          toggleNavVisibility();
        }
      }

      if (document.body.scrollTop > bottom || document.documentElement.scrollTop > bottom) {
        if (followVisible) {
          $("#follow").fadeOut(200, function() {
            followVisible = false;
          });
          
        }
      } else if (document.body.scrollTop <= bottom|| document.documentElement.scrollTop <= bottom) {
        if (!followVisible) {
          $("#follow").fadeIn(200, function() {
            followVisible = true;
          });
        }
      }
    });

    // $(window).resize(function() {
    //   if (window.innerWidth > 767 && document.documentElement.scrollTop < 100) {
    //     $('.navbar.navbar-fixed-top, .nav-item > a.anchor-tag').css("background-color", "transparent");
    //   }
    // })
  } else {
    toggleNavVisibility();
  }

  $("#mobile-nav").click(function() {
    $nav.toggleClass("dropdown-active");
  });
});
