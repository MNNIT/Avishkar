function loadParicles() {
  particlesJS.load("particles-banner", "static/particles.json");
}
loadParicles();

window.onpopstate = loadParicles;
