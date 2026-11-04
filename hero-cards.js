(() => {
  const stack = document.querySelector('.product-stack');
  if (!stack) return;

  const cards = [...stack.querySelectorAll('.product-card')];

  const bringToFront = (activeCard) => {
    cards.forEach((card) => {
      const isActive = card === activeCard;
      card.classList.toggle('is-active', isActive);
      card.setAttribute('aria-pressed', String(isActive));
    });
  };

  cards.forEach((card) => {
    card.addEventListener('pointerdown', () => bringToFront(card));
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      bringToFront(card);
    });
  });
})();
