// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const mobalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const mobalOverlay = document.querySelector('.modal-overlay');

mobalBtn.addEventListener("click", () => {
    mobalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener("click", () => {
    mobalOverlay.classList.remove('open-modal');
});
