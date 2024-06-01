import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Loading from "./Loading";
import { useContext } from "react";
import ContextProps from "../assets/JS/createContext";

export default function Layout() {
   const { context } = useContext(ContextProps);
   return (
      <>
         <section className={`${context.load ? "hidden" : "block"}`}>
            <Loading />
         </section>
         <section className={`${context.load ? "block" : "hidden"}`}>
            <NavBar />
            <Outlet />
         </section>
      </>
   )
}