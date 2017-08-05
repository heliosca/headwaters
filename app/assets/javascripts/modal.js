document.addEventListener("turbolinks:load", function() {

  $("#modal-button").click(function() {
    $(".modal").css("display", "block");
    $(".modal").removeClass("hidden");
    $(".modal").addClass("animating scale in");

    $(".modal").on("animationend", function(event) {
      $(this).removeClass("animating scale in");
      $(this).addClass("visible active");
      $(".modal").off("animationend");
    });
  });

  $(".modal .deny").click(function() {
    $(".modal").addClass("animating scale out");

    $(".modal").on("animationend", function(event) {
      $(".modal").css("display", "");
      $(this).removeClass("visible active animating scale out");
      $(this).addClass("hidden");
      $(".modal").off("animationend");
    });
  });
});
