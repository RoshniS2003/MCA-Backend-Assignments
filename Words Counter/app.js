// Command Line Interface

import fs from "fs";

// terminal se file ka naam lena.
const filename = process.argv[2];

const data = fs.readFileSync(filename, "utf-8");
const words = data.toLowerCase().split(/\s+/);
const frequency = {};

for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
}

console.log(frequency);
