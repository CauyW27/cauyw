// Small interaction + dynamic year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const btn = document.getElementById("helloBtn");
const status = document.getElementById("status");

if (btn && status) {
  btn.addEventListener("click", () => {
    formMessage.textContent = `Well met, ${name}. Your message has been received by the Sovereign Order.`;
  });
}
