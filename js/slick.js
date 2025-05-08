$(function () {
  $(".w-c-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-c-gallery-list-left",
    nextArrow: ".w-c-gallery-list-right",
  });
});

$(function () {
  $(".w-c-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".w-c-reviews-list-left",
    nextArrow: ".w-c-reviews-list-right",
  });
});
