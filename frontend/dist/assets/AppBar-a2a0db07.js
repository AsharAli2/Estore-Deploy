import{w as x,L as B,M as f,a2 as p,_ as s,e as k,N as b,f as v,j as C,t as A,v as y}from"./index-a0742aba.js";import{P as D}from"./Paper-953614ab.js";function I(o){return x("MuiAppBar",o)}const $=B("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]),P=$,z=["className","color","enableColorOnDark","position"],O=o=>{const{color:r,position:a,classes:l}=o,i={root:["root",`color${p(r)}`,`position${p(a)}`]};return y(i,I,l)},t=(o,r)=>o?`${o==null?void 0:o.replace(")","")}, ${r})`:r,R=f(D,{name:"MuiAppBar",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[`position${p(a.position)}`],r[`color${p(a.color)}`]]}})(({theme:o,ownerState:r})=>{const a=o.palette.mode==="light"?o.palette.grey[100]:o.palette.grey[900];return s({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},r.position==="fixed"&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},r.position==="absolute"&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},r.position==="sticky"&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},r.position==="static"&&{position:"static"},r.position==="relative"&&{position:"relative"},!o.vars&&s({},r.color==="default"&&{backgroundColor:a,color:o.palette.getContrastText(a)},r.color&&r.color!=="default"&&r.color!=="inherit"&&r.color!=="transparent"&&{backgroundColor:o.palette[r.color].main,color:o.palette[r.color].contrastText},r.color==="inherit"&&{color:"inherit"},o.palette.mode==="dark"&&!r.enableColorOnDark&&{backgroundColor:null,color:null},r.color==="transparent"&&s({backgroundColor:"transparent",color:"inherit"},o.palette.mode==="dark"&&{backgroundImage:"none"})),o.vars&&s({},r.color==="default"&&{"--AppBar-background":r.enableColorOnDark?o.vars.palette.AppBar.defaultBg:t(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?o.vars.palette.text.primary:t(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?o.vars.palette[r.color].main:t(o.vars.palette.AppBar.darkBg,o.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?o.vars.palette[r.color].contrastText:t(o.vars.palette.AppBar.darkColor,o.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:r.color==="inherit"?"inherit":"var(--AppBar-color)"},r.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),T=k.forwardRef(function(r,a){const l=b({props:r,name:"MuiAppBar"}),{className:i,color:e="primary",enableColorOnDark:d=!1,position:n="fixed"}=l,u=v(l,z),c=s({},l,{color:e,position:n,enableColorOnDark:d}),g=O(c);return C.jsx(R,s({square:!0,component:"header",ownerState:c,elevation:4,className:A(g.root,i,n==="fixed"&&"mui-fixed"),ref:a},u))}),N=T;export{N as A,P as a,I as g};