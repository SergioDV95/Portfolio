import { useState, useContext, useEffect } from "react";
import ContextProps from "../assets/JS/createContext";
import { motion } from "framer-motion";

export default function Loading() {
   const { context } = useContext(ContextProps);
   const [loading, setLoading] = useState(0);

   useEffect(() => {
      const resourceElements = Array.from(document.querySelectorAll("img, svg, object"));
      const loadedElements = [];
      const handleLoad = () => setLoading(loadedElements.length * 100 / resourceElements.length);
      resourceElements.forEach((resource, i) => {
         if (resource instanceof HTMLImageElement || resource instanceof SVGElement || resource instanceof HTMLObjectElement) {
            loadedElements.push(i);
            resource.addEventListener("load", handleLoad);
         }
      });
      return () => {
         resourceElements.forEach(resource => {
            resource.removeEventListener("load", handleLoad);
         });
      }
   }, []);

   //useEffect(() => console.log(loading), [loading]);

   const $1600px = window.matchMedia("(min-width: 1600px)").matches;

   return (
      <section className="flex bg-black w-screen h-screen justify-center items-center">
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
                     strokeWidth: $1600px ? 18 : 10,
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
                           bounce: 0.45,
                           duration: 2.5, 
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