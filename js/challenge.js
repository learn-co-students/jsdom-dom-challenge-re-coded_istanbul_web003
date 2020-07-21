let counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');


document.addEventListener('DOMContentLoaded', (event) => {
    let i = 0;
    let interval = setInterval(increment, 1000);
    function increment() {
        i++;
        counter.innerHTML = i;
    }
    function decrement() {
        i--;
        counter.innerHTML = i;
    }
    plus.addEventListener('click', (event) => {
        increment();
    });
    minus.addEventListener('click', (event) => {
        decrement();
    });
    pause.addEventListener('click', (event) => {
       if (pause.innerText === 'pause') {
           clearInterval(interval); 
           pause.innerText = 'resume';
           plus.disabled = true;
           minus.disabled = true;
           heart.disabled = true;
       } else {
        interval = setInterval(increment, 1000);
           pause.innerText = 'pause';
           plus.disabled = false;
           minus.disabled = false;
           heart.disabled = false;
       }
    })
    heart.addEventListener("click", ()=>{
        let heartLi = document.createElement("li");
        heartLi.innerText = `${i} has been clicked 1 time`;
        document.querySelector("ul.likes").appendChild(heartLi);
      });
});
