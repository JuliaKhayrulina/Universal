document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const btnMore = document.querySelector('.article-comments__more');
  btnMore.addEventListener('click', () => {
    let blocksHidden = document.querySelectorAll('.article-comments__block--hidden');
    for (let block of blocksHidden) {
      block.classList.remove('article-comments__block--hidden');
    }
    btnMore.style.display = 'none';
  });
});
