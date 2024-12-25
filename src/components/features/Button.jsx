import React from "react";
import { useNavigate } from "react-router-dom";
import { delay, motion } from "framer-motion";

const Button = () => {
  const navigate = useNavigate();

  const variants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1 },
  };

  function explorePage() {
    navigate("/explore");
  }
  return (
    <div className="flex justify-center items-center mt-72 fixed ">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 3, delay: 3.1 }}
        className="inline-flex items-center py-4 px-8  text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition shadow-custom p-4 border border-[silver]"
      >
        <button onClick={explorePage}>Explore</button>
      </motion.div>
    </div>
  );
};

export default Button;
