# Guía Rápida: Subida del Repositorio a GitHub

El proyecto local ya ha sido preparado, limpiado y versionado en la rama `main` sin archivos ejecutables `.bat` y con el pipeline de **GitHub Actions** (`.github/workflows/ci.yml`) listo.

---

## Paso 1: Crear el Repositorio en GitHub
1. Ingresa a tu cuenta de [GitHub](https://github.com/new).
2. Asigna un nombre al repositorio, por ejemplo:
   * **`ispysa-vigilancia-ira-peru`**
3. **IMPORTANTE:**
   * Marca el repositorio como **Público** (o privado según prefieras).
   * **NO marques** *"Add a README file"*, *"Add .gitignore"* ni *"Choose a license"*, ya que el repositorio local ya cuenta con todos esos archivos configurados.
4. Haz clic en el botón verde **"Create repository"**.

---

## Paso 2: Vincular y Subir el Código desde tu Consola

Abre tu terminal (PowerShell o CMD) en el directorio del proyecto:

```powershell
cd "c:\Users\marco\Desktop\TEO-CS\TRABAJO 2\Código\ISPySA-Pneumonia-main\ISPySA-Pneumonia-main"
```

Ejecuta los dos siguientes comandos (reemplaza `TU_USUARIO` y `ispysa-vigilancia-ira-peru` con los datos de tu repositorio):

```bash
git remote add origin https://github.com/TU_USUARIO/ispysa-vigilancia-ira-peru.git
git push -u origin main
```

*(Si utilizas autenticación SSH, puedes usar `git remote add origin git@github.com:TU_USUARIO/ispysa-vigilancia-ira-peru.git`)*.

---

## Paso 3: Verificación del CI/CD en GitHub
Apenas se complete el comando `git push`:
1. Entra a tu repositorio en GitHub.
2. Haz clic en la pestaña **Actions** superior.
3. Observarás cómo el workflow **`CI Quality Gate - Pruebas y Calidad de Software`** se ejecuta automáticamente en un contenedor Ubuntu con Python 3.12, corriendo las 6 pruebas unitarias de [`tests/test_services.py`](file:///c:/Users/marco/Desktop/TEO-CS/TRABAJO%202/Código/ISPySA-Pneumonia-main/ISPySA-Pneumonia-main/tests/test_services.py) y marcando el commit con un check verde de calidad aprobada (`✔ Passed`).
