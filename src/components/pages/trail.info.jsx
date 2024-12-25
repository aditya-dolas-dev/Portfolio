import ToggleButton from "../features/ToggleButton";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Info = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-20 px-8 md:px-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
        <motion.h1
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-serif"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        >
          Hello, I'm Aditya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl font-light"
        >
          Passionate Full Stack Developer crafting digital experiences through
          code and creativity
        </motion.p>
      </motion.section>

      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-20 px-8 md:px-16"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              As a Full Stack Developer, I thrive on turning complex problems
              into elegant solutions. With a strong foundation in both front-end
              and back-end development, I create seamless digital experiences
              that make a difference.
            </p>
            <p>
              My journey in technology is driven by continuous learning and
              innovation. I'm passionate about clean code, user-centric design,
              and staying ahead of industry trends. When I'm not coding, you'll
              find me contributing to open-source projects and mentoring
              aspiring developers.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-20 px-8 md:px-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills</h2>
            <p className="text-gray-300">
              Specialized in modern web technologies including React, Node.js,
              and cloud platforms. Committed to writing clean, efficient code
              and building scalable solutions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Experience
            </h2>
            <p className="text-gray-300">
              Building innovative solutions and contributing to open source
              projects. Focused on creating impactful digital experiences.
            </p>
          </motion.div>
        </div>
      </motion.section>
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-20 px-8 md:px-16 pb-8"
      >
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:adityardolas@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <MdEmail />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/adityardolas"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <IoLogoGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/adityardolas"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <CiLinkedin />
              </motion.a>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 Aditya Dolas. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Info;
