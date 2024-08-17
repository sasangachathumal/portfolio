import About from "./About";
import ExpIFS from "./ExpIFS";
import ExpPopulo from "./ExpPopulo";
import ExpPractera from "./ExpPractera";
import Home from "./Home";
import ProjectHome from "./ProjectsHome";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen overflow-x-hidden">
        <div className="w-screen overflow-x-scroll m-auto mx-12" id="my-scroll-container">
          <div className="min-w-max flex flex-row mt-4 mb-1">
            <Home />
            <About />
            <ExpIFS/>
            <ExpPractera />
            <ExpPopulo />
            <ProjectHome />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
