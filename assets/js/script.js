
document.addEventListener('DOMContentLoaded', function() {

    // event listners

    let easyPageButton = document.getElementById('easy');
    easyPageButton.addEventListener('click', displayEasyPage);

    let mediumPageButton = document.getElementById('medium');
    mediumPageButton.addEventListener('click', displayMediumPage);

    let hardPageButton = document.getElementById('hard');
    hardPageButton.addEventListener('click', displayHardPage);

    let hint = document.getElementById('hint');
    hint.addEventListener('click', showHint);

    let backButton = document.getElementsByClassName('back');
    for (let i=0; i<backButton.length; i++){
        backButton[i].addEventListener('click',back);
    }

    let optionButtons = document.getElementsByClassName('selection');
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].addEventListener('click', chooseOption);
    }

    let startQuizButton = document.getElementsByClassName('startQuizBtn');
    for (let i=0; i<startQuizButton.length; i++){
        startQuizButton[i].addEventListener('click', startQuiz);
    }


    // quiz lists
    let easyQuiz=[{ name: 'Aizen', img: 'assets/images/EasyQuiz/Aizen.webp', hint: 'This character is from Bleach'},
        {name: 'Edward Elric', img: 'assets/images/EasyQuiz/Edward_Elric.webp', hint: 'This character is from FullMetal Alchemist'},
        {name: 'Eren Yeager', img: 'assets/images/EasyQuiz/Eren_Yeager.webp', hint: 'This character is from AttackOnTitan'},
        {name: 'Frieza', img: 'assets/images/EasyQuiz/Frieza.webp', hint: 'This character is from Dragon Ball Z'},
        {name: 'Goku', img: 'assets/images/EasyQuiz/Goku.webp', hint: 'This character is from Dragon Ball Z'},
        {name: 'Gon', img: 'assets/images/EasyQuiz/Gon.webp', hint: 'This character is from Hunter X Hunter'},
        {name: 'Hisoka', img: 'assets/images/EasyQuiz/Hisoka.webp', hint: 'This character is from Hunter X Hunter'},
        {name: 'Ichigo', img: 'assets/images/EasyQuiz/Ichigo.webp', hint: 'This character is from Bleach'},
        {name: 'Itachi', img: 'assets/images/EasyQuiz/Itachi.webp', hint: 'This character is from Naruto'},
        {name: 'Kakashi Hatake', img: 'assets/images/EasyQuiz/Kakashi_Hatake.webp', hint: 'This character is from Naruto'},
        {name: 'Killua', img: 'assets/images/EasyQuiz/Killua.webp', hint: 'This character is from Hunter X Hunter'},
        {name: 'Krillin', img: 'assets/images/EasyQuiz/Krillin.webp', hint: 'This character is from Dragon Ball Z'},
        {name: 'L', img: 'assets/images/EasyQuiz/L.webp', hint: 'This character is from Death Note'},
        {name: 'Levi Ackerman', img: 'assets/images/EasyQuiz/Levi_ackerman.webp', hint: 'This character is from AttackOnTitan'},
        {name: 'Light', img: 'assets/images/EasyQuiz/LightYagami.webp', hint: 'This character is from Death Note'},
        {name: 'Madara Uchiha', img: 'assets/images/EasyQuiz/madara-uchiha.webp', hint: 'This character is from Naruto'},
        {name: 'Midoriya', img: 'assets/images/EasyQuiz/Midoriya.webp', hint: 'This character is from MyHeroAcadamia'},
        {name: 'Minato', img: 'assets/images/EasyQuiz/Minato.webp', hint: 'This character is from Naruto'},
        {name: 'Monkey D. Luffy', img: 'assets/images/EasyQuiz/Monkey_D_Luffy.webp', hint: 'This character is from One Piece'},
        {name: 'Naruto', img: 'assets/images/EasyQuiz/Naruto.webp', hint: 'This character is from a shonen anime'},
        {name: 'Rock Lee', img: 'assets/images/EasyQuiz/Rock_Lee.webp', hint: 'This character is from Naruto'},
        {name: 'Saitama', img: 'assets/images/EasyQuiz/Saitama.webp', hint: 'This character is from One Punch Man'},
        {name: 'Sanji', img: 'assets/images/EasyQuiz/Sanji.webp', hint: 'This character is from One Piece'},
        {name: 'Vegeta', img: 'assets/images/EasyQuiz/Vegeta.webp', hint: 'This character is from Dragon Ball Z'},
        {name: 'Zoro', img: 'assets/images/EasyQuiz/Zoro.webp', hint: 'This character is from Once Piece'},
    ]


    let MediumQuiz = [{ name: 'Ace', img: 'assets/images/MediumQuiz/Ace.webp'},
        {name: 'Allmight', img: 'assets/images/MediumQuiz/AllMight.webp'},
        {name: 'Armin', img: 'assets/images/MediumQuiz/Armin.webp'},
        {name: 'Asta', img: 'assets/images/MediumQuiz/Asta.webp'},
        {name: 'Asuma', img: 'assets/images/MediumQuiz/Asuma.webp'},
        {name: 'Bakugo', img: 'assets/images/MediumQuiz/Bakugo.webp'},
        {name: 'Broly', img: 'assets/images/MediumQuiz/Broly.webp'},
        {name: 'Captain Yami', img: 'assets/images/MediumQuiz/Captain_Yami.webp'},
        {name: 'Cell', img: 'assets/images/MediumQuiz/Cell.webp'},
        {name: 'Erwin', img: 'assets/images/MediumQuiz/Erwin.webp'},
        {name: 'Gohan', img: 'assets/images/MediumQuiz/Gohan.webp'},
        {name: 'Jiraiya', img: 'assets/images/MediumQuiz/Jiraiya.webp'},
        {name: 'Kurapika', img: 'assets/images/MediumQuiz/Kurapika.webp'},
        {name: 'Meliodas', img: 'assets/images/MediumQuiz/Meliodas.webp'},
        {name: 'Mikasa', img: 'assets/images/MediumQuiz/Mikasa.webp'},
        {name: 'Nagato', img: 'assets/images/MediumQuiz/Nagato.webp'},
        {name: 'Natsu', img: 'assets/images/MediumQuiz/Natsu.webp'},
        {name: 'Neji', img: 'assets/images/MediumQuiz/Neji.webp'},
        {name: 'Obito', img: 'assets/images/MediumQuiz/Obito.webp'},
        {name: 'Sasuke', img: 'assets/images/MediumQuiz/Sasuke.webp'},
        {name: 'Shanks', img: 'assets/images/MediumQuiz/Shanks.webp'},
        {name: 'Todoroki', img: 'assets/images/MediumQuiz/Todoroki.webp'},
        {name: 'Trafalgar Law', img: 'assets/images/MediumQuiz/Trafalgar_Law.webp'},
        {name: 'Trunks', img: 'assets/images/MediumQuiz/Trunks.webp'},
        {name: 'Zabuza', img: 'assets/images/MediumQuiz/Zabuza.webp'},
    ]


    let HardQuiz = [{ name: 'Aizawa', img: 'assets/images/HardQuiz/Aizawa.webp'},
        {name: 'Annie', img: 'assets/images/HardQuiz/Annie.webp'},
        {name: 'Dazai', img: 'assets/images/HardQuiz/Dazai.webp'},
        {name: 'genos', img: 'assets/images/HardQuiz/genos.webp'},
        {name: 'Gintoki', img: 'assets/images/HardQuiz/Gintoki.webp'},
        {name: 'Grimmjow', img: 'assets/images/HardQuiz/Grimmjow.webp'},
        {name: 'Guts', img: 'assets/images/HardQuiz/Guts.webp'},
        {name: 'Haku', img: 'assets/images/HardQuiz/Haku.webp'},
        {name: 'Harlequin', img: 'assets/images/HardQuiz/Harlequin.webp'},
        {name: 'Histugaya', img: 'assets/images/HardQuiz/Histugaya.webp'},
        {name: 'Kenpachi Zaraki', img: 'assets/images/HardQuiz/Kenpachi_Zaraki.webp'},
        {name: 'Kirishima', img: 'assets/images/HardQuiz/Kirishima.webp'},
        {name: 'Kisuke Urahara', img: 'assets/images/HardQuiz/Kisuke_Urahara.webp'},
        {name: 'Leonie', img: 'assets/images/HardQuiz/Leonie.webp'},
        {name: 'Mina Ashido', img: 'assets/images/HardQuiz/Mina_Ashido.webp'},
        {name: 'Ryuk', img: 'assets/images/HardQuiz/Ryuk.webp'},
        {name: 'Sai', img: 'assets/images/HardQuiz/Sai.webp'},
        {name: 'Sasori', img: 'assets/images/HardQuiz/Sasori.webp'},
        {name: 'Scar', img: 'assets/images/HardQuiz/Scar.webp'},
        {name: 'Shisui', img: 'assets/images/HardQuiz/Shisui.webp'},
        {name: 'Spike', img: 'assets/images/HardQuiz/Spike.webp'},
        {name: 'Ulquiorra', img: 'assets/images/HardQuiz/Ulquiorra.webp'},
        {name: 'Urakara', img: 'assets/images/HardQuiz/Urakara.webp'},
        {name: 'Ymir', img: 'assets/images/HardQuiz/Ymir.webp'},
        {name: 'Zoe Hange', img: 'assets/images/HardQuiz/Zoe_Hange.webp'},
    ]



    // Global Variables
    let PreviousCharacters = []; // The correct answers in the previous rounds 
    let currentAnswer = []; // The current correct answer
    let intervalId ; // Holds the function to update the create a 10 second timer every round
    let timerId; // Holds the function to update the timer displayed on the screen every second
    let secondsLeft = 10; // Counter for seconds left of a round
    let roundsCompleted = 1; // Counter for rounds completed
    let maxRounds = 5; // Maximum number of rounds
    let currentQuiz ; // Difficulty level of the quiz - easy, medium or hard 
    let totalPoints = 0; // Number of points the user accumalates




    // display the pages
    function displayEasyPage(){
        
        let landingPage = document.getElementById('landing-page');
        landingPage.style.display = 'none';
        let easyPage = document.getElementById('easy-page');
        easyPage.style.display = 'block';
    }
    function displayMediumPage(){
        let landingPage = document.getElementById('landing-page');
        landingPage.style.display = 'none';
        let MediumPage = document.getElementById('medium-page');
        MediumPage.style.display = 'block';        

    }
    function displayHardPage(){
        let landingPage = document.getElementById('landing-page');
        landingPage.style.display = 'none';
        let hardPage = document.getElementById('hard-page');
        hardPage.style.display = 'block';
    }
    
    // back button
    function back(){
        let easyPage = document.getElementById('easy-page');
        let mediumPage = document.getElementById('medium-page');
        let hardPage = document.getElementById('hard-page')        
        let landingPage = document.getElementById('landing-page');

        if (easyPage.style.display === 'block'){
            easyPage.style.display = 'none';
            landingPage.style.display = 'block';
        }
        if (mediumPage.style.display === 'block'){
            mediumPage.style.display = 'none';
            landingPage.style.display = 'block';  
        }
        if (hardPage.style.display === 'block'){
            hardPage.style.display = 'none';
            landingPage.style.display = 'block';   
        }
        
    }


    // start quiz function
    
    function startQuiz(){
        let Quiz = document.getElementById('Quiz');
        let easyPage = document.getElementById('easy-page');
        let MediumPage = document.getElementById('medium-page');
        let hardPage = document.getElementById('hard-page');

        if (easyPage.style.display = 'block'){
            easyPage.style.display = 'none';
            Quiz.style.display = 'block';
        }
        if (MediumPage.style.display === 'block'){
            MediumPage.style.display = 'none';
            Quiz.style.display = 'block';
        } 
        if (hardPage.style.display === 'block'){
            hardPage.style.display = 'none';
            Quiz.style.display = 'block';
        }


        if (roundsCompleted<=5){
            runQuiz();
        }

        synchroniseClock();      

    }


    // synchronise the clock
    function synchroniseClock(){

        clearInterval(intervalId); // Stop the timer every round
        clearInterval(timerId); // Stop the timer every round

        // only run the timer for 5 rounds
        if (roundsCompleted<=5){
            intervalId = setInterval(() => {           
                if (roundsCompleted < maxRounds) {
                    runQuiz();
                    roundsCompleted++;
                } 
            }, 10000);
            timerId = setInterval(() => {
                if (secondsLeft > 0) {
                    secondsLeft--;
                    updateTimer();
                } else {
                    clearInterval(timerId); // Stop the timer when it reaches 0
                }
            }, 1000);       
        } else {
            clearInterval(intervalId); // Stop the interval after 5 rounds
            clearInterval(timerId)
        }
        
    }


    // update the timer
    function updateTimer(){
        let Quiz = document.getElementById('Quiz');
        Quiz.classList.remove('blur');
        document.getElementById('timer').innerText = secondsLeft;
    }


    // run the quiz
    function runQuiz(){


        let Answer = correctAnswer();
        currentAnswer[0] = Answer;
        let optionsList = falseOptions();
        optionsList.push(Answer);
        optionsList = shuffleArray(optionsList);


        let img = document.getElementById('quizImage');
        img.src = MediumQuiz[Answer].img;

        let options = document.getElementById('option-values').getElementsByTagName('li');
        options[0].innerHTML = `<button class="selection"></button><span class="option-text"> ${MediumQuiz[optionsList[0]].name}</span>`
        options[1].innerHTML = `<button class="selection"></button><span class="option-text"> ${MediumQuiz[optionsList[1]].name}</span>`
        options[2].innerHTML =`<button class="selection"></button><span class="option-text"> ${MediumQuiz[optionsList[2]].name}</span>`
        options[3].innerHTML =`<button class="selection"></button><span class="option-text"> ${MediumQuiz[optionsList[3]].name}</span>`

        let optionButtons = document.getElementsByClassName('selection');
        for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].addEventListener('click', chooseOption);
        }

        let hint = document.getElementById('hint-container')
        hint.innerText = MediumQuiz[Answer].hint;

        
    }


    // calcualte correct answer
    function correctAnswer(){
        let correctIndex ;
        do {
            correctIndex = Math.floor(Math.random() * MediumQuiz.length);
        } while (PreviousCharacters.includes(correctIndex));
        PreviousCharacters.push(correctIndex)
        return correctIndex
    }


    // display false options
    function falseOptions(){
        let option ;
        let falseOptionslist = [];
        do {
            option = Math.floor(Math.random() * MediumQuiz.length);
            if (currentAnswer.includes(option)!=true && falseOptionslist.includes(option)!=true){
                falseOptionslist.push(option);
            }
        } while (falseOptionslist.length<3);
        return falseOptionslist;
    }


    // shufle array
    function shuffleArray(List){
        return List.sort(() => Math.random() - 0.5);
    }



});