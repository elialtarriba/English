import re

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Replace all "Vocab. B2.1" and "Vocab B2.1" with "B2.1"
text = text.replace('Vocab. B2.1', 'B2.1')
text = text.replace('Vocab B2.1', 'B2.1')
text = text.replace('Vocab. B2.2', 'B2.2')
text = text.replace('Vocab B2.2', 'B2.2')
text = text.replace('Vocabulario B2.1', 'B2.1')

# 2. Fix the inline edit Type section
old_type_section = """<div class="fc-sec" data-sec="type">
              <div class="fc-sec-lbl">Tipo</div>
              <div class="fc-sec-val" id="fcTypeVal">—</div>
            </div>
            <div class="fc-sec fc-edit-only">
              <div class="fc-sec-lbl">Categoría</div>
              <select id="fcTypeSelect" class="fc-select-edit">
                <option value="adverb">Adverbios</option>
                <option value="adjective">Adjetivos</option>
                <option value="phrasal">Phrasal V.</option>
                <option value="connector">Conectores</option>
                <option value="starter">Inicios</option>
                <option value="verb">Verbos</option>
                <option value="b2_1">B2.1</option>
                <option value="b2_2">B2.2</option>
              </select>
            </div>"""

new_type_section = """<div class="fc-sec" data-sec="type">
              <div class="fc-sec-lbl">Tipo</div>
              <div class="fc-sec-val" id="fcTypeVal">—</div>
              <select id="fcTypeSelect" class="fc-select-edit fc-edit-only" style="width:100%; margin-top:6px; padding:10px 14px; border-radius:12px; background:#eef7eb; border:1.5px solid #c4e1c3; color:#2c4230; font-weight:800; font-family:var(--fb); cursor:pointer; outline:none; box-shadow:0 4px 0 #c4e1c3;">
                <option value="adverb">Adverbios</option>
                <option value="adjective">Adjetivos</option>
                <option value="phrasal">Phrasal V.</option>
                <option value="connector">Conectores</option>
                <option value="starter">Inicios</option>
                <option value="verb">Verbos</option>
                <option value="b2_1">B2.1</option>
                <option value="b2_2">B2.2</option>
              </select>
            </div>"""

if old_type_section in text:
    text = text.replace(old_type_section, new_type_section)
else:
    print("Could not find old_type_section!")

# Hide fcTypeVal when in edit mode
hide_css = ".show-edit #fcTypeVal { display: none !important; }"
if hide_css not in text:
    text = text.replace('</style>', hide_css + '\n</style>')

# 3. Update the select in addCardModal to look like a button
old_newcat = '<div class="form-row"><label>Tipo</label><select id="newCat"><option value="phrasal">Phrasal verb</option><option value="verb">Verbo</option><option value="adverb">Adverbio</option><option value="adjective">Adjetivo</option><option value="connector">Conector</option><option value="starter">Inicio de frase</option><option value="b2_1">B2.1</option><option value="b2_2">B2.2</option></select></div>'
new_newcat = '<div class="form-row"><label>Tipo</label><select id="newCat" style="width:100%; padding:12px 14px; border-radius:12px; background:#eef7eb; border:1.5px solid #c4e1c3; color:#2c4230; font-weight:800; font-family:var(--fb); cursor:pointer; outline:none; box-shadow:0 4px 0 #c4e1c3;"><option value="phrasal">Phrasal verb</option><option value="verb">Verbo</option><option value="adverb">Adverbio</option><option value="adjective">Adjetivo</option><option value="connector">Conector</option><option value="starter">Inicio de frase</option><option value="b2_1">B2.1</option><option value="b2_2">B2.2</option></select></div>'

if old_newcat in text:
    text = text.replace(old_newcat, new_newcat)
else:
    print("Could not find old_newcat!")

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated perfectly!")
