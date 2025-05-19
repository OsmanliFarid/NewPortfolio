import { h1 } from "framer-motion/client";
import { useState } from "react";

const Portfolio = () => {
  let Port = [
    { id: 1, title: "All" },
    { id: 2, title: "Website design" },
    { id: 3, title: "Task" },
    { id: 4, title: "Quiz" },
    { id: 5, title: "Javascript" },
  ];
  const [active, Setactive] = useState(1);
  const Show = (id) => {
    Setactive(false);
  };
  return (
    <>
      <div className="font-[Lato]">
        <h1 className="text-[40px] text-[#fff] text-center mt-[100px]">
          Portfolio
        </h1>
        <div className="flex gap-5 justify-center mt-[50px] text-[#fff]">
          {Port?.map(({ id, title }) => {
            return (
              <h1
                key={id}
                className={`${
                  id === active
                    ? "bg-[#FD6F00] p-[15px_30px] rounded-2xl"
                    : "p-[15px_30px] bg-[#252525] rounded-2xl"
                }`}
                onClick={() => Setactive(id)}
              >
                {title}
              </h1>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Portfolio;
