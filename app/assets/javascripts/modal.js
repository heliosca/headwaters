document.addEventListener("turbolinks:load", function() {
  var $dimmer = $("#dimmer"),
      $targetModal;

  $("[data-modal-target]").click(function() {
    $targetModal = $($(this).data("modal-target"));
    $targetModal.css("margin-top", "-" + $(".modal").height()/2 + "px");
    animateIn($targetModal, "scale");
    animateIn($dimmer, "fade");
  });

  $(".modal .deny, #dimmer").click(function() {
    animateOut($targetModal, "scale");
    animateOut($dimmer, "fade");
  });

  function animateIn(element, animation) {
    element.css("display", "block");

    element.removeClass("hidden");
    element.addClass("animating " + animation + " in");

    element.on("animationend", function(event) {
      element.removeClass("animating " + animation + " in");
      element.addClass("visible active");
      element.off("animationend");
    });
  }

  function animateOut(element, animation) {
    element.addClass("animating " + animation + " out");

    element.on("animationend", function(event) {
      element.removeClass("visible active animating " + animation + " out");
      element.css("display", "block");
      element.addClass("hidden");
      element.off("animationend");
    });
  }
});
