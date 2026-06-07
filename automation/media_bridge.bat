@echo off
rem DSCR Media Bridge - copies fresh media downloads into the website folder
rem so Claude's sandbox (which cannot read Downloads) can publish them.
rem Runs every 15 min via Windows Task Scheduler (user task, no admin).
set "SRC=%USERPROFILE%\Downloads"
set "DST=%USERPROFILE%\Desktop\Master websites\Drone Survey CR Copy 2026\inbox"
if not exist "%DST%" mkdir "%DST%"
rem /XO skip older, /MAXAGE:7 only last 7 days, /COPY:DT no attribute copy,
rem /R:1 /W:2 fail fast instead of retrying forever on locked files
robocopy "%SRC%" "%DST%" *.m4a *.mp4 *.mp3 *.wav /XO /MAXAGE:7 /COPY:DT /R:1 /W:2 /NJH /NDL /NP >> "%DST%\bridge_log.txt" 2>&1
echo %date% %time% bridge run complete >> "%DST%\bridge_log.txt"
