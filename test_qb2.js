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

let QB;
try {
    eval(qb_str);
    console.log("QB size:", QB.length);
    for(let i=0; i<QB.length; i++) {
        if (!QB[i]) console.log(`QB[${i}] is ${QB[i]}`);
        else console.log(`QB[${i}] has length ${QB[i].length}`);
    }
} catch(e) {
    console.log("Error evaluating QB:", e);
}
