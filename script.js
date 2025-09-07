// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("applyForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      let apps = JSON.parse(localStorage.getItem("applications") || "[]");
      apps.push(data);
      localStorage.setItem("applications", JSON.stringify(apps));
      window.location.href = "apply-success.html";
    });
  }
});

// Admin login
function adminLogin() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;
  if (user === "JasmineFuqua73" && pass === "Delivery123$") {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    loadApplications();
  } else {
    document.getElementById("loginMessage").innerText = "Invalid login";
  }
}

function adminLogout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

function loadApplications() {
  let apps = JSON.parse(localStorage.getItem("applications") || "[]");
  const tbody = document.querySelector("#appsTable tbody");
  tbody.innerHTML = "";
  apps.forEach(app => {
    const row = `<tr><td>${app.name}</td><td>${app.email}</td><td>${app.phone}</td><td>${app.license}</td><td>${app.vehicle}</td><td>${app.emergency}</td></tr>`;
    tbody.innerHTML += row;
  });
}