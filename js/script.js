(() => {
  const body = document.querySelector("body");
  const popup = document.querySelector(".popup");
  const popupLinks = document.querySelectorAll(".popup-link");
  const popupCloseIcon = document.querySelectorAll(".close-popup");
  // const bg = document.querySelectorAll(".bg");

  const timeout = 50;

  let lockPadding = [
    document.querySelector("header"),
    document.querySelector("footer"),
    // document.querySelector(".bg")
  ];
  document.querySelectorAll(".bg").forEach((element) => {
    lockPadding.push(element);
  });
  document.querySelectorAll("main > section").forEach((element) => {
    if (element !== document.querySelectorAll("main > section")[0]) {
      lockPadding.push(element);
    }
  });

  setTimeout(function () {
    popup.style.display = 'inline-block';
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
      }
    });
    bodyLock();
  }

  function popupClose() {
    popup.classList.remove("open");
    setTimeout(function () {
      bodyUnlock();
    }, timeout);
  }

  function bodyLock() {
    const lockPaddingValue = window.innerWidth - body.offsetWidth;
    lockPadding.forEach((element) => {
      element.style.paddingRight = lockPaddingValue + "px";
    });
    // bg.forEach((element) => {
    //   let marginRight = window.getComputedStyle(element, null).getPropertyValue("margin-right");
    //   marginRight = marginRight.split('').slice(0, -2).join('');
    //   element.style.marginRight = marginRight - lockPaddingValue + 'px';
    //   console.log(marginRight - lockPaddingValue + 'px');
    // });
    body.classList.add("lock");
  }

  function bodyUnlock() {
    lockPadding.forEach((element) => {
      element.style.paddingRight = "0px";
    });
    body.classList.remove("lock");
  }
})();

// burger

const burger = document.querySelector(".header__burger");
const list = document.querySelector(".header__list");

burger.addEventListener("click", function (e) {
  burger.classList.toggle("active");
  list.classList.toggle("active");
  body.classList.toggle("lock");
});

// Mask

$(function () {
  $("input[type = tel]").mask("+380 (99) 999 99 99");
});
