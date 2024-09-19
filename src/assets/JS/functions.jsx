import { motion } from "framer-motion"

export const renderProjects = (projects, context) => {
   let prevColor = getColor();
   return projects.map((project, index) => {
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
                     const color = getColor(prevColor);
                     prevColor = color;
                     return (
                        <p 
                           key={"tech" + tech + i} 
                           className="font-bold text-[12px] p-[5px] rounded-[5px] text-center"
                           style={{
                              backgroundColor: color,
                              boxShadow: `0 0 3px 1px ${color}`
                           }}
                        >
                           {tech}
                        </p>
                     )
                  })}
               </div>
               <p>{project.description}</p>
               {project?.link && 
                  <div className="flex max-lg:justify-center mt-[10px]">
                     <button className="buttonGlow dark:border-[#FFFFFF80]" type="button" >
                        <a 
                           className="px-[0.5em] py-[0.5em] text-[0.9em] w-full h-full"
                           href={project.link}
                           target="_blank"
                           rel="external"
                        >
                        {context.lang === "es" ? "VISITAR" : "VISIT"}
                        </a>
                     </button>
                  </div>
               }
            </div>
            {context.lgWidth && (index % 2 != 0) && <img className="scale-x-[1.2] scale-y-[1.3] lg:w-[50%]" src={project.image} alt={project.name} />}
         </motion.div>
      )
   });
}

export const absoluteDistance = (element, axis) => {
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
   let RGBcolor = 'rgb(';
   let colorFragment = Math.floor(Math.random() * 256).toString();
   for (let i = 0; i < 3; i++) {
      if (i != 2) RGBcolor += colorFragment + ', ';
      else RGBcolor += colorFragment + ')';
      switch (true) {
         case Number(colorFragment) < 100:
            colorFragment = Math.floor(Math.random() * (200 - 101 + 1) + 101).toString();
            break;
         case Number(colorFragment) >= 100 && Number(colorFragment) <= 200:
            colorFragment = Math.floor(Math.random() * (255 - 201 + 1) + 201).toString();
            break;
         case Number(colorFragment) > 200:
            colorFragment = Math.floor(Math.random() * 100).toString();
            break;
      }
   }
   console.log(RGBcolor);
   return RGBcolor;
};

export const getColor = (prev = null) => {
   const colors = ["#3E619B", "#EA4B4C", "#42506B", "#FFBE00"];
   let selectedColor = prev;
   while (prev === selectedColor) {
      selectedColor = colors[Math.floor(Math.random() * colors.length)];;
   }
   return selectedColor;
}

export const calcDistance = (element, from) => {
   if (!element) return null;
   const rect = element.getBoundingClientRect();
   const offset = from === "right" ? innerWidth - rect.right : rect.left - innerWidth;
   return offset;
}