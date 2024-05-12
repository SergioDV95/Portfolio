import { useState, useEffect } from "react";
import { calcDistance } from "../JS/functions";

export default function useFollowPointer(ref) {
   const [point, setPoint] = useState({ x: 0, y: 0 });

   useEffect(() => {
      if (!ref.current) return;

      const handlePointerMove = ({ pageX, pageY }) => {
         const element = ref.current;
         const x = pageX - calcDistance(element, "x") - element.offsetWidth / 2;
         const y = pageY - calcDistance(element, "y") - element.offsetHeight / 2;
         setPoint({ x: x, y: y });
      };

      window.addEventListener("pointermove", handlePointerMove);

      return () => window.removeEventListener("pointermove", handlePointerMove);
   }, []);

   return point;
}