const fs = require('fs');
const html = fs.readFileSync('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/g);
if (match) {
  match.forEach((script, i) => {
    fs.writeFileSync(`script_${i}.js`, script.replace(/<\/?script>/g, ''));
  });
}
