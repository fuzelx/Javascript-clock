
function startTime(){
let hours = new Date().getHours();

let minutes = new Date().getMinutes();

let seconds = new Date().getSeconds();

minutes = checkTime(minutes);
seconds = checkTime(seconds);


document.getElementById("h").innerHTML = hours;
document.getElementById("m").innerHTML = minutes;
document.getElementById("s").innerHTML = seconds;
setTimeout(startTime, 1000);
}

function checkTime(i){
    if (i < 10){i = "0" + i}

    return i;

}
