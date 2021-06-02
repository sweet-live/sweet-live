$(document).ready(function () {
  $(".careers-carousel").slick({
    arrows: true,
    slide: ".careers-carousel-slide",
    prevArrow: `<img
        type="image/svg+xml"
        src="./assets//svg//arrow.svg"
        class="blog-item-full-icon slick-prev"
      ></img>`,
    nextArrow: `<img
    type="image/svg+xml"
    src="./assets//svg//arrow.svg"
    class="blog-item-full-icon slick-next"
  ></img>`,
  });
  $(".prices-list").slick({
    arrows: false,
    slide: ".careers-carousel-slide",
    slidesToShow: 3,
    slide: ".prices-item",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
        },
      },
    ],
  });
  $(".main-down").click((e) => {
    const secondSection = document.querySelectorAll("section")[1];
    secondSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  $(".menu-burger").click((e) => {
    console.log("menu active");
    const list = document.querySelector(".menu");
    list.classList.toggle("active");
  });
});

const next = () => {
  console.log("cc");
  $(".careers-carousel").slick("slickNext");
};
const toFooter = () => {
  const footer = document.querySelector("footer");
  footer.scrollIntoView({ behavior: "smooth", block: "start" });
};

window.onscroll = () => {
  const list = document.querySelector(".menu");
  if (window.scrollY) {
    list.classList.add("withBackground");
  } else {
    list.classList.remove("withBackground");
  }
};
