
document.addEventListener("DOMContentLoaded", () => {
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const pauseButton = document.getElementById("pause");
    const counter = document.getElementById("counter");
    const submitButton = document.getElementById("submit");
    const likeButton = document.getElementById("heart");
    const listOfLikes = document.querySelector(".likes")
    const formData = document.getElementById("comment-form");
    const comment = document.getElementById("comment-input");
    const list =document.getElementById("list");
    const ul = document.createElement("ul");
    list.appendChild(ul);

    plusButton.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) + 1;
    })

    minusButton.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) - 1;
    })


    pauseButton.addEventListener("click", (e) => {
        if (pauseButton.innerHTML === " pause "){
            pauseButton.innerHTML = " resume ";
            plusButton.disabled = true;
            minusButton.disabled = true;
            submitButton.disabled = true;
            likeButton.disabled = true;
        }
        else {
            pauseButton.innerHTML = " pause "
            plusButton.disabled = false;
            minusButton.disabled = false;
            submitButton.disabled = false;
            likeButton.disabled = false;
        }
    })

    
    setInterval(() => {
        if (pauseButton.innerHTML === " pause "){
            numLikes = 1;
            counter.innerText = parseInt(counter.innerText) + 1;
        }}, 1000);
    

    

    likeButton.addEventListener("click",()=>{
        const newLike = document.createElement("li");
        newLike.innerText = `Number ${counter.innerText} has been liked ${numLikes} times.`;
        numLikes +=1 ;
        listOfLikes.appendChild(newLike);
    })

    

    formData.addEventListener("submit", (e)=>{
        e.preventDefault()
        const commentLi = document.createElement("li");
        commentLi.innerText = comment.value
        ul.appendChild(commentLi);
    })






});

