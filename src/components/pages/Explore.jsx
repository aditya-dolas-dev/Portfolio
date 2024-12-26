import React from "react";

import { motion } from "framer-motion";
import { GrProjects, GrTechnology } from "react-icons/gr";
import { useNavigate, useLocation } from "react-router-dom";
import ToggleButton from "../features/ToggleButton";
import NavigationButton from "../features/NavigationButton";

const Explore = () => {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(`/explore/${path}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col  text-white  overflow-hidden min-h-screen  "
      style={{
        backgroundImage: `
          url("../assets/images/bg.jpg"),
          linear-gradient(
            225deg,
            rgba(0, 0, 20, 0.9) 0%,
            rgba(20, 20, 40, 0.8) 50%,
            rgba(40, 40, 60, 0.9) 100%
          )
        `,
        backgroundBlendMode: "soft-light, normal",
        filter:
          "contrast(140%) brightness(85%) saturate(85%) hue-rotate(-10deg)",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div>
        <a
          onClick={() => {
            navigate("/");
          }}
          className="inline-block h-[35px] w-[150px] text-[24px] ml-3 mt-6 font-serif text-center"
        >
          Aditya Dolas <p className="text-[12px]">Fullstack developer</p>
        </a>
        <ToggleButton currentState={"work"} />
        <div className="flex justify-end mt-6 mr-4 text-white gap-3 fixed top-0 right-0">
          <NavigationButton
            label={"LinkedIn"}
            link={"https://www.linkedin.com"}
            background={"bg-transparent"}
            hoverEffect={"hover:bg-gray-500"}
          />
          <NavigationButton
            label={"Github"}
            link={"https://github.com/aditya-dolas-dev?tab=repositories"}
            background={"bg-transparent"}
            hoverEffect={"hover:bg-gray-500"}
          />
          <NavigationButton
            label={"Resume"}
            link={
              "https://www.dropbox.com/scl/fi/90tqw8d13j6feh8xw9oyn/ADITYADOLAS-TEMPLATE-RESUME-ATS.docx?rlkey=9869g5utjvny39gce1t45eut8&st=saeyig2p&dl=0"
            }
            background={"bg-transparent"}
            hoverEffect={"hover:bg-gray-500"}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 flex-grow gap-7 m-16 ">
        <div
          className="flex flex-col gap-4 p-14 border border-amber rounded-2xl items-center bg-gradient-to-r from-amber via-golden to-darkBrown shadow-lg"
          style={{
            backgroundImage: `
          url("../assets/images/dble.jpg"),
          linear-gradient(
            225deg,
            rgba(0, 0, 20, 0.9) 0%,
            rgba(20, 20, 40, 0.8) 50%,
            rgba(40, 40, 60, 0.9) 100%
          )
        `,
            backgroundBlendMode: "soft-light, normal",
            filter:
              "contrast(140%) brightness(85%) saturate(85%) hue-rotate(-10deg)",
          }}
        >
          <a
            onClick={() => navigateTo("projects")}
            className="flex justify-center items-center gap-2 tracking-[0.2em] p-[35%] border border-darkBrown rounded-2xl  bg-opacity-20  hover:shadow-2xl bg-gradient-to-r from-darkBrown via-amber to-darkBrown shadow-lg text-black  font-mono text-2xl"
          >
            <GrProjects />
            Projects
          </a>
        </div>
        <div
          className="flex flex-col gap-4 p-14 border border-amber rounded-2xl items-center bg-gradient-to-r from-darkBrown via-golden to-amber shadow-lg"
          style={{
            backgroundImage: `
          url("../assets/images/dble.jpg"),
          linear-gradient(
            225deg,
            rgba(0, 0, 20, 0.9) 0%,
            rgba(20, 20, 40, 0.8) 50%,
            rgba(40, 40, 60, 0.9) 100%
          )
        `,
            backgroundBlendMode: "soft-light, normal",
            filter:
              "contrast(140%) brightness(85%) saturate(85%) hue-rotate(-10deg)",
          }}
        >
          {" "}
          <a
            onClick={() => navigateTo("techstack")}
            className="flex justify-center items-center gap-2 tracking-[0.2em] p-[35%] border border-darkBrown rounded-2xl bg-opacity-20  hover:shadow-2xl bg-gradient-to-r from-darkBrown via-amber to-darkBrown shadow-lg text-black font-mono text-2xl"
          >
            <GrTechnology />
            TechStack
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Explore;
