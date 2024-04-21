import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
   return (
      <>
         <img className="absolute z-[-1] -rotate-[20deg] -top-[10px] -left-[200px] lg:-top-[150px] lg:-left-[800px]" src="./src/assets/png/dark/ondas_org.png" alt="" />
         <NavBar />
         <Outlet />
      </>
   )
}