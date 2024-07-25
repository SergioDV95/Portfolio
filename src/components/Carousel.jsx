import { useState, useMemo, useContext, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from "framer-motion";
import ContextProps from '../assets/JS/createContext';
import * as imports from '../assets/JS/imports';
import { scatterCoords, getColor } from '../assets/JS/functions';
import Particles from "@tsparticles/react";

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

   const wigglePathGenerator = {
      generate: (particle) => {
         const angle = particle.angle + Math.sin(particle.position.y / 10) * 0.5;
         const velocity = particle.velocity.length;
         return {
            x: Math.cos(angle) * velocity,
            y: particle.velocity.y,
         };
      },
   };

   const options = {
      "autoPlay": true,
      "background": {
         "color": {
            "value": "#000000"
         },
         "image": "",
         "position": "",
         "repeat": "",
         "size": "",
         "opacity": 0,
      },
      "backgroundMask": {
         "composite": "destination-out",
         "cover": {
            "color": {
               "value": "#fff"
            },
            "opacity": 1
         },
         "enable": false
      },
      "clear": true,
      "defaultThemes": {},
      "delay": 0,
      "fullScreen": {
         "enable": true,
         "zIndex": 0
      },
      "detectRetina": true,
      "duration": 0,
      "fpsLimit": 120,
      "interactivity": {
         "detectsOn": "window",
         "events": {
            "onClick": {
               "enable": false,
               "mode": {}
            },
            "onDiv": {
               "selectors": {},
               "enable": false,
               "mode": {},
               "type": "circle"
            },
            "onHover": {
               "enable": false,
               "mode": {},
               "parallax": {
                  "enable": false,
                  "force": 2,
                  "smooth": 10
               }
            },
            "resize": {
               "delay": 0.5,
               "enable": true
            }
         },
         "modes": {
            "trail": {
               "delay": 1,
               "pauseOnStop": false,
               "quantity": 1
            },
            "attract": {
               "distance": 200,
               "duration": 0.4,
               "easing": "ease-out-quad",
               "factor": 1,
               "maxSpeed": 50,
               "speed": 1
            },
            "bounce": {
               "distance": 200
            },
            "bubble": {
               "distance": 200,
               "duration": 0.4,
               "mix": false
            },
            "connect": {
               "distance": 80,
               "links": {
                  "opacity": 0.5
               },
               "radius": 60
            },
            "grab": {
               "distance": 100,
               "links": {
                  "blink": false,
                  "consent": false,
                  "opacity": 1
               }
            },
            "push": {
               "default": true,
               "groups": [],
               "quantity": 4
            },
            "remove": {
               "quantity": 2
            },
            "repulse": {
               "distance": 200,
               "duration": 0.4,
               "factor": 100,
               "speed": 1,
               "maxSpeed": 50,
               "easing": "ease-out-quad"
            },
            "slow": {
               "factor": 3,
               "radius": 200
            },
            "light": {
               "area": {
                  "gradient": {
                     "start": {
                        "value": "#ffffff"
                     },
                     "stop": {
                        "value": "#000000"
                     }
                  },
                  "radius": 1000
               },
               "shadow": {
                  "color": {
                     "value": "#000000"
                  },
                  "length": 2000
               }
            }
         }
      },
      "manualParticles": [],
      "particles": {
         "bounce": {
            "horizontal": {
               "value": 0
            },
            "vertical": {
               "value": 0
            }
         },
         "collisions": {
            "absorb": {
               "speed": 2
            },
            "bounce": {
               "horizontal": {
                  "value": 1
               },
               "vertical": {
                  "value": 1
               }
            },
            "enable": false,
            "maxSpeed": 50,
            "mode": "bounce",
            "overlap": {
               "enable": true,
               "retries": 0
            }
         },
         "color": {
            "value": ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
            "animation": {
               "h": {
                  "count": 0,
                  "enable": true,
                  "speed": 30,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
               },
               "s": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
               },
               "l": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": true,
                  "offset": 0
               }
            }
         },
         "effect": {
            "close": true,
            "fill": true,
            "options": {},
            "type": {}
         },
         "groups": [],
         "move": {
            "angle": {
               "offset": 0,
               "value": 90
            },
            "attract": {
               "distance": 200,
               "enable": false,
               "rotate": {
                  "x": 3000,
                  "y": 3000
               }
            },
            "center": {
               "x": 50,
               "y": 50,
               "mode": "percent",
               "radius": 0
            },
            "decay": {
               "min": 0.05,
               "max": 0.15
            },
            "distance": {},
            "direction": "top",
            "drift": 0,
            "enable": true,
            "gravity": {
               "acceleration": 20,
               "enable": true,
               "inverse": false,
               "maxSpeed": 200
            },
            "path": {
               "clamp": true,
               "delay": {
                  "value": 0
               },
               "enable": true,
               "options": {},
               "generator": wigglePathGenerator,
            },
            "outModes": {
               "default": "destroy",
               "bottom": "destroy",
               "left": "destroy",
               "right": "destroy",
               "top": "none"
            },
            "random": false,
            "size": false,
            "speed": {
               "min": 50,
               "max": 100
            },
            "spin": {
               "acceleration": 0,
               "enable": false
            },
            "straight": false,
            "trail": {
               "enable": false,
               "length": 10,
               "fill": {}
            },
            "vibrate": false,
            "warp": false
         },
         "number": {
            "density": {
               "enable": false,
               "width": 1920,
               "height": 1080
            },
            "limit": {
               "mode": "delete",
               "value": 300
            },
            "value": 150,
            "min": 100,
            "max": 200,
         },
         "opacity": {
            "value": 1,
            "animation": {
               "count": 0,
               "enable": false,
               "speed": 0.3,
               "decay": 0,
               "delay": 0,
               "sync": true,
               "mode": "auto",
               "startValue": "max",
               "destroy": "min"
            }
         },
         "reduceDuplicates": false,
         "shadow": {
            "blur": 0,
            "color": {
               "value": "#000"
            },
            "enable": false,
            "offset": {
               "x": 0,
               "y": 0
            }
         },
         "shape": {
            "close": true,
            "fill": true,
            "options": {
               "polygon": {
                  "0": {
                     "sides": 5
                  },
                  "1": {
                     "sides": 6
                  }
               }
            },
            "type": ["square", "polygon"]
         },
         "size": {
            "value": 3,
            "animation": {
               "count": 0,
               "enable": false,
               "speed": 5,
               "decay": 0,
               "delay": 0,
               "sync": false,
               "mode": "auto",
               "startValue": "random",
               "destroy": "none"
            }
         },
         "stroke": {
            "width": 0
         },
         "zIndex": {
            "value": 2,
            "opacityRate": 1,
            "sizeRate": 1,
            "velocityRate": 1
         },
         "destroy": {
            "bounds": {},
            "mode": "none",
            "split": {
               "count": 1,
               "factor": {
                  "value": 3
               },
               "rate": {
                  "value": {
                     "min": 4,
                     "max": 9
                  }
               },
               "sizeOffset": true,
               "particles": {}
            }
         },
         "roll": {
            "darken": {
               "enable": true,
               "value": 30
            },
            "enable": true,
            "enlighten": {
               "enable": true,
               "value": 30
            },
            "mode": "both",
            "speed": {
               "min": 15,
               "max": 25
            }
         },
         "tilt": {
            "value": {
               "min": 0,
               "max": 360
            },
            "animation": {
               "enable": true,
               "speed": 60,
               "decay": 0,
               "sync": false
            },
            "direction": "random",
            "enable": true
         },
         "twinkle": {
            "lines": {
               "enable": false,
               "frequency": 0.05,
               "opacity": 1
            },
            "particles": {
               "enable": false,
               "frequency": 0.05,
               "opacity": 1
            }
         },
         "wobble": {
            "distance": 30,
            "enable": true,
            "speed": {
               "angle": {
                  "min": -15,
                  "max": 15
               },
               "move": 50
            }
         },
         "life": {
            "count": 1,
            "delay": {
               "value": 0,
               "sync": false
            },
            "duration": {
               "value": 0,
               "sync": false
            }
         },
         "rotate": {
            "value": {
               "min": 0,
               "max": 360
            },
            "animation": {
               "enable": true,
               "speed": 60,
               "decay": 0,
               "sync": false
            },
            "direction": "random",
            "path": false
         },
         "orbit": {
            "animation": {
               "count": 0,
               "enable": false,
               "speed": 1,
               "decay": 0,
               "delay": 0,
               "sync": false
            },
            "enable": false,
            "opacity": 1,
            "rotation": {
               "value": 45
            },
            "width": 1
         },
         "links": {
            "blink": false,
            "color": {
               "value": "#fff"
            },
            "consent": false,
            "distance": 100,
            "enable": false,
            "frequency": 1,
            "opacity": 1,
            "shadow": {
               "blur": 5,
               "color": {
                  "value": "#000"
               },
               "enable": false
            },
            "triangles": {
               "enable": false,
               "frequency": 1
            },
            "width": 1,
            "warp": false
         },
         "repulse": {
            "value": 0,
            "enabled": false,
            "distance": 1,
            "duration": 1,
            "factor": 1,
            "speed": 1
         }
      },
      "pauseOnBlur": true,
      "pauseOnOutsideViewport": true,
      "responsive": [],
      "smooth": false,
      "style": {},
      "themes": [],
      "zLayers": 100,
      "name": "Wobble",
      "emitters": {
         "autoPlay": true,
         "fill": true,
         "life": {
            "wait": false
         },
         "rate": {
            "quantity": 10,
            "delay": 0.05
         },
         "shape": {
            "options": {},
            "replace": {
               "color": false,
               "opacity": false
            },
            "type": "square"
         },
         "startCount": 50,
         "size": {
            "value": 5,
            "mode": "percent",
            "height": 0,
            "width": 0
         },
         "particles": {},
         "position": {
            "x": 50,
            "y": 100
         }
      },
      "motion": {
         "disable": false,
         "reduce": {
            "factor": 4,
            "value": true
         }
      }
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

                        e.currentTarget.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                     }}
                     onMouseLeave={e => {
                        e.currentTarget.style.transform = null;
                     }}
                     whileHover={{ scale: 1.1 }}
                  >
                     <img
                        className="w-full h-full max-lg:scale-[1.2]"
                        src={svgs.slice(slider.start, slider.end)[index]}
                        alt="image/svg+xml"
                        onLoad={e => {
                           e.target.parentElement.classList.remove("animate-pulse");
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
            {playButton /* && Object.values(skillFeatures.draggables).every(isItTruthy => !isItTruthy) */ && <Particles id='confettiParticles' options={options} />}
            <div className='absolute z-[15]'>
            </div>
         </div>
      </>
   )
}
