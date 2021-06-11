$(document).ready(function () {
  //==========Validation of the form=================================//

  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      rules: {
        select: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },

        comment: {
          required: true,
          minlength: 100,
        },
      },
      messages: {
        select: {
          required: 'Выберите тему письма',
        },
        email: {
          required: 'Пожалуйста, оставьте Ваш Email для связи',
          email: 'Формат почты должен быть name@domain.com',
        },
        message: {
          required: 'Пожалуйста, напишите сообщение',
        },
        comment: {
          required: 'Напишите Ваш комментарий',
          minlength: 'Количество символов не менее 100',
        },
      },
    });
  });

  $('.phone-mask').each(function () {
    $(this).mask('+7 (999) 999-99-99');
  });

  //===========career-swiper====================//
  const careerSwiper = new Swiper('.career-sliders__container', {
    direction: 'horizontal',
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.career-sliders__pagination',
      type: 'bullets',
      clickable: 'true',
      bulletClass: 'career-sliders__bullet',
      bulletActiveClass: 'career-sliders__bullet--active',
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      },
    },
  });

  //===========article-swiper====================//
  const articleSwiper = new Swiper('.article-sliders__container', {
    loop: true,
    navigation: {
      nextEl: '.article-sliders__button--next',
      prevEl: '.article-sliders__button--prev',
      hideOnClick: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  //==========плавный скролл===========//
  $(document).ready(function () {
    $('a.scrollto').click(function () {
      var elementClick = $(this).attr('href');
      var destination = $(elementClick).offset().top;
      jQuery('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination }, 800);
      return false;
    });
  });

  //====плавный переход на страницы=========//
  $('body').css('opacity', '1');

  //=======кнопка наверх=================//
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 800);
  });
});
