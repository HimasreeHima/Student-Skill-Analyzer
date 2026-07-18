// ==========================================
// Student Skill Analyzer
// form.js
// ==========================================

// Select the form
const form = document.getElementById("studentForm");

// Listen for form submission
form.addEventListener("submit", async function (event) {

    // Prevent page refresh
    event.preventDefault();

    // ==========================================
    // Collect Basic Information
    // ==========================================

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const branch = document.getElementById("branch").value;

    const year = parseInt(document.getElementById("year").value);

    const cgpa = parseFloat(document.getElementById("cgpa").value);

    // ==========================================
    // Collect Technical Skills
    // ==========================================

    const technicalSkills = [];

    document
        .querySelectorAll('input[name="technical"]:checked')
        .forEach(skill => {

            technicalSkills.push(skill.value);

        });

    // ==========================================
    // Collect Soft Skills
    // ==========================================

    const softSkills = [];

    document
        .querySelectorAll('input[name="soft"]:checked')
        .forEach(skill => {

            softSkills.push(skill.value);

        });

    // ==========================================
    // Collect Career Interests
    // ==========================================

    const interests = [];

    document
        .querySelectorAll('input[name="interest"]:checked')
        .forEach(item => {

            interests.push(item.value);

        });

    // ==========================================
    // Create Student Object
    // ==========================================

    const studentData = {

        name: name,

        email: email,

        phone: phone,

        branch: branch,

        year: year,

        cgpa: cgpa,

        technical_skills: technicalSkills,

        soft_skills: softSkills,

        interests: interests

    };

    console.log(studentData);

    // ==========================================
    // Send Data to FastAPI
    // ==========================================

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/student",
            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(studentData)

            }
        );

        // Convert response to JSON
        const result = await response.json();

        console.log(result);

        // Save response for result page
        localStorage.setItem(
            "studentResult",
            JSON.stringify(result)
        );

        // Redirect
        window.location.href = "result.html";

    }

    catch (error) {

        console.error(error);

        alert("Unable to connect to the server.");

    }

});