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

import re
decoded = re.sub(r'function requestQuizEditor\(\)\{openQuizEditor\(\);\};\};\}', 'function requestQuizEditor(){openQuizEditor();}', decoded)
decoded = re.sub(r'function requestQuizEditor\(\)\{openQuizEditor\(\);\};\)', 'function requestQuizEditor(){openQuizEditor();}', decoded)
decoded = re.sub(r'function requestQuizEditor\(\)\{openQuizEditor\(\);\};\};', 'function requestQuizEditor(){openQuizEditor();}', decoded)
decoded = re.sub(r'function requestQuizEditor\(\)\{openQuizEditor\(\);\}\);\s*\}', 'function requestQuizEditor(){openQuizEditor();}', decoded)

# just to be absolutely sure, find the exact line
start = decoded.find('function requestQuizEditor(){')
end = decoded.find('function requestDownload()')
if start != -1 and end != -1:
    decoded = decoded[:start] + 'function requestQuizEditor(){openQuizEditor();}\n' + decoded[end:]

new_b64 = base64.b64encode(decoded.encode('utf-8')).decode('utf-8')
lines[verb_idx] = f'var VERBTENSESEMBED="{new_b64}";\n'

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Fixed syntax error")
