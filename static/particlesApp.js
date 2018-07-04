function loadParicles() {
  particlesJS.load("particles-banner", "static/particles.json", function() {
    console.log("callback - particles-js config loaded");
  });
}
loadParicles();

window.onpopstate = loadParicles;
