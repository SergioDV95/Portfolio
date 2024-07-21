import { useState, useMemo, useContext, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence, animate } from "framer-motion";
import ContextProps from '../assets/JS/createContext';
import * as imports from '../assets/JS/imports';
import { scatterCoords, getColor, colorPicker } from '../assets/JS/functions';

/**
 * Component for rendering a carousel with sliding elements.
 * 
 * @param {Object} props - The props object containing the following properties:
 * @param {Array} skills - The array of skills to display in the carousel.
 * @param {string} slideClasses - The CSS classes for the carousel slides.
 * @param {Array} children - The children elements to display in the carousel.
 * @param {number} startIndex - The starting index of the carousel.
 * @param {number} endIndex - The ending index of the carousel.
 * @param {boolean} cancelButtons - Flag to show or hide carousel navigation buttons.
 * @param {boolean} playButton - Flag to enable or disable play button functionality.
 * 
 * @returns {JSX.Element} A JSX element representing the Carousel component.
*/

export default function Carousel({ skills, slideClasses, children, startIndex, endIndex, cancelButtons, playButton }) {
   const { context, dispatch } = useContext(ContextProps);

   const [slider, setSlider] = useState({
      start: startIndex || 0,
      end: context.lgWidth ? (endIndex || 3) : 1,
      direction: "",
      currentSlide: 0
   });

   const colorRef = useRef(getColor());

   const refs = useRef({
      slides: [],
      buttons: [],
   });

   const [skillFeatures, setSkillFeatures] = useState({
      draggables: {},
      coords: {},
   });

   let startXCoord;

   const id = useMemo(() => uuidv4(), []);

   const animation = {
      right: { x: window.innerWidth, scale: 0.1 },
      left: { x: -window.innerWidth, scale: 0.1 }
   };

   const resourceRef = useRef([]);

   /* useEffect(() => {
      if (resourceRef.current.length) {
         const total = context.load.total;
         const merged = total.concat(resourceRef.current);
         dispatch({ type: "SET_LOAD", total: merged })
      }
   }, [resourceRef.current]) */

   function handleResourcesRefs(e) {
      resourceRef.current.push(e);
   }

   function handleLoadProgress() {
      dispatch({ type: "SET_LOAD", progress: true });
   }

   useEffect(() => {
      setSlider((slider) => ({ ...slider, end: context.lgWidth ? (endIndex || 3) : 1 }))
   }, [context.lgWidth]);

   useEffect(() => {
      let changeCoords = {};
      let changeDraggables = {};
      if (skills) {
         for (let key in skills) {
            for (let values of skills[key]) {
               changeCoords = {
                  ...changeCoords,
                  [key]: {
                     ...changeCoords[key],
                     [values]: {
                        x: playButton ? scatterCoords(-175, 175) + "%" : 0,
                        y: playButton ? scatterCoords(-175, 175) + "%" : 0
                     }
                  }
               };
            }
         }
      } else {
         changeCoords = skillFeatures.coords;
      }
      if (!playButton) {
         for (let key in skillFeatures.draggables) {
            changeDraggables[key] = true;
         }
      } else {
         changeDraggables = skillFeatures.draggables;
      }
      setSkillFeatures({ draggables: changeDraggables, coords: changeCoords });
   }, [skills, playButton]);

   const toggleDraggables = skill => {
      let changedDraggables = skillFeatures.draggables;
      changedDraggables[skill] = !changedDraggables[skill];
      setSkillFeatures(skills => ({ ...skills, draggables: changedDraggables }));
   }

   const carouselElements = () => {
      if (!skills && !children) return;
      if (!children) {
         const svgs = [imports.lenguajes, imports.frameworks, imports.cms, imports.db, imports.tools];
         return Object.entries(skills).slice(slider.start, slider.end).map(([key, value], index) => (
            <motion.div
               className={slideClasses}
               key={"key" + key + index}
               transition={{ delay: index * 0.1 }}
               initial={slider.direction === "right" ? animation.right : animation.left}
               animate={{ x: 0, scale: 1 }}
               exit={slider.direction === "left" ? animation.right : animation.left}
            >
               <div
                  ref={ref => refs.current.slides[index] = ref}
                  className="flex flex-col gap-[5px]"
               >
                  <h3>{key}:</h3>
                  <div className="flex flex-wrap gap-[10px] h-full content-start" >
                     {Array.isArray(value) && value.map((skill, i) => {
                        if (skillFeatures.draggables?.[skill] === undefined) {
                           toggleDraggables(skill);
                        }
                        const color = getColor(colorRef.current);
                        colorRef.current = color;
                        return (
                           <motion.div
                              className={`relative w-fit h-fit outline-[2px] xl:outline-[3px] 2xl:outline-[4px] outline-dashed rounded-[7px]`}
                              key={"skill" + skill + i}
                              initial={{
                                 outlineColor: "#d1d5db",
                              }}
                              animate={{
                                 outlineColor: playButton ? (skillFeatures.draggables[skill] ? "#8d0c0c" : "#22c55e") : "#d1d5db",
                                 scale: playButton ? (skillFeatures.draggables[skill] ? 1 : [1.5, 1]) : 1,
                              }}
                           >
                              <motion.p
                                 className={`select-none relative z-10 font-bold text-[0.8em] xl:text-[14px] 2xl:text-[16px] p-[5px] cursor-grab rounded-[5px] text-center`}
                                 onTouchStart={e => e.stopPropagation()}
                                 onDragEnd={e => {
                                    if (playButton) {
                                       const thisRect = e.target.getBoundingClientRect();
                                       const parentRect = e.target.parentElement.getBoundingClientRect();
                                       const verticalFit = Math.ceil(thisRect.top) >= Math.floor(parentRect.top) && Math.floor(thisRect.bottom) <= Math.ceil(parentRect.bottom);
                                       const horizontalFit = Math.ceil(thisRect.left) >= Math.floor(parentRect.left) && Math.floor(thisRect.right) <= Math.ceil(parentRect.right);
                                       if (verticalFit && horizontalFit) {
                                          toggleDraggables(skill);
                                       }
                                    }
                                 }}
                                 initial={{
                                    x: 0,
                                    y: 0,
                                    backgroundColor: color,
                                    boxShadow: `0 0 3px 1.5px ${color}`
                                 }}
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
               <div className="flex flex-col justify-center items-center" style={{ perspective: 300 }}>
                  <motion.div
                     className="animate-pulse bg-picture p-[20%] md:p-[20px] shadow-button w-full h-[60%] rounded-[8px]"
                     onMouseMove={e => {
                        const { width, height, top, left } = e.currentTarget.getBoundingClientRect();
                        const x = (e.clientX - left) / width - 0.5;
                        const y = (e.clientY - top) / height - 0.5;
                        const rotateX = y * -30;
                        const rotateY = x * 30;

                        animate(e.currentTarget, 
                           {
                              rotateX: rotateX,
                              rotateY: rotateY,
                              scale: 1.1,
                           }, 
                           {
                              duration: 0.1,
                           }
                        );
                     }}
                     onMouseLeave={e => {
                        animate(e.currentTarget, 
                           {
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                           }, 
                           {
                              duration: 0.1,
                           }
                        );
                     }}
                  >
                     <img
                        ref={el => handleResourcesRefs(el)}
                        className="w-full h-full max-lg:scale-[1.2]"
                        src={svgs.slice(slider.start, slider.end)[index]}
                        alt="image/svg+xml"
                        onLoad={e => {
                           e.target.parentElement.classList.remove("animate-pulse");
                           handleLoadProgress();
                        }}
                     />
                  </motion.div>
               </div>
            </motion.div>
         ));
      } else {
         return children.slice(slider.start, slider.end).map((value, index) => (
            <motion.div
               className={slideClasses + " select-none"}
               key={"children" + uuidv4()}
               initial={slider.direction === "right" ? animation.right : animation.left}
               animate={{ x: 0, scale: 1 }}
               exit={slider.direction === "left" ? animation.right : animation.left}
            >
               {value}
            </motion.div>
         ));
      }
   };

   const renderedElements = useMemo(() => carouselElements(), [skillFeatures, slider, skills, children, context.lgWidth]);

   const carouselButtons = useMemo(() => {
      if (!skills && !children) return;
      const totalElements = children ? children.length : Object.keys(skills).length;
      const slidesNum = Math.ceil(totalElements / (slider.end - slider.start));
      const elementsPerSlide = slider.end - slider.start;
      const slideInputsList = [];
      for (let i = 0; i < slidesNum; i++) {
         slideInputsList.push(
            <motion.input
               ref={ref => refs.current.buttons[i] = ref}
               key={"input" + uuidv4()}
               id={uuidv4()}
               name={"slideDots" + id}
               className={`w-[0.75em] h-[0.75em] rounded-full enabled:cursor-pointer`}
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
   }, [slider, skills, children])

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
               const buttonsList = refs.current.buttons;
               let xOffset = startXCoord - e.changedTouches[0].clientX;
               if (Math.abs(xOffset) > innerWidth / 4) {
                  if (Math.sign(xOffset) === 1) {
                     if (slider.currentSlide === (buttonsList.length - 1)) buttonsList[0].click();
                     else buttonsList[slider.currentSlide + 1].click();
                  } else {
                     if (slider.currentSlide === 0) buttonsList[buttonsList.length - 1].click();
                     else buttonsList[slider.currentSlide - 1].click();
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
                  layout
                  className="flex gap-[10px]"
               >
                  {carouselButtons}
               </motion.div>
            }
         </div>
      </>
   )
}
