import re
import json

with open('conditionals_decoded.html', 'r', encoding='utf-8') as f:
    cond_html = f.read()

with open('verbtenses_decoded.html', 'r', encoding='utf-8') as f:
    verb_html = f.read()

# 1. Extract the CSS from Verb Tenses
css_start = verb_html.find('/* --- ADVANCED EDITOR CSS --- */')
if css_start == -1:
    css_start = verb_html.find('.app-modal{')

css_end = verb_html.find('</style>', css_start)
css_block = verb_html[css_start:css_end]

if '/* --- ADVANCED EDITOR CSS --- */' not in cond_html:
    cond_html = cond_html.replace('</style>', '\n/* --- ADVANCED EDITOR CSS --- */\n' + css_block + '\n</style>')

# 2. Add buttons to Conditionals Home
# Find <div class="hcards">
if '✏️ Editar Estudio' not in cond_html:
    home_bottom = '<div style="text-align:center; padding:10px 0 20px; display:flex; justify-content:center; gap:20px;"><button onclick="openStudyEditor()" style="background:none; border:none; color:var(--mid); opacity:0.5; font-size:11px; cursor:pointer; padding:10px; text-transform:uppercase; font-weight:bold; letter-spacing:1px; outline:none;">✏️ Editar Estudio</button><button onclick="openQuizEditor()" style="background:none; border:none; color:var(--mid); opacity:0.5; font-size:11px; cursor:pointer; padding:10px; text-transform:uppercase; font-weight:bold; letter-spacing:1px; outline:none;">✏️ Editar Quiz</button></div>'
    cond_html = cond_html.replace('</div>\n  </div>\n</div>\n<!-- STUDY -->', home_bottom + '\n  </div>\n</div>\n<!-- STUDY -->')

# 3. Build HTML for Study Editor Modal (adapted for CD)
study_editor_html = """
<div id="studyEditorModal" class="app-modal">
  <div class="app-box">
    <div class="app-title" id="studyEditorTitle">Editar flashcard Condicionales</div>
    <div class="app-text">
      Navega por las tarjetas de Condicionales.
      <br><label style="display:inline-block;margin-top:8px;padding:6px 10px;background:#eee;border-radius:6px;cursor:pointer;font-weight:bold"><input type="checkbox" id="studyRevToggle" onchange="toggleStudyRev()"> Activar Botón de Revisión</label>
    </div>
    <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text3);margin-top:10px;">Tarjeta <span id="studyEditorPos"></span></div>
    
    <div class="app-label">Tipo</div>
    <select class="app-input" id="editType">
      <option value="Zero">Zero</option>
      <option value="First">First</option>
      <option value="Second">Second</option>
      <option value="Third">Third</option>
      <option value="Mixed">Mixed</option>
    </select>
    
    <div class="app-label">Título</div>
    <input class="app-input" id="editTitle" placeholder="Zero Conditional">
    
    <div class="app-label">Uso</div>
    <textarea class="app-textarea" id="editUse" placeholder="Hechos, verdades científicas..."></textarea>
    
    <div class="app-label">Estructura</div>
    <textarea class="app-textarea" id="editStructure" placeholder="<span>If</span> + present simple..."></textarea>
    
    <div class="app-label">Ejemplos (uno por línea: Inglés | Español)</div>
    <textarea class="app-textarea" id="editExamples"></textarea>
    
    <div class="app-label">Notas / Excepciones (Opcional)</div>
    <textarea class="app-textarea" id="editNotes"></textarea>
    
    <div class="app-error" id="studyEditError">Rellena como mínimo Título, Uso y Estructura.</div>
    <div class="app-actions">
      <button type="button" onclick="closeStudyEditor()">Cancelar</button>
      <button type="button" onclick="studyEditorMove(-1)">Anterior</button>
      <button type="button" onclick="studyEditorMove(1)">Siguiente</button>
      <button type="button" id="studyRevBtn" style="display:none;font-weight:bold;color:white" onclick="toggleSVerified()">Por comprobar</button>
      <button type="button" onclick="saveStudyEditor()" style="background:#555;color:#fff">Guardar</button>
    </div>
    <div class="app-actions" style="margin-top:10px; justify-content:center; gap:20px;">
      <button type="button" onclick="deleteStudyCard()" style="background:#F44336;color:white">Borrar</button>
      <button type="button" onclick="newStudyCard()" style="background:#4CAF50;color:white">+ Nueva</button>
    </div>
  </div>
</div>
"""

