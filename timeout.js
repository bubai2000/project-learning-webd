let x = 0;
let interval1 = setInterval(function(){
    document.getElementById("text").textContent="You are on this page for "+x+" seconds(Please don't stay for more than 10 seconds)";
    x = x+1;
},1000) //Automatically runs in cycle after every given interval

setTimeout(function(){
    clearInterval(interval1);
    test();
},11000) //Runs for one time after given interval

function test(){
    document.getElementById("text").textContent="Now you will be punished for not listening to my words!!!";
    document.getElementById("text").style.color="red";   
}

setInterval(()=>{ //using arrow function
    let date = new Date();
    this.time = date.getHours() +":" +date.getMinutes()+":"+date.getSeconds();
    document.getElementById("time").textContent="Current time is "+ time;
},1000)