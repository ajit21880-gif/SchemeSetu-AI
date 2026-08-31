@echo off
title SchemeSetu AI Launcher
cd /d "%~dp0"

REM 1. Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js was not found on system PATH. Please install Node.js.
    pause
    exit /b 1
)

REM 2. Install dependencies if node_modules is missing
if not exist "node_modules\" (
    echo [INFO] First time setup: Installing dependencies...
    call npm install
)

REM 3. Build production bundle if dist\server.cjs is missing
if not exist "dist\server.cjs" (
    echo [INFO] Building production server...
    call npm run build
)

REM 4. Launch server background process on Port 3006
echo [INFO] Starting SchemeSetu AI Server on http://localhost:3006 ...
start "SchemeSetu Server" /B node dist/server.cjs >nul 2>&1

REM 5. Wait 2 seconds for server initialization
timeout /t 2 /nobreak >nul

REM 6. Open default browser automatically
start http://localhost:3006

REM 7. Close CMD window
exit