# 4. Build HTML for Quiz Editor Modal (adapted for QD)
quiz_editor_html = """
<div id="quizEditorModal" class="app-modal">
  <div class="app-box">
    <div class="app-title">Editar preguntas del Quiz</div>
    <div class="app-text">Busca o navega por las preguntas de Condicionales.<br><label style="display:inline-block;margin-top:8px;padding:6px 10px;background:#eee;border-radius:6px;cursor:pointer;font-weight:bold"><input type="checkbox" id="quizRevToggle" onchange="toggleQuizRev()"> Activar Botón de Revisión</label></div>
    
    <div style="display:flex;gap:10px;margin-bottom:15px;align-items:center;">
      <select id="quizFilter" class="app-input" style="width:140px;flex-shrink:0" onchange="buildQuizEditorList()">
        <option value="all">Todo</option>
        <option value="Zero">Zero</option>
        <option value="First">First</option>
        <option value="Second">Second</option>
        <option value="Third">Third</option>
        <option value="Mixed">Mixed</option>
      </select>
      <input type="text" id="quizSearch" class="app-input" style="flex:1" placeholder="Buscar texto..." onkeyup="buildQuizEditorList()">
    </div>
    
    <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text3);margin-top:10px;">Pregunta <span id="quizEditorPos"></span></div>
    
    <div class="app-label">Pregunta (usa ___ para el hueco)</div>
    <textarea class="app-textarea" id="editQQ"></textarea>
    
    <div class="app-label">Respuesta Correcta</div>
    <input class="app-input" id="editQA">
    
    <div class="app-label">Opciones incorrectas (separadas por coma)</div>
    <input class="app-input" id="editQO">
    
    <div class="app-label">Razón / Explicación</div>
    <textarea class="app-textarea" id="editQReason"></textarea>
    
    <div class="app-label">Traducción al español</div>
    <textarea class="app-textarea" id="editQTrans"></textarea>
    
    <div class="app-error" id="quizEditError">Rellena la pregunta con ___ y las opciones.</div>
    <div class="app-actions">
      <button type="button" onclick="closeQuizEditor()">Cancelar</button>
      <button type="button" onclick="quizEditorMove(-1)">Anterior</button>
      <button type="button" onclick="quizEditorMove(1)">Siguiente</button>
      <button type="button" id="quizRevBtn" style="display:none;font-weight:bold;color:white" onclick="toggleQVerified()">Por comprobar</button>
      <button type="button" onclick="saveQuizEditor()" style="background:#555;color:#fff">Guardar</button>
    </div>
    <div class="app-actions" style="margin-top:10px; justify-content:center; gap:20px;">
      <button type="button" onclick="deleteQuizQuestion()" style="background:#F44336;color:white">Borrar</button>
      <button type="button" onclick="newQuizQuestion()" style="background:#4CAF50;color:white">+ Nueva</button>
    </div>
  </div>
</div>
"""

if 'id="studyEditorModal"' not in cond_html:
    cond_html = cond_html.replace('</div>\n</body>', study_editor_html + quiz_editor_html + '\n</div>\n</body>')

