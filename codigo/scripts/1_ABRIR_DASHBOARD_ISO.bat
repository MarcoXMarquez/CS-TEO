@echo off
title Apertura de Dashboard ISO - Calidad de Software
echo ===============================================================================
echo   SISTEMA DE VIGILANCIA EPIDEMIOLOGICA ISPySA-PNEUMONIA (PERU 2000-2023)
echo   DASHBOARD DE EVALUACION NORMATIVA ISO/IEC 5055, ISO 25010 E ISO 9241
echo   EQUIPO 05: Yoel, Marco, Jeremy, Rafael, Leo
echo ===============================================================================
echo.
echo [INFO] Abriendo dashboard_iso_salud.html en su navegador predeterminado...
echo [INFO] No requiere instalacion de Python ni librerias (ejecucion 100%% local).
echo.

if exist "%~dp0dashboard_iso_salud.html" (
    start "" "%~dp0dashboard_iso_salud.html"
) else (
    echo [ERROR] No se encontro dashboard_iso_salud.html en la carpeta actual.
    pause
    exit /b 1
)

timeout /t 3 >nul
exit
