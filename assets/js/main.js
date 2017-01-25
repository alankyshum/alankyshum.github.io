// --- debug, repalce with vue later
function toggleSection(targetSelector) {
  const activeSection = document.querySelector('main .section.active');
  activeSection && activeSection.classList.remove('active');
  document.querySelector(targetSelector).classList.add('active');
}

function navigationControl() {
  const navigationItems = document.getElementsByClassName('navigation-item');
  for (let item of navigationItems) {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const activeItem = document.querySelector('.navigation-item.active');
      activeItem && activeItem.classList.remove('active');
      const isActiveItem = e.target.classList.contains('active');
      e.target.classList[isActiveItem ? 'remove' : 'add']('active');
      toggleSection(e.target.getAttribute('href'));
    });
  }
}
navigationControl();