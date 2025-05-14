# Real-Time File Processing System

## Objective
A Node.js system that simulates real-time file processing with folder structure, logs, and status updates.

## Folder Structure
- *folders/Processing*: Newly generated files.
- *folders/In-Progress*: Files being processed.
- *folders/Completed*: Successfully processed files.
- *folders/Crashed*: Files that failed.

## Logging Strategy
Logs are written in logs/logs.txt with 3 types:
- [INFO]: Normal status updates
- [WARNING]: If file in-progress > 3s
- [ERROR]: If file crashes due to processing > 5s

## Libraries Used
- fs: File system operations
- path: Path management
- crypto: For secure random integer generation

## Sample Log