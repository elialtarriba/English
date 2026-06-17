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

# 1. CSS for 3D buttons
css_to_insert = """
.btn-start-3d { background: #689e5e; color: #fff; border: none; border-radius: 16px; padding: 14px 40px; font-family: var(--fb); cursor: pointer; box-shadow: 0 6px 0 #4a7541, 0 10px 15px rgba(44,66,48,.3); transition: all .1s; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; line-height: 1.2; flex-shrink: 0; }
.btn-start-3d:active { transform: translateY(6px); box-shadow: 0 0 0 #4a7541, 0 2px 5px rgba(44,66,48,.3); }
.btn-start-3d strong { font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
.btn-start-3d span { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.85); text-transform: uppercase; letter-spacing: 1px; }
.btn-cancel-3d { background: #eef7eb; color: var(--mid); border: 1.5px solid #c4e1c3; border-radius: 16px; padding: 14px 28px; font-family: var(--fb); cursor: pointer; box-shadow: 0 6px 0 #c4e1c3, 0 10px 15px rgba(0,0,0,.08); transition: all .1s; display: flex; align-items: center; justify-content: center; margin-top:0; }
.btn-cancel-3d:active { transform: translateY(6px); box-shadow: 0 0 0 #c4e1c3, 0 2px 5px rgba(0,0,0,.08); }
.btn-cancel-3d strong { font-size: 14px; font-weight: 700; color: var(--mid); }
"""

if '.btn-start-3d' not in decoded:
    decoded = decoded.replace('</style>', css_to_insert + '</style>')

# 2. Quiz Setup Buttons
old_qsetup_top = """<div id="qsetup" class="screen">
  <div class="qsi">
    <button class="qs-back btn-3d" onclick="ss('home')">Inicio</button>
    <h2 class="qs-title" id="qset-title">Configurar Quiz</h2>"""

new_qsetup_top = """<div id="qsetup" class="screen">
  <div class="qsi">
    <h2 class="qs-title" id="qset-title">Configurar Quiz</h2>"""

if old_qsetup_top in decoded:
    decoded = decoded.replace(old_qsetup_top, new_qsetup_top)

old_qsetup_bottom = """</select>
      </div>
      <button class="bpl" onclick="sg()">¡Empezar! →</button>
    </div>"""

new_qsetup_bottom = """</select>
      </div>
      <div style="display:flex; gap:16px; margin-top:20px; align-items:flex-end;">
        <button class="btn-cancel-3d" onclick="ss('home')"><strong>← Cancelar</strong></button>
        <button class="btn-start-3d" onclick="sg()"><strong>Start Quiz →</strong><span>Empezar Quiz</span></button>
      </div>
    </div>"""

if old_qsetup_bottom in decoded:
    decoded = decoded.replace(old_qsetup_bottom, new_qsetup_bottom)

# 3. Move the Editar button in Home
# In decoded, the home-actions div contains the button.
# Let's find it.
home_actions_match = re.search(r'<div class="home-actions">(.*?)</div>', decoded, re.DOTALL)
if home_actions_match:
    button_html = home_actions_match.group(1).strip()
    if button_html:
        # Remove it from the top
        decoded = decoded.replace(f'<div class="home-actions">\n{home_actions_match.group(1)}</div>', '<div class="home-actions"></div>')
        # Insert it at the end of the home-grid
        # The home-grid ends with `<div class="qc">250 preguntas</div></div></div>` followed by `</div>` for home-grid.
        # Let's find the end of home-grid.
        end_grid_pattern = r'<div class="qc">250 preguntas</div>\s*</div>\s*</div>'
        match = re.search(end_grid_pattern, decoded)
        if match:
            # We want to change the style of the button so it is subtle as requested
            new_btn_html = f'<div style="margin-top: 10px;text-align: center;">\n      {button_html}\n    </div>'
            decoded = decoded[:match.end()] + '\n' + new_btn_html + decoded[match.end():]
        else:
            print("Could not find end of home-grid")

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

# Delete all OTHER VERBTENSESEMBED definitions to prevent conflicts
final_lines = []
for i, line in enumerate(lines):
    if line.startswith('var VERBTENSESEMBED') and '=' in line and i != verb_idx:
        print(f"Deleting duplicate at line {i+1}")
        continue
    final_lines.append(line)

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(final_lines)

print("Updated perfectly!")
