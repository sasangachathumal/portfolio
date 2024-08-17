import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ProjectDetail from "./ProjectDetail";
import projectList from "./data/ProjectData";

function ProjectHome() {
  const projectListSize = projectList.length;
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to go to the next picture
  const goToNextProject = () => {
    if (activeIndex === projectListSize - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex+1);
    }
  };

  // Function to go to the next picture
  const goToPrevProject = () => {
    if (activeIndex === projectListSize - 1) {
      setActiveIndex(projectListSize - 1);
    } else {
      setActiveIndex(activeIndex-1);
    }
  };

  return (
    <>
      <div className="flex flex-col px-20 w-screen gap-8 h-full">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="px-20 font-righteous text-9xl text-primary sm:text-sm md:text-base xl:text-6xl">
              <p>Projectes.</p>
            </div>
            <div className="px-20 font-roboto text-primary sm:text-sm md:text-base xl:text-3xl mt-2">
              <p>Personal projectes</p>
            </div>
          </div>
          <div className="w-full ml-10">
            <IconContext.Provider value={{ color: "#1E2022", size: "60" }}>
              <div className="flex flex-row justify-between px-20 mt-12">
                <button
                  className="bg-primary rounded-full cursor-pointer shadow-lg shadow-primary-dark hover:animate-headShake"
                  onClick={goToPrevProject}>
                  <IoIosArrowBack />
                </button>
                <button className="bg-primary rounded-full cursor-pointer shadow-lg shadow-primary-dark hover:animate-headShake"
                onClick={goToNextProject}>
                  <IoIosArrowForward />
                </button>
              </div>
            </IconContext.Provider>
          </div>
        </div>

        <div className="flex flex-row h-full px-20">
          <ProjectDetail projectObj={projectList[activeIndex]} />
        </div>
      </div>
    </>
  );
}

export default ProjectHome;
