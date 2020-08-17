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

  var tabsItem = $(".tabs__item");
  var exampleItem = $(".example__item");

  tabsItem.on("click", function(event){
    var activeExample = $(this).attr("data-target");
    exampleItem.removeClass("example__item_active");
    tabsItem.removeClass("tabs__item_active");
    $(activeExample).addClass("example__item_active");
    $(this).addClass("tabs__item_active");
  });

  let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
	
}else{
	body.classList.add('mouse');
};

  var miSwiper = new Swiper('.reviews-slider', {
    // Optional parameters
    
    loop: true,
    
    keyboard: {
      enabled: true
    },
    autoplay: {
      delay: 10000
    }

  });
  mySwiper.slideToLoop(1, 100, true);

});


