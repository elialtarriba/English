
    function requestFlashcards(){openPasswordDialog('flashcards',()=>window.parent.postMessage({action:'openVerbStudyEditor'}, '*'));}
    function requestQuizEditor(){openPasswordDialog('quiz',()=>window.parent.postMessage({action:'openVerbQuizEditor'}, '*'));}
    