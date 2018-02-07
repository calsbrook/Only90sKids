var player = document.getElementById("player")

function playSong() {
    player.play();
}

function pauseSong() {
    player.pause();
}

playSong();

setTimeout(function() {
    player.pause();
}, 10000);