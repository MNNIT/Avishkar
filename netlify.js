var fs = require("fs");
const fileContent = `https://www.avishkarmnnit.in/* https://avishkar.mnnit.ac.in/:splat 301!`;
fs.writeFile("out/_redirects", fileContent, function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("Netlify _redirects file saved");
});
