//implement node app that takes two arguments:  (1) a URL and, (2) a local file path, downloading the resource to the specified path
const args = process.argv.slice(2);
const request = require("request");
const fs = require("fs");
let url = args[0];
let file = args[1];

const fetcher = function(url, file) {
  request(url, (error, response, body) => {
    fs.writeFile(file, body, error => {
      if (error) {
        throw error;
      }
      console.log(`Downloaded and saved ${fs.statSync(file).size} bytes to ${file}`);
    });
  });
};
 
fetcher(url, file);

