document.addEventListener("turbolinks:load", function() {

  $("#modal-button").click(function() {
    transitionInDimmer();
    transitionInModal();
  });

  $(".modal .deny, #dimmer").click(function() {
    transitionOutModal();
    transitionOutDimmer();
  });


  function transitionInModal() {
    $(".modal").css("display", "block");
    $(".modal").removeClass("hidden");
    $(".modal").addClass("animating scale in");

    $(".modal").on("animationend", function(event) {
      $(this).removeClass("animating scale in");
      $(this).addClass("visible active");
      $(".modal").off("animationend");
    });
  }

  function transitionInDimmer() {
    $("#dimmer").css("display", "block");
    $("#dimmer").removeClass("hidden");
    $("#dimmer").addClass("animating fade in");

    $("#dimmer").on("animationend", function(event) {
      $(this).removeClass("animating fade in");
      $(this).addClass("visible active");
      $("#dimmer").off("animationend");
    });
  }

  function transitionOutModal() {
    $(".modal").addClass("animating scale out");

    $(".modal").on("animationend", function(event) {
      $(".modal").css("display", "");
      $(this).removeClass("visible active animating scale out");
      $(this).addClass("hidden");
      $(".modal").off("animationend");
    });
  }

  function transitionOutDimmer() {
    $("#dimmer").addClass("animating fade out");

    $("#dimmer").on("animationend", function(event) {
      $("#dimmer").css("display", "");
      $(this).removeClass("visible active animating fade out");
      $(this).addClass("hidden");
      $("#dimmer").off("animationend");
    });
  }
});
