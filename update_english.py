import base64

with open('conditionals_decoded.html', 'r', encoding='utf-8') as f:
    cond_html = f.read()

new_cond_b64 = base64.b64encode(cond_html.encode('utf-8')).decode('utf-8')

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
for i, line in enumerate(lines):
    if line.startswith('var CONDITIONALSEMBED') and '=' in line:
        lines[i] = f'var CONDITIONALSEMBED="{new_cond_b64}";'
        break

text = '\n'.join(lines)

# Inject logic into downloadEditedHtml
old_dl = '''async function downloadEditedHtml(){
if(document.activeElement && document.activeElement.blur) document.activeElement.blur();
updateHomeTotal();
saveExamplesFromDom();
saveUserCards();
saveQuizEdits();'''

new_dl = '''async function downloadEditedHtml(){
if(document.activeElement && document.activeElement.blur) document.activeElement.blur();
updateHomeTotal();
saveExamplesFromDom();
saveUserCards();
saveQuizEdits();
try{
  var vF=document.getElementById('verbTensesFrame');
  if(vF&&vF.contentWindow){
    if(vF.contentWindow.SD) USER_EDITS.verb_study=vF.contentWindow.SD;
    if(vF.contentWindow.QB) USER_EDITS.verb_quiz=vF.contentWindow.QB;
  }
  var cF=document.getElementById('conditionalsFrame');
  if(cF&&cF.contentWindow){
    if(cF.contentWindow.CD) USER_EDITS.cond_study=cF.contentWindow.CD;
    if(cF.contentWindow.QD) USER_EDITS.cond_quiz=cF.contentWindow.QD;
  }
}catch(e){}'''

text = text.replace(old_dl, new_dl)

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Injected Conditionals and updated downloadEditedHtml")
