import os
import zipfile

OUTPUT_ZIP = "trabajo_6_iso29119_grupo02.zip"

EXCLUDE_DIRS = {
    ".venv",
    ".git",
    "node_modules",
    "test-results",
    "__pycache__",
    ".pytest_cache",
    ".playwright",
    "audit_captures",
    ".gemini"
}

EXCLUDE_EXTS = {
    ".pyc",
    ".pyo",
    ".log"
}

# Directories and files to include
ITEMS_TO_INCLUDE = [
    "README.md",
    "trab_6.pdf",
    "informes",
    "slides/trabajo_6_iso29119",
    "codigo/tests_playwright",
    "codigo/ISPySA-Pneumonia",
    "html-slide-viewer"
]

print(f"Empaquetando entrega en: {OUTPUT_ZIP}...")

with zipfile.ZipFile(OUTPUT_ZIP, "w", zipfile.ZIP_DEFLATED) as zipf:
    for item in ITEMS_TO_INCLUDE:
        if os.path.isfile(item):
            print(f"Añadiendo archivo: {item}")
            zipf.write(item, item)
        elif os.path.isdir(item):
            print(f"Añadiendo carpeta: {item}...")
            for root, dirs, files in os.walk(item):
                # Filter out excluded directories in-place
                dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
                for file in files:
                    ext = os.path.splitext(file)[1].lower()
                    if ext in EXCLUDE_EXTS:
                        continue
                    full_path = os.path.join(root, file)
                    rel_path = os.path.relpath(full_path, ".")
                    zipf.write(full_path, rel_path)

zip_size_mb = os.path.getsize(OUTPUT_ZIP) / (1024 * 1024)
print(f"Empaquetado exitoso: {OUTPUT_ZIP} ({zip_size_mb:.2f} MB)")
