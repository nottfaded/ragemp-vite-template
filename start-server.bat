@echo off
echo Building client files...
cd ./src_client
call npm run build -- --emptyOutDir
if %ERRORLEVEL% neq 0 (
    echo Failed to build client files. Exiting...
    pause
    exit /b %ERRORLEVEL%
)
cd ..
echo Starting RageMP server...
start ragemp-server.exe

