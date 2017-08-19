document.addEventListener("turbolinks:load", function() {
  var hwCookie = document.cookie.match(/^(.*;)?\s*HeadwatersCaCookie\s*=\s*[^;]+(.*)?$/);

  setTimeout(function() {
    $("#subscribe-window").fadeIn(400);
  }, 1500);

  $("#subscribe-window .close").click(function() {
    $("#subscribe-window").fadeOut();
  });

  $("#subscribe-form").submit(function() {
    event.preventDefault();
    console.log($(this).attr('action'));

    var url = $(this).attr('action'),
        data = $(this).serialize(),
        success = function(response) {
          console.log(response);
        };

    $.post(url, data, success, 'json');
  });
});
