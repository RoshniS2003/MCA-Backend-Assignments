# Command Line Word Frequency Counter

A simple **Node.js Command Line Interface (CLI)** program that reads a text file and counts how many times each word appears in the file.

## Features

* Reads a file from the command line
* Converts words to lowercase
* Counts the frequency of each word
* Displays the word frequency in the terminal

## Technologies Used

* Node.js
* JavaScript
* File System (`fs` module)

## How It Works

The program takes the file name from the command line.

```text
Command Line
     ↓
File Name
     ↓
Read File
     ↓
Convert to Lowercase
     ↓
Split into Words
     ↓
Count Word Frequency
     ↓
Display Result
```

## Code

```js
import fs from "fs";

// Get file name from command line
const filename = process.argv[2];

// Read file
const data = fs.readFileSync(filename, "utf-8");

// Convert text into words
const words = data.toLowerCase().split(/\s+/);

// Store word frequency
const frequency = {};

for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
}

// Display result
console.log(frequency);
```

## How to Run

First, create a text file, for example:

```text
file1.txt
```

Add some text:

```text
hello world
hello node
world node
```

Then run the program in the terminal:

```bash
node app.js file1.txt
```

## Output

```text
{
  hello: 2,
  world: 2,
  node: 2
}
```

## Important Concepts

### `process.argv`

Used to get values provided through the command line.

```js
const filename = process.argv[2];
```

### `fs.readFileSync()`

Used to read the content of a file.

```js
fs.readFileSync(filename, "utf-8");
```

### `split(/\s+/)`

Splits the text into individual words based on spaces or whitespace.

### Object for Frequency

```js
frequency[word] = (frequency[word] || 0) + 1;
```

This increases the count whenever the same word appears again.

## Learning Outcome

Through this project, I learned:

* Node.js File System module
* Command Line Arguments
* Reading files using Node.js
* String manipulation
* Objects and loops
* Word frequency counting

