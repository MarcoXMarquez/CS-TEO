@echo off
title Ejecucion de Plataforma Streamlit - ISPySA Pneumonia
cls
echo ===============================================================================
echo   SISTEMA DE VIGILANCIA EPIDEMIOLOGICA ISPySA-PNEUMONIA (PERU 2000-2023)
echo   PLATAFORMA STREAMLIT CONFORME A NORMAS ISO 9241 E ISO/IEC 25010
echo   EQUIPO 05: Yoel, Marco, Jeremy, Rafael, Leo
echo ===============================================================================
echo.

set SCRIPT_DIR=%~dp0
if exist "%SCRIPT_DIR%app.py" (
    cd /d "%SCRIPT_DIR%"
) else if exist "%SCRIPT_DIR%ISPySA-Pneumonia-main\app.py" (
    cd /d "%SCRIPT_DIR%ISPySA-Pneumonia-main"
)

echo Directorio de trabajo: %CD%
echo.

echo [1/3] Verificando entorno de ejecucion (uv / Python)...
where uv >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Motor uv de alto rendimiento detectado.
    echo.
    echo [2/3] Levantando servidor Streamlit en puerto 8501...
    echo [3/3] Abriendo http://localhost:8501 en su navegador...
    echo.
    echo ===============================================================================
    echo Para detener la aplicacion presione Ctrl+C en esta consola.
    echo ===============================================================================
    echo.
    start "" http://localhost:8501
    uv run --with streamlit --with pandas --with plotly --with numpy --with openpyxl python -m streamlit run app.py --server.port 8501 --server.headless true
    goto fin
)

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Python detectado en el sistema.
    echo.
    echo [2/3] Verificando e instalando librerias necesarias...
    python -m pip install streamlit pandas plotly numpy openpyxl --quiet
    echo.
    echo [3/3] Abriendo http://localhost:8501 en su navegador...
    echo.
    echo ===============================================================================
    echo Para detener la aplicacion presione Ctrl+C en esta consola.
    echo ===============================================================================
    echo.
    start "" http://localhost:8501
    python -m streamlit run app.py --server.port 8501 --server.headless true
    goto fin
)

echo [ERROR] No se detecto ni 'uv' ni 'python' en el sistema.
echo Para evaluar el sistema de forma inmediata y 100%% funcional sin instalar Python,
echo ejecute el archivo: 1_ABRIR_DASHBOARD_ISO.bat
pause

:fin
pause
