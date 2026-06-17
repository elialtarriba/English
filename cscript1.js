
var CD=window.PARENT_EDITS&&window.PARENT_EDITS.cond_study?window.PARENT_EDITS.cond_study:[
  {type:'Zero',color:'#5c3d1e',colorL:'#f0e4d4',title:'Zero Conditional',use:'Hechos, verdades científicas y rutinas. Siempre verdad.',structure:'<span>If</span> + present simple, <span>present simple</span>',examples:[{en:'If you heat water to 100°C, it boils.',es:'Si calientas agua a 100°C, hierve.'},{en:"If people don't sleep enough, they feel tired.",es:'Si la gente no duerme suficiente, se siente cansada.'},{en:'If you mix red and blue, you get purple.',es:'Si mezclas rojo y azul, obtienes morado.'}],tip:'<strong>Truco:</strong> Puedes sustituir "if" por "when" sin cambiar el significado. Expresa hechos universales.',illoId:0},
  {type:'First',color:'#2e5c3e',colorL:'#d4eedf',title:'First Conditional',use:'Situaciones reales o posibles en el futuro. Probable que ocurra.',structure:'<span>If</span> + present simple, <span>will + infinitive</span>',examples:[{en:"If I revise tonight, I'll feel calmer tomorrow.",es:'Si repaso esta noche, mañana me sentiré más tranquila.'},{en:"If it rains, we'll stay home.",es:'Si llueve, nos quedaremos en casa.'},{en:"If you don't hurry, you'll miss the train.",es:'Si no te das prisa, perderás el tren.'}],tip:'<strong>Truco:</strong> ¡Nunca uses "will" en la cláusula if! Usa también "unless" (= if not).',illoId:1},
  {type:'Second',color:'#2e3d6e',colorL:'#d4dcf0',title:'Second Conditional',use:'Situaciones imaginarias o poco probables en el presente/futuro.',structure:'<span>If</span> + past simple, <span>would + infinitive</span>',examples:[{en:'If I were more confident, I would participate more.',es:'Si tuviera más confianza, participaría más.'},{en:'If I had a million euros, I would travel the world.',es:'Si tuviera un millón de euros, viajaría por el mundo.'},{en:"If she studied harder, she'd get better grades.",es:'Si estudiara más, sacaría mejores notas.'}],tip:'<strong>Truco:</strong> Con "to be" usa siempre <em>were</em> para todas las personas: "If I were you...", "If he were here..."',illoId:2},
  {type:'Third',color:'#6e2e2e',colorL:'#f0d4d4',title:'Third Conditional',use:'Situaciones imaginarias en el pasado. Arrepentimientos.',structure:'<span>If</span> + past perfect, <span>would have + past participle</span>',examples:[{en:"If I had revised earlier, I wouldn't have felt overwhelmed.",es:'Si hubiera repasado antes, no me habría sentido agobiada.'},{en:'If she had arrived on time, she would have got the job.',es:'Si hubiera llegado a tiempo, habría conseguido el trabajo.'},{en:"If they hadn't missed the bus, they would have been here.",es:'Si no hubieran perdido el autobús, habrían estado aquí.'}],tip:'<strong>Truco:</strong> "Would\'ve" = "would have". Expresa algo que NO ocurrió en el pasado.',illoId:3},
  {type:'Mixed 1',color:'#5c5c1e',colorL:'#f0f0d4',title:'Mixed Conditional 1',use:'Acción pasada con efecto en el presente.',structure:'<span>If</span> + past perfect, <span>would + infinitive</span>',examples:[{en:'If I had practised more, I would feel more confident now.',es:'Si hubiera practicado más, ahora me sentiría más segura.'},{en:"If he hadn't lost his job, he would be rich now.",es:'Si no hubiera perdido su trabajo, ahora sería rico.'}],tip:'<strong>Clave:</strong> La cláusula "if" es pasada pero la consecuencia es presente. Busca "now" en el resultado.',illoId:4},
  {type:'Mixed 2',color:'#1e4a5c',colorL:'#d4eaf0',title:'Mixed Conditional 2',use:'Situación presente con efecto en un resultado pasado.',structure:'<span>If</span> + past simple, <span>would have + past participle</span>',examples:[{en:'If I were more organised, I would have finished earlier.',es:'Si fuera más organizada, habría terminado antes.'},{en:"If she weren't so shy, she would have spoken to him.",es:'Si no fuera tan tímida, le habría hablado.'}],tip:'<strong>Clave:</strong> Condición presente (were) → consecuencia pasada (would have). ¡Lo opuesto al Mixed 1!',illoId:5},
  {type:'Mixed 3',color:'#4a1e5c',colorL:'#ead4f0',title:'Mixed Conditional 3',use:'Situación pasada continua con efecto en el presente.',structure:'<span>If</span> + past perfect continuous, <span>would + infinitive</span>',examples:[{en:'If I had been revising regularly, I would feel calmer now.',es:'Si hubiera estado repasando, ahora me sentiría más tranquila.'},{en:'If they had been saving money, they would be able to buy a house.',es:'Si hubieran estado ahorrando, podrían comprarse una casa.'}],tip:'<strong>Clave:</strong> "had been + -ing" subraya que la acción pasada era <em>continua</em> o <em>repetida</em>.',illoId:6},
];
const IL=[
  `<svg viewBox="0 0 52 38" fill="none"><circle cx="14" cy="19" r="7" stroke="#9e6b2a" stroke-width="1.2" fill="none"/><path d="M14 8v-3M14 30v3M3 19H1M25 19h2M7 12 5 10M21 26l2 2M21 12l2-2M7 26l-2 2" stroke="#c4956a" stroke-width=".9" stroke-linecap="round"/><path d="M28 16h8M28 22h8" stroke="#9e6b2a" stroke-width="1.1" stroke-linecap="round"/><circle cx="42" cy="19" r="6" stroke="#7a5236" stroke-width="1" fill="none"/></svg>`,
  `<svg viewBox="0 0 52 38" fill="none"><path d="M4 19q12-6 22 0q8 4 16 0" stroke="#9e6b2a" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M37 14l5 5-5 5" stroke="#9e6b2a" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="24" r="2" stroke="#7a5236" stroke-width="1" fill="none"/><path d="M8 26v5" stroke="#c4956a" stroke-width="1" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 52 38" fill="none"><ellipse cx="33" cy="14" rx="16" ry="10" stroke="#9e6b2a" stroke-width="1.2" fill="none"/><path d="M20 23q-2 4-4 5" stroke="#c4956a" stroke-width="1" fill="none" stroke-linecap="round"/><circle cx="14" cy="29" r="2" stroke="#c4956a" stroke-width="1" fill="none"/><circle cx="11" cy="33" r="1.2" stroke="#c4956a" stroke-width=".9" fill="none"/><path d="M9 16v18" stroke="#9e6b2a" stroke-width="1.1" stroke-linecap="round"/><circle cx="9" cy="13" r="3" stroke="#9e6b2a" stroke-width="1.1" fill="none"/></svg>`,
  `<svg viewBox="0 0 52 38" fill="none"><circle cx="26" cy="19" r="15" stroke="#9e6b2a" stroke-width="1.2" fill="none"/><path d="M26 8v11l8-5" stroke="#7a5236" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M26 19l-7 5" stroke="#c4956a" stroke-width="1" stroke-linecap="round" stroke-dasharray="2,2"/><circle cx="26" cy="19" r="1.5" fill="#9e6b2a"/></svg>`,
  `<svg viewBox="0 0 52 38" fill="none"><rect x="4" y="22" width="8" height="8" rx="2" stroke="#9e6b2a" stroke-width="1.1" fill="none"/><path d="M12 26h12" stroke="#9e6b2a" stroke-width="1.1" stroke-linecap="round"/><path d="M20 22l4 4-4 4" stroke="#9e6b2a" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 16q10 0 18 5" stroke="#c4956a" stroke-width="1" stroke-dasharray="3,2" stroke-linecap="round"/><path d="M44 18l3 3-3 3" stroke="#c4956a" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  `<svg viewBox="0 0 52 38" fill="none"><rect x="4" y="14" width="13" height="10" rx="3" stroke="#9e6b2a" stroke-width="1.1" fill="none"/><path d="M8 18h6M8 21h4" stroke="#c4956a" stroke-width="1" stroke-linecap="round"/><path d="M19 19h8" stroke="#7a5236" stroke-width="1.2" stroke-linecap="round"/><path d="M25 15l2 4-2 4" stroke="#7a5236" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="40" cy="14" r="6" stroke="#9e6b2a" stroke-width="1.1" fill="none" stroke-dasharray="2.5,2"/></svg>`,
  `<svg viewBox="0 0 52 38" fill="none"><path d="M4 22q4-5 8 0q4 5 8 0q4-5 8 0" stroke="#9e6b2a" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M4 29q4-5 8 0q4 5 8 0q4-5 8 0" stroke="#c4956a" stroke-width=".9" fill="none" stroke-linecap="round"/><path d="M33 19h16M33 23h16M33 15h16" stroke="#7a5236" stroke-width="1.1" stroke-linecap="round"/></svg>`,
];
var QD=window.PARENT_EDITS&&window.PARENT_EDITS.cond_quiz?window.PARENT_EDITS.cond_quiz:[
{type:'drag',cond:'Zero',phrase:"If you ___ water, it boils at 100°C.",answer:'heat',options:['heat','heated','will heat','have heated'],es:'Si calientas agua, hierve a 100°C.',structure:'If + present simple, present simple',exp:'Zero Conditional: verdad científica universal.'},
{type:'drag',cond:'Zero',phrase:"Plants die if they ___ enough water.",answer:"don't get",options:["don't get","didn't get","won't get","haven't got"],es:'Las plantas mueren si no reciben suficiente agua.',structure:'If + present simple, present simple',exp:'Zero Conditional: hecho biológico general.'},
{type:'drag',cond:'Zero',phrase:"If you touch a hot stove, you ___ your hand.",answer:'burn',options:['burn','burned','will burn','would burn'],es:'Si tocas una estufa caliente, te quemas la mano.',structure:'If + present simple, present simple',exp:'Zero Conditional: consecuencia inmediata.'},
{type:'drag',cond:'Zero',phrase:"If you heat chocolate, it ___.",answer:'melts',options:['melts','melted','will melt','would melt'],es:'Si calientas el chocolate, se derrite.',structure:'If + present simple, present simple',exp:'Zero Conditional: proceso físico.'},
{type:'verb',cond:'Zero',phrase:"If you ___ (mix) blue and yellow, you get green.",answer:'mix',options:['mix','mixed','will mix','would mix'],base:'mix',es:'Si mezclas azul y amarillo, obtienes verde.',structure:'If + present simple, present simple',exp:'Zero Conditional: verbo en presente simple.'},
{type:'verb',cond:'Zero',phrase:"If you ___ (not water) plants, they die.",answer:"don't water",options:["don't water","didn't water","won't water","wouldn't water"],base:'not water',es:'Si no riegas las plantas, mueren.',structure:'If + present simple, present simple',exp:'Zero Conditional negativo.'},
{type:'drag',cond:'First',phrase:"If it ___ tomorrow, we'll cancel the picnic.",answer:'rains',options:['rains','rained','will rain','would rain'],es:'Si mañana llueve, cancelaremos el picnic.',structure:'If + present simple, will + infinitive',exp:'First Conditional: la cláusula if usa presente simple.'},
{type:'drag',cond:'First',phrase:"If she ___ harder, she'll pass the exam.",answer:'studies',options:['studies','studied','will study','would study'],es:'Si estudia más, aprobará el examen.',structure:'If + present simple, will + infinitive',exp:'First Conditional: resultado probable en el futuro.'},
{type:'drag',cond:'First',phrase:"Unless you ___ now, you'll be late.",answer:'leave',options:['leave','left','will leave','would leave'],es:'A menos que te vayas ahora, llegarás tarde.',structure:'Unless + present simple, will + infinitive',exp:'"Unless" = if not. Siempre seguido de presente simple.'},
{type:'drag',cond:'First',phrase:"If I ___ the job, I'll celebrate.",answer:'get',options:['get','got','will get','would get'],es:'Si consigo el trabajo, lo celebraré.',structure:'If + present simple, will + infinitive',exp:'First Conditional: posibilidad real en el futuro.'},
{type:'drag',cond:'First',phrase:"Call me if you ___ any problems.",answer:'have',options:['have','had','will have','would have'],es:'Llámame si tienes algún problema.',structure:'If + present simple, imperative',exp:'First Conditional con imperativo como resultado.'},
{type:'verb',cond:'First',phrase:"If I ___ (finish) early, I'll call you.",answer:'finish',options:['finish','finished','will finish','would finish'],base:'finish',es:'Si termino pronto, te llamaré.',structure:'If + present simple, will + infinitive',exp:'First Conditional: presente simple en la cláusula if.'},
{type:'verb',cond:'First',phrase:"If they ___ (not arrive) on time, we'll start without them.",answer:"don't arrive",options:["don't arrive","didn't arrive","won't arrive","haven't arrived"],base:'not arrive',es:'Si no llegan a tiempo, empezaremos sin ellos.',structure:'If + present simple, will + infinitive',exp:'First Conditional negativo.'},
{type:'drag',cond:'Second',phrase:"If I ___ a car, I would drive to work.",answer:'had',options:['had','have','would have','will have'],es:'Si tuviera un coche, iría al trabajo en coche.',structure:'If + past simple, would + infinitive',exp:'Second Conditional: hipotético presente.'},
{type:'drag',cond:'Second',phrase:"If I were you, I ___ apply for that job.",answer:"'d",options:["'d","will",'should','must'],es:'Si yo fuera tú, solicitaría ese trabajo.',structure:'If + were, would + infinitive',exp:'"If I were you" → consejo. "Were" para todas las personas.'},
{type:'drag',cond:'Second',phrase:"What would you do if you ___ the lottery?",answer:'won',options:['won','win','would win','have won'],es:'¿Qué harías si ganaras la lotería?',structure:'If + past simple, would + infinitive',exp:'Second Conditional en pregunta.'},
{type:'drag',cond:'Second',phrase:"If I ___ invisible, I'd explore everywhere.",answer:'were',options:['were','was','would be','am'],es:'Si fuera invisible, exploraría por todas partes.',structure:'If + were, would + infinitive',exp:'"Were" es la forma correcta para Second Conditional.'},
{type:'drag',cond:'Second',phrase:"If animals ___ talk, what would they say?",answer:'could',options:['could','can','would','will'],es:'Si los animales pudieran hablar, ¿qué dirían?',structure:'If + past simple, would + infinitive',exp:'Second Conditional con "could".'},
{type:'verb',cond:'Second',phrase:"If she ___ (be) taller, she'd be a model.",answer:'were',options:['were','is','would be','was'],base:'be',es:'Si fuera más alta, sería modelo.',structure:'If + were, would + infinitive',exp:'"Were" para todas las personas en Second Conditional.'},
{type:'verb',cond:'Second',phrase:"If he ___ (know) her number, he'd call her.",answer:'knew',options:['knew','knows','would know','had known'],base:'know',es:'Si supiera su número, la llamaría.',structure:'If + past simple, would + infinitive',exp:'Second Conditional: know → knew.'},
{type:'verb',cond:'Second',phrase:"If I ___ (speak) Chinese, I'd work in Shanghai.",answer:'spoke',options:['spoke','speak','would speak','had spoken'],base:'speak',es:'Si hablara chino, trabajaría en Shanghái.',structure:'If + past simple, would + infinitive',exp:'Second Conditional: speak → spoke.'},
{type:'drag',cond:'Third',phrase:"If I had studied more, I ___ the exam.",answer:"would have passed",options:["would have passed","would pass","had passed","will have passed"],es:'Si hubiera estudiado más, habría aprobado el examen.',structure:'If + past perfect, would have + past participle',exp:'Third Conditional: situación pasada imaginaria.'},
{type:'drag',cond:'Third',phrase:"She wouldn't have been late if she ___ earlier.",answer:"had left",options:["had left","left","would have left","has left"],es:'No habría llegado tarde si hubiera salido antes.',structure:'If + past perfect, would have + past participle',exp:'Third Conditional: pasado perfecto en la cláusula if.'},
{type:'drag',cond:'Third',phrase:"I ___ you if I had known your number.",answer:"would have called",options:["would have called","had called","will have called","would call"],es:'Te habría llamado si hubiera sabido tu número.',structure:'If + past perfect, would have + past participle',exp:'Third Conditional: arrepentimiento.'},
{type:'drag',cond:'Third',phrase:"We would have won if we ___ a better strategy.",answer:"had had",options:["had had","have had","would have","had"],es:'Habríamos ganado si hubiéramos tenido una mejor estrategia.',structure:'If + past perfect, would have + past participle',exp:'Third Conditional: "had had" = past perfect de "have".'},
{type:'drag',cond:'Third',phrase:"If only I ___ more time, I would have done it properly.",answer:"had had",options:["had had","have had","had","would have"],es:'Si tan solo hubiera tenido más tiempo, lo habría hecho correctamente.',structure:'If only + past perfect, would have + past participle',exp:'"If only" = deseo intenso. Mismo patrón que Third Conditional.'},
{type:'verb',cond:'Third',phrase:"She would have won if she ___ (train) harder.",answer:'had trained',options:['had trained','trained','would have trained','has trained'],base:'train',es:'Habría ganado si hubiera entrenado más.',structure:'If + past perfect, would have + past participle',exp:'Past perfect en la cláusula if: had + past participle.'},
{type:'verb',cond:'Third',phrase:"If I ___ (be) more careful, I wouldn't have lost my keys.",answer:'had been',options:['had been','was','would have been','have been'],base:'be',es:'Si hubiera tenido más cuidado, no habría perdido mis llaves.',structure:'If + past perfect, would have + past participle',exp:'Third Conditional: be → been.'},
{type:'verb',cond:'Third',phrase:"They would have succeeded if they ___ (work) together.",answer:'had worked',options:['had worked','worked','would have worked','have worked'],base:'work',es:'Habrían tenido éxito si hubieran trabajado juntos.',structure:'If + past perfect, would have + past participle',exp:'Third Conditional: past perfect en la cláusula if.'},
{type:'drag',cond:'Mixed 1',phrase:"If I had slept well last night, I ___ tired now.",answer:"wouldn't be",options:["wouldn't be","wouldn't have been","hadn't been","won't be"],es:'Si hubiera dormido bien anoche, ahora no estaría cansado.',structure:'If + past perfect, would + infinitive',exp:'Mixed 1: acción pasada → efecto presente.'},
{type:'drag',cond:'Mixed 1',phrase:"She ___ here now if she had caught the train.",answer:"would be",options:["would be","would have been","had been","will be"],es:'Estaría aquí ahora si hubiera cogido el tren.',structure:'If + past perfect, would + infinitive',exp:'Mixed 1: consecuencia presente de una acción pasada.'},
{type:'drag',cond:'Mixed 1',phrase:"I ___ fluent Spanish now if I had studied abroad.",answer:"would speak",options:["would speak","would have spoken","had spoken","will speak"],es:'Ahora hablaría español con fluidez si hubiera estudiado en el extranjero.',structure:'If + past perfect, would + infinitive',exp:'Mixed 1: el resultado "now" indica presente.'},
{type:'verb',cond:'Mixed 1',phrase:"He would be a doctor now if he ___ (study) medicine.",answer:'had studied',options:['had studied','studied','would have studied','has studied'],base:'study',es:'Ahora sería médico si hubiera estudiado medicina.',structure:'If + past perfect, would + infinitive',exp:'Mixed 1: past perfect en la condición, would + infinitivo en el resultado.'},
{type:'drag',cond:'Mixed 2',phrase:"If I ___ more organised, I would have finished on time.",answer:"were",options:["were","had been","am","would be"],es:'Si fuera más organizada, habría terminado a tiempo.',structure:'If + past simple, would have + past participle',exp:'Mixed 2: condición presente (were) → resultado pasado (would have).'},
{type:'drag',cond:'Mixed 2',phrase:"She ___ him if she weren't so shy.",answer:"would have spoken to",options:["would have spoken to","would speak to","had spoken to","will speak to"],es:'Le habría hablado si no fuera tan tímida.',structure:'If + past simple, would have + past participle',exp:'Mixed 2: past simple en la cláusula if, "would have" en el resultado.'},
{type:'verb',cond:'Mixed 2',phrase:"If they ___ (be) more careful, they would have avoided the mistake.",answer:'were',options:['were','had been','are','would be'],base:'be',es:'Si fueran más cuidadosos, habrían evitado el error.',structure:'If + past simple, would have + past participle',exp:'Mixed 2: "were" (past simple of be) en la condición presente.'},
{type:'drag',cond:'Mixed 3',phrase:"If I had been exercising regularly, I ___ fit now.",answer:"would be",options:["would be","would have been","had been","will be"],es:'Si hubiera estado haciendo ejercicio regularmente, ahora estaría en forma.',structure:'If + past perfect continuous, would + infinitive',exp:'Mixed 3: acción pasada continua → efecto presente.'},
{type:'drag',cond:'Mixed 3',phrase:"She would be fluent if she ___ practising every day.",answer:"had been",options:["had been","was","would have been","has been"],es:'Hablaría con fluidez si hubiera estado practicando cada día.',structure:'If + past perfect continuous, would + infinitive',exp:'Mixed 3: "had been + -ing" = past perfect continuous.'},
{type:'verb',cond:'Mixed 3',phrase:"He would be fluent now if he ___ (study) every day.",answer:'had been studying',options:['had been studying','was studying','had studied','would have studied'],base:'study',es:'Ahora sería fluido si hubiera estado estudiando cada día.',structure:'If + past perfect continuous, would + infinitive',exp:'Mixed 3: had been studying = past perfect continuous.'},
{type:'verb',cond:'Mixed 3',phrase:"If she had been ___ (study) harder, she would be ready now.",answer:'studying',options:['studying','studied','study','to study'],base:'study',es:'Si hubiera estado estudiando más, ahora estaría preparada.',structure:'If + past perfect continuous (had been + -ing)',exp:'Mixed 3: had been + -ing. Study → studying.'},
];
const PH=['#4a2c6e','#1e5c3e'],PL=['#e4d8f5','#d4edd9'];
let np=1,pl=[],cpi=0,cqi=0,ans=false,dc=null;
const gh=document.getElementById('dg');
function ss(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);}
function goS(){ss('study');rfc(0);}
function goQ(){ss('qsetup');}
let fi=0;
function rfc(i){
  fi=i;const c=CD[i];
  document.getElementById('fcn').textContent=i+1;
  document.getElementById('fcf').style.width=((i+1)/CD.length*100)+'%';
  document.getElementById('fcp').disabled=i===0;
  document.getElementById('fcnx').disabled=i===CD.length-1;
  const dn=document.getElementById('dn');dn.innerHTML='';
  CD.forEach((_,j)=>{const d=document.createElement('button');d.className='nd'+(j===i?' act':'');d.onclick=()=>rfc(j);dn.appendChild(d);});
  const ex=c.examples.map(e=>`<div class="fex"><div class="fen">${e.en}</div><div class="fes">→ ${e.es}</div></div>`).join('');
  document.getElementById('fcc').innerHTML=`<div class="fc">
    <div class="fct">
      <div class="fillo">${IL[c.illoId]}</div>
      <div class="ftr"><span class="fbd" style="background:${c.colorL};color:${c.color}">${c.type}</span><span class="fnum">${i+1}/7</span></div>
      <div class="ftitle">${c.title}</div>
      <div class="fuse">${c.use}</div>
    </div>
    <div class="fdiv"></div>
    <div class="fbody">
      <div class="fsec" onclick="oz('📐 Estructura','s','${i}')">
        <div class="fsh"><span class="fsl">📐 Estructura</span><span class="fsa">toca para ampliar 🔍</span></div>
        <div class="fsb"><div class="fstr">${c.structure}</div></div>
      </div>
      <div class="fsec" onclick="oz('💬 Ejemplos','e','${i}')">
        <div class="fsh"><span class="fsl">💬 Ejemplos</span><span class="fsa">toca para ampliar 🔍</span></div>
        <div class="fsb"><div class="fexs">${ex}</div></div>
      </div>
      <div class="fsec" onclick="oz('💡 Consejo clave','t','${i}')">
        <div class="fsh"><span class="fsl">💡 Consejo clave</span><span class="fsa">toca para ampliar 🔍</span></div>
        <div class="fsb"><div class="ftip">${c.tip}</div></div>
      </div>
      <div class="fnr">
        ${i>0?`<button class="bfn" onclick="rfc(${i-1})">← Anterior</button>`:''}
        ${i<CD.length-1?`<button class="bfn pr" onclick="rfc(${i+1})">Siguiente →</button>`:`<button class="bfn pr" onclick="goQ()">¡Ir al Quiz! →</button>`}
      </div>
    </div>
  </div>`;
}
function fn(d){rfc(Math.min(Math.max(fi+d,0),CD.length-1));}
function oz(label,type,idx){
  const c=CD[parseInt(idx)];
  document.getElementById('zl').textContent=label;
  const ex=c.examples.map(e=>`<div class="fex"><div class="fen">${e.en}</div><div class="fes">→ ${e.es}</div></div>`).join('');
  let html='';
  if(type==='s') html=`<div class="fstr">${c.structure}</div>`;
  else if(type==='e') html=`<div class="fexs">${ex}</div>`;
  else if(type==='t') html=`<div class="ftip">${c.tip}</div>`;
  document.getElementById('zc').innerHTML=html;
  document.getElementById('zo').classList.add('vis');
}
function czoom(e){
  if(e&&e.target!==document.getElementById('zo'))return;
  document.getElementById('zo').classList.remove('vis');
}
function sc(n){np=n;document.querySelectorAll('.cbt').forEach((b,i)=>b.classList.toggle('sel',i===n-1));document.getElementById('pr1').classList.toggle('hidden',n<2);}
function sg(){
  const a=parseInt(document.getElementById('qpp').value);
  const pool=shuffle([...QD]).slice(0,np*a);
  pl=[];
  for(let i=0;i<np;i++){const inp=document.getElementById('pn'+i);const nm=(inp&&inp.value.trim())||('Jugador '+(i+1));pl.push({name:nm,correct:0,wrong:0,wrongQ:[],questions:pool.slice(i*a,(i+1)*a)});}
  cpi=0;cqi=0;ss('quiz');rq();
}
function rg(){
  const a=pl[0].questions.length;const pool=shuffle([...QD]).slice(0,np*a);
  pl.forEach((p,i)=>{p.correct=0;p.wrong=0;p.wrongQ=[];p.questions=pool.slice(i*a,(i+1)*a);});
  cpi=0;cqi=0;ss('quiz');rq();
}
function sm(ic,ti,tx,cb){document.getElementById('mi').textContent=ic;document.getElementById('mt2').textContent=ti;document.getElementById('mx').textContent=tx;document.getElementById('mf').onclick=()=>{cm();cb();};document.getElementById('mo').classList.add('vis');}
function cm(){document.getElementById('mo').classList.remove('vis');}
function cr(){sm('🔄','¿Reiniciar?','Se perderán los puntos actuales.',rg);}
function ch(){sm('🏠','¿Volver al inicio?','Se perderá la partida en curso.',()=>ss('home'));}
function shuffle(a){const r=[...a];for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}return r;}
function rq(){
  ans=false;const p=pl[cpi],q=p.questions[cqi],tot=p.questions.length,solo=np===1;
  document.getElementById('qn').textContent=cqi+1;document.getElementById('qt').textContent=tot;
  document.getElementById('qf').style.width=((cqi+1)/tot*100)+'%';
  const sc2=document.getElementById('ssc'),ct=document.getElementById('ctt'),ts2=document.getElementById('tts'),bn=document.getElementById('ptb');
  if(solo){sc2.style.display='flex';ct.style.display='none';ts2.style.display='none';bn.style.display='none';document.getElementById('sso').textContent='✓ '+p.correct;document.getElementById('ssb').textContent='✗ '+p.wrong;}
  else{sc2.style.display='none';ct.style.display='flex';ts2.style.display='flex';bn.style.display='flex';document.getElementById('ccd').style.background=PH[cpi];document.getElementById('ccn').textContent=p.name;ts2.innerHTML='';pl.forEach((pl2,i)=>{const ch=document.createElement('div');ch.className='tsc';ch.innerHTML=`<div class="td" style="background:${PH[i]}"></div><span class="to">✓${pl2.correct}</span><span class="tb"> ✗${pl2.wrong}</span>`;ts2.appendChild(ch);});bn.style.background=PL[cpi];bn.style.color=PH[cpi];document.getElementById('ptbd').style.background=PH[cpi];document.getElementById('ptbn').textContent='Turno de '+p.name;}
  const pill=document.getElementById('qtp');
  if(q.type==='drag'){pill.textContent='Completa la frase';pill.className='qtp pd1';}else{pill.textContent='Elige la forma verbal';pill.className='qtp pv1';}
  document.getElementById('qnl').textContent='Pregunta '+(cqi+1)+' de '+tot+' · '+q.cond;
  document.getElementById('sc2').className='sc2';
  document.getElementById('sd').innerHTML=q.phrase.replace('___','<span class="dz" id="dz">suelta aquí</span>')+`<span class="hes">${q.es}</span>`;
  sdz();
  const og=document.getElementById('og');og.innerHTML='';
  shuffle(q.options).forEach(opt=>{const c=document.createElement('div');c.className='oc';c.textContent=opt;c.dataset.value=opt;c.addEventListener('mousedown',smd);c.addEventListener('touchstart',std,{passive:false});og.appendChild(c);});
  document.getElementById('eb').className='eb';document.getElementById('bnx').style.display='none';
}
function sdz(){const dz=document.getElementById('dz');if(!dz)return;dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('da');});dz.addEventListener('dragleave',()=>dz.classList.remove('da'));dz.addEventListener('drop',e=>{e.preventDefault();dz.classList.remove('da');if(dc)da(dc.dataset.value);});dz.addEventListener('mouseup',()=>{if(dc)da(dc.dataset.value);});dz.addEventListener('touchend',()=>{if(dc)da(dc.dataset.value);});}
function smd(e){if(ans)return;dc=e.currentTarget;dc.classList.add('dr');gh.textContent=dc.textContent;gh.style.display='block';mg(e.clientX,e.clientY);document.addEventListener('mousemove',omm);document.addEventListener('mouseup',omu);}
function omm(e){mg(e.clientX,e.clientY);hdz(e.clientX,e.clientY);}
function omu(e){document.removeEventListener('mousemove',omm);document.removeEventListener('mouseup',omu);gh.style.display='none';const dz=document.getElementById('dz');if(dz&&io(e.clientX,e.clientY,dz))da(dc.dataset.value);else if(dc)dc.classList.remove('dr');dc=null;cdz();}
function std(e){if(ans)return;e.preventDefault();const t=e.touches[0];dc=e.currentTarget;dc.classList.add('dr');gh.textContent=dc.textContent;gh.style.display='block';mg(t.clientX,t.clientY);document.addEventListener('touchmove',otm,{passive:false});document.addEventListener('touchend',otu);}
function otm(e){e.preventDefault();const t=e.touches[0];mg(t.clientX,t.clientY);hdz(t.clientX,t.clientY);}
function otu(e){document.removeEventListener('touchmove',otm);document.removeEventListener('touchend',otu);gh.style.display='none';const t=e.changedTouches[0];const dz=document.getElementById('dz');if(dz&&io(t.clientX,t.clientY,dz))da(dc.dataset.value);else if(dc)dc.classList.remove('dr');dc=null;cdz();}
function mg(x,y){gh.style.left=x+'px';gh.style.top=y+'px';}
function hdz(x,y){const dz=document.getElementById('dz');if(!dz)return;io(x,y,dz)?dz.classList.add('da'):dz.classList.remove('da');}
function cdz(){const dz=document.getElementById('dz');if(dz)dz.classList.remove('da');}
function io(x,y,el){const r=el.getBoundingClientRect();return x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom;}
function da(v){
  if(ans)return;ans=true;
  const p=pl[cpi],q=p.questions[cqi],dz=document.getElementById('dz'),sc2=document.getElementById('sc2'),eb=document.getElementById('eb'),ok=v===q.answer;
  dz.textContent=v;dz.classList.remove('da');
  document.querySelectorAll('.oc').forEach(c=>{c.style.pointerEvents='none';c.style.cursor='default';if(c.dataset.value===v){c.classList.remove('dr');c.classList.add(ok?'co':'wo');}if(c.dataset.value===q.answer&&!ok)c.classList.add('co');});
  if(ok){p.correct++;dz.classList.add('cd');sc2.classList.add('cs');eb.className='eb vis';}
  else{p.wrong++;p.wrongQ.push(q);dz.classList.add('wd');dz.textContent=v+' ✗';sc2.classList.add('ws');eb.className='eb vis we';const n=document.createElement('div');n.style.cssText='font-size:.76rem;color:var(--ok);margin-top:.38rem;';n.textContent='✓ Correcto: '+q.answer;document.getElementById('sd').appendChild(n);}
  if(np===1){document.getElementById('sso').textContent='✓ '+p.correct;document.getElementById('ssb').textContent='✗ '+p.wrong;}
  else{document.querySelectorAll('#tts .tsc').forEach((ch,i)=>{ch.innerHTML=`<div class="td" style="background:${PH[i]}"></div><span class="to">✓${pl[i].correct}</span><span class="tb"> ✗${pl[i].wrong}</span>`;});}
  document.getElementById('et').textContent=q.exp;document.getElementById('es2').textContent=q.structure;
  const bn=document.getElementById('bnx');bn.style.display='block';
  const lq=cqi>=p.questions.length-1,lp=cpi>=np-1;
  if(lq&&lp)bn.textContent='Ver resultados 🏁';else if(lq)bn.textContent='Turno de '+pl[(cpi+1)%np].name+' →';else bn.textContent='Siguiente →';
}
function nt(){const p=pl[cpi];if(cqi>=p.questions.length-1){if(cpi<np-1){cpi++;cqi=0;}else{sr2();return;}}else cqi++;rq();window.scrollTo(0,0);}
function sr2(){
  ss('results');const solo=np===1,maxQ=pl[0].questions.length;
  const rk=[...pl].map((p,i)=>({...p,idx:i})).sort((a,b)=>b.correct-a.correct||a.wrong-b.wrong);
  if(solo){const p=pl[0],pct=Math.round(p.correct/maxQ*100);document.getElementById('re').textContent=pct>=90?'🏆':pct>=70?'🎯':pct>=50?'📚':'💪';document.getElementById('rtit').textContent=pct>=90?'¡Excelente!':pct>=70?'¡Muy bien!':pct>=50?'Buen esfuerzo':'¡Sigue practicando!';document.getElementById('rs2').textContent=p.correct+' de '+maxQ+' correctas · '+pct+'%';}
  else{const w=rk[0],tied=rk.length>1&&rk[0].correct===rk[1].correct;document.getElementById('re').textContent=tied?'🤝':'🏆';document.getElementById('rtit').textContent=tied?'¡Empate!':'¡Gana '+w.name+'!';document.getElementById('rs2').textContent=tied?rk[0].name+' y '+rk[1].name+' empatan':w.name+': '+w.correct+' de '+maxQ;}
  const rb=document.getElementById('rb');rb.innerHTML='';
  if(solo){const p=pl[0],pct=Math.round(p.correct/maxQ*100);const ring=document.createElement('div');ring.className='sr';ring.style.background=`conic-gradient(var(--gold) ${pct}%,var(--pale) 0)`;ring.innerHTML=`<div class="sri"><span class="srn">${p.correct}</span><span class="srl">de ${maxQ}</span></div>`;rb.appendChild(ring);const st=document.createElement('div');st.style.cssText='display:flex;gap:.6rem;justify-content:center;margin-bottom:1.3rem;';st.innerHTML=`<div style="background:var(--okl);color:var(--ok);font-weight:700;padding:.52rem 1rem;border-radius:12px;font-size:.88rem;">✓ ${p.correct} correctas</div><div style="background:var(--badl);color:var(--bad);font-weight:700;padding:.52rem 1rem;border-radius:12px;font-size:.88rem;">✗ ${p.wrong} errores</div>`;rb.appendChild(st);}
  else{const pod=document.createElement('div');pod.className='pod';const ord=rk.length===2?[rk[1],rk[0]]:[rk[1],rk[0],rk[2]];const hs=rk.length===2?[75,105]:[80,105,60];const md=rk.length===2?['🥈','🥇']:['🥈','🥇','🥉'];ord.forEach((p,pos)=>{const col=document.createElement('div');col.className='pc';col.innerHTML=`<div style="font-size:1.15rem;">${md[pos]}</div><div class="pb" style="height:${hs[pos]}px;background:${PH[p.idx]};">${p.correct}</div><div class="pn" style="color:${PH[p.idx]}">${p.name}</div><div class="pp">${p.correct}✓ ${p.wrong}✗</div>`;pod.appendChild(col);});rb.appendChild(pod);}
  const cards=document.createElement('div');cards.className='prc';const tr=['🥇','🥈','🥉'];
  rk.forEach((p,ri)=>{const pct=Math.round(p.correct/maxQ*100);const card=document.createElement('div');card.className='prc2 r'+(ri+1);card.innerHTML=`<div class="prk ${ri===0?'r1':''}">${ri+1}</div><div class="prd" style="background:${PH[p.idx]}"></div><div class="pri"><div class="prn">${p.name}</div><div class="prb"><div class="prbf" style="width:0%;background:${PH[p.idx]}" data-pct="${pct}"></div></div><div class="prs"><span class="prs2 ok">✓ ${p.correct}</span><span class="prs2 bad">✗ ${p.wrong}</span><span class="prs2 pct">${pct}%</span></div></div><div class="prtr">${solo?'':(tr[ri]||'')}</div>`;cards.appendChild(card);});
  rb.appendChild(cards);setTimeout(()=>{document.querySelectorAll('.prbf').forEach(el=>{el.style.width=el.dataset.pct+'%';el.style.transition='width 1s ease';});},200);
  const tw=pl.reduce((s,p)=>s+(p.wrongQ?p.wrongQ.length:0),0);
  const be=document.getElementById('bre');if(tw>0){be.style.display='block';be.textContent='📋 Ver errores y repasar ('+tw+' '+(tw===1?'fallo':'fallos')+')';}else be.style.display='none';
}
function svr(){
  ss('review');const tw=pl.reduce((s,p)=>s+(p.wrongQ?p.wrongQ.length:0),0);
  document.getElementById('rvs').textContent=tw+' '+(tw===1?'pregunta fallada':'preguntas falladas');
  const rb=document.getElementById('rvb');rb.innerHTML='';
  if(tw===0){rb.innerHTML='<div class="neo"><span class="nei">🎉</span><div class="net">¡Sin errores! Todo correcto.</div></div>';return;}
  pl.forEach((p,pi)=>{if(!p.wrongQ||p.wrongQ.length===0)return;const sec=document.createElement('div');sec.className='rvps';sec.innerHTML=`<div class="rvph" style="background:${PL[pi]}"><div style="width:10px;height:10px;border-radius:50%;background:${PH[pi]};flex-shrink:0;"></div><span class="rvpn" style="color:${PH[pi]}">${p.name}</span><span class="rvpc">${p.wrongQ.length} ${p.wrongQ.length===1?'error':'errores'}</span></div>`;p.wrongQ.forEach(q=>{const card=document.createElement('div');card.className='wc';const phr=q.phrase.replace('___',`<span class="wa">${q.answer}</span>`);card.innerHTML=`<div class="wp">${phr}</div><div class="we2">${q.es}</div><div class="wm"><span class="wcat">${q.cond}</span><span class="wstr">${q.structure}</span></div><div class="wexp">${q.exp}</div>`;sec.appendChild(card);});const rb2=document.createElement('button');rb2.className='brw';rb2.textContent='🔁 Repetir los '+p.wrongQ.length+' '+(p.wrongQ.length===1?'error':'errores')+' de '+p.name;rb2.onclick=()=>rw(pi);sec.appendChild(rb2);rb.appendChild(sec);});
  const pwe=pl.filter(p=>p.wrongQ&&p.wrongQ.length>0);if(np>1&&pwe.length>1){const ra=document.createElement('button');ra.className='bra';ra.textContent='🔁 Repetir todos los errores ('+tw+')';ra.onclick=rwa;rb.appendChild(ra);}
}
function rw(pi){const p=pl[pi];pl=[{name:p.name,correct:0,wrong:0,wrongQ:[],questions:shuffle([...p.wrongQ])}];np=1;cpi=0;cqi=0;ss('quiz');rq();}
function rwa(){const ac=pl.filter(p=>p.wrongQ&&p.wrongQ.length>0);pl=ac.map(p=>({name:p.name,correct:0,wrong:0,wrongQ:[],questions:shuffle([...p.wrongQ])}));np=pl.length;cpi=0;cqi=0;ss('quiz');rq();}

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

