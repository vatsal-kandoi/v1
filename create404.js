var fs = require("fs");

let read = fs.createReadStream("dist/browser/index.html");
let write = fs.createWriteStream("dist/browser/404.html");

read.pipe(write);