import { useContext } from "react"
import { vite, react } from "../assets/JS/imports"
import { motion } from "framer-motion"
import ContextProps from "../assets/JS/createContext"


export default function Footer() {
   const { context } = useContext(ContextProps);
   return (
      <footer className="flex justify-center w-full pt-[15%]">
         <h5 className="flex flex-col items-center gap-5">
            <span className="text-[12px]">{context.lang === "es" ? "IMPULSADO POR" : "POWERED BY"}</span>
            <span className="flex items-center gap-5">
               <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                  <motion.img 
                     src={vite}
                     alt="Vite" 
                     className="w-12 h-12 [filter:drop-shadow(5px_5px_15px_rgb(177,68,254))_drop-shadow(-5px_-5px_10px_rgb(70,203,255))]" 
                     whileInView={{ scale: [null, 1.5, 1]}}
                     viewport={{ once: true, amount: "all" }}
                     transition={{ duration: 0.4 }}
                  />
               </a>
               +
               <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <motion.img 
                     src={react}
                     alt="React" 
                     className="w-12 h-12 [filter:drop-shadow(5px_5px_10px_rgb(13,168,203))_drop-shadow(-5px_-5px_10px_rgb(13,168,203))]" 
                     whileInView={{ scale: [null, 1.5, 1]}}
                     viewport={{ once: true, amount: "all" }}
                     transition={{ duration: 0.4, delay: 0.2 }}
                  />
               </a>
            </span>
         </h5>
      </footer>
   )
}