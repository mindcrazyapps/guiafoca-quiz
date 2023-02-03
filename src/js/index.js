const quizData = [
  {
    question: "como é chamada as versões do linux?",
    a: "distros torvalds",
    b: "distros linux",
    c: "versões linux",
    correct: "c",
  }, {
    question: "quem foi linux torvalds?",
    a: "ativista ambiental",
    b: "programador",
    c: "cientista da computação",
    correct: "c",
  } , {
    question: "quem desenvolveu o kernell do linux?",
    a: "linux torvalds e contribudores",
    b: "linux torvalds",
    c: "linux torvalds e richard stallman",
    correct: "a",
  } , {
    question: "quantas distro linux existem?",
    a: "nenhuma",
    b: "não sei",
    c: "200 distro linux",
    correct: "a",
  } , {
    question: "linux é um kernel ou sistema operacional?",
    a: "kernel",
    b: "sistema aberto",
    c: "sistema operacional",
    correct: "a",
  } , {
    question: "quais são os tipos de memória em um kernel linux?",
    a: "memória livre",
    b: "memória ram",
    c: "não sei",
    correct: "b",
  } , {
    question: "linux torvalds é academico de qual universidade?",
    a: "japan",
    b: "estados unidos",
    c: "suécia",
    correct: "b",
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

/* let - var - conts arasındaki fark?
1-let block scope özelliklidir kullanıldığı yer dışında kullanılamaz !!
2-var ise function scope özelliklidir yani erişilebilir.
3-conts ile oluşturulan bir değişkene daha sonrasında tekrar değer ataması yapılamaz.
4-let ile yapılabilir.  */
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  $("#question").text(currentQuizData.question);
  $("#a_text").text(currentQuizData.a);
  $("#b_text").text(currentQuizData.b);
  $("#c_text").text(currentQuizData.c);
}


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

$("#submit").click(function() {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
                quiz.innerHTML = `
                <h2>${score}/${quizData.length} pontuação final. </h2>

                <button onclick="location.reload()">voltar ao jogo guiafoca-quiz</button>
            `;
        }
    }
});
