// fileProcessor.js
// Ye module files ko process karta hai jo Processing folder me aayi hain

const fs = require("fs");
const path = require("path");
const { logMessage, logWarning, logError } = require("./logger");

const processingDir = path.join(__dirname, "../folders/Processing");
const inProgressDir = path.join(__dirname, "../folders/In-Progress");
const completedDir = path.join(__dirname, "../folders/Completed");
const crashedDir = path.join(__dirname, "../folders/Crashed");

setInterval(() => {
  const files = fs.readdirSync(processingDir);

  files.forEach(file => {
    const originalPath = path.join(processingDir, file);
    const inProgressPath = path.join(inProgressDir, file);

    // File ko In-Progress folder me move kar rahe
    fs.renameSync(originalPath, inProgressPath);

    // File ka content read karo
    const content = fs.readFileSync(inProgressPath, "utf-8");
    const processingTimeMatch = content.match(/Processing Time: (\d+)/);
    const processingTime = processingTimeMatch ? parseInt(processingTimeMatch[1]) : 1;

    logMessage(`Processing Started: ${file}`);

    // Agar file 3s se zyada In-Progress me rahti hai toh warning log karo
    const warningTimeout = setTimeout(() => {
      logWarning(`File ${file} is still In-Progress after 3s`);
    }, 3000);

    // File ko processing duration ke baad status change karo
    setTimeout(() => {
      clearTimeout(warningTimeout); // Agar process complete ho gaya toh warning hata do

      const currentTime = new Date().toLocaleTimeString();
      let finalStatus = "";
      let finalPath = "";

      if (processingTime < 5) {
        finalStatus = `Final-Status: Completed at ${currentTime}`;
        finalPath = path.join(completedDir, file);
      } else {
        finalStatus = `Final-Status: Crashed at ${currentTime}`;
        finalPath = path.join(crashedDir, file);
        logError(`File ${file} crashed (Time > 5s)`);
      }

      // Status ko file me likho aur move karo final folder me
      fs.appendFileSync(inProgressPath, finalStatus + "\n");
      logMessage(`File ${file} -> ${finalStatus}`);
      fs.renameSync(inProgressPath, finalPath);

    }, processingTime * 1000);
  });
}, 1000); // Har 1 second me check karo