import { useState, useMemo, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import ContextProps from '../assets/JS/createContext';

export default function Carousel({ skills, slideClasses, children, startIndex, endIndex, cancelButtons }) {
   const { context } = useContext(ContextProps);
   const [slider, setSlider] = useState({
      start: startIndex || 0,
      end: context.lgWidth ? (endIndex || 3) : 1,
      direction: "",
      currentSlide: 0
   });

   useEffect(() => {
      setSlider((slider) => ({ ...slider, end: context.lgWidth ? (endIndex || 3) : 1 }))
   }, [context.lgWidth]);

   let startXCoord;

   const id = useMemo(() => (
      (Date.now() / 2) + Math.round(Math.random() * 1000)
   ), []);

   const animate = {
      right: { x: window.innerWidth, scale: 0.1 },
      left: { x: -window.innerWidth, scale: 0.1 }
   };

   const carouselElements = () => {
      if (!skills && !children) return;
      if (!children) {
         const selectedColors = [];
         const svgs = ["LENGUAJES.svg", "FRAMEWORKS.svg", "CMS.svg", "DB.svg", "TOOLS.svg"];
         return Object.entries(skills).slice(slider.start, slider.end).map(([key, value], index) => (
            <motion.div
               layout
               className={slideClasses}
               key={"key" + key + index}
               transition={{ delay: index * 0.1 }}
               initial={slider.direction === "right" ? animate.right : animate.left}
               animate={{ x: 0, scale: 1 }}
               exit={slider.direction === "left" ? animate.right : animate.left}
            >
               <div className="flex flex-col gap-1">
                  <h3>{key}:</h3>
                  <div className="flex flex-wrap gap-[5px]">
                     {Array.isArray(value) && value.map((skill, i) => {
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
                        return <p key={"skill" + skill + i} className={`${selectedColors[i]} font-bold text-[12px] p-[5px] rounded-[5px] text-center`}>{skill}</p>
                     })}
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="animate-pulse bg-picture p-[20%] lg:p-[20px] shadow-button w-full h-[82px] rounded-[8px] ">
                     <img
                        className="w-full h-full scale-[1.2] lg:scale-[1.5]"
                        src={`./src/assets/SVG/${svgs.slice(slider.start, slider.end)[index]}`}
                        alt="image/svg+xml"
                        onLoad={e => e.target.parentElement.classList.remove("animate-pulse")}
                     />
                  </div>
               </div>
            </motion.div>
         ));
      } else {
         return children.slice(slider.start, slider.end).map((value, i) => (
            <motion.div
               layout
               className={slideClasses}
               key={"children" + Date.now() + i}
               initial={slider.direction === "right" ? animate.right : animate.left}
               animate={{ x: 0, scale: 1 }}
               exit={slider.direction === "left" ? animate.right : animate.left}
            >
               {value}
            </motion.div>
         ));
      }
   };

   const renderedElements = useMemo(() => carouselElements(), [slider, skills, children, context.lgWidth]);

   const carouselButtons = () => {
      if (!skills && !children) return;
      const totalElements = children ? children.length : Object.keys(skills).length;
      const slidesNum = Math.ceil(totalElements / (slider.end - slider.start));
      const elementsPerSlide = slider.end - slider.start;
      const slideInputsList = []
      for (let i = 0; i < slidesNum; i++) {
         slideInputsList.push(
            <motion.input
               layout
               key={"input" + Date.now() + i}
               name={"slideDots" + id}
               className={` w-[10px] h-[10px] rounded-full enabled:cursor-pointer`}
               initial={{ backgroundColor: "#D9D9D94D", scale: 1 }}
               animate={slider.currentSlide === i ? { backgroundColor: "#D9D9D9", scale: 1.4 } : { backgroundColor: "#D9D9D94D", scale: 1 }}
               disabled={slider.currentSlide === i}
               type="button"
               onClick={e => {
                  e.stopPropagation();
                  const newStart = elementsPerSlide * i;
                  const newEnd = newStart + elementsPerSlide;
                  const newSlide = i;
                  let newDirection;
                  if (newSlide > slider.currentSlide) {
                     newDirection = "right";
                  } else {
                     newDirection = "left";
                  }
                  setSlider(slider => ({ ...slider, start: newStart, end: newEnd, direction: newDirection, currentSlide: newSlide }));
               }}
            />
         );
      }
      return slideInputsList;
   }

   return (
      <div
         className="flex flex-col relative w-full pb-[60px] gap-[30px] lg:gap-[60px] items-center px-[5%]"
         onTouchStart={e => {
            e.stopPropagation();
            startXCoord = e.touches[0].clientX
         }}
         onTouchEnd={e => {
            e.stopPropagation();
            let inputsList = document.getElementsByName(`slideDots${id}`);
            let xOffset = startXCoord - e.changedTouches[0].clientX;
            if (Math.abs(xOffset) > (window.innerWidth / 4)) {
               if (Math.sign(xOffset) === 1) {
                  if (slider.currentSlide === (inputsList.length - 1)) inputsList[0].click();
                  else inputsList[slider.currentSlide + 1].click();
               } else {
                  if (slider.currentSlide === 0) inputsList[inputsList.length - 1].click();
                  else inputsList[slider.currentSlide - 1].click();
               }
            }
         }}
      >
         <div className={`flex ${skills ? 'max-lg:flex-col' : 'flex-col lg:gap-[20vh]'} gap-[30px]`}>
            <AnimatePresence initial={false} mode='popLayout' >
               {renderedElements}
            </AnimatePresence>
         </div>
         {!cancelButtons &&
            <motion.div
               layout
               className="flex gap-[10px]"
            >
               {carouselButtons()}
            </motion.div>
         }
      </div>
   )
}