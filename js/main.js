var exam = {

  parentElem: document.body,

  createElem: function(elTag, elClass, elType){
    var elem = document.createElement(elTag);
    elem.className = elClass;
    elem.type = elType;
    return elem
  },

  addWrapper: function () {
    var wrapper = this.createElem('div','container wrapper center-block');
    this.parentElem.appendChild(wrapper);
    return wrapper;
  },

  addTitle: function (parent, txt) {
    var title = this.createElem ('h2', 'title text-center');
    title.innerHTML = txt;
    parent.appendChild(title);
  },

  addQuestion: function (parent, txt) {
    var question = this.createElem ('div', 'question');
    question.innerHTML = txt;
    parent.appendChild(question);
    return question
  },

  addAnswer: function(parent, txt, num){
    var answer = this.createElem ('div', 'answer-item');
    var answerLabel = this.createElem ('label', '');
    var answerCheckbox = this.createElem ('input', 'answer','checkbox');
    answerCheckbox.id =  num;
    answer.appendChild(answerCheckbox);
    answer.appendChild(answerLabel);
    answerLabel.innerHTML = txt;
    answerLabel.setAttribute('for', num);
    parent.appendChild(answer);
  },

  addButton: function(parent, txt){
    var button = this.createElem ('button',
        'btn btn-primary btn-md btn-block center-block', 'button');
    button.innerHTML = txt;
    parent.appendChild(button);
  }
};

var wrapper = exam.addWrapper();
exam.addTitle(wrapper, 'Тест по программированию');

for (var i = 1; i < 4; i++){
  var questionText = '<h4>' + i + ' Вопрос № ' + i + '</h4>';
  var question = exam.addQuestion(wrapper, questionText);
  for (var j = 1; j < 4; j++) {
    var answerText = ' Вариант ответа № ' + j;
    exam.addAnswer(question, answerText, 'q'+i+'a'+j);
  }
};

exam.addButton(wrapper, 'Проверить мои результаты');