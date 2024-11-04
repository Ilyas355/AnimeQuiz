document.addEventListener("DOMContentLoaded", function () {
  // event Listeners

  let easyPageButton = document.getElementById("easy");
  easyPageButton.addEventListener("click", displayEasyPage);

  let mediumPageButton = document.getElementById("medium");
  mediumPageButton.addEventListener("click", displayMediumPage);

  let hardPageButton = document.getElementById("hard");
  hardPageButton.addEventListener("click", displayHardPage);

  let hint = document.getElementById("hint");
  hint.addEventListener("click", showHint);

  let backButton = document.getElementsByClassName("back");
  for (let i = 0; i < backButton.length; i++) {
    backButton[i].addEventListener("click", back);
  }

  let optionButtons = document.getElementsByClassName("selection");
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener("click", chooseOption);
  }

  let startQuizButton = document.getElementsByClassName("startQuizBtn");
  for (let i = 0; i < startQuizButton.length; i++) {
    startQuizButton[i].addEventListener("click", startQuiz);
  }

  let playAgain = document.getElementById("playAgain");
  playAgain.addEventListener("click", playAgainFunction);

  easyQuiz = [
    {
      name: "Aizen",
      img: "assets/images/EasyQuiz/Aizen.webp",
      hint: "This character is from Bleach",
    },
    {
      name: "Edward Elric",
      img: "assets/images/EasyQuiz/Edward_Elric.webp",
      hint: "This character is from FullMetal Alchemist",
    },
    {
      name: "Eren Yeager",
      img: "assets/images/EasyQuiz/Eren_Yeager.webp",
      hint: "This character is from AttackOnTitan",
    },
    {
      name: "Frieza",
      img: "assets/images/EasyQuiz/Frieza.webp",
      hint: "This character is from Dragon Ball Z",
    },
    {
      name: "Goku",
      img: "assets/images/EasyQuiz/Goku.webp",
      hint: "This character is from Dragon Ball Z",
    },
    {
      name: "Gon",
      img: "assets/images/EasyQuiz/Gon.webp",
      hint: "This character is from Hunter X Hunter",
    },
    {
      name: "Hisoka",
      img: "assets/images/EasyQuiz/Hisoka.webp",
      hint: "This character is from Hunter X Hunter",
    },
    {
      name: "Ichigo",
      img: "assets/images/EasyQuiz/Ichigo.webp",
      hint: "This character is from Bleach",
    },
    {
      name: "Itachi",
      img: "assets/images/EasyQuiz/Itachi.webp",
      hint: "This character is from Naruto",
    },
    {
      name: "Kakashi Hatake",
      img: "assets/images/EasyQuiz/Kakashi_Hatake.webp",
      hint: "This character is from Naruto",
    },
    {
      name: "Killua",
      img: "assets/images/EasyQuiz/Killua.webp",
      hint: "This character is from Hunter X Hunter",
    },
    {
      name: "Krillin",
      img: "assets/images/EasyQuiz/Krillin.webp",
      hint: "This character is from Dragon Ball Z",
    },
    {
      name: "L",
      img: "assets/images/EasyQuiz/L.webp",
      hint: "This character is from Death Note",
    },
    {
      name: "Levi Ackerman",
      img: "assets/images/EasyQuiz/Levi_ackerman.webp",
      hint: "This character is from AttackOnTitan",
    },
    {
      name: "Light",
      img: "assets/images/EasyQuiz/LightYagami.webp",
      hint: "This character is from Death Note",
    },
    {
      name: "Madara Uchiha",
      img: "assets/images/EasyQuiz/madara-uchiha.webp",
      hint: "This character is from Naruto",
    },
    {
      name: "Midoriya",
      img: "assets/images/EasyQuiz/Midoriya.webp",
      hint: "This character is from MyHeroAcadamia",
    },
    {
      name: "Minato",
      img: "assets/images/EasyQuiz/Minato.webp",
      hint: "This character is from Naruto",
    },
    {
      name: "Monkey D. Luffy",
      img: "assets/images/EasyQuiz/Monkey_D_Luffy.webp",
      hint: "This character is from One Piece",
    },
    {
      name: "Naruto",
      img: "assets/images/EasyQuiz/Naruto.webp",
      hint: "This character is from a shonen anime",
    },
    {
      name: "Rock Lee",
      img: "assets/images/EasyQuiz/Rock_Lee.webp",
      hint: "This character is from Naruto",
    },
    {
      name: "Saitama",
      img: "assets/images/EasyQuiz/Saitama.webp",
      hint: "This character is from One Punch Man",
    },
    {
      name: "Sanji",
      img: "assets/images/EasyQuiz/Sanji.webp",
      hint: "This character is from One Piece",
    },
    {
      name: "Vegeta",
      img: "assets/images/EasyQuiz/Vegeta.webp",
      hint: "This character is from Dragon Ball Z",
    },
    {
      name: "Zoro",
      img: "assets/images/EasyQuiz/Zoro.webp",
      hint: "This character is from Once Piece",
    },
  ];

  let MediumQuiz = [
    { name: "Ace", img: "assets/images/MediumQuiz/Ace.webp" },
    { name: "Allmight", img: "assets/images/MediumQuiz/AllMight.webp" },
    { name: "Armin", img: "assets/images/MediumQuiz/Armin.webp" },
    { name: "Asta", img: "assets/images/MediumQuiz/Asta.webp" },
    { name: "Asuma", img: "assets/images/MediumQuiz/Asuma.webp" },
    { name: "Bakugo", img: "assets/images/MediumQuiz/Bakugo.webp" },
    { name: "Broly", img: "assets/images/MediumQuiz/Broly.webp" },
    { name: "Captain Yami", img: "assets/images/MediumQuiz/Captain_Yami.webp" },
    { name: "Cell", img: "assets/images/MediumQuiz/Cell.webp" },
    { name: "Erwin", img: "assets/images/MediumQuiz/Erwin.webp" },
    { name: "Gohan", img: "assets/images/MediumQuiz/Gohan.webp" },
    { name: "Jiraiya", img: "assets/images/MediumQuiz/Jiraiya.webp" },
    { name: "Kurapika", img: "assets/images/MediumQuiz/Kurapika.webp" },
    { name: "Meliodas", img: "assets/images/MediumQuiz/Meliodas.webp" },
    { name: "Mikasa", img: "assets/images/MediumQuiz/Mikasa.webp" },
    { name: "Nagato", img: "assets/images/MediumQuiz/Nagato.webp" },
    { name: "Natsu", img: "assets/images/MediumQuiz/Natsu.webp" },
    { name: "Neji", img: "assets/images/MediumQuiz/Neji.webp" },
    { name: "Obito", img: "assets/images/MediumQuiz/Obito.webp" },
    { name: "Sasuke", img: "assets/images/MediumQuiz/Sasuke.webp" },
    { name: "Shanks", img: "assets/images/MediumQuiz/Shanks.webp" },
    { name: "Todoroki", img: "assets/images/MediumQuiz/Todoroki.webp" },
    {
      name: "Trafalgar Law",
      img: "assets/images/MediumQuiz/Trafalgar_Law.webp",
    },
    { name: "Trunks", img: "assets/images/MediumQuiz/Trunks.webp" },
    { name: "Zabuza", img: "assets/images/MediumQuiz/Zabuza.webp" },
  ];

  let hardQuiz = [
    { name: "Aizawa", img: "assets/images/HardQuiz/Aizawa.webp" },
    { name: "Annie", img: "assets/images/HardQuiz/Annie.webp" },
    { name: "Dazai", img: "assets/images/HardQuiz/Dazai.webp" },
    { name: "genos", img: "assets/images/HardQuiz/genos.webp" },
    { name: "Gintoki", img: "assets/images/HardQuiz/Gintoki.webp" },
    { name: "Grimmjow", img: "assets/images/HardQuiz/Grimmjow.webp" },
    { name: "Guts", img: "assets/images/HardQuiz/Guts.webp" },
    { name: "Haku", img: "assets/images/HardQuiz/Haku.webp" },
    { name: "Harlequin", img: "assets/images/HardQuiz/Harlequin.webp" },
    { name: "Histugaya", img: "assets/images/HardQuiz/Hitsugaya.webp" },
    {
      name: "Kenpachi Zaraki",
      img: "assets/images/HardQuiz/Kenpachi_Zaraki.webp",
    },
    { name: "Kirishima", img: "assets/images/HardQuiz/Kirishima.webp" },
    {
      name: "Kisuke Urahara",
      img: "assets/images/HardQuiz/Kisuke_Urahara.webp",
    },
    { name: "Leorie", img: "assets/images/HardQuiz/Leorie.webp" },
    { name: "Mina Ashido", img: "assets/images/HardQuiz/Mina_Ashido.webp" },
    { name: "Ryuk", img: "assets/images/HardQuiz/Ryuk.webp" },
    { name: "Sai", img: "assets/images/HardQuiz/Sai.webp" },
    { name: "Sasori", img: "assets/images/HardQuiz/Sasori.webp" },
    { name: "Scar", img: "assets/images/HardQuiz/Scar.webp" },
    { name: "Shisui", img: "assets/images/HardQuiz/Shisui.webp" },
    { name: "Spike", img: "assets/images/HardQuiz/Spike.webp" },
    { name: "Ulquiorra", img: "assets/images/HardQuiz/Ulquiorra.webp" },
    { name: "Uraraka", img: "assets/images/HardQuiz/Uraraka.webp" },
    { name: "Ymir", img: "assets/images/HardQuiz/Ymir.webp" },
    { name: "Zoe Hange", img: "assets/images/HardQuiz/Zoe_Hange.webp" },
  ];

  let PreviousCharacters = []; // The correct answers in the previous rounds
  let currentAnswer = []; // The current correct answer
  let paddingBottom = false;
  let intervalId; // Holds the function to update the create a 10 second timer every round
  let timerId; // Holds the function to update the timer displayed on the screen every second
  let secondsLeft; // Counter for seconds left of a round
  let roundsCompleted = 1; // Counter for rounds completed
  let maxRounds = 5; // Maximum number of rounds
  let currentQuiz; // Difficulty level of the quiz - easy, medium or hard
  let totalPoints = 0; // Number of points the user accumalates
  let round;
  let resetTime;

  /**
   * This function displays the respective rules page whem the users selects the difficulty of the quiz being either easy medium or hard
   * The variable current quiz keeps track of the diffuclty the user is on so that they can play again when finished
   */
  function displayEasyPage() {
    let landingPage = document.getElementById("landing-page");
    landingPage.style.display = "none";
    let easyPage = document.getElementById("easy-page");
    easyPage.style.display = "block";
    currentQuiz = easyQuiz;
  }
  function displayMediumPage() {
    let landingPage = document.getElementById("landing-page");
    landingPage.style.display = "none";
    let MediumPage = document.getElementById("medium-page");
    MediumPage.style.display = "block";
    currentQuiz = MediumQuiz;
  }
  function displayHardPage() {
    let landingPage = document.getElementById("landing-page");
    landingPage.style.display = "none";
    let hardPage = document.getElementById("hard-page");
    hardPage.style.display = "block";
    currentQuiz = hardQuiz;
  }

  /**
   * the function back simply takes the user back to the landing page
   */
  function back() {
    let easyPage = document.getElementById("easy-page");
    let mediumPage = document.getElementById("medium-page");
    let hardPage = document.getElementById("hard-page");
    let landingPage = document.getElementById("landing-page");

    if (easyPage.style.display === "block") {
      easyPage.style.display = "none";
      landingPage.style.display = "block";
    }
    if (mediumPage.style.display === "block") {
      mediumPage.style.display = "none";
      landingPage.style.display = "block";
    }
    if (hardPage.style.display === "block") {
      hardPage.style.display = "none";
      landingPage.style.display = "block";
    }
  }

  /**
   * The start quiz function does multiple tasks:
   * Displays the quiz page and hides the rules page
   * Gives the appropriate title to the page
   * Sets the variables resetTime, round and secondsLeft to the appropriate time for each quiz
   * Calls the synchroniseClock and runQuiz function
   */
  function startQuiz() {
    let Quiz = document.getElementById("Quiz");
    let easyPage = document.getElementById("easy-page");
    let MediumPage = document.getElementById("medium-page");
    let hardPage = document.getElementById("hard-page");
    let gameTitle = document.getElementById("game-title");
    let hint = document.getElementById("hint");

    if ((easyPage.style.display = "block")) {
      easyPage.style.display = "none";
      Quiz.style.display = "block";
      gameTitle.innerText = "Easy Mode";
      resetTime = 15;
      round = 15000;
      secondsLeft = 15;
    }
    if (MediumPage.style.display === "block") {
      MediumPage.style.display = "none";
      Quiz.style.display = "block";
      gameTitle.innerText = "Medium Mode";
      hint.style.display = "none";
      resetTime = 10;
      round = 10000;
      secondsLeft = 10;
    }
    if (hardPage.style.display === "block") {
      hardPage.style.display = "none";
      Quiz.style.display = "block";
      gameTitle.innerText = "Hard Mode";
      hint.style.display = "none";
      resetTime = 7;
      round = 7000;
      secondsLeft = 7;
    }

    synchroniseClock();
    runQuiz();
  }

  /**
   * The synchronise clock function carries out multiple tasks when called:
   * Stops the timers initally when the function is called
   * Immediately updates the timer displayed on the screen
   * Has a condition that checks if 5 rounds are completed in which if they haven't do the following:
   * 1: runs the quiz each round and sets the timer to the respective time per round for the diffculty
   * 2: has a timer that updates the timer displayed on the screen every second and checks whether or not the round has finished
   * 2b: In which if it has finished and there has been no input increments the roundcompleted variable, stops the timer, alerts the user, resets the timer,updates the timer displayed on the screen and calls the relevant functions
   * And if the rounds have reached 5 stops both timers and calls the display final page function
   */
  function synchroniseClock() {
    clearInterval(intervalId);
    clearInterval(timerId);
    updateTimer();

    if (roundsCompleted <= 5) {
      intervalId = setInterval(() => {
        if (roundsCompleted < maxRounds) {
          runQuiz();
          roundsCompleted++;
        }
      }, round);
      timerId = setInterval(() => {
        if (secondsLeft > 0) {
          secondsLeft--;
          updateTimer();
        } else {
          roundsCompleted++;
          clearInterval(timerId); // Stop the timer when it reaches 0
          alert("Time's up!");
          resetTimer();
          updateTimer();
          synchroniseClock();
          runQuiz();
          // Optionally handle what happens when the time runs out
        }
      }, 1000);
    } else {
      clearInterval(intervalId); // Stop the interval after 5 rounds
      clearInterval(timerId);
      displayFinalPage();
    }
  }

  /**
   * the update timer function remove the blur when the quiz is initially displayed and also updates the timer displayed on the screen
   */
  function updateTimer() {
    let Quiz = document.getElementById("Quiz");
    Quiz.classList.remove("blur");
    document.getElementById("timer").innerText = secondsLeft;
  }

  /**
   * The run quiz function does multiple tasks:
   * Generatesa correct answer and 3 false answers by calling external functions and stores them in a list together
   * This list is then shuffled by calling and external function and passing in the list
   * Displays the correct answers image on the screen
   * Displays the name of the 4 answers in a randomly generated order on the screen
   * Re-adds and eventlistener to the buttons when called
   * Gives the hint variable the coorect hint when the diffculty is easy, if not it is not displayed
   */
  function runQuiz() {
    let Answer = correctAnswer();
    currentAnswer[0] = Answer;
    let optionsList = falseOptions();
    optionsList.push(Answer);
    optionsList = shuffleArray(optionsList);

    let img = document.getElementById("quizImage");
    img.src = currentQuiz[Answer].img;

    let options = document
      .getElementById("option-values")
      .getElementsByTagName("li");
    options[0].innerHTML = `<button class="selection">1:   <span class="option-text">${
      currentQuiz[optionsList[0]].name
    } </span></button>`;
    options[1].innerHTML = `<button class="selection">2:   <span class="option-text"> ${
      currentQuiz[optionsList[1]].name
    }</span></button>`;
    options[2].innerHTML = `<button class="selection">3:   <span class="option-text"> ${
      currentQuiz[optionsList[2]].name
    }</span></button>`;
    options[3].innerHTML = `<button class="selection">4:   <span class="option-text"> ${
      currentQuiz[optionsList[3]].name
    }</span></button>`;

    let optionButtons = document.getElementsByClassName("selection");
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].addEventListener("click", chooseOption);
    }

    let hint = document.getElementById("hint-container");
    hint.innerText = currentQuiz[Answer].hint;
    hideHint();

  }

  /**
   * Generates an answer randomly when called and returns the index of it in the relevant quiz
   */
  function correctAnswer() {
    let correctIndex;
    do {
      correctIndex = Math.floor(Math.random() * currentQuiz.length);
    } while (PreviousCharacters.includes(correctIndex));
    PreviousCharacters.push(correctIndex);
    return correctIndex;
  }

  /**
   *
   * Generates 3 random answers and returs there index's in the relevant quiz in the form of a list
   */
  function falseOptions() {
    let option;
    let falseOptionslist = [];
    do {
      option = Math.floor(Math.random() * currentQuiz.length);
      if (
        currentAnswer.includes(option) != true &&
        falseOptionslist.includes(option) != true
      ) {
        falseOptionslist.push(option);
      }
    } while (falseOptionslist.length < 3);
    return falseOptionslist;
  }

  /**
   * Takes in a list as an argument which is then shuffled in a random order
   */
  function shuffleArray(List) {
    return List.sort(() => Math.random() - 0.5);
  }

  /**
   * This function checks whether a hint is displayed on the screen or not when called
   * It toggles between displaying and not displaying the hint when called
   * It also adds and removes a class to the body which adds padding to the bottom to avoid there being not enough space on the screen
   */
  function showHint() {
    let ButtonContainer = document.getElementById("hint-container");
    if (ButtonContainer.style.display === "none") {
      ButtonContainer.style.display = "block";
    } else {
      ButtonContainer.style.display = "none";
    }

    let body = document.getElementsByTagName("body")[0].classList;
    if (paddingBottom == false) {
      body.add("paddingBottom");
      paddingBottom = true;
    } else if (paddingBottom == true) {
      body.remove("paddingBottom");
      paddingBottom = false;
    }
  }

  /**
   * This function hides the hint on the screen when called
   */
  function hideHint() {
    let ButtonContainer = document.getElementById("hint-container");
    if (ButtonContainer.style.display === "block") {
      ButtonContainer.style.display = "none";
    }
  }

  /**
   * This function carries out multiple taks:
   * checks whether the hint displayed on the game is easy medium or hard difficulty by checking their repective reset times and also checks if the answer is correct
   * If both these conditions are fulfilled, for each quiz difficulty different points are awarded based on the time left on the clock
   * These points differ between 15, 10 and 5
   */
  function calculateTotalPoints(inputtedAnswer) {
    let currentTime = parseInt(document.getElementById("timer").innerText, 10);

    // Check for resetTime === 15 condition
    if (
      resetTime === 15 &&
      inputtedAnswer == currentQuiz[currentAnswer[0]].name
    ) {
      if (currentTime >= 10) {
        totalPoints += 15;
      } else if (currentTime >= 5) {
        totalPoints += 10;
      } else if (currentTime <= 5) {
        totalPoints += 5;
      }
    }
    // Check for resetTime === 10 condition
    else if (
      resetTime === 10 &&
      inputtedAnswer == currentQuiz[currentAnswer[0]].name
    ) {
      if (currentTime >= 7) {
        totalPoints += 15;
      } else if (currentTime >= 4) {
        totalPoints += 10;
      } else if (currentTime <= 3) {
        totalPoints += 5;
      }
    }
    // Check for resetTime === 7 condition
    else if (
      resetTime === 7 &&
      inputtedAnswer == currentQuiz[currentAnswer[0]].name
    ) {
      if (currentTime >= 6) {
        totalPoints += 15;
      } else if (currentTime >= 3) {
        totalPoints += 10;
      } else if (currentTime <= 2) {
        totalPoints += 5;
      }
    }
  }

  /**
   * The chooseOption function initially disables all the buttons on the screen so the user only presses one button
   * It then targets the text of the parent element slicing from the third index position to get the precise wording of the answer and passes it into the calculateTotalPoints function as an argument
   * It Increments the rounds completed by one
   * Resets the timer by calling the resetTimer function
   * Calls the synchroniseClock and runquiz function to continue to the next round
   */
  function chooseOption(event) {
    let buttons = document.getElementsByClassName("selection");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    let liItem = event.target.parentElement.innerText.slice(3);
    calculateTotalPoints(liItem);
    roundsCompleted += 1;
    resetTimer();

    runQuiz();
    synchroniseClock();
  }

  /**
   * Resets timer to the approriate time
   */
  function resetTimer() {
    secondsLeft = resetTime;
    updateTimer();
  }

  /**
   * The displayFinalPage function intially displays the final page and hides the quiz page
   * Displayes the amount the user accumulated by using the global variable total points
   * And displays the appropriate message to the user depending on the amount of points they accumulated
   */
  function displayFinalPage() {
    let quizPage = document.getElementById("Quiz");
    quizPage.style.display = "none";
    let FinalPage = document.getElementById("final-page");
    FinalPage.style.display = "block";

    let score = document.getElementById("amount");
    score.innerText = `You scored ${totalPoints} points on this quiz`;
    let message = document.getElementById("message");
    if (totalPoints > 60) {
      message.innerText = `You can now call yourself the Anime Master`;
    } else if (totalPoints > 30) {
      message.innerText = `You can now call yourself an Anime expert`;
    } else if (totalPoints <= 30) {
      message.innerText = "You can now call yourself an Anime newbie";
    }
  }

  /**
   * The playAgain function:
   * resets the variables to their respective intial values,
   * hides the final page and displays the quiz page
   * and then runs the quiz by calling synchroniseClock and run quiz
   */
  function playAgainFunction() {
    roundsCompleted = 1;
    totalPoints = 0;
    secondsLeft = resetTime;
    let FinalPage = document.getElementById("final-page");
    FinalPage.style.display = "none";
    let Quiz = document.getElementById("Quiz");
    Quiz.style.display = "block";
    runQuiz();
    synchroniseClock();
  }
});
