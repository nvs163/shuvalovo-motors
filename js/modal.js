// modal
let modal = document.querySelector(".modal__pop-up")

let gomodaloverlay = document.querySelector(".gomodaloverlay");
let gomodaltradein = document.querySelector(".gomodaltradein");
let gomodalinsurance = document.querySelector(".gomodalinsurance");
let gomodalcredit = document.querySelector(".gomodalcredit");
let gomodalbuy = document.querySelector(".gomodalbuy");

let modaloverlay  =  document.querySelector(".modal__overlay");

let modaltradein  =  document.querySelector(".modal__form-trade-in");
let modalinsurance  =  document.querySelector(".modal__form-insurance");
let modalcredit  =  document.querySelector(".modal__form-credit");
let modalbuy  =  document.querySelector(".modal__form-buy");


let closeModal = document.querySelector(".modal__close-btn");


gomodaltradein.addEventListener("click", function(e) {
  e.preventDefault();
  modaloverlay.classList.add("active");
})

gomodalinsurance.addEventListener("click", function(e) {
  e.preventDefault();
  modaloverlay.classList.add("active");
})

gomodalcredit.addEventListener("click", function(e) {
  e.preventDefault();
  modaloverlay.classList.add("active");
})

gomodalbuy.addEventListener("click", function(e) {
  e.preventDefault();
  modaloverlay.classList.add("active");
})


closeModal.addEventListener("click", () => {
  modaloverlay.classList.remove("active");
});