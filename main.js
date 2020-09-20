$(document).ready(() => {
  $("nav .menu").css({ transition: "transform 300ms linear" });

  $("nav .menu-btn").click(() => {
    $("nav .menu-btn span:nth-child(1)").toggleClass("menu-btn-animation-1");
    $("nav .menu-btn span:nth-child(2)").toggleClass("menu-btn-animation-2");
    $("nav .menu-btn span:nth-child(3)").toggleClass("menu-btn-animation-3");
    $("nav .menu").toggleClass("menu-animation");
    $("nav .menu-btn span").toggleClass("menu-btn-color-change");
  });

  $(".input-area").click(function () {
    $(this).css({ transform: "scale(1.05)" });
  });
});

//carousal
$(".slick-init").slick({
  arrows: true,
  infinte: true,
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "70px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 426,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 376,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 321,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
      },
    },
  ],
});
  


