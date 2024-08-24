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
            <div className="company-details-practera w-3/4 p-5">
              <p className="font-robotoCondensed text-6xl text-primary-white sm:text-sm md:text-base xl:text-5xl mb-4">
                IFS R&D International
              </p>
              <p className="font-robotoCondensed text-2xl text-primary-white sm:text-sm md:text-base xl:text-2xl mb-4">
                Lead Software Engineer
              </p>
              <p className="font-robotoCondensed text-2xl text-primary-white sm:text-sm md:text-base xl:text-2xl">
                September 2024 - present
              </p>
            </div>
            <div>
              <TechStack
                stackList={[
                  "angular",
                  "typeScript",
                  "sass",
                  "firebase",
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
              IFS R&D International (Pvt) Ltd | Colombo, Sri Lanka
            </p>
            <p className="font-roboto text-base text-primary-white sm:text-sm md:text-base xl:text-base">
              IFS R&D International (Pvt) Ltd, based in Colombo, Sri Lanka, is a
              key global delivery center for IFS™, a leading global provider of
              enterprise software solutions. Specializing in Enterprise Resource
              Planning (ERP), Enterprise Asset Management (EAM), and Enterprise
              Service Management (ESM), the company supports over 1 million
              users worldwide, focusing on innovation and customer-centric
              solutions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpPopulo;
