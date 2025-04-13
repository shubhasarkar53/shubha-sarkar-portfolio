import { motion } from "framer-motion";
import mindNote from "../assets/images/mindnote.png";
import ariyas from "../assets/images/ariyas.png";
import leetcode from "../assets/images/leetcode.png";
import moonex from "../assets/images/moonex.png";
import { Github, Link } from "lucide-react";
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const projects = [
  {
    title: "MindNotes",
    tech: "React • TypeScript • Tailwind • Recoil • Motion • Node.js • MongoDB",
    description:
      "One-stop solution to organize, save, and share important links for yourself and you close ones.",
    image: mindNote,
    github: "https://github.com/shubhasarkar53/mind-note.git.io",
    live: "https://mind-note-git-io.vercel.app/",
  },
  {
    title: "Ariyas",
    tech: "React • Redux • NodeMailer • Express js • MongoDb • SCSS",
    description:
      "Empowering the local artisans for promoting their Creative Handcrafted items by providing them a feature-rich E-commerce Platform. The platform included a robust multi-vendor system with dedicated panels for Users, Admins, and Sellers, secure authentication with OTP and role-based access control, and features like product listing, order management, and real-time updates.",
    image: ariyas,
    github: "https://github.com/shubhasarkar53/Ariyas-The-Ecommerce-Project",
    live: "https://ariyas-ecom-frontend.vercel.app/",
  },
  {
    title: "Leecode Favorite page",
    tech: "React •  Tailwind CSS • Framer motion",
    description:
      "LeetCode Favorites Page bulid it from scratch, designed with best practices and scalable architecture in mind to ensure maintainability and future extensibility. Key features : Filtering based on question level , Smooth Animation , Responsive UI , Atomic Design principle implemented.",
    image: leetcode,
    github: "https://github.com/shubhasarkar53/Leetcode-Favorite-page",
    live: "https://favleet-shubha.vercel.app/",
  },
  {
    title: "Moonex",
    tech: "React •  Tailwind CSS • Framer motion",
    description: `A modern, sleek, and fully responsive landing page built with React and styled using Tailwind CSS. This project is designed to showcase best practices, including a custom-tailored color palette, reusable components, and a partial implementation of the Atomic Design Principle for maintainable and scalable code.`,
    image: moonex,
    github: "https://github.com/shubhasarkar53/moonex",
    live: "https://moonex-rho.vercel.app/",
  },
];

const ProjectCard = ({
  title,
  tech,
  description,
  image,
  github,
  live,
}: (typeof projects)[0]) => (
  <motion.div
    className="bg-white/5 rounded-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-purple-300 mb-4">{tech}</p>
      <p className="text-gray-200">{description}</p>
    </div>
    <div className="p-6 flex gap-2">
      <Btn link={github} name={"Github"}></Btn>
      <Btn link={live} name={"Live"}></Btn>
    </div>
  </motion.div>
);

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
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function Btn({ name, link }: { name: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      key={name}
      className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg font-medium border border-purple-500/30 hover:border-purple-500/50 transition-colors flex justify-between items-center gap-3"
    >
      {name}

      <div>{name == "Github" ? <Github className="w-5"/> : <Link className="w-5"/>}</div>
    </a>
  );
}

export default Projects;
