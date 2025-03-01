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

const modalkaInput = document.querySelector(".modal__input");
const modalBtn = document.querySelector(".modal__btnsave");
const headerText = document.querySelector(".header__minortitle");

modalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const name = modalkaInput.value.trim();
  if (name) {
    headerText.textContent = `Вітаємо, ${name}!`;
  } else {
    headerText.textContent = `Вітаємо, User!`;
  }
});
