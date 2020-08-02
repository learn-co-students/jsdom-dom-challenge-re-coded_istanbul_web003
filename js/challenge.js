seconds = 0;
function incrementSeconds() {
    seconds += 1;
    counter.innerText = seconds;
}
count = setInterval(incrementSeconds, 1000);
let flagTimer='resume';

function pause() { 
    if( flagTimer=='resume')
    {

      clearInterval(count);
      count=0;
      document.getElementById('pause').innerHTML="resume";
      flagTimer='pause';
    }
    else
    {
      flagTimer='resume';
      document.getElementById('pause').innerHTML="pause";
      resume();
    }
  
  }
function resume() {
    count= setInterval(incrementSeconds,1000);
}
  
function plus(){
    seconds++;
    counter.innerHTML=(seconds);
}

function minus(){
    seconds--;
    counter.innerHTML=(seconds);
}

currSec=0;
click=0;

function clicks(){
    // currList="";
    if (currSec==seconds){
        click++;
        `Li_${currSec}`.innerHTML=`${currSec} liked ${click} times`;

    }
    else {
        likes.innerHTML+=`<li id="Li_${currSec}">${currSec} liked ${click} times </li>` 
        currSec=seconds;
        click=1;
    }
}
