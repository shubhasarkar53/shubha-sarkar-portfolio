
import { motion } from "framer-motion";


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function Projects() {
  return (
    <div>
      <motion.section
        id="projects"
        className="my-6 flex items-center"
        {...fadeIn}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="bg-white/5 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=400&fit=crop"
                alt="E-commerce Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">E-commerce Platform</h3>
                <p className="text-purple-300 mb-4">
                  React • Node.js • MongoDB
                </p>
                <p>
                  A full-stack e-commerce solution with real-time inventory
                  management.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white/5 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=400&fit=crop"
                alt="Task Management App"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Task Management App</h3>
                <p className="text-purple-300 mb-4">
                  React • TypeScript • Firebase
                </p>
                <p>
                  A collaborative task management tool with real-time updates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Projects;
