import TechStack from "./TechStack";

function ExpPopulo() {
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
                Populo
              </p>
              <p className="font-robotoCondensed text-2xl text-primary-white sm:text-sm md:text-base xl:text-2xl mb-4">
                Associate Software Engineer
              </p>
              <p className="font-robotoCondensed text-2xl text-primary-white sm:text-sm md:text-base xl:text-2xl">
                2016 - 2018
              </p>
            </div>
            <div>
              <TechStack
                stackList={[
                  "angular",
                  "typeScript",
                  "sass",
                  "materialize",
                  "bootstrap",
                  "jasmine",
                  "firebase",
                  "github",
                  "git",
                  "bitbucket",
                ]}
                isViewMore={false}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 flex-wrap w-1/2">
            <p className="font-roboto font-bold text-xl text-primary-white sm:text-sm md:text-base xl:text-xl">
              Populo (Pvt) Ltd | Colombo, Sri Lanka
            </p>
            <p className="font-roboto text-base text-primary-white text-justify sm:text-sm md:text-base xl:text-base">
              Populo (Pvt) Ltd is a Sri Lankan startup company, specializing in
              creating innovative digital experiences. The company offers
              services in mobile and web solutions, focusing on product
              development, pricing strategies, and support. Populo is known for
              delivering engaging and user-centric digital products, leveraging
              the latest technologies to meet diverse client needs.
            </p>
            <p className="font-roboto text-base text-primary-white text-justify sm:text-sm md:text-base xl:text-base">
              From June 2016 to June 2018, I worked at Populo, starting as an
              intern and progressing to an associate software engineer. My
              primary work focus on the "GradChat" project, a private social
              network designed for high schools and universities to engage
              alumni. I developed and maintained the admin console,
              incorporating features such as real-time chat, feeds,
              announcements, event management, user management, and role-based
              functionalities. The project involved integrating multiple
              in-house and third-party REST APIs and working with technologies
              like Angular, Bootstrap, CSS, SCSS, Java Play, Firebase, Google
              AppEngine, Git, and Bitbucket, all within an Agile environment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpPopulo;
