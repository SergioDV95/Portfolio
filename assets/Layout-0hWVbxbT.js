import{r as x,R as p,C as k,j as a,m as s,L,O as z}from"./index-E3ci_fvi.js";import{c as I}from"./functions-BMrIq5o5.js";const b=48,W=({color:t="currentColor",direction:e="left",distance:n="md",duration:r=.4,easing:d="cubic-bezier(0, 0, 0, 1)",hideOutline:h=!0,label:c,lines:l=3,onToggle:u,render:g,rounded:m=!1,size:w=32,toggle:$,toggled:i})=>{const[o,y]=x.useState(!1),f=Math.max(12,Math.min(b,w)),D=Math.round((b-f)/2),E=f/12,v=Math.round(E),F=f/(l*((n==="lg"?.25:n==="sm"?.75:.5)+(l===3?1:1.25))),j=Math.round(F),H=v*l+j*(l-1),P=Math.round((b-H)/2),M=l===3?n==="lg"?4.0425:n==="sm"?5.1625:4.6325:n==="lg"?6.7875:n==="sm"?8.4875:7.6675,R=(E-v+(F-j))/(l===3?1:2),A=parseFloat((f/M-R/(4/3)).toFixed(2)),T=Math.max(0,r),O={cursor:"pointer",height:`${b}px`,position:"relative",transition:`${T}s ${d}`,userSelect:"none",width:`${b}px`},S={background:t,height:`${v}px`,left:`${D}px`,position:"absolute"};h&&(O.outline="none"),m&&(S.borderRadius="9em");const B=$||y,N=i!==void 0?i:o;return g({barHeight:v,barStyles:S,burgerStyles:O,easing:d,handler:()=>{B(!N),typeof u=="function"&&u(!N)},isLeft:e==="left",isToggled:N,label:c,margin:j,move:A,time:T,topOffset:P,width:f})};function C(){return C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},C.apply(this,arguments)}const V=t=>p.createElement(W,C({},t,{render:e=>p.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:n=>n.key==="Enter"&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},p.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":`${e.time/2}s`}`,transform:`${e.isToggled?`translateY(${e.barHeight+e.margin}px)`:"none"}`}},p.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?`${e.time/2}s`:"0s"}`,transform:`${e.isToggled?"rotate(45deg)":"none"}`}})),p.createElement("div",{style:{transition:`${e.time/2}s ${e.easing}`,opacity:`${e.isToggled?"0":"1"}`}},p.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time/2}s ${e.easing}`}})),p.createElement("div",{style:{transition:`${e.time/2}s ${e.easing} ${e.isToggled?"0s":`${e.time/2}s`}`,transform:`${e.isToggled?`translateY(-${e.barHeight+e.margin}px)`:"none"}`}},p.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight*2+e.margin*2}px`,transition:`${e.time/2}s ${e.easing} ${e.isToggled?`${e.time/2}s`:"0s"}`,transform:`${e.isToggled?"rotate(-45deg)":"none"}`}})))})),_="/Portfolio/png/dark/ondas_org.png",Y="/Portfolio/png/cool_icon.png",K="/Portfolio/png/sad_icon.png";function U(t){const[e,n]=x.useState({x:0,y:0});return x.useEffect(()=>{if(!t.current)return;const r=({pageX:d,pageY:h})=>{const c=t.current,l=d-I(c,"x")-c.offsetWidth/2,u=h-I(c,"y")-c.offsetHeight/2;n({x:l,y:u})};return window.addEventListener("pointermove",r),()=>window.removeEventListener("pointermove",r)},[]),e}function q(){const{context:t,setContext:e}=x.useContext(k),[n,r]=x.useState(),[d,h]=x.useState(!1),c=x.useRef(null),{x:l,y:u}=U(c),g={list:{open:{width:"90%",height:"100vh",left:0,top:0,transition:{when:"beforeChildren",staggerChildren:.1}},closed:{width:"fit-content",height:"50px",left:"5%",transition:{when:"afterChildren",staggerChildren:.05,staggerDirection:-1}}},item:{open:{y:0,opacity:1,display:"flex",transition:{display:{delay:-.5},type:"spring"}},closed:{y:-50,opacity:0,display:"none",transition:{display:{delay:.5}}}}},m={list:t.lgWidth?{width:"90%",height:"60px",position:"static"}:{width:"fit-content",height:"50px",position:"absolute",left:"5%"},item:t.lgWidth?{display:"flex"}:{display:"none"}},w={isNotHovering:{x:"-115%"},isHovering:{x:"-8%"}},$=()=>[`${t.lang==="es"?"SOBRE MI":"ABOUT ME"}`,`${t.lang==="es"?"HABILIDADES":"SKILLS"}`,`${t.lang==="es"?"PROYECTOS":"PROJECTS"}`,`${t.lang==="es"?"PROCESO":"PROCESS"}`].map((o,y)=>t.lgWidth?a.jsxs(s.div,{className:"flex flex-col justify-center relative overflow-hidden px-[0.5em]",initial:"isNotHovering",whileHover:"isHovering",children:[a.jsx(s.input,{className:"max-lg:h-[60px] max-lg:text-left max-lg:pt-[30px] flex max-lg:border-b-[1px] cursor-pointer border-[#D9D9D9] focus:outline-none",style:m.item,variants:g.item,whileTap:{scale:.85},whileHover:{scale:1.1},type:"button",value:o,onClick:()=>document.getElementById(o).scrollIntoView({behavior:"smooth"})}),a.jsx(s.div,{className:"w-full h-[2px] bg-[#D9D9D9] shadow-navbar absolute bottom-[15%]",transition:{type:"tween"},variants:w})]},o+y):a.jsx(s.input,{className:"max-lg:h-[60px] max-lg:text-left max-lg:pt-[30px] flex max-lg:border-b-[1px] cursor-pointer border-[#D9D9D9] focus:outline-none",style:m.item,variants:g.item,whileTap:{scale:.85},whileHover:{scale:1.1},type:"button",value:o,onClick:()=>document.getElementById(o).scrollIntoView({behavior:"smooth"})},o+y));return a.jsxs("header",{className:"flex max-lg:justify-end lg:text-[0.9em] 2xl:text-[0.8em] justify-between text-end gap-[30px] w-full max-lg:p-[5%] lg:px-[5%] lg:pt-[4%] relative",children:[a.jsx("img",{className:"absolute z-[-1] -rotate-[20deg] max-lg:scale-[2] -left-[65%] lg:-left-[50%] lg:-top-[125%] 4xl:-top-[150%]",src:_,alt:"ondas"}),a.jsxs(s.nav,{className:"flex max-lg:z-50 max-lg:flex-col rounded-[8px] max-lg:gap-[2%] px-[1.5%] max-lg:p-[1.5%] lg:items-center justify-center lg:justify-between font-semibold bg-navbarMobile lg:bg-navbarDesktop border-[2px] border-[white] dark:border-[#FFFFFF80] box-border",variants:g.list,animate:t.lgWidth?"":n?"open":"closed",initial:m.list,whileTap:t.lgWidth||n?"":{scale:.9},children:[a.jsx("div",{className:"lg:hidden w-fit",children:a.jsx(V,{label:"Show menu",toggled:n,toggle:r,easing:"ease-in"})}),a.jsxs(s.div,{className:"flex max-lg:flex-col gap-[15px] items-center",variants:t.lgWidth?"":g.item,style:m.item,children:[a.jsx(s.div,{className:"relative z-20",animate:d?null:{transform:["rotate(0deg)","rotate(22.5deg)","rotate(-22.5deg)","rotate(11.25deg)","rotate(-11.25deg)","rotate(5.625deg)","rotate(-5.625deg)","rotate(2.8125deg)","rotate(-2.8125deg)","rotate(1.40625deg)","rotate(-1.40625deg)","rotate(0.703125deg)","rotate(-0.703125deg)","rotate(0.3515625deg)","rotate(-0.3515625deg)","rotate(0deg)"]},transition:{type:"tween",duration:1,ease:"easeInOut",delay:10,repeat:1/0,repeatDelay:10},children:a.jsx(s.div,{layout:!0,ref:c,id:"logo-gradient",className:"w-[6em] h-[6em] lg:w-[3.5em] lg:h-[3.5em] 3xl:w-[3em] 3xl:h-[3em] 4xl:w-[2.5em] 4xl:h-[2.5em]",animate:d?{x:l,y:u,scale:t.lgWidth?1.6:1.2}:null,transition:{type:"spring",damping:3,stiffness:50,restDelta:.001},onClick:i=>{d?(document.body.style.setProperty("cursor","auto"),i.currentTarget.style.setProperty("--cursor","pointer"),h(!1)):(document.body.style.setProperty("cursor",`url(${K}) 16 16, auto`),i.currentTarget.style.setProperty("--cursor",`url(${Y}) 16 16, pointer`),h(!0))},children:a.jsx(s.div,{layout:!0,className:"w-[150%] h-[150%] -top-[25%] -left-[25%] rounded-full absolute",animate:{transform:["rotate(0deg)","rotate(360deg)"],backgroundImage:["linear-gradient(#058eee, #013567 0%, #001d3d)","linear-gradient(#058eee, #013567 100%, #001d3d)","linear-gradient(#22c1c3, #92be77 100%, #fdbb2d)","linear-gradient(#22c1c3, #92be77 0%, #fdbb2d)","linear-gradient(#833ab4, #fd1d1d 0%, #fcb045)","linear-gradient(#833ab4, #fd1d1d 100%, #fcb045)","linear-gradient(#3f5efb, #a351af 100%, #fc466b)","linear-gradient(#3f5efb, #a351af 0%, #fc466b)"],transition:{backgroundImage:{type:"tween",duration:30,repeat:1/0,repeatType:"mirror"},transform:{type:"tween",duration:30,repeat:1/0,repeatType:"reverse",ease:"linear"}}}})})}),a.jsx("h1",{className:"max-lg:px-[5%] font-dela max-md:text-start whitespace-nowrap md:text-center text-[28px] lg:text-[20px] xl:text-[34px] max-md:mb-[10%]",children:"SERGIO DAZA"})]}),a.jsxs("div",{className:"max-lg:h-full max-lg:px-[5%] font-semibold flex max-lg:flex-col lg:gap-[20px] xl:gap-[30px]",children:[a.jsxs(s.select,{initial:{opacity:.8},whileHover:{opacity:1},className:"max-lg:text-start text-[20px] rounded-[8px] w-fit bg-[#FFFFFF33] shadow-button p-2 focus:outline-none cursor-pointer",style:m.item,variants:g.item,title:"Idioma",name:"lang",id:"lang",onChange:i=>e(o=>({...o,lang:i.target.value})),value:t.lang,children:[a.jsx("option",{className:"bg-[#374049] appearance-none",value:"es",children:"ES"}),a.jsx("option",{className:"bg-[#374049] appearance-none",value:"en",children:"EN"})]}),$()]}),a.jsx(s.div,{initial:m.item,variants:g.item,className:"flex gap-[10px] max-lg:px-[5%]",children:a.jsx("div",{className:"rounded-full flex bg-button shadow-lightMode box-border w-[65px] h-[33px] py-[2.4px] relative cursor-pointer",onClick:()=>e(i=>({...i,light:i.light?0:1})),children:a.jsx(s.div,{className:"rounded-full box-border bg-[#FFFFFF] w-[44.5%] h-[85%] absolute",animate:{left:t.light?"5%":"",right:t.light?"":"5%",background:t.light?"#FFFFFF":"#262626"},transition:{duration:.25,background:{duration:.125}}})})})]}),a.jsx(s.button,{className:"card font-semibold appearance-none",whileTap:{scale:.9},whileHover:{scale:1.1},title:t.lang==="es"?"Contacto":"Contact",type:"button",onClick:()=>document.getElementById("CONTACT").scrollIntoView({behavior:"smooth"}),children:a.jsx("h4",{className:"font-dela absolute bg-[#16BAC5] lg:max-xl:text-[10px] 4xl:text-[18px] z-10",children:t.lang==="es"?"CONTÁCTAME":"CONTACT ME"})}),d&&a.jsx("div",{className:"w-screen h-screen fixed top-0 left-0 z-10"})]})}function X(){const{context:t}=x.useContext(k);return a.jsxs(a.Fragment,{children:[a.jsx("section",{className:`${t.load?"hidden":"block"}`,children:a.jsx(L,{})}),a.jsxs("main",{className:`${t.load?"block":"hidden"} ${t.light?"":"dark"} dark:text-gray-50`,children:[a.jsx(s.div,{className:"fixed -left-[12.5vw] -top-[12.5vh] w-[125vw] h-[125vh] -z-[5]",animate:{backgroundImage:t.light?"radial-gradient(circle closest-corner at 80% 20%, #b4e1fe 33%, #75c8fd 66%, #11a1fb 99%, #0089df 100%)":"radial-gradient(circle closest-corner at 20% 80%, #049cfb 33%, #0331c4 66%, #00335d 99%, #00284d 100%)"},children:a.jsx(s.div,{className:"bg-transparent w-full h-full -z-[3]",animate:{backdropFilter:t.light?"blur(50px) brightness(0.85)":"blur(50px) brightness(0.4)"}})}),a.jsx(q,{}),a.jsx(z,{})]})]})}export{X as default};
