// Footer year
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));

// Earnings estimator on home
document.getElementById('calcForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const pkg = Number(document.getElementById('pkgInput').value || 0);
  const rate = 1.80; // baseline
  const estimate = pkg * rate;
  const out = document.getElementById('calcOut');
  out.textContent = isFinite(estimate) ? `≈ $${estimate.toFixed(2)} for ${pkg} packages` : '';
});
