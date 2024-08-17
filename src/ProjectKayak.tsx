import { IconContext } from "react-icons";
import { MdOpenInNew } from "react-icons/md";

import TechStack from "./TechStack";
import kayalImg from "./assets/projects/wallstrank.png";

function ProjectKayak() {
  return (
    <>
      <div className="w-1/2 px-16 flex flex-col">
        <div>
          <p className="font-righteous text-primary-white sm:text-sm md:text-base xl:text-3xl font-bold mb-4">
            Kayak Adventure.lk
          </p>
          <p className="font-roboto text-primary-white sm:text-sm md:text-base xl:text-base text-justify">
            For the Kayak Adventure Rathgama Lake project, I developed the
            official website, utilizing Laravel as the backend framework and
            MySQL for database management. The web application features a public
            website that showcases the company's services, and a custom-designed
            admin portal for managing the website's content, including the
            gallery. I applied custom styles over Bootstrap to create a unique
            and visually appealing design. This project allowed me to integrate
            various technical skills, including web development, database
            management, and user interface design, providing a comprehensive
            digital presence for Kayak Adventure Rathgama Lake.
          </p>
        </div>
        <div className="mt-6 w-full">
          <TechStack
            stackList={["laravel", "php", "mysql", "bootstrap", "github"]}
            isViewMore={false}
            isProject={true}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col">
        <div className="flex flex-row justify-start mb-6">
          <IconContext.Provider value={{ color: "#E09145", size: "24" }}>
            <div className="text-primary text-xl mr-4 flex flex-row">
              <p>GitHub</p>
              <MdOpenInNew />
            </div>
            <div className="text-primary text-xl ml-4 flex flex-row">
              <p>Official Site</p>
              <MdOpenInNew />
            </div>
          </IconContext.Provider>
        </div>
        <div className="project-image-container rounded-xl">
            <img src={kayalImg} className="rounded-xl  object-cover" alt="" />
        </div>
      </div>
    </>
  );
}

export default ProjectKayak;
