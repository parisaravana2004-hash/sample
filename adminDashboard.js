// Redirect if not admin
if (localStorage.getItem("role") !== "admin") {
  alert("Unauthorized Access!");
  window.location.href = "login.html";
}

// Logout
document.getElementById("logoutBtn").onclick = () => {
  localStorage.clear();
  window.location.href = "login.html";
};

// Load admin stats
async function loadStats() {
  const res = await fetch("http://localhost:5000/api/admin/stats");
  const data = await res.json();

  document.getElementById("donationsCount").innerText = data.totalDonations;
  document.getElementById("issuedCount").innerText = data.totalIssued;
  document.getElementById("usersCount").innerText = data.usersCount;
}

loadStats();
