(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  }

  const layouts = {
    cards: { image: 'assets/images/iphone-cards.webp', alt: 'Spoonleaf’s photo cards recipe library layout', caption: 'Let your next good meal catch your eye.' },
    compact: { image: 'assets/images/iphone-compact.webp', alt: 'Spoonleaf’s compact rows recipe library layout', caption: 'A little photo. All the details you need.' },
    list: { image: 'assets/images/iphone-list.webp', alt: 'Spoonleaf’s simple list recipe library layout', caption: 'Keep it beautifully simple, one recipe at a time.' }
  };
  const screen = document.getElementById('layout-screen');
  const description = document.getElementById('layout-description');
  const buttons = [...document.querySelectorAll('[data-layout]')];
  if (screen && description) {
    for (const button of buttons) {
      button.addEventListener('click', () => {
        const layout = layouts[button.dataset.layout];
        if (!layout) return;
        for (const other of buttons) {
          const active = other === button;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', String(active));
        }
        screen.src = layout.image;
        screen.alt = layout.alt;
        description.textContent = layout.caption;
        if (!reduceMotion.matches && screen.animate) {
          screen.animate([{ opacity: 0.35 }, { opacity: 1 }], { duration: 240, easing: 'ease-out' });
        }
      });
    }
  }
})();
