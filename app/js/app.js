$(function () {

  $(".header__menu-btn").on("click", function () {
    $(".navigation-wrap").addClass("open");
    $("body").addClass("lock");
    $(".category-list").removeClass("open");
  });

  $(".navigation-close").on("click", function () {
    $(".navigation-wrap").removeClass("open");
    $("body").removeClass("lock");
  });

  $(".underfooter__btn").on("click", function () {
    $(".category-list").toggleClass("open");
    $("body").toggleClass("lock");
  });

  $(".category-list__close").on("click", function () {
    $(".category-list").removeClass("open");
    $("body").removeClass("lock");
  });

  $(".filter-btn").on("click", function () {
    $(".category-list").addClass("open");
    $("body").addClass("lock");
  });

  $(".order__radio").on("click", function () {
    $(".order__radio").removeClass("active");
    $(this).addClass("active");
  });

  $(".cabinet__nav-item").on("click", function () {
    $(".cabinet__nav-item").removeClass("active");
    $(this).addClass("active");
  });

  $("a.underfooter__col").on("click", function () {
    $("a.underfooter__col").removeClass("active");
    $(this).addClass("active");
  });

  $(".cabinet__input-show").on("click", function () {
    $(this).toggleClass("show");
  });


  $(".navigation__item-child").on("click", function () {
    $(this).toggleClass("active");
    $(".intro__line").toggleClass("open");
    $(".category-menu").toggleClass("open");
  });

  $(".category-list__child-item").on("click", function () {
    $(this).toggleClass("open");
  });

  $(".category-list__subchild-item").on("click", function () {
    $(this).toggleClass("open");
  });

  $(".category-list__chek").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".category-list__title").on("click", function () {
    $(this).toggleClass("active");
  });


  $('.intro__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(".rateYo").rateYo({
    starWidth: "15px",
    ratedFill: "#FFA800",
    spacing: "3px",
    rating: 4,
    readOnly: true,
    starSvg: '<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6808 6.44528L11.7609 9.29153L12.4504 13.3115C12.4652 13.3977 12.4556 13.4864 12.4226 13.5674C12.3896 13.6484 12.3347 13.7185 12.2639 13.7699C12.1932 13.8214 12.1094 13.8519 12.0222 13.8582C11.935 13.8645 11.8477 13.8463 11.7703 13.8056L8.15998 11.9076L4.55013 13.8051C4.47272 13.8458 4.38547 13.8641 4.29823 13.8578C4.211 13.8515 4.12727 13.8209 4.05651 13.7695C3.98575 13.7181 3.93078 13.6479 3.89781 13.5669C3.86485 13.4859 3.85521 13.3973 3.86998 13.3111L4.55951 9.29106L1.6392 6.44528C1.57651 6.38421 1.53218 6.30681 1.51121 6.22185C1.49024 6.13688 1.49348 6.04775 1.52055 5.96453C1.54763 5.8813 1.59746 5.80732 1.6644 5.75096C1.73135 5.69459 1.81274 5.6581 1.89935 5.6456L5.93482 5.05966L7.73951 1.40247C7.89748 1.08231 8.42248 1.08231 8.58045 1.40247L10.3851 5.05966L14.4206 5.6456C14.507 5.65842 14.5882 5.6951 14.6549 5.75151C14.7216 5.80791 14.7713 5.88181 14.7983 5.96489C14.8253 6.04797 14.8286 6.13694 14.8079 6.22181C14.7871 6.30667 14.7431 6.38406 14.6808 6.44528Z"/></svg>'
  });

  $(".rateYo-review").rateYo({
    starWidth: "12px",
    ratedFill: "#FFA800",
    spacing: "3px",
    rating: 4,
    readOnly: true,
    starSvg: '<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6808 6.44528L11.7609 9.29153L12.4504 13.3115C12.4652 13.3977 12.4556 13.4864 12.4226 13.5674C12.3896 13.6484 12.3347 13.7185 12.2639 13.7699C12.1932 13.8214 12.1094 13.8519 12.0222 13.8582C11.935 13.8645 11.8477 13.8463 11.7703 13.8056L8.15998 11.9076L4.55013 13.8051C4.47272 13.8458 4.38547 13.8641 4.29823 13.8578C4.211 13.8515 4.12727 13.8209 4.05651 13.7695C3.98575 13.7181 3.93078 13.6479 3.89781 13.5669C3.86485 13.4859 3.85521 13.3973 3.86998 13.3111L4.55951 9.29106L1.6392 6.44528C1.57651 6.38421 1.53218 6.30681 1.51121 6.22185C1.49024 6.13688 1.49348 6.04775 1.52055 5.96453C1.54763 5.8813 1.59746 5.80732 1.6644 5.75096C1.73135 5.69459 1.81274 5.6581 1.89935 5.6456L5.93482 5.05966L7.73951 1.40247C7.89748 1.08231 8.42248 1.08231 8.58045 1.40247L10.3851 5.05966L14.4206 5.6456C14.507 5.65842 14.5882 5.6951 14.6549 5.75151C14.7216 5.80791 14.7713 5.88181 14.7983 5.96489C14.8253 6.04797 14.8286 6.13694 14.8079 6.22181C14.7871 6.30667 14.7431 6.38406 14.6808 6.44528Z"/></svg>'
  });



  $(".rateYo-tab").rateYo({
    starWidth: "15px",
    ratedFill: "#FFA800",
    spacing: "3px",
    rating: 0,
    starSvg: '<svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6808 6.44528L11.7609 9.29153L12.4504 13.3115C12.4652 13.3977 12.4556 13.4864 12.4226 13.5674C12.3896 13.6484 12.3347 13.7185 12.2639 13.7699C12.1932 13.8214 12.1094 13.8519 12.0222 13.8582C11.935 13.8645 11.8477 13.8463 11.7703 13.8056L8.15998 11.9076L4.55013 13.8051C4.47272 13.8458 4.38547 13.8641 4.29823 13.8578C4.211 13.8515 4.12727 13.8209 4.05651 13.7695C3.98575 13.7181 3.93078 13.6479 3.89781 13.5669C3.86485 13.4859 3.85521 13.3973 3.86998 13.3111L4.55951 9.29106L1.6392 6.44528C1.57651 6.38421 1.53218 6.30681 1.51121 6.22185C1.49024 6.13688 1.49348 6.04775 1.52055 5.96453C1.54763 5.8813 1.59746 5.80732 1.6644 5.75096C1.73135 5.69459 1.81274 5.6581 1.89935 5.6456L5.93482 5.05966L7.73951 1.40247C7.89748 1.08231 8.42248 1.08231 8.58045 1.40247L10.3851 5.05966L14.4206 5.6456C14.507 5.65842 14.5882 5.6951 14.6549 5.75151C14.7216 5.80791 14.7713 5.88181 14.7983 5.96489C14.8253 6.04797 14.8286 6.13694 14.8079 6.22181C14.7871 6.30667 14.7431 6.38406 14.6808 6.44528Z"/></svg>'

  });

  $(".card__like").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".card__backet").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".type").select2({
    minimumResultsForSearch: -1
  });

  $(".region").select2({
    placeholder: "Область",
  });

  $(".point").select2({
    placeholder: "Населений пункт",
  });

  $(".branch").select2({
    placeholder: "№ Відділення",
  });



  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100,
    max: 30000,
    from: 250,
    to: 25000,
    postfix: "грн"
  });

  $('.tab__inner, .login__inner').each(function () {
    let ths = $(this);
    ths.find('.tab__item, .login__item').not(':first').hide();
    ths.find('.tab__btn, .login__btn').click(function () {
      ths.find('.tab__btn, .login__btn').removeClass('active').eq($(this).index()).addClass('active');
      ths.find('.tab__item, .login__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');
  });


  $('.review__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button class="left"><svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.0119 5.02809L4.0119 8.02809C4.1639 8.18009 4.3419 8.25409 4.5459 8.25009C4.7499 8.24609 4.9259 8.17209 5.0739 8.02809C5.2219 7.88409 5.2959 7.70809 5.2959 7.50009C5.2959 7.29209 5.2239 7.11609 5.0799 6.97209L3.3519 5.24409H12.0399C12.2479 5.24409 12.4259 5.17009 12.5739 5.02209C12.7219 4.87409 12.7959 4.69209 12.7959 4.47609C12.7959 4.26009 12.7239 4.08409 12.5799 3.94809C12.4359 3.81209 12.2559 3.74409 12.0399 3.74409H3.3519L5.0799 2.02809C5.2239 1.88409 5.2959 1.70809 5.2959 1.50009C5.2959 1.29209 5.2239 1.11609 5.0799 0.97209C4.9359 0.82809 4.7599 0.75409 4.5519 0.75009C4.3439 0.74609 4.1639 0.82009 4.0119 0.97209L1.0119 3.97209C0.867898 4.11609 0.795898 4.29209 0.795898 4.50009C0.795898 4.70809 0.867898 4.88409 1.0119 5.02809Z" fill="#16110C"/></svg></button>',
    nextArrow: '<button class="right"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8089 4.27809L8.8089 7.27809C8.6569 7.43009 8.4789 7.50409 8.2749 7.50009C8.0709 7.49609 7.8949 7.42209 7.7469 7.27809C7.5989 7.13409 7.5249 6.95809 7.5249 6.75009C7.5249 6.54209 7.5969 6.36609 7.7409 6.22209L9.4689 4.49409H0.780902C0.572902 4.49409 0.394902 4.42009 0.246902 4.27209C0.0989023 4.12409 0.0249023 3.94209 0.0249023 3.72609C0.0249023 3.51009 0.0969023 3.33409 0.240902 3.19809C0.384902 3.06209 0.564902 2.99409 0.780902 2.99409H9.4689L7.7409 1.27809C7.5969 1.13409 7.5249 0.95809 7.5249 0.75009C7.5249 0.54209 7.5969 0.36609 7.7409 0.22209C7.8849 0.0780902 8.0609 0.00409031 8.2689 9.01222e-05C8.4769 -0.00390959 8.6569 0.0700903 8.8089 0.22209L11.8089 3.22209C11.9529 3.36609 12.0249 3.54209 12.0249 3.75009C12.0249 3.95809 11.9529 4.13409 11.8089 4.27809Z" fill="#16110C"/></svg></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.popular-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button class="left"><svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.0119 5.02809L4.0119 8.02809C4.1639 8.18009 4.3419 8.25409 4.5459 8.25009C4.7499 8.24609 4.9259 8.17209 5.0739 8.02809C5.2219 7.88409 5.2959 7.70809 5.2959 7.50009C5.2959 7.29209 5.2239 7.11609 5.0799 6.97209L3.3519 5.24409H12.0399C12.2479 5.24409 12.4259 5.17009 12.5739 5.02209C12.7219 4.87409 12.7959 4.69209 12.7959 4.47609C12.7959 4.26009 12.7239 4.08409 12.5799 3.94809C12.4359 3.81209 12.2559 3.74409 12.0399 3.74409H3.3519L5.0799 2.02809C5.2239 1.88409 5.2959 1.70809 5.2959 1.50009C5.2959 1.29209 5.2239 1.11609 5.0799 0.97209C4.9359 0.82809 4.7599 0.75409 4.5519 0.75009C4.3439 0.74609 4.1639 0.82009 4.0119 0.97209L1.0119 3.97209C0.867898 4.11609 0.795898 4.29209 0.795898 4.50009C0.795898 4.70809 0.867898 4.88409 1.0119 5.02809Z" fill="#16110C"/></svg></button>',
    nextArrow: '<button class="right"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8089 4.27809L8.8089 7.27809C8.6569 7.43009 8.4789 7.50409 8.2749 7.50009C8.0709 7.49609 7.8949 7.42209 7.7469 7.27809C7.5989 7.13409 7.5249 6.95809 7.5249 6.75009C7.5249 6.54209 7.5969 6.36609 7.7409 6.22209L9.4689 4.49409H0.780902C0.572902 4.49409 0.394902 4.42009 0.246902 4.27209C0.0989023 4.12409 0.0249023 3.94209 0.0249023 3.72609C0.0249023 3.51009 0.0969023 3.33409 0.240902 3.19809C0.384902 3.06209 0.564902 2.99409 0.780902 2.99409H9.4689L7.7409 1.27809C7.5969 1.13409 7.5249 0.95809 7.5249 0.75009C7.5249 0.54209 7.5969 0.36609 7.7409 0.22209C7.8849 0.0780902 8.0609 0.00409031 8.2689 9.01222e-05C8.4769 -0.00390959 8.6569 0.0700903 8.8089 0.22209L11.8089 3.22209C11.9529 3.36609 12.0249 3.54209 12.0249 3.75009C12.0249 3.95809 11.9529 4.13409 11.8089 4.27809Z" fill="#16110C"/></svg></button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  $('.sale__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.product__slider-bottom').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    infinite: true,
    focusOnSelect: true,

    asNavFor: '.product__slider-top',
    nextArrow: '<button class="right"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="31" viewBox="0 0 40 31" fill="none"><path d="M32.4836 10.9688L20.301 20.1038L8.11836 10.9688C7.90069 10.8052 7.6085 10.7137 7.30423 10.7137C6.99997 10.7137 6.70777 10.8052 6.49011 10.9688C6.38472 11.0482 6.30099 11.143 6.24383 11.2476C6.18667 11.3523 6.15723 11.4646 6.15723 11.5781C6.15723 11.6916 6.18667 11.804 6.24383 11.9086C6.30099 12.0133 6.38472 12.1081 6.49011 12.1875L19.4503 21.9075C19.6779 22.0782 19.9832 22.1737 20.301 22.1737C20.6188 22.1737 20.9241 22.0782 21.1517 21.9075L34.1119 12.1894C34.218 12.1099 34.3024 12.0149 34.36 11.9099C34.4176 11.8049 34.4472 11.6921 34.4472 11.5781C34.4472 11.4642 34.4176 11.3514 34.36 11.2464C34.3024 11.1414 34.218 11.0464 34.1119 10.9669C33.8942 10.8033 33.602 10.7118 33.2977 10.7118C32.9935 10.7118 32.7013 10.8033 32.4836 10.9669V10.9688Z" fill="black"/></svg></button>',
  });
  $('.product__slider-top').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__slider-bottom',
    dots: false,
    arrows: false,
    centerMode: true,
    fade: true,
    // focusOnSelect: true,
  });



  if ($('.slick-slider').length > 0) {
    $(".slick-slider").slick("refresh");
    $(".slick-slider").slick("setPosition");
  }
});


//header
const navOffset = $(".header").offset().top + 200;
$(window).scroll(function () {

  const scrolled = $(this).scrollTop();

  if (scrolled > navOffset) {
    $('header').addClass("sticky animate__animated animate__fadeInDown");
    $('header').next().addClass("margin-top");
  } else if (scrolled < navOffset) {
    $('header').removeClass("sticky animate__animated animate__fadeInDown");
    $('header').next().removeClass("margin-top");
  }
});


const upOffset = $(".up").offset().top + 450;
$(window).scroll(function () {

  const scroll = $(this).scrollTop();

  if (scroll > upOffset) {
    $('.up').addClass("active");
  } else if (scroll < upOffset) {
    $('.up').removeClass("active");
  }
});