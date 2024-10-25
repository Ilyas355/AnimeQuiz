document.addEventListener('DOMContentLoaded', function() {
    let easyPageButton = document.getElementById('easy');
    easyPageButton.addEventListener('click', displayEasyPage);

    let mediumPageButton = document.getElementById('medium');
    mediumPageButton.addEventListener('click', displayMediumPage);

    let hardPageButton = document.getElementById('hard');
    hardPageButton.addEventListener('click', displayHardPage);

    let backButton = document.getElementsByClassName('back');
    for (let i=0; i<backButton.length; i++){
        backButton[i].addEventListener('click',back);
    }

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
});