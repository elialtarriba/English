import base64

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

verb_idx = -1
for i, line in enumerate(lines):
    if line.startswith('var VERBTENSESEMBED') and '=' in line:
        verb_idx = i
        break

b64 = lines[verb_idx].split('\"')[1]
decoded = base64.b64decode(b64).decode('utf-8')

# 1. Add "Modo Revisión" toggle to the modal text
old_text = '<div class="app-text">Busca o navega por las preguntas. Se guardan dentro del HTML cuando pulses descargar.</div>'
new_text = '<div class="app-text">Busca o navega por las preguntas. Se guardan dentro del HTML cuando pulses descargar.<br><label style="display:inline-block;margin-top:8px;padding:6px 10px;background:#eee;border-radius:6px;cursor:pointer;font-weight:bold"><input type="checkbox" id="quizRevToggle" onchange="toggleQuizRev()"> Activar Botón de Revisión</label></div>'
if old_text in decoded:
    decoded = decoded.replace(old_text, new_text)

# 2. Add the Red/Green button to the actions
old_actions = '<button type="button" onclick="quizEditorMove(1)">Siguiente</button>'
new_actions = '<button type="button" onclick="quizEditorMove(1)">Siguiente</button>\n      <button type="button" id="quizRevBtn" style="display:none;font-weight:bold;color:white" onclick="toggleQVerified()">Por comprobar</button>'
if old_actions in decoded:
    decoded = decoded.replace(old_actions, new_actions)

# 3. Add JS functions for Review Mode
js_funcs = '''function toggleQuizRev(){
  const show=document.getElementById('quizRevToggle').checked;
  document.getElementById('quizRevBtn').style.display=show?'inline-block':'none';
}
function toggleQVerified(){
  if(!quizEditorList.length)return;
  const row=quizEditorList[quizEditorAt], q=row.item;
  q.v = !q.v; // Toggle verified state
  QB[row.mode][row.index].v = q.v; // Update real data
  updateQVerifiedUI();
}
function updateQVerifiedUI(){
  if(!quizEditorList.length)return;
  const q=quizEditorList[quizEditorAt].item;
  const btn=document.getElementById('quizRevBtn');
  if(q.v){
    btn.style.background='#4CAF50';
    btn.textContent='Comprobada';
  }else{
    btn.style.background='#F44336';
    btn.textContent='Por comprobar';
  }
}
function saveQuizEditor(){'''

decoded = decoded.replace('function saveQuizEditor(){', js_funcs)

# 4. Call updateQVerifiedUI() in loadQuizEditor()
old_load_end = "document.getElementById('editQSpanish').value=q.es||'';\n}"
new_load_end = "document.getElementById('editQSpanish').value=q.es||'';\n  updateQVerifiedUI();\n}"
if old_load_end in decoded:
    decoded = decoded.replace(old_load_end, new_load_end)

# 5. Fix the scroll top issue properly using setTimeout
old_scroll = '''const m=document.getElementById('quizEditorModal');
  m.classList.add('vis');
  const b=m.querySelector('.app-box');
  if(b) b.scrollTop=0;'''

new_scroll = '''const m=document.getElementById('quizEditorModal');
  m.classList.add('vis');
  const b=m.querySelector('.app-box');
  if(b) setTimeout(()=>b.scrollTop=0, 50);'''

if old_scroll in decoded:
    decoded = decoded.replace(old_scroll, new_scroll)

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Review mode and scroll fix applied successfully!")
