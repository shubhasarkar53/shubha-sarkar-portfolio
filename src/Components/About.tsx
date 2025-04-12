import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};


function About() {
  return (
    <>
      {/* About Section */}
      <motion.section
        id="about"
        className="flex items-center border my-6 "
        {...fadeIn}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I'm a passionate software developer with expertise in building
            modern web applications. With a strong foundation in React,
            TypeScript, and Node.js, I create elegant solutions to complex
            problems.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you can find me contributing to open-source
            projects, writing technical blog posts, or exploring new
            technologies.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default About;
