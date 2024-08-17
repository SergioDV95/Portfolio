import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const LaptopModel = () => {
   const laptopRef = useRef();

   useFrame(() => {
      laptopRef.current.rotation.y += 0.01;
   });

   return (
      <mesh
         ref={laptopRef}
         onPointerDown={(e) => {
            e.target.setPointerCapture(e.pointerId);
         }}
         onPointerMove={(e) => {
            if (e.isPrimary) {
               laptopRef.current.rotation.y += e.movementX * 0.01;
               laptopRef.current.rotation.x += e.movementY * 0.01;
            }
         }}
         onPointerUp={(e) => {
            e.target.releasePointerCapture(e.pointerId);
         }}
      >
         {/* Base of the laptop */}
         <boxGeometry args={[10, 0.5, 7]} />
         <meshStandardMaterial color="gray" />
         {/* Screen of the laptop */}
         <mesh position={[0, 3.75, -3.25]}>
            <boxGeometry args={[10, 7, 0.5]} />
            <meshStandardMaterial color="black" />
         </mesh>
      </mesh>
   );
};

export default LaptopModel;