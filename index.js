const multipleItemCarousel = document.querySelector("#carouselFavorites");

if (window.matchMedia("(min-width: 576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
  });

  var carouselWidth = $("#carouselFavorites .carousel-inner")[0].scrollWidth();
  var cardWidth = $("#carouselFavorites .card").width();

  var scrollPosition = 0;

  $("#carouselFavorites .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $("#carouselFavorites .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

  $("#carouselFavorites .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      console.log("next");
      scrollPosition = scrollPosition - cardWidth;
      $("#carouselFavorites .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}

// var multipleCardCarousel = document.querySelector("#carouselFavorites");
// if (window.matchMedia("(min-width: 768px)").matches) {
//   var carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false,
//   });
//   var carouselWidth = $("#carouselFavorites .carousel-inner")[0].scrollWidth;
//   var cardWidth = $("#carouselFavorites .carousel-item").width();
//   var scrollPosition = 0;
//   $("#carouselFavorites .carousel-control-next").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 3) {
//       console.log(cardWidth * 3);
//       scrollPosition += cardWidth * 3;
//       $("#carouselFavorites .carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );
//     }
//   });
//   $("#carouselFavorites .carousel-control-prev").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition -= cardWidth * 3;
//       $("#carouselFavorites .carousel-inner").animate(
//         { scrollLeft: scrollPosition },
//         600
//       );
//     }
//   });
// } else {
//   $(multipleCardCarousel).addClass("slide");
// }


