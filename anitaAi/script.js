const searchForm = document.querySelector("#search-form"),
    searchInput = document.querySelector("#search-input"),
    speechBtnDiv = document.querySelector("#speech-btn"),
    micBtn = document.querySelector(".btn .fas"),
    instruction = document.querySelector(".instruction"),
    speechRecognition = window.speechRecognition || window.webkitSpeechRecognition,
    speechSynthesis = window.speechSynthesis,
    recognition = new speechRecognition();
    
if(speechRecognition && speechSynthesis) {
    // console.log("Speech Recgonition and Synthesis Supported");


micBtn.addEventListener("click", micBtnClicked);
function micBtnClicked(e) {
    e.preventDefault();
    if(micBtn.classList.contains("fa-microphone")) {
        recognition.start();
    } else {
        recognition.stop();
    }
}

// Start Speech Recognition
recognition.addEventListener("start", () => {
    // micBtn.classList.remove("fas-microphone");
    // micBtn.classList.add("fa-microphone-slash");
    micBtn.classList.replace("fa-microphone", "fa-microphone-slash");
    instruction.textContent = "Recording... Press Ctrl + M to stop.";
    searchInput.focus();
    // console.log("Speech Recognition Started");
});

// Stop Speech Recognition
recognition.addEventListener("end", () => {
    micBtn.classList.replace("fa-microphone-slash", "fa-microphone");
    instruction.textContent = "Press Ctrl + x or Click the Mic icon to start";
    searchInput.focus();
    // console.log("Speech Recognition Ended");
});

recognition.continuous = true;
// const recognitionOn = setInterval(() => {
//     if(instruction.textContent.includes("start")){
//         recognition.start();
//     }
// }, 3000);
//Speech recognition shortcuts
speechRecognitionKeys();
loadTranscript();

} else {
    console.log("Speech Recgonition and Synthesis Not Supported");
    speechBtnDiv.style.visibility = "hidden";
}

// Speech recognition shortcuts function
function speechRecognitionKeys() {
    document.addEventListener("keydown", (e) => {
        if(e.ctrlKey && e.key === "x") {
            recognition.start();
        }
        if(e.ctrlKey && e.key === "m") {
            recognition.stop();
        }
    });
}

// Load Transcripts
function loadTranscript() {
    recognition.addEventListener("result", (e) => {
        // console.log(e);
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        showTranscript(transcript);

        // Loop through lists array
        for(let i=0; i < lists.length; i++) {
            // console.log(lists[i].question);
            let askedQuestion = transcript.toLowerCase().trim();
            if(askedQuestion.includes(lists[i].question)) {
                respond(lists[i].answer);
                break;
            } 
            
            if (askedQuestion.startsWith("what is", 0) && askedQuestion !== lists[i].question && (i = 1)) {
                console.log("no match");
                let errorMsg = "Apologies, I do not have enough data to answer this question at this time."
                respond(errorMsg);
                break;
            }
        }
    });
}

// Handle Response 
function respond(res) {
    let voices = window.speechSynthesis.getVoices();
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = res;
    speech.volume = "2";
    speech.rate = "0.9";
    speech.pitch = "1";

    if(voices) {
        speech.voice = voices[50];
    } else {
        speech.voice = voices[1];
    }

    window.speechSynthesis.speak(speech);
}

// Show Transcript
function showTranscript(transcript) {
    if (transcript.toLowerCase().trim() === "stop recording") {
        recognition.stop();
    } else if (!searchInput.value) {
        searchInput.value = transcript;
    } else {
        if (transcript.toLowerCase().trim() === "search") {
        searchForm.submit();
        } else if (transcript.toLowerCase().trim() === "reset form") {
        searchInput.value = "";
        } else {
        searchInput.value = transcript;
        }
    }
};