# 5. JS Logic
js_logic = """
/* --- EDITORS JS --- */
var studyEditorAt = 0;
var quizEditorAt = 0;
var quizEditorList = [];

function openStudyEditor(){
  studyEditorAt=0;
  loadStudyEditor();
  const m=document.getElementById('studyEditorModal');
  m.classList.add('vis');
  const b=m.querySelector('.app-box');
  if(b) setTimeout(()=>b.scrollTop=0, 50);
}
function closeStudyEditor(){
  document.getElementById('studyEditorModal').classList.remove('vis');
}
function studyEditorMove(dir){
  saveStudyEditor(true); // silent save
  studyEditorAt += dir;
  if(studyEditorAt < 0) studyEditorAt = CD.length - 1;
  if(studyEditorAt >= CD.length) studyEditorAt = 0;
  loadStudyEditor();
}
function loadStudyEditor(){
  if(CD.length === 0){ closeStudyEditor(); return; }
  var c = CD[studyEditorAt];
  document.getElementById('studyEditorPos').textContent = (studyEditorAt+1) + '/' + CD.length;
  document.getElementById('editType').value = c.type || 'Zero';
  document.getElementById('editTitle').value = c.title || '';
  document.getElementById('editUse').value = c.use || '';
  document.getElementById('editStructure').value = c.structure || '';
  document.getElementById('editNotes').value = c.notes || '';
  
  var exStr = '';
  if(c.examples && c.examples.length){
    exStr = c.examples.map(function(e){ return (e.en||'') + ' | ' + (e.es||''); }).join('\\n');
  }
  document.getElementById('editExamples').value = exStr;
  document.getElementById('studyEditError').style.display='none';
  updateSVerifiedUI();
}
function saveStudyEditor(silent){
  if(CD.length === 0) return;
  var title = document.getElementById('editTitle').value.trim();
  var use = document.getElementById('editUse').value.trim();
  var structure = document.getElementById('editStructure').value.trim();
  if(!title || !use || !structure){
    if(!silent) document.getElementById('studyEditError').style.display='block';
    return;
  }
  
  var type = document.getElementById('editType').value;
  var notes = document.getElementById('editNotes').value.trim();
  var exLines = document.getElementById('editExamples').value.split('\\n');
  var ex = [];
  exLines.forEach(function(l){
    var p = l.split('|');
    if(p[0] && p[0].trim()){
      ex.push({en: p[0].trim(), es: (p[1] ? p[1].trim() : '')});
    }
  });
  
  var c = CD[studyEditorAt];
  c.type = type;
  c.title = title;
  c.use = use;
  c.structure = structure;
  c.notes = notes;
  c.examples = ex;
  
  if(!silent){
    closeStudyEditor();
    if(window.parent && window.parent.notifyCondStudyUpdate) window.parent.notifyCondStudyUpdate(CD);
  }
}
function newStudyCard(){
  CD.push({
    type: 'Zero', title: 'Nuevo Condicional', use: '', structure: '', examples: [], v: false
  });
  studyEditorAt = CD.length - 1;
  loadStudyEditor();
}
function deleteStudyCard(){
  if(CD.length === 0) return;
  if(confirm("¿Seguro que quieres borrar esta flashcard?")){
    CD.splice(studyEditorAt, 1);
    if(studyEditorAt >= CD.length) studyEditorAt = Math.max(0, CD.length - 1);
    loadStudyEditor();
    if(window.parent && window.parent.notifyCondStudyUpdate) window.parent.notifyCondStudyUpdate(CD);
  }
}
function toggleStudyRev(){
  const show=document.getElementById('studyRevToggle').checked;
  document.getElementById('studyRevBtn').style.display=show?'inline-block':'none';
}
function toggleSVerified(){
  if(CD.length===0)return;
  const q=CD[studyEditorAt];
  q.v = !q.v;
  updateSVerifiedUI();
}
function updateSVerifiedUI(){
  if(CD.length===0)return;
  const q=CD[studyEditorAt];
  const btn=document.getElementById('studyRevBtn');
  if(q.v){
    btn.style.background='#4CAF50';
    btn.textContent='Comprobada';
  }else{
    btn.style.background='#F44336';
    btn.textContent='Por comprobar';
  }
}

// QUIZ EDITOR
function buildQuizEditorList(){
  var filt = document.getElementById('quizFilter').value;
  var term = document.getElementById('quizSearch').value.toLowerCase();
  quizEditorList = [];
  for(var i=0; i<QD.length; i++){
    var q = QD[i];
    if(filt !== 'all' && q.type !== filt) continue;
    if(term){
      var t = (q.q + " " + q.a + " " + (q.trans||"")).toLowerCase();
      if(t.indexOf(term)===-1) continue;
    }
    quizEditorList.push({index: i, item: q});
  }
  if(quizEditorAt >= quizEditorList.length) quizEditorAt=0;
  loadQuizEditor();
}
function openQuizEditor(){
  document.getElementById('quizSearch').value='';
  quizEditorAt=0;
  buildQuizEditorList();
  const m=document.getElementById('quizEditorModal');
  m.classList.add('vis');
  const b=m.querySelector('.app-box');
  if(b) setTimeout(()=>b.scrollTop=0, 50);
}
function closeQuizEditor(){
  document.getElementById('quizEditorModal').classList.remove('vis');
}
function quizEditorMove(dir){
  saveQuizEditor(true);
  quizEditorAt += dir;
  if(quizEditorAt < 0) quizEditorAt = quizEditorList.length - 1;
  if(quizEditorAt >= quizEditorList.length) quizEditorAt = 0;
  loadQuizEditor();
}
function loadQuizEditor(){
  if(quizEditorList.length===0){
    document.getElementById('editQQ').value='';
    document.getElementById('quizEditorPos').textContent='0/0';
    return;
  }
  var row = quizEditorList[quizEditorAt];
  var q = row.item;
  document.getElementById('quizEditorPos').textContent=(quizEditorAt+1)+'/'+quizEditorList.length+' (' + (q.type||'General') + ')';
  
  document.getElementById('editQQ').value=q.q||'';
  document.getElementById('editQA').value=q.a||'';
  var w = [];
  if(q.opts){
    for(var i=0;i<q.opts.length;i++){
      if(q.opts[i]!==q.a) w.push(q.opts[i]);
    }
  }
  document.getElementById('editQO').value=w.join(', ');
  document.getElementById('editQReason').value=q.reason||'';
  document.getElementById('editQTrans').value=q.trans||'';
  document.getElementById('quizEditError').style.display='none';
  updateQVerifiedUI();
}
function saveQuizEditor(silent){
  if(quizEditorList.length===0)return;
  var qq = document.getElementById('editQQ').value.trim();
  var qa = document.getElementById('editQA').value.trim();
  var qo = document.getElementById('editQO').value.trim();
  if(!qq || !qa || !qo || qq.indexOf('___')===-1){
    if(!silent) document.getElementById('quizEditError').style.display='block';
    return;
  }
  var row = quizEditorList[quizEditorAt];
  var q = QD[row.index];
  
  q.q = qq;
  q.a = qa;
  var arr = qo.split(',').map(function(s){return s.trim()}).filter(function(s){return s.length>0});
  arr.unshift(qa);
  q.opts = arr;
  q.reason = document.getElementById('editQReason').value.trim();
  q.trans = document.getElementById('editQTrans').value.trim();
  
  if(!silent){
    closeQuizEditor();
    if(window.parent && window.parent.notifyCondQuizUpdate) window.parent.notifyCondQuizUpdate(QD);
  }
}
function newQuizQuestion(){
  var filt = document.getElementById('quizFilter').value;
  var type = (filt === 'all') ? 'Zero' : filt;
  QD.push({
    q: 'If ___ ...', a: 'answer', opts: ['answer', 'wrong1', 'wrong2'], type: type, reason: '', trans: '', v: false
  });
  buildQuizEditorList();
  quizEditorAt = quizEditorList.length - 1;
  loadQuizEditor();
}
function deleteQuizQuestion(){
  if(quizEditorList.length===0)return;
  if(confirm("¿Seguro que quieres borrar esta pregunta?")){
    var row = quizEditorList[quizEditorAt];
    QD.splice(row.index, 1);
    buildQuizEditorList();
    if(window.parent && window.parent.notifyCondQuizUpdate) window.parent.notifyCondQuizUpdate(QD);
  }
}
function toggleQuizRev(){
  const show=document.getElementById('quizRevToggle').checked;
  document.getElementById('quizRevBtn').style.display=show?'inline-block':'none';
}
function toggleQVerified(){
  if(!quizEditorList.length)return;
  const row=quizEditorList[quizEditorAt];
  const q = QD[row.index];
  q.v = !q.v;
  updateQVerifiedUI();
}
function updateQVerifiedUI(){
  if(!quizEditorList.length)return;
  const row=quizEditorList[quizEditorAt];
  const q = QD[row.index];
  const btn=document.getElementById('quizRevBtn');
  if(q.v){
    btn.style.background='#4CAF50';
    btn.textContent='Comprobada';
  }else{
    btn.style.background='#F44336';
    btn.textContent='Por comprobar';
  }
}
"""

if 'function openStudyEditor' not in cond_html:
    cond_html = cond_html.replace('</script>', js_logic + '\n</script>')

with open('conditionals_decoded.html', 'w', encoding='utf-8') as f:
    f.write(cond_html)

print("Generated conditionals_decoded.html successfully!")
