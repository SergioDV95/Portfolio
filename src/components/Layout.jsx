import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Loading from "./Loading";
import { useContext } from "react";
import ContextProps from "../assets/JS/createContext";
import ScreenEffects from "./ScreenEffects";

export default function Layout() {
   const { context } = useContext(ContextProps);

   return (
      <>
         <section className={`${context.lgWidth ? (context.load.complete ? "hidden" : "block") : 'hidden'}`}>
            <Loading />
         </section>
         <main className={`${context.lgWidth ? (context.load.complete ? "block" : "hidden") : 'block'} ${context.light ? "" : "dark"} dark:text-gray-50`}>
            <ScreenEffects context={context} />
            <NavBar />
            <Outlet />
         </main>
      </>
   )
}