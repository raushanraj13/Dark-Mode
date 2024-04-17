const darkModeToggle = document.getElementById('darkModeToggle');
const content = document.getElementById('content');

darkModeToggle.addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('dark-mode');
    content.classList.toggle('dark-mode');
});
