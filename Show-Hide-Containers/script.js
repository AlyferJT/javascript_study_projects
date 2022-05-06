'use strict';

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsShowModal = document.querySelectorAll(".show-modal")

let showModal = function () {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

let hideModal = function () {
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', showModal)
}

btnCloseModal.addEventListener('click', hideModal)
overlay.addEventListener('click', hideModal)

document.addEventListener('keydown', function(e) {
    let keypressed = e.key

    if (keypressed === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            hideModal();
        }
    }
})
