@Echo off
title Mizogg.co.uk
Pushd "%~dp0"
:loop
node JSBITONLINE.js
timeout 2 > NUL
echo %time%
goto loop