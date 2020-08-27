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
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay_visible");
    modalDialog.removeClass("modal__dialog_visible");
  }

  //Обработка формы
  $(".form").validate({
    errorClass: "Invalid",
    messages: {
      password: "Enter your password",
      name: "Please specify your name",
      email: {
        required: "Email is required",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });

  $(document).ready(function () {
    $("#modalEmail").inputmask("email");
  });

  const footInput = document.querySelector("#modalName");

  footInput.addEventListener("input", (e) => {
    if (!/^[А-Яа-яa-zA-Z\s]*$/g.test(e.target.value))
      e.target.value = e.target.value.slice(0, -1);
  });

  function init() {
    var imgDefer = document.getElementsByTagName("img");
    for (var i = 0; i < imgDefer.length; i++) {
      if (imgDefer[i].getAttribute("data-src")) {
        imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
      }
    }
  }
  window.onload = init;

  var tabsItem = $(".tabs__item");
  var exampleItem = $(".example__item");

  tabsItem.on("click", function (event) {
    var activeExample = $(this).attr("data-target");
    exampleItem.removeClass("example__item_active");
    tabsItem.removeClass("tabs__item_active");
    $(activeExample).addClass("example__item_active");
    $(this).addClass("tabs__item_active");
  });

  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
      let body = document.querySelector("body");
  if (isMobile.any()) {
      body.classList.add("touch");
      let arrow=document.querySelectorAll('.fa-angle-down');
    for(i=0; i<arrow.length; i++){
		  	let thisLink=arrow[i].previousElementSibling;
		  	let subMenu=arrow[i].nextElementSibling;
		  	let thisArrow=arrow[i];

		  	thisLink.classList.add('parent');
	  	arrow[i].addEventListener('click', function(){
		  	subMenu.classList.toggle('open');
		  	thisArrow.classList.toggle('active');
		});
	  }
  }else{
    body.classList.add("mouse");
  }

  var miSwiper = new Swiper(".reviews-slider", {
    // Optional parameters

    loop: true,

    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 10000,
    },
  });


  $(function () {
    $('.switch-btn').click(function () {
      $(this).toggleClass('switch-on');
      if ($(this).hasClass('switch-on')) {
        $(this).trigger('on.switch');
      } else {
        $(this).trigger('off.switch');
      }
    });
    $('.switch-btn').on('on.switch', function () {
      $('.lp').removeClass('visible');
      $('.hp').removeClass('hidden');
    });
    $('.switch-btn').on('off.switch', function () {
      $('.lp').addClass('visible');
      $('.hp').addClass('hidden');
    });
  });

  const burger = $('.burger');
  burger.on("click", function () {
    $('.navbar-mobile').toggleClass('mobile-vis')
  });


  const mobileClose = $('.mobile-close');
  mobileClose.on('click', function () {
    $('.navbar-mobile').removeClass('mobile-vis');
    console.log('все отлично')
  })
});
