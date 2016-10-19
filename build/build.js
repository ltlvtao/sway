const fs = require("fs");

if (!fs.existsSync("dist")){
  fs.mkdirSync("dist");
}

const version = require("../package.json").version;

let options = require("Sway");

buildMeta(options);

function buildMeta(options){
  options += "abc";
  /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
  console.log("ver: " + version + "\nmore: " + options);

}
