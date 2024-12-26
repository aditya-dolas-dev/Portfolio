import React from "react";
import { motion } from "framer-motion";
const LoadingAnimation = () => {
  return (
    <div>
      <div className="flex  justify-center items-center mt-96 space-x-2 ">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 0.6,
              delay: i * 0.2, // Delay to create staggered effect
            }}
            className="w-5 h-14 bg-black rounded-full "
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">Just a moment</div>
    </div>
  );
};

export default LoadingAnimation;
