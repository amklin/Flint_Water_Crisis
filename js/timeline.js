var timelineSwiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: false,
  speed: 1600,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  
  paginationClickable: true,
  breakpoints: {
    768: {
      direction: 'horizontal',
    }
  }
});