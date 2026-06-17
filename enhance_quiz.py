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

# 1. Update the buttons in the quizEditorModal HTML
old_actions = '''<div class="app-actions">
      <button type="button" onclick="quizEditorMove(-1)">Anterior</button>
      <button type="button" onclick="quizEditorMove(1)">Siguiente</button>
      <button type="button" class="soft" onclick="closeQuizEditor()">Cerrar</button>
      <button type="button" class="primary" onclick="saveQuizEditor()">Guardar</button>
    </div>'''

new_actions = '''<div class="app-actions" style="flex-wrap:wrap; justify-content:center; gap:8px;">
      <button type="button" onclick="quizEditorMove(-1)">Anterior</button>
      <button type="button" onclick="quizEditorMove(1)">Siguiente</button>
      <button type="button" class="soft" style="background:#e0f0e0" onclick="newQuizQuestion()">+ Nueva</button>
      <button type="button" class="danger" onclick="deleteQuizQuestion()">Borrar</button>
      <button type="button" class="soft" onclick="closeQuizEditor()">Cerrar</button>
      <button type="button" class="primary" onclick="saveQuizEditor()">Guardar</button>
    </div>'''

decoded = decoded.replace(old_actions, new_actions)

# 2. Add the JS functions
js_funcs = '''function saveQuizEditor(){
  if(!quizEditorList.length)return;
  const opts=document.getElementById('editQOptions').value.split(/\\n+/).map(x=>x.trim()).filter(Boolean);
  const q=document.getElementById('editQText').value.trim(),a=document.getElementById('editQAnswer').value.trim();
  if(!q||!a||opts.length<2){document.getElementById('quizEditError').classList.add('show');return;}
  if(!opts.includes(a))opts.unshift(a);
  const row=quizEditorList[quizEditorAt];
  QB[row.mode][row.index]={q,a,o:opts,t:document.getElementById('editQTense').value.trim(),e:document.getElementById('editQExplain').value.trim(),es:document.getElementById('editQSpanish').value.trim()};
  buildQuizEditorList();
  loadQuizEditor();
  alert('Guardado en memoria. Usa "Descargar App" en Inicio para hacerlo permanente.');
}
function newQuizQuestion(){
  const f=document.getElementById('quizFilter').value;
  if(f==='all'){alert('Selecciona una categoría específica (ej. "Acciones Presentes") arriba para poder crear una pregunta nueva.');return;}
  const mode=parseInt(f,10);
  QB[mode].unshift({q:'Nueva pregunta...',a:'Respuesta',o:['Respuesta','Falsa 1'],t:'',e:'',es:''});
  document.getElementById('quizSearch').value='';
  quizEditorAt=0;
  buildQuizEditorList();
  loadQuizEditor();
}
function deleteQuizQuestion(){
  if(!quizEditorList.length)return;
  if(!confirm('¿Seguro que quieres borrar esta pregunta?'))return;
  const row=quizEditorList[quizEditorAt];
  QB[row.mode].splice(row.index, 1);
  quizEditorAt=0;
  buildQuizEditorList();
  loadQuizEditor();
}'''

old_save_func = '''function saveQuizEditor(){
  if(!quizEditorList.length)return;
  const opts=document.getElementById('editQOptions').value.split(/\\n+/).map(x=>x.trim()).filter(Boolean);
  const q=document.getElementById('editQText').value.trim(),a=document.getElementById('editQAnswer').value.trim();
  if(!q||!a||opts.length<2){document.getElementById('quizEditError').classList.add('show');return;}
  if(!opts.includes(a))opts.unshift(a);
  const row=quizEditorList[quizEditorAt];
  QB[row.mode][row.index]={q,a,o:opts,t:document.getElementById('editQTense').value.trim(),e:document.getElementById('editQExplain').value.trim(),es:document.getElementById('editQSpanish').value.trim()};
  buildQuizEditorList();
  loadQuizEditor();
  alert('Guardado en memoria. Usa "Descargar App" en Inicio para hacerlo permanente.');
}'''

decoded = decoded.replace(old_save_func, js_funcs)

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Quiz Editor enhanced successfully!")
