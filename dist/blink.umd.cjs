var D=(h,i,l)=>{if(!i.has(h))throw TypeError("Cannot "+l)};var t=(h,i,l)=>(D(h,i,"read from private field"),l?l.call(h):i.get(h)),n=(h,i,l)=>{if(i.has(h))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(h):i.set(h,l)},p=(h,i,l,c)=>(D(h,i,"write to private field"),c?c.call(h,l):i.set(h,l),l);var o=(h,i,l)=>(D(h,i,"access private method"),l);(function(h,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(h=typeof globalThis<"u"?globalThis:h||self,i(h.Blink={}))})(this,function(h){var l,c,s,r,u,e,a,m,f,C,z,E,H,$,M,w,v,b,I,T,O,k,R,B,W,S,q,g,x;"use strict";const d=class{constructor(y,j,L){n(this,C);n(this,E);n(this,$);n(this,w);n(this,b);n(this,T);n(this,k);n(this,B);n(this,S);n(this,g);n(this,s,void 0);n(this,r,void 0);n(this,u,void 0);n(this,e,void 0);n(this,a,void 0);n(this,m,!1);n(this,f,void 0);if(!t(d,l))throw new TypeError("Blink Class is not constructable");p(this,u,y),p(this,e,j),p(this,a,L),p(this,f,L.arrow?document.createElement("div"):null)}static create(y,j,L){var A,N,P;const F=Object.assign({placement:"auto",event:"hover",arrow:!1,dropdown:"none",duration:700},L);return p(d,l,!0),p(d,c,new d(y,j,F)),p(d,l,!1),o(A=t(d,c),C,z).call(A),o(N=t(d,c),E,H).call(N),o(P=t(d,c),$,M).call(P),t(d,c)}};let i=d;l=new WeakMap,c=new WeakMap,s=new WeakMap,r=new WeakMap,u=new WeakMap,e=new WeakMap,a=new WeakMap,m=new WeakMap,f=new WeakMap,C=new WeakSet,z=function(){t(this,e).style.position="absolute",t(this,e).style.zIndex=10,t(this,e).style.opacity=0,t(this,e).style.margin=0,t(this,e).style.padding="8px 12px",t(this,e).style.transition=`opacity ${t(this,a).duration/1e3}s ease`,p(this,s,t(this,u).getBoundingClientRect()),p(this,r,t(this,e).getBoundingClientRect()),t(this,e).style.display="none"},E=new WeakSet,H=function(){t(this,a).event=="hover"&&(t(this,u).addEventListener("mouseenter",()=>{t(this,e).style.display="block",setTimeout(()=>{t(this,e).style.opacity=100},100)}),t(this,u).addEventListener("mouseleave",()=>{t(this,e).style.opacity=0,setTimeout(()=>{t(this,e).style.display="none"},t(this,a).duration)})),t(this,a).event=="click"&&t(this,u).addEventListener("click",()=>{t(this,m)?(t(this,e).style.opacity=0,setTimeout(()=>{t(this,e).style.display="none"},t(this,a).duration),p(this,m,!1)):(t(this,e).style.display="block",setTimeout(()=>{t(this,e).style.opacity=100},100),p(this,m,!0))})},$=new WeakSet,M=function(){if(t(this,a).dropdown!=="none")o(this,S,q).call(this,t(this,a).dropdown);else{if(t(this,a).arrow){const y=window.getComputedStyle(t(this,e)).backgroundColor;t(this,f).style.cssText=`width: 10px;
           height: 10px;
           transform: rotate(45deg);
           position: absolute;
           background-color: ${y};`,t(this,e).appendChild(t(this,f))}switch(t(this,a).placement){case"top":o(this,w,v).call(this);break;case"bottom":o(this,b,I).call(this);break;case"left":o(this,T,O).call(this);break;case"right":o(this,k,R).call(this);break;case"auto":o(this,B,W).call(this);break;default:o(this,w,v).call(this)}}o(this,g,x).call(this,t(this,a).placement)||console.warn("Be carreful, there is no place for the tooltip to show !")},w=new WeakSet,v=function(){t(this,e).style.left=t(this,s).left+(t(this,s).width-t(this,r).width)/2+"px",t(this,e).style.top=t(this,s).top-t(this,r).height-15+"px",t(this,a).arrow&&(t(this,f).style.cssText+=`bottom: -5px;left: ${t(this,r).width/2-5}px;`)},b=new WeakSet,I=function(){t(this,e).style.left=t(this,s).left+(t(this,s).width-t(this,r).width)/2+"px",t(this,e).style.top=t(this,s).bottom+15+"px",t(this,a).arrow&&(t(this,f).style.cssText+=`top: -5px;
         left: ${t(this,r).width/2-5}px;`)},T=new WeakSet,O=function(){t(this,e).style.top=t(this,s).top+(t(this,s).height-t(this,r).height)/2+"px",t(this,e).style.left=t(this,s).left-t(this,r).width-20+"px",t(this,a).arrow&&(t(this,f).style.cssText+=`top: ${t(this,r).height/2-5}px;right: -5px;`)},k=new WeakSet,R=function(){t(this,e).style.top=t(this,s).top+(t(this,s).height-t(this,r).height)/2+"px",t(this,e).style.left=t(this,s).right+15+"px",t(this,a).arrow&&(t(this,f).style.cssText+=`top: ${t(this,r).height/2-5}px;left: -5px;`)},B=new WeakSet,W=function(){o(this,g,x).call(this,"top")?o(this,w,v).call(this):o(this,g,x).call(this,"bottom")?o(this,b,I).call(this):o(this,g,x).call(this,"right")?o(this,k,R).call(this):o(this,g,x).call(this,"left")?o(this,T,O).call(this):(o(this,w,v).call(this),console.warn("Be carreful, there is no place for the tooltip to show !"))},S=new WeakSet,q=function(y){y=="right"?(t(this,e).style.left=t(this,s).right-t(this,r).width+"px",t(this,e).style.top=t(this,s).bottom+"px"):(t(this,e).style.left=t(this,s).left+"px",t(this,e).style.top=t(this,s).bottom+"px")},g=new WeakSet,x=function(y){switch(y){case"top":return t(this,s).top>t(this,r).height+20;case"bottom":return window.innerHeight-t(this,s).bottom>t(this,r).height+20;case"left":return t(this,s).left>t(this,r).width+20;case"right":return window.innerWidth-t(this,s).right>t(this,r).width+20;case"auto":return!0}},n(i,l,!1),n(i,c,void 0),h.Blink=i,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
