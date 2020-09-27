let value = 0;
let counterSection = document.getElementById("counter");

function incrementSeconds() {
    value += 1;
    counterSection.innerText = value;
}

const cancel = setInterval(incrementSeconds, 1000);

const addButton = document.getElementById("plus");
const incButton = document.getElementById("minus");
const pauseBtn = document.getElementById("pause");
const heart = document.getElementById("heart");
const likes = document.querySelector(".likes");


//Pause//
pauseBtn.addEventListener('click', function() {
    clearInterval(cancel);
});


//Heart//
heart.addEventListener('click', function(){
const likesNode = document.createElement("LI");
likes.appendChild(likesNode);
likesNode.textContent = value + "has been liked" + value + "times";
})

//Increment//
addButton.addEventListener('click', function() {
    counterSection.textContent = value++;
});

//Decrement//
incButton.addEventListener('click', function() {
    counterSection.textContent = value--;
})


//Comment Add Value //
document.getElementById("submit").addEventListener("click", addComment);

function addComment (e) {
    e.preventDefault();
    let commentSection = document.getElementById("comment-input").value;
    console.log(commentSection);
    document.getElementById("list").innerHTML = commentSection;
}

