import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
function Education() {
  return (
    <div>
      <motion.section
        id="education"
        className="my-6 flex items-center"
        {...fadeIn}
      >
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <motion.div
              className="bg-white/5 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=400&fit=crop"
                    alt="Master's Degree"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Master of Computer Science
                  </h3>
                  <p className="text-purple-300">
                    Tech University • 2016 - 2018
                  </p>
                  <p className="mt-4">
                    Specialized in Software Engineering and Machine Learning
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="bg-white/5 rounded-lg p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop"
                    alt="Bachelor's Degree"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-purple-300">
                    State University • 2012 - 2016
                  </p>
                  <p className="mt-4">
                    Major in Computer Science with focus on Web Technologies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Education;
