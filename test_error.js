const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'utf-8');

let b64 = "";
for (let line of html.split('\n')) {
    if (line.includes('VERBTENSESEMBED') && line.includes('=')) {
        b64 = line.split('"')[1];
        break;
    }
}

let decoded = Buffer.from(b64, 'base64').toString('utf-8');

// To simulate what happens, we can just extract the functions and run them
// Wait, JSDOM failed earlier because of ESM issues in node_modules, but we can just use `eval`.

let start = decoded.indexOf('let QB=[');
let end = decoded.indexOf(']; // end QB');
if (end === -1) end = decoded.indexOf('];\n// end QB');
let qb_str = decoded.substring(start, end + 1);

// evaluate QB
eval('global.QB = ' + qb_str.replace('let QB=', '') + ';');

// simulate a null inside QB from localStorage corruption
global.QB[0][1] = null;

let quizEditorList = [];
let quizEditorAt = 0;

function fixText(t){return typeof t==='string'?t.replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"'):t;}

function buildQuizEditorList(){
  const q='';
  const f='all';
  quizEditorList=[];
  if(f==='all') {
    global.QB.forEach((bank,mode)=>{if(bank)bank.forEach((item,index)=>{
        // THIS IS THE LINE THAT WOULD CRASH IF ITEM IS NULL
        const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();
        if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});
    })});
  }
}

try {
    buildQuizEditorList();
    console.log("Success!");
} catch(e) {
    console.log("Error caught:", e);
}
