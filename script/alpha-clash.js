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

function continueGame(){
    const alphabet = getRandonmAlphabet();
    console.log('Your random alphaber',alphabet);

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