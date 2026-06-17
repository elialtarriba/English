var COND_CD_DEFAULT = [];
var COND_QD_DEFAULT = [];
var workingCondStudy = [];
var workingCondQuiz = [];

function parseCondDefaults() {
  if(COND_CD_DEFAULT.length && COND_QD_DEFAULT.length) return;
  try {
    var bin = atob(CONDITIONALSEMBED);
    var bytes = new Uint8Array(bin.length);
    for(var i=0;i<bin.length;i++) bytes[i] = bin.charCodeAt(i);
    var dec = new TextDecoder("utf-8").decode(bytes);
    
    var cdMatch = dec.match(/var CD=[^[]*(\[[\s\S]*?\]);\s*var QD=/);
    if(cdMatch) eval("COND_CD_DEFAULT=" + cdMatch[1]);
    
    var qdMatch = dec.match(/var QD=[^[]*(\[[\s\S]*?\]);\s*const IL=/);
    if(qdMatch) eval("COND_QD_DEFAULT=" + qdMatch[1]);
  } catch(e) { console.error("Error parsing cond defaults", e); }
}

function renderCondStudyEditor() {
  parseCondDefaults();
  workingCondStudy = JSON.parse(JSON.stringify(USER_EDITS.cond_study || COND_CD_DEFAULT));
  var html = "";
  workingCondStudy.forEach(function(c, i) {
    html += '<div style="border:1px solid #ddd; padding:10px; border-radius:8px; background:#fafafa;">';
    html += '<b>Tarjeta ' + (i+1) + ': ' + (c.type||'') + '</b><br>';
    html += '<label>Título:</label><input class="ninp" style="width:100%; margin-bottom:5px;" type="text" id="cs_title_'+i+'" value="'+(c.title||'').replace(/"/g,'&quot;')+'">';
    html += '<label>Uso:</label><textarea class="ninp" style="width:100%; height:40px; margin-bottom:5px;" id="cs_use_'+i+'">'+(c.use||'')+'</textarea>';
    html += '<label>Estructura (HTML permitido):</label><input class="ninp" style="width:100%; margin-bottom:5px;" type="text" id="cs_str_'+i+'" value="'+(c.structure||'').replace(/"/g,'&quot;')+'">';
    html += '<label>Truco (HTML permitido):</label><input class="ninp" style="width:100%; margin-bottom:5px;" type="text" id="cs_tip_'+i+'" value="'+(c.tip||'').replace(/"/g,'&quot;')+'">';
    (c.examples||[]).forEach(function(ex, j) {
       html += '<div style="margin-left:15px; margin-top:5px; border-left:2px solid #ccc; padding-left:10px;">';
       html += '<label>Ej. Inglés '+(j+1)+':</label><input class="ninp" style="width:100%; margin-bottom:3px;" type="text" id="cs_ex_en_'+i+'_'+j+'" value="'+(ex.en||'').replace(/"/g,'&quot;')+'">';
       html += '<label>Ej. Español '+(j+1)+':</label><input class="ninp" style="width:100%;" type="text" id="cs_ex_es_'+i+'_'+j+'" value="'+(ex.es||'').replace(/"/g,'&quot;')+'">';
       html += '</div>';
    });
    html += '</div>';
  });
  document.getElementById("condStudyList").innerHTML = html;
}

function saveCondStudyEdits() {
  workingCondStudy.forEach(function(c, i) {
    c.title = document.getElementById("cs_title_"+i).value;
    c.use = document.getElementById("cs_use_"+i).value;
    c.structure = document.getElementById("cs_str_"+i).value;
    c.tip = document.getElementById("cs_tip_"+i).value;
    (c.examples||[]).forEach(function(ex, j) {
      ex.en = document.getElementById("cs_ex_en_"+i+"_"+j).value;
      ex.es = document.getElementById("cs_ex_es_"+i+"_"+j).value;
    });
  });
  USER_EDITS.cond_study = workingCondStudy;
  alert("Cambios de Estudio guardados. Cierra y vuelve a abrir Conditionals para verlos.");
  showScreen("conditionalsScreen");
}

function renderCondQuizEditor() {
  parseCondDefaults();
  workingCondQuiz = JSON.parse(JSON.stringify(USER_EDITS.cond_quiz || COND_QD_DEFAULT));
  drawCondQuizList();
}

function drawCondQuizList() {
  var html = "";
  workingCondQuiz.forEach(function(q, i) {
    html += '<div style="border:1px solid #ddd; padding:10px; border-radius:8px; background:#fafafa; margin-bottom:10px;">';
    html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:5px;">';
    html += '<b>Pregunta ' + (i+1) + ' (' + (q.type||'drag') + ' - ' + (q.cond||'') + ')</b>';
    html += '<button type="button" onclick="delCondQuizQuestion('+i+')" style="background:var(--bad); color:white; border:none; border-radius:4px; padding:3px 8px; cursor:pointer;">Borrar</button>';
    html += '</div>';
    
    html += '<label>Frase:</label><input class="ninp" style="width:100%; margin-bottom:5px;" type="text" id="cq_phrase_'+i+'" value="'+(q.phrase||'').replace(/"/g,'&quot;')+'" onchange="workingCondQuiz['+i+'].phrase=this.value">';
    html += '<label>Español:</label><input class="ninp" style="width:100%; margin-bottom:5px;" type="text" id="cq_es_'+i+'" value="'+(q.es||'').replace(/"/g,'&quot;')+'" onchange="workingCondQuiz['+i+'].es=this.value">';
    html += '<label>Respuesta (Correcta):</label><input class="ninp" style="width:100%; margin-bottom:5px;" type="text" id="cq_ans_'+i+'" value="'+(q.answer||'').replace(/"/g,'&quot;')+'" onchange="workingCondQuiz['+i+'].answer=this.value">';
    
    html += '<label>Opciones (separadas por coma):</label><input class="ninp" style="width:100%; margin-bottom:5px;" type="text" id="cq_opt_'+i+'" value="'+(q.options||[]).join(", ").replace(/"/g,'&quot;')+'" onchange="workingCondQuiz['+i+'].options=this.value.split(\',\').map(s=>s.trim())">';
    
    html += '<label>Explicación:</label><input class="ninp" style="width:100%;" type="text" id="cq_exp_'+i+'" value="'+(q.exp||'').replace(/"/g,'&quot;')+'" onchange="workingCondQuiz['+i+'].exp=this.value">';
    html += '</div>';
  });
  document.getElementById("condQuizList").innerHTML = html;
}

function addCondQuizQuestion() {
  workingCondQuiz.unshift({
    type: "drag",
    cond: "Zero",
    phrase: "Nueva frase con ___ hueco.",
    answer: "respuesta",
    options: ["respuesta", "mala1", "mala2", "mala3"],
    es: "Traducción española",
    structure: "Estructura",
    exp: "Explicación"
  });
  drawCondQuizList();
}

function delCondQuizQuestion(idx) {
  if(confirm("¿Seguro que quieres borrar esta pregunta?")) {
    workingCondQuiz.splice(idx, 1);
    drawCondQuizList();
  }
}

function saveCondQuizEdits() {
  USER_EDITS.cond_quiz = workingCondQuiz;
  alert("Cambios del Quiz guardados. Cierra y vuelve a abrir Conditionals para verlos.");
  showScreen("conditionalsScreen");
}
