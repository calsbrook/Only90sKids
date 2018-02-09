var player = document.getElementById("player")

function playSong() {
    player.play();
}

function pauseSong() {
    setTimeout(function() {
        player.pause();
    }, 20000);
}

playSong();
pauseSong();