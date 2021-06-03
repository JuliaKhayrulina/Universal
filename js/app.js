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
    if (window.screen.width > 576) {
      const tab = this;
      const tabAttr = tab.getAttribute('data-tab');
      const content = document.getElementById(`${tabAttr}`);
      content.classList.add('recommend-content--show');
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
});
