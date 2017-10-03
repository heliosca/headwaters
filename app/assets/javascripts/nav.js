document.addEventListener("turbolinks:load", function() {

  var pageTitle = window.location.pathname,
      $nav = $("#nav-bar"),
      navVisible = false,
      cannaVisible = true;

  $('a[href="'+pageTitle+'"]').addClass("active");

  function toggleNavVisibility() {
    $nav.toggleClass("visible");
    navVisible = !navVisible;
  }

  if (pageTitle === "/") {
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

      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (cannaVisible) {
          $("#concious-cannabis").fadeOut(200, function() {
            cannaVisible = false;
          });
          
        }
      } else if (document.body.scrollTop <= 300 || document.documentElement.scrollTop <= 300) {
        if (!cannaVisible) {
          $("#concious-cannabis").fadeIn(200, function() {
            cannaVisible = true;
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
