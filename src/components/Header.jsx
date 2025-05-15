import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const splitText = (text) => text.split("");

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Header = () => {
  const text = "Osmanli Farid";
  const letters = splitText(text);

  const [visibleCount, setVisibleCount] = useState(0); // Neçə hərf görünür
  const [isDeleting, setIsDeleting] = useState(false); // Yazılır yoxsa silinir

  useEffect(() => {
    const speed = 80; // Hərf başına animasiya intervalı

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Yazma prosesi
        if (visibleCount < letters.length) {
          setVisibleCount(visibleCount + 1);
        } else {
          // Yazı tam görünəndən sonra silməyə başla
          setTimeout(() => setIsDeleting(true), 1000); // 1 saniyə dayanır tam yazıda
        }
      } else {
        // Silmə prosesi
        if (visibleCount > 0) {
          setVisibleCount(visibleCount - 1);
        } else {
          // Tam silindikdən sonra yenidən yazmağa başla
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [visibleCount, isDeleting, letters.length]);

  return (
    <div className="flex justify-between mt-[-10px]">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-[600.65px] bg-[url('/HeaderGrad.png')] bg-no-repeat bg-center bg-cover w-[516.74px]">
          <div className="font-[Lato] pt-[100px]">
            <h1 className="text-[#858585] text-[24px]">Hi I am</h1>

            <h1
              className="text-[#6F6D6C] text-[28px] flex gap-1 overflow-hidden"
              style={{ minWidth: "400px", whiteSpace: "nowrap" }} // Yeri qorumaq üçün
            >
              <AnimatePresence>
                {letters.slice(0, visibleCount).map((char, index) => (
                  <motion.span
                    key={char + index}
                    variants={letterAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </AnimatePresence>
            </h1>

            <h1 className="text-[#FD6F00] text-[60px] w-[600px]">
              Frontend Developer
            </h1>

            {/* Digər hissələr unchanged */}
            <div className="flex items-center gap-10 mt-[30px] mb-[60px]">
              <a
                href="#"
                className="w-[156px] h-[48px] flex justify-center items-center bg-[#FD6F00] rounded-[10px] text-white"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="w-[209px] h-[48px] rounded-[10px] text-[#6F6D6C] flex justify-center items-center border border-[#6F6D6C]"
              >
                Download CV
              </a>
            </div>

            <div className="w-[534px] h-[125px] bg-[rgba(27,27,27,0.6)] rounded-[10px] flex gap-5 items-center justify-around">
              <div className="ml-[15px] border-r-[3px] pr-6 border-[#9B9B9B] h-[80px]">
                <h1 className="text-[#FD6F00] text-[24px]">1+</h1>
                <p className="text-[#9B9B9B] text-[20px]">Experiences</p>
              </div>
              <div className="border-r-[3px] pr-6 border-[#9B9B9B] h-[80px]">
                <h1 className="text-[#FD6F00] text-[24px]">50+</h1>
                <p className="text-[#9B9B9B] text-[20px]">Project done</p>
              </div>
              <div className="pr-6">
                <h1 className="text-[#FD6F00] text-[24px]">1+</h1>
                <p className="text-[#9B9B9B] text-[20px]">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="h-[618px] bg-[url('/HeaderGrad2.png')] bg-no-repeat bg-center bg-cover w-[618px]">
          <div className="flex justify-center items-center pt-[30px]">
            <img src="/man.png" alt="Man" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
