// Initialize EmailJS
(function() {
  emailjs.init("vhgTnq8riUK29JBK6"); // Your Public Key
})();

// Handle application form submission
document.addEventListener("DOMContentLoaded", function () {
  const applyForm = document.querySelector(".apply-form");

  if (applyForm) {
    applyForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_2bhwn1u", "template_jqo8csc", this)
        .then(function () {
          alert("✅ Application sent successfully!");
          window.location.href = "apply-success.html";
        }, function (error) {
          console.error("❌ Failed to send application:", error);
          alert("Something went wrong. Please try again.");
        });
    });
  }

  // Handle contact form submission
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_2bhwn1u", "template_3ffr751", this)
        .then(function () {
          alert("✅ Your message has been sent!");
          contactForm.reset();
        }, function (error) {
          console.error("❌ Failed to send message:", error);
          alert("Something went wrong. Please try again.");
        });
    });
  }
});
