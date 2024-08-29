/*function play(){
    // hide the home screen
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // console.log(homeSection.classList);

    // show the paly ground

    const playgroundSection = document.getElementById('play-ground');
    // console.log(playgroundSection.classList)
    playgroundSection.classList.remove('hidden');

 } */

function haddlekeyBoardKeyUpEvent(event){
    const playerPress =event.key;
    // console.log('player pressed ',playerPress);
    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alpahbet');
    
    const currentAlphabet = currentAlphabetElement.innerText;
    const expecteAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress,expecteAlphabet);

    // chcek
    if(playerPress === expecteAlphabet){
        console.log('you get a point');
        // update score
        const currentScoreElement =document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // new score 
        const newScore = currentScore + 1;

        // show update score

        currentScoreElement.innerText = newScore;
        // start new round
        removeBackgroundColorById(expecteAlphabet);
        continueGame();
    }
    else{
        console.log('you lose point');
    }
}

document.addEventListener('keyup',haddlekeyBoardKeyUpEvent);
    


function continueGame(){
    const alphabet = getRandonmAlphabet();
    // console.log('Your random alphaber',alphabet);

    // set randomely generated alpahbet to the screen(display it)
    const currentAlphabetElement = document.getElementById('current-alpahbet');
    currentAlphabetElement.innerText = alphabet;

    // set backroung color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementByID('home-screen');
    showElementById('play-ground');
    continueGame();
}