// Update footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Contact form processing
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const topic = document.getElementById("topic").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!topic || !name || !email || !message) {
      formMessage.textContent = "Please complete all fields before sending your message.";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    formMessage.textContent = `Well met, ${name}. Your message has been received.`;
    contactForm.reset();
  });
}
