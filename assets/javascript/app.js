
        function countDown(seconds,elem){
            var element = Document.getElementById(elem);
            element.innerHTMl = "You have '+seconds+' seconds to  the trivia questions";
            if(seconds < 1) {
                clearTimeout (timer);
                element.innerHTML = 'Time is up';
             }
             
            seconds--;
            var timer = setTimeout('countDown('+seconds+', "'+elem+'")', 1000);
        }