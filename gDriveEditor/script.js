// CREATE VARIABLES
const glink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

btn.addEventListener("click", generateLink);

function generateLink(e) {
    e.preventDefault();
    
    const gLinkValue = glink.value;
    const confirmLink = glink.value.includes('https://drive.google.com/file/d/');

    if(confirmLink == true) {
        const getDownloadLink = glink.value
            .replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
            .replace("/view?usp=sharing", "");

        downloadLink.value = getDownloadLink;

        function copyText(target) {
            if(target.value == "") {
                alert("Please generate a download link.")
            } else {
                target.select();
                document.execCommand("copy");
                alert("Link has been copied to clipboard!");
            }
        };

        const copy = document.querySelector(".copy");
        copy.addEventListener("click", () => {
            return copyText(downloadLink);
        });

        //EMBED AUDIO FUNCTION
        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '" type="audio/mp3"></audio>';
        const embedAudio = document.getElementById("embed-audio");

        embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;

        //COPY AUDIO EMBED CODE
        const copyAudio = document.querySelector(".copy-audio");
        copyAudio.addEventListener("click", () => {
            return copyText(embedAudio);
        })

        //EMBED VIDEO FUNCTION
        const getVideoLink = glink.value
            .replace("/view?usp=sharing", "");

        const video1 = '<iframe src="';
        const video2 = '/preview" width="560" height="315"></iframe>';

        const embedVideo = document.getElementById("embed-video");

        embedVideo.value = `${video1}${getVideoLink}${video2}`;

        const copyVideo = document.querySelector(".copy-video");
        copyVideo.addEventListener("click", () => {
            return copyText(embedVideo);
        });

    } else {
        alert("Please enter a Google Drive File Link")
    }

}



