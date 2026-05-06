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

REM Stage and commit
git add -A
git commit -m "fix: remove corrupted file, trigger redeploy"

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
