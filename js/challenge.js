const counter = document.querySelector("#counter");
const buttons = document.querySelector(".buttons");
const buttonList = document.querySelectorAll("button");
const likes = document.querySelector(".likes");
var time;
function timer(){
     time = setInterval(function(){
        counter.innerText = parseInt(counter.innerText) + 1;
    }, 1000);
  
}

buttons.addEventListener("click", function(e){
        if(e.target.id === "pause"){
            clearInterval(time);
            buttonList[0].disabled = true;
            buttonList[1].disabled = true;
            buttonList[2].disabled = true;
            buttonList[3].id = "resume";
            buttonList[3].innerText = "resume";
            buttonList[4].disabled = true;
            
        }
        else if (e.target.id === "resume"){
            buttonList[0].disabled = false;
            buttonList[1].disabled = false;
            buttonList[2].disabled = false;
            buttonList[3].id = "pause";
            buttonList[3].innerText = "pause";
            buttonList[4].disabled = false;
            timer();

        }
        else if (e.target.id === "plus"){
            
            counter.innerText = parseInt(counter.innerText) + 1;
        }
        else if (e.target.id === "minus"){
            counter.innerText = parseInt(counter.innerText) - 1;
            
        }

        else if (e.target.id === "heart"){
            let count = 0;
            count++;
            likes.innerHTML += `<li> ${counter.innerText} has been liked ${count} times. </li>` ;
            // Couldn't count the likes correctly, need to ask about this!!!
            

        }
       
    })
buttonList[4].addEventListener("click", function(e){
    e.preventDefault();
    console.log(111);
    const list = document.querySelector("#comment-list");
    const comment = document.querySelector("#comment-input");
    list.innerHTML += `<li> ${comment.value} </li>`;

})

document.addEventListener("DOMContentLoaded", timer);
   
