import{j as e,m as t,a}from"./animations-CUSsutLB.js";import{G as s,F as i,a as o}from"./index-NTqhk-UJ.js";import{a as n,c as r,L as l}from"./vendor-ClOUTo3Z.js";import{A as d}from"./aos-DTDKxsLJ.js";import"./index-CbmfNuGm.js";import{S as c,L as m}from"./LazyImage-BtIVP5Fe.js";import{u as h}from"./useMousePosition-BKjZLyGK.js";function x(e){return s({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-9v-6h9v6z"},child:[]}]})(e)}function u(e){return s({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"},child:[]}]})(e)}function g(e){return s({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6 15c-.83 0-1.58.34-2.12.88C2.7 17.06 2 22 2 22s4.94-.7 6.12-1.88A2.996 2.996 0 0 0 6 15zm.71 3.71c-.28.28-2.17.76-2.17.76s.47-1.88.76-2.17c.17-.19.42-.3.7-.3a1.003 1.003 0 0 1 .71 1.71zm10.71-5.06c6.36-6.36 4.24-11.31 4.24-11.31S16.71.22 10.35 6.58l-2.49-.5a2.03 2.03 0 0 0-1.81.55L2 10.69l5 2.14L11.17 17l2.14 5 4.05-4.05c.47-.47.68-1.15.55-1.81l-.49-2.49zM7.41 10.83l-1.91-.82 1.97-1.97 1.44.29c-.57.83-1.08 1.7-1.5 2.5zm6.58 7.67-.82-1.91c.8-.42 1.67-.93 2.49-1.5l.29 1.44-1.96 1.97zM16 12.24c-1.32 1.32-3.38 2.4-4.04 2.73l-2.93-2.93c.32-.65 1.4-2.71 2.73-4.04 4.68-4.68 8.23-3.99 8.23-3.99s.69 3.55-3.99 8.23zM15 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"},child:[]}]})(e)}const p=(e=250)=>{const[t,a]=n.useState({width:"undefined"!=typeof window?window.innerWidth:0,height:"undefined"!=typeof window?window.innerHeight:0,isMobile:"undefined"!=typeof window&&window.innerWidth<=768,isTablet:"undefined"!=typeof window&&(window.innerWidth>768&&window.innerWidth<=1024),isDesktop:"undefined"!=typeof window&&window.innerWidth>1024,isPortrait:"undefined"!=typeof window&&window.innerHeight>window.innerWidth}),s=n.useCallback((()=>{const e=window.innerWidth,t=window.innerHeight;a({width:e,height:t,isMobile:e<=768,isTablet:e>768&&e<=1024,isDesktop:e>1024,isPortrait:t>e})}),[]);return n.useEffect((()=>{const t=((e,t)=>{let a;return(...s)=>{clearTimeout(a),a=setTimeout((()=>{e.apply(void 0,s)}),t)}})(s,e);return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),s(),()=>{window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)}}),[s,e]),t},f={hidden:{opacity:0,y:20,transition:{duration:.3,ease:[.43,.13,.23,.96]}},visible:{opacity:1,y:0,transition:{duration:.5,ease:[.43,.13,.23,.96]}}},v=(e={})=>{const[t,a]=n.useState(!1),s=n.useRef(null),{isMobile:i}=p(),o={...{threshold:i?.01:.15,rootMargin:i?"0px":"-50px",triggerOnce:!0},...e};return n.useEffect((()=>{const e=s.current;if(!e)return;const t=new IntersectionObserver((e=>{const[s]=e;s.isIntersecting?(a(!0),o.triggerOnce&&t.disconnect()):o.triggerOnce||a(!1)}),{threshold:o.threshold,rootMargin:o.rootMargin});return t.observe(e),()=>{e&&t.unobserve(e)}}),[o.threshold,o.rootMargin,o.triggerOnce]),[s,t]},b=[{name:"Sarah Johnson",position:"CEO, TechStart Inc.",content:"HMS Marketing transformed our digital presence. Their strategic approach helped us achieve a 200% growth in lead generation within six months.",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"},{name:"Michael Chen",position:"Marketing Director, InnovateCorp",content:"The team's creativity and data-driven strategies have been instrumental in our success. They don't just deliver results; they exceed expectations.",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"},{name:"Emily Rodriguez",position:"Founder, GrowthLabs",content:"Working with HMS Marketing has been transformative. Their holistic approach to digital marketing helped us establish a strong market presence.",image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"}],w=n.memo((({testimonial:a,isActive:s})=>{const{isMobile:i}=p();return e.jsx(t.div,{className:"absolute inset-0 w-full",initial:{opacity:0,x:i?50:100},animate:{opacity:s?1:0,x:s?0:i?-50:-100,pointerEvents:s?"auto":"none"},transition:{duration:i?.3:.5,ease:"easeInOut"},children:e.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-6 md:p-12 relative h-full",children:[e.jsx(o,{className:"text-3xl md:text-4xl text-[#8DC63F]/20 absolute top-6 md:top-8 left-6 md:left-8"}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-4 md:gap-8 h-full",children:[e.jsx("div",{className:"w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg flex-shrink-0",children:e.jsx(m,{src:a.image,alt:a.name,className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("p",{className:"text-base md:text-xl leading-relaxed mb-4 md:mb-6",children:['"',a.content,'"']}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg md:text-xl font-semibold text-gray-900",children:a.name}),e.jsx("p",{className:"text-[#8DC63F]",children:a.position})]})]})]})]})})}));w.displayName="TestimonialCard";const j=()=>{const[t,a]=((e,t=5e3)=>{const[a,s]=n.useState(0),i=n.useRef(null);return n.useEffect((()=>(i.current=setInterval((()=>{s((t=>(t+1)%e))}),t),()=>{i.current&&clearInterval(i.current)})),[e,t]),[a,n.useCallback((e=>{i.current&&clearInterval(i.current),s(e)}),[])]})(b.length);return e.jsxs("section",{className:"py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-[#8DC63F]/5 opacity-50"}),e.jsxs("div",{className:"container mx-auto px-4 relative",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-4","data-aos":"fade-down",children:"Client Success Stories"}),e.jsx("p",{className:"text-gray-600 text-center mb-12 max-w-2xl mx-auto","data-aos":"fade-up","data-aos-delay":"100",children:"Hear from businesses that have transformed their digital presence with HMS Marketing"}),e.jsx("div",{className:"max-w-6xl mx-auto pointer-events-auto",children:e.jsxs("div",{className:"relative h-[350px] overflow-hidden",children:[b.map(((a,s)=>e.jsx(w,{testimonial:a,isActive:t===s},s))),e.jsx("div",{className:"absolute bottom-0 left-0 right-0 flex justify-center items-center gap-3 pb-4",children:b.map(((s,i)=>e.jsx("button",{onClick:()=>a(i),className:"w-3 h-3 rounded-full transition-all duration-300 "+(t===i?"bg-[#8DC63F] w-6":"bg-[#8DC63F]/20"),"aria-label":`Go to testimonial ${i+1}`},i)))})]})})]})]})},y=()=>{const[t,a]=n.useState(!0),{isMobile:s}=p();n.useEffect((()=>{d.init({duration:s?400:1e3,once:!0,mirror:!1,offset:s?10:120,delay:s?0:100,easing:"ease-out-cubic",disable:!1,startEvent:"DOMContentLoaded",debounceDelay:s?10:50,throttleDelay:s?30:99,anchorPlacement:"top-bottom"});const e=()=>{"complete"===document.readyState&&a(!1)};if("complete"!==document.readyState){window.addEventListener("load",e);const t=setTimeout((()=>a(!1)),3e3);return()=>{window.removeEventListener("load",e),clearTimeout(t)}}a(!1)}),[s]),n.useEffect((()=>{t||setTimeout((()=>{d.refresh()}),500)}),[t]);const i={title:"Home",description:"Welcome to our digital solutions hub. We offer web development, digital marketing, and business growth services to help your business thrive in the digital age.",keywords:"digital solutions, web development, digital marketing, business growth, SEO services",schema:{"@context":"https://schema.org","@type":"WebPage",name:"Home | HMS Marketing Solutions",description:"Welcome to our digital solutions hub. We offer web development, digital marketing, and business growth services.",url:window.location.href,mainEntity:{"@type":"Organization",name:"hmsmarketingsolutions.com",url:window.location.origin}}};return e.jsxs(e.Fragment,{children:[e.jsx(c,{...i}),e.jsx("div",{className:"overflow-hidden",children:t?e.jsx(N,{}):e.jsx(k,{})})]})},N=()=>e.jsx("div",{className:"flex items-center justify-center min-h-screen",role:"alert","aria-label":"Loading content",children:e.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"})}),k=()=>{const s=r(),{position:o}=h(),{isMobile:n}=p(),[d,c]=v({threshold:.5}),[b,w]=v(),[y,N]=v(),[k,M]=v();return e.jsxs("div",{className:"relative",children:[e.jsxs(t.section,{ref:d,initial:"hidden",animate:c?"visible":"hidden",variants:f,className:"min-h-[90vh] md:min-h-screen flex items-center relative bg-black text-white overflow-hidden",children:[n?e.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 30%, rgba(142, 198, 63, 0.51) 0%, transparent 70%)",opacity:.4}}):e.jsx(t.div,{className:"absolute inset-0 pointer-events-none",style:{background:`radial-gradient(circle at ${o.x}px ${o.y}px, rgba(142, 198, 63, 0.51) 0%, transparent 35%)`,opacity:.6}}),n&&e.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm animate-bounce",children:"Scroll down to explore"}),e.jsx("div",{className:"container mx-auto px-4 relative z-10",children:e.jsxs("div",{className:"max-w-6xl mx-auto pointer-events-auto",children:[e.jsxs("h1",{className:"text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white flex flex-col items-center gap-2 text-center max-w-6xl mx-auto","data-aos":"fade-down","data-aos-delay":"200",children:[e.jsx("div",{className:"h-[60px] sm:h-[72px] flex items-center",children:e.jsx(a,{sequence:["Elevate Your Brand with",3e3,"Grow Your Business with",3e3],wrapper:"span",speed:30,repeat:1/0})}),e.jsxs("span",{className:"text-[#8DC63F] relative inline-block",style:{textShadow:"0 0 10px rgba(141, 198, 63, 0.3)"},children:["HMS Marketing Solutions",e.jsx("span",{className:"absolute -bottom-2 left-0 w-full h-1 bg-[#8DC63F] animate-pulse"})]})]}),e.jsx("p",{className:"text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto","data-aos":"fade-up","data-aos-delay":"400",children:"Innovative marketing solutions that drive growth and deliver results"}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4","data-aos":"zoom-in","data-aos-delay":"600",children:[e.jsxs("button",{onClick:()=>s("/contact"),className:"relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-base font-medium text-white bg-[#8DC63F] rounded-full hover:bg-[#72A730] transition-all duration-300 group",children:[e.jsx("span",{className:"absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"}),e.jsx("span",{className:"relative",children:"Get Started"})]}),e.jsxs("button",{onClick:()=>s("/services"),className:"relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-base font-medium text-white border-2 border-[#8DC63F] rounded-full hover:bg-[#8DC63F] transition-all duration-300 group",children:[e.jsx("span",{className:"absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"}),e.jsx("span",{className:"relative",children:"Our Services"})]})]})]})})]}),e.jsx("section",{className:"py-12 sm:py-16 bg-white",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4","data-aos":"fade-down",children:"Trusted by Industry Leaders"}),e.jsx("p",{className:"text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto","data-aos":"fade-up","data-aos-delay":"100",children:"Join hundreds of businesses that trust HMS Marketing Solutions for their digital growth"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 items-center justify-items-center",children:[{name:"PPB",logo:"./public/images/companies/logoFinal.png"},{name:"Karachiees Restaurant",logo:"/public/images/companies/karachieesrestaurant.jpg"},{name:"MBH Consultants",logo:"/public/images/companies/mbhconsultants.jpg"},{name:"Suffah-e-Arqam School",logo:"/public/images/companies/suffahearqam.school.jpg"},{name:"Tech Sign",logo:"/public/images/companies/techSign.jpg"},{name:"IBM",logo:"https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"}].map(((t,a)=>e.jsx("div",{className:"w-full max-w-[150px] sm:max-w-[200px]","data-aos":"fade-up","data-aos-delay":50*a,children:e.jsxs("div",{className:"client-logo-container h-[80px] sm:h-[100px] hover-on-touch",children:[e.jsx("div",{className:"client-logo-name",children:e.jsx("h3",{className:"text-sm sm:text-lg font-semibold text-gray-800 text-center",children:t.name})}),e.jsx("div",{className:"client-logo-image",children:e.jsx("img",{src:t.logo,alt:`${t.name} logo`,className:"max-h-full max-w-full object-contain client-logo",loading:"lazy"})})]})},a)))})]})}),e.jsxs("section",{ref:k,className:"py-16 bg-white",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4","data-aos":"fade-down",children:"Our Services"}),e.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto","data-aos":"fade-up","data-aos-delay":"100",children:"Comprehensive digital solutions tailored to your business needs"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8",children:[{icon:e.jsx(g,{className:"text-4xl md:text-6xl text-white"}),title:"Digital Marketing",description:"Strategic campaigns that reach your target audience",gradient:"from-[#8DC63F] to-[#72A730]",path:"/services#digital-marketing"},{icon:e.jsx(i,{className:"text-4xl md:text-6xl text-white"}),title:"Growth Strategy",description:"Data-driven approaches to scale your business",gradient:"from-[#8DC63F] to-[#72A730]",path:"/services#growth-strategy"},{icon:e.jsx(x,{className:"text-4xl md:text-6xl text-white"}),title:"Brand Development",description:"Create a powerful and memorable brand identity",gradient:"from-[#8DC63F] to-[#72A730]",path:"/services#brand-development"},{icon:e.jsx(u,{className:"text-4xl md:text-6xl text-white"}),title:"Social Media",description:"Engage your audience across all platforms",gradient:"from-[#8DC63F] to-[#72A730]",path:"/services#social-media"}].map(((t,a)=>e.jsxs("div",{className:"bg-white p-6 md:p-8 rounded-2xl shadow-lg transition-all duration-300 active:scale-95 md:hover:-translate-y-2 hover:shadow-xl border border-gray-100 service-card",onClick:()=>s(t.path),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),s(t.path))},tabIndex:0,role:"button","aria-label":`Learn more about ${t.title}`,"data-aos":"fade-up","data-aos-delay":100*a,children:[e.jsx("div",{className:`mb-4 md:mb-6 w-16 md:w-20 h-16 md:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-r ${t.gradient} transform transition-transform hover:rotate-6 shadow-md`,children:t.icon}),e.jsx("h3",{className:"text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900",children:t.title}),e.jsx("p",{className:"text-sm md:text-base text-gray-600 leading-relaxed",children:t.description})]},a)))}),e.jsx("div",{className:"text-center mt-12","data-aos":"fade-up","data-aos-delay":"200",children:e.jsxs(l,{to:"/services",className:"inline-flex items-center gap-2 text-[#8DC63F] hover:text-[#72A730] font-medium transition-colors group",children:["View All Services",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 transform transition-transform group-hover:translate-x-1",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})]}),e.jsx("section",{ref:b,className:"py-16 bg-gray-50",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16 items-center",children:[e.jsxs("div",{"data-aos":"fade-right",children:[e.jsx("h2",{className:"text-5xl font-bold mb-8 bg-gradient-to-r from-[#8DC63F] to-[#72A730] bg-clip-text text-transparent",children:"Why Choose HMS Marketing?"}),e.jsx("p",{className:"text-gray-600 mb-8 text-lg leading-relaxed",children:"With years of experience and a track record of success, we help businesses reach their full potential through innovative marketing strategies and cutting-edge solutions."}),e.jsx("div",{className:"space-y-6",children:["Expert team of marketing professionals","Customized strategies for your business","Data-driven decision making","Proven track record of success"].map(((t,a)=>e.jsxs("div",{className:"flex items-center space-x-4 group","data-aos":"fade-up","data-aos-delay":100*a,children:[e.jsx("div",{className:"w-3 h-3 bg-[#8DC63F] rounded-full transform transition-transform group-hover:scale-150"}),e.jsx("span",{className:"text-gray-700 group-hover:text-[#8DC63F] transition-colors duration-300",children:t})]},a)))})]}),e.jsxs("div",{className:"relative","data-aos":"fade-left",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#8DC63F] to-[#72A730] rounded-2xl transform rotate-6 scale-105 opacity-20 blur-xl"}),e.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]",children:[e.jsx(m,{src:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Marketing team",className:"w-full h-full object-cover"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]})]})]})})}),e.jsx(j,{}),e.jsx("section",{ref:y,className:"py-16 bg-black text-white",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[e.jsx("h2",{className:"text-5xl font-bold mb-8 text-white","data-aos":"fade-down",children:"Ready to Grow Your Business?"}),e.jsx("p",{className:"text-2xl mb-12 text-gray-200","data-aos":"fade-up","data-aos-delay":"200",children:"Let's work together to create a marketing strategy that drives results."}),e.jsx("div",{"data-aos":"zoom-in","data-aos-delay":"400",children:e.jsxs(l,{to:"/contact",className:"inline-block bg-[#8DC63F] text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-[#72A730] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 relative overflow-hidden group",children:[e.jsx("span",{className:"absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"}),"Schedule a Consultation"]})})]})})})]})};export{y as default};
