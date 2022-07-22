let x = 0;
let interval1 = setInterval(function(){
    document.getElementById("text").textContent="You are on this page for "+x+" seconds(Wait for 10 seconds a magic will happen!)";
    x = x+1;
},1000) //Automatically runs in cycle after every given interval

setTimeout(function(){
    clearInterval(interval1);
    test();
    rickroll();
},11000) //Runs for one time after given interval

function test(){
    document.getElementById("text").textContent="Surprise";
    document.getElementById("text").style.color="red";   
}

setInterval(()=>{ //using arrow function
    let date = new Date();
    this.time = date.getHours() +":" +date.getMinutes()+":"+date.getSeconds();
    document.getElementById("time").textContent="Current time is "+ time;
},1000)
function rickroll(){
    var temp = '<video controls src="rick.mp4" autoplay muted></video>';
    var a = document.createElement("VIDEO");
    a.innerHTML = temp;
    document.getElementById('rickroll').appendChild(a.childNodes[0]);
}