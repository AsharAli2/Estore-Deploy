import{w as g,L as x,M as P,_ as r,$ as l,e as $,N as b,f as C,j as y,t as R,v as M}from"./index-a0742aba.js";const k=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)},v=k;function q(e){return g("MuiPaper",e)}const _=x("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]),A=_,j=["className","component","elevation","square","variant"],m=e=>{const{square:a,elevation:o,variant:t,classes:n}=e,s={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${o}`]};return M(s,q,n)},N=P("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return r({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&r({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${l("#fff",v(a.elevation))}, ${l("#fff",v(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),U=$.forwardRef(function(a,o){const t=b({props:a,name:"MuiPaper"}),{className:n,component:s="div",elevation:p=1,square:c=!1,variant:d="elevation"}=t,u=C(t,j),i=r({},t,{component:s,elevation:p,square:c,variant:d}),f=m(i);return y.jsx(N,r({as:s,ownerState:i,className:R(f.root,n),ref:o},u))}),E=U;export{E as P,q as a,v as g,A as p};