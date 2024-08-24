import TechStack from "./TechStack";

function ExpPractera() {
  return (
    <>
      <div className="flex flex-col px-20 w-screen gap-8 h-full">
        <div className="font-righteous text-9xl text-primary sm:text-sm md:text-base xl:text-6xl">
          <p>Experience.</p>
        </div>
        <div className="flex flex-row h-full">
          <div className="flex flex-col space-y-6 flex-wrap w-1/2">
            <div className="company-details-practera w-1/2 p-11">
              <p className="font-robotoCondensed text-6xl text-primary-white sm:text-sm md:text-base xl:text-5xl mb-4">
                Practera
              </p>
              <p className="font-robotoCondensed text-2xl text-primary-white sm:text-sm md:text-base xl:text-2xl mb-4">
                Software Developer
              </p>
              <p className="font-robotoCondensed text-2xl text-primary-white sm:text-sm md:text-base xl:text-2xl">
                July 2018 - 2024
              </p>
            </div>
            <div>
              <TechStack
                stackList={[
                  "angular",
                  "ionic",
                  "typeScript",
                  "sass",
                  "pusher",
                  "jasmine",
                  "bootstrap",
                  "github",
                  "git",
                  "jira",
                ]}
                isViewMore={false}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 flex-wrap w-1/2">
            <p className="font-roboto font-bold text-xl text-primary-white sm:text-sm md:text-base xl:text-xl">
              Practera | Sydney, Australia (Remote)
            </p>
            <p className="font-roboto text-base text-primary-white text-justify sm:text-sm md:text-base xl:text-base">
              Practera, founded in 2010 in Sydney, Australia, is an experiential
              education technology company that helps universities, employers,
              and governments offer students real-world experiences through
              projects and internships.
            </p>
            <p className="font-roboto text-base text-primary-white text-justify sm:text-sm md:text-base xl:text-base">
              During my time at Practera from June 2018 to August 2024, I
              significantly contributed to the development and enhancement of
              various web applications. A key achievement was the implementation
              of a dynamic real-time chat module using Angular, Ionic, and
              Pusher, which enhanced communication within the platform and
              provided users with a seamless experience. I also improved the
              performance of existing applications by leveraging RxJS operators
              such as Observables and BehaviorSubject, ensuring that the
              applications were both efficient and responsive.
            </p>
            <p className="font-roboto text-base text-primary-white text-justify sm:text-sm md:text-base xl:text-base">
              In addition to these contributions, I worked on several critical
              projects, including the development of a global authentication
              module with multi-factor authentication (MFA), which enhanced the
              security of Practera's applications. I also played a key role in
              the "Cutie" project, where I developed distinct features like
              Admin Chat and an onboarding process, using technologies such as
              Angular, Ionic, Bootstrap, Pusher, and the HubSpot API. These
              components were seamlessly integrated into the main Practera admin
              console, showcasing my adaptability and efficiency in delivering
              robust solutions across diverse projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpPractera;
