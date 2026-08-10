const fs = require("fs");

console.log("======================================");
console.log("       Jenkins File Test");
console.log("======================================");

// Check index.html
if (fs.existsSync("index.html")) {
    console.log("✔ PASS: index.html exists.");
} else {
    console.log("✘ FAIL: index.html does not exist.");
    process.exit(1);
}

// Check script.js
if (fs.existsSync("script.js")) {
    console.log("✔ PASS: script.js exists.");
} else {
    console.log("✘ FAIL: script.js does not exist.");
    process.exit(1);
}

// Check style.css
if (fs.existsSync("style.css")) {
    console.log("✔ PASS: style.css exists.");
} else {
    console.log("✘ FAIL: style.css does not exist.");
    process.exit(1);
}

// Check user.json
if (fs.existsSync("user.json")) {
    console.log("✔ PASS: user.json exists.");

    try {
        const data = JSON.parse(fs.readFileSync("user.json", "utf8"));

        if (Array.isArray(data)) {
            console.log("✔ PASS: user.json contains valid JSON.");
        } else {
            console.log("✘ FAIL: user.json format is incorrect.");
            process.exit(1);
        }
    } catch (error) {
        console.log("✘ FAIL: user.json contains invalid JSON.");
        process.exit(1);
    }
} else {
    console.log("✘ FAIL: user.json does not exist.");
    process.exit(1);
}

console.log("--------------------------------------");
console.log("ALL TESTS PASSED SUCCESSFULLY!");
console.log("--------------------------------------");

process.exit(0);