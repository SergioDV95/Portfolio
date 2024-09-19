import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader, LinearFilter, LinearMipMapLinearFilter } from "three";
import { RoundedBox } from "@react-three/drei";
import {
   keyboard,
   laptop_base,
   laptop_screen,
   touchpad,
} from "../assets/JS/images";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

const LaptopModel = () => {
   const laptopRef = useRef();
   const keyboardRef = useRef();
   const touchpadRef = useRef();

   const baseTexture = useLoader(TextureLoader, laptop_base);
   const screenTexture = useLoader(TextureLoader, laptop_screen);
   const keyboardTexture = useLoader(TextureLoader, keyboard);
   const touchpadTexture = useLoader(TextureLoader, touchpad);

   const { position } = useSpring({
      from: { position: [15, 0, -15] }, // Start from the edge of the screen
      to: { position: [0, 0, 0] }, // Move to the original position
      config: { mass: 1, tension: 170, friction: 26 },
   });

   // Adjust texture filtering for better quality
   [baseTexture, screenTexture, keyboardTexture, touchpadTexture].forEach(
      (texture) => {
         texture.minFilter = LinearMipMapLinearFilter;
         texture.magFilter = LinearFilter;
         texture.anisotropy = 16; // Increase anisotropy for better texture quality
      }
   );

   return (
      <animated.group
         ref={laptopRef}
         onPointerDown={(e) => {
            e.target.setPointerCapture(e.pointerId);
         }}
         onPointerUp={(e) => {
            e.target.releasePointerCapture(e.pointerId);
         }}
         rotation={[0.5, -0.5, 0]}
         position={position}
      >
         {/* Base of the laptop */}
         <RoundedBox
            castShadow
            receiveShadow
            args={[10, 0.5, 7]}
            radius={0.1}
            smoothness={4}
            position={[0, 0, 0]}
         >
            <meshStandardMaterial color="#f2f2f2" />
         </RoundedBox>
         {/* Screen of the laptop */}
         <group position={[0, 0.52, -0.27]} rotation={[-0.3, 0, 0]}>
            {/* Screen */}
            <RoundedBox
               args={[9.9, 7, 0.1]}
               radius={0.1}
               smoothness={4}
               position={[0, 3.75, -3.25]}
               onUpdate={(self) => adjustUVMapping(self.geometry)}
            >
               <meshStandardMaterial map={screenTexture} />
            </RoundedBox>
            {/* Screen border */}
            <RoundedBox
               castShadow
               receiveShadow
               args={[10.01, 7.1, 0.1]}
               radius={0.1}
               smoothness={4}
               position={[0, 3.75, -3.26]}
            >
               <meshStandardMaterial color="#f2f2f2" />
            </RoundedBox>
         </group>
         {/* Keyboard */}
         <mesh ref={keyboardRef} position={[0, 0.201, -1]}>
            <boxGeometry args={[9.9, 0.1, 4]} />
            <meshStandardMaterial map={keyboardTexture} />
         </mesh>
         {/* Touchpad */}
         <mesh ref={touchpadRef} position={[0, 0.201, 2]}>
            <boxGeometry args={[3, 0.1, 2]} />
            <meshStandardMaterial map={touchpadTexture} />
         </mesh>
      </animated.group>
   );
};

const adjustUVMapping = (geometry) => {
   if (geometry && geometry.attributes && geometry.attributes.position) {
      const uv = new Float32Array(geometry.attributes.position.count * 2);
      const positions = geometry.attributes.position.array;
      const boundingBox = new THREE.Box3().setFromArray(positions);
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      // Normalize UV coordinates for each face separately
      for (let i = 0; i < positions.length; i += 3) {
         const x = positions[i];
         const y = positions[i + 1];
         const z = positions[i + 2];

         // Determine which face the vertex belongs to and set UV coordinates accordingly
         if (x === boundingBox.min.x || x === boundingBox.max.x) {
            // Left or right face
            uv[(i / 3) * 2] = (z - boundingBox.min.z) / size.z;
            uv[(i / 3) * 2 + 1] = (y - boundingBox.min.y) / size.y;
         } else if (y === boundingBox.min.y || y === boundingBox.max.y) {
            // Bottom or top face
            uv[(i / 3) * 2] = (x - boundingBox.min.x) / size.x;
            uv[(i / 3) * 2 + 1] = (z - boundingBox.min.z) / size.z;
         } else if (z === boundingBox.min.z || z === boundingBox.max.z) {
            // Front or back face
            uv[(i / 3) * 2] = (x - boundingBox.min.x) / size.x;
            uv[(i / 3) * 2 + 1] = (y - boundingBox.min.y) / size.y;
         }
      }

      geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
   }
};

export default LaptopModel;
