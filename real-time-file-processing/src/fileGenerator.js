// fileGenerator.js
// Har 3 second me ek new file generate hoti hai Processing folder ke andar

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { logMessage } = require("./logger");

setInterval(() => {
  const timestamp = Date.now(); // Unique time
  const fileName = `file_${timestamp}.txt`;
  const filePath = path.join(__dirname, "../folders/Processing", fileName);

  // Secure random processing time (1 to 6 seconds)
  const processingTime = crypto.randomInt(1, 7);

  // File content
  const content = `File Started Processing\nProcessing Time: ${processingTime}s\nIn-Progress\n`;

  // File likh rahe hain Processing folder me
  fs.writeFileSync(filePath, content);

  // Log likho
  logMessage(`File Created: ${fileName} | Processing Time: ${processingTime}s`);

}, 3000); // 3 second ka interval