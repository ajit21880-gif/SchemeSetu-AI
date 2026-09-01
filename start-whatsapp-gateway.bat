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

if not exist "node_modules\whatsapp-web.js" (
    echo [INFO] whatsapp-web.js dependency not found. Installing...
    call npm install whatsapp-web.js qrcode-terminal
)

if exist ".wwebjs_auth\session\Default\Preferences" (
    echo [INFO] Cleaning transient Chrome cache lock files...
    del /s /q ".wwebjs_auth\session\Default\Cache\*" >nul 2>&1
)

call npx tsx whatsappGateway.ts

pause
