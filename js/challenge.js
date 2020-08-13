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
  console.log(countDisplayerNum);
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
  const likesList = document.getElementsByClassName('likes')[0];//ul
  const counterNum  = parseInt(document.getElementById("counter").innerText);
  const li= document.getElementById(`${counterNum}`);
  
   //if there is no li, create a li with id ===counterNum and count =1
   if (li===null){//li is null?? maybe not exist yet. 
    const li = document.createElement('li');
    let id= toString(counterNum);
    li.innerHTML=`${counterNum} has been liked <span id=${id}>1<span> time`;
    likesList.appendChild(li); 
    console.log(li)
   }else{//else: there is a li with id === counterNum then Update count

    let span= parseInt(document.querySelector(`span#${id}`).innerText);
    li.innerHTML=`${counterNum} has been liked <span id=${id}>${span++}</span> times`;

    
   }
   
 }

/* -------------------------------------------------------------------------- */

// can leave comments 

/* -------------------------------------------------------------------------- */


const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', addComment);






