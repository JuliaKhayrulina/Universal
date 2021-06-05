document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  //==============tabs===============//
  const tabs = document.querySelectorAll('.recommend-tabs__item');
  const contents = document.querySelectorAll('.recommend-content');
  for (let tab of tabs) {
    tab.addEventListener('click', showContent);
  }

  function showContent() {
    for (let content of contents) {
      content.classList.remove('recommend-content--show');
    }
    for (let tab of tabs) {
      tab.classList.remove('recommend-tabs__item--active');
    }
    if (window.screen.width > 576) {
      const tab = this;
      tab.classList.add('recommend-tabs__item--active');
      const tabAttr = tab.getAttribute('data-tab');
      const content = document.getElementById(`${tabAttr}`);
      content.classList.add('recommend-content--show');
    } else {
      window.location.href = 'https://mywebdiving.ru/tour-plan/';
    }
  }
  //==========mobile menu================//
  let menuBtn = document.querySelector('.menu-button');
  let menu = document.querySelector('.menu');
  let menuLines = document.querySelectorAll('.menu-button__line');

  menuBtn.addEventListener('click', function () {
    menuLines.forEach((item) => {
      item.classList.toggle('menu-button__line--active');
    });

    menu.classList.toggle('menu--visible');
  });

  //===================modal windows===========================//
  const openModalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeModalBtn = document.querySelector('.modal__close');
  const modalOverlay = document.querySelectorAll('.modal__overlay');

  //открытие по кнопкам
  for (let button of openModalBtn) {
    button.addEventListener('click', openModal);
  }

  function openModal() {
    const btn = this;
    const targetModal = btn.getAttribute('data-href');
    const childs = document.querySelector(`${targetModal}`).children;
    document.body.classList.add('no-scroll');

    for (let child of childs) {
      if (child.classList.contains('modal__overlay')) {
        child.classList.add('modal__overlay--visible');
      } else if (child.classList.contains('modal__dialog')) {
        child.classList.add('modal__dialog--visible');
      }
    }
  }
  //закрытие по кнопкам
  closeModalBtn.addEventListener('click', closeModal);

  //закрытие вне модального окна
  for (let overlay of modalOverlay) {
    overlay.addEventListener('click', closeModal);
  }
  //закрытие по клавише Esc
  document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape') {
      closeModal(event);
    }
  });

  function closeModal(event) {
    event.preventDefault();
    const modalOverlay = document.querySelector('.modal__overlay--visible');
    const modalDialog = document.querySelector('.modal__dialog--visible');

    modalOverlay.classList.remove('modal__overlay--visible');
    modalDialog.classList.remove('modal__dialog--visible');
    document.body.classList.remove('no-scroll');
  }

  //=================News-slider=============================//

  const images = document.querySelectorAll('.news-side__post');
  let count = 0;
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  function nextFunction(event) {
    if (window.screen.width < 992) {
      if (count == images.length - 1) {
        count = -1;
      }
      count++;
      for (let image of images) {
        image.classList.remove('news-side__post--active');
      }
      images[count].classList.add('news-side__post--active');
      document.querySelector('.news-side').src = images[count].src;

      event.preventDefault();
      return false;
    }
  }

  function prevFunction(event) {
    if (window.screen.width < 992) {
      if (count == 0) {
        count = images.length;
      }
      count--;
      for (let image of images) {
        image.classList.remove('news-side__post--active');
      }
      images[count].classList.add('news-side__post--active');
      document.querySelector('.news-side').src = images[count].src;

      event.preventDefault();
      return false;
    }
  }

  next.addEventListener('click', nextFunction);
  next.addEventListener('touchmove', nextFunction);

  prev.addEventListener('click', prevFunction);
  prev.addEventListener('touchmove', prevFunction);
});

//==========News-bookmark======================//
const bookmarks = document.querySelectorAll('.news-card__bookmark');

bookmarks.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('news-card__bookmark--active');
  });
});

menu.classList.toggle('menu--visible');
