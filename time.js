console.log("time");
// var text = document.getElementById("demo");
var pause = document.getElementById("stop");
pause.addEventListener("click", myStopFunction);

const myInterval = setInterval(myTimer, 1000);

function myTimer(){
    const date = new Date();
    document.getElementById("demo").innerText=
    date.toLocaleTimeString();
}

function myStopFunction(){
    clearInterval(myInterval);

}