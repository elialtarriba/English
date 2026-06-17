import base64
import re

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

verb_idx = -1
for i, line in enumerate(lines):
    if line.startswith('var VERBTENSESEMBED') and '=' in line:
        verb_idx = i

if verb_idx == -1:
    print("Could not find VERBTENSESEMBED")
    exit(1)

b64 = lines[verb_idx].split('\"')[1]
decoded = base64.b64decode(b64).decode('utf-8')

# The button html is currently:
# <div style="margin-top: 10px;text-align: center;">
#       <button class="act edit" onclick="requestQuizEditor()" style="flex:1"><svg class="btn-ico" ...</svg>Editar preguntas del Quiz</button>
#     </div>

# Let's change the button style to make it subtle.
old_btn = '<button class="act edit" onclick="requestQuizEditor()" style="flex:1">'
new_btn = '<button onclick="requestQuizEditor()" style="background:none; border:none; color:var(--mid); font-family:var(--fb); font-weight:600; font-size:14px; cursor:pointer; display:inline-flex; align-items:center; gap:6px; opacity:0.7; transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7">'

if old_btn in decoded:
    decoded = decoded.replace(old_btn, new_btn)
else:
    print("Could not find old_btn to make it subtle")

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Updated perfectly!")
