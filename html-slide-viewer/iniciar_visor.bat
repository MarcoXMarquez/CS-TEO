@echo off
title HTML Slide Viewer Pro - Servidor Local 16:9
color 0B
echo =====================================================================
echo           HTML SLIDE VIEWER PRO - VISOR 16:9 Y MOTOR PDF
echo =====================================================================
echo.
echo Iniciando servidor local en http://localhost:8000/html-slide-viewer/
echo Esto garantiza compatibilidad total con Chrome/Edge y exportacion PDF.
echo.

cd /d "%~dp0\.."

start "" "http://localhost:8000/html-slide-viewer/"
python -m http.server 8000
pause
