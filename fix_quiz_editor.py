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

# 1. Inject the select dropdown
search_html = '<input class="app-input" id="quizSearch" placeholder="Buscar por pregunta, respuesta o español..." oninput="filterQuizEditor()">'
filter_html = '''<div class="app-label" style="margin-top:10px;">Categoría</div>
    <select class="app-input" id="quizFilter" onchange="filterQuizEditor()">
      <option value="all">Todas</option>
      <option value="0">Acciones Presentes</option>
      <option value="1">Acciones Pasadas</option>
      <option value="2">Acciones Futuras</option>
      <option value="3">Todo Mezclado</option>
    </select>
    <div class="app-label" style="margin-top:10px;">Buscador</div>
    <input class="app-input" id="quizSearch" placeholder="Buscar por pregunta, respuesta o español..." oninput="filterQuizEditor()">'''

if search_html in decoded:
    decoded = decoded.replace(search_html, filter_html)
else:
    print("Could not find quizSearch input!")
    exit(1)

# 2. Update buildQuizEditorList
old_build = '''function buildQuizEditorList(){
  const q=(document.getElementById('quizSearch')?.value||'').toLowerCase().trim();
  quizEditorList=[];
  QB.forEach((bank,mode)=>bank.forEach((item,index)=>{const text=[item.q,item.a,item.es,item.t,item.e].join(' ').toLowerCase();if(!q||text.includes(q))quizEditorList.push({mode,index,item});}));
  if(quizEditorAt>=quizEditorList.length)quizEditorAt=0;
}'''

new_build = '''function buildQuizEditorList(){
  const q=(document.getElementById('quizSearch')?.value||'').toLowerCase().trim();
  const f=document.getElementById('quizFilter')?.value||'all';
  quizEditorList=[];
  if(f==='all') {
    QB.forEach((bank,mode)=>{if(bank)bank.forEach((item,index)=>{const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});})});
  } else {
    const mode=parseInt(f,10);
    if(QB[mode]) QB[mode].forEach((item,index)=>{const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});});
  }
  if(quizEditorAt>=quizEditorList.length)quizEditorAt=0;
}'''

if old_build in decoded:
    decoded = decoded.replace(old_build, new_build)
else:
    print("Could not find old buildQuizEditorList!")
    exit(1)

# Update the HTML
new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Successfully injected quizFilter and updated buildQuizEditorList!")
