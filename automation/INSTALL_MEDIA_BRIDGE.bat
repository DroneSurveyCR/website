@echo off
rem One-time installer: registers the DSCR Media Bridge as a user-level
rem scheduled task (every 15 minutes, hidden window) and runs it once now.
set "VBS=C:\Users\nicki\Desktop\Master websites\Drone Survey CR Copy 2026\automation\run_hidden.vbs"
schtasks /Create /F /SC MINUTE /MO 15 /TN "DSCR Media Bridge" /TR "wscript.exe \"%VBS%\"" > "%~dp0install_log.txt" 2>&1
schtasks /Query /TN "DSCR Media Bridge" >> "%~dp0install_log.txt" 2>&1
call "%~dp0media_bridge.bat"
echo INSTALL COMPLETE %date% %time% >> "%~dp0install_log.txt"
