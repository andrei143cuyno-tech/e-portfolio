(function () {
  'use strict';

  const menuToggle = document.getElementById('menu-toggle');
  const navigation = document.getElementById('primary-nav');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', function () {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      menuToggle.setAttribute('aria-label', expanded ? 'Open navigation menu' : 'Close navigation menu');
      navigation.classList.toggle('is-open', !expanded);
    });

    navigation.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navigation.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
      });
    });
  }

  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = button.dataset.filter || 'all';

      filterButtons.forEach(function (item) {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      projectCards.forEach(function (card) {
        const categories = (card.dataset.category || '').split(/\s+/);
        card.hidden = filter !== 'all' && !categories.includes(filter);
      });
    });
  });

  const printButton = document.getElementById('print-resume');
  if (printButton) {
    printButton.addEventListener('click', function () {
      document.body.classList.add('print-resume');
      window.print();
    });
    window.addEventListener('afterprint', function () {
      document.body.classList.remove('print-resume');
    });
  }

  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());

  const emailLink = document.getElementById('email-link');
  const emailLabel = document.querySelector('.replace-email');
  // Replace the sample email in index.html before sharing this website publicly.
  if (emailLink && emailLabel && emailLabel.textContent.trim() !== 'your.professional.email@example.com') {
    emailLink.href = 'mailto:' + emailLabel.textContent.trim();
  }
})();
