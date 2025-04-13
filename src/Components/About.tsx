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
        className="flex items-center  my-6 "
        {...fadeIn}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            I’m  <span className="underline font-semibold  text-white">2024 graduate in Computer Science and Engineering</span> with a strong passion for
            coding, innovation, and technology. Over the few months, I’ve built a
            solid foundation in<span className="underline text-white font-semibold"> Web Development, Object-Oriented Programming and a bit DevOps.</span> I enjoy crafting impactful digital
            experiences and diving deep into new technologies that push
            boundaries. 
          </p>
          <p className="text-lg text-gray-200  leading-relaxed">
            I'm thinking of start blogging, so that I can share my learnings and ideas, aiming
            to inspire and connect with fellow tech enthusiasts. Currently, I’m
            on the <span className="underline font-semibold  text-white">lookout for exciting and rewarding opportunities</span> where I can
            apply my skills, contribute to meaningful projects, and continue to
            grow as a developer in today’s dynamic tech ecosystem.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default About;
