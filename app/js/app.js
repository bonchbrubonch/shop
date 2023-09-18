$(function () {

  $(".navigation__item-child").on("click", function () {
    $(this).toggleClass("active");
    $(".category-menu").toggleClass("open");
  });

  $(".category-list__child-item").on("click", function () {
    $(this).toggleClass("open");
  });
  $(".category-list__subchild-item").on("click", function () {
    $(this).toggleClass("open");
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
    readOnly: true
  });

  $(".rateYo-review").rateYo({
    starWidth: "12px",
    ratedFill: "#FFA800",
    spacing: "3px",
    rating: 4,
    readOnly: true
  });

  $(".card__like").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".card__backet").on("click", function () {
    $(this).toggleClass("active");
  });

  $('.review__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button class="left"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8089 4.27809L8.8089 7.27809C8.6569 7.43009 8.4789 7.50409 8.2749 7.50009C8.0709 7.49609 7.8949 7.42209 7.7469 7.27809C7.5989 7.13409 7.5249 6.95809 7.5249 6.75009C7.5249 6.54209 7.5969 6.36609 7.7409 6.22209L9.4689 4.49409H0.780902C0.572902 4.49409 0.394902 4.42009 0.246902 4.27209C0.0989023 4.12409 0.0249023 3.94209 0.0249023 3.72609C0.0249023 3.51009 0.0969023 3.33409 0.240902 3.19809C0.384902 3.06209 0.564902 2.99409 0.780902 2.99409H9.4689L7.7409 1.27809C7.5969 1.13409 7.5249 0.95809 7.5249 0.75009C7.5249 0.54209 7.5969 0.36609 7.7409 0.22209C7.8849 0.0780902 8.0609 0.00409031 8.2689 9.01222e-05C8.4769 -0.00390959 8.6569 0.0700903 8.8089 0.22209L11.8089 3.22209C11.9529 3.36609 12.0249 3.54209 12.0249 3.75009C12.0249 3.95809 11.9529 4.13409 11.8089 4.27809Z" fill="#16110C"/></svg></button>',
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













  
  if ($('.slick-slider').length > 0) {
    $(".slick-slider").slick("refresh");
    $(".slick-slider").slick("setPosition");
  }
});