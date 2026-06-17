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

# 1. Fix the wiping bug
old_label = '<div class="app-label">Pregunta <span id="quizEditorPos"></span></div>'
new_label = '<div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text3);margin-top:10px;">Pregunta <span id="quizEditorPos"></span></div>'
decoded = decoded.replace(old_label, new_label)

# 2. Restore requestQuizEditor (to use password again)
import re
decoded = re.sub(r'function requestQuizEditor\(\)\{openQuizEditor\(\);\s*\}', 'function requestQuizEditor(){openPasswordDialog(\'quiz\',()=>openQuizEditor());}', decoded)

# 3. Restore openQuizEditor (remove debug alerts and try-catch)
old_open = '''function openQuizEditor(){
  try{
    var qsearch = document.getElementById('quizSearch');
    var qpos = document.getElementById('quizEditorPos');
    alert("quizSearch es: " + (qsearch ? "existe" : "NULL") + "\\nquizEditorPos es: " + (qpos ? "existe" : "NULL"));
    
    qsearch.value='';
    quizEditorAt=0;
    buildQuizEditorList();
    loadQuizEditor();
    document.getElementById('quizEditorModal').classList.add('vis');
  }catch(e){
    alert("ERROR en openQuizEditor: " + e.message);
  }
}'''

new_open = '''function openQuizEditor(){
  document.getElementById('quizSearch').value='';
  quizEditorAt=0;
  buildQuizEditorList();
  loadQuizEditor();
  document.getElementById('quizEditorModal').classList.add('vis');
}'''

if old_open in decoded:
    decoded = decoded.replace(old_open, new_open)

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Final fix applied successfully!")
