import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
//import Features from "./components/features/Features";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Project from "./components/projects/Project";
//import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-[#212428] text-[#c4cfde] px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Home />
        <About />
        {/* <Resume /> */}
        {/* <Features /> */}
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
