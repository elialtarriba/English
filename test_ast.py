import base64
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.found_quizSearch = False
        self.found_quizEditorPos = False
        self.found_quizFilter = False

    def handle_starttag(self, tag, attrs):
        for attr in attrs:
            if attr[0] == 'id':
                if attr[1] == 'quizSearch': self.found_quizSearch = True
                if attr[1] == 'quizEditorPos': self.found_quizEditorPos = True
                if attr[1] == 'quizFilter': self.found_quizFilter = True

with open('/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/ELI_ENGLISH/English.html', 'r', encoding='utf-8') as f:
    for line in f.readlines():
        if 'VERBTENSESEMBED' in line and '=' in line:
            b64 = line.split('\"')[1]
            decoded = base64.b64decode(b64).decode('utf-8')
            parser = MyHTMLParser()
            parser.feed(decoded)
            print("quizSearch found:", parser.found_quizSearch)
            print("quizEditorPos found:", parser.found_quizEditorPos)
            print("quizFilter found:", parser.found_quizFilter)
            break
