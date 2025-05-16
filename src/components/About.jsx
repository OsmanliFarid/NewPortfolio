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
            Salam! Mən Osmanlı Fərid, 16 yaşım var və Frontend proqramlaşdırma
            sahəsində inkişaf edən bir gəncəm. Proqramlaşdırmaya olan həvəsim
            uşaqlıqdan başlayıb və indi bu sahədə peşəkar olmaq üçün ciddi
            çalışıram. Mənim üçün proqramlaşdırma təkcə kod yazmaq deyil, həm də
            yaratmaq, problemləri həll etmək və daim öyrənmək deməkdir. Artıq
            HTML, CSS, Git, Figma və JavaScript kimi frontend texnologiyalarında
            əsas biliklərə sahibəm və onları layihələrimdə tətbiq etməyə
            çalışıram. Hər gün yeni bacarıqlar öyrənir, mövcud biliklərimi
            təkmilləşdirirəm və praktikada istifadə etmək üçün kiçik layihələr
            üzərində işləyirəm. Mənim üçün ən vacib dəyərlərdən biri davamlı
            inkişafdır. Səhvlərimdən dərs çıxarmaq, yeni texnologiyaları kəşf
            etmək və özümü həm texniki, həm də yaradıcı sahədə daha da
            təkmilləşdirmək istəyirəm. Eyni zamanda, komandada işləmək, təcrübə
            qazanmaq və real layihələrdə iştirak etmək məqsədindəyəm. Gələcəkdə
            beynəlxalq səviyyədə tanınan və maraqlı layihələrdə iştirak edən bir
            Frontend Developer olmaq mənim əsas hədəfimdir. İnanıram ki, səbr və
            əzmlə bu hədəfə çatmaq mümkündür.
          </p>

          <div className="flex  justify-center md:justify-start">
            <motion.a
              href="/public/Cv.pdf"
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
        <div className="grid grid-cols-2 md:grid-cols-5 ml-[-15px] md:ml-[30px] gap-y-10">
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
