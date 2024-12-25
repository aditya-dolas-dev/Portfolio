import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const ToggleButton = ({ currentState }) => {
  const [selected, setSelected] = useState(currentState); // Correctly set initial state
  const navigate = useNavigate();
  const location = useLocation();

  // Keep state in sync with the URL path
  useEffect(() => {
    if (location.pathname.includes("info")) {
      setSelected("info");
    } else if (location.pathname.includes("work")) {
      setSelected("work");
    }
  }, [location.pathname]);

  return (
    <div className="flex-col items-center bg-transparent inline-flex h-[100px] w-[300px] ml-[600px] mb-[15px] mt-2 fixed">
      <div className="relative flex justify-between bg-gray-800 rounded-full p-1 w-[202px] h-[68px] border border-[silver] mt-1 mb-2">
        {/* Toggle Background Animation */}
        <motion.div
          className="absolute bg-gray-600 rounded-full h-14 w-24 border border-[silver] gap-2"
          layout
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          animate={{
            x: selected === "work" ? 0 : 96,
          }}
        ></motion.div>

        {/* Work Button */}
        <button
          className={`z-10 flex-1 text-center font-medium transition shadow-custom ${
            selected === "work" ? "text-white" : "text-white"
          }`}
          onClick={() => {
            setSelected("work");
            navigate("/explore");
          }}
        >
          Work
        </button>

        {/* Info Button */}
        <button
          className={`z-10 flex-1 text-center font-medium transition shadow-custom ${
            selected === "info" ? "text-white" : "text-white"
          }`}
          onClick={() => {
            setSelected("info");
            navigate("/explore/info");
          }}
        >
          Info
        </button>
      </div>
    </div>
  );
};
export default ToggleButton;
