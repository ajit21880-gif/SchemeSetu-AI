@echo off
title SchemeSetu AI - Native WhatsApp QR Gateway
color 0A
cls
echo ========================================================
echo   🏛️  SchemeSetu AI (योजना सेतु)
echo   Native WhatsApp Web QR Gateway Launcher
echo ========================================================
echo.
echo Initializing WhatsApp Web QR Gateway...
echo.

if not exist "node_modules\" (
    echo [INFO] node_modules not found. Installing WhatsApp dependencies...
    call npm install
)

call npx tsx whatsappGateway.ts

pause
