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
         <section className={`${context.load ? "hidden" : "block"}`}>
            <Loading />
         </section>
         <main className={`${context.load ? "block" : "hidden"}`}>
            <motion.div
               className="fixed -left-[12.5vw] -top-[12.5vh] w-[125vw] h-[125vh] -z-[5]"
               animate={{
                  backgroundImage: context.light ?
                     "radial-gradient(circle closest-corner at 86% 14%, white 33%, #68c4fd 66%, #36b0fc 99%, #049cfb 100%)"
                     : 
                     "radial-gradient(circle closest-corner at 14% 86%, white 33%, #004f99 66%, #003566 99%, #00284d 100%)",
               }}
            >
               <motion.div
                  className="bg-transparent w-full h-full -z-[3]" 
                  animate={{
                     backdropFilter: context.light ? "blur(50px) brightness(0.8)" : "blur(50px) brightness(0.4)",
                  }}
               />
            </motion.div>
            <NavBar />
            <Outlet />
         </main>
      </>
   )
}