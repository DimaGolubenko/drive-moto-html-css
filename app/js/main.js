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


  $('.search-products__tabs-item').on('click', function(e) {
    e.preventDefault();

    $('.search-products__tabs-item').removeClass('search-products__tabs-item--active');
    $('.search-products__content-item').removeClass('search-products__content-item--active');

    $(this).addClass('search-products__tabs-item--active');
    $($(this).attr('href')).addClass('search-products__content-item--active');
  });
  
});