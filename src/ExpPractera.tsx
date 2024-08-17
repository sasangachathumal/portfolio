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
              Practera is a leading experiential education technology company
              founded in 2010 and based in Sydney, Australia. The platform
              provides a comprehensive solution for universities, employers, and
              governments to offer students real-world experiences through
              projects, internships, and credentialing programs.
            </p>
            <p className="font-roboto text-base text-primary-white text-justify sm:text-sm md:text-base xl:text-base">
              During my tenure at Practera from June 2018 to August 2024, I
              played a pivotal role in the development and enhancement of
              various web applications. A significant contribution was the
              implementation of a dynamic real-time chat module using Angular,
              Ionic, and Pusher. This feature improved communication within the
              platform, providing a seamless experience for users. I also
              enhanced the performance of existing applications by leveraging
              RxJS operators such as Observables and BehaviorSubject, ensuring
              efficient and responsive functionality.
            </p>
            <p className="font-roboto text-base text-primary-white text-justify sm:text-sm md:text-base xl:text-base">
              I worked in multiple projects, including the development of a global
              authentication module with multi-factor authentication (MFA). This
              project was critical for enhancing the security of Practera's
              applications and demonstrated my ability to deliver crucial
              features on short notice with minimal bugs. Additionally, I worked
              on the "Cutie" project, which involved creating distinct features
              like Admin Chat and an onboarding process. These components were
              built using Angular, Ionic, Bootstrap, Pusher, and the HubSpot API
              and were seamlessly integrated into the main Practera admin
              console. My work showcased my adaptability and efficiency in
              developing robust solutions across diverse projects.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpPractera;
