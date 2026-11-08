(function () {
  'use strict';

  const carousel = document.getElementById('carouselCloset');
  const button = document.getElementById('closet-autoplay');
  if (!carousel || !button) return;

  const motion = globalThis.matchMedia('(prefers-reduced-motion: reduce)');
  const slideshow = jQuery(carousel);
  let pausedByUser = false;
  let hovered = false;
  let focused = false;
  let lightboxOpen = false;

  slideshow.carousel({ interval: 7000, pause: false });

  function updatePlayback() {
    const paused = motion.matches || pausedByUser || hovered || focused || lightboxOpen || document.hidden;
    slideshow.carousel(paused ? 'pause' : 'cycle');
    button.disabled = motion.matches;
    const playbackLabel = pausedByUser ? 'Resume slideshow' : 'Pause slideshow';
    button.textContent = motion.matches ? 'Auto-play off (reduced motion)' : playbackLabel;
    button.setAttribute('aria-pressed', String(pausedByUser));
  }

  button.addEventListener('click', () => {
    pausedByUser = !pausedByUser;
    updatePlayback();
  });
  carousel.addEventListener('mouseenter', () => {
    hovered = true;
    updatePlayback();
  });
  carousel.addEventListener('mouseleave', () => {
    hovered = false;
    updatePlayback();
  });
  carousel.addEventListener('focusin', () => {
    focused = true;
    updatePlayback();
  });
  carousel.addEventListener('focusout', event => {
    focused = carousel.contains(event.relatedTarget);
    updatePlayback();
  });
  document.addEventListener('gallery-lightbox', event => {
    lightboxOpen = event.detail === true;
    updatePlayback();
  });
  document.addEventListener('visibilitychange', updatePlayback);
  motion.addEventListener('change', updatePlayback);
  updatePlayback();
})();
