const fs = require('node:fs');
fs.writeFileSync('file.txt', 'Hello from subhrajeet');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

const a = fs.readFileSync('file.txt', "utf-8");
console.log(a, toString());

// fs.writeFile('file2.txt', "this is a data2", () => {
//     console.log("file2.txt created");                    // it create another text file
// })

b = fs.writeFileSync('file2.txt', "this is a data2");
console.log(b);
console.log("finished");                    // it chabge the text in file

console.log("File operations completed by subhrajeet successfully!");


