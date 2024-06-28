import { useState, useEffect } from "react";
import { absoluteDistance } from "../JS/functions";

export default function useFollowPointer(ref) {
   const [point, setPoint] = useState({ x: 0, y: 0 });

   useEffect(() => {
      if (!ref.current) return;

      const handlePointerMove = ({ pageX, pageY }) => {
         const element = ref.current;
         const x = pageX - absoluteDistance(element, "x") - element.offsetWidth / 2;
         const y = pageY - absoluteDistance(element, "y") - element.offsetHeight / 2;
         setPoint({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);

      return () => window.removeEventListener("pointermove", handlePointerMove);

   }, []);

   return point;
}