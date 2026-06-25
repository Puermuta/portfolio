// ─── Name animation ──────────────────────────────────
const name = "Daniel Aasland";
const el = document.getElementById("hero-name");

// Animate each character, treating the space naturally
name.split("").forEach((ch, i) => {
  if (ch === " ") {
    const space = document.createElement("span");
    space.innerHTML = "&nbsp;";
    space.style.opacity = "1";
    el.appendChild(space);
    return;
  }
  const span = document.createElement("span");
  span.textContent = ch;
  span.style.transition = `opacity 0.55s ease ${0.02 + i * 0.06}s`;
  el.appendChild(span);
});

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    el.querySelectorAll("span").forEach((s) => (s.style.opacity = "1"));
  });
});

// ─── Timeline reveal ─────────────────────────────────
const entries = document.querySelectorAll(".entry");

const observer = new IntersectionObserver(
  (records) => {
    records.forEach((r) => {
      if (r.isIntersecting) {
        const idx = [...entries].indexOf(r.target);
        setTimeout(() => r.target.classList.add("visible"), idx * 120);
        observer.unobserve(r.target);
      }
    });
  },
  { threshold: 0.15 }
);

entries.forEach((e) => observer.observe(e));
