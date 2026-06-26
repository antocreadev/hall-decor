@echo off
set "PATH=%LOCALAPPDATA%\Programs\nodejs;%PATH%"
cd /d "%~dp0"
call npm run dev
