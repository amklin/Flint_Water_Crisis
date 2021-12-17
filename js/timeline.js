var timelineSwiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: false,
  speed: 1200,

  //pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
  },

  //scrollbar
  mousewheel: {
    sensitivity: 10,
  },

  // keyboard controls
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  effect: 'coverflow',
  coverflowEffect: {
    rotate: 5,
    depth: 100,
    modifier: 0.5,
    slideShadows: false,
  },

  /*
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  */
  centeredSlides: true,
});