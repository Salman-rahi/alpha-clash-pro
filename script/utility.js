function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}



function hideElementByID(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function getRandonmAlphabet(){
    const alphabetsString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetsString.split('');
    // console.log(alphabets);

    // get random number
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet; 

}