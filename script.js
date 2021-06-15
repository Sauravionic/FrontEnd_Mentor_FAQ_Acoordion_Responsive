

var ques = document.getElementsByClassName('questions');
    var quesHD = document.getElementsByClassName('question_row');
    for (i = 0; i < quesHD.length; i++) {
        quesHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < ques.length; i++) {
            ques[i].className = 'questions close';
        }
        if (itemClass == 'questions close') {
            this.parentNode.className = 'questions open';
        }
    }