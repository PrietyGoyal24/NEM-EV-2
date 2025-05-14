// logger.js
// Yeh module log likhne ke liye use hota hai

const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "../logs/logs.txt");

// Normal Info log
function logMessage(message) {
  const log = `[INFO] ${new Date().toLocaleTimeString()} - ${message}\n`;
  fs.appendFileSync(logFilePath, log);
  console.log(log);
}

// Warning log (jaise file 3s tak In-Progress rahi)
function logWarning(message) {
  const log = `[WARNING] ${new Date().toLocaleTimeString()} - ${message}\n`;
  fs.appendFileSync(logFilePath, log);
  console.warn(log);
}

// Error log (jaise file crashed ho gayi)
function logError(message) {
  const log = `[ERROR] ${new Date().toLocaleTimeString()} - ${message}\n`;
  fs.appendFileSync(logFilePath, log);
  console.error(log);
}

module.exports = { logMessage, logWarning, logError };