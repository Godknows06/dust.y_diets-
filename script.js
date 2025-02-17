// Simple Scroll Animation (Optional Enhancement)
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelectorAll('.btn');
    btn.forEach(button => {
        button.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector('#home').offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
