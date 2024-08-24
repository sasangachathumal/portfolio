import { IconContext } from "react-icons";
import { MdOpenInNew } from "react-icons/md";

import TechStack from "./TechStack";

interface ProjectObj {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  siteUrl: string;
  role: string;
}

function EduProjectDetail(props: { projectObj: ProjectObj }) {
  return (
    <>
      <div className="w-2/3 border border-primary rounded-lg p-8 mx-16">
        <div>
          <p className="font-righteous text-primary-white sm:text-sm md:text-base xl:text-3xl font-bold mb-4">
            {props.projectObj.name}
          </p>
          <p className="font-roboto text-primary-white sm:text-sm md:text-base xl:text-base text-justify">
            {props.projectObj.description}
          </p>
        </div>
        <div className="flex flex-row justify-start mt-6">
          <IconContext.Provider value={{ color: "#E09145", size: "24" }}>
            {props.projectObj.githubUrl != "#" ? (
              <div className="text-primary text-xl mr-4 flex flex-row">
                <a href={props.projectObj.githubUrl}>GitHub</a>
                <MdOpenInNew />
              </div>
            ) : (
              ""
            )}
            {props.projectObj.siteUrl != "#" ? (
              <div className="text-primary text-xl ml-4 flex flex-row">
                <a href={props.projectObj.siteUrl}>Official Site</a>
                <MdOpenInNew />
              </div>
            ) : (
              ""
            )}
          </IconContext.Provider>
        </div>
        <div className="mt-6 w-full">
          <TechStack
            stackList={props.projectObj.techStack}
            isViewMore={false}
            isProject={true}
          />
        </div>
      </div>
    </>
  );
}

export default EduProjectDetail;
