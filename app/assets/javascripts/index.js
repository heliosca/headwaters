document.addEventListener("turbolinks:load", function() {
  if (window.location.pathname === "/") {
    if (!globals.haveCrossFader) {
      globals.HWcrossFader = new crossFader();
      globals.haveCrossFader = true;
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