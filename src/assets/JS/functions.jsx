import { motion } from "framer-motion"

export const renderProjects = (projects, context) => {
   return projects.map((project, index) => {
      const selectedColors = [];
      return (
         <motion.div
            key={project.name + index} 
            className="max-lg:text-left gap-[50px] max-lg:pt-[30px] flex max-lg:flex-col items-center"
            initial={{ 
               x: (index % 2 == 0) ? -innerWidth / 2 : innerWidth / 2,
            }}
            whileInView={{
               x: 0,
               transition: {
                  type: "spring",
               }
            }}
         >
            {context.lgWidth ? ((index % 2 == 0) && <img className="scale-x-[1.2] scale-y-[1.3] lg:w-[50%]" src={project.image} alt={project.name} />) : <img className="scale-x-[1.4] scale-y-[1.5] lg:w-[50%]" src={project.image} alt={project.name} />}
            <div className="flex flex-col gap-[15px] lg:w-[50%]">
               <h1 className="font-dela text-[20px] text-[#012f4b] dark:text-[#FFBE00]">{project.name}</h1>
               <div className="flex flex-wrap gap-[5px]">
                  {project.technologies?.length && project.technologies.map((tech, i) => {
                     const number = Math.random();
                     if (number < 0.33 && selectedColors[selectedColors.length - 1] !== "#3E619B") {
                        selectedColors.push("#3E619B");
                     } else if (number < 0.66 && selectedColors[selectedColors.length - 1] !== "#EA4B4C") {
                        selectedColors.push("#EA4B4C");
                     } else if (selectedColors[selectedColors.length - 1] !== "#42506B") {
                        selectedColors.push("#42506B");
                     } else {
                        selectedColors.push("#FFBE00");
                     }
                     return (
                        <p 
                           key={"tech" + tech + i} 
                           className="font-bold text-[12px] p-[5px] rounded-[5px] text-center"
                           style={{
                              backgroundColor: selectedColors[i],
                              boxShadow: `0 0 3px 1px ${selectedColors[i]}`
                           }}
                        >
                           {tech}
                        </p>
                     )
                  })}
               </div>
               <p>{project.description}</p>
               <div className="flex max-lg:justify-center mt-[10px]">
                  <button className="buttonGlow dark:border-[#FFFFFF80]" type="button" >
                     <a 
                        className="px-[0.5em] py-[0.5em] text-[0.9em] w-full h-full"
                        href={project.link}
                        target="_blank"
                        rel="external"
                     >
                     {context.lang === "es" ? "VISITAR WEB" : "VISIT WEBSITE"}
                     </a>
                  </button>
               </div>
            </div>
            {context.lgWidth && (index % 2 != 0) && <img className="scale-x-[1.2] scale-y-[1.3] lg:w-[50%]" src={project.image} alt={project.name} />}
         </motion.div>
      )
   });
}

export const calcDistance = (element, axis) => {
   let distance = 0;
   while (element) {
      if (axis === "x") {
         distance += element.offsetLeft;
      } else if (axis === "y") {
         distance += element.offsetTop;
      }
      element = element.offsetParent;
   }
   return distance;
}

export const scatterCoords = (minCoord, maxCoord) => {
   const min = Number(minCoord);
   const max = Number(maxCoord);
   const randomCoord = Math.floor(Math.random() * (max - min + 1) + min);
   return randomCoord;
}

//Unused
export const colorPicker = () => {
   let HEXcolor = '#';
   for (let i = 0; i < 3; i++) {
      const colorFragment = Math.floor(Math.random() * 256).toString(16);
      HEXcolor += colorFragment.padEnd(2, colorFragment);
   }
   return HEXcolor;
};