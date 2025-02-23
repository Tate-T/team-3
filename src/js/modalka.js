(() => {
    const foterModal = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModal: document.querySelector("[data-close-modalka]"), 
        modalka: document.querySelector("[data-modalka]"),
    };

    const inputModal = document.querySelector(".footer__input");

    foterModal.openModalBtn.addEventListener("click", (event) => {
        if (inputModal.value.trim() !== "") {
            toggleModal();
        }
    });

    foterModal.closeModal.addEventListener("click", toggleModal);
    function toggleModal() {
        foterModal.modalka.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();

