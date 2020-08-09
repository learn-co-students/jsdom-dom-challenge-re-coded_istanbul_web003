const counter = document.getElementById('counter');
let count = 0;
const pause = document.getElementById('pause');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');

let isPaused
let intervalId

document.addEventListener('DOMContentLoaded', function () {
    startTimer()
});



//if paused start
// else pause
pause.addEventListener('click', function () {
    // console.log(intervalId);
    if (isPaused === true) {
        startTimer();
    } else {
        isPaused = true;
        clearInterval(intervalId);
        pause.innerText = `resume`;
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
    }



});

function startTimer() {
    isPaused = false
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    pause.innerText = `pause`;
    intervalId = setInterval(function () {
        count += 1;
        counter.innerText = `${count}`;
    }, 1000);



    minus.addEventListener('click', function () {
        setTimeout(function () {
            count -= 1;
            counter.innerText = `${count}`;
        }, 0);
    });


    plus.addEventListener('click', function () {
        setTimeout(function () {
            count += 1;
            counter.innerText = `${count}`;
        }, 0);
    });

    let likeNum = 0;
    heart.addEventListener('click', function () {
        const addLike = document.querySelector('.likes');
        likeNum += 1;
        const timerNum = [];
        const addNum = timerNum.push(count)
        const newLike = document.createElement('li')
        newLike.innerText = `${count} has been liked ${likeNum} times`;
        addLike.appendChild(newLike)
    });
};


const form = document.getElementById('comment-form');
const list = document.getElementById('list');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const newComment = document.getElementById('comment-input').value;


    list.innerHTML += `<p>${newComment}</p>`

    form.reset()
})