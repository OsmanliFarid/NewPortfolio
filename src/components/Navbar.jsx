import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const Links = [
    { id: 1, href: "./index.html", title: "Home" },
    { id: 2, href: "#Service", title: "Services" },
    { id: 3, href: "#About", title: "About me" },
    { id: 4, href: "#", title: "Portfolio" },
    { id: 5, href: "#", title: "Contact me" },
  ];

  const [active, SetActive] = useState(1);
  const [Bars, SetBars] = useState(false);

  const Show = () => {
    SetBars(!Bars);
  };

  return (
    <>
      <div className="grid grid-cols-3 h-[120px] items-center" id="Index">
        <div className="Bars md:hidden">
          <FaBars className="text-[24px]" onClick={Show} />
        </div>
        <div className="Logo" id="Logo">
          <a href="./index.html">
            <img src="/Logo.png" alt="" />
          </a>
        </div>

        <div className="Links hidden gap-[30px] justify-center md:flex">
          {Links.map(({ href, id, title }) => (
            <a
              key={id}
              className={id === active ? "text-[#FD6F00]" : "text-[#858585]"}
              href={href}
              onClick={() => SetActive(id)}
            >
              {title}
            </a>
          ))}
        </div>

        <div className="grid justify-end">
          <a
            href="#"
            className="bg-[#FD6F00] p-[5px_20px] rounded-[10px] font-[Lato] text-[#fff]"
          >
            Hire Me
          </a>
        </div>

        {Bars && (
          <div className="fixed z-3 flex flex-col w-full text-center p-[10px_0px] bg-[#fff] right-0 bottom-0 md:hidden">
            {Links.map(({ href, id, title }) => (
              <a
                key={id}
                className={id === active ? "text-[#FD6F00]" : "text-[#858585]"}
                href={href}
                onClick={() => SetActive(id)}
              >
                {title}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
