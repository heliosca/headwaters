document.addEventListener("turbolinks:load", function() {
  $("textarea.validate, input.validate").focus(function() {
    if ($(this).hasClass("error")) {
      $(this).removeClass("error");
    }
  });

  /// validate then send contact form ///
  $(".contact-form").submit(function (event) {
    event.preventDefault();

    var validation = new FormValidator(this).validateForm();
    var data = $(this).serialize();

    if (validation) {
      $(".contact-button").attr("disabled", true).val("Please wait...").css("cursor", "default");
      $("form").hide();
      $(".loading-icon").show();
      $.ajax({
          url: this.action,
          method: this.method,
          data: data,
          dataType: "json"
      })
      .done(formSuccess)
      .fail(function(response){
        console.log("error", response);
      });
    }
  });

  function formSuccess() {
    $(".loading-icon").hide();
    $('.user-message').fadeIn();
  }
});