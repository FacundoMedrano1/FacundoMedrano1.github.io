function toggleMenu(element) {
  document.querySelectorAll('.equipo.active').forEach(el => {
    if (el !== element) el.classList.remove('active');
  });
  element.classList.toggle('active');
}
