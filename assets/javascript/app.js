
        // function countDown(seconds,elem){
        //     var timer = document.getElementById(status);
        //     status.innerHTMl = "You have '+seconds+' seconds to  the trivia questions";
        //     if(seconds < 1) {
        //         clearTimeout (timer);
        //         status.innerHTML = 'Time is up';
        //      }
             
        //     seconds--;
        //     var timer = setTimeout('countDown('+seconds+', "'+status+'")', 1000);
        // }
// function countDown(secs, myTimer);{
    var myTimer = document.getElementById('status');
myTimer.innerHTML = "You have '+secs+' seconds to complete Trivia";
if (secs < 1){
    clearTimeout (myTimer)
    myTimer.innerHTML = "Time is Up";
}
secs--;
var myTimer =setTimeout('countDown('+secs+', "'+myTimer+'")', 3000);