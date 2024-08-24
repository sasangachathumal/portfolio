import { IconContext } from "react-icons";
import { DiMaterializecss } from "react-icons/di";
import { FaJava, FaNodeJs, FaSass } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import {
  SiAngular,
  SiBitbucket,
  SiBootstrap,
  SiCodeigniter,
  SiCsharp,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHubspot,
  SiIonic,
  SiJasmine,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiMicrosoftsqlserver,
  SiMysql,
  SiPhp,
  SiPusher,
  SiReact,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

export interface TechStackProp {
  stackList: string[];
  isViewMore: boolean;
  isProject?: boolean;
}

function TechStack(techStackProp: TechStackProp) {
  const techClassNames =
    "border-2 rounded-md border-primary p-2 mr-8 mt-6 hover:animate-jello shadow-md shadow-primary";
  let titleClass = "";
  let iconDivClass = "";
  const stackIcons = techStackProp.stackList.map((stack) => {
    switch (stack) {
      case "mssql":
        return (
          <div className={techClassNames}>
            <SiMicrosoftsqlserver />
          </div>
        );
      case "c#":
        return (
          <div className={techClassNames}>
            <SiCsharp />
          </div>
        );
      case "codeigniter":
        return (
          <div className={techClassNames}>
            <SiCodeigniter />
          </div>
        );
      case "laravel":
        return (
          <div className={techClassNames}>
            <SiLaravel />
          </div>
        );
      case "php":
        return (
          <div className={techClassNames}>
            <SiPhp />
          </div>
        );
      case "mysql":
        return (
          <div className={techClassNames}>
            <SiMysql />
          </div>
        );
      case "materialize":
        return (
          <div className={techClassNames}>
            <DiMaterializecss />
          </div>
        );
      case "bitbucket":
        return (
          <div className={techClassNames}>
            <SiBitbucket />
          </div>
        );
      case "bootstrap":
        return (
          <div className={techClassNames}>
            <SiBootstrap />
          </div>
        );
      case "css":
        return (
          <div className={techClassNames}>
            <SiCss3 />
          </div>
        );
      case "git":
        return (
          <div className={techClassNames}>
            <SiGit />
          </div>
        );
      case "github":
        return (
          <div className={techClassNames}>
            <SiGithub />
          </div>
        );
      case "hubspot":
        return (
          <div className={techClassNames}>
            <SiHubspot />
          </div>
        );
      case "jira":
        return (
          <div className={techClassNames}>
            <SiJira />
          </div>
        );
      case "pusher":
        return (
          <div className={techClassNames}>
            <SiPusher />
          </div>
        );
      case "angular":
        return (
          <div className={techClassNames}>
            <SiAngular />
          </div>
        );
      case "ionic":
        return (
          <div className={techClassNames}>
            <SiIonic />
          </div>
        );
      case "javaScript":
        return (
          <div className={techClassNames}>
            <SiJavascript />
          </div>
        );
      case "typeScript":
        return (
          <div className={techClassNames}>
            <SiTypescript />
          </div>
        );
      case "react":
        return (
          <div className={techClassNames}>
            <SiReact />
          </div>
        );
      case "sass":
        return (
          <div className={techClassNames}>
            <FaSass />
          </div>
        );
      case "tailwind":
        return (
          <div className={techClassNames}>
            <SiTailwindcss />
          </div>
        );
      case "jasmine":
        return (
          <div className={techClassNames}>
            <SiJasmine />
          </div>
        );
      case "node":
        return (
          <div className={techClassNames}>
            <FaNodeJs />
          </div>
        );
      case "firebase":
        return (
          <div className={techClassNames}>
            <SiFirebase />
          </div>
        );
      case "java":
        return (
          <div className={techClassNames} title="java">
            <FaJava />
          </div>
        );
      default:
        break;
    }
  });

  if (!techStackProp.isProject) {
    titleClass =
      "font-righteous text-primary sm:text-sm md:text-base xl:text-6xl";
    iconDivClass = "flex flex-row flex-wrap w-full";
  } else {
    titleClass =
      "font-righteous text-primary-white sm:text-sm md:text-base xl:text-3xl";
    iconDivClass = "flex flex-row flex-wrap w-full";
  }

  return (
    <>
      <div className={titleClass}>
        <p>Tech Stack .</p>
      </div>
      <div className={iconDivClass}>
        <IconContext.Provider value={{ color: "#E09145", size: "35" }}>
          {stackIcons}
        </IconContext.Provider>
        {techStackProp.isViewMore ? (
          <IconContext.Provider value={{ color: "#1E2022", size: "35" }}>
            <div className="rounded-full bg-primary mr-8 mt-6 py-2 px-2 cursor-pointer shadow-md shadow-primary-dark hover:animate-headShake">
              <MdOpenInNew />
            </div>
          </IconContext.Provider>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default TechStack;
