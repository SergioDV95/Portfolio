import { Outlet } from "react-router-dom";
import { ondas } from "../assets/JS/imports";
import NavBar from "./NavBar";

export default function Layout() {
   return (
      <>
         <img className="absolute z-[-1] -rotate-[20deg] max-lg:scale-[2] -left-[55%] top-[1%] lg:-top-[150px] 2xl:-top-[5%]" src={ondas} alt="ondas" />
         <NavBar />
         <Outlet />
      </>
   )
}