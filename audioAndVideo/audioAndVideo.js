let player;


window.onload = function () {

    player = document.getElementById('player');
    player.src = 'luciano_pavarotti.mp3';
    document.getElementById('btnPlay').addEventListener('click', playMusic, false);
    document.getElementById('btnPause').addEventListener('click', pauseMusic, false);
    document.getElementById('btnStop').addEventListener('click', stopMusic, false);
    document.getElementById('volumeSlider').addEventListener('change', changeVolume, false);

};

function playMusic(e) {
    player.play();
}

function pauseMusic(e) {
    player.pause();
}

function stopMusic(e) {
    player.pause();
    player.currentTime = 0;
}

function changeVolume(e) {
    player.volume = document.getElementById('volumeSlider').value;
}
