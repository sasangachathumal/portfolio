import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="w-screen flex flex-row justify-center gap-10 h-full m-auto">
        <div className="w-30 flex flex-col space-y-6">
          <IconContext.Provider value={{ color: "#E09145", size: "40" }}>
            <a href="https://www.linkedin.com/in/sasanga-chathumal/" className="border-2 rounded-md border-primary p-1 cursor-pointer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/sasangachathumal" className="border-2 rounded-md border-primary p-1 cursor-pointer">
              <AiFillGithub />
            </a>
            <a href="https://www.importantcodes.com/" className="border-2 rounded-md border-primary p-1 cursor-pointer">
              <FaGlobe />
            </a>
            <a href="https://medium.com/@chathumal.sasanga" className="border-2 rounded-md border-primary p-1 cursor-pointer">
              <AiFillMediumSquare />
            </a>
          </IconContext.Provider>
        </div>
        <div className="w-68">
            <div className="flex flex-row font-righteous text-9xl sm:text-sm md:text-base xl:text-9xl">
                <p className="text-primary-white">Hello</p>
                <p className="text-primary">.</p>
            </div>
            <div className="font-righteous text-9xl text-primary-white sm:text-sm md:text-base xl:text-9xl">
                <p>I am</p>
            </div>
            <div className="font-righteous text-9xl text-primary sm:text-sm md:text-base xl:text-9xl">
                <p>Sasanga</p>
            </div>
            <div className="font-roboto text-base text-primary-white mt-8 sm:text-sm md:text-base xl:text-base">
                <p>Lead Software Engineer / Front End Developer</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
