const searchForm = document.querySelector("#search-form"),
    searchInput = document.querySelector("#search-input"),
    speechBtnDiv = document.querySelector("#speech-btn"),
    micBtn = document.querySelector(".btn .fas"),
    instruction = document.querySelector(".instruction"),
    speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Check for browser support
if(speechRecognition) {
    const recognition = new speechRecognition();

    micBtn.addEventListener("click", micBtnClicked);
    
    function micBtnClicked(e) {
        e.preventDefault();
        
        if(micBtn.classList.contains("fa-microphone")) {
            recognition.start();
        } else {
            recognition.stop();
        }
    }

    recognition.addEventListener("start", () => {
        // micBtn.classList.remove("fas-microphone");
        // micBtn.classList.add("fa-microphone-slash");
        micBtn.classList.replace("fa-microphone", "fa-microphone-slash");
        instruction.textContent = "Recording...";
        searchInput.focus();
        console.log("Speech recognition enabled");
    });

    recognition.addEventListener("end", () => {
        micBtn.classList.replace("fa-microphone-slash", "fa-microphone");
        instruction.textContent = "Click the mic icon to start";
        searchInput.focus();
        console.log("Speech recognition disabled");
    });

    // Get Result of speech recognition
    recognition.continuous = true;
    let content = "";
    recognition.addEventListener("result", (e) => {
        console.log(e);
        const current = e.resultIndex;
        const transcript = e.results[current][0].transcript;
        content += transcript;

        searchInput.value = content;
        searchInput.focus();
    });

} else {
    speechBtnDiv.style.visibility = "hidden";
}