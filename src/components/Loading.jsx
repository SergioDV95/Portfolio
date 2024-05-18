import { useState, useContext, useEffect } from "react";
import ContextProps from "../assets/JS/createContext";
import { motion } from "framer-motion";

export default function Loading() {
   const { context, setContext } = useContext(ContextProps);
   const [loading, setLoading] = useState(0);

   let timeout;
   const handleLoad = () => {
      const everyResource = Array.from(document.querySelectorAll("img, object, svg"));
      const loadedElements = [];
      everyResource.forEach((resource, i) => {
         if (resource instanceof HTMLObjectElement || resource instanceof HTMLImageElement || resource instanceof SVGElement) {
            loadedElements.push(i);
            resource.onload = () => {
               setLoading(Math.round(loadedElements.length * 100 / everyResource.length));
            }
         }
      })
      window.onload = () => timeout = setTimeout(() => setContext(context => ({ ...context, loaded: true })), 1000);
   }

   useEffect(() => {
      handleLoad();

      return () => {
         if (timeout) {
            clearTimeout(timeout);
         }
      }
   }, []);

   /* useEffect(() => {
      if (loading === 100) {
         const timeout = setTimeout(() => setContext(context => ({ ...context, loaded: true })), 1000);
         return () => clearTimeout(timeout);
      };
   }, [loading]); */

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
                     pathLength: loading / 100,
                     transition: {
                        pathLength: {
                           type: "spring",
                           bounce: 0.35,
                           duration: 2,
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
            <div className="absolute w-full h-full flex flex-col justify-center items-center font-dela">
               <h4>{context.lang === "es" ? "CARGANDO" : "LOADING"}</h4>
               <h4>{loading}%</h4>
            </div>
         </div>
      </section>
   )
}