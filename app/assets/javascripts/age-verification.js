document.addEventListener("turbolinks:load", function() {
  var ageCookie = document.cookie.match(/^(.*;)?\s*HeadwatersCaAgeCookie\s*=\s*[^;]+(.*)?$/),
      subscribeCookie = document.cookie.match(/^(.*;)?\s*HeadwatersCaCookie\s*=\s*[^;]+(.*)?$/),
      $dimmer = $("#dimmer"),
      $ageModal = $("#age-verification-modal"),
      $subscribeModal = $('#subscribe-window');

  if (!ageCookie) {
    setTimeout(function() {
      $ageModal.css("margin-top", "-" + $(".modal").height()/2 + "px");
      globals.modalIn($ageModal, "scale");
      globals.modalIn($dimmer, "fade");
      // document.getElementById("dimmer").addEventListener("touchmove", prevent, {passive: false});
      $("body").css("overflow", "hidden");
    }, 1500);
  } else {
    if (!subscribeCookie && !globals.subscribeShown) {
      setTimeout(function() {
        $subscribeModal.css("margin-top", "-" + $(".modal").height()/2 + "px");
        globals.modalIn($subscribeModal, "scale");
        globals.modalIn($dimmer, "fade");
        globals.subscribeShown = true;
      }, 10000);
    }
  }

  $("#subscribe-form").submit(function() {
    event.preventDefault();

    var url = $(this).attr('action'),
        data = $(this).serialize(),
        success = subscribeSuccess;

    $.post(url, data, success);
  });

  function subscribeSuccess(response) {
    globals.modalOut($subscribeModal, "scale");
    globals.modalOut($dimmer, "fade");
    setSubscribeCookie();
  }

  function setSubscribeCookie() {
    document.cookie = "HeadwatersCaCookie=scumptious; expires="+globals.dateYearFromNow();
  }

  $("#not-of-age").click(function() {
    globals.modalOut($ageModal, "scale");
    globals.modalOut($dimmer, "fade");
    window.location.replace("https://cannabis.ca.gov/");
  });

  $("#of-age").click(function() {
    globals.modalOut($ageModal, "scale");
    globals.modalOut($dimmer, "fade");
    // dimmer.removeEventListener("touchmove", prevent);
    $("body").css("overflow", "visible");
    setAgeCookie();

    setTimeout(function() {
      $subscribeModal.css("margin-top", "-" + $(".modal").height()/2 + "px");
      globals.modalIn($subscribeModal, "scale");
      globals.modalIn($dimmer, "fade");
      // document.getElementById("dimmer").addEventListener("touchmove", prevent, {passive: false});
      $("body").css("overflow", "hidden");
    }, 450);
  });

  function setAgeCookie() {
    document.cookie = "HeadwatersCaAgeCookie=aged; expires="+globals.dateYearFromNow();
  }
});
