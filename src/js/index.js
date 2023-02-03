const quizData = [
  {
    question: "como é chamada as versões do linux?",
    a: "distros torvalds",
    b: "distros linux",
    c: "versões linux",
    correct: "distro linux",
  }, {
    question: "quem foi linux torvalds?",
    a: "ativista ambiental",
    b: "programador",
    c: "cientista da computação",
    correct: "cientista da computação",
  } , {
    question: "quem desenvolveu o kernell do linux?",
    a: "linux torvalds e contribudores",
    b: "linux torvalds",
    c: "linux torvalds e richard stallman",
    correct: "linux torvalds e contribudores",
  } , {
    question: "Vakıf üniversiteleri arasında en çok öğrenciye sahip kurum hangisidir?",
    a: "İstanbul Gelişim Üniversitesi",
    b: "İstanbul Aydın Üniversitesi",
    c: "Nişantaşı Üniversitesi",
    correct: "b",
  } , {
    question: "Devlet üniversiteleri arasında en çok doktora yapan öğrenci sayısına sahip kurum hangisidir?",
    a: "Ankara Üniversitesi",
    b: "Boğaziçi Üniversitesi",
    c: "Marmara Üniversitesi",
    correct: "a",
  } , {
    question: "Türkiye’deki en pahalı vakıf üniversitesi hangisidir?",
    a: "Koç Üniversitesi",
    b: "Sabancı Üniversitesi",
    c: "Özyeğin Üniversitesi",
    correct: "a",
  } , {
    question: "Devlet üniversiteleri genel memnuniyet sıralamasında en sonda hangi üniversite yer alıyordur?",
    a: "Bayburt Üniversitesi",
    b: "Hakkari Üniversitesi",
    c: "Ankara Müzik ve Güzel Sanatlar Üniversitesi",
    correct: "c",
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
                <h2>${score}/${quizData.length} doğru cevap.</h2>

                <button onclick="location.reload()">Tekrar dene.</button>
            `;
        }
    }
});
