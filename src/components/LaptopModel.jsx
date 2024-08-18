import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { MeshStandardMaterial } from 'three';
import { keyboard, laptop_base, laptop_screen, touchpad } from '../assets/JS/imports';

const LaptopModel = () => {
   const laptopRef = useRef();
   const keyboardRef = useRef();
   const touchpadRef = useRef();

   const baseTexture = useLoader(TextureLoader, laptop_base);
   const screenTexture = useLoader(TextureLoader, laptop_screen);
   const keyboardTexture = useLoader(TextureLoader, keyboard);
   const touchpadTexture = useLoader(TextureLoader, touchpad);

   return (
      <group
         ref={laptopRef}
         onPointerDown={(e) => {
            e.target.setPointerCapture(e.pointerId);
         }}
         onPointerMove={(e) => {
            /* if (e.isPrimary) {
               laptopRef.current.rotation.y += e.movementX * 0.01;
               laptopRef.current.rotation.x += e.movementY * 0.01;
            } */
         }}
         onPointerUp={(e) => {
            e.target.releasePointerCapture(e.pointerId);
         }}
         rotation={[0.5, -0.5, 0]}
      >
         {/* Base of the laptop */}
         <mesh position={[0, 0, 0]}>
            <boxGeometry args={[10, 0.5, 7]} />
            <meshStandardMaterial map={baseTexture} />
         </mesh>
         {/* Screen of the laptop */}
         <mesh position={[0, 3.75, -3.25]}>
            <boxGeometry args={[10, 7, 0.1]} />
            <meshStandardMaterial map={screenTexture} />
         </mesh>
         {/* Keyboard */}
         <mesh ref={keyboardRef} position={[0, 0.3, 0]}>
            <boxGeometry args={[8, 0.1, 3]} />
            <meshStandardMaterial map={keyboardTexture} />
         </mesh>
         {/* Touchpad */}
         <mesh ref={touchpadRef} position={[0, 0.3, 2]}>
            <boxGeometry args={[2, 0.1, 1.5]} />
            <meshStandardMaterial map={touchpadTexture} />
         </mesh>
         {/* Hinge */}
         <mesh rotation={[1.5, 0, 1.56]} position={[0, 0.17, -3.4]}>
            <cylinderGeometry args={[0.30, 0.30, 10, 32]} />
            <meshStandardMaterial color={'#555'} />
         </mesh>
      </group>
   );
};

export default LaptopModel;