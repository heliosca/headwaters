document.addEventListener("turbolinks:load", function() {
  var $dimmer = $("#dimmer"),
      $targetModal;

  $("[data-modal-target]").click(function(event) {
    event.preventDefault();

    $targetModal = $($(this).data("modal-target"));
    $targetModal.css("margin-top", "-" + $(".modal").height()/2 + "px");
    globals.modalIn($targetModal, "scale");
    globals.modalIn($dimmer, "fade");
    $("body").css("overflow", "hidden");
  });

  $(".modal .close").click(function() {
    if (!$targetModal) {
      $targetModal = $(this).parent();
    }
    globals.modalOut($targetModal, "scale");
    globals.modalOut($dimmer, "fade");
    $("body").css("overflow", "visible");
  });
});
