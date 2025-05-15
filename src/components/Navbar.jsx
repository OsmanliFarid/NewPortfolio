const Navbar = () => {
  const Links = [
    { id: 1, href: "./index.html", title: "Home" },
    { id: 2, href: "#Service", title: "Services" },
    { id: 3, href: "#", title: "About me" },
    { id: 4, href: "#", title: "Portfolio" },
    { id: 5, href: "#", title: "Contact me" },
  ];
  return (
    <>
      <div className="grid grid-cols-3 h-[120px] items-center">
        <div className="Logo">
          <img src="/public/Logo.png" alt="" />
        </div>
        <div className="Links flex gap-[30px] justify-center">
          {Links.map(({ href, id, title }, index) => {
            return (
              <a href="">
                {title === "Home" ? (
                  <a
                    className="text-[#FD6F00] "
                    key={index}
                    href="./index.html"
                  >
                    {title}
                  </a>
                ) : (
                  <a
                    className="text-[#858585] font-[500] font-[Lato] "
                    key={index}
                    href={href}
                  >
                    {title}
                  </a>
                )}
              </a>
            );
          })}
        </div>
        <div className="grid justify-end">
          <div className="">
            <a
              href="#"
              className="bg-[#FD6F00] p-[10px_35px] rounded-[10px] font-[Lato] text-[#fff]"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
