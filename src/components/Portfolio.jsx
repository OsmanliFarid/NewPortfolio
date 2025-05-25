import { div, h1 } from "framer-motion/client";
import { a } from "framer-motion/m";
import { useState } from "react";

const Portfolio = () => {
  let Port = [
    {
      id: 1,
      title: "All",
      Git: [
        {
          id: 6,
          img: "./public/vercel1.png",
          title: "https://school-figma-task5555.vercel.app/",
          desc: "task3",
        },
        {
          id: 7,
          title: "https://github.com/OsmanliFarid/Portfolio",
          desc: "task4",
        },
        {
          id: 8,
          title: "https://github.com/OsmanliFarid/Figma-task6",
          desc: "task5",
        },
        {
          id: 6,
          title: "https://github.com/OsmanliFarid/NewPortfolio",
          desc: "task3",
        },
        {
          id: 7,
          title: "https://github.com/OsmanliFarid/Portfolio",
          desc: "task4",
        },
        {
          id: 8,
          title: "https://github.com/OsmanliFarid/Figma-task6",
          desc: "task5",
        },
        {
          id: 6,
          title: "https://github.com/OsmanliFarid/NewPortfolio",
          desc: "task3",
        },
        {
          id: 7,
          title: "https://github.com/OsmanliFarid/Portfolio",
          desc: "task4",
        },
        {
          id: 8,
          title: "https://github.com/OsmanliFarid/Figma-task6",
          desc: "task5",
        },
      ],
    },
    {
      id: 2,
      title: "Website design",
      Git: [
        {
          id: 9,
          title: "https://github.com/OsmanliFarid/NewPortfolio",
          desc: "task2",
        },
        {
          id: 10,
          title: "https://github.com/OsmanliFarid/Portfolio",
          desc: "task",
        },
      ],
    },
    {
      id: 3,
      title: "Task",
      Git: [
        {
          id: 6,
          title: "https://github.com/OsmanliFarid/NewPortfolio",
          desc: "task3",
        },
      ],
    },
    {
      id: 4,
      title: "Quiz",
      Git: [
        {
          id: 6,
          title: "https://github.com/OsmanliFarid/NewPortfolio",
          desc: "task3",
        },
        {
          id: 7,
          title: "https://github.com/OsmanliFarid/Portfolio",
          desc: "task4",
        },
        {
          id: 8,
          title: "https://github.com/OsmanliFarid/Figma-task6",
          desc: "task5",
        },
      ],
    },
    {
      id: 5,
      title: "Javascript",
      Git: [
        {
          id: 6,
          title: "https://github.com/OsmanliFarid/NewPortfolio",
          desc: "task3",
        },
        {
          id: 7,
          title: "https://github.com/OsmanliFarid/Portfolio",
          desc: "task4",
        },
      ],
    },
  ];
  const [active, Setactive] = useState("");
  const [git, setgit] = useState([]);
  const Show = (id) => {
    let a = id;
    Setactive(a);
    const selected = Port.find((item) => item.id === id);
    if (selected && selected.Git) {
      setgit(selected.Git);
    } else {
      setgit([]);
    }
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
              <>
                <h1
                  key={id}
                  className={`${
                    id === active
                      ? "bg-[#FD6F00] p-[15px_30px] rounded-2xl"
                      : "p-[15px_30px] bg-[#252525] rounded-2xl"
                  }`}
                  onClick={() => Show(id)}
                >
                  {title}
                </h1>
              </>
            );
          })}
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-[50px] h-full">
            {git.map((item) => {
              return (
                <>
                  <div className="w-[425px] h-[285px] rounded-2xl bg-red-500">
                    <div>
                      <a href={item.title}>
                        <img
                          src={item.img}
                          alt=""
                          className="w-[425px] h-[285px]"
                        />
                      </a>
                    </div>
                    <div className="flex items-end mt-[-23px] h-full">
                      <div className="bg-[#959595]">
                        <h1 className="w-[415px]">{item.desc}</h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
