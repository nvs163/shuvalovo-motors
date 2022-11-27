// modal
var gomodaloverlay = document.querySelectorAll('.gomodaloverlay');
var gomodaltradein = document.querySelectorAll('.gomodaltradein');
var gomodalinsurance = document.querySelectorAll('.gomodalinsurance');
var gomodalcredit = document.querySelectorAll('.gomodalcredit');
var gomodalbuy = document.querySelectorAll('.gomodalbuy');

var modaloverlay  =  document.getElementsByClassName("modal__overlay")[0];

var modaltradein  =  document.getElementsByClassName("modal__form-trade-in")[0];
var modalinsurance  =  document.getElementsByClassName("modal__form-insurance")[0];
var modalcredit  =  document.getElementsByClassName("modal__form-credit")[0];
var modalbuy  =  document.getElementsByClassName("modal__form-buy")[0];


var closemodal1  =  document.getElementById("closemodal1");
var closemodal2  =  document.getElementById("closemodal2");
var closemodal3  =  document.getElementById("closemodal3");
var closemodal4  =  document.getElementById("closemodal4");


closemodal1.addEventListener("click", closeModalTradein, false);
closemodal2.addEventListener("click", closeModalInsurance, false);
closemodal3.addEventListener("click", closeModalCredit, false);
closemodal4.addEventListener("click", closeModalBuy, false);



for (var i = 0; i < modaltradein.length; i++) {
  modaltradein[i].addEventListener("click", openModalTradein, false);
}
for (var i = 0; i < modalinsurance.length; i++) {
  modalinsurance[i].addEventListener("click", openModalInsurance, false);
}
for (var i = 0; i < modalcredit.length; i++) {
  modalcredit[i].addEventListener("click", openModalCredit, false);
}
for (var i = 0; i < modalbuy.length; i++) {
  modalbuy[i].addEventListener("click", openModalBuy, false);
}


function openModalTradein(){
  modaloverlay.classList.add("active");
  setTimeout(function() { 
    modaltradein.classList.add("active");
  }, 100);
}
function openModalInsurance(){
  modaloverlay.classList.add("active");
  setTimeout(function() { 
    modalinsurance.classList.add("active");
  }, 100);
}
function openModalCredit(){
  modaloverlay.classList.add("active");
  setTimeout(function() { 
    modalcredit.classList.add("active");
  }, 100);
}
function openModalBuy(){
  modaloverlay.classList.add("active");
  setTimeout(function() { 
    modalbuy.classList.add("active");
  }, 100);
}


function closeModalTradein(){
  modaloverlay.classList.remove("active");
  modaltradein.classList.remove("active");
}

function closeModalInsurance(){
  modaloverlay.classList.remove("active");
  modalinsurance.classList.remove("active");
}

function closeModalCredit(){
  modaloverlay.classList.remove("active");
  modalcredit.classList.remove("active");
}

function closeModalBuy(){
  modaloverlay.classList.remove("active");
  modalbuy.classList.remove("active");
}