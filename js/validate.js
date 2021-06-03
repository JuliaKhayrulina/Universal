$(document).ready(function () {
  //==========Validation of the form=================================//

  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          minlength: 18,
        },
      },
      messages: {
        name: {
          required: 'Пожалуйста, укажите свое имя',
          minlength: 'Имя должно быть не менее 2 символов',
        },
        email: {
          required: 'Нам нужен ваш адрес электронной почты, чтобы связаться с вами',
          email: 'Ваш адрес электронной почты должен быть в формате name@domain.com',
        },
        phone: {
          required: 'Пожалуйста, укажите свой номер телефона',
          minlength: 'Номер телефона должен быть 11 цифр',
        },
        message: {
          required: 'Пожалуйста, не отправляйте пустое сообщение',
        },
      },
    });
  });

  $('.phone-mask').each(function () {
    $(this).mask('+7 (999) 999-99-99');
  });
});
