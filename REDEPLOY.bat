@echo off
cd /d "%~dp0"
echo === Cleaning up and redeploying ===

REM Remove stale lock files
del /f .git\index.lock 2>nul
del /f .git\HEAD.lock 2>nul
del /f .git\objects\maintenance.lock 2>nul
del /f .git\config.lock 2>nul

REM Remove corrupted file
del /f "Website-Auto-SEO" 2>nul

REM Set correct git identity (must match dronesurveycr-3708 GitHub account)
git config user.email "dronesurveycr@gmail.com"
git config user.name "DroneSurveyCR"

REM Unstage any accidental deletions of important site files
git restore --staged services/lidar-mapping.html 2>nul
git restore --staged services/photogrammetry.html 2>nul
git restore --staged sitemap.xml 2>nul
git restore --staged styles/main.css 2>nul
git restore --staged vercel.json 2>nul
git restore --staged youtube_video_scripts.md 2>nul

REM Stage and commit
git add -A
git commit -m "chore: trigger deploy"

REM Push
git push origin master

echo.
if errorlevel 1 (
    echo PUSH FAILED
) else (
    echo SUCCESS - Vercel will auto-deploy
)
echo.
pause
