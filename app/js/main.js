$(function(){

  initSliders();
  initTabs();
  toggleFavorite('products-item__favorite');

});

function toggleFavorite(selector) {
  const $favorites = document.querySelectorAll(`.${selector}`);
  $favorites.forEach($favorite => $favorite.addEventListener('click', function(e) {
    this.classList.toggle(`${selector}--active`);
  }));
}

function initSliders() {
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

  $('.popular-products .products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: `
    <button class="products-slider__arrow products-slider__arrow--left">
      <img src="images/products-slider-arrow-left.svg" alt="">
    </button>
  `,
  nextArrow: `
    <button class="products-slider__arrow products-slider__arrow--right">
      <img src="images/products-slider-arrow-right.svg" alt="">
    </button>
  `
  });
}

function initTabs() {
  new Tabs('.search-products').init();
  new Tabs('.popular-products', {}, function() {
    $('.products-slider').slick('setPosition');
  }).init();
}