document.addEventListener("turbolinks:load", function() {

  $("#modal-button").click(function() {
    animateIn(".modal", "scale");
    animateIn("#dimmer", "fade");
  });

  $(".modal .deny, #dimmer").click(function() {
    animateOut(".modal", "scale");
    animateOut("#dimmer", "fade");
  });

  function animateIn(selector, animation) {
    var $animationElement = $(selector);
    $animationElement.css("display", "block");
    $animationElement.removeClass("hidden");
    $animationElement.addClass("animating " + animation + " in");

    $animationElement.on("animationend", function(event) {
      $animationElement.removeClass("animating " + animation + " in");
      $animationElement.addClass("visible active");
      $animationElement.off("animationend");
    });
  }

  function animateOut(selector, animation) {
    var $animationElement = $(selector);
    $animationElement.addClass("animating " + animation + " out");

    $animationElement.on("animationend", function(event) {
      $animationElement.removeClass("visible active animating " + animation + " out");
      $animationElement.css("display", "block");
      $animationElement.addClass("hidden");
      $animationElement.off("animationend");
    });
  }
});
