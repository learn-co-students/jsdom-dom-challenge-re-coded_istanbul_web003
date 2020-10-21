document.addEventListener("DOMContentLoaded", ready());

  function ready(){
    let i = 0;
    let paused = false;
   let set= setInterval(function() {
    document.getElementById("counter").innerHTML=`${i}`;
    i++
  }, 1000);


  document.getElementById('minus').addEventListener("click",(e)=>{
    i = i-1;
    })
    document.getElementById('plus').addEventListener("click",(e)=>{
        i = i+1;
    })
    document.getElementById('heart').addEventListener("click",(e)=>{

        document.querySelector('.likes').innerHTML  +=`
        <li>Liked at ${i}</li>
        `
    })
    document.getElementById('pause').addEventListener("click",(e)=>{
        if(paused){
            ready();

        document.getElementById('pause').innerText = "pause";
        }
        else{
        clearInterval(set);
        document.getElementById('pause').innerText = "resume";
        paused  = true;
    }})
    let comments = 0
    document.getElementById("comment-form").addEventListener("submit",(e)=>{
        e.preventDefault();
        let text  = document.getElementById("comment-input").value;
        comments++;
        document.getElementById("list").innerHTML+= `
        <h5>Comment ${comments}:</h5>
        <p>${text}<p>`

    })


}
