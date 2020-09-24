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
    $(this).css({ transform: "scale(1.05)", "box-shadow": "0 0 10px #e94560" });

  });

  let positionTop;
  let wrapper = $('.nav-1 .outer-wrapper .wrapper-1')[0].getBoundingClientRect();
  $(window).on("resize", () => {
    wrapper = $('.nav-1 .outer-wrapper .wrapper-1')[0].getBoundingClientRect();
  })

  $(window).on("scroll", function () {
    
    let position = $('.nav-1')[0].getBoundingClientRect();
     positionTop = position.top;
    if (positionTop === 0) {
     $(".nav-1 .outer-wrapper .wrapper-1").css({ "width": `${Math.floor(wrapper.width)}px` });
     $('.nav-1 .outer-wrapper').css({ "width": "100%", "max-width": "100%"});
      $(".nav-1 .outer-wrapper").css({"border-radius" : "0"});
   } else {
      
     $("nav-1 .outer-wrapper .wrapper-1").css({ "width": `100%` });
      $(".nav-1 .outer-wrapper").css({ "width": "80%", "max-width": "1500px" });
       $(".nav-1 .outer-wrapper").css({ "border-radius": "10px" });
   }
  })
   
    
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
  


