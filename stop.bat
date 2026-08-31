@echo off
title SchemeSetu AI Server Stopper
echo ========================================================
echo   Stopping SchemeSetu AI Server (Port 3006)
echo ========================================================
echo.

cd /d "%~dp0"

REM Find and kill process listening on port 3006
set FOUND=0
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3006" ^| findstr "LISTENING"') do (
    echo Terminating process PID %%a listening on port 3006...
    taskkill /F /PID %%a >nul 2>&1
    set FOUND=1
)

REM Kill window title matched process
taskkill /FI "WINDOWTITLE eq SchemeSetu AI Server*" /F >nul 2>&1

if %FOUND%==1 (
    echo.
    echo [SUCCESS] SchemeSetu AI Server on port 3006 has been stopped.
) else (
    echo.
    echo [INFO] No active server process was found running on port 3006.
)

echo.
pause
