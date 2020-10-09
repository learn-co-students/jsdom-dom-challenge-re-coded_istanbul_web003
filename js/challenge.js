const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.getElementsByClassName('likes');
const comments = document.getElementsByClassName('comments');

//Timer //
const timeInSec = function(){
    return counter.innerText++
}
const startWatch = setInterval(timeInSec, 1000);

//+ and - btns//
minus.addEventListener('click', () => {
   return document.getElementById('counter').innerHTML--
})

plus.addEventListener('click', () => {
    return document.getElementById('counter').innerHTML++
})

//pause btn//
let clicked = true;
const pauseBtn = () => {
    //console.log('Mohammad');
    if(clicked){
        pause.innerText = "pause";
        clicked = false;
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        counter.disabled = false;
    } else {
        pause.innerText = "resume";
        clicked = true;
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        counter.disabled = true;
    } 
}
pause.addEventListener("click", pauseBtn);




