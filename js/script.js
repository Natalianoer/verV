window.addEventListener('scroll', function() {
  if (window.pageYOffset > 10) {
    document.querySelector('p.privice_text').classList.add('scrollPrivate');
  }
  else {
    document.querySelector('p.privice_text').classList.remove('scrollPrivate');
  }
});
