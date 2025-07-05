function loadVideo() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');

    if (videoId) {
        displayVideo(videoId);
    }
}

function displayVideo(videoId) {
    const iframe = document.createElement('iframe');
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    const videoContainer = document.getElementById('videocontainer');
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
}

window.onload = loadVideo;

