window.DEFAULT_CD=CD; window.DEFAULT_QD=QD;
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
    exStr = c.examples.map(function(e){ return (e.en||'') + ' | ' + (e.es||''); }).join('\n');
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
  var exLines = document.getElementById('editExamples').value.split('\n');
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
    if(filt !== 'all' && q.cond !== filt) continue;
    if(term){
      var t = (q.phrase + " " + q.answer + " " + (q.es||"")).toLowerCase();
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
  document.getElementById('quizEditorPos').textContent=(quizEditorAt+1)+'/'+quizEditorList.length+' (' + (q.cond||'General') + ')';
  
  document.getElementById('editQQ').value=q.phrase||'';
  document.getElementById('editQA').value=q.answer||'';
  var w = [];
  if(q.options){
    for(var i=0;i<q.options.length;i++){
      if(q.options[i]!==q.answer) w.push(q.options[i]);
    }
  }
  document.getElementById('editQO').value=w.join(', ');
  document.getElementById('editQReason').value=q.exp||'';
  document.getElementById('editQTrans').value=q.es||'';
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
  
  q.phrase = qq;
  q.answer = qa;
  var arr = qo.split(',').map(function(s){return s.trim()}).filter(function(s){return s.length>0});
  arr.unshift(qa);
  q.options = arr;
  q.exp = document.getElementById('editQReason').value.trim();
  q.es = document.getElementById('editQTrans').value.trim();
  
  if(!silent){
    closeQuizEditor();
    if(window.parent && window.parent.notifyCondQuizUpdate) window.parent.notifyCondQuizUpdate(QD);
  }
}
function newQuizQuestion(){
  var filt = document.getElementById('quizFilter').value;
  var type = (filt === 'all') ? 'Zero' : filt;
  QD.push({
    phrase: 'If ___ ...', answer: 'answer', options: ['answer', 'wrong1', 'wrong2'], type: 'drag', cond: type, exp: '', es: '', v: false
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

