import React from "react";

import Button from "../features/Button";

import NavigationButton from "../features/NavigationButton";
import { motion } from "framer-motion";
import Explore from "../pages/Explore";
import { div } from "framer-motion/client";

const variants = {
  hidden: { opacity: 0, scale: 1 },
  visible: { opacity: 1, scale: 1 },
};

const LandingPage = () => {
  return (
    <div>
      <motion.div className="bg-black min-h-screen flex flex-col overflow-hidden h-[100vh]">
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 4, delay: 2 }}
          className="flex justify-end mt-6 mr-4 text-white gap-3 "
        >
          <NavigationButton
            label={"LinkedIn"}
            link={"https://www.linkedin.com"}
            background={"bg-black"}
            hoverEffect={"hover:bg-gray-800"}
          />
          <NavigationButton
            label={"Github"}
            link={"https://github.com/aditya-dolas-dev?tab=repositories"}
            background={"bg-black"}
            hoverEffect={"hover:bg-gray-800"}
          />
          <NavigationButton
            label={"Resume"}
            link={
              "https://www.dropbox.com/scl/fi/90tqw8d13j6feh8xw9oyn/ADITYADOLAS-TEMPLATE-RESUME-ATS.docx?rlkey=9869g5utjvny39gce1t45eut8&st=saeyig2p&dl=0"
            }
            background={"bg-black"}
            hoverEffect={"hover:bg-gray-800"}
          />
        </motion.div>

        <motion.div className="flex flex-col justify-center items-center flex-grow mb-8">
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 4, delay: 0.7 }}
          >
            <h1 className="font-sans font-bold text-6xl mb-10 bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent overflow-hidden tracking-[0.4em]">
              ADITYA DOLAS{" "}
            </h1>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 4, delay: 0.7 }}
              className="flex font-serif text-xl justify-center mt-9 text-gray-200"
            >
              <h3>Full Stack Developer</h3>
            </motion.div>
          </motion.div>

          <Button />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
