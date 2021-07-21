(() => {
  const body = document.querySelector("body");
  const popup = document.querySelector(".popup");
  const popupLinks = document.querySelectorAll(".popup-link");
  const popupCloseIcon = document.querySelectorAll(".close-popup");

  const timeout = 50;

  let lockPadding = [
    document.querySelector("header"),
    // document.querySelector("footer"),
  ];
  document.querySelectorAll("footer > section").forEach((element) => {
    lockPadding.push(element);
  });
  document.querySelectorAll(".bg").forEach((element) => {
    lockPadding.push(element);
  });
  document.querySelectorAll("main > section").forEach((element) => {
    if (element !== document.querySelectorAll("main > section")[0]) {
      lockPadding.push(element);
    }
  });

  setTimeout(function () {
    popup.style.display = "inline-block";
  }, timeout);

  popupLinks.forEach((element) => {
    element.addEventListener("click", function (e) {
      popupOpen();
    });
  });

  popupCloseIcon.forEach((element) => {
    element.addEventListener("click", function (e) {
      popupClose();
    });
  });

  function popupOpen() {
    popup.classList.add("open");
    popup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose();
        setTimeout(function () {
          bodyUnlock();
        }, timeout);
      }
    });
    bodyLock();
  }

  function popupClose() {
    popup.classList.remove("open");
  }

  function bodyLock() {
    const lockPaddingValue = window.innerWidth - body.offsetWidth;
    lockPadding.forEach((element) => {
      element.style.paddingRight = lockPaddingValue + "px";
    });
    body.classList.add("lock");
  }

  function bodyUnlock() {
    lockPadding.forEach((element) => {
      element.style.paddingRight = "0px";
    });
    body.classList.remove("lock");
  }

  $(document).ready(function () {
    $("form").submit(function (event) {
      event.preventDefault();
      popupClose();
      Swal.fire({
        icon: "success",
        title: "Форма отправлена",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(function () {
        bodyUnlock();
      }, 1900);
    });
  });
  
})();

// burger

(() => {
  const burger = document.querySelector(".header__burger");
  const list = document.querySelector(".header__list");

  burger.addEventListener("click", function (e) {
    burger.classList.toggle("active");
    list.classList.toggle("active");
    body.classList.toggle("lock");
  });
})();

// Mask
(() => {
  $(function () {
    $("input[type = tel]").mask("+38 (999) 999 999");
  });
})();

