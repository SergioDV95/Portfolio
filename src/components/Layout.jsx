import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Loading from "./Loading";
import { useContext } from "react";
import ContextProps from "../assets/JS/createContext";
import { motion } from "framer-motion";

export default function Layout() {
   const { context } = useContext(ContextProps);
   return (
      <>
         {/* <section className={`${context.load ? "hidden" : "block"}`}>
            <Loading />
         </section> */}
         <main className={`${context.light ? "" : "dark"} dark:text-gray-50`}>
            <motion.div
               className="fixed -left-[12.5vw] -top-[12.5vh] w-[125vw] h-[125vh] -z-[5]"
               animate={{
                  backgroundImage: context.light ?
                     "radial-gradient(circle closest-corner at 80% 20%, #b4e1fe 33%, #75c8fd 66%, #11a1fb 99%, #0089df 100%)"
                     : 
                     "radial-gradient(circle closest-corner at 20% 80%, #049cfb 33%, #0331c4 66%, #00335d 99%, #00284d 100%)",
               }}
            >
               <motion.div
                  className="bg-transparent w-full h-full -z-[3]" 
                  animate={{
                     backdropFilter: context.light ? "blur(50px) brightness(0.85)" : "blur(50px) brightness(0.4)",
                  }}
               />
            </motion.div>
            <NavBar />
            <Outlet />
         </main>
      </>
   )
}