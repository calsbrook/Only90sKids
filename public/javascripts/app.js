var player = document.getElementById("player")

function playSong() {
    player.play();
}

function pauseSong() {
    setTimeout(function() {
        player.pause();
    }, 15000);
}

playSong();
pauseSong();