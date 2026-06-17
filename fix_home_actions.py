import base64
import re

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

verb_idx = -1
for i, line in enumerate(lines):
    if line.startswith('var VERBTENSESEMBED') and '=' in line:
        verb_idx = i
        break

if verb_idx == -1:
    print("Could not find VERBTENSESEMBED")
    exit(1)

b64 = lines[verb_idx].split('\"')[1]
decoded = base64.b64decode(b64).decode('utf-8')

# We want to replace the whole <div class="home-actions">...</div> with just <div class="home-actions"></div>
pattern = r'<div class="home-actions">.*?</div>'
# Wait, if there are newlines, we need re.DOTALL
new_decoded = re.sub(pattern, '<div class="home-actions"></div>', decoded, count=1, flags=re.DOTALL)

if new_decoded == decoded:
    print("Could not find <div class=\"home-actions\"> block")
    exit(1)

new_b64 = base64.b64encode(new_decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Updated perfectly!")
