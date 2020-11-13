const quizData = [
    {
        question: "Who is the President of US?",
        a: "Joe Biden",
        b: "Donald Trump",
        c: "Mike Pence",
        d: "Angela Merkel",
        correct: "a",
    },
    {
        question: "50 times 5 is equal to",
        a: "2500 ",
        b: "505",
        c: "500",
        d: "None of these",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: " Find the sum of 111 + 222 + 333",
        a: "700",
        b: "666",
        c: "10",
        d: "100",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
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

submitBtn.addEventListener("click", () => {
    // check to see the answer
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
                <h2> You answered  correctly  at  ${score} / ${quizData.length}  questions.</h2>
                <div class="correct">
    
                    <h1>True Answers</h1>
                    <div class="correct1">

                    <h4>1) Joe Biden</h4>
                    <h4>2) None of these</h4>
                    <h4>3) Hypertext Markup Language</h4>
                    <h4>4) 666</h4>
                    </div>
    
                </div>

                
        
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
