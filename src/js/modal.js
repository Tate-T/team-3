(() => {
    const headerModal = {
        closeModalBtn: document.querySelector("[data-close-modal]"),
        closeModal: document.querySelector("[data-close-modal-button]"),
        modal: document.querySelector("[data-modal]"),
    };
    const modalInput = document.querySelector(".modal__input");

    function toggleModal(e) {
        e.preventDefault();
        headerModal.modal.classList.toggle("is-hidden");
    }

    headerModal.closeModal.addEventListener("click", (event) => {
        if (modalInput.value.trim() !== "") {
            toggleModal(event);
        }
    });

    headerModal.closeModalBtn.addEventListener("click", toggleModal);
})();
