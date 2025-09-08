// Initialize EmailJS
(function() {
  emailjs.init("vhgTnq8riUK29JBK6"); // Replace with your actual EmailJS user ID
})();

// Application Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const applyForm = document.getElementById("applyForm");
  const contactForm = document.getElementById("contactForm");

  if (applyForm) {
    applyForm.addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_2bhwn1u", "template_jqo8csc", this)
        .then(() => {
          alert("✅ Application submitted successfully!");
          applyForm.reset();
        }, (err) => {
          alert("❌ Error: " + JSON.stringify(err));
        });
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_2bhwn1u", "template_3ffr751", this)
        .then(() => {
          alert("✅ Message sent successfully!");
          contactForm.reset();
        }, (err) => {
          alert("❌ Error: " + JSON.stringify(err));
        });
    });
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;

      // Close others
      document.querySelectorAll(".faq-answer").forEach(a => {
        if (a !== answer) {
          a.style.maxHeight = null;
          a.style.padding = "0 15px";
        }
      });

      // Toggle current
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = "0 15px";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "15px";
      }
    });
  });
});
