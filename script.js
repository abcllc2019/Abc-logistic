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

function sendOnboardingEmail() {
    const email = localStorage.getItem("latestApplicantEmail");

    if (!email) {
        alert("⚠️ No applicant email found. Please make sure someone applied first.");
        return;
    }

    emailjs.send("service_2bhwn1u", "template_jqo8csc", {
        to_email: email,
        from_name: "ABC Logistic LLC",
    }, "vhgTnq8riUK29JBK6")
    .then(function(response) {
        alert("✅ Onboarding email sent to " + email);
        console.log("SUCCESS", response);
    }, function(error) {
        alert("❌ Failed to send email. Check console for details.");
        console.log("FAILED", error);
    });
}
