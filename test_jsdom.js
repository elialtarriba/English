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

const dom = new JSDOM(decoded, { runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

setTimeout(() => {
    try {
        console.log("Calling openQuizEditor()...");
        window.openQuizEditor();
        console.log("Successfully called openQuizEditor.");
        console.log("quizEditorModal classList:", document.getElementById('quizEditorModal').className);
    } catch(e) {
        console.error("ERROR running openQuizEditor:", e);
    }
}, 500);
