const events = [
  "cyberquest",
  "electromania",
  "aerodynamix",
  "genesis",
  "mechrocosm",
  "nirmaan",
  "powersurge",
  "rasayans",
  "robomania",
  "oligopoly",
  "monopoly"
];
const routes = {
  "/": { page: "/" },
  "/team": { page: "/team" },
  "/events": { page: "/events" },
  "/auth": { page: "/auth" },
  "/dashboard": { page: "/dashboard" }
};
events.forEach(function(event) {
  const path = "/events/" + event;
  routes[path] = { page: "/events", query: { name: event } };
});
module.exports = {
  exportPathMap() {
    return routes;
  }
};
