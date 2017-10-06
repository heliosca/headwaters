var globals = {
  HWcrossFader: null,
  subscribeShown: false,
  optedOut: false,
  modalIn: function(element, animation) {
    element.css("display", "block");

    element.removeClass("hidden");
    element.addClass("animating " + animation + " in");

    element.on("animationend", function(event) {
      element.removeClass("animating " + animation + " in");
      element.addClass("visible active");
      element.off("animationend");
    });
  },
  modalOut: function(element, animation) {
    element.addClass("animating " + animation + " out");

    element.on("animationend", function(event) {
      element.removeClass("visible active animating " + animation + " out");
      element.css("display", "block");
      element.addClass("hidden");
      element.off("animationend");
    });
  },
  deleteAllCookies: function() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  },
  dateYearFromNow: function() {
    return new Date(new Date().getTime()+365*24*60*60*1000).toGMTString();
  }
};
