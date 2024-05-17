import { useState, useContext, useEffect } from "react";
import ContextProps from "../assets/JS/createContext";
import { motion } from "framer-motion";

export default function Loading() {
   const { context, setContext } = useContext(ContextProps);
   const [loading, setLoading] = useState({
      progress: 0
   });

   const handleLoad = () => {
      const everyElement = document.querySelectorAll("*");
      const loadedElements = [];
      everyElement.forEach((element, i) => {
         loadedElements.push(i);
         element.onload = () => setLoading(load => ({ ...load, progress: loadedElements }));
      })
      window.onload = () => setContext(context => ({ ...context, loaded: true }));
   }

   useEffect(() => handleLoad(), []);

   useEffect(() => console.log(loading), [loading]);

   const $1600px = window.matchMedia("(min-width: 1600px)").matches;

   return (
      <section className="flex w-screen h-screen justify-center items-center">
         <div className="loading relative flex w-fit h-fit">
            <motion.svg
               width={$1600px ? 300 : 200}
               height={$1600px ? 300 : 200}
               viewBox={$1600px ? "0 0 400 400" : "0 0 200 200"}
            >
               <motion.circle
                  cx={$1600px ? 200 : 100}
                  cy={$1600px ? 200 : 100}
                  r={$1600px ? 160 : 80}
                  style={{
                     strokeWidth: $1600px ? 17 : 10,
                     strokeLinecap: "round",
                     fill: "transparent",
                  }}
                  initial={{
                     pathLength: 0,
                     stroke: "#16BAC5"
                  }}
                  animate={{
                     pathLength: 0.95,
                     transition: {
                        pathLength: { 
                           delay: 0.5, 
                           type: "spring",
                           bounce: 0.35,
                           duration: 2, 
                           repeat: Infinity, 
                           repeatType: "reverse",
                        }
                     }
                  }}
               />
               <motion.circle
                  cx={$1600px ? 200 : 100}
                  cy={$1600px ? 200 : 100}
                  r={$1600px ? 160 : 80}
                  stroke="#FFFFFF33"
                  style={{
                     strokeWidth: $1600px ? 17 : 10,
                     strokeLinecap: "round",
                     fill: "transparent",
                  }}
                  initial={{
                     pathLength: 1,
                  }}
                  /* animate={{
                     pathLength: 1,
                     transition: {
                        pathLength: { delay: 0.5, type: "spring", duration: 2, bounce: 0, repeat: Infinity, repeatType: "reverse" },
                        opacity: { delay: 0.5, duration: 0.01 }
                     }
                  }} */
               />
            </motion.svg>
            <h1 className="absolute w-full h-full flex justify-center font-dela items-center">{context.lang === "es" ? "CARGANDO" : "LOADING"}</h1>
         </div>
      </section>
   )
}