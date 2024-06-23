import { useState, useMemo, useContext, useEffect, createRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from "framer-motion";
import ContextProps from '../assets/JS/createContext';
import * as imports from '../assets/JS/imports';
import { scatterCoords } from '../assets/JS/functions';

export default function Carousel({ skills, slideClasses, children, startIndex, endIndex, cancelButtons, playButton }) {
   const { context } = useContext(ContextProps);
   const [slider, setSlider] = useState({
      start: startIndex || 0,
      end: context.lgWidth ? (endIndex || 3) : 1,
      direction: "",
      currentSlide: 0
   });

   const [refs, setRefs] = useState({
      slides: [],
      buttons: [],
   });

   const [skillFeatures, setSkillFeatures] = useState({
      draggables: {},
      coords: {},
   });

   let startXCoord;

   const id = useMemo(() => uuidv4(), []);

   const animate = {
      right: { x: window.innerWidth, scale: 0.1 },
      left: { x: -window.innerWidth, scale: 0.1 }
   };

   useEffect(() => {
      console.log(skillFeatures);
   }, [skillFeatures])

   useEffect(() => {
      if (Object.values(skillFeatures.draggables).includes(false)) {
         setSlider(slider => ({ ...slider }));
      }
   }, [skillFeatures.draggables])

   useEffect(() => {
      if (!playButton) {
         setSkillFeatures(skills => {
            let resetValues = {};
            for (let key in skills.draggables) {
               resetValues[key] = true;
            }
            return {
               ...skills, draggables: resetValues
            };
         })
      }
      setSlider(slider => ({ ...slider }));
   }, [playButton])

   useEffect(() => {
      setSlider((slider) => ({ ...slider, end: context.lgWidth ? (endIndex || 3) : 1 }))
   }, [context.lgWidth]);

   useEffect(() => {
      if (skills) {
         let skillsObjCoords = {};
         for (let key in skills) {
            for (let values of skills[key]) {
               skillsObjCoords = {
                  ...skillsObjCoords,
                  [key]: {
                     ...skillsObjCoords[key],
                     [values]: {
                        x: playButton ? scatterCoords(-175, 175) + "%" : 0,
                        y: playButton ? scatterCoords(-175, 175) + "%" : 0
                     }
                  }
               };
            }
         }
         setSkillFeatures(skills => ({ ...skills, coords: skillsObjCoords }));
      }
   }, [skills, playButton]);

   const carouselElements = () => {
      if (!skills && !children) return;
      if (!children) {
         const selectedColors = [];
         const svgs = [imports.lenguajes, imports.frameworks, imports.cms, imports.db, imports.tools];
         return Object.entries(skills).slice(slider.start, slider.end).map(([key, value], index) => (
            <motion.div
               className={slideClasses}
               key={"key" + key + index}
               transition={{ delay: index * 0.1 }}
               initial={slider.direction === "right" ? animate.right : animate.left}
               animate={{ x: 0, scale: 1 }}
               exit={slider.direction === "left" ? animate.right : animate.left}
            >
               <div className="flex flex-col" ref={refs.slides[index]}>
                  <h3>{key}:</h3>
                  <div className="flex flex-wrap gap-[10px] h-full content-start" >
                     {Array.isArray(value) && value.map((skill, i) => {
                        if (skillFeatures.draggables?.[skill] === undefined) {
                           setSkillFeatures(skills => ({
                              ...skills,
                              draggables: {
                                 ...skills.draggables,
                                 [skill]: true
                              }
                           }));
                        }
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
                        return (
                           <motion.div
                              className={`relative w-fit h-fit outline-[2px] xl:outline-[3px] 2xl:outline-[4px] outline-dashed rounded-[7px]`}
                              key={"skill" + skill + i}
                              initial={{
                                 outlineColor: "#d1d5db",
                              }}
                              animate={{
                                 outlineColor: playButton ? (skillFeatures.draggables[skill] ? "#ef4444" : "#22c55e") : "#d1d5db",
                                 scale: playButton ? (skillFeatures.draggables[skill] ? 1 : [1.5, 1]) : 1,
                              }}
                           >
                              <motion.p
                                 className={`${selectedColors[i]} select-none relative z-10 font-bold text-[12px] xl:text-[14px] 2xl:text-[16px] p-[5px] cursor-grab rounded-[5px] text-center`}
                                 onTouchStart={e => e.stopPropagation()}
                                 onDragEnd={e => {
                                    if (playButton) {
                                       const thisRect = e.target.getBoundingClientRect();
                                       const parentRect = e.target.parentElement.getBoundingClientRect();
                                       const verticalFit = Math.ceil(thisRect.top) >= Math.floor(parentRect.top) && Math.floor(thisRect.bottom) <= Math.ceil(parentRect.bottom);
                                       const horizontalFit = Math.ceil(thisRect.left) >= Math.floor(parentRect.left) && Math.floor(thisRect.right) <= Math.ceil(parentRect.right);
                                       if (verticalFit && horizontalFit) {
                                          setSkillFeatures(skills => ({
                                             ...skills,
                                             draggables: {
                                                ...skills.draggables,
                                                [skill]: false
                                             }
                                          }));
                                       }
                                    }
                                 }}
                                 initial={{ x: 0, y: 0 }}
                                 animate={
                                    {
                                       x: skillFeatures.coords?.[key]?.[skill].x,
                                       y: skillFeatures.coords?.[key]?.[skill].y,
                                       transition: {
                                          type: "spring",
                                          damping: 8,
                                          stiffness: 200
                                       },
                                    }
                                 }
                                 drag={skillFeatures.draggables[skill]}
                                 whileTap={{ cursor: "grabbing" }}
                                 dragTransition={{
                                    power: 0.3,
                                 }}
                              >
                                 {skill}
                              </motion.p>
                           </motion.div>
                        )
                     })}
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <div className="animate-pulse bg-picture p-[20%] md:p-[20px] shadow-button w-full h-[60%] rounded-[8px]">
                     <img
                        className="w-full h-full max-lg:scale-[1.2]"
                        src={svgs.slice(slider.start, slider.end)[index]}
                        alt="image/svg+xml"
                        onLoad={e => e.target.parentElement.classList.remove("animate-pulse")}
                     />
                  </div>
               </div>
            </motion.div>
         ));
      } else {
         return children.slice(slider.start, slider.end).map((value, index) => (
            <motion.div
               className={slideClasses + " select-none"}
               key={"children" + uuidv4()}
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

   useEffect(() => {
      setRefs((refs) => {
         const arrayRefs = elements => new Array(elements.length).fill().map(() => createRef());
         if (!refs.buttons.length) {
            return {
               slides: arrayRefs(renderedElements.length),
               buttons: arrayRefs(carouselButtons.length),
            }
         } else {
            return {
               ...refs,
               slides: arrayRefs(renderedElements.length),
            }
         }
      });
   }, [renderedElements]);

   const carouselButtons = useMemo(() => {
      if (!skills && !children) return;
      const totalElements = children ? children.length : Object.keys(skills).length;
      const slidesNum = Math.ceil(totalElements / (slider.end - slider.start));
      const elementsPerSlide = slider.end - slider.start;
      const slideInputsList = [];
      for (let i = 0; i < slidesNum; i++) {
         slideInputsList.push(
            <motion.input
               ref={refs.buttons[i]}
               key={"input" + uuidv4()}
               name={"slideDots" + id}
               className={` w-[10px] h-[10px] rounded-full enabled:cursor-pointer`}
               initial={{ backgroundColor: "#D9D9D94D", scale: 1 }}
               animate={slider.currentSlide === i ? { backgroundColor: "#D9D9D9", scale: 1.4 } : { backgroundColor: "#D9D9D94D", scale: 1 }}
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
   }, [slider, skills, children, slider.start, slider.end]);

   return (
      <>
         <div
            className="flex flex-col relative w-full pb-[60px] gap-[30px] lg:gap-[60px] items-center px-[5%]"
            onTouchStart={e => {
               e.stopPropagation();
               startXCoord = e.touches[0].clientX;
            }}
            onTouchEnd={e => {
               e.stopPropagation();
               const inputsList = refs.buttons.map(ref => ref.current);
               let xOffset = startXCoord - e.changedTouches[0].clientX;
               if (Math.abs(xOffset) > innerWidth / 4) {
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
               <AnimatePresence initial={true} mode='popLayout' >
                  {renderedElements}
               </AnimatePresence>
            </div>
            {!cancelButtons &&
               <motion.div
                  className="flex gap-[10px]"
               >
                  {carouselButtons}
               </motion.div>
            }
         </div>
      </>
   )
}
