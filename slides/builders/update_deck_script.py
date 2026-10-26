import subprocess
import os

with open('build_deck_enunciado.js', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Eliminate responsive collapsing on presentation slides
replacements = [
    ('grid grid-cols-1 lg:grid-cols-12', 'grid grid-cols-12'),
    ('lg:col-span-8', 'col-span-8'),
    ('lg:col-span-4', 'col-span-4'),
    ('grid grid-cols-1 md:grid-cols-3', 'grid grid-cols-3'),
    ('grid grid-cols-1 md:grid-cols-2', 'grid grid-cols-2'),
    ('grid grid-cols-1 sm:grid-cols-5', 'grid grid-cols-5'),
    ('grid grid-cols-1 md:grid-cols-4', 'grid grid-cols-4'),
    ('grid grid-cols-1 md:grid-cols-12', 'grid grid-cols-12'),
    ('md:col-span-7', 'col-span-7'),
    ('md:col-span-5', 'col-span-5'),
    ('p-8 md:p-12', 'p-6 sm:p-8'),
]

for old, new in replacements:
    text = text.replace(old, new)

# 2. Refine print CSS for perfect 16:9 rendering
old_print = """      @media print {
        body {
          background-color: white !important;
          overflow: visible !important;
        }
        .no-print {
          display: none !important;
        }
        main {
          padding: 0 !important;
          margin: 0 !important;
          display: block !important;
        }
        .slide-viewport {
          box-shadow: none !important;
          border-radius: 0 !important;
          max-width: none !important;
          max-height: none !important;
          width: 100% !important;
          height: auto !important;
          display: block !important;
        }
        .slide-item {
          position: relative !important;
          display: block !important;
          page-break-after: always !important;
          break-after: page !important;
          width: 100vw !important;
          height: 100vh !important;
          opacity: 1 !important;
          pointer-events: auto !important;
          margin: 0 !important;
          box-shadow: none !important;
        }
        @page {
          size: 16in 9in;
          margin: 0;
        }
      }"""

new_print = """      @media print {
        @page {
          size: 16in 9in;
          margin: 0;
        }
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        html, body {
          width: 16in !important;
          height: auto !important;
          overflow: visible !important;
          background: white !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
        }
        .no-print {
          display: none !important;
        }
        main {
          display: block !important;
          width: 16in !important;
          height: auto !important;
          max-width: none !important;
          max-height: none !important;
          overflow: visible !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .slide-viewport {
          display: block !important;
          width: 16in !important;
          height: auto !important;
          max-width: none !important;
          max-height: none !important;
          overflow: visible !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          margin: 0 !important;
          padding: 0 !important;
          aspect-ratio: auto !important;
        }
        .slide-viewport > div {
          display: block !important;
          width: 16in !important;
          height: auto !important;
          overflow: visible !important;
          position: static !important;
        }
        .slide-item {
          display: block !important;
          position: relative !important;
          width: 16in !important;
          height: 9in !important;
          page-break-after: always !important;
          page-break-inside: avoid !important;
          break-after: page !important;
          break-inside: avoid !important;
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
          overflow: hidden !important;
          margin: 0 !important;
          top: auto !important;
          left: auto !important;
          right: auto !important;
          bottom: auto !important;
          z-index: 1 !important;
          background-color: #F4F5F7 !important;
        }
        .slide-item:last-child {
          page-break-after: avoid !important;
          break-after: avoid !important;
        }
      }"""

text = text.replace(old_print, new_print)

with open('build_deck_enunciado.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated build_deck_enunciado.js successfully.")
