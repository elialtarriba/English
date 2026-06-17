import base64

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

verb_idx = -1
for i, line in enumerate(lines):
    if line.startswith('var VERBTENSESEMBED') and '=' in line:
        verb_idx = i
        break

b64 = lines[verb_idx].split('\"')[1]
decoded = base64.b64decode(b64).decode('utf-8')

old_func = '''function openQuizEditor(){document.getElementById('quizSearch').value='';quizEditorAt=0;buildQuizEditorList();loadQuizEditor();document.getElementById('quizEditorModal').classList.add('vis');}'''
new_func = '''function openQuizEditor(){
  try{
    document.getElementById('quizSearch').value='';
    quizEditorAt=0;
    buildQuizEditorList();
    loadQuizEditor();
    document.getElementById('quizEditorModal').classList.add('vis');
  }catch(e){
    alert("ERROR en openQuizEditor: " + e.message);
  }
}'''

if old_func in decoded:
    decoded = decoded.replace(old_func, new_func)
    print("Replaced openQuizEditor")
else:
    print("Could not find old openQuizEditor")

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
