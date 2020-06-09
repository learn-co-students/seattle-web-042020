const RANDOM_QUESTION_URL = "http://jservice.io/api/random";
const ANSWER_TRACKING_URL = "http://localhost:3000/correctAnswers";

//YOUR CODE HERE

document.addEventListener("DOMContentLoaded", () => {
  const answerButton = document.getElementById("answer-button");
  const answerCard = document.getElementById("answer");
  const questionCard = document.getElementById("question");
  answerButton.addEventListener("click", function () {
    answerCard.style.display = "block";
  });

  const correctButton = document.getElementById("right-button");
  correctButton.addEventListener("click", function () {
    const correctAnswer = answerCard.querySelector(".card-text").innerText;
    const question = questionCard.querySelector(".card-text").innerText;
    postNewCorrectAnswer(correctAnswer, question);
    incrementScore();
    answerCard.style.display = "none";
    fetchData();
  });
  const wrongButton = document.getElementById("wrong-button");
  wrongButton.addEventListener("click", function () {
    answerCard.style.display = "none";
    fetchData();
  });
  fetchData();

  function fetchData() {
    fetch(RANDOM_QUESTION_URL)
      .then((res) => res.json())
      .then((json) => {
        renderTrivia(json[0]);
      });
  }

  function postNewCorrectAnswer(answer, question) {
    console.log(answer);
    fetch(ANSWER_TRACKING_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        answer: answer,
        question: question,
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  function renderTrivia(triviaData) {
      console.log(triviaData)
    const question = triviaData.question;
    const category = triviaData.category.title;
    const answer = triviaData.answer;
    questionCard.querySelector(".card-title").innerText = category;
    questionCard.querySelector(".card-text").innerText = question;
    answerCard.querySelector(".card-text").innerText = answer;
  }

  function incrementScore() {
    console.log("trying to increase score");
    let scoreNode = document.querySelector("#correct");
    scoreNode.innerText++;
  }
});
