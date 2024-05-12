import { useContext, useRef, useState } from "react"
import ContextProps from "../assets/JS/createContext"
import { Squash as Hamburger } from 'hamburger-react'
import { motion } from "framer-motion"
import { ondas, sad, cool } from "../assets/JS/imports"
import useFollowPointer from "../assets/Hooks/useFollowPointer"

export default function NavBar() {
   const { context, setContext } = useContext(ContextProps);
   const [isOpen, setOpen] = useState();
   const [isActive, setIsActive] = useState(false);
   const logoRef = useRef(null);
   const { x, y } = useFollowPointer(logoRef);

   const variants = {
      list: {
         open: {
            width: "90%",
            height: "100vh",
            left: 0,
            top: 0,
            transition: {
               when: "beforeChildren",
               staggerChildren: 0.1,
            },
         },
         closed: {
            width: "fit-content",
            height: "50px",
            left: "5%",
            transition: {
               when: "afterChildren",
               staggerChildren: 0.05,
               staggerDirection: -1,
            },
         },
      },
      item: {
         open: {
            y: 0,
            opacity: 1,
            display: 'flex',
            transition: {
               display: { delay: -0.5 },
               type: "spring"
            }
         },
         closed: {
            y: -50,
            opacity: 0,
            display: "none",
            transition: {
               display: { delay: 0.5 },
            },
         },
      },
   };

   const styles = {
      list: context.lgWidth ? {
         width: "90%",
         height: "60px",
         position: "static",
      } : {
         width: "fit-content",
         height: "50px",
         position: "absolute",
         left: "5%",
      },
      item: context.lgWidth ? {
         display: "flex",
      } : {
         display: "none",
      }
   };

   const navbar = {
      isNotHovering: {
         x: "-115%"
      },
      isHovering: {
         x: "-8%"
      }
   }

   const inputElements = () => {
      const inputValues = [
         `${context.lang === "es" ? "SOBRE MI" : "ABOUT ME"}`,
         `${context.lang === "es" ? "HABILIDADES" : "SKILLS"}`,
         `${context.lang === "es" ? "PROYECTOS" : "PROJECTS"}`,
         `${context.lang === "es" ? "PROCESO" : "PROCESS"}`
      ];
      return inputValues.map((value, index) => (
         context.lgWidth ?
            <motion.div
               className="flex flex-col justify-center relative overflow-hidden px-[0.5em]"
               key={value + index}
               initial="isNotHovering"
               whileHover="isHovering"
            >
               <motion.input
                  className="max-lg:h-[60px] max-lg:text-left max-lg:pt-[30px] flex max-lg:border-b-[1px] cursor-pointer border-[#D9D9D9] focus:outline-none"
                  style={styles.item}
                  variants={variants.item}
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.1 }}
                  type="button"
                  value={value}
                  onClick={() => document.getElementById(value).scrollIntoView({ behavior: "smooth" })}
               />
               <motion.div className="w-full h-[2px] bg-[#D9D9D9] shadow-navbar absolute bottom-[15%]" transition={{ type: "tween" }} variants={navbar} />
            </motion.div>
            :
            <motion.input
               className="max-lg:h-[60px] max-lg:text-left max-lg:pt-[30px] flex max-lg:border-b-[1px] cursor-pointer border-[#D9D9D9] focus:outline-none"
               key={value + index}
               style={styles.item}
               variants={variants.item}
               whileTap={{ scale: 0.85 }}
               whileHover={{ scale: 1.1 }}
               type="button"
               value={value}
               onClick={() => document.getElementById(value).scrollIntoView({ behavior: "smooth" })}
            />
      ));
   };
   return (
      <header className="flex max-lg:justify-end lg:text-[0.9em] 2xl:text-[0.8em] justify-between text-end gap-[30px] w-full max-lg:p-[5%] lg:px-[5%] lg:pt-[4%] relative">
         <img className="absolute z-[-1] -rotate-[20deg] max-lg:scale-[2] -left-[65%] lg:-left-[50%] lg:-top-[125%] 4xl:-top-[150%] " src={ondas} alt="ondas" />
         <motion.nav
            layout
            className={`flex max-lg:z-50 max-lg:flex-col rounded-[8px] max-lg:gap-[2%] px-[1.5%] lg:items-center justify-center lg:justify-between font-semibold bg-navbarMobile lg:bg-navbarDesktop border-[2px] border-[#E2E2E2] box-border`}
            variants={variants.list}
            animate={context.lgWidth ? "" : (isOpen ? "open" : "closed")}
            initial={styles.list}
            whileTap={context.lgWidth ? "" : (isOpen ? "" : { scale: 0.9 })}
         >
            <div className="lg:hidden w-fit">
               <Hamburger
                  label="Show menu"
                  toggled={isOpen}
                  toggle={setOpen}
                  easing="ease-in"
               />
            </div>
            <motion.div className="flex max-lg:flex-col gap-[15px] items-center" layout variants={context.lgWidth ? "" : variants.item} style={styles.item}>
               <motion.div
                  className="relative z-20"
                  animate={isActive ? 
                     null
                     :
                     {
                        transform: [
                           "rotate(0deg)",
                           "rotate(22.5deg)",
                           "rotate(-22.5deg)",
                           "rotate(11.25deg)",
                           "rotate(-11.25deg)",
                           "rotate(5.625deg)",
                           "rotate(-5.625deg)",
                           "rotate(2.8125deg)",
                           "rotate(-2.8125deg)",
                           "rotate(1.40625deg)",
                           "rotate(-1.40625deg)",
                           "rotate(0.703125deg)",
                           "rotate(-0.703125deg)",
                           "rotate(0.3515625deg)",
                           "rotate(-0.3515625deg)",
                           "rotate(0deg)",
                        ],
                     }
                  }
                  transition={{
                     type: "tween",
                     duration: 1,
                     ease: "easeInOut",
                     delay: 10,
                     repeat: Infinity,
                     repeatDelay: 10
                  }}
               >
                  <motion.div
                     layout
                     ref={logoRef}
                     id="logo-gradient"
                     className="w-[6em] h-[6em] lg:w-[3.5em] lg:h-[3.5em] 3xl:w-[3em] 3xl:h-[3em] 4xl:w-[2.5em] 4xl:h-[2.5em]"
                     animate={isActive ? { x, y, scale: (context.lgWidth ? 1.6 : 1.2) } : null}
                     transition={{
                        type: "spring",
                        damping: 3,
                        stiffness: 50,
                        restDelta: 0.001
                     }}
                     onClick={e => {
                        if (!isActive) {
                           document.body.style.setProperty("cursor", `url(${sad}) 16 16, auto`);
                           e.currentTarget.style.setProperty("--cursor", `url(${cool}) 16 16, pointer`);
                           setIsActive(true);
                        } else {
                           document.body.style.setProperty("cursor", "auto");
                           e.currentTarget.style.setProperty("--cursor", "pointer");
                           setIsActive(false);
                        }
                     }}
                  >
                     <motion.div
                        layout
                        className="w-[150%] h-[150%] -top-[25%] -left-[25%] rounded-full absolute"
                        animate={{
                           transform: [
                              "rotate(0deg)",
                              "rotate(360deg)",
                           ],
                           backgroundImage: [
                              `linear-gradient(#058eee, #013567 0%, #001d3d)`,
                              `linear-gradient(#058eee, #013567 100%, #001d3d)`,
                              `linear-gradient(#22c1c3, #92be77 100%, #fdbb2d)`,
                              `linear-gradient(#22c1c3, #92be77 0%, #fdbb2d)`,
                              `linear-gradient(#833ab4, #fd1d1d 0%, #fcb045)`,
                              `linear-gradient(#833ab4, #fd1d1d 100%, #fcb045)`,
                              `linear-gradient(#3f5efb, #a351af 100%, #fc466b)`,
                              `linear-gradient(#3f5efb, #a351af 0%, #fc466b)`,
                           ],
                           transition: {
                              backgroundImage: {
                                 type: "tween",
                                 duration: 30,
                                 repeat: Infinity,
                                 repeatType: "mirror",
                              },
                              transform: {
                                 type: "tween",
                                 duration: 30,
                                 repeat: Infinity,
                                 repeatType: "reverse",
                                 ease: "linear"
                              }
                           }
                        }}
                     />
                  </motion.div>
               </motion.div>
               <h1 className="max-lg:px-[5%] font-dela max-md:text-start whitespace-nowrap md:text-center text-[28px] lg:text-[20px] xl:text-[34px] max-md:mb-[10%]">SERGIO DAZA</h1>
            </motion.div>
            <div className="max-lg:h-full max-lg:px-[5%] flex max-lg:flex-col lg:gap-[20px] xl:gap-[30px]">
               <motion.select
                  layout
                  initial={{ opacity: 0.80 }}
                  whileHover={{ opacity: 1 }}
                  className="max-lg:text-start text-[20px] rounded-[8px] w-fit bg-[#FFFFFF33] shadow-button p-2 focus:outline-none cursor-pointer"
                  style={styles.item}
                  variants={variants.item}
                  title="Idioma"
                  name="lang"
                  id="lang"
                  onChange={e => setContext(context => ({ ...context, lang: e.target.value }))}
                  value={context.lang}
               >
                  <option className="bg-[#374049] appearance-none" value="es">ES</option>
                  <option className="bg-[#374049] appearance-none" value="en">EN</option>
               </motion.select>
               {inputElements()}
            </div>
            {/* <motion.div
               initial={styles.item}
               variants={variants.item}
               className="flex gap-[10px]"
            >
               <div 
                  className="rounded-full flex bg-button shadow-lightMode box-border w-[65px] h-[33px] py-[2.4px] relative"
                  onClick={() => setContext(context => ({...context, mode: context.mode === "light" ? "dark" : "light"}))}
               >
                  <motion.div 
                     layout
                     className="rounded-full box-border bg-[#FFFFFF] w-[44.5%] h-[85%] absolute"
                     animate={{ 
                        left: context.mode === "light" ? "5%" : "",
                        right: context.mode === "light" ? "" : "5%",
                        background: context.mode === "light" ? "#FFFFFF" : "#262626"
                     }}
                     transition={{ 
                        duration: 0.25,
                        background: { duration: 0.125 }
                     }}
                  ></motion.div>
               </div>
            </motion.div> */}
         </motion.nav>
         <motion.button
            layout
            className="card font-semibold appearance-none"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            title={context.lang === "es" ? "Contacto" : "Contact"}
            type="button"
            onClick={() => document.getElementById("CONTACT").scrollIntoView({ behavior: "smooth" })}
         >
            <h4 className="font-dela absolute bg-[#16BAC5] lg:max-xl:text-[10px] 4xl:text-[18px] z-10">
               {context.lang === "es" ? "CONTÁCTAME" : "CONTACT ME"}
            </h4>
         </motion.button>
         {isActive && <div className="w-screen h-screen fixed top-0 left-0 z-10" />}
      </header>
   )
}