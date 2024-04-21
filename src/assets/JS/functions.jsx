import { motion } from "framer-motion"
import { Fragment } from "react";

export const renderProjects = (projects, lang, lgWidth) => {
   return projects.map((project, index) => {
      const selectedColors = [];
      return (
         <Fragment key={project.name + index}>
            {lgWidth ? (index % 2 == 0) && <img className="scale-x-[1.2] scale-y-[1.3] lg:w-[50%]" src={project.image} alt={project.name} /> : <img className="scale-x-[1.4] scale-y-[1.5] lg:w-[50%]" src={project.image} alt={project.name} />}
            <div className="flex flex-col gap-[15px]">
               <h1 className="font-dela text-[20px] text-[#FFBE00]">{project.name}</h1>
               <div className="flex flex-wrap gap-[5px]">
                  {project.technologies?.length && project.technologies.map((tech, i) => {
                     const number = Math.random();
                     if (number < 0.33 && selectedColors[selectedColors.length - 1] !== "bg-[#3E619B]") {
                        selectedColors.push("bg-[#3E619B]");
                     } else if (number < 0.66 && selectedColors[selectedColors.length - 1] !== "bg-[#EA4B4C]") {
                        selectedColors.push("bg-[#EA4B4C]");
                     } else if (selectedColors[selectedColors.length - 1] !== "bg-[#42506B]") {
                        selectedColors.push("bg-[#42506B]");
                     } else {
                        selectedColors.push("bg-[#FFBE00]");
                     }
                     return <p key={"tech" + tech + i} className={`${selectedColors[i]} font-bold text-[12px] p-[5px] rounded-[5px] text-center`}>{tech}</p>
                  })}
               </div>
               <p>{project.description}</p>
               <div className="flex max-lg:justify-center mt-[10px]">
                  <motion.a 
                     className="bg-navbarDesktop w-fit p-[0.5em] rounded-[8px] border border-white appearance-none font-bold"
                     href={project.link}
                     target="_blank"
                     rel="external"
                     whileTap={{ scale: 0.9 }}
                  >
                  {lang === "es" ? "Visitar web" : "Visit website"}
                  </motion.a>
               </div>
            </div>
            {lgWidth && (index % 2 != 0) && <img className="scale-x-[1.4] scale-y-[1.5] lg:w-[50%]" src={project.image} alt={project.name} />}
         </Fragment>
      )
   });
}