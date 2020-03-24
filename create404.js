var fs = require("fs");

let read = fs.createReadStream("dist/portfolio/index.html");
let write = fs.createWriteStream("dist/portfolio/404.html");

read.pipe(write);
fs.writeFileSync('dist/portfolio/CNAME', 'vatsalkandoi.tech');