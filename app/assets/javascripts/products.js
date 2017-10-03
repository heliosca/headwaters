document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/products") {
    var target;

    $("#vape-button, #all-button, #flower-button").click(function() {
      if (!$(this).hasClass("active")) {
        $(".active").removeClass("active");
        $(this).addClass("active");
        target = $(this).data("target");
        $(".products-container").hide();
        $(target).css("display", "flex");
      }
      
    });
  }
});