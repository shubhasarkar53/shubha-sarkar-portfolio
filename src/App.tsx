import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import About from "./Components/About";
import Education from "./Components/Education";
import Exp from "./Components/Exp";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Contact",
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId.toLowerCase());
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Mobile Menu */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav
        className={`
        fixed top-0 left-0 w-full z-40
        md:top-auto md:bottom-8
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? "h-screen bg-black/95" : "h-auto bg-transparent"}
      `}
      >
        <motion.div
          className={`
            flex
            ${
              isMenuOpen
                ? "h-full flex-col items-center justify-center"
                : "h-auto"
            }
            md:justify-center md:items-center
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul
            className={`
            flex
            ${isMenuOpen ? "flex-col space-y-8" : "hidden"}
            md:flex md:flex-row md:space-x-8 md:bg-white/10 md:backdrop-blur-sm md:px-8 md:py-4 md:rounded-full
          `}
          >
            {sections.map((section) => (
              <motion.li
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(section)}
                  className={`text-lg ${
                    activeSection === section.toLowerCase()
                      ? "text-purple-300"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>

      {/* hero */}

      <HeroSection></HeroSection>

      {/* Main Content */}
      <div className="container max-w-3xl  mx-auto px-4 py-20  ">
        {/* About Section */}
        <About></About>

        {/* Skills Section */}
        <Skills></Skills>

        {/* Experience Section */}
        <Exp />

        {/* Education Section */}

        <Education></Education>

        {/* Projects Section */}
       <Projects></Projects>

        {/* Contact Section */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
