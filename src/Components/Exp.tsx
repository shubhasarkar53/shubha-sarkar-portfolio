import { motion } from "framer-motion";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
function Exp() {

  const compnayLink = "https://learnyard.com/"

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
                Graphic Designer Intern
              </h3>
              <a 
               href={compnayLink}
               target="_blank"
              rel="noopener noreferrer" className="text-purple-300 underline cursor-pointer">LearnYard Technologies FZ-LLC • 2024 - Present</a>
              <p className="mt-4 text-gray-200">
              Designed interactive <span className="underline font-semibold text-white">animations</span> and <span className="underline font-semibold text-white">diagrams</span> to simplify <span className="underline font-semibold text-white">DSA concepts</span>, enhancing student understanding by 50%. Created minimalistic and visually appealing designs to ensure clarity and engagement. Improved content accessibility through innovative and intuitive visual elements
              </p>
            </motion.div>
           
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Exp;
