import { motion } from "framer-motion";

export default function ScreenEffects({ context }) {
   return (
      <div className="">
         <motion.div
            className="fixed -left-[12.5vw] -top-[12.5vh] w-[125vw] h-[125vh] -z-[5]"
            animate={{
               backgroundImage: `${context.light ?
                  "radial-gradient(circle closest-corner at 80% 20%, #b4e1fe 33%, #75c8fd 66%, #11a1fb 99%, #0089df 100%)"
                  :
                  "radial-gradient(circle closest-corner at 20% 80%, #049cfb 33%, #0331c4 66%, #00335d 99%, #00284d 100%)"}`,
            }}
         >
            <motion.div
               className="absolute bg-transparent w-full h-full -z-[4]"
               animate={{
                  backdropFilter: `${context.light ? "blur(30px) brightness(1)" : "blur(30px) brightness(0.8)"}`,
               }}
            />
         </motion.div>
         <div className={`fixed w-screen h-screen -z-[3] mix-blend-multiply bg-granulated ${context.light ? "opacity-50" : "opacity-100"}`} />
      </div>
   )
}