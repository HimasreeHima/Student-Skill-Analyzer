from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI(
    title="Student Skill Analyzer API",
    description="Backend API for Student Skill Analyzer",
    version="2.0.0"
)

# ==========================================
# Student Model
# ==========================================

class Student(BaseModel):
    name: str
    email: str
    phone: str
    branch: str
    year: int
    cgpa: float
    technical_skills: List[str]
    soft_skills: List[str]
    interests: List[str]


# ==========================================
# Home API
# ==========================================

@app.get("/", tags=["Home"])
def home():
    return {
        "message": "Welcome to Student Skill Analyzer API"
    }


# ==========================================
# Student Analysis API
# ==========================================

@app.post("/student", tags=["Student"])
def analyze_student(student: Student):

    career = "Software Engineer"

    recommended_courses = []

    improvement_areas = []

    # ==========================================
    # Career Recommendation Logic
    # ==========================================

    if (
        "Python" in student.technical_skills
        and "DSA" in student.technical_skills
        and "AI/ML" in student.interests
    ):

        career = "Machine Learning Engineer"

        recommended_courses = [
            "Machine Learning",
            "Deep Learning",
            "Python",
            "Statistics",
            "Linear Algebra"
        ]

        improvement_areas = [
            "TensorFlow",
            "Data Visualization"
        ]


    elif (
        "HTML" in student.technical_skills
        and "CSS" in student.technical_skills
        and "JavaScript" in student.technical_skills
    ):

        career = "Frontend Developer"

        recommended_courses = [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "UI/UX Basics"
        ]

        improvement_areas = [
            "React",
            "Accessibility"
        ]


    elif (
        "Java" in student.technical_skills
        and "SQL" in student.technical_skills
    ):

        career = "Backend Developer"

        recommended_courses = [
            "Spring Boot",
            "REST APIs",
            "MySQL",
            "System Design"
        ]

        improvement_areas = [
            "Microservices",
            "Docker"
        ]


    elif (
        "Cyber Security" in student.interests
    ):

        career = "Cybersecurity Analyst"

        recommended_courses = [
            "Network Security",
            "Ethical Hacking",
            "Linux",
            "Cryptography"
        ]

        improvement_areas = [
            "Penetration Testing",
            "Cloud Security"
        ]


    elif (
        "Cloud Computing" in student.interests
    ):

        career = "Cloud Engineer"

        recommended_courses = [
            "AWS",
            "Docker",
            "Kubernetes",
            "Linux"
        ]

        improvement_areas = [
            "Terraform",
            "CI/CD"
        ]


    elif (
        "Data Science" in student.interests
    ):

        career = "Data Scientist"

        recommended_courses = [
            "Python",
            "Pandas",
            "NumPy",
            "Machine Learning",
            "SQL"
        ]

        improvement_areas = [
            "Statistics",
            "Data Cleaning"
        ]


    else:

        recommended_courses = [
            "Python",
            "Data Structures",
            "SQL",
            "Git & GitHub"
        ]

        improvement_areas = [
            "Communication",
            "Problem Solving"
        ]


    # ==========================================
    # Build Strengths
    # ==========================================

    strengths = []

    if student.cgpa >= 8.5:
        strengths.append("Excellent Academic Performance")

    elif student.cgpa >= 7:
        strengths.append("Good Academic Performance")

    else:
        improvement_areas.append("Improve Academic Performance")

    strengths.extend(student.technical_skills)
    strengths.extend(student.soft_skills)


    # ==========================================
    # Return Response
    # ==========================================

    return {

        "message": "Analysis Completed Successfully",

        "student": student,

        "career_recommendation": career,

        "strengths": strengths,

        "improvement_areas": improvement_areas,

        "recommended_courses": recommended_courses

    }