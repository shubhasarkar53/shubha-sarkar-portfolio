import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function Contact() {

  const linkedInLink = "https://www.linkedin.com/in/shubha-sarkar-862588213";
  const XLink = "https://x.com/mesarkar01";

  return (
    <div>
      <motion.section
        id="contact"
        className="min-h-screen flex items-center"
        {...fadeIn}
      >
        <div className="w-full max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
          <p className="text-lg mb-10 text-purple-200">
            Want to reach out? Shoot me a DM on either of my profiles — I'm always up for a great conversation or collaboration!
          </p>
          <div className="flex justify-center gap-8">
            <motion.a
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-lg border border-white/20 hover:border-purple-400 transition"
              whileHover={{ scale: 1.05 }}
            >
              <Linkedin className="text-purple-300 text-xl" />
              <span className="text-white">LinkedIn</span>
            </motion.a>
            <motion.a
              href={XLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-lg border border-white/20 hover:border-purple-400 transition"
              whileHover={{ scale: 1.05 }}
            >
              <Twitter className="text-purple-300 text-xl" />
              <span className="text-white">Twitter</span>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;
