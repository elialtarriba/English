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

# HTML we want to replace
old_html = """<div style="margin-top: 10px;text-align: center;">
      <button onclick="requestQuizEditor()" style="background:none; border:none; color:var(--mid); font-family:var(--fb); font-weight:600; font-size:14px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; opacity:0.7; transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7"><svg class="btn-ico" viewBox="0 0 40 40" aria-hidden="true"><path class="sketch-line" d="M10 29.5c3.4-.8 5.5-1.3 7.1-2.2L30.4 13c-.6-2.1-2.2-3.4-4.4-4L12.7 23.3c-.9 1.8-1.6 3.7-2.7 6.2Z"/><path class="sketch-soft" d="M23.8 11.8c1.8.7 3.2 2 4 3.8M12.5 24.1c1.5.2 2.9.9 4 2.2"/></svg>Editar preguntas del Quiz</button>
    </div>
      <button class="flash-entry" onclick="requestFlashcards()">Flashcards</button>"""

# new HTML
new_html = """<div style="margin-top: 10px;text-align: center; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
      <button onclick="requestFlashcards()" style="background:none; border:none; color:var(--mid); font-family:var(--fb); font-weight:600; font-size:14px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; opacity:0.7; transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7"><svg class="btn-ico" viewBox="0 0 40 40" aria-hidden="true" style="width:18px;height:18px;"><path class="sketch-line" d="M10 29.5c3.4-.8 5.5-1.3 7.1-2.2L30.4 13c-.6-2.1-2.2-3.4-4.4-4L12.7 23.3c-.9 1.8-1.6 3.7-2.7 6.2Z" fill="none" stroke="#6f8d73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="sketch-soft" d="M23.8 11.8c1.8.7 3.2 2 4 3.8M12.5 24.1c1.5.2 2.9.9 4 2.2" fill="none" stroke="#9abc9b" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>Edición de Flashcards estudio</button>
      <button onclick="requestQuizEditor()" style="background:none; border:none; color:var(--mid); font-family:var(--fb); font-weight:600; font-size:14px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; opacity:0.7; transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7"><svg class="btn-ico" viewBox="0 0 40 40" aria-hidden="true" style="width:18px;height:18px;"><path class="sketch-line" d="M10 29.5c3.4-.8 5.5-1.3 7.1-2.2L30.4 13c-.6-2.1-2.2-3.4-4.4-4L12.7 23.3c-.9 1.8-1.6 3.7-2.7 6.2Z" fill="none" stroke="#6f8d73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path class="sketch-soft" d="M23.8 11.8c1.8.7 3.2 2 4 3.8M12.5 24.1c1.5.2 2.9.9 4 2.2" fill="none" stroke="#9abc9b" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>Editar preguntas del Quiz</button>
    </div>"""

if old_html in decoded:
    decoded = decoded.replace(old_html, new_html)
else:
    print("Could not find old_html to replace")
    exit(1)

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Updated perfectly!")
