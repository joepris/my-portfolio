export interface EducationItem {
    label: string;
    grade?: string;
    description?: string;
}

export const educationItems: Array<EducationItem> = [
    {
        label: "Zuitt Coding Bootcamp",
        grade: "Front End, Back End, Full-Stack Training, 100% Completion",
        description: "Took a 12-week intensive coding bootcamp including and additional 8-week training sub-courses, gaining hands-on experience in web development, programming languages, and software engineering principles. Developed skills in front-end, back-end development and full-stack development. Technologies learned include HTML, CSS, Bootstrap, JavaScript, MEVN Stack (MongoDB, Express.js, Vue.js, React.js, and Node.js), Java, and Python. Successfully completed projects and assignments, demonstrating proficiency in coding and problem-solving."
    },
    {
        label: "Bow Valley College",
        grade: "Software Development Program, GPA 3.93/4.0",
        description: "Studied about Computer Programming, Web Application Development, Software Testing, and Quality Control. Most projects developed in the program was done using Agile Methods. Technologies used were C#, ASP.Net, HTML, CSS, JavaScript, SQL Server, and more."
    },
    {
        label: "Pluralsight",
        grade: "Software Development Online Learning",
        description: "Studied the latest trends on coding. Learned more about the development process of React-Redux, and React-Next Apps"
    },
    {
        label: "Saint Louis University",
        grade: "Bachelors in Science in Mining Engineering, GPA: B",
        description: "Studied Mining Engineering, giving critical thinking, logical reasoning, and advanced mathematics."
    }
]