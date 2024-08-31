let upBtn = document.querySelector('.upBtn');
upBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});