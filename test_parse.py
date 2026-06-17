import base64
from html.parser import HTMLParser

class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.tree = []

    def handle_starttag(self, tag, attrs):
        node = {'tag': tag, 'attrs': attrs, 'children': []}
        if self.stack:
            self.stack[-1]['children'].append(node)
        else:
            self.tree.append(node)
        
        if tag not in ['input', 'br', 'hr', 'img']:
            self.stack.append(node)

    def handle_endtag(self, tag):
        if tag not in ['input', 'br', 'hr', 'img']:
            if self.stack and self.stack[-1]['tag'] == tag:
                self.stack.pop()

def find_node(node, _id):
    if dict(node['attrs']).get('id') == _id:
        return node
    for child in node['children']:
        res = find_node(child, _id)
        if res: return res
    return None

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    for line in f.readlines():
        if 'VERBTENSESEMBED' in line and '=' in line:
            b64 = line.split('\"')[1]
            decoded = base64.b64decode(b64).decode('utf-8')
            parser = TreeBuilder()
            parser.feed(decoded)
            
            for root in parser.tree:
                pos = find_node(root, 'quizEditorPos')
                if pos:
                    print("Found quizEditorPos!")
                    break
            break
