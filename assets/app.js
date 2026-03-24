document.querySelectorAll('[data-count]').forEach(el => {
  const end = Number(el.dataset.count || 0);
  let current = 0;
  const step = Math.max(1, Math.ceil(end / 40));
  const timer = setInterval(() => {
    current += step;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    el.textContent = end >= 1000 ? current.toLocaleString('en-GB') : current;
  }, 35);
});
