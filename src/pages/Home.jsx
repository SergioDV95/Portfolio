import { useContext, useEffect, useState, useRef } from "react"
import ContextProps from "../assets/JS/createContext"
import { motion } from "framer-motion"
import Carousel from "../components/Carousel";
import ContactMe from "../components/ContactMe";
import { renderProjects } from "../assets/JS/functions";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import LaptopModel from "../components/LaptopModel";
import * as imports from "../assets/JS/imports";

/**
 * Function: Home
 * 
 * Description:
 * This function represents the Home component of the application. It displays various sections such as introduction, about me, skills, projects, process, and contact information. The content displayed is based on the context provided.
 * 
 * @returns {JSX.Element} The JSX element representing the Home component.
*/

export default function Home() {
   const { context } = useContext(ContextProps);
   const [playButton, setPlayButton] = useState(false);
   const [text, setText] = useState({
      aboutMe: "",
      skills: {
         Languages: ["TypeScript", "JAVA", "CSS", "PHP", "SQL", "JavaScript", "HTML", "Python"],
         Frameworks: ["React", "Node.js", "Express.js", "Tailwindcss"],
         CMS: ["WordPress"],
         DB: ["MySQL", "MongoDB"],
         Tools: ["VSC", "IntelliJ IDEA", "Figma", "Studio 3T", "Insomnia", "XAMPP", "Cmder", "Filezilla", "Trello", "Asana", "Slack", "Jira", "Milanote"],
      },
      projects: [
         {
            image: imports.aguacate,
            name: "AGUACATE ECOMMERCE",
            description: "",
            technologies: ["HTML", "CSS"],
            link: "https://sergiodv95.github.io/Marketplace/",
         },
         {
            image: imports.polar,
            name: "POLAR ECOMMERCE",
            description: "",
            technologies: ["Node.js", "Express.js", "React", "MongoDB"],
            link: "https://sergio.lexpin.online/",
         },
      ],
   });

   const arrowRef = useRef(null);

   useEffect(() => {
      let projectDescription;
      let aboutMe;
      if (context.lang === "es") {
         projectDescription = [
            "Pequeño proyecto sobre la maquetación y diseño de la interfaz de una página web tipo e-commerce con HTML y CSS",
            "Software de comercio electrónico tipo Marketplace con MERN Stack y diseño Responsive. Gestiona usuarios, productos y ventas. Ofrece informes de ventas, interfaz de carrito de compras para clientes, panel de control para vendedores y herramientas de monitoreo para administradores. Solución completa para negocios de comercio electrónico."
         ]
         aboutMe = "<p>Desarrollador Web Full-stack junior, con una gran pasión por el desarrollo web y un interés creciente en el desarrollo móvil. Tengo experiencia trabajando con una variedad de lenguajes y tecnologías, incluidos HTML, CSS, JavaScript, React, Node.js y más. Siempre estoy ampliando mis habilidades y manteniéndome actualizado con las últimas tendencias y tecnologías.<br /><br />Además de mi experiencia técnica, tengo buena capacidad para afrontar, superar retos y aprender de ellos. Me encanta resolver problemas desafiantes y siempre estoy buscando alguna oportunidad en la que pueda aplicar mis habilidades de programación de maneras novedosas y llamativas.<br /><br /><span class='font-bold'>Mi objetivo es crear soluciones web innovadoras y de calidad que satisfagan las necesidades de los usuarios y los clientes.</span></p>";
      } else {
         projectDescription = [
            "Small project on the layout and interface design of an e-commerce type website with HTML and CSS",
            "Marketplace e-commerce software with MERN Stack and Responsive design. Manage users, products and sales. It offers sales reports, shopping cart interface for customers, dashboard for sellers, and monitoring tools for administrators. Complete solution for e-commerce businesses."
         ]
         aboutMe = "<p>Junior Full-stack Web Developer with a growing interest in mobile development. I have experience working with a variety of languages and technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I'm always expanding my skills and staying up-to-date with the latest trends and technologies in the field of web development.<br /><br />In addition to my technical experience, I have a good ability to face, overcome challenges, and learn from them. I love solving defiant problems and am always looking for opportunities to apply my programming skills in new and innovative ways.<br /><br /><span class='font-bold'>My goal is to create quality web solutions that meet the needs of users and clients.</span></p>";
      }
      setText(text => {
         const newProjects = text.projects.map((project, index) => (
            {
               ...project,
               description: projectDescription[index]
            }
         ))
         return {
            ...text,
            aboutMe: aboutMe,
            projects: newProjects
         }
      });
   }, [context.lang]);

   const arrowVariant = {
      figure: {
         hidden: {
            x: context.lgWidth ? innerWidth / 14 : innerWidth / 6,
         },
         show: {
            x: 0,
            transition: {
               type: "spring",
               duration: 2,
            }
         }
      },
      img: {
         hidden: {
            transform: `rotate(180deg)`,
         },
         show: {
            transform: "rotate(0deg)",
            transition: {
               type: "spring",
               duration: 2,
            }
         }
      }
   };

   return (
      <section className="flex flex-col mt-[10%] lg:mt-[5%] px-[5%] z-[1] pb-[5%] max-lg:gap-[10vh] overflow-hidden">
         <div id="intro" className="flex flex-col lg:grid lg:min-h-screen lg:grid-cols-[2fr_3fr] gap-[30px] max-lg:items-center">
            <div className="flex flex-col lg:pt-[15%] gap-[15px] lg:gap-[30px] max-lg:items-center">
               <div className="font-dela max-lg:text-center text-[1.4em] lg:text-[1.7em] xl:text-[2.1em] xl:whitespace-nowrap">
                  <p>{context.lang === "es" ? "HOLA, SOY UN" : "HELLO, I'M A"}<br />
                     <motion.span
                        className="text-[1.2em] bg-[length:110%] lg:max-xl:text-[1.1em]"
                        style={{
                           WebkitBackgroundClip: "text",
                           backgroundClip: "text",
                           color: "transparent",
                        }}
                        animate={{
                           backgroundImage: context.light ? [
                              "linear-gradient(to right, #012f4b, #FFFFFF, #012f4b 0%)",
                              "linear-gradient(to right, #012f4b, #FFFFFF 0%, #012f4b 10%)",
                              "linear-gradient(to right, #012f4b 0%, #FFFFFF, #012f4b 20%)",
                              "linear-gradient(to right, #012f4b 20%, #FFFFFF, #012f4b 40%)",
                              "linear-gradient(to right, #012f4b 40%, #FFFFFF, #012f4b 60%)",
                              "linear-gradient(to right, #012f4b 60%, #FFFFFF, #012f4b 80%)",
                              "linear-gradient(to right, #012f4b 80%, #FFFFFF, #012f4b 100%)",
                              "linear-gradient(to right, #012f4b 90%, #FFFFFF 100%, #012f4b)",
                              "linear-gradient(to right, #012f4b 100%, #FFFFFF, #012f4b)",
                           ]
                              :
                              [
                                 "linear-gradient(to right, #FFBE00, #FFFFFF, #FFBE00 0%)",
                                 "linear-gradient(to right, #FFBE00, #FFFFFF 0%, #FFBE00 10%)",
                                 "linear-gradient(to right, #FFBE00 0%, #FFFFFF, #FFBE00 20%)",
                                 "linear-gradient(to right, #FFBE00 20%, #FFFFFF, #FFBE00 40%)",
                                 "linear-gradient(to right, #FFBE00 40%, #FFFFFF, #FFBE00 60%)",
                                 "linear-gradient(to right, #FFBE00 60%, #FFFFFF, #FFBE00 80%)",
                                 "linear-gradient(to right, #FFBE00 80%, #FFFFFF, #FFBE00 100%)",
                                 "linear-gradient(to right, #FFBE00 90%, #FFFFFF 100%, #FFBE00)",
                                 "linear-gradient(to right, #FFBE00 100%, #FFFFFF, #FFBE00)",
                              ],
                        }}
                        transition={{
                           duration: 0.65,
                           repeat: Infinity,
                           delay: 5,
                           repeatDelay: 5,
                           type: "tween",
                           ease: "linear",
                        }}
                     >
                        {context.lang === "es" ? "DESARROLLADOR WEB" : "WEB DEVELOPER"}
                     </motion.span><br />
                  </p>
               </div>
               {context.lgWidth && (
                  <>
                     <div className="flex gap-[10px]">
                        <div className="dark:bg-[#FFBE00] bg-[#012f4b] w-[2px] h-[2lh] rounded-full" />
                        <h4 className="">
                           {context.lang === "es" ?
                              "Escultor de ideas para la web, doy forma y convierto en realidad tus proyectos más ambiciosos o sencillos"
                              :
                              "Ideas sculptor for the web, I shape and convert your most ambitious or simple projects into reality"
                           }
                        </h4>
                     </div>
                     <button className="buttonGlow" type="button" >
                        <a
                           className="px-[0.5em] py-[0.5em] w-full h-full"
                           href={context.lang === "es" ? imports.desarrollador : imports.developer}
                           download
                           type="application/pdf"
                        >
                           {context.lang === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
                        </a>
                     </button>
                  </>
               )}
               {!context.lgWidth && <div className="dark:bg-[#FFBE00] bg-[#012f4b] w-[15%] h-[2px] rounded-full" />}
            </div>
            <div className="relative ">
               <div className="absolute top-[30%] lg:top-[20%] right-[30%] 4xl:right-[35%]  scale-[0.85] md:scale-[0.5] lg:scale-[0.6] xl:scale-[0.5] w-fit overflow-x-hidden">
                  {/* <motion.img
                     animate={{ x: [null, "-17.8%"] }}
                     transition={{
                        ease: "linear",
                        repeat: Infinity,
                        duration: 2,
                     }}
                     src={imports.flechas_izq}
                     alt="flechas"
                  /> */}
               </div>
               <img
                  className="absolute top-[15%] left-[25%] 2xl:left-[35%]  scale-[0.7] 2xl:scale-[0.6] rotate-90"
                  src={imports.puntos}
                  alt="puntos"
               />
               <div className="absolute w-full h-full z-[2]" />
               <motion.img
                  initial={{
                     x: innerWidth / 3,
                  }}
                  whileInView={{
                     x: 0,
                     transition: {
                        type: "spring",
                     },
                     scale: 1.25,
                  }}
                  src={imports.laptop}
                  onContextMenu={e => e.preventDefault()}
                  alt="Laptop"
               />
               {/* <Canvas
                  gl={{ antialias: true, failIfMajorPerformanceCaveat: true }}
                  onCreated={({ gl }) => {
                     if (!gl.getContext()) {
                        console.error('WebGL not supported, falling back to CanvasRenderer');
                        // Fallback logic here
                     }
                  }}
               >
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <LaptopModel />
                  <OrbitControls />
               </Canvas> */}
            </div>
            <h4 className="text-center lg:hidden">
               {context.lang === "es" ?
                  "Escultor de ideas para la web, doy forma y convierto en realidad tus proyectos más ambiciosos o sencillos"
                  :
                  "Ideas sculptor for the web, I shape and convert your most ambitious or simple projects into reality"
               }
            </h4>
            <button className="buttonGlow lg:hidden" type="button" >
               <a
                  className="px-[15px] py-[10px] w-full h-full"
                  href={context.lang === "es" ? imports.desarrollador : imports.developer}
                  download
                  type="application/pdf"
               >
                  {context.lang === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
               </a>
            </button>
         </div>
         <div id={context.lang === "es" ? "SOBRE MI" : "ABOUT ME"} className="flex flex-col lg:grid w-fit lg:grid-cols-[1.5fr_3fr] max-lg:gap-[30px] max-lg:items-center max-md:mt-[35%] max-lg:mt-[25%] min-h-screen">
            <div className="flex lg:justify-center relative">
               <motion.div
                  initial={{
                     x: -(innerWidth / 5),
                  }}
                  whileInView={{
                     x: 0,
                     transition: {
                        type: "spring",
                     }
                  }}
               >
                  <figure
                     className="relative mt-[5vh] lg:mt-[15vh] 3xl:mt-[20vh] w-[175px] h-[175px] lg:scale-[1.2] 2xl:scale-[1.4] 3xl:scale-[1.6] rounded-full bg-picture overflow-visible z-10"
                  >
                     <img className="scale-[1.20] -rotate-[2deg] absolute bottom-[10%]" src={imports.yo} alt="Yo" />
                  </figure>
               </motion.div>
               <img className="absolute -z-[1] top-0 md:max-lg:top-[15%] -left-[5%] scale-[2] md:scale-[2.5] lg:scale-[1.1]" src={context.lang === "es" ? imports.sobre_mi : imports.about_me} alt="About me" />
            </div>
            <div className="relative flex flex-col gap-[30px] lg:gap-[15px] max-lg:items-center">
               {context.lgWidth && <img className="absolute w-[578] h-[10%] -top-[5%] -right-[15%]" src={imports.rectas_horizontales} alt="lines" />}
               <h1 className="main-headings">
                  {context.lang === "es" ? "SOBRE MÍ" : "ABOUT ME"}
               </h1>
               <div className="flex max-lg:flex-col lg:items-center gap-[30px] max-lg:items-center">
                  <div className="dark:bg-[#FFBE00] bg-[#012f4b] w-[15%] lg:w-[2px] h-[2px] lg:h-full rounded-full" />
                  <div className="max-lg:text-center leading-[1.5em] max-lg:px-[5%]" dangerouslySetInnerHTML={{ __html: text.aboutMe }} />
               </div>
            </div>
         </div>
         <div id={context.lang === "es" ? "HABILIDADES" : "SKILLS"} className="flex z-[0] flex-col relative gap-[30px] lg:gap-[3lh] items-center max-lg:px-[5%] min-h-screen">
            <figure className="relative flex justify-center items-center">
               {/* <img className={`absolute ${context.lang === "es" ? "-left-[50%] lg:-left-[70%] w-[50%] lg:w-[60%]" : "-left-[100%]"} `} src={imports.flechas_der} alt="Right arrows" /> */}
               <h1 className="main-headings">
                  {context.lang === "es" ? "HABILIDADES" : "SKILLS"}
               </h1>
               {context.lgWidth &&
                  <button
                     className="buttonGlow dark:border-[#FFFFFF80] absolute -right-[35%] text-[1em]"
                     onClick={() => setPlayButton(!playButton)}
                  >
                     <img className="w-[2em] h-[2em]" src={playButton ? imports.stopIcon : imports.playIcon} alt="start/stop" />
                  </button>
               }
            </figure>
            {!context.lgWidth &&
               <button
                  className="buttonGlow dark:border-[#FFFFFF80] text-[1em] "
                  onClick={() => setPlayButton(!playButton)}
               >
                  <img className="w-[2em] h-[2em]" src={playButton ? imports.stopIcon : imports.playIcon} alt="start/stop" />
               </button>
            }
            <div className="dark:bg-[#FFBE00] bg-[#012f4b] w-[20%] h-[2px] rounded-full lg:hidden" />
            <img className="absolute top-[40%] z-[-1] scale-[4] lg:scale-[1.5]" src={context.lang === "es" ? imports.habilidades : imports.skills} alt="Skills" />
            <motion.div
               initial={{
                  x: -innerWidth / 2,
               }}
               whileInView={{
                  x: 0,
                  transition: {
                     type: "spring",
                  }
               }}
            >
               <Carousel
                  playButton={playButton}
                  skills={text.skills}
                  slideClasses={"bg-skills relative md:max-lg:min-h-[100px] min-h-[200px] border-[2px] border-white dark:border-[#FFFFFF80] grid grid-cols-[1.5fr_1fr] gap-x-[10px] p-[10px] rounded-[8px] w-full box-border"}
               />
            </motion.div>
         </div>
         <div id={context.lang === "es" ? "PROYECTOS" : "PROJECTS"} className="flex z-[0] relative flex-col gap-[30px] items-center px-[5%] lg:min-h-screen lg:pb-[20vh]">
            <figure className="relative flex justify-center items-center">
               {/* <img className={`absolute ${context.lang === "es" ? "-right-[50%] w-[50%]" : "-right-[60%] w-[60%]"} `} src={imports.flechas_der} alt="Right arrows" /> */}
               <h1 className="main-headings">
                  {context.lang === "es" ? "PROYECTOS" : "PROJECTS"}
               </h1>
            </figure>
            <div className="dark:bg-[#FFBE00] bg-[#012f4b] w-[20%] h-[2px] rounded-full lg:hidden" />
            <img className="absolute top-[15%] lg:top-[40%] z-[-1] scale-[4] lg:scale-[2]" src={context.lang === "es" ? imports.proyectos : imports.projects} alt="Projects" />
            <Carousel
               cancelButtons={context.lgWidth}
            >
               {renderProjects(text.projects, context)}
            </Carousel>
            {context.lgWidth && <img className="absolute w-[578px] scale-[0.8] h-[7%] bottom-0 -left-[15%]" src={imports.rectas_horizontales} alt="lines" />}
         </div>
         <div id={context.lang === "es" ? "PROCESO" : "PROCESS"} className="flex relative z-[0] flex-col gap-[30px] items-center px-[5%] lg:h-[80vh] min-h-screen">
            <figure className="relative flex justify-center items-center">
               <h1 className="main-headings">
                  {context.lang === "es" ? "PROCESOS" : "PROCESS"}
               </h1>
            </figure>
            <div className="dark:bg-[#FFBE00] bg-[#012f4b] w-[20%] h-[2px] rounded-full lg:hidden" />
            <img className="absolute top-[10%] lg:top-[40%] -left-[35%] z-[-1] lg:scale-[0.3] scale-[0.5]" src={imports.puntos} alt="flechas" />
            <img className="absolute top-[50%] lg:top-0 lg:right-0 lg:w-[calc(732px/1.2)] z-[-1] max-lg:scale-[1.5]" src={context.lang === "es" ? imports.procesos : imports.processes} alt="Process" />
            <motion.object
               initial={{
                  x: innerWidth / 2,
               }}
               whileInView={{
                  x: 0,
                  transition: {
                     type: "spring",
                     bounce: 0.3,
                     duration: 0.6
                  }
               }}
               className="w-full h-full lg:w-[110%] lg:h-[110%] md:max-lg:w-[60%] md:max-lg:h-[60%]"
               title="Process"
               name="Flow Tree"
               data={context.lgWidth ? imports.tree_desktop : imports.tree_mobile}
               type="image/svg+xml"
            />
         </div>
         <div id="CONTACT" className="flex relative flex-col gap-[30px] items-center px-[5%] min-h-screen z-[0]">
            <figure className="relative flex justify-center items-center">
               <h1 className="main-headings">
                  {context.lang === "es" ? "CONTÁCTAME" : "CONTACT ME"}
               </h1>
            </figure>
            <div className="dark:bg-[#FFBE00] bg-[#012f4b] w-[20%] h-[2px] rounded-full lg:hidden" />
            <img className="absolute top-[40%] z-[-1] max-lg:scale-[1.5] lg:w-[calc(732px/1.2)] lg:-left-[8%]" src={context.lang === "es" ? imports.contactame : imports.contact} alt="Contact me" />
            <ContactMe lang={context.lang} />
         </div>
         <motion.button
            type="button"
            ref={arrowRef}
            className="rounded-full bg-white w-fit p-[0.75em] cursor-pointer sticky top-[80%] left-[80%] lg:left-[95%] z-10"
            initial="hidden"
            whileInView="show"
            variants={arrowVariant.figure}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
         >
            <motion.img
               className="w-[2em] h-[2em]"
               alt="Arrow"
               src={imports.arrowUp}
               variants={arrowVariant.img}
            />
         </motion.button>
      </section>
   )
};