/* components/infrastructure/infrastructure.js */

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.infrastructure__card[data-modal]');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal__close');
  const overlays = document.querySelectorAll('.modal__overlay');

  cards.forEach(card => {
    card.addEventListener('click', function() {
      const modalId = 'modal-' + this.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains('active')) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  });
});