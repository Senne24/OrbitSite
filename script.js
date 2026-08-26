const animationSpeed = '0.1s';

const ratingBox = document.getElementById('ratingBox');
const ratingTitle = document.getElementById('ratingTitle');
const creditText = document.getElementById('creditText');
const ratingWrapper = document.getElementById('ratingWrapper');
const star5 = document.getElementById('star5');
let isLocked = false;

ratingBox.style.transition = `transform ${animationSpeed} cubic-bezier(0.25, 1, 0.5, 1)`;

ratingBox.addEventListener('click', (e) => {
    if (isLocked) return;

    const clickedLabel = e.target.closest('label');
    if (!clickedLabel) return;

    isLocked = true;

    const star5Label = document.querySelector('label[for="star5"]');
    const star5Rect = star5Label.getBoundingClientRect();

    const clickX = e.clientX;
    const star5CenterX = star5Rect.left + (star5Rect.width / 2);
    
    const distance = clickX - star5CenterX;

    ratingBox.style.transition = `transform ${animationSpeed} cubic-bezier(0.25, 1, 0.5, 1)`;
    ratingBox.style.transform = `translateX(${distance}px)`;

    setTimeout(() => {
        star5.checked = true;
    }, parseFloat(animationSpeed) * 500);

    setTimeout(() => {
        creditText.classList.add('visible');
        ratingTitle.style.opacity = '0';
        ratingWrapper.style.opacity = '0';
    }, 1000);
});