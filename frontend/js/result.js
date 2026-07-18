// ==========================================
// Student Skill Analyzer
// result.js
// ==========================================

// Get data from localStorage
const result = JSON.parse(localStorage.getItem("studentResult"));

// If no data exists, go back to form page
if (!result) {

    alert("No student data found.");

    window.location.href = "form.html";

}

// ==========================================
// Display Student Information
// ==========================================

document.getElementById("studentName").textContent =
    result.student.name;

document.getElementById("studentEmail").textContent =
    result.student.email;

document.getElementById("studentPhone").textContent =
    result.student.phone;

document.getElementById("studentBranch").textContent =
    result.student.branch;

document.getElementById("studentYear").textContent =
    result.student.year;

document.getElementById("studentCGPA").textContent =
    result.student.cgpa;


// ==========================================
// Display Career Recommendation
// ==========================================

document.getElementById("careerRecommendation").textContent =
    result.career_recommendation;


// ==========================================
// Display Technical Skills
// ==========================================

const technicalContainer =
document.getElementById("technicalSkills");

result.student.technical_skills.forEach(skill => {

    const badge = document.createElement("span");

    badge.classList.add("badge");

    badge.textContent = skill;

    technicalContainer.appendChild(badge);

});


// ==========================================
// Display Soft Skills
// ==========================================

const softContainer =
document.getElementById("softSkills");

result.student.soft_skills.forEach(skill => {

    const badge = document.createElement("span");

    badge.classList.add("badge");

    badge.textContent = skill;

    softContainer.appendChild(badge);

});


// ==========================================
// Display Improvement Areas
// ==========================================

const improvementList =
document.getElementById("improvementList");

result.improvement_areas.forEach(item => {

    const li = document.createElement("li");

    li.textContent = item;

    improvementList.appendChild(li);

});


// ==========================================
// Display Recommended Courses
// ==========================================

const courseList =
document.getElementById("courseList");

result.recommended_courses.forEach(course => {

    const li = document.createElement("li");

    li.textContent = course;

    courseList.appendChild(li);

});


// ==========================================
// Analyze Another Student
// ==========================================

function goBack(){

    localStorage.removeItem("studentResult");

    window.location.href = "form.html";

}