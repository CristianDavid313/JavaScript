let toggletBtn = document.querySelector('.toggleBtn');
let container = document.querySelector('.container');

toggletBtn.onclick = function() {
    container.classList.toggle('active')
}