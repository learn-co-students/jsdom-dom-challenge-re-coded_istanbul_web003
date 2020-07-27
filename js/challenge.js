
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let pauseButton = document.getElementById("pause");
let heartButton = document.getElementById("heart");
let submitButton = document.getElementById("submit");


plus.addEventListener("click", add);
minus.addEventListener("click", subtract);
pauseButton.addEventListener("click", pause);
heartButton.addEventListener("click", heart);
submitButton.addEventListener("click", submit);

let counter = document.getElementById("counter").innerText;

let count = 1;
let likedNumbers = [];


let comment = document.getElementById("list");
const commentInput = document.getElementById("comment-input");


function add() {
    counter = parseInt(counter) + 1;
    document.getElementById("counter").innerText = counter;
}

function subtract() {
    counter = parseInt(counter) - 1;
    document.getElementById("counter").innerText = counter;
}

function pause() {
    if(pauseButton.innerText === "pause") {
        pauseButton.innerText = "resume";
        plus.disabled = true;
        minus.disabled = true;
        heartButton.disabled = true;
        clearInterval(startCount);
    }
    else{
        setInterval(add, 1000);
        pauseButton.innerText = "pause";
        plus.disabled = false;
        minus.disabled = false;
        heartButton.disabled = false;
    }
    
}

function heart() {
    var listItem = document.createElement("li");
    for(let i=0; i < likedNumbers.length; i++) {
        if(counter === likedNumbers[i]) {
            count++;
        } 
    }
    likedNumbers.push(counter);
    var textList = document.createTextNode(`${counter} liked ${count} times`);
    listItem.appendChild(textList);
    document.querySelector(".likes").appendChild(listItem);
}

function submit(e) {
    e.preventDefault();
    const myComment = document.createElement("p");
    comment.appendChild(myComment);
    myComment.innerHTML += commentInput.value;
    commentInput.value = "";
}


const startCount = setInterval(add, 1000);

