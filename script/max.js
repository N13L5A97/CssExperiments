document.querySelector('input[name="changeColor"]').addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 361 + 50);
    document.documentElement.style.setProperty('--random-number', randomNumber);
});