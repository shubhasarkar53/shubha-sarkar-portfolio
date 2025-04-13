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
            <motion.a
              href="https://app.100xdevs.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 rounded-lg p-6 block"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center  ">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg"
                    alt="Degree"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-gray-200">
                  <h3 className="text-xl font-semibold">
                    Web Development BootCamp
                  </h3>
                  <p className="text-purple-300">100xDevs • 2025 - Current</p>
                  <p className="mt-4">Full stack Web Development</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://makautwb.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 rounded-lg p-6 block"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://makautwb.ac.in/iem/img/m01.jpg"
                    alt="'Degree"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Bachelor of Technology
                  </h3>
                  <p className="text-purple-300">
                    MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY, WEST
                    BENGAL • 2020 - 2024
                  </p>
                  <p className="mt-4 text-gray-200">
                    Specialized in{" "}
                    <span className=" font-semibold text-white">
                      Computer Science and Engineering.
                    </span>
                    <p className=" font-semibold text-white">GPA: 9.17/10</p>
                  </p>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Education;
