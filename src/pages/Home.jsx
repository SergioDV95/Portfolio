import { useContext, useEffect, useState } from "react"
import ContextProps from "../assets/JS/createContext"
import { motion } from "framer-motion"
import Carousel from "../components/Carousel";
import ContactMe from "../components/ContactMe";
import { renderProjects } from "../assets/JS/functions";

export default function Home() {
   const { context } = useContext(ContextProps);
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
            image: "/Portafolio/src/assets/Links/Aguacate.png",
            name: "AGUACATE ECOMMERCE",
            description: "",
            technologies: ["HTML", "CSS"],
            link: "https://sergiodv95.github.io/Marketplace/",
         },
         {
            image: "/Portafolio/src/assets/Links/Polar.png",
            name: "POLAR ECOMMERCE",
            description: "",
            technologies: ["Node.js", "Express.js", "React", "MongoDB"],
            link: "https://sergio.lexpin.online/",
         },
      ],
   });

   const introMssg = context.lang === "es" ? "<p>HOLA, SOY UN<br /><span class='text-[#FFBE00]'>DESARROLLADOR WEB</span><br />A TU SERVICIO</p>" : "<p>HELLO, I'M A<br /><span class='text-[#FFBE00]'>WEB DEVELOPER</span><br />AT YOUR SERVICE</p>";

   useEffect(() => {
      let projectDescription;
      let aboutMe;
      if (context.lang === "es") {
         projectDescription = [
            "Pequeño proyecto sobre la maquetación y diseño de la interfaz de una página web tipo e-commerce con HTML y CSS",
            "Software de comercio electrónico tipo Marketplace con MERN Stack y diseño Responsive. Gestiona usuarios, productos y ventas. Ofrece informes de ventas, interfaz de carrito de compras para clientes, panel de control para vendedores y herramientas de monitoreo para administradores. Solución completa para negocios de comercio electrónico."
         ]
         aboutMe = "<p>Desarrollador Web Full Stack Jr., cuento con experiencia en el desarrollo de aplicaciones web dinámicas y responsivas.<br /><br />Me apasiona el aprendizaje continuo y la mejora de mis habilidades técnicas y creativas. Tengo capacidad para trabajar en equipo, resolver problemas y adaptarme a diferentes requisitos y tecnologías.<br /><br /><span class='font-bold'>Mi objetivo es crear soluciones web innovadoras y de calidad que satisfagan las necesidades de los usuarios y los clientes.</span></p>";
      } else {
         projectDescription = [
            "Small project on the layout and interface design of an e-commerce type website with HTML and CSS",
            "Marketplace e-commerce software with MERN Stack and Responsive design. Manage users, products and sales. It offers sales reports, shopping cart interface for customers, dashboard for sellers, and monitoring tools for administrators. Complete solution for e-commerce businesses."
         ]
         aboutMe = "<p>Full Stack Jr. Web Developer, I have experience in developing dynamic and responsive web applications.<br /><br />I am passionate about continuous learning and improving my technical and creative skills. I have the ability to work in a team, solve problems and adapt to different requirements and technologies.<br /><br /><span class='font-bold'>My goal is to create innovative and quality web solutions that meet the needs of users and clients.</span></p>";
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

   return (
      <main className="mt-[10%] lg:mt-[5%] px-[5%] pb-[5%] flex flex-col max-lg:gap-[60px] overflow-hidden">
         <div id="intro" className="flex flex-col lg:grid lg:min-h-screen lg:grid-cols-[2fr_3fr] gap-[30px] max-lg:items-center">
            <div className="flex flex-col lg:pt-[15%] gap-[15px] lg:gap-[30px] max-lg:items-center">
               <h1 className="font-dela max-lg:text-center text-[22px] lg:text-[30px]" dangerouslySetInnerHTML={{ __html: introMssg }} />
               {context.lgWidth && (
                  <>
                     <div className="flex gap-[10px]">
                        <div className="bg-[#FFBE00] w-[2px] h-[2lh] rounded-full " />
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
                           className="px-[15px] py-[10px] w-full h-full"
                           href = {`src/assets/downloads/${context.lang === "es" ? "CV_Desarrollador.pdf" : "CV_Developer.pdf"}`}
                           download
                           type="application/pdf"
                        >
                           {context.lang === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
                        </a>
                     </button>
                  </>
               )}
               {!context.lgWidth && <div className="bg-[#FFBE00] w-[15%] h-[2px] rounded-full lg:hidden" />}
            </div>
            <div className="relative overflow-hidden">
               <img className="absolute top-[20%] right-[20%] z-[-1] scale-[0.45] lg:scale-[0.35]" src="/Portafolio/src/assets/png/dark/flechas_izq.png" alt="flechas" />
               <img className="absolute top-[15%] left-[25%] z-[-1] scale-[0.5] rotate-90" src="/Portafolio/src/assets/png/dark/puntos.png" alt="flechas" />
               <motion.img 
                  layout
                  animate={{
                     scale: [null, 1.1, 1],
                     y: [null, -5, 0],
                  }} 
                  transition={{ 
                     repeat: Infinity,
                     duration: 8,
                  }}
                  className="lg:relative lg:-right-[35px] box-border max-w-full" 
                  src="/Portafolio/src/assets/Links/laptop.png" 
                  alt="Laptop" 
               />
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
                  href = {`src/assets/downloads/${context.lang === "es" ? "CV_Desarrollador.pdf" : "CV_Developer.pdf"}`}
                  download
                  type="application/pdf"
               >
                  {context.lang === "es" ? "DESCARGAR CV" : "DOWNLOAD CV"}
               </a>
            </button>
         </div>
         <div id={context.lang === "es" ? "SOBRE MI" : "ABOUT ME"} className="flex flex-col lg:grid w-fit lg:grid-cols-[1.5fr_3fr] max-lg:gap-[30px] max-lg:items-center min-h-screen">
            <div className="flex lg:justify-center">
               <figure className="relative mt-[15%] w-[175px] h-[175px] lg:scale-[1.2] rounded-full bg-picture overflow-visible">
                  <img className="scale-[1.20] z-50 -rotate-[2deg] absolute bottom-[10%]" src="/Portafolio/src/assets/png/sergio-daza.png" alt="Yo"/>
                  <img className="scale-[2] lg:scale-[2.2] absolute lg:-left-[25%]" src={context.lang === "es" ? "/Portafolio/src/assets/png/ES/dark/sobre_mi.png" : "/Portafolio/src/assets/png/EN/dark/about_me.png"} alt="About me" />
               </figure>
            </div>
            <div className="relative flex flex-col gap-[30px] lg:gap-[15px] max-lg:items-center">
               {context.lgWidth && <img className="absolute w-[578] h-[10%] -top-[5%] -right-[15%]" src="/Portafolio/src/assets/png/dark/rectas_horizontales.png" alt="lines" />}
               <h1 className="font-dela max-lg:text-center text-[24px] text-[#FFBE00] lg:text-[32px]">
                  {context.lang === "es" ? "SOBRE MÍ" : "ABOUT ME"}
               </h1>
               <div className="flex max-lg:flex-col lg:items-center gap-[30px] max-lg:items-center">
                  <div className="bg-[#FFBE00] w-[15%] lg:w-[2px] h-[2px] lg:h-full rounded-full" />
                  <div className="max-lg:text-center leading-[22px] max-lg:px-[5%]" dangerouslySetInnerHTML={{ __html: text.aboutMe }} />
               </div>
            </div>
         </div>
         <div id={context.lang === "es" ? "HABILIDADES" : "SKILLS"} className="flex flex-col relative gap-[30px] lg:gap-[3lh] items-center max-lg:px-[5%] min-h-[65vh] lg:min-h-screen">
            <figure className="relative flex justify-center items-center">
               <img className={`absolute ${context.lang === "es" ? "-left-[50%] lg:-left-[70%] w-[50%] lg:w-[60%]" : "-left-[100%]"} `} src="/Portafolio/src/assets/png/dark/flechas_der.png" alt="Right arrows"/>
               <h1 className="font-dela max-lg:text-center text-[24px] text-[#FFBE00] lg:text-[32px]">
                  {context.lang === "es" ? "HABILIDADES" : "SKILLS"}
               </h1>
            </figure>
            <div className="bg-[#FFBE00] w-[20%] h-[2px] rounded-full lg:hidden" />
            <img className="absolute top-[40%] z-[-1] scale-[4] lg:scale-[1.5]" src={context.lang === "es" ? "/Portafolio/src/assets/png/ES/dark/habilidades.png" : "/Portafolio/src/assets/png/EN/dark/skills.png" } alt="Skills" />
            <Carousel 
               skills={text.skills} 
               slideClasses={"bg-skills min-h-[150px] border-[2px] border-slate-600 grid grid-cols-[2fr_1fr] gap-x-[10px] p-[10px] rounded-[8px] w-full box-border"} 
            />
         </div>
         <div id={context.lang === "es" ? "PROYECTOS" : "PROJECTS"} className="flex relative flex-col gap-[30px] items-center px-[5%] max-lg:h-[850px] lg:min-h-screen lg:pb-[20vh]">
            <figure className="relative flex justify-center items-center">
               <img className={`absolute ${context.lang === "es" ? "-right-[50%] w-[50%]" : "-right-[60%] w-[60%]"} `} src="/Portafolio/src/assets/png/dark/flechas_der.png" alt="Right arrows"/>
               <h1 className="font-dela max-lg:text-center text-[24px] text-[#FFBE00] lg:text-[32px]">
                  {context.lang === "es" ? "PROYECTOS" : "PROJECTS"}
               </h1>
            </figure>
            <div className="bg-[#FFBE00] w-[20%] h-[2px] rounded-full lg:hidden" />
            <img className="absolute top-[15%] lg:top-[40%] z-[-1] scale-[4] lg:scale-[2]" src={context.lang === "es" ? "/Portafolio/src/assets/png/ES/dark/proyectos.png" : "/Portafolio/src/assets/png/EN/dark/projects.png" } alt="Projects" />
            <Carousel
               slideClasses={"max-lg:text-left max-lg:overflow-x-hidden gap-[50px] max-lg:pt-[30px] flex max-lg:flex-col items-center"}
               cancelButtons={context.lgWidth}
            >
               {renderProjects(text.projects, context.lang, context.lgWidth)}
            </Carousel>
            {context.lgWidth && <img className="absolute w-[578px] scale-[0.8] h-[7%] bottom-0 -left-[15%]" src="/Portafolio/src/assets/png/dark/rectas_horizontales.png" alt="lines" />}
         </div>
         <div id={context.lang === "es" ? "PROCESO" : "PROCESS"} className="flex relative flex-col gap-[30px] items-center px-[5%] lg:h-[80vh] min-h-screen">
            <figure className="relative flex justify-center items-center">
               <h1 className="font-dela max-lg:text-center text-[24px] text-[#FFBE00] lg:text-[32px]">
                  {context.lang === "es" ? "PROCESOS" : "PROCESS"}
               </h1>
            </figure>
            <div className="bg-[#FFBE00] w-[20%] h-[2px] rounded-full lg:hidden" />
            <img className="absolute top-[10%] lg:top-[40%] -left-[35%] z-[-1] lg:scale-[0.3] scale-[0.5]" src="/Portafolio/src/assets/png/dark/puntos.png" alt="flechas" />
            <img className="absolute top-[50%] lg:top-0 lg:right-0 lg:w-[calc(732px/1.2)] z-[-1] max-lg:scale-[1.5]" src={context.lang === "es" ? "/Portafolio/src/assets/png/ES/dark/procesos.png" : "/Portafolio/src/assets/png/EN/dark/processes.png" } alt="Process" />
            <object className="w-full h-full" title="Process" name="Flow Tree" data={`/Portafolio/src/assets/SVG/${context.lgWidth ? "Tree_desktop.svg" : "Tree+Text.svg"}`} type="image/svg+xml" />
         </div>
         <div id="CONTACT" className="flex relative flex-col gap-[30px] items-center px-[5%] min-h-screen">
            <figure className="relative flex justify-center items-center">
               <h1 className="font-dela max-lg:text-center text-[24px] text-[#FFBE00] lg:text-[32px]">
                  {context.lang === "es" ? "CONTÁCTAME" : "CONTACT ME"}
               </h1>
            </figure>
            <div className="bg-[#FFBE00] w-[20%] h-[2px] rounded-full lg:hidden" />
            <img className="absolute top-[40%] z-[-1] max-lg:scale-[1.5] lg:w-[calc(732px/1.2)] lg:-left-[8%]" src={context.lang === "es" ? "/Portafolio/src/assets/png/ES/dark/contactame.png" : "/Portafolio/src/assets/png/EN/dark/contact.png" } alt="Contact me" />
            <ContactMe lang={context.lang} />
         </div>
      </main>
   )
}