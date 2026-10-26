import re

with open('build_deck_enunciado.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all grid-cols and responsive prefixes inside slide definitions
print("Inspecting responsive prefixes in slides:")
matches = re.findall(r'(class="[^"]*(?:grid-cols|col-span)[^"]*")', content)
for m in matches:
    print(m)
