import{r as n,u as q,f as ae,a as re,P as ne,b as le,C as K,j as t,m as j}from"./index-Cy1Z8ttU.js";import{s as _,r as oe}from"./functions-Cpt6mZ0Q.js";function J(){const e=n.useRef(!1);return q(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function ie(){const e=J(),[s,a]=n.useState(0),l=n.useCallback(()=>{e.current&&a(s+1)},[s]);return[n.useCallback(()=>ae.postRender(l),[l]),s]}class ce extends n.Component{getSnapshotBeforeUpdate(s){const a=this.props.childRef.current;if(a&&s.isPresent&&!this.props.isPresent){const l=this.props.sizeRef.current;l.height=a.offsetHeight||0,l.width=a.offsetWidth||0,l.top=a.offsetTop,l.left=a.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function de({children:e,isPresent:s}){const a=n.useId(),l=n.useRef(null),p=n.useRef({width:0,height:0,top:0,left:0});return n.useInsertionEffect(()=>{const{width:h,height:m,top:u,left:i}=p.current;if(s||!l.current||!h||!m)return;l.current.dataset.motionPopId=a;const f=document.createElement("style");return document.head.appendChild(f),f.sheet&&f.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${m}px !important;
            top: ${u}px !important;
            left: ${i}px !important;
          }
        `),()=>{document.head.removeChild(f)}},[s]),n.createElement(ce,{isPresent:s,childRef:l,sizeRef:p},n.cloneElement(e,{ref:l}))}const I=({children:e,initial:s,isPresent:a,onExitComplete:l,custom:p,presenceAffectsLayout:h,mode:m})=>{const u=re(me),i=n.useId(),f=n.useMemo(()=>({id:i,initial:s,isPresent:a,custom:p,onExitComplete:c=>{u.set(c,!0);for(const g of u.values())if(!g)return;l&&l()},register:c=>(u.set(c,!1),()=>u.delete(c))}),h?void 0:[a]);return n.useMemo(()=>{u.forEach((c,g)=>u.set(g,!1))},[a]),n.useEffect(()=>{!a&&!u.size&&l&&l()},[a]),m==="popLayout"&&(e=n.createElement(de,{isPresent:a},e)),n.createElement(ne.Provider,{value:f},e)};function me(){return new Map}function ue(e){return n.useEffect(()=>()=>e(),[])}const R=e=>e.key||"";function pe(e,s){e.forEach(a=>{const l=R(a);s.set(l,a)})}function ge(e){const s=[];return n.Children.forEach(e,a=>{n.isValidElement(a)&&s.push(a)}),s}const he=({children:e,custom:s,initial:a=!0,onExitComplete:l,exitBeforeEnter:p,presenceAffectsLayout:h=!0,mode:m="sync"})=>{const u=n.useContext(le).forceRender||ie()[0],i=J(),f=ge(e);let c=f;const g=n.useRef(new Map).current,y=n.useRef(c),F=n.useRef(new Map).current,d=n.useRef(!0);if(q(()=>{d.current=!1,pe(f,F),y.current=c}),ue(()=>{d.current=!0,F.clear(),g.clear()}),d.current)return n.createElement(n.Fragment,null,c.map(r=>n.createElement(I,{key:R(r),isPresent:!0,initial:a?void 0:!1,presenceAffectsLayout:h,mode:m},r)));c=[...c];const w=y.current.map(R),S=f.map(R),N=w.length;for(let r=0;r<N;r++){const o=w[r];S.indexOf(o)===-1&&!g.has(o)&&g.set(o,void 0)}return m==="wait"&&g.size&&(c=[]),g.forEach((r,o)=>{if(S.indexOf(o)!==-1)return;const v=F.get(o);if(!v)return;const k=w.indexOf(o);let x=r;if(!x){const C=()=>{g.delete(o);const P=Array.from(F.keys()).filter(E=>!S.includes(E));if(P.forEach(E=>F.delete(E)),y.current=f.filter(E=>{const L=R(E);return L===o||P.includes(L)}),!g.size){if(i.current===!1)return;u(),l&&l()}};x=n.createElement(I,{key:R(v),isPresent:!1,onExitComplete:C,custom:s,presenceAffectsLayout:h,mode:m},v),g.set(o,x)}c.splice(k,0,x)}),c=c.map(r=>{const o=r.key;return g.has(o)?r:n.createElement(I,{key:R(r),isPresent:!0,presenceAffectsLayout:h,mode:m},r)}),n.createElement(n.Fragment,null,g.size?c:c.map(r=>n.cloneElement(r)))},fe="/Portfolio/png/dark/flechas_izq.png",O="/Portfolio/png/dark/puntos.png",xe="/Portfolio/Links/laptop.png",D="/Portfolio/downloads/CV_Desarrollador.pdf",A="/Portfolio/downloads/CV_Developer.pdf",be="/Portfolio/Links/Aguacate.png",je="/Portfolio/Links/Polar.png",we="/Portfolio/png/sergio-daza.png",ve="/Portfolio/png/ES/dark/sobre_mi.png",ye="/Portfolio/png/EN/dark/about_me.png",V="/Portfolio/png/dark/rectas_horizontales.png",z="/Portfolio/png/dark/flechas_der.png",Fe="/Portfolio/png/ES/dark/habilidades.png",Ee="/Portfolio/png/EN/dark/skills.png",Ne="/Portfolio/png/ES/dark/proyectos.png",Se="/Portfolio/png/EN/dark/projects.png",Ce="/Portfolio/png/ES/dark/procesos.png",Pe="/Portfolio/png/EN/dark/processes.png",ke="/Portfolio/png/ES/dark/contactame.png",Re="/Portfolio/png/EN/dark/contact.png",Le="/Portfolio/SVG/LENGUAJES.svg",Me="/Portfolio/SVG/FRAMEWORKS.svg",Te="/Portfolio/SVG/CMS.svg",Ie="/Portfolio/SVG/DB.svg",Be="/Portfolio/SVG/TOOLS.svg",_e="/Portfolio/SVG/Tree_desktop.svg",Oe="/Portfolio/SVG/Tree+Text.svg",W="/Portfolio/SVG/play-solid.svg",H="/Portfolio/SVG/stop-solid.svg";function G({skills:e,slideClasses:s,children:a,startIndex:l,endIndex:p,cancelButtons:h,playButton:m}){const{context:u}=n.useContext(K),[i,f]=n.useState({start:l||0,end:u.lgWidth?p||3:1,direction:"",currentSlide:0}),[c,g]=n.useState({slides:[],buttons:[]});n.useEffect(()=>{f(r=>({...r,end:u.lgWidth?p||3:1}))},[u.lgWidth]),n.useEffect(()=>{var r;(r=c.buttons[i.currentSlide])!=null&&r.current&&c.buttons[i.currentSlide].current.click()},[m]);let y;const F=n.useMemo(()=>Date.now()/2+Math.round(Math.random()*1e3),[]),d={right:{x:window.innerWidth,scale:.1},left:{x:-window.innerWidth,scale:.1}},w=()=>{if(!(!e&&!a)){if(a)return a.slice(i.start,i.end).map((r,o)=>t.jsx(j.div,{layout:!0,className:s,initial:i.direction==="right"?d.right:d.left,animate:{x:0,scale:1},exit:i.direction==="left"?d.right:d.left,children:r},"children"+Date.now()+o));{const r=[],o=[Le,Me,Te,Ie,Be];return Object.entries(e).slice(i.start,i.end).map(([v,k],x)=>t.jsxs(j.div,{layout:!0,className:s,transition:{delay:x*.1},initial:i.direction==="right"?d.right:d.left,animate:{x:0,scale:1},exit:i.direction==="left"?d.right:d.left,children:[t.jsxs("div",{className:"flex flex-col",ref:c.slides[x],children:[t.jsxs("h3",{children:[v,":"]}),t.jsx("div",{className:"flex flex-wrap gap-[5px] h-full content-start",children:Array.isArray(k)&&k.map((C,P)=>{const E=Math.random();return E<.33&&r[r.length-1]!=="bg-[#3E619B]"?r.push("bg-[#3E619B]"):E<.66&&r[r.length-1]!=="bg-[#EA4B4C]"?r.push("bg-[#EA4B4C]"):r[r.length-1]!=="bg-[#42506B]"?r.push("bg-[#42506B]"):r.push("bg-[#FFBE00]"),t.jsxs("div",{className:"relative w-fit h-fit",children:[t.jsx("div",{className:"w-[96%] h-[96%] box-border absolute top-0 left-0 border-[2px] xl:border-[3px] border-gray-300 border-dashed rounded-[7px]"}),t.jsx(j.p,{layout:!0,className:`${r[P]} relative z-10 font-bold text-[12px] xl:text-[14px] 2xl:text-[16px] p-[5px] cursor-grab rounded-[5px] text-center`,initial:{x:0,y:0},animate:m?{x:_(-175,175)+"%",y:_(-175,175)+"%",transition:{type:"spring",damping:8,stiffness:200}}:null,drag:!0,whileTap:{cursor:"grabbing"},dragTransition:{power:.3},children:C})]},"skill"+C+P)})})]}),t.jsx("div",{className:"flex flex-col justify-center items-center",children:t.jsx("div",{className:"animate-pulse bg-picture p-[20%] md:p-[20px] shadow-button w-full h-[60%] rounded-[8px] ",children:t.jsx("img",{className:"w-full h-full max-lg:scale-[1.2]",src:o.slice(i.start,i.end)[x],alt:"image/svg+xml",onLoad:C=>C.target.parentElement.classList.remove("animate-pulse")})})})]},"key"+v+x))}}},S=n.useMemo(()=>w(),[i,e,a,u.lgWidth]);n.useEffect(()=>{g(r=>{const o=v=>new Array(v.length).fill().map(()=>n.createRef());return r.buttons.length?{...r,slides:o(w())}:{slides:o(w()),buttons:o(N())}})},[S]);const N=()=>{if(!e&&!a)return;const r=a?a.length:Object.keys(e).length,o=Math.ceil(r/(i.end-i.start)),v=i.end-i.start,k=[];for(let x=0;x<o;x++)k.push(t.jsx(j.input,{layout:!0,ref:c.buttons[x],name:"slideDots"+F,className:" w-[10px] h-[10px] rounded-full enabled:cursor-pointer",initial:{backgroundColor:"#D9D9D94D",scale:1},animate:i.currentSlide===x?{backgroundColor:"#D9D9D9",scale:1.4}:{backgroundColor:"#D9D9D94D",scale:1},type:"button",onClick:C=>{C.stopPropagation();const P=v*x,E=P+v,L=x;let T;L>i.currentSlide?T="right":T="left",f(se=>({...se,start:P,end:E,direction:T,currentSlide:L}))}},"input"+Date.now()+x));return k};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex flex-col relative w-full pb-[60px] gap-[30px] lg:gap-[60px] items-center px-[5%]",onTouchStart:r=>{r.stopPropagation(),y=r.touches[0].clientX},onTouchEnd:r=>{r.stopPropagation();let o=document.getElementsByName(`slideDots${F}`),v=y-r.changedTouches[0].clientX;Math.abs(v)>window.innerWidth/2.5&&(Math.sign(v)===1?i.currentSlide===o.length-1?o[0].click():o[i.currentSlide+1].click():i.currentSlide===0?o[o.length-1].click():o[i.currentSlide-1].click())},children:[t.jsx("div",{className:`flex ${e?"max-lg:flex-col":"flex-col lg:gap-[20vh]"} gap-[30px]`,children:t.jsx(he,{initial:!0,mode:"popLayout",children:S})}),!h&&t.jsx(j.div,{layout:!0,className:"flex gap-[10px]",children:N()})]})})}class M{constructor(s=0,a="Network Error"){this.status=s,this.text=a}}const De=()=>{if(!(typeof localStorage>"u"))return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,s)=>Promise.resolve(localStorage.setItem(e,s)),remove:e=>Promise.resolve(localStorage.removeItem(e))}},b={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:De()},B=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},Ae=(e,s="https://api.emailjs.com")=>{if(!e)return;const a=B(e);b.publicKey=a.publicKey,b.blockHeadless=a.blockHeadless,b.storageProvider=a.storageProvider,b.blockList=a.blockList,b.limitRate=a.limitRate,b.origin=a.origin||s},$=async(e,s,a={})=>{const l=await fetch(b.origin+e,{method:"POST",headers:a,body:s}),p=await l.text(),h=new M(l.status,p);if(l.ok)return h;throw h},U=(e,s,a)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s||typeof s!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a||typeof a!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ve=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},X=e=>e.webdriver||!e.languages||e.languages.length===0,Y=()=>new M(451,"Unavailable For Headless Browser"),ze=(e,s)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof s!="string")throw"The BlockList watchVariable has to be a string"},We=e=>{var s;return!((s=e.list)!=null&&s.length)||!e.watchVariable},He=(e,s)=>e instanceof FormData?e.get(s):e[s],Q=(e,s)=>{if(We(e))return!1;ze(e.list,e.watchVariable);const a=He(s,e.watchVariable);return typeof a!="string"?!1:e.list.includes(a)},Z=()=>new M(403,"Forbidden"),Ge=(e,s)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(s&&typeof s!="string")throw"The LimitRate ID has to be a string"},qe=async(e,s,a)=>{const l=Number(await a.get(e)||0);return s-Date.now()+l},ee=async(e,s,a)=>{if(!s.throttle||!a)return!1;Ge(s.throttle,s.id);const l=s.id||e;return await qe(l,s.throttle,a)>0?!0:(await a.set(l,Date.now().toString()),!1)},te=()=>new M(429,"Too Many Requests"),Ke=async(e,s,a,l)=>{const p=B(l),h=p.publicKey||b.publicKey,m=p.blockHeadless||b.blockHeadless,u=b.storageProvider||p.storageProvider,i={...b.blockList,...p.blockList},f={...b.limitRate,...p.limitRate};return m&&X(navigator)?Promise.reject(Y()):(U(h,e,s),Ve(a),a&&Q(i,a)?Promise.reject(Z()):await ee(location.pathname,f,u)?Promise.reject(te()):$("/api/v1.0/email/send",JSON.stringify({lib_version:"4.3.3",user_id:h,service_id:e,template_id:s,template_params:a}),{"Content-type":"application/json"}))},Je=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},$e=e=>typeof e=="string"?document.querySelector(e):e,Ue=async(e,s,a,l)=>{const p=B(l),h=p.publicKey||b.publicKey,m=p.blockHeadless||b.blockHeadless,u=b.storageProvider||p.storageProvider,i={...b.blockList,...p.blockList},f={...b.limitRate,...p.limitRate};if(m&&X(navigator))return Promise.reject(Y());const c=$e(a);U(h,e,s),Je(c);const g=new FormData(c);return Q(i,g)?Promise.reject(Z()):await ee(location.pathname,f,u)?Promise.reject(te()):(g.append("lib_version","4.3.3"),g.append("service_id",e),g.append("template_id",s),g.append("user_id",h),$("/api/v1.0/email/send-form",g))},Xe={init:Ae,send:Ke,sendForm:Ue,EmailJSResponseStatus:M};function Ye({lang:e}){var F;const[s,a]=n.useState({user_name:"",user_email:"",user_phone:"",subject:"",message:""}),[l,p]=n.useState({user_name:"",user_email:"",user_phone:"",subject:"",message:""}),h=n.useRef();h.current&&(h.current.disabled=!((s.user_email||s.user_phone)&&s.subject&&s.message));const m=!!localStorage.getItem("contact"),u=d=>{a(w=>({...w,[d.target.name]:d.target.value})),p(w=>({...w,[d.target.name]:""}))},i=d=>{if(d.preventDefault(),d.isTrusted){const w={user_name:/^[a-z áéíóúñÁÉÍÓÚÑ]+$/i,user_email:/^[a-z0-9.-]+@[a-z0-9-]+(\.[a-z]{2,4}){1,3}$/i,user_phone:/^\+[\d]{1,2}[ -\/]?\d{3,4}[ -\/]?\d{3}[ -\/]?\d{2}[ -\/]?\d{2}$/,subject:/^[\w áéíóúñÁÉÍÓÚÑ]+$/,message:/^[^<>&|]+$/},S={user_name:e==="es"?"Solo se permiten letras y espacios":"Only letters and spaces are allowed",user_email:e==="es"?"Correo inválido":"Invalid email address",user_phone:e==="es"?"Teléfono inválido":"Invalid phone number",subject:e==="es"?"Asunto inválido":"Invalid subject",message:e==="es"?"No se permiten los caracteres: <>&|":"Not allowed characters: <>&|"};let N={},r={};for(let o in s)s[o]?w[o]&&!w[o].test(s[o])?(r={...r,[o]:S[o]},N={...N,[o]:""}):(r={...r,[o]:""},N={...N,[o]:s[o]}):r={...r,[o]:""};p(r),Object.values(r).every(o=>!o)&&f()}},f=()=>{Xe.send("service_dpdh4r9","template_6xkwr8l",s,{publicKey:"JmMgOqn5DnvTlOJXD"}).then(d=>{d.status===200&&(alert(e==="es"?"Gracias, pronto estaré en contacto":"Thank you, I will contact you soon"),localStorage.setItem("contact",navigator.userAgent),a({user_name:"",user_email:"",user_phone:"",subject:"",message:""}))},d=>{console.log(d.text)})},c=t.jsx("span",{className:"text-[0.7em] align-text-top cursor-help",title:e==="es"?"Si alguno de los campos marcados con (?) se rellena, el otro es opcional":"If one of the fields marked with (?) is filled out, the other is optional",children:"(?)"}),g=t.jsx("span",{className:" align-text-top cursor-help",title:e==="es"?"Este campo es requerido":"This field is required",children:"*"}),y={initial:d=>({x:d%2==0?-innerWidth/2:innerWidth/2}),whileInView:d=>({x:0,transition:{type:"spring",delay:d*.05,bounce:.4}})};return t.jsxs("form",{id:"contact-form",className:"w-[90%] md:w-[60%] lg:w-[50%] xl:w-[30%] flex flex-col gap-[10px]",children:[t.jsxs("ul",{className:"contactLabel flex flex-col gap-[0.5lh] lg:hidden",children:[t.jsx("li",{className:"text-[0.7em]",children:e==="es"?"Si alguno de los campos marcados con (?) se rellena, el otro es opcional":"If one of the fields marked with (?) is filled out, the other is optional"}),t.jsx("li",{className:"text-[0.7em]",children:e==="es"?"Los campos marcados con * son requeridos":"Fields marked with * are required"})]}),t.jsx("label",{htmlFor:"contact-name",className:"contactLabel",children:e==="es"?"Nombre completo":"Full name"}),t.jsx(j.input,{disabled:m,custom:1,initial:"initial",whileInView:"whileInView",variants:y,className:"contactInput",id:"contact-name",form:"contact-form",title:e==="es"?"Nombre y Apellido":"Firstname and Lastname",type:"text",name:"user_name",maxLength:100,value:s.user_name,onChange:u}),t.jsx("div",{className:"relative",children:t.jsx("span",{className:"error",children:l.user_name})}),t.jsxs("label",{htmlFor:"contact-email",className:"contactLabel",children:["Email",c]}),t.jsx(j.input,{disabled:m,custom:2,initial:"initial",whileInView:"whileInView",variants:y,className:"contactInput",id:"contact-email",form:"contact-form",title:e==="es"?"Correo electrónico":"Email address",type:"email",name:"user_email",value:s.user_email,onChange:u,required:!0}),t.jsx("div",{className:"relative",children:t.jsx("span",{className:"error",children:l.user_email})}),t.jsxs("label",{htmlFor:"contact-phone",className:"contactLabel",children:[e==="es"?"Teléfono":"Phone",c]}),t.jsx(j.input,{disabled:m,custom:3,initial:"initial",whileInView:"whileInView",variants:y,className:"contactInput",placeholder:e==="es"?"Con prefijo (Ej.: +34)":"With prefix (E.g.:+34)",id:"contact-phone",form:"contact-form",title:e==="es"?"Número telefónico":"Phone number",type:"tel",name:"user_phone",value:s.user_phone,onChange:u}),t.jsx("div",{className:"relative",children:t.jsx("span",{className:"error",children:l.user_phone})}),t.jsxs("label",{htmlFor:"contact-subject",className:"contactLabel",children:[e==="es"?"Asunto":"Subject",g]}),t.jsx(j.input,{disabled:m,custom:4,initial:"initial",whileInView:"whileInView",variants:y,className:"contactInput",id:"contact-subject",form:"contact-form",title:e==="es"?"Motivo del contacto":"Contact reason",type:"text",name:"subject",value:s.subject,maxLength:100,onChange:u,required:!0}),t.jsx("div",{className:"relative",children:t.jsx("span",{className:"error",children:l.subject})}),t.jsxs("label",{htmlFor:"contact-message",className:"contactLabel",children:[e==="es"?"Mensaje":"Message",g]}),t.jsx(j.textarea,{disabled:m,custom:5,initial:"initial",whileInView:"whileInView",variants:y,className:"contactInput h-[4lh] lg:h-[6lh]",id:"contact-message",form:"contact-form",title:e==="es"?"Cuerpo del mensaje":"Message body",name:"message",maxLength:5e3,value:s.message,onChange:u,required:!0}),t.jsx("div",{className:"relative",children:t.jsx("span",{className:"error",children:l.message})}),t.jsxs("div",{className:"flex relative h-[50px] justify-center mt-[10px]",children:[((F=h.current)==null?void 0:F.disabled)&&t.jsx("div",{className:"w-[50%] h-full absolute z-10",onClickCapture:d=>{d.stopPropagation(),h.current.style.setProperty("--disabled-animation","disabledButton 0.5s ease-out")}}),t.jsx("button",{ref:h,className:"buttonGlow",form:"contact-form",title:e==="es"?"Enviar formulario":"Send form",type:"button",onClick:i,onAnimationEnd:d=>d.target.style.setProperty("--disabled-animation","none"),children:e==="es"?"ENVIAR":"SUBMIT"})]})]})}function et(){const{context:e}=n.useContext(K),[s,a]=n.useState(!1),[l,p]=n.useState({aboutMe:"",skills:{Languages:["TypeScript","JAVA","CSS","PHP","SQL","JavaScript","HTML","Python"],Frameworks:["React","Node.js","Express.js","Tailwindcss"],CMS:["WordPress"],DB:["MySQL","MongoDB"],Tools:["VSC","IntelliJ IDEA","Figma","Studio 3T","Insomnia","XAMPP","Cmder","Filezilla","Trello","Asana","Slack","Jira","Milanote"]},projects:[{image:be,name:"AGUACATE ECOMMERCE",description:"",technologies:["HTML","CSS"],link:"https://sergiodv95.github.io/Marketplace/"},{image:je,name:"POLAR ECOMMERCE",description:"",technologies:["Node.js","Express.js","React","MongoDB"],link:"https://sergio.lexpin.online/"}]}),h=n.useRef({});return n.useEffect(()=>{let m,u;e.lang==="es"?(m=["Pequeño proyecto sobre la maquetación y diseño de la interfaz de una página web tipo e-commerce con HTML y CSS","Software de comercio electrónico tipo Marketplace con MERN Stack y diseño Responsive. Gestiona usuarios, productos y ventas. Ofrece informes de ventas, interfaz de carrito de compras para clientes, panel de control para vendedores y herramientas de monitoreo para administradores. Solución completa para negocios de comercio electrónico."],u="<p>Desarrollador Web Full-stack junior, con una gran pasión por el desarrollo web y un interés creciente en el desarrollo móvil. Tengo experiencia trabajando con una variedad de lenguajes y tecnologías, incluidos HTML, CSS, JavaScript, React, Node.js y más. Siempre estoy ampliando mis habilidades y manteniéndome actualizado con las últimas tendencias y tecnologías.<br /><br />Además de mi experiencia técnica, tengo buena capacidad para afrontar, superar retos y aprender de ellos. Me encanta resolver problemas desafiantes y siempre estoy buscando alguna oportunidad en la que pueda aplicar mis habilidades de programación de maneras novedosas y llamativas.<br /><br /><span class='font-bold'>Mi objetivo es crear soluciones web innovadoras y de calidad que satisfagan las necesidades de los usuarios y los clientes.</span></p>"):(m=["Small project on the layout and interface design of an e-commerce type website with HTML and CSS","Marketplace e-commerce software with MERN Stack and Responsive design. Manage users, products and sales. It offers sales reports, shopping cart interface for customers, dashboard for sellers, and monitoring tools for administrators. Complete solution for e-commerce businesses."],u="<p>Junior Full-stack Web Developer with a growing interest in mobile development. I have experience working with a variety of languages and technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I'm always expanding my skills and staying up-to-date with the latest trends and technologies in the field of web development.<br /><br />In addition to my technical experience, I have a good ability to face, overcome challenges, and learn from them. I love solving defiant problems and am always looking for opportunities to apply my programming skills in new and innovative ways.<br /><br /><span class='font-bold'>My goal is to create quality web solutions that meet the needs of users and clients.</span></p>"),p(i=>{const f=i.projects.map((c,g)=>({...c,description:m[g]}));return{...i,aboutMe:u,projects:f}})},[e.lang]),t.jsxs("main",{className:"mt-[10%] lg:mt-[5%] px-[5%] pb-[5%] flex flex-col max-lg:gap-[60px] overflow-hidden",children:[t.jsxs("div",{id:"intro",className:"flex flex-col lg:grid lg:min-h-screen lg:grid-cols-[2fr_3fr] gap-[30px] max-lg:items-center",children:[t.jsxs("div",{className:"flex flex-col lg:pt-[15%] gap-[15px] lg:gap-[30px] max-lg:items-center",children:[t.jsx("div",{className:"font-dela max-lg:text-center text-[22px] lg:text-[1.7em] xl:text-[2.1em] xl:whitespace-nowrap",children:t.jsxs("p",{children:[e.lang==="es"?"HOLA, SOY UN":"HELLO, I'M A",t.jsx("br",{}),t.jsx(j.span,{layout:!0,className:"text-[1.2em] lg:max-xl:text-[1.1em]",style:{WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent"},animate:{backgroundImage:["linear-gradient(to right, #FFBE00, #FFFFFF, #FFBE00 0%)","linear-gradient(to right, #FFBE00, #FFFFFF 0%, #FFBE00 10%)","linear-gradient(to right, #FFBE00 0%, #FFFFFF, #FFBE00 20%)","linear-gradient(to right, #FFBE00 20%, #FFFFFF, #FFBE00 40%)","linear-gradient(to right, #FFBE00 40%, #FFFFFF, #FFBE00 60%)","linear-gradient(to right, #FFBE00 60%, #FFFFFF, #FFBE00 80%)","linear-gradient(to right, #FFBE00 80%, #FFFFFF, #FFBE00 100%)","linear-gradient(to right, #FFBE00 90%, #FFFFFF 100%, #FFBE00)","linear-gradient(to right, #FFBE00 100%, #FFFFFF, #FFBE00)"]},transition:{duration:.65,repeat:1/0,delay:5,repeatDelay:5,type:"tween",ease:"linear"},children:e.lang==="es"?"DESARROLLADOR WEB":"WEB DEVELOPER"}),t.jsx("br",{})]})}),e.lgWidth&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex gap-[10px]",children:[t.jsx("div",{className:"bg-[#FFBE00] w-[2px] h-[2lh] rounded-full "}),t.jsx("h4",{className:"",children:e.lang==="es"?"Escultor de ideas para la web, doy forma y convierto en realidad tus proyectos más ambiciosos o sencillos":"Ideas sculptor for the web, I shape and convert your most ambitious or simple projects into reality"})]}),t.jsx("button",{className:"buttonGlow",type:"button",children:t.jsx("a",{className:"px-[0.5em] py-[0.5em] w-full h-full",href:e.lang==="es"?D:A,download:!0,type:"application/pdf",children:e.lang==="es"?"DESCARGAR CV":"DOWNLOAD CV"})})]}),!e.lgWidth&&t.jsx("div",{className:"bg-[#FFBE00] w-[15%] h-[2px] rounded-full"})]}),t.jsxs("div",{className:"relative ",children:[t.jsx("div",{className:"absolute top-[30%] lg:top-[20%] right-[30%] 4xl:right-[35%]  scale-[0.85] md:scale-[0.5] lg:scale-[0.6] xl:scale-[0.5] w-fit overflow-x-hidden",children:t.jsx(j.img,{className:"",animate:{x:[null,"-17.8%"]},transition:{ease:"linear",repeat:1/0,duration:2},src:fe,alt:"flechas"})}),t.jsx("img",{className:"absolute top-[15%] left-[25%] 2xl:left-[35%]  scale-[0.7] 2xl:scale-[0.6] rotate-90",src:O,alt:"puntos"}),t.jsx("div",{className:"absolute w-full h-full z-[2]"}),t.jsx(j.img,{ref:m=>h.current.laptop=m,initial:{x:innerWidth/2,position:"absolute"},whileInView:{x:0,transition:{type:"spring"}},layout:!0,animate:{scale:e.lgWidth?[null,1.2,1]:[1.3,1.4,1.3],y:[null,-5,0],transition:{repeat:1/0,duration:8}},className:"lg:relative lg:z-[0] lg:-right-[35px] box-border max-w-full",src:xe,onContextMenu:m=>m.preventDefault(),alt:"Laptop"})]}),t.jsx("h4",{className:"text-center lg:hidden",children:e.lang==="es"?"Escultor de ideas para la web, doy forma y convierto en realidad tus proyectos más ambiciosos o sencillos":"Ideas sculptor for the web, I shape and convert your most ambitious or simple projects into reality"}),t.jsx("button",{className:"buttonGlow lg:hidden",type:"button",children:t.jsx("a",{className:"px-[15px] py-[10px] w-full h-full",href:e.lang==="es"?D:A,download:!0,type:"application/pdf",children:e.lang==="es"?"DESCARGAR CV":"DOWNLOAD CV"})})]}),t.jsxs("div",{id:e.lang==="es"?"SOBRE MI":"ABOUT ME",className:"flex  flex-col lg:grid w-fit lg:grid-cols-[1.5fr_3fr] max-lg:gap-[30px] max-lg:items-center max-md:mt-[35%] max-lg:mt-[25%] min-h-screen",children:[t.jsxs("div",{className:"flex lg:justify-center relative",children:[t.jsx(j.div,{initial:{x:-(innerWidth/5)},whileInView:{x:0,transition:{type:"spring"}},children:t.jsx("figure",{className:"relative mt-[5vh] lg:mt-[15vh] 3xl:mt-[20vh] w-[175px] h-[175px] lg:scale-[1.2] 2xl:scale-[1.4] 3xl:scale-[1.6] rounded-full bg-picture overflow-visible z-10",children:t.jsx("img",{className:"scale-[1.20] -rotate-[2deg] absolute bottom-[10%]",src:we,alt:"Yo"})})}),t.jsx("img",{className:"absolute -z-[1] top-0 md:max-lg:top-[15%] -left-[5%] scale-[2] md:scale-[2.5] lg:scale-[1.1]",src:e.lang==="es"?ve:ye,alt:"About me"})]}),t.jsxs("div",{className:"relative flex flex-col gap-[30px] lg:gap-[15px] max-lg:items-center",children:[e.lgWidth&&t.jsx("img",{className:"absolute w-[578] h-[10%] -top-[5%] -right-[15%]",src:V,alt:"lines"}),t.jsx("h1",{className:"font-dela max-lg:text-center text-[#FFBE00] text-[2em] lg:text-[3em]",children:e.lang==="es"?"SOBRE MÍ":"ABOUT ME"}),t.jsxs("div",{className:"flex max-lg:flex-col lg:items-center gap-[30px] max-lg:items-center",children:[t.jsx("div",{className:"bg-[#FFBE00] w-[15%] lg:w-[2px] h-[2px] lg:h-full rounded-full"}),t.jsx("div",{className:"max-lg:text-center leading-[1.5em] max-lg:px-[5%]",dangerouslySetInnerHTML:{__html:l.aboutMe}})]})]})]}),t.jsxs("div",{id:e.lang==="es"?"HABILIDADES":"SKILLS",className:"flex z-[0] flex-col relative gap-[30px] lg:gap-[3lh] items-center max-lg:px-[5%] min-h-[65vh] lg:min-h-screen",children:[t.jsxs("figure",{className:"relative flex justify-center items-center",children:[t.jsx("img",{className:`absolute ${e.lang==="es"?"-left-[50%] lg:-left-[70%] w-[50%] lg:w-[60%]":"-left-[100%]"} `,src:z,alt:"Right arrows"}),t.jsx("h1",{className:"font-dela max-lg:text-center text-[#FFBE00] text-[2em] lg:text-[3em]",children:e.lang==="es"?"HABILIDADES":"SKILLS"}),e.lgWidth&&t.jsx("button",{className:"buttonGlow absolute -right-[35%] text-[1em]",onClick:()=>a(!s),children:t.jsx("img",{className:"w-[20px] h-[20px]",src:s?H:W,alt:"start/stop"})})]}),!e.lgWidth&&t.jsx("button",{className:"buttonGlow text-[1em] ",onClick:()=>a(!s),children:t.jsx("img",{className:"w-[20px] h-[20px]",src:s?H:W,alt:"start/stop"})}),t.jsx("div",{className:"bg-[#FFBE00] w-[20%] h-[2px] rounded-full lg:hidden"}),t.jsx("img",{className:"absolute top-[40%] z-[-1] scale-[4] lg:scale-[1.5]",src:e.lang==="es"?Fe:Ee,alt:"Skills"}),t.jsx(j.div,{initial:{x:-innerWidth/2},whileInView:{x:0,transition:{type:"spring"}},children:t.jsx(G,{playButton:s,skills:l.skills,slideClasses:"bg-skills min-h-[150px] md:max-lg:min-h-[100px] xl:min-h-[200px] border-[2px] border-slate-600 grid grid-cols-[1.5fr_1fr] gap-x-[10px] p-[10px] rounded-[8px] w-full box-border"})})]}),t.jsxs("div",{id:e.lang==="es"?"PROYECTOS":"PROJECTS",className:"flex z-[0] relative flex-col gap-[30px] items-center px-[5%] max-lg:h-[850px] lg:min-h-screen lg:pb-[20vh]",children:[t.jsxs("figure",{className:"relative flex justify-center items-center",children:[t.jsx("img",{className:`absolute ${e.lang==="es"?"-right-[50%] w-[50%]":"-right-[60%] w-[60%]"} `,src:z,alt:"Right arrows"}),t.jsx("h1",{className:"font-dela max-lg:text-center text-[#FFBE00] text-[2em] lg:text-[3em]",children:e.lang==="es"?"PROYECTOS":"PROJECTS"})]}),t.jsx("div",{className:"bg-[#FFBE00] w-[20%] h-[2px] rounded-full lg:hidden"}),t.jsx("img",{className:"absolute top-[15%] lg:top-[40%] z-[-1] scale-[4] lg:scale-[2]",src:e.lang==="es"?Ne:Se,alt:"Projects"}),t.jsx(G,{cancelButtons:e.lgWidth,children:oe(l.projects,e.lang,e.lgWidth)}),e.lgWidth&&t.jsx("img",{className:"absolute w-[578px] scale-[0.8] h-[7%] bottom-0 -left-[15%]",src:V,alt:"lines"})]}),t.jsxs("div",{id:e.lang==="es"?"PROCESO":"PROCESS",className:"flex relative z-[0] flex-col gap-[30px] items-center px-[5%] lg:h-[80vh] min-h-screen",children:[t.jsx("figure",{className:"relative flex justify-center items-center",children:t.jsx("h1",{className:"font-dela max-lg:text-center text-[#FFBE00] text-[2em] lg:text-[3em]",children:e.lang==="es"?"PROCESOS":"PROCESS"})}),t.jsx("div",{className:"bg-[#FFBE00] w-[20%] h-[2px] rounded-full lg:hidden"}),t.jsx("img",{className:"absolute top-[10%] lg:top-[40%] -left-[35%] z-[-1] lg:scale-[0.3] scale-[0.5]",src:O,alt:"flechas"}),t.jsx("img",{className:"absolute top-[50%] lg:top-0 lg:right-0 lg:w-[calc(732px/1.2)] z-[-1] max-lg:scale-[1.5]",src:e.lang==="es"?Ce:Pe,alt:"Process"}),t.jsx(j.object,{initial:{x:innerWidth/2},whileInView:{x:0,transition:{type:"spring",bounce:.3,duration:.6}},className:"w-full h-full lg:w-[110%] lg:h-[110%] md:max-lg:w-[60%] md:max-lg:h-[60%]",title:"Process",name:"Flow Tree",data:e.lgWidth?_e:Oe,type:"image/svg+xml"})]}),t.jsxs("div",{id:"CONTACT",className:"flex relative flex-col gap-[30px] items-center px-[5%] min-h-screen z-[0]",children:[t.jsx("figure",{className:"relative flex justify-center items-center",children:t.jsx("h1",{className:"font-dela max-lg:text-center text-[#FFBE00] text-[2em] lg:text-[3em]",children:e.lang==="es"?"CONTÁCTAME":"CONTACT ME"})}),t.jsx("div",{className:"bg-[#FFBE00] w-[20%] h-[2px] rounded-full lg:hidden"}),t.jsx("img",{className:"absolute top-[40%] z-[-1] max-lg:scale-[1.5] lg:w-[calc(732px/1.2)] lg:-left-[8%]",src:e.lang==="es"?ke:Re,alt:"Contact me"}),t.jsx(Ye,{lang:e.lang})]})]})}export{et as default};
