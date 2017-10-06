document.addEventListener("turbolinks:load", function() {
  if (globals.crossFaderRunning) {
    globals.HWcrossFader.stop();
    globals.crossFaderRunning = false;
  }

  if (window.location.pathname === "/") {
    if (!globals.HWcrossFader) {
      globals.HWcrossFader = new crossFader();
    }
    globals.HWcrossFader.init();
    globals.crossFaderRunning = true;
  }
});