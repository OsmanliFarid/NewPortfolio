import { motion } from "framer-motion";

const Services = () => {
  let Service = [
    {
      id: 1,
      icon: "fas fa-code",
      title: "Frontend Development",
      desc: "Modern texnologiyalardan istifadə edərək sürətli, cavabdeh (responsive) və istifadəsi asan veb interfeyslər hazırlayıram.",
    },
    {
      id: 2,
      icon: "fas fa-pencil-ruler",
      title: "Figma'dan Kodlaşdırma",
      desc: "Verilmiş Figma dizaynlarını piksel dəqiqliyi ilə HTML və CSS vasitəsilə funksional veb səhifələrə çevirirəm.",
    },
    {
      id: 3,
      icon: "fas fa-mobile-alt",
      title: "Responsive Dizayn",
      desc: "Veb saytların mobil, tablet və desktop versiyalarını uyğunlaşdırıram ki, hər cihazda gözəl görünsün.",
    },
    {
      id: 4,
      icon: "fas fa-sync-alt",
      title: "Website Redesign",
      desc: "Köhnə saytları yenidən dizayn edərək daha müasir və interaktiv hala gətirirəm.",
    },
    {
      id: 5,
      icon: "fab fa-html5",
      title: "HTML / CSS Kodlaşdırma",
      desc: "Figma və ya dizayn fayllarına əsaslanaraq təmiz və strukturlaşdırılmış HTML/CSS kodları yazıram.",
    },
    {
      id: 6,
      icon: "fas fa-rocket",
      title: "Performance Optimization",
      desc: "Saytların yüklənmə sürətini və performansını artırmaq üçün optimizasiya işləri aparıram.",
    },
  ];

  return (
    <div className=" font-[Lato]">
      <div className="mt-[130px]">
        <h1
          className="text-center text-[24px] md:text-[40px] text-[#fff]"
          id="Service"
        >
          Services
        </h1>
        <p className="text-center text-[#858585] mt-[10px] mb-[80px]">
          Aşağıda təklif etdiyim xidmətlərlə layihənizi daha funksional və
          estetik hala gətirə bilərəm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-0 gap-y-10">
        {Service.map(({ id, icon, title, desc }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.4 }}
            className="w-[370px] h-[230px] md:w-[399.67px] md:h-[322px] bg-[#1B1B1B] rounded-[20px] text-center"
          >
            <i
              className={`${icon} text-[#FD6F00] text-[28px] md:text-[70px] mt-[30px]`}
            ></i>
            <h1 className="text-[#FD6F00] text-[20px] md:text-[24px] p-[15px_0px_10px_0px] md:p-[25px_0px]">
              {title}
            </h1>
            <p className="text-[#858585] w-[339px] mt-[10px] m-[auto] leading-[190%]">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
