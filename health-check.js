const fs = require("fs");

const time = new Date().toISOString();

fs.appendFileSync("/tmp/healthlog.txt", `Health check ran at ${time}\n`);

console.log("Health check executed");
