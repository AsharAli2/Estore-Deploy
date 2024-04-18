import{w as $,L as R,a9 as b,M as _,_ as h,$ as S,aa as g,e as M,N as A,f as L,j as U,t as j,v as N}from"./index-a0742aba.js";function O(t){return String(parseFloat(t)).length===String(t).length}function k(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function i(t){return parseFloat(t)}function V(t){return(e,a)=>{const n=k(e);if(n===a)return e;let s=i(e);n!=="px"&&(n==="em"||n==="rem")&&(s=i(e)*i(t));let r=s;if(a!=="px")if(a==="em")r=s/i(t);else if(a==="rem")r=s/i(t);else return e;return parseFloat(r.toFixed(5))+a}}function q({size:t,grid:e}){const a=t-t%e,n=a+e;return t-a<n-t?a:n}function D({lineHeight:t,pixels:e,htmlFontSize:a}){return e/(t*a)}function H({cssProperty:t,min:e,max:a,unit:n="rem",breakpoints:s=[600,900,1200],transform:r=null}){const o={[t]:`${e}${n}`},u=(a-e)/s[s.length-1];return s.forEach(c=>{let l=e+u*c;r!==null&&(l=r(l)),o[`@media (min-width:${c}px)`]={[t]:`${Math.round(l*1e4)/1e4}${n}`}}),o}function X(t){return $("MuiSkeleton",t)}const B=R("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]),I=B,E=["animation","className","component","height","style","variant","width"];let d=t=>t,m,v,C,x;const P=t=>{const{classes:e,variant:a,animation:n,hasChildren:s,width:r,height:o}=t;return N({root:["root",a,n,s&&"withChildren",s&&!r&&"fitContent",s&&!o&&"heightAuto"]},X,e)},F=b(m||(m=d`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),K=b(v||(v=d`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),T=_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:a}=t;return[e.root,e[a.variant],a.animation!==!1&&e[a.animation],a.hasChildren&&e.withChildren,a.hasChildren&&!a.width&&e.fitContent,a.hasChildren&&!a.height&&e.heightAuto]}})(({theme:t,ownerState:e})=>{const a=k(t.shape.borderRadius)||"px",n=i(t.shape.borderRadius);return h({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:S(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},e.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${a}/${Math.round(n/.6*10)/10}${a}`,"&:empty:before":{content:'"\\00a0"'}},e.variant==="circular"&&{borderRadius:"50%"},e.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&g(C||(C=d`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),F),({ownerState:t,theme:e})=>t.animation==="wave"&&g(x||(x=d`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),K,(e.vars||e).palette.action.hover)),W=M.forwardRef(function(e,a){const n=A({props:e,name:"MuiSkeleton"}),{animation:s="pulse",className:r,component:o="span",height:u,style:c,variant:l="text",width:w}=n,p=L(n,E),f=h({},n,{animation:s,component:o,variant:l,hasChildren:!!p.children}),y=P(f);return U.jsx(T,h({as:o,ref:a,className:j(y.root,r),ownerState:f},p,{style:h({width:w,height:u},c)}))}),J=W;export{J as S,q as a,k as b,V as c,D as f,X as g,O as i,H as r,I as s,i as t};
