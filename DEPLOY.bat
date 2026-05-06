@echo off
echo === Deploying DroneSurveyCR Optimized Site ===
cd /d "%~dp0"

REM Check if git is properly initialized
git status >nul 2>&1
if errorlevel 1 (
    echo Git not initialized. Setting up...
    rmdir /s /q .git 2>nul
    git init
    git remote add origin https://github.com/DroneSur