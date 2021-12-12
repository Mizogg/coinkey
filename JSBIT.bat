@Echo off
title Mizogg.co.uk JSBIT
Pushd "%~dp0"
:loop
node JSBIT.js
echo %time%
goto loop