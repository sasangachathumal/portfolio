import TechStack from "./TechStack";

function About() {
  return (
    <>
      <div className="w-screen flex flex-row justify-center gap-10 h-full px-16">
        <div className="w-1/2 flex flex-col space-y-4 flex-wrap">
          <div className="font-righteous text-9xl text-primary sm:text-sm md:text-base xl:text-6xl">
            <p>About Me .</p>
          </div>
          <div className="font-roboto text-base text-primary-white mt-4 sm:text-sm md:text-base xl:text-base">
            <p className="text-justify">
              A developer with over seven years of experience in analyzing,
              designing, and developing professional IT solutions. With deep
              understanding and experience in Angular, Ionic, TypeScript, SCSS
              and Reactjs frontend frameworks and technologies. And Nodejs,
              Expressjs, PHP, and MYSQL backend frameworks and technologies.
              Looking to join a team to use my technical skills and experience
              to create innovative applications.
            </p>
            <p className="text-justify mt-3">
              My journey as a software engineer start nearly 8 years ago after I
              finish my software engineering course that I followed. After my
              course I joined to a company as a Trainee Associate Software
              Engineer to do my internship in 2016. Since then I have worked as
              an Associate Software Engineer, Frontend Software Developer, Lead
              Software Engineer in different companies collaborated with
              talented people to create awesome and powerfull digital products.
            </p>
          </div>
          <div>
            <TechStack
              stackList={[
                "angular",
                "ionic",
                "javaScript",
                "typeScript",
                "react",
                "sass",
                "tailwind",
                "jasmine",
                "node",
                "firebase",
                "java",
              ]}
              isViewMore={true}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="mx-20 font-righteous text-6xl text-primary sm:text-sm md:text-base xl:text-6xl mb-6">
            <p>Education .</p>
          </div>
          <div className="mx-20 border-none bg-primary rounded-md p-3 mb-3 shadow-xl shadow-primary-dark">
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-xl font-bold mb-1">
              BEng (Hons) in Software Engineering - London Metropolitan
              University
            </p>
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-lg mb-1">
              Esoft Metro Campus - Sri Lanka
            </p>
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-base">
              2024 - 2025
            </p>
          </div>
          <div className="mx-20 border-2 border-primary rounded-md p-3 mb-3 shadow-lg shadow-primary-dark">
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-xl font-bold mb-1">
              Pearson BTEC HND in Computing (Software Engineering)
            </p>
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-lg mb-1">
              Esoft Metro Campus - Sri Lanka
            </p>
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-base">
              2023 - 2024
            </p>
          </div>
          <div className="mx-20 border-2 border-primary rounded-md p-3 mb-3 shadow-lg shadow-primary-dark">
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-xl font-bold mb-1">
              Advanced Business Solution Developer (ABSD)
            </p>
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-xl font-bold mb-1">
              Comprehensive Master Java Developer (CMJD)
            </p>
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-lg mb-1">
              Institute of Java & Software Engineering
            </p>
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-base">
              2015 - 2016
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
