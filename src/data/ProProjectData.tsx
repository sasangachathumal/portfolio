import kayakImg from "../assets/projects/kayakadventure.png";
import portfolioImg from "../assets/projects/portfolio.png";
import wallstImg from "../assets/projects/wallstrank.png";

const projectList = [
  {
    id: "P1",
    name: "Portfolio",
    description: "This is the my portfolio website that I build to showcase my skills and experiences. I have utilizing ReactJs, TailwindCSS, TypeScript as tools to build this website.",
    techStack: ["react", "typeScript", "tailwind", "github"],
    image: portfolioImg,
    githubUrl: "https://github.com/sasangachathumal/portfolio",
    siteUrl: "https://sasangachathumal.github.io/portfolio/",
    role: "",
  },
  {
    id: "P2",
    name: "Kayak Adventure.lk",
    description:
      "For the Kayak Adventure Rathgama Lake project, I developed the official website, utilizing Laravel as the backend framework and MySQL for database management. The web application features a public website that showcases the company's services, and a custom-designed admin portal for managing the website's content, including the gallery. I applied custom styles over Bootstrap to create a unique and visually appealing design. This project allowed me to integrate various technical skills, including web development, database management, and user interface design, providing a comprehensive digital presence for Kayak Adventure Rathgama Lake.",
    techStack: ["laravel", "php", "mysql", "bootstrap", "github"],
    image: kayakImg,
    githubUrl: "https://github.com/sasangachathumal/kayak-adventure",
    siteUrl: "https://kayakadventure.lk/",
    role: "",
  },
  {
    id: "P3",
    name: "Wall St. Rank",
    description:
      "Wall St. Rank is a financial services platform providing daily stock rankings, target price predictions, and analyst-vetted stock ideas. Involved in initial development work of the platform as a freelance frontend developer and work on internal components and enhancing the UI of the web application.",
    techStack: ["react", "typeScript", "tailwind", "bitbucket"],
    image: wallstImg,
    githubUrl: "#",
    siteUrl: "https://www.wallstrank.com/",
    role: "Freelance Frontend developer",
  },
];

export default projectList;
