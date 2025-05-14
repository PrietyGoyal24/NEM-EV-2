// index.js
// Project start hone ke baad folders create karega aur fileGenerator + fileProcessor ko run karega

const fs = require("fs");
const path = require("path");

// Yeh folders humare system ke stages hain
const folders = [
  "folders/Processing",
  "folders/In-Progress",
  "folders/Completed",
  "folders/Crashed",
  "logs"
];

// Saare folders ko check karo agar nahi bane hain toh create karo
folders.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }
});

// File Generator aur File Processor modules ko import karke chalu kar do
require("./src/fileGenerator");
require("./src/fileProcessor");