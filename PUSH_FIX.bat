@echo off
cd /d "%~dp0"
echo Cleaning lock files...
del /f .git\index.lock 2>nul
del /f .git\HEAD.lock 2>nul
del /f .git\objects\maintenance.lock 2>nul
del /f .git\config.lock 2>nul
echo Rebuilding index...
git status >nul 2>&1
if errorlevel 1 (
    del /f .git\index 2>nul
    git read-tree HEAD
)
echo Pushing fix to GitHub...
git push origin master
echo.
if errorlevel 1 (
    echo PUSH FAILED - check credentials
) else (
    echo SUCCESS - Vercel will auto-deploy
)
echo.
pause
