export interface SkillItem {
    label: string;
    category: "Front End" | "Back End" | "Tools & Workflow" | "Other / Specialized";
    logo?: string;
}

export const skillCategories: SkillItem["category"][] = [
    "Front End",
    "Back End",
    "Tools & Workflow",
    "Other / Specialized",
];

export const skillItems: Array<SkillItem> = [
    { label: "HTML5", category: "Front End" },
    { label: "CSS3", category: "Front End" },
    { label: "SCSS/SASS", category: "Front End" },
    { label: "Tailwind", category: "Front End" },
    { label: "JavaScript (ES6+)", category: "Front End" },
    { label: "TypeScript", category: "Front End" },
    { label: "React.js", category: "Front End" },
    { label: "Bootstrap", category: "Front End" },
    { label: "Semantic HTML", category: "Front End" },
    { label: "DOM Manipulation", category: "Front End" },
    { label: "Blazor", category: "Front End" },
    { label: "Razor", category: "Front End" },
    { label: "Responsive Web Design", category: "Front End" },
    { label: "Wireframing & Mockups", category: "Front End" },
    { label: "API Integration with Fetch", category: "Front End" },

    { label: "Node.js", category: "Back End" },
    { label: "Express.js", category: "Back End" },
    { label: "RESTful APIs", category: "Back End" },
    { label: "MongoDB", category: "Back End" },
    { label: "NoSQL", category: "Back End" },
    { label: "SQL", category: "Back End" },
    { label: "MS SQL", category: "Back End" },
    { label: "ASP.NET", category: "Back End" },
    { label: "C#", category: "Back End" },
    { label: "Java", category: "Back End" },
    { label: "C++", category: "Back End" },
    { label: "Python", category: "Back End" },
    { label: "NPM", category: "Back End" },
    { label: "Mongoose", category: "Back End" },

    { label: "SDLC", category: "Tools & Workflow" },
    { label: "Trello", category: "Tools & Workflow" },
    { label: "Kanban Board", category: "Tools & Workflow" },
    { label: "Git", category: "Tools & Workflow" },
    { label: "GitHub", category: "Tools & Workflow" },
    { label: "Git Tea (Zuitt Git)", category: "Tools & Workflow" },
    { label: "Version Control", category: "Tools & Workflow" },
    { label: "Postman", category: "Tools & Workflow" },
    { label: "Microsoft Office Tools", category: "Tools & Workflow" },
    { label: "Google Tools", category: "Tools & Workflow" },

    { label: "OpenGL", category: "Other / Specialized" },
    { label: "AutoCAD", category: "Other / Specialized" },
    { label: "Surpac", category: "Other / Specialized" },
    { label: "Micromine", category: "Other / Specialized" },
    { label: "ArcGIS", category: "Other / Specialized" },
]
