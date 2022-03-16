let input = document.querySelector(".input"),
    character = document.querySelector(".character"),
    word = document.querySelector(".word"),
    readingTime = document.querySelector(".reading-time"),
    wordLimit = document.querySelector(".word-limit"),
    word_limit = 225;

    input.addEventListener("keyup", characterCounter);
    input.addEventListener("keyup", wordCounter);

    function characterCounter() {
        character.innerHTML = input.value.length;
    }

    function wordCounter(e) {
        let words = input.value.match(/\b[-?(\w+)?]+\b/gi);

        if(words) {
        word.innerHTML = words.length;
        wordLimit.innerHTML = word_limit - words.length;
        } else {
            word.innerHTML = 0;
        }

        // Word Limit
        input.addEventListener("keydown", (e) => {
            words = input.value.match(/\b[-?(\w+)?]+\b/gi);
            if(words) {
                if(words.length > word_limit -1 && e.code !== "Backspace"){
                    e.preventDefault();
                    // console.log("word limit reached");
                }
            }
        });

        // reading time based on 225 words/min
        if(words) {
            let seconds = Math.floor((words.length * 60) / 225);
            if(seconds > 59) {
                let minutes = Math.floor(seconds / 60);
                seconds = seconds - minutes * 60;
                readingTime.innerHTML = minutes + "m" +  seconds + "s";
            } else {
                readingTime.innerHTML = seconds + "s";
            } 
            
        }

        else {
            readingTime.innerHTML = "0s";
        }
    }