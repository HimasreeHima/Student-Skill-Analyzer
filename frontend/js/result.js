// =======================================
// Student Skill Analyzer
// Result Page
// =======================================

// Read data from Local Storage

const studentData = JSON.parse(localStorage.getItem("studentData"));

// If no data exists

if (!studentData) {

    alert("No student data found.");

    window.location.href = "form.html";

}

// Display Student Information

document.getElementById("name").textContent = studentData.name;

document.getElementById("email").textContent = studentData.email;

document.getElementById("phone").textContent = studentData.phone;

document.getElementById("college").textContent = studentData.college;

document.getElementById("branch").textContent = studentData.branch;

document.getElementById("year").textContent = studentData.year;

document.getElementById("cgpa").textContent = studentData.cgpa;

document.getElementById("skills").textContent = studentData.skills;

document.getElementById("projects").textContent = studentData.projects;

document.getElementById("softskills").textContent = studentData.softskills;

document.getElementById("career").textContent = studentData.career;