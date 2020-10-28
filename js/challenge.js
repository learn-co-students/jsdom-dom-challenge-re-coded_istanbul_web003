// increase and decrease buttons

let secondCounter = document.getElementById("counter").innerText;

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

minus.addEventListener("click", increase);
plus.addEventListener("click", decrease);

function decrease () {
    secondCounter = parseInt(secondCounter) - 1;
    document.getElementById("counter").innerText.secondCounter;
}

function increase () {
    let secondCounter = document.getElementById("counter").innerText;
    secondCounter = parseInt(secondCounter) + 1;
    document.getElementById("counter").innerText.secondCounter;
}

const startCount = setInterval(increase, 3000);


// Heart button

const heart = document.getElementById("heart");

heart.addEventListener("click", liked);

function liked () {
    let count = 0;
    let listItem = document.createElement("li");
    let likedCount = [];
    for (let i = 0; i < likedCount.length; i++) {
        if (secondCounter === likedCount[i]) {
            count++;
        }
    }
    likedCount.push(secondCounter);
    let likedList = document.createTextNode(`${count} people liked this moment ${secondCounter}`);
    listItem.appendChild(likedList);
    document.querySelector(".likes").appendChild(listItem);
}


// Pause button

 const pause = document.getElementById("pause");

 pause.addEventListener("click", paused);

 function paused () {
    if(pause.innerText === "pause") {
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        pause.innerText = "resume";
        clearInterval(startCount);
    }
    else{
        setInterval(increase, 3000);
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pause.innerText = "pause";
    }
 }

 function submit(e) {
     e.preventDefault();

     let commentContainer = document.getElementById("list");
     const comment = document.createElement("p");
     const commentInput = document.getElementById("comment-input");

     comment.innerHTML += commentInput.value;
     commentInput.value = "";
     
     comment.appendChild()
 }