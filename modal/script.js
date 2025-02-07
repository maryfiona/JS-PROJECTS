const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModal = document.getElementById("closeModal");


openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});


closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
