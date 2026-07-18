// =======================================
// Student Skill Analyzer
// Form Validation
// =======================================

const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get Values

    const studentData = {

        name: document.getElementById("name").value.trim(),

        email: document.getElementById("email").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        college: document.getElementById("college").value.trim(),

        branch: document.getElementById("branch").value,

        year: document.getElementById("year").value,

        cgpa: document.getElementById("cgpa").value,

        skills: document.getElementById("skills").value.trim(),

        projects: document.getElementById("projects").value.trim(),

        softskills: document.getElementById("softskills").value.trim(),

        career: document.getElementById("career").value

    };

    // Required Fields

    if (
        studentData.name === "" ||
        studentData.email === "" ||
        studentData.cgpa === "" ||
        studentData.skills === ""
    ) {

        alert("Please fill all the required fields.");

        return;

    }

    // Email Validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(studentData.email)) {

        alert("Please enter a valid email address.");

        return;

    }

    // CGPA Validation

    const cgpa = parseFloat(studentData.cgpa);

    if (cgpa < 0 || cgpa > 10) {

        alert("CGPA should be between 0 and 10.");

        return;

    }

    // Save Data

    localStorage.setItem(
        "studentData",
        JSON.stringify(studentData)
    );

    alert("Details submitted successfully!");

    // Next Page

    window.location.href = "result.html";

});