document.querySelector('.nav-mobile-opener').addEventListener('click', () => {
  document.querySelector('nav').classList.add('nav-opened');
});
document.querySelector('.nav-backdrop').addEventListener('click', () => {
  document.querySelector('nav').classList.remove('nav-opened');
});
