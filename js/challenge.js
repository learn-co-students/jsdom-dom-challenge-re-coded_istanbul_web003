// DOM selectors
const counter = document.getElementById("counter");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const likesList = document.querySelector(".likes")
const commentForm = document.getElementById("comment-form")
const commentInput = document.getElementById("comment-input")
const commnetsList = document.getElementById("list")
const submitBtn = document.getElementById("submit");

// Global var
let clicks=1;

// Toggle buttons function
const toggleBtns = (boolean) => {
    plusButton.disabled = minusButton.disabled = heartButton.disabled = submitBtn.disabled = boolean;
}


let intervalId = setInterval(() => counter.innerText = parseInt(counter.innerText, 10) + 1, 1000);

// Event listeners
plusButton.addEventListener("click", function(event) {
    counter.innerText = parseInt(counter.innerText, 10) + 1
});


minusButton.addEventListener("click", function(event) {
    counter.innerText = parseInt(counter.innerText, 10) -1
});


heartButton.addEventListener("click", function(){
    if (document.querySelector("li:last-child") === null) {
        likesList.innerHTML =`<li id=${counter.innerText}> ${counter.innerText} has been liked <span>${clicks}</span> <span>time</span>. </li>` ;
    } else if (document.querySelector("li:last-child"). id === counter.innerText) {
        clicks +=1;
        document.querySelector("li:last-child span").innerHTML = `${clicks}`
        document.querySelector("li:last-child span:last-child").innerHTML = "times"
        
    } else if (document.querySelector("li:last-child"). id != counter.innerText) {
        clicks =1;
        likesList.innerHTML +=`<li id=${counter.innerText}> ${counter.innerText} has been liked <span>${clicks}</span> <span>time</span>. </li>` ;
    }
});


pauseButton.addEventListener("click", () => {
    if (pauseButton.innerText === "pause"){
        clearInterval(intervalId)
        toggleBtns(true)
        pauseButton.innerText = "start"
    } else if (pauseButton.innerText === "start") {
        intervalId = setInterval(() => counter.innerText = parseInt(counter.innerText, 10) + 1, 1000);
        toggleBtns(false)
        pauseButton.innerText = "pause"
    }
    
});


commentForm.addEventListener("submit", e => {
    e.preventDefault()
    commnetsList.innerHTML += `${commentInput.value}<br>`
    commentForm.reset()
});

