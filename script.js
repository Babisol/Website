// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ========= Cursor Blob (animated + dynamic size) ========= */
const blob = document.querySelector('.cursor-blob');
let targetX = window.innerWidth * 0.3;
let targetY = window.innerHeight * 0.3;
let x = targetX, y = targetY;
let targetScale = 1, scale = 1;
let speed = 0.12;

window.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
  targetScale = 1.3; // بزرگ شدن هنگام حرکت
});

window.addEventListener('mouseleave', () => {
  targetScale = 0; // ناپدید شدن وقتی موس بیرونه
});

window.addEventListener('mouseenter', () => {
  targetScale = 1; // برگشت وقتی موس دوباره وارد شد
});

function animateBlob() {
  x += (targetX - x) * speed;
  y += (targetY - y) * speed;
  scale += (targetScale - scale) * 0.1;

  blob.style.left = x + "px";
  blob.style.top = y + "px";
  blob.style.transform = `translate(-50%, -50%) scale(${scale})`;
  requestAnimationFrame(animateBlob);
}

animateBlob();

function animateBlob() {
  // ease toward mouse
  x += (targetX - x) * 0.12;
  y += (targetY - y) * 0.12;
  blob.style.left = x + "px";
  blob.style.top = y + "px";
  requestAnimationFrame(animateBlob);
}
animateBlob();


window.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateBlob(){
  // ease towards target
  x += (targetX - x) * 0.12;
  y += (targetY - y) * 0.12;
  blob.style.transform = `translate(${x}px, ${y}px)`;
  requestAnimationFrame(animateBlob);
}
animateBlob();

/* ========= Parallax on hero ========= */
const parallaxSection = document.querySelector('[data-parallax]');
window.addEventListener('mousemove', (e)=>{
  if(!parallaxSection) return;
  const rect = parallaxSection.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  const dx = (e.clientX - cx) / rect.width;  // -0.5..0.5
  const dy = (e.clientY - cy) / rect.height;
  parallaxSection.style.transform = `perspective(1200px) rotateX(${dy * -3}deg) rotateY(${dx * 3}deg)`;
});
window.addEventListener('mouseleave', ()=>{
  if(!parallaxSection) return;
  parallaxSection.style.transform = 'none';
});

/* ========= Magnetic buttons/links ========= */
const magnets = document.querySelectorAll('.magnet');
magnets.forEach(el=>{
  const strength = 18;
  el.style.transition = 'transform .12s ease';
  el.addEventListener('mousemove', (e)=>{
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width/2);
    const my = e.clientY - (r.top + r.height/2);
    el.style.transform = `translate(${mx/strength}px, ${my/strength}px)`;
  });
  el.addEventListener('mouseleave', ()=> el.style.transform = 'translate(0,0)');
});

/* ========= Tilt cards ========= */
const tilts = document.querySelectorAll('.tilt');
tilts.forEach(card=>{
  card.addEventListener('mousemove', (e)=>{
    const r = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -10;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 10;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  });
  card.addEventListener('mouseleave', ()=> card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)');
});

/* ========= Smooth anchor scroll (native-like) ========= */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
