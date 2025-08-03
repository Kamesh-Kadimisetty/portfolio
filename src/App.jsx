import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import Codingprofiles from "./components/Codingprofiles";
const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-200 selection:text-cyan-900">
      <div className="fixed inset-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div>
      <Sidebar/>
      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Education/>
        <Projects />
        <Codingprofiles/>
        <Resume />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
