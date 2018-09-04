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
  "monopoly",
  "kreedomania"
];
const tabs = [
  "dashboard",
  "profile",
  "register",
  "soloevents",
  "teamevents",
  "faq"
];
const routes = {
  "/": { page: "/" },
  "/team": { page: "/team" },
  "/events": { page: "/events" },
  "/auth": { page: "/auth" },
  "/dashboard": { page: "/dashboard" },
  "/store": { page: "/store" },
  "/reset-password": { page: "/reset-password" },
  "/reset-password/email": { page: "/reset-password", query: { tab: "email" } },
  "/reset-password/code": { page: "/reset-password", query: { tab: "code" } }
};
events.forEach(function(event) {
  const path = "/events/" + event;
  routes[path] = { page: "/events", query: { name: event } };
});
tabs.forEach(function(tab) {
  const path = "/dashboard/" + tab;
  routes[path] = { page: "/dashboard", query: { tab: tab } };
});
module.exports = {
  exportPathMap() {
    return routes;
  }
};
