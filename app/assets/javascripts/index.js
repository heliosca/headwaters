document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/") {
    if (!globals.HWcrossFader) {
      globals.HWcrossFader = new crossFader();
    }
    globals.HWcrossFader.init();
    globals.crossFaderRunning = true;
  } else {
    if (globals.crossFaderRunning) {
      globals.HWcrossFader.stop();
      globals.crossFaderRunning = false;
    }
  }
});