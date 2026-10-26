"""
Script de Auditoría Visual Automatizada para html-slides-builder
Renderiza cada diapositiva a 1920x1080 en Google Chrome headless,
verifica ausencia de imágenes rotas (404) y guarda capturas PNG para inspección con view_file.

Uso:
  python audit_slides_playwright.py <ruta_archivo.html> <directorio_salida_capturas>
"""
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright

CHROME_PATHS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
]


def find_chrome() -> str | None:
    for p in CHROME_PATHS:
        if Path(p).exists():
            return p
    return None


def audit_deck(html_file: Path, out_dir: Path) -> None:
    if not html_file.exists():
        print(f"[ERROR] No existe el archivo HTML: {html_file}")
        sys.exit(1)

    out_dir.mkdir(parents=True, exist_ok=True)
    file_url = html_file.resolve().as_uri()
    chrome_exe = find_chrome()

    with sync_playwright() as p:
        launch_kwargs = {"headless": True}
        if chrome_exe:
            launch_kwargs["executable_path"] = chrome_exe

        browser = p.chromium.launch(**launch_kwargs)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})

        page_errors = []
        page.on("pageerror", lambda err: page_errors.append(str(err)))

        page.goto(file_url)
        page.wait_for_timeout(1200)

        total_slides = page.locator(".slide-item").count()
        print(f"Auditando {total_slides} diapositivas en {html_file.name} (1920x1080)...")

        broken_images = []
        for idx in range(total_slides):
            page.evaluate(f"goToSlide({idx})")
            page.wait_for_timeout(350)

            # Verificar imágenes rotas en la diapositiva activa
            broken_in_slide = page.evaluate(
                f"""() => {{
                    const slide = document.querySelectorAll('.slide-item')[{idx}];
                    if (!slide) return [];
                    const imgs = Array.from(slide.querySelectorAll('img'));
                    return imgs
                        .filter(img => !img.complete || img.naturalWidth === 0)
                        .map(img => img.getAttribute('src') || 'sin-src');
                }}"""
            )
            if broken_in_slide:
                broken_images.append((idx + 1, broken_in_slide))

            out_path = out_dir / f"slide_{idx + 1:02d}.png"
            page.screenshot(path=str(out_path))
            print(f"  [OK] Capturada slide_{idx + 1:02d}.png")

        browser.close()

    if page_errors:
        print(f"[ADVERTENCIA] Errores de JavaScript detectados: {page_errors}")
    if broken_images:
        print(f"[ERROR] Imágenes rotas detectadas (404 / no cargadas): {broken_images}")
        sys.exit(2)

    print(f"Auditoría completada con éxito: {total_slides} capturas guardadas en {out_dir}")
    print("IMPORTANTE: Inspecciona las capturas con view_file antes de entregar el HTML al usuario.")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python audit_slides_playwright.py <ruta_archivo.html> <directorio_salida_capturas>")
        sys.exit(1)

    audit_deck(Path(sys.argv[1]), Path(sys.argv[2]))
