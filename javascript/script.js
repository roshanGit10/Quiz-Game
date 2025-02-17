const question = document.querySelector(".question");
const answerOptions = document.querySelector("#answer-options");
const nextBtn = document.querySelector(".next-button");
const questionStatus = document.querySelector(".question-status");
const time = document.querySelector(".current-time");

const quizContainer = document.querySelector("#main2");
const resultContainer = document.querySelector("#main3");
const quizStart = document.querySelector("#main");

const tryAgain = document.querySelector(".try-again");
const startBtn = document.querySelector("#main .start");

let quizCategory = "programming";
let currentQuestion = null;
const questionIndexHistory = [];
let numberOfQuestion = 2;

const QUIZ_TIME_LIMIT = 120;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;

let correctAnswerCount = 0;

const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  time.textContent = `${currentTime}`;
};

const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    time.textContent = `${currentTime}`;

    if (currentTime <= 0) {
      clearInterval(timer);

      highlightCorrectAnswer();

      nextBtn.style.visibility = "visible";

      answerOptions.querySelectorAll(".answer-option").forEach((option) => {
        option.style.pointerEvents = " none";
      });
    }
  }, 1000);
};

const result = () => {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestion}</b> questions. Great effort.`;
  document.querySelector("#main3 .result").innerHTML = resultText;
};

// 1) get random question
const getRandomQuestion = () => {
  const categoryQuestions =
    questions.find(
      (cat) => cat.category.toLowerCase() === quizCategory.toLowerCase()
    ).questions || [];

  // show the result if all questions have been used
  if (
    questionIndexHistory.length >=
    Math.min(categoryQuestions.length, numberOfQuestion)
  ) {
    return result();
  }

  //Filter out already asked question and choose random one
  const availableQuestion = categoryQuestions.filter(
    (_, index) => !questionIndexHistory.includes(index)
  );

  const randomIndex = Math.floor(Math.random() * availableQuestion.length);
  const randomQuestion = availableQuestion[randomIndex];

  questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
  return randomQuestion;
};

const highlightCorrectAnswer = () => {
  const correctAnswer =
    answerOptions.querySelectorAll(".answer-option")[
      currentQuestion.correctAnswer
    ];
  correctAnswer.classList.add("correct");
};

const handleAnswer = (option, answerIndex) => {
  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? "correct" : "incorrect");

  !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++;
  nextBtn.style.visibility = "visible";

  //Disable all answer option ater one option is selected
  answerOptions
    .querySelectorAll(".answer-option")
    .forEach((option) => (option.style.pointerEvents = "none"));
};

const startQuiz = () => {
  quizStart.style.display = "none";
  quizContainer.style.display = "block";

  quizCategory = quizStart.querySelector(".category-option.active").textContent;

  numberOfQuestion = parseInt(
    quizStart.querySelector(".question-option.active").textContent
  );

  renderQuestion();
};

document
  .querySelectorAll(".category-option, .question-option")
  .forEach((option) => {
    return option.addEventListener("click", () => {
      option.parentNode.querySelector(".active").classList.remove("active");
      option.classList.add("active");
    });
  });

// Reset the quiz and return to the configuration container
const resetQuiz = () => {
  resetTimer();
  correctAnswerCount = 0;
  questionIndexHistory.length = 0;

  resultContainer.style.display = "none";
  quizStart.style.display = "block";
};

// 2) render question in the UI
const renderQuestion = () => {
  currentQuestion = getRandomQuestion();

  question.textContent = currentQuestion.question;

  resetTimer();
  startTimer();

  answerOptions.innerHTML = "";
  nextBtn.style.visibility = "hidden";

  questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestion}</b> Questions`;

  //console.log(currentQuestion);

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option;
    answerOptions.appendChild(li);
    li.addEventListener("click", () => {
      handleAnswer(li, index);
    });
  });
};

//renderQuestion();

nextBtn.addEventListener("click", renderQuestion);

tryAgain.addEventListener("click", () => {
  resetQuiz();
});

startBtn.addEventListener("click", startQuiz);
