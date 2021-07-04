const modaL = document.querySelector(".contacts-button");
const modalWindow = document.querySelector(".modal-block");
const buttonClose = document.querySelector(".button-close");

modaL.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.add("modal-show");
});

buttonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
    if (modalWindow.classList.contains("modal-show")) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-show");
    }
}
});  