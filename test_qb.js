const fs = require('fs');
const html = fs.readFileSync('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'utf-8');

let b64 = "";
for (let line of html.split('\n')) {
    if (line.includes('VERBTENSESEMBED') && line.includes('=')) {
        b64 = line.split('"')[1];
        break;
    }
}

let decoded = Buffer.from(b64, 'base64').toString('utf-8');

// Extract QB
let qb_str = "";
let qb_match = decoded.match(/let QB=\[[\s\S]*?\];\s*\/\/ end QB/);
if (qb_match) {
    qb_str = qb_match[0];
} else {
    // try fallback
    let start = decoded.indexOf('let QB=[');
    let end = decoded.indexOf(']; // end QB');
    if (end === -1) end = decoded.indexOf('];\n// end QB');
    qb_str = decoded.substring(start, end + 2);
}

// Evaluate QB
let QB;
try {
    eval(qb_str);
} catch(e) {
    console.log("Error evaluating QB:", e);
}

// Simulate buildQuizEditorList
let quizEditorList = [];
let q = "";
try {
    QB.forEach((bank,mode) => bank.forEach((item,index) => {
        const text = [item.q, item.a, item.es, item.t, item.e].join(' ').toLowerCase();
        if(!q || text.includes(q)) quizEditorList.push({mode, index, item});
    }));
    console.log("quizEditorList generated successfully. Size:", quizEditorList.length);
} catch(e) {
    console.log("Error in buildQuizEditorList:", e);
}

const QNAMES=['Acciones Presentes','Acciones Pasadas','Acciones Futuras','Todo Mezclado'];

// Simulate loadQuizEditor
let quizEditorAt = 0;
try {
    const row = quizEditorList[quizEditorAt], itemQ = row.item;
    let label = (quizEditorAt+1)+'/'+quizEditorList.length+' · '+QNAMES[row.mode];
    let val = itemQ.q || '';
    let o_val = (itemQ.o || []).join('\n');
    console.log("loadQuizEditor successful. Label:", label);
} catch(e) {
    console.log("Error in loadQuizEditor:", e);
}
