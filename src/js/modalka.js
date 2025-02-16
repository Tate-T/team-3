(() => {
    const foterModal = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModal: document.querySelector("[data-close-modalka]"),
        modalka: document.querySelector("[data-modalka]")
    };

    foterModal.openModalBtn.addEventListener("click", toggleModal);
    foterModal.closeModal.addEventListener("click", toggleModal);

    function toggleModal() {
        foterModal.modalka.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();
