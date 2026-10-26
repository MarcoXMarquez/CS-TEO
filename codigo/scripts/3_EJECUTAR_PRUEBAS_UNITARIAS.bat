@echo off
title Suite de Pruebas Unitarias - Calidad ISO/IEC 25010
cls
echo ===============================================================================
echo   EJECUCION DE SUITE DE PRUEBAS UNITARIAS (tests/test_services.py)
echo   VERIFICACION DE CALIDAD Y FIABILIDAD DEL SOFTWARE (ISO/IEC 25010)
echo   EQUIPO 05: Yoel, Marco, Jeremy, Rafael, Leo
echo ===============================================================================
echo.

set SCRIPT_DIR=%~dp0
if exist "%SCRIPT_DIR%tests\test_services.py" (
    cd /d "%SCRIPT_DIR%"
) else if exist "%SCRIPT_DIR%ISPySA-Pneumonia-main\tests\test_services.py" (
    cd /d "%SCRIPT_DIR%ISPySA-Pneumonia-main"
)

echo Directorio de trabajo: %CD%
echo.
echo [1/2] Ejecutando: python -m unittest tests/test_services.py
echo.

where uv >nul 2>nul
if %ERRORLEVEL% equ 0 (
    uv run python -m unittest tests/test_services.py
    goto fin
)

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    python -m unittest tests/test_services.py
    goto fin
)

echo [ERROR] Se requiere Python en el sistema para ejecutar las pruebas unitarias.
echo Para evaluar el sistema de forma inmediata y 100%% funcional sin instalar Python,
echo ejecute el archivo: 1_ABRIR_DASHBOARD_ISO.bat
pause

:fin
echo.
echo ===============================================================================
echo   EJECUCION DE PRUEBAS FINALIZADA
echo ===============================================================================
pause
