//see the timer increment every second once the page has loaded

//manually increment and decrement the counter using the plus and minus buttons

//'like' an individual number of the counter

//see count of the number of 'likes' associated with that number

//can pause/toggle the counter(  
//   disable all buttons except the pause button + the pause button should then show the text "resume"  )
// can leave comments 


//see the timer increment every second once the page has loaded
//Display current time = 0 at page load 


/* ----------------------------------------------------------------- */

//   funtions used in events

/* ----------------------------------------------------------------- */

function decrementCount() {
  let  countDisplayerStr  = document.getElementById("counter");
  let countDisplayerNum = parseInt(countDisplayerStr.textContent);
  countDisplayerStr.innerText = countDisplayerNum  - 1;
}




function incrementCount(){
  
  let  countDisplayerStr  = document.getElementById("counter");
  let countDisplayerNum = parseInt(countDisplayerStr.innerText) + 1;
  // console.log(countDisplayerNum);
  countDisplayerStr.innerText = countDisplayerNum ;
}







function addComment(event) {
  event.preventDefault();
  let comments= document.getElementById('list');
  let comment = document.createElement('p');
  let newComment = document.getElementById('comment-input');
  
  comment.innerText= newComment.value;
  comments.appendChild(comment);
  newComment.value=''; 
  /* newComment.reset(); => this work with the element only not wti el.value */
}


/* ----------------------------------------------------------------- */

//   timer increment every second once the page has loaded

/* ----------------------------------------------------------------- */



document.addEventListener("DOMContentLoaded", ()=>{


  let timer = setInterval(incrementCount,1000)
  console.log('hello');


  /* -------------------------------------------------------------------------- */

    //can pause/toggle the counter(  
    //   disable all buttons except the pause button + the pause button should then show the text "resume"  )

  /* -------------------------------------------------------------------------- */
  let isPaused= false;

  function pauseTimer(){
    let pause = clearInterval(timer);
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    likeBtn.disabled = true;
    pauseBtn.innerText = 'resume';
  }

  function resume(){
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    likeBtn.disabled = false;
    pauseBtn.innerText = 'pause';
    timer = setInterval(incrementCount,1000);
  }
  const pauseBtn= document.getElementById('pause');
  pauseBtn.addEventListener('click', ()=>{
    isPaused=!isPaused;
    if(isPaused){
      pauseTimer();
    }else{
      resume();
    }
    });

} );


/* -------------------------------------------------------------------------- */

//   increment and decrement the counter using the plus and minus buttons

/* -------------------------------------------------------------------------- */

const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");

minusBtn.addEventListener("click", decrementCount);

plusBtn.addEventListener('click', incrementCount);



/* -------------------------------------------------------------------------- */

//   'like' an individual number of the counter + see likes number

/* -------------------------------------------------------------------------- */

const likeBtn = document.getElementById("heart");


likeBtn.addEventListener('click', likeNumber);


 function likeNumber(){
  const likesList = document.querySelector('.likes');//ul
  const counterNum  =parseInt(document.getElementById("counter").innerText);
  const liNodes= document.querySelectorAll("li");
  
  if(document.querySelector(`#like-${counterNum}`)){
    const li = document.querySelector(`#like-${counterNum}`);
    const span = document.querySelector(`#like-${counterNum} .likes-count`);
    console.log(li)
    console.log(span)
    span.innerText= parseInt(span.innerText)+1;
    
  }else{
    const li= document.createElement("li");
    li.innerHTML= `${counterNum} has been liked <span class="likes-count">1</span> time`;
    li.setAttribute("id", `like-${counterNum}`)
    likesList.appendChild(li); 
  }
    
 }

/* -------------------------------------------------------------------------- */

// can leave comments 

/* -------------------------------------------------------------------------- */


const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', addComment);






