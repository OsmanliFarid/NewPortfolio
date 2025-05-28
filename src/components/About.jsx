import { LuDownload } from "react-icons/lu";
import { FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      name: "HTML",
      level: 100,
      icon: <FaHtml5 size={45} color="#E44D26" />,
      color:
        "border-t-[#E46400] border-r-[#E46400] border-l-[#E46400] border-b-[#E46400]",
    },
    {
      name: "CSS",
      level: 100,
      icon: <FaCss3Alt size={45} color="#264DE4" />,
      color:
        "border-t-[#E46400] border-r-[#E46400] border-l-[#E46400] border-b-[#E46400]",
    },
    {
      name: "JavaScript",
      level: 75,
      icon: <FaJs size={45} color="#F0DB4F" />,
      color: "border-t-[#E46400] border-l-[#E46400] border-b-[#E46400]",
    },
    {
      name: "Git",
      level: 50,
      icon: <FaGitAlt size={45} color="#F1502F" />,
      color: "border-t-[#E46400] border-l-[#E46400]",
    },
    {
      name: "React",
      level: 25,
      icon: <FaReact size={45} color="#61DBFB" />,
      color: "border-l-[#E46400]",
    },
  ];

  return (
    <motion.div
      className="Container font-[Lato]"
      id="About"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-center mt-[180px] text-[40px] text-[#fff] mb-[130px]">
        About Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <motion.div
          className="w-[350px] h-[350px] md:h-[618px] bg-[url('/HeaderGrad2.png')] bg-no-repeat bg-center bg-cover md:w-[618px] p-[70px_0px] m-[30px_0px] md:p-0 md:m-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex justify-center items-center mt-[-15px] pt-[0px] md:pt-[30px]">
            <img
              src="/man.png"
              alt="Man"
              className="w-[260px] h-[260px] md:w-[520px] md:h-[520px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-[#858585] leading-[200%] tracking-[0.5px] max-w-[631px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            minus sit, enim necessitatibus molestiae eos aspernatur consectetur
            non impedit labore saepe sunt deserunt quibusdam blanditiis
            accusantium magni officiis qui fugit. Ab eveniet, repellendus, quia
            ipsum fugiat tempore ut necessitatibus sed nobis dolorum facere.
            Laborum, eos? Explicabo repellendus nam totam sapiente natus
            temporibus quo suscipit accusantium, quos facere sit ipsum
            cupiditate! Aut earum molestias aperiam labore nam deleniti incidunt
            veniam quia, ea itaque eos cumque unde voluptate ullam maxime
            suscipit corporis voluptates necessitatibus sint culpa, harum sunt
            exercitationem tempora rem! Delectus. Placeat, quis. Unde libero
            beatae pariatur? Eaque, porro voluptates nam quasi magnam ipsum
            corporis exercitationem sint consequatur distinctio numquam
            temporibus sit voluptatibus ipsa quisquam quas ratione iste
            consectetur, inventore mollitia. Quam commodi consectetur,
            recusandae nulla numquam earum neque. Facere tempora eius quam rem
            commodi sequi labore repudiandae sit nisi omnis molestiae natus
            quibusdam, modi ipsam, animi minus incidunt autem. Pariatur.
          </p>

          <div className="flex  justify-center md:justify-start">
            <motion.a
              href="#"
              target="_blank"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              className="w-[224px] h-[48px] bg-[#E46400] rounded-[10px] flex items-center justify-center gap-2 mt-[50px] "
            >
              <LuDownload className="w-[24px] h-[24px] text-[#fff]" />
              <h1 className="text-[#fff] text-[20px]">Download CV</h1>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="mt-[90px]">
        <div className="grid grid-cols-2 md:grid-cols-5  gap-y-10 justify-items-center">
          {skills.map(({ name, level, color, icon }, index) => {
            return (
              <motion.div
                className="w-[200px]"
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-[100px] h-[100px] rounded-[50%] border-10 ${color} flex justify-center items-center`}
                  >
                    {icon}
                  </div>
                  <h1 className="text-white mt-2">{level}%</h1>
                  <h1 className="text-white">{name}</h1>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
