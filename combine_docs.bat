@echo off
setlocal EnableDelayedExpansion
set pandoc_cmd=pandoc -o combined.docx
for /F "tokens=*" %%I in (filelist.txt) do set pandoc_cmd=!pandoc_cmd! "%%I"
!pandoc_cmd!
endlocal