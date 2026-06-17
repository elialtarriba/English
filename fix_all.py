import base64
import re

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update English.html global CSS for cond-hdr
old_cond_hdr = '.cond-hdr{background:var(--white);border-bottom:1px solid var(--border);padding:9px 14px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-shrink:0;z-index:5}'
new_cond_hdr = '.cond-hdr{background:transparent;position:absolute;top:max(16px, env(safe-area-inset-top));left:0;right:0;border:none;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:10px;z-index:500;pointer-events:none;}\n.cond-hdr * {pointer-events:auto;}'
if old_cond_hdr in text:
    text = text.replace(old_cond_hdr, new_cond_hdr)

# 2. Add Reverse Study toggle button
old_btn_add = '<button class="btn-add-card" id="btnAddFlashcard" type="button">＋ Crear flashcard</button>'
new_btn_add = '<button class="btn-add-card" id="btnAddFlashcard" type="button">＋ Crear flashcard</button>\n<button class="btn-add-card" id="btnReverseStudy" type="button" style="background:#3b5998;" onclick="toggleReverseStudy()">Al Revés (Off)</button>'
if old_btn_add in text:
    text = text.replace(old_btn_add, new_btn_add)

# 3. Add JS for reverse study
js_reverse = '''
window.REVERSE_STUDY = false;
function toggleReverseStudy(){
  window.REVERSE_STUDY = !window.REVERSE_STUDY;
  var btn = document.getElementById("btnReverseStudy");
  if(btn){
    btn.textContent = window.REVERSE_STUDY ? "Al Revés (On)" : "Al Revés (Off)";
    btn.style.background = window.REVERSE_STUDY ? "#27ae60" : "#3b5998";
  }
  renderStudy();
}
'''
if 'window.REVERSE_STUDY' not in text:
    text = text.replace('function renderStudy(){', js_reverse + '\nfunction renderStudy(){')

# 4. Update renderStudy to swap front and back texts
old_render1 = 'fcWord.textContent = c.word;'
new_render1 = 'fcWord.textContent = window.REVERSE_STUDY ? (capFirst(ed.trans || c.trans) || "—") : c.word;'
if old_render1 in text:
    text = text.replace(old_render1, new_render1)

old_render2 = 'document.getElementById("fcBackWord").textContent = capFirst(c.word);'
new_render2 = 'document.getElementById("fcBackWord").textContent = window.REVERSE_STUDY ? c.word : capFirst(c.word);'
if old_render2 in text:
    text = text.replace(old_render2, new_render2)

old_render3 = 'setEditableText("fcTrans", capFirst(ed.trans || c.trans) || "—", "trans");'
new_render3 = 'setEditableText("fcTrans", window.REVERSE_STUDY ? capFirst(c.word) : (capFirst(ed.trans || c.trans) || "—"), "trans");'
if old_render3 in text:
    text = text.replace(old_render3, new_render3)

# 5. Extract VERBTENSESEMBED and update it
lines = text.split('\n')
verb_idx = -1
for i, line in enumerate(lines):
    if line.startswith('var VERBTENSESEMBED') and '=' in line:
        verb_idx = i
        break

b64 = lines[verb_idx].split('\"')[1]
decoded = base64.b64decode(b64).decode('utf-8')

# Remove faint Inicio button
old_bsh = '<button class="bsh btn-3d" onclick="ch_study()">Inicio</button>'
if old_bsh in decoded:
    decoded = decoded.replace(old_bsh, '')

# Remove requestStudyMode popup
old_req = "function requestStudyMode(){openPasswordDialog('study',()=>{STUDY_EDIT_MODE=true;ss('study');rfc(Math.min(fi,SD.length-1));refreshStudyEditBar();},()=>{STUDY_EDIT_MODE=false;ss('study');rfc(Math.min(fi,SD.length-1));refreshStudyEditBar();});}"
new_req = "function requestStudyMode(){STUDY_EDIT_MODE=false;ss('study');rfc(Math.min(fi,SD.length-1));refreshStudyEditBar();}"
if old_req in decoded:
    decoded = decoded.replace(old_req, new_req)

# Add "Editar Flashcards" at the bottom of the study screen
old_sbody = '<div class="sbody"><div class="dn" id="dn"></div><div id="fcc"></div></div>'
new_sbody = '<div class="sbody"><div class="dn" id="dn"></div><div id="fcc"></div></div><div style="text-align:center; padding:20px 0 30px;"><button onclick="STUDY_EDIT_MODE=true;ss(\\\'study\\\');rfc(fi);refreshStudyEditBar();" style="background:none; border:none; color:var(--mid); opacity:0.5; font-size:11px; cursor:pointer; padding:10px; text-transform:uppercase; font-weight:bold; letter-spacing:1px; outline:none;">✏️ Editar Flashcards</button></div>'
if old_sbody in decoded:
    decoded = decoded.replace(old_sbody, new_sbody)

# Encode back
new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";'
text = '\n'.join(lines)

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("All modifications applied successfully!")
