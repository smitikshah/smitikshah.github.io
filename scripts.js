var audio = new Audio('/sounds/name.mp3');
document.getElementById('pronounce').onclick = function() {
    audio.play();
};
