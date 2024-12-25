import ToggleButton from "../features/ToggleButton";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import NavigationButton from "../features/NavigationButton";
import { useNavigate } from "react-router-dom";
const Info = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen  text-white "
      style={{
        overflow: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        backgroundImage: `
        url("../assets/images/bg.jpg"),
        linear-gradient(
          225deg,
          rgba(0, 0, 30, 0.9) 70%,
          rgba(20, 20, 40, 0.8) 90%,
          rgba(40, 40, 60, 0.9) 100%
        )
      `,
        backgroundBlendMode: "soft-light, normal",
        filter:
          "contrast(140%) brightness(85%) saturate(85%) hue-rotate(-10deg)",
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
        <ToggleButton currentState={"info"} />
        <div className="flex top-0 right-0 justify-end mt-6 mr-4 text-white gap-3 fixed ">
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

      {/* Main Section / About me Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-20 flex flex-grow px-8 justify-center items-center "
      >
        <div className="flex flex-grow-0 gap-12 ">
          <motion.div>
            <h2 className="text-xl font-serif mb-4 ml-80 flex text-gray-100 gap-2 shadow-redglow w-[800px]">
              <GoDotFill size={24} />
              About Me
            </h2>
            <div className=" ml-80 mt-6  text-[42px] font-[san-serif] font-extrabold text-[#f2f2f2] box-border inline-block w-[900px]">
              I'm enthusiastic about creating extraordinary applications that{" "}
              <i className="shadow-lg"> empowers individuals</i>
            </div>
            <h2 className="text-lg font-serif mb-4 mt-14 ml-80 flex text-gray-100 gap-2 shadow-redglow w-[600px]">
              <GoDotFill size={24} />
              My Background in Engineering
            </h2>
            <div className=" ml-80 mt-6  text-[20px] font-extralight  text-[#f2f2f2] box-border inline-block w-[580px]  ">
              In Dec of 2024, I graduated from Engineering college at the
              Rashtrasant Tukadoji Maharaj Nagpur University.<br></br> I was
              deeply intrigued by the concepts of modularity and adaptability —
              how technology and code can evolve to meet the ever-changing needs
              of humanity
            </div>

            <h2 className="text-lg font-serif mb-4 mt-14 ml-80 flex text-gray-100 gap-2 shadow-redglow w-[500px]">
              <GoDotFill size={24} />
              In my spare time,
            </h2>
            <div className=" ml-80 mt-6  text-[20px] font-extralight text-[#f2f2f2] box-border inline-block w-[480px]  ">
              When I'm not coding, I enjoy studying football strategies,
              watching FC Barcelona matches and watch lots of movies.
              <br></br>Other than that, you'll find me playing football and
              cricket, gaming, and trying to get my hands on the latest tech
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="mt-20 px-8 flex flex-col md:px-16 pb-8 overflow-hidden"
      >
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col justify-center  md:flex-row  items-center gap-6">
            <div className="flex gap-6">
              <div className="text-lg font-bold">Connect with me</div>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:adityardolas@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <MdEmail size={34} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/aditya-dolas-dev"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <IoLogoGithub size={34} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <CiLinkedin size={34} />
              </motion.a>
            </div>
            <p className="text-sm text-[silver]">
              © 2024 Aditya Dolas. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default Info;
