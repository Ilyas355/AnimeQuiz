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
    
});