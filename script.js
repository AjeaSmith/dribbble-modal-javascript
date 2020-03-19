// Declare variables

let modal = document.querySelector(".modal_container");
let modalBtn = document.querySelector(".toggle");
let closeBtn = document.querySelector(".close_btn .close");

// logic
modalBtn.addEventListener("click", () => {
    modal.classList.remove("show_modal");
});
closeBtn.addEventListener("click", () => {
    modal.classList.add("show_modal");
})