import "./App.css";
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Project from "./components/projects/Project";
//import Resume from "./components/resume/Resume";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//     </div>
//   );
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },

//   {
//     element: <Home />,
//   },
// ]);

function App() {
  return (
    <div className="w-full h-auto bg-[#212428] text-[#c4cfde] px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Home />
        <Features />
        <About />
        <Project />
        {/* <Resume /> */}
        <Contact />
        {/* <RouterProvider router={router} /> */}
      </div>
    </div>
  );
}

export default App;
