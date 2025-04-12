import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "GraphQL",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
];

function Skills() {
  return (
    <>
      <motion.section
        id="skills"
        className="border flex items-center my-6"
        {...fadeIn}
      >
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg font-medium border border-purple-500/30 hover:border-purple-500/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Skills;
