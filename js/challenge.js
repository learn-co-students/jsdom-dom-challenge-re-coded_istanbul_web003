"use strict"


// elements
const pauseEle = document.querySelector('#pause');
const plusEle = document.querySelector('#plus');
const minusEle = document.querySelector('#minus');
const heartEle = document.querySelector('#heart');
const submitEle = document.querySelector('#submit');
const counter = document.querySelector('#counter');
const likesEle = document.querySelector('#likes');
const listEle = document.querySelector('#list');
const commentForm = document.querySelector('#comment-form');

// tracked vars
let isPaused = false;
let counterValue = 0;
let timerID;
let lastTimeClicked;
let isLikedBefore = false;

// start the timer
play();

// pause event listener
pauseEle.addEventListener('click', function () {
    isPaused ? play() : pause();
});

// add event listener
plusEle.addEventListener('click', function () {
    incrementCounter();
});

// decrease event listener
minusEle.addEventListener('click', function () {
    incrementCounter(false);
});

// heart event listener
heartEle.addEventListener('click', function () {
    lastTimeClicked = parseInt(counter.innerText);
    let clickTimes = 1;

    if (isLikedBefore) {
        const lastLiEle = document.querySelector('#likes').lastElementChild;
        // get the likes number in the same second
        let regex = /\d+/g;
        let liValue = lastLiEle.innerText;
        let numbersExctracted = liValue.match(regex); // creates array from matches
        let numberLiked = numbersExctracted[1];

        // update the last element
        lastLiEle.innerText = `${counterValue} has been liked ${++numberLiked} times`
    } else {
        likesEle.innerHTML += `<li>${counterValue} has been liked ${clickTimes} time</li>`;
        isLikedBefore = true;
    }
});

// comment event listener
commentForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    const commentInput = document.querySelector('#comment-input');

    listEle.innerHTML += `<p>${commentInput.value}</p>`
    commentInput.value = ``;
})

// start counting function
function play() {
    timerID = setInterval(incrementCounter, 1e3);

    disableButtons(false);
    isPaused = false;
}

// pause counting function
function pause() {
    clearInterval(timerID);

    disableButtons(true);
    isPaused = true;
}

// increase/decrease the counter value counting functio
function incrementCounter(increment = true) {
    increment ?
        counter.innerText = counterValue + 1 :
        counter.innerText = counterValue - 1;

    counterValue = parseInt(counter.innerText);
    isLikedBefore = false;
}

// disable button function
function disableButtons(disable) {
    plusEle.disabled =
        minusEle.disabled =
        heartEle.disabled =
        submitEle.disabled = disable;
}