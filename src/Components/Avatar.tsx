import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import avatar from "../assets/images/croppedavatar.jpg"
const messages = [
    "I turn bold <span class='text-purple-600 font-semibold'>ideas</span> into real products with code.",
    "I build <span class='text-green-600 font-semibold'>full-stack apps</span> that are fast and scalable.",
    "I love turning <span class='text-blue-600 font-semibold'>challenges</span> into intuitive UI & code.",
  ];
  

export default function Avatar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Avatar */}
      <motion.div
        className="w-full h-full rounded-full overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <img
          src={avatar}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Speech Bubble */}
      <div className="absolute top-8 -right-[21rem] max-w-xs">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="relative bg-white text-gray-800 text-sm md:text-base font-medium px-4 py-2 rounded-xl shadow-xl
              before:content-[''] before:absolute before:top-3 before:-left-2 
              before:border-y-[8px] before:border-r-[12px] before:border-l-0 
              before:border-y-transparent before:border-r-white"
            initial={{ opacity: 0, x: 20 , scale:0.98, filter:"blur(10px)"}}
            animate={{ opacity: 1, x: 0 , scale:1.05, filter:"blur(0)"}}
            exit={{ opacity: 0, y: -20  , filter:"blur(10px)",scale:0.98,}}
            transition={{ duration: 0.3 }}
          >
            <div dangerouslySetInnerHTML={{ __html: messages[index] }} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
