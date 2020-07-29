$(function(){

  $('.sales-banners__slider').slick({
    dots: true,
    prevArrow: `
      <button class="sales-banners__slider-arrow sales-banners__slider-arrow--left">
        <img src="images/sales-slider-arrow-left.svg" alt="">
      </button>
    `,
    nextArrow: `
      <button class="sales-banners__slider-arrow sales-banners__slider-arrow--right">
        <img src="images/sales-slider-arrow-right.svg" alt="">
      </button>
    `
  });

  
});