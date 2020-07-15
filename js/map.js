var buttonMap = document.querySelector(".contacts-button-map");
    var modalMap = document.querySelector(".modal-map");
    var mapClose = modalMap.querySelector(".modal-close");

    buttonMap.addEventListener("click", function(evt) {
      evt.preventDefault(); 
      modalMap.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault(); 
    modalMap.classList.remove("modal-show");      
});


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modalMap.classList.contains("modal-show")) {
            modalMap.classList.remove("modal-show");              
        }
    }
});