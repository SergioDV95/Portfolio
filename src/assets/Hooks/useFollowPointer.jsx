import { useState, useEffect, useContext } from "react";
import ContextProps from "../JS/createContext";
import { calcDistance } from "../JS/functions";

export default function useFollowPointer(ref) {
   const [point, setPoint] = useState({ x: 0, y: 0 });
   const { context } = useContext(ContextProps);

   useEffect(() => {
      if (!ref.current) return;

      const handlePointerMove = ({ clientX, clientY }) => {
         const element = ref.current;
         const x = clientX - calcDistance(element, "x") - element.offsetWidth / 2;
         const y = clientY - calcDistance(element, "y") - element.offsetHeight / 2;
         setPoint({ x: x, y: y });
      };

      window.addEventListener("pointermove", handlePointerMove);

      return () => window.removeEventListener("pointermove", handlePointerMove);
   }, []);

   return point;
}