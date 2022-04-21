const searchForm = document.querySelector("#search-form"),
    searchInput = document.querySelector("#search-input"),
    speechBtnDiv = document.querySelector("#speech-btn"),
    micBtn = document.querySelector(".btn .fas"),
    instruction = document.querySelector(".instruction"),
    speechRecognition = window.speechRecognition || window.webkitSpeechRecognition,
    speechSynthesis = window.speechSynthesis,
    recognition = new speechRecognition();
    
if(speechRecognition || speechSynthesis) {
    console.log("Speech Recgonition and Synthesis Supported");


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
    console.log("Speech Recognition Started");
});

// Stop Speech Recognition
recognition.addEventListener("end", () => {
    micBtn.classList.replace("fa-microphone-slash", "fa-microphone");
    instruction.textContent = "Press Ctrl + x or Click the Mic icon to start";
    searchInput.focus();
    console.log("Speech Recognition Disabled");
});


} else {
    console.log("Speech Recgonition and Synthesis Not Supported");
    speechBtnDiv.style.visibility = "hidden";
}