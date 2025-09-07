// ✅ Initialize EmailJS
(function() {
    emailjs.init("vhgTnq8riUK29JBK6"); // Your Public Key
})();

// ✅ Handle Application Form
document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_2bhwn1u", "template_jqo8csc", this)
        .then(function() {
            alert("✅ Application submitted successfully!");
            document.getElementById("applyForm").reset();
        }, function(error) {
            alert("❌ Error: " + JSON.stringify(error));
        });
});

// ✅ Handle Onboarding Approval Button
function sendOnboardingEmail(applicantEmail) {
    emailjs.send("service_2bhwn1u", "template_3ffr751", {
        email: applicantEmail
    }).then(function() {
        alert("✅ Onboarding packet sent to " + applicantEmail);
    }, function(error) {
        alert("❌ Error: " + JSON.stringify(error));
    });
} document.getElementById("applyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("applicantEmail").value;
    localStorage.setItem("latestApplicantEmail", email);

    alert("✅ Application submitted! Email saved for approval.");
});

