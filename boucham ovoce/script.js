const button = document.getElementById("play")
const numberOne = document.getElementById("cislo1")
const numberTwo = document.getElementById("cislo2")
const numberThree = document.getElementById("cislo3")


function getRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



button.onclick = function(){
    numberOne.textContent = getRandom(0,9)
    numberTwo.textContent = getRandom(0,9)
    numberThree.textContent = getRandom(0,9)
}