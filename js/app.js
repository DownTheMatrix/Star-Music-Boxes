// Play audio on keypress
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop function from playing all together
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

// Apply the removeTransition() function on each div
const musicBoxes = document.querySelectorAll('.music_box');
musicBoxes.forEach(music_box => music_box.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', glow);
window.addEventListener('keyup', restore);

// Remove transition
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing');
}

// Heading Glow
function glow() {
    const heading = document.querySelector('h1');
    heading.style.color = "blue";
}

// Remove glowing effect from heading
function restore() {
    const heading = document.querySelector('h1');
    heading.style.color = "#f2f2f2";
}
