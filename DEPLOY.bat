@echo off
echo === Deploying DroneSurveyCR Website ===
cd /d "%~dp0"

REM Check if git is properly initialized
git status >nul 2>&1
if errorlevel 1 (
    echo Git not initialized. Setting up...
    rmdir /s /q .git 2>nul
    git init
    git remote add origin https://github.com/DroneSurveyCR/website.git
    git branch -M master
)

REM Ensure remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adding remote...
    git remote add origin https://github.com/DroneSurveyCR/website.git
)

REM Remove stale lock files if present
del /f .git\index.lock 2>nul
del /f .git\HEAD.lock 2>nul
del /f .git\objects\maintenance.lock 2>nul
del /f .git\config.lock 2>nul

REM Rebuild index if corrupted
git status >nul 2>&1
if errorlevel 1 (
    echo Rebuilding git index...
    del /f .git\index 2>nul
    git read-tree HEAD
)

echo.
echo Checking current status...
git status --short

echo.
echo Pushing to GitHub (master)...
git push -u origin master

if errorlevel 1 (
    echo.
    echo Push failed. Attempting fetch-rebase-push...
    git fetch origin master
    git rebase origin/master
    git push -u origin master
)

echo.
echo === Done! Vercel will auto-build from GitHub. ===
echo Check https://vercel.com/dronesurveycr-3708s-projects/dronesurveycr for build status.
pause
