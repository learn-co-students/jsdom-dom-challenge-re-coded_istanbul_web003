// DOM Declarations
// Counter Section
const counter=document.querySelector('#counter');
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const likesList=document.querySelector('.likes');

// Comment Section
const commentsList=document.querySelector(".comments");
const commentForm=document.querySelector('#comment-form');
const commentInput=document.querySelector('#comment-input');
const submit=document.querySelector('#submit');


// Increment, Decrement, Pause, Like
let count=0;
let likes=0;
minus.addEventListener("click", decrement);

plus.addEventListener("click", increment);
heart.addEventListener("click",(e)=> {
    likes++;
    likesList.innerHTML=`${count} has been liked ${likes}</li>`
})


commentForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let message=commentInput.value;
    commentsList.innerHTML+=`<li>${message}</li>`;
})
