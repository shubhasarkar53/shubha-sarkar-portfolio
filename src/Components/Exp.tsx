import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
function Exp() {
  return (
    <>
      <motion.section
        id="experience"
        className=" flex items-center my-6"
        {...fadeIn}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            <motion.div
              className="bg-white/5 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold">
                Senior Software Developer
              </h3>
              <p className="text-purple-300">Tech Corp • 2020 - Present</p>
              <p className="mt-4">
                Led development of multiple high-impact projects using React and
                Node.js. Mentored junior developers and implemented best
                practices.
              </p>
            </motion.div>
            <motion.div
              className="bg-white/5 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="text-purple-300">Innovation Labs • 2018 - 2020</p>
              <p className="mt-4">
                Developed and maintained multiple web applications. Collaborated
                with cross-functional teams to deliver high-quality solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Exp;
