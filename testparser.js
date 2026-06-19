const { extractRollNumber, isRegistered } = require("./parser");

console.log(extractRollNumber("Name Pawan Roll 240101 IITK"));
console.log(isRegistered("240101"));
console.log(isRegistered("250001"));