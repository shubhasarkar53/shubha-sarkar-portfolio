import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Avatar from "./Avatar";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function HeroSection() {
  return (
    // className="container max-w-3xl  mx-auto px-4 py-20 border-2
    <>
      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen max-w-3xl mx-auto  flex items-center justify-center"
        {...fadeIn}
      >
        <div className="text-center">
          {/* <motion.div
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div> */}

          {/* ------------------ */}
          <Avatar></Avatar>
        

          {/* ------------------ */}

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Shubha Sarkar
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl text-purple-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-purple-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-purple-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:contact@example.com"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-purple-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default HeroSection;
