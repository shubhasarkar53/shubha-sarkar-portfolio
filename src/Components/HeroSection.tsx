import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, X } from "lucide-react";
import Avatar from "./Avatar";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function HeroSection() {


  const githubLink = "https://github.com/shubhasarkar53";
  const linkedInLink = "https://www.linkedin.com/in/shubha-sarkar-862588213";
  const XLink = "https://x.com/mesarkar01";
  const emailAddress = "sarkarshubha123@gmail.com";

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
          
          <Avatar></Avatar>
        
          <motion.h1
            className="text-5xl md:text-7xl md:mt-0 mt-[5.5rem] font-bold mb-2"
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
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-purple-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-purple-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={XLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="hover:text-purple-300"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
            <motion.a
              href={`mailto:${emailAddress}`}
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
