const fs = require("fs");

console.log("======================================");
console.log("       Jenkins File Rename Test");
console.log("======================================");

// Check old file
if (fs.existsSync("index.html")) {
    console.log("✘ FAIL: index.html still exists.");
    process.exit(1);
} else {
    console.log("✔ PASS: index.html does not exist.");
}

// Check renamed file
if (fs.existsSync("home.html")) {
    console.log("✔ PASS: home.html exists.");
} else {
    console.log("✘ FAIL: home.html does not exist.");
    process.exit(1);
}

// Check other project files
if (fs.existsSync("script.js")) {
    console.log("✔ PASS: script.js exists.");
} else {
    console.log("✘ FAIL: script.js does not exist.");
    process.exit(1);
}

if (fs.existsSync("style.css")) {
    console.log("✔ PASS: style.css exists.");
} else {
    console.log("✘ FAIL: style.css does not exist.");
    process.exit(1);
}

if (fs.existsSync("user.json")) {
    console.log("✔ PASS: user.json exists.");
} else {
    console.log("✘ FAIL: user.json does not exist.");
    process.exit(1);
}

console.log("--------------------------------------");
console.log("ALL TESTS PASSED SUCCESSFULLY!");
console.log("index.html was successfully renamed to home.html.");
console.log("--------------------------------------");

process.exit(0);