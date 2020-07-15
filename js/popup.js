    var loginLink = document.querySelector(".login-link");
    var modalLogin = document.querySelector(".modal-login");
    var modalClose = document.querySelector(".modal-close");
    var form = modalLogin.querySelector("form");
    var login = modalLogin.querySelector("[name=login]");
    var password = modalLogin.querySelector("[name=password]");
    var storage = localStorage.getItem("login");
    var isStorageSupport = true;
    var storage = "";

    
    
    try {
        storage = localStorage.getItem("login");
    } catch (err) {
        isStorageSupport = false;
    }

    loginLink.addEventListener("click", function (evt) {
        evt.preventDefault(); 
        modalLogin.classList.add("modal-show");
        
        if (storage) {
            login.value = storage;
            password.focus();
        } else {
            login.focus();
        }
    });

    modalClose.addEventListener("click", function (evt) {
        evt.preventDefault(); 
        modalLogin.classList.remove("modal-show");
        modalLogin.classList.remove("modal-error");
    });

    form.addEventListener("submit", function (evt) {
        if (!login.value || !password.value) {
            evt.preventDefault();
            modalLogin.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("login", login.value); 
            }   
        }            
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (modalLogin.classList.contains("modal-show")) {
                modalLogin.classList.remove("modal-show");
                modalLogin.classList.remove("modal-error");
            }
        }
    });

   