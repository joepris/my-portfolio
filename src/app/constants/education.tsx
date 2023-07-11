export interface EducationItem {
    label: string;
    grade?: string;
    description?: string;
}

export const educationItems: Array<EducationItem> = [
    {
        label: "Bow Valley College",
        grade: "GPA 3.93/4.0",
        description: "Studied about Computer Programming, Web Application Development, Software Testing, and Quality Control. Most projects developed in the program was done using Agile Methods."
    },
    {
        label: "Plural Sight",
        grade: "Online Learning",
        description: "Studied the latest trends on coding. Learned more about the development process of React-Redux, and React-Next Apps"
    },
    {
        label: "Saint Louis University",
        grade: "GPA: B",
        description: "Studied Mining Engineering, giving critical thinking, logical reasoning, and advanced mathematics."
    }
]