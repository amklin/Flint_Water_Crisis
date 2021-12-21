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
      var date = document.getElementsByClassName('timeline-year')[index].textContent; //retrieves dates based on html content
      return '<span class="' + className + '">' + date + '</span><br>';
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

  centeredSlides: true,
});