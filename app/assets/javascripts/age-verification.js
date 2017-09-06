document.addEventListener("turbolinks:load", function() {
  var ageCookie = document.cookie.match(/^(.*;)?\s*HeadwatersCaAgeCookie\s*=\s*[^;]+(.*)?$/),
      $dimmer = $("#dimmer"),
      $targetModal = $("#age-verification-modal");

  if (!ageCookie) {
    setTimeout(function() {
      $targetModal.css("margin-top", "-" + $(".modal").height()/2 + "px");
      globals.modalIn($targetModal, "scale");
      globals.modalIn($dimmer, "fade");
      // document.getElementById("dimmer").addEventListener("touchmove", prevent, {passive: false});
      $("body").css("overflow", "hidden");
    }, 1500);
  }

  $("#not-of-age").click(function() {
    globals.modalOut($targetModal, "scale");
    globals.modalOut($dimmer, "fade");
    window.location.replace("https://cannabis.ca.gov/");
  });

  $("#of-age").click(function() {
    globals.modalOut($targetModal, "scale");
    globals.modalOut($dimmer, "fade");
    // dimmer.removeEventListener("touchmove", prevent);
    $("body").css("overflow", "visible");
    setCookie();
  });

  function setCookie() {
    document.cookie = "HeadwatersCaAgeCookie=aged; expires="+globals.dateYearFromNow();
  }
});
