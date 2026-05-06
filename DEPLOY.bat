@echo off
echo === Deploying DroneSurveyCR Optimized Site ===
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

echo.
echo Pulling latest from GitHub first...
git fetch origin master 2>nul
git reset origin/master 2>nul

echo.
echo Staging all changes...
git add -A

echo.
echo Committing...
git commit -m "Full site optimization: shared CSS, SEO meta, Core Web Vitals, schema.org, sitemap, JS opt, internal linking, CTR fixes from GSC data"

echo.
echo Pushing to GitHub (master)...
git push -u origin master

echo.
echo === Done! Vercel will auto-build from GitHub. ===
echo Check https://vercel.com/dronesurveycr-3708s-projects/dronesurveycr for build status.
pause
