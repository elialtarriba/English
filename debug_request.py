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

old_func = "function requestQuizEditor(){openPasswordDialog('quiz',()=>openQuizEditor());}"
new_func = "function requestQuizEditor(){openPasswordDialog('quiz',()=>{alert('Password validada. Cargando editor...');openQuizEditor();});}"

if old_func in decoded:
    decoded = decoded.replace(old_func, new_func)
    print("Replaced requestQuizEditor")
else:
    print("Could not find old requestQuizEditor")

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
