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

# The code to replace:
old_line = "if(bank)bank.forEach((item,index)=>{const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});})"
new_line = "if(bank)bank.forEach((item,index)=>{if(!item)return;const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});})"

if old_line in decoded:
    decoded = decoded.replace(old_line, new_line)
    print("Replaced inside if(f==='all') block")
else:
    print("Could not find old_line 1")

old_line2 = "if(QB[mode]) QB[mode].forEach((item,index)=>{const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});});"
new_line2 = "if(QB[mode]) QB[mode].forEach((item,index)=>{if(!item)return;const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});});"

if old_line2 in decoded:
    decoded = decoded.replace(old_line2, new_line2)
    print("Replaced inside else block")
else:
    print("Could not find old_line 2")

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
