
document.addEventListener("DOMContentLoaded", () => {
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const pauseButton = document.getElementById("pause");
    const counter = document.getElementById("counter");
    const submitButton = document.getElementById("submit");
    const likeButton = document.getElementById("heart");
    const listOfLikes = document.querySelector(".likes")

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
            counter.innerText = parseInt(counter.innerText) + 1;
        }}, 1000);
    
    let numLikes = 1;
    likeButton.addEventListener("click",()=>{
        setTimeout(() => {
            const newLike = document.createElement("li")
            newLike.innerText = `Number ${counter.innerText} has been liked ${numLikes} times`
            numLikes+=1;
            listOfLikes.appendChild(newLike)
        }, 0);
    });

    








});

