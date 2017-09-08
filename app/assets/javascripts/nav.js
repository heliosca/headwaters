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
