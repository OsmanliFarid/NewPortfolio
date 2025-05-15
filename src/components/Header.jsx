import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const splitText = (text) => text.split("");

const letterAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const Header = () => {
  const text = "";
  const letters = splitText(text);

  const [visibleCount, setVisibleCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    } else {
      setVisibleCount(0);
      setIsDeleting(false);
      setStartAnimation(false);
    }
  }, [isInView]);

  useEffect(() => {
    if (!startAnimation) return;

    const speed = 80;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (visibleCount < letters.length) {
          setVisibleCount((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (visibleCount > 0) {
          setVisibleCount((prev) => prev - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [visibleCount, isDeleting, letters.length, startAnimation]);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 justify-between pt-[100px]"
      ref={ref}
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="max-h-[600.65px] bg-[url('/HeaderGrad.png')] bg-no-repeat bg-center bg-cover w-full max-w-[516.74px]">
          <div className="font-[Lato] pt-[10px] md:pt-[100px] ">
            <h1 className="text-[#858585] text-[16px] md:text-[24px] w-full text-center md:text-start">
              Hi I am
            </h1>
            <h1 className=" text-[#6F6D6C] text-[20px] md:text-[28px] flex gap-1 overflow-hidden justify-center md:justify-start">
              Osmanli Farid
            </h1>
            <h1
              className=" text-[#6F6D6C] text-[20px] md:text-[28px] flex gap-1 overflow-hidden md:justify-start"
              style={{ minWidth: "400px", whiteSpace: "nowrap" }}
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

            <h1 className="text-[#FD6F00] text-[40px] md:w-[600px] md:text-[60px] w-full text-center md:text-start">
              Frontend Developer
            </h1>

            <div className="flex justify-center md:justify-start items-center gap-10 mt-[30px] mb-[60px]">
              <a
                href="#"
                className="text-[14px] w-[93px] h-[33px] md:w-[156px] md:h-[48px] flex justify-center items-center bg-[#FD6F00] rounded-[10px] text-white"
              >
                Hire Me
              </a>
              <a
                href="/Cv.pdf"
                target="_blank"
                className="text-[14px] w-[130px] h-[33px] md:w-[209px] md:h-[48px] rounded-[10px] text-[#6F6D6C] flex justify-center items-center border border-[#6F6D6C]"
              >
                Download CV
              </a>
            </div>

            <div className="">
              <div className="w-[384px] h-[99px] md:w-[534px] md:h-[125px] bg-[rgba(27,27,27,0.6)] rounded-[10px] flex gap-5 items-center justify-around">
                <div className="ml-[15px] border-r-[3px] pr-6 border-[#9B9B9B]">
                  <h1 className="text-[#FD6F00] text-[20px] md:text-[24px]">
                    1+
                  </h1>
                  <p className="text-[#9B9B9B] text-[14px] md:text-[20px]">
                    Experiences
                  </p>
                </div>
                <div className="border-r-[3px] pr-6 border-[#9B9B9B]">
                  <h1 className="text-[#FD6F00] text-[20px] md:text-[24px]">
                    50+
                  </h1>
                  <p className="text-[#9B9B9B] text-[14px] md:text-[20px]">
                    Project done
                  </p>
                </div>
                <div className="pr-6">
                  <h1 className="text-[#FD6F00] text-[20px] md:text-[24px]">
                    1+
                  </h1>
                  <p className="text-[#9B9B9B] text-[14px] md:text-[20px]">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9 }}
      >
        <div className="flex">
          <div className="mt-[50px] md:mt-[0px] w-[382.99px] h-[382.99px] md:h-[618px] bg-[url('/HeaderGrad2.png')] bg-no-repeat bg-center bg-cover md:w-[618px]">
            <div className="flex justify-center items-center pt-[30px]">
              <img
                src="/man.png"
                alt="Man"
                className="w-[320px] md:w-[520px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
