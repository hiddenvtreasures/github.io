// Videos: show only a picture until someone presses play; then load the YouTube player (privacy-enhanced mode).
document.querySelectorAll('.video button[data-id]').forEach(function (b) {
  b.addEventListener('click', function () {
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.id + '?autoplay=1&rel=0';
    f.title = b.getAttribute('aria-label') || 'Video';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    b.replaceWith(f);
  });
});

// Tabs: one group of videos at a time, so the page fits on one screen.
document.querySelectorAll('[role="tablist"]').forEach(function (list) {
  var tabs = list.querySelectorAll('[role="tab"]');
  function show(t) {
    tabs.forEach(function (x) {
      var on = x === t; x.setAttribute('aria-selected', on);
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t) { t.addEventListener('click', function () { show(t); }); });
  show(list.querySelector('[aria-selected="true"]') || tabs[0]);
});
