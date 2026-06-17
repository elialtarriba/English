const jsdom = require("jsdom");
const { JSDOM } = jsdom;
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

const dom = new JSDOM(decoded);
const doc = dom.window.document;

console.log("quizSearch element:", !!doc.getElementById('quizSearch'));
console.log("quizEditorPos element:", !!doc.getElementById('quizEditorPos'));

// Check for any unclosed tags or DOM tree anomalies
let pos = doc.getElementById('quizEditorPos');
if (pos) {
    console.log("quizEditorPos parent:", pos.parentElement.tagName, pos.parentElement.className);
} else {
    console.log("quizEditorPos is genuinely null in JSDOM!");
}

