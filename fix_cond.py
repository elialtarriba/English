import re

with open('conditionals_decoded.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace variables in the generated Quiz Editor code:
# q -> phrase
text = text.replace("document.getElementById('editQQ').value=q.q||'';", "document.getElementById('editQQ').value=q.phrase||'';")
text = text.replace("q.q = qq;", "q.phrase = qq;")
text = text.replace("var t = (q.q + ", "var t = (q.phrase + ")

# a -> answer
text = text.replace("document.getElementById('editQA').value=q.a||'';", "document.getElementById('editQA').value=q.answer||'';")
text = text.replace("if(q.opts[i]!==q.a)", "if(q.opts[i]!==q.answer)")
text = text.replace("q.a = qa;", "q.answer = qa;")
text = text.replace("var t = (q.phrase + \" \" + q.a + ", "var t = (q.phrase + \" \" + q.answer + ")

# opts -> options
text = text.replace("if(q.opts){", "if(q.options){")
text = text.replace("for(var i=0;i<q.opts.length;i++){", "for(var i=0;i<q.options.length;i++){")
text = text.replace("q.opts[i]", "q.options[i]")
text = text.replace("q.opts = arr;", "q.options = arr;")

# trans -> es
text = text.replace("document.getElementById('editQTrans').value=q.trans||'';", "document.getElementById('editQTrans').value=q.es||'';")
text = text.replace("q.trans = document.getElementById('editQTrans').value.trim();", "q.es = document.getElementById('editQTrans').value.trim();")
text = text.replace("(q.trans||\"\")", "(q.es||\"\")")

# reason -> exp
text = text.replace("document.getElementById('editQReason').value=q.reason||'';", "document.getElementById('editQReason').value=q.exp||'';")
text = text.replace("q.reason = document.getElementById('editQReason').value.trim();", "q.exp = document.getElementById('editQReason').value.trim();")

# cond filtering
text = text.replace("if(filt !== 'all' && q.type !== filt) continue;", "if(filt !== 'all' && q.cond !== filt) continue;")
text = text.replace("document.getElementById('quizEditorPos').textContent=(quizEditorAt+1)+'/'+quizEditorList.length+' (' + (q.type||'General') + ')';", "document.getElementById('quizEditorPos').textContent=(quizEditorAt+1)+'/'+quizEditorList.length+' (' + (q.cond||'General') + ')';")
text = text.replace("type: type, reason: '', trans: '', v: false", "type: 'drag', cond: type, exp: '', es: '', v: false")
text = text.replace("q: 'If ___ ...', a: 'answer', opts:", "phrase: 'If ___ ...', answer: 'answer', options:")

with open('conditionals_decoded.html', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed variables in conditionals_decoded.html")
