function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === "admin" && password === "12345") {
      window.location.href = "dashboard.html";
    } else {
      alert("❌ ভুল ইউজারনেম অথবা পাসওয়ার্ড!");
    }
  }
  