var fs = require("fs");
const fileContent = `https://avishkar.mnnit.ac.in/* https://www.avishkarmnnit.in/:splat 301!`;
fs.writeFile("out/_redirects", fileContent, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Netlify _redirects file saved");
});
