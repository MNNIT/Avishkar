const withOffline = require("next-offline");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
//const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");
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
  "bankaccountinfo",
  "faq"
];
const routes = {
  "/": { page: "/" },
  "/team": { page: "/team" },
  "/events": { page: "/events" },
  "/gnosiomania": { page: "/gnosiomania" },
  "/workshops": { page: "/workshops" },
  "/sponsors": { page: "/sponsors" }
};
events.forEach(function(event) {
  const path = "/events/" + event;
  routes[path] = { page: "/events", query: { name: event } };
});
const nextConfig = {
  exportPathMap() {
    return routes;
  },
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  }
};
module.exports = withBundleAnalyzer(
  withOffline(withOptimizedImages(nextConfig))
);
