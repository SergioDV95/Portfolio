import { useState, useRef } from 'react';
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

export default function ContactMe({ lang }) {
   const [input, setInput] = useState({
      user_name: "",
      user_email: "",
      user_phone: "",
      subject: "",
      message: ""
   })
   const [error, setError] = useState({
      user_name: "",
      user_email: "",
      user_phone: "",
      subject: "",
      message: ""
   })
   const submit = useRef();
   if (submit.current) {
      submit.current.disabled = !((input.user_email || input.user_phone) && input.subject && input.message);
   }

   const contact = localStorage.getItem("contact") ? true : false;

   const handleInput = e => {
      setInput(input => ({
         ...input,
         [e.target.name]: e.target.value
      }));
      setError(error => ({
         ...error,
         [e.target.name]: ""
      }));
   }

   const handleValidation = e => {
      e.preventDefault();
      if (e.isTrusted) {
         const regexList = {
            user_name: /^[a-z áéíóúñÁÉÍÓÚÑ]+$/i,
            user_email: /^[a-z0-9.-]+@[a-z0-9-]+(\.[a-z]{2,4}){1,3}$/i,
            user_phone: /^\+[\d]{1,2}[ -\/]?\d{3,4}[ -\/]?\d{3}[ -\/]?\d{2}[ -\/]?\d{2}$/,
            subject: /^[\w áéíóúñÁÉÍÓÚÑ]+$/,
            message: /^[^<>&|]+$/
         };

         const message = {
            user_name: lang === "es" ? "Solo se permiten letras y espacios" : "Only letters and spaces are allowed",
            user_email: lang === "es" ? "Correo inválido" : "Invalid email address",
            user_phone: lang === "es" ? "Teléfono inválido" : "Invalid phone number",
            subject: lang === "es" ? "Asunto inválido" : "Invalid subject",
            message: lang === "es" ? "No se permiten los caracteres: <>&|" : "Not allowed characters: <>&|"
         };

         let newInputs = {};
         let newErrors = {};

         for (let field in input) {
            if (input[field]) {
               if (regexList[field] && !regexList[field].test(input[field])) {
                  newErrors = { ...newErrors, [field]: message[field] };
                  newInputs = { ...newInputs, [field]: "" };
               } else {
                  newErrors = { ...newErrors, [field]: "" };
                  newInputs = { ...newInputs, [field]: input[field] };
               }
            } else {
               newErrors = { ...newErrors, [field]: "" };
            }
         }

         setError(newErrors);
         if (Object.values(newErrors).every(value => !value)) sendEmail();
      }
   }

   const sendEmail = () => {
      emailjs.send('service_dpdh4r9', 'template_6xkwr8l', input, {
         publicKey: 'JmMgOqn5DnvTlOJXD',
      })
         .then(response => {
            if (response.status === 200) {
               alert(lang === "es" ? "Gracias, pronto estaré en contacto" : "Thank you, I will contact you soon");
               localStorage.setItem("contact", navigator.userAgent);
               setInput({
                  user_name: "",
                  user_email: "",
                  user_phone: "",
                  subject: "",
                  message: ""
               });
            }
         }, error => {
            console.log(error.text);
         });
   }

   const optional = <span className='text-[0.7em] align-text-top cursor-help' title={lang === "es" ? "Si alguno de los campos marcados con (?) se rellena, el otro es opcional" : "If one of the fields marked with (?) is filled out, the other is optional"}>(?)</span>;
   const mandatory = <span className=' align-text-top cursor-help' title={lang === "es" ? "Este campo es requerido" : "This field is required"}>*</span>;
   
   const inView = {
      initial: i => ({
         x: (i % 2 == 0) ? -innerWidth / 2 : innerWidth / 2,
      }),
      whileInView: i => ({
         x: 0,
         transition: {
            type: "spring",
            delay: i * 0.05,
            bounce: 0.4,
         }
      }),
   };

   return (
      <form 
         id='contact-form'
         className="w-[90%] md:w-[60%] lg:w-[50%] xl:w-[30%] flex flex-col gap-[10px]"
      >
         <ul className='contactLabel flex flex-col gap-[0.5lh] lg:hidden'>
            <li className='text-[0.7em]'>{lang === "es" ? "Si alguno de los campos marcados con (?) se rellena, el otro es opcional" : "If one of the fields marked with (?) is filled out, the other is optional"}</li>
            <li className='text-[0.7em]'>{lang === "es" ? "Los campos marcados con * son requeridos" : "Fields marked with * are required"}</li>
         </ul>
         <label htmlFor='contact-name' className='contactLabel'>{lang === "es" ? "Nombre completo" : "Full name"}</label>
         <motion.input
            disabled={contact}
            custom={1}
            initial="initial"
            whileInView="whileInView"
            variants={inView}
            className='contactInput'
            id="contact-name"
            form='contact-form'
            title={lang === "es" ? "Nombre y Apellido" : "Firstname and Lastname"}
            type="text"
            name="user_name"
            maxLength={100}
            value={input.user_name}
            onChange={handleInput}
         />
         <div className="relative">
            <span className="error">{error.user_name}</span>
         </div>
         <label htmlFor='contact-email' className='contactLabel'>Email{optional}</label>
         <motion.input
            disabled={contact}
            custom={2}
            initial="initial"
            whileInView="whileInView"
            variants={inView}
            className='contactInput'
            id="contact-email"
            form='contact-form'
            title={lang === "es" ? "Correo electrónico" : "Email address"} 
            type="email"
            name="user_email"
            value={input.user_email}
            onChange={handleInput}
            required
         />
         <div className="relative">
            <span className="error">{error.user_email}</span>
         </div>
         <label htmlFor='contact-phone' className='contactLabel'>{lang === "es" ? "Teléfono" : "Phone"}{optional}</label>
         <motion.input
            disabled={contact}
            custom={3}
            initial="initial"
            whileInView="whileInView"
            variants={inView}
            className='contactInput'
            placeholder={lang === "es" ? "Con prefijo (Ej.: +34)" : "With prefix (E.g.:+34)"}
            id="contact-phone"
            form='contact-form'
            title={lang === "es" ? "Número telefónico" : "Phone number"} 
            type="tel"
            name="user_phone"
            value={input.user_phone}
            onChange={handleInput}
         />
         <div className="relative">
            <span className="error">{error.user_phone}</span>
         </div>
         <label htmlFor='contact-subject' className='contactLabel'>{lang === "es" ? "Asunto" : "Subject"}{mandatory}</label>
         <motion.input
            disabled={contact}
            custom={4}
            initial="initial"
            whileInView="whileInView"
            variants={inView}
            className='contactInput'
            id="contact-subject"
            form='contact-form'
            title={lang === "es" ? "Motivo del contacto" : "Contact reason"} 
            type="text"
            name="subject"
            value={input.subject}
            maxLength={100}
            onChange={handleInput}
            required
         />
         <div className="relative">
            <span className="error">{error.subject}</span>
         </div>
         <label htmlFor='contact-message' className='contactLabel'>{lang === "es" ? "Mensaje" : "Message"}{mandatory}</label>
         <motion.textarea
            disabled={contact}
            custom={5}
            initial="initial"
            whileInView="whileInView"
            variants={inView}
            className='contactInput h-[4lh] lg:h-[6lh]'
            id="contact-message"
            form='contact-form'
            title={lang === "es" ? "Cuerpo del mensaje" : "Message body"}
            name="message"
            maxLength={5000}
            value={input.message}
            onChange={handleInput}
            required
         />
         <div className="relative">
            <span className="error">{error.message}</span>
         </div>
         <div 
            className='flex relative h-[50px] justify-center mt-[10px]'
         >
            {submit.current?.disabled && (
               <div 
                  className="w-[50%] h-full absolute z-10"
                  onClickCapture={e => {
                     e.stopPropagation();
                     submit.current.style.setProperty("--disabled-animation", "disabledButton 0.5s ease-out");
                  }}
               >
               </div>
            )}
            <button
               ref={submit}
               className='buttonGlow'
               form='contact-form'
               title={lang === "es" ? "Enviar formulario" : "Send form"} 
               type="button"
               onClick={handleValidation}
               onAnimationEnd={e => e.target.style.setProperty("--disabled-animation", "none")}
            >
               {lang === "es" ? "ENVIAR" : "SUBMIT"}
            </button>
         </div>
      </form>
   );
}
