var menu = ['2014', 'Sept 2015', '2016', '2017'] //timeline dates

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
    dynamicMainBullets: 1,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span><br>';
    },
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

  // transition effects
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 5,
    depth: 100,
    modifier: 0.5,
    slideShadows: false,
    stretch: 2,
  },

  /*
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  */
  centeredSlides: true,
});