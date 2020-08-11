$(document).ready(function () {
 

 

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay_visible");
    modalDialog.addClass("modal__dialog_visible");
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  };

  //Обработка формы
  $(".form").validate({
    errorClass: "Invalid",
    messages: {
      password: "Please enter your password",
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });

  $(document).ready(function () {
    $("#modalEmail").inputmask("email")
  });

  const footInput = document.querySelector('#modalName');

  footInput.addEventListener('input', (e) => {
    if (!(/^[А-Яа-яa-zA-Z\s]*$/g.test(e.target.value)))
      e.target.value = e.target.value.slice(0, -1)
  });





  // const footInput = document.querySelector('#footer-name');

  // footInput.addEventListener('input', (e) => {
  //   if (!(/^[А-Яа-яa-zA-Z\s]*$/g.test(e.target.value)))
  //     e.target.value = e.target.value.slice(0, -1)
  // });

  

  function init() {
    var imgDefer = document.getElementsByTagName("img");
    for (var i = 0; i < imgDefer.length; i++) {
      if (imgDefer[i].getAttribute("data-src")) {
        imgDefer[i].setAttribute(
          "src",
          imgDefer[i].getAttribute("data-src")
        );
      }
    }
  }
  window.onload = init;

  


});


