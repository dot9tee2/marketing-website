import{a as e}from"./vendor-ClOUTo3Z.js";const t=(t=16)=>{const[o,s]=e.useState({x:0,y:0}),[n,i]=e.useState(!1),c=e.useCallback((e=>{if(e.touches&&e.touches.length>0){const{clientX:t,clientY:o}=e.touches[0];s({x:t,y:o})}else if(!e.touches){const{clientX:t,clientY:o}=e;s({x:t,y:o})}i(!0),setTimeout((()=>i(!1)),100)}),[]);return e.useEffect((()=>(window.addEventListener("mousemove",c,{passive:!0}),window.addEventListener("touchstart",c,{passive:!0}),window.addEventListener("touchmove",c,{passive:!0}),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("touchstart",c),window.removeEventListener("touchmove",c)})),[c,t]),{position:o,isMoving:n}};export{t as u};
