export interface ProjectItem {
    title: string;
    technology: string;
    description: string;
    to?: string;
    repository?: string;
    images: string[];
}

export const projectItems: Array<ProjectItem> = [
    {
        title: "Guild Tycoon - Unity Game",
        technology: "Unity (C# with other built-in technologies)",
        description: "Explore the source code snippets of this portfolio website, using TypeScript and NextJS for dynamic web development. The site is elegantly styled using Tailwind CSS and deployed on Vercel.",
        to: "project-item-0",
        repository: "https://bitbucket.org/zhuha-ent/workspace/overview/",
        images: ['village-life-pic1.png', 'village-life-pic2.png', 'village-life-pic3.png', 'village-life-pic4.png', 'village-life-pic5.png','village-life-pic6.png','village-life-pic7.png','village-life-pic8.png']
    },
    {
        title: "This Portfolio Website",
        technology: "TypeScript, NextJS, Tailwind, Vercel(Deployment)",
        description: "Explore the source code snippets of this portfolio website, using TypeScript and NextJS for dynamic web development. The site is elegantly styled using Tailwind CSS and deployed on Vercel.",
        to: "project-item-1",
        repository: "https://github.com/joepris/my-portfolio",
        images: ['website-portfolio-sample-code.png', 'website-portfolio-sample-code2.png', 'website-portfolio-sample-code3.png']
    },
    {
        title: "Hospital Scheduling App",
        technology: "ASP.Net MVC (C#, HTML, CSS, Bootstrap, SQL Server, JavaScript, JQuery)",
        description: "Designed and created a scheduling web application to optimize scheduling and management processes within healthcare facilities. Leveraged expert proficiency in C# programming and the ASP.NET MVC framework to develop a robust and maintainable codebase.",
        to: "project-item-2",
        repository: "https://github.com/joepris/Scheduling-App",
        images: ['mvc-schedule-dashboard.png', 'mvc-schedule-login.png', 'mvc-schedule-staffgap.png', 'mvc-schedule-code-sample.png']
    },
    {
        title: "SQL Practices",
        technology: "SQL",
        description: "Delved into SQL fundamentals, including filtering, functions, and table creation, through hands-on practice. Gained valuable insights into database management and querying techniques.",
        to: "project-item-3",
        repository: "https://github.com/joepris",
        images: ['mvc-schedule-zsql0.png', 'mvc-schedule-zsql1.png', 'mvc-schedule-zsql2.png', 'mvc-schedule-zsql3.png', 'sql-select-first.png', 'sql-select-second.png']
    },
    {
        title: "Pyramids of Giza",
        technology: "OpenGL (C++)",
        description: "Demonstrated my knowledge in computer graphics by crafting a captivating 3D animation featuring the iconic Pyramids of Giza set against the backdrop of a sunsey with an alien planet, and an X-wing spacecraft gracefully orbiting the scene.",
        to: "project-item-4",
        repository: "https://github.com/joepris/pyramids-of-giza",
        images: ['opengl-pyramids-first.png', 'opengl-pyramids-second.png', 'opengl-pyramids-third.png', 'opengl-pyramids-code-sample.png']
    },
    {
        title: "Sample Online Retail App",
        technology: "ASP.Net MVC (C#, HTML, CSS, Bootstrap, SQL Server, JavaScript, JQuery)",
        description: "Designed and created an Online Retail web application using ASP.Net MVC. It showed business items available, items in stock, and prices. Also has an Item detail page for more information for each item.",
        to: "project-item-5",
        repository: "https://github.com/joepris/Scheduling-App",
        images: ['mvc-retail-dashboard.png', 'mvc-retail-detail.png', 'mvc-retail-second.png', 'mvc-retail-code-add-sample.png']
    },
    {
        title: "Freedom Lawn",
        technology: "Website (HTML, CSS, JavaScript, 000webhost(Deployment)",
        description: "Developed and deployed a website for a fictitious lawn and snow blowing service company. Leveraged HTML, CSS, and JavaScript to create an engaging and responsive user interface. Hosted the website using 000webhost for convenient accessibility.",
        to: "project-item-6",
        images: ['website-freedom-first.png', 'website-freedom-green.png', 'website-freedom-snow.png', 'website-freedom-embed.png', 'website-freedom-code-sample.png']
    },
    {
        title: "Code Camp App",
        technology: "ReactJS, Webpack",
        description: "Learned to create this web application from Peter Kellner's crash course on React through Pluralsight. The creation of an interactive web application facilitating the dynamic display of speakers sourced from an extensive database. Leveraged the power of ReactJS and Webpack to create a seamless and intuitive user experience.",
        to: "project-item-7",
        repository: "https://github.com/joepris/codecampapp-from-learning",
        images: ['reactjs-codecamp-dashboard.png', 'reactjs-codecamp-dashboard-dark.png']
    }
]