document.addEventListener("turbolinks:load", function() {
  var hwCookie = document.cookie.match(/^(.*;)?\s*HeadwatersCaCookie\s*=\s*[^;]+(.*)?$/);

  if (!hwCookie) {
    setTimeout(function() {
      $("#subscribe-window").fadeIn(400);
    }, 1500);
  }

  $("#subscribe-window .close").click(function() {
    $("#subscribe-window").fadeOut();
  });

  $("#subscribe-form").submit(function() {
    event.preventDefault();
    console.log($(this).attr('action'));

    var url = $(this).attr('action'),
        data = $(this).serialize(),
        success = subscribeSuccess;

    $.post(url, data, success);
  });

  function subscribeSuccess(response) {
    console.log(response);
    $("#subscribe-window").fadeOut();
    setCookie();
  }

  function setCookie() {
    document.cookie = "HeadwatersCaCookie=scrumptious";
  }
});
