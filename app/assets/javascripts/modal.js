document.addEventListener("turbolinks:load", function() {
  var $dimmer = $("#dimmer"),
      $targetModal;

  $("[data-modal-target]").click(function() {
    $targetModal = $($(this).data("modal-target"));
    $targetModal.css("margin-top", "-" + $(".modal").height()/2 + "px");
    globals.modalIn($targetModal, "scale");
    globals.modalIn($dimmer, "fade");
  });

  // $(".modal .deny, #dimmer").click(function() {
  //   globals.modalOut($targetModal, "scale");
  //   globals.modalOut($dimmer, "fade");
  // });
});
