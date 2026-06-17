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

# The current function is:
# function requestQuizEditor(){openPasswordDialog('quiz',()=>{alert('Password validada. Cargando editor...');openQuizEditor();});}
# or
# function requestQuizEditor(){openPasswordDialog('quiz',()=>openQuizEditor());}

import re
decoded = re.sub(r'function requestQuizEditor\(\)\{.*?\}', 'function requestQuizEditor(){openQuizEditor();}', decoded)

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
