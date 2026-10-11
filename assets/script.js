/* Light and dark theme toggle. The choice is remembered in this browser only. */
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');
  if (!button) return;

  function current() {
    var chosen = root.getAttribute('data-theme');
    if (chosen) return chosen;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  button.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
