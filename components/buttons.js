const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  // Get only buttons that has a data attribute
  if (Object.entries(btn.dataset).length > 0) {
    btn.style.width = btn.dataset.width;
    btn.style.height = btn.dataset.height;
  }
});