import{s as I,n as k,c as V,d as U,u as X,g as Y,e as J,r as K}from"../chunks/scheduler.c358b412.js";import{S as O,i as D,g as y,h as x,x as L,k as m,a as M,f as $,s as T,j as z,c as H,y as g,z as Q,m as Z,n as ee,r as F,u as G,v as P,A as j,d as C,t as A,w as R}from"../chunks/index.1673c172.js";import{e as W}from"../chunks/each.e59479a4.js";function te(a){let e,t='<p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"><p><b class="pr-2">Email</b>molly.ivester@gmail.com</p> <p><b class="pr-2">GitHub</b> <a class="text-violet-400" target="_blank" href="https://github.com/mollyollyoxenfree">mollyollyoxenfree<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a class="text-violet-400" target="_blank" href="https://www.linkedin.com/in/molly-smith-0875b967">molly_smith<sup><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p></div>';return{c(){e=y("footer"),e.innerHTML=t,this.h()},l(n){e=x(n,"FOOTER",{class:!0,"data-svelte-h":!0}),L(e)!=="svelte-14xqiy9"&&(e.innerHTML=t),this.h()},h(){m(e,"class","py-20 sm:py-32 bg-slate-700 border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center")},m(n,s){M(n,e,s)},p:k,i:k,o:k,d(n){n&&$(e)}}}class se extends O{constructor(e){super(),D(this,e,null,te,I,{})}}function B(a,e,t){const n=a.slice();return n[2]=e[t],n[4]=t,n}function N(a){let e,t,n=a[2].name+"",s,r;return{c(){e=y("a"),t=y("p"),s=Z(n),r=T(),this.h()},l(c){e=x(c,"A",{href:!0,class:!0});var u=z(e);t=x(u,"P",{});var b=z(t);s=ee(b,n),b.forEach($),r=H(u),u.forEach($),this.h()},h(){m(e,"href",a[2].link),m(e,"class","duration-200 hover:text-violet-400")},m(c,u){M(c,e,u),g(e,t),g(t,s),g(e,r)},p:k,d(c){c&&$(e)}}}function le(a){let e,t,n='<b class="font-bold poppins">Molly</b> Smith',s,r,c,u,b='<div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch</h4>',v,d=W(a[1]),f=[];for(let o=0;o<d.length;o+=1)f[o]=N(B(a,d,o));return{c(){e=y("header"),t=y("h1"),t.innerHTML=n,s=T(),r=y("div");for(let o=0;o<f.length;o+=1)f[o].c();c=T(),u=y("a"),u.innerHTML=b,this.h()},l(o){e=x(o,"HEADER",{class:!0});var p=z(e);t=x(p,"H1",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-g2t5co"&&(t.innerHTML=n),s=H(p),r=x(p,"DIV",{class:!0});var l=z(r);for(let w=0;w<f.length;w+=1)f[w].l(l);l.forEach($),c=H(p),u=x(p,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),L(u)!=="svelte-1ozxpz7"&&(u.innerHTML=b),p.forEach($),this.h()},h(){m(t,"class","font-medium"),m(r,"class","sm:flex ml-auto pr-4 items-center gap-4 hidden"),m(u,"href","https://www.linkedin.com/in/molly-smith-0875b967"),m(u,"target","_blank"),m(u,"class","blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"),m(e,"class",v="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid "+(a[0]>0?"py-4 bg-slate-700 border-violet-950":"py-6 bg-transparent border-transparent"))},m(o,p){M(o,e,p),g(e,t),g(e,s),g(e,r);for(let l=0;l<f.length;l+=1)f[l]&&f[l].m(r,null);g(e,c),g(e,u)},p(o,[p]){if(p&2){d=W(o[1]);let l;for(l=0;l<d.length;l+=1){const w=B(o,d,l);f[l]?f[l].p(w,p):(f[l]=N(w),f[l].c(),f[l].m(r,null))}for(;l<f.length;l+=1)f[l].d(1);f.length=d.length}p&1&&v!==(v="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border border-solid "+(o[0]>0?"py-4 bg-slate-700 border-violet-950":"py-6 bg-transparent border-transparent"))&&m(e,"class",v)},i:k,o:k,d(o){o&&$(e),Q(f,o)}}}function ae(a,e,t){let{y:n}=e,s=[{name:"Projects",link:"#projects"},{name:"About me",link:"#about"}];return a.$$set=r=>{"y"in r&&t(0,n=r.y)},[n,s]}class ne extends O{constructor(e){super(),D(this,e,ae,le,I,{y:0})}}function re(a){let e=!1,t=()=>{e=!1},n,s,r,c,u='<i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>',b,v,d,f,o,p,l,w,S;V(a[5]),V(a[6]),d=new ne({props:{y:a[0]}});const q=a[4].default,_=U(q,a,a[3],null);return p=new se({}),{c(){s=y("div"),r=y("div"),c=y("button"),c.innerHTML=u,v=T(),F(d.$$.fragment),f=T(),_&&_.c(),o=T(),F(p.$$.fragment),this.h()},l(i){s=x(i,"DIV",{class:!0});var h=z(s);r=x(h,"DIV",{class:!0});var E=z(r);c=x(E,"BUTTON",{class:!0,"data-svelte-h":!0}),L(c)!=="svelte-hv4qqy"&&(c.innerHTML=u),E.forEach($),v=H(h),G(d.$$.fragment,h),f=H(h),_&&_.l(h),o=H(h),G(p.$$.fragment,h),h.forEach($),this.h()},h(){m(c,"class","ml-auto rounded-full aspect-square bg-slate-800 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"),m(r,"class",b="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(a[0]>0?"opacity-full pointer-events-auto":"pointer-events-none  opacity-0")),m(s,"class","relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen")},m(i,h){M(i,s,h),g(s,r),g(r,c),g(s,v),P(d,s,null),g(s,f),_&&_.m(s,null),g(s,o),P(p,s,null),l=!0,w||(S=[j(window,"scroll",()=>{e=!0,clearTimeout(n),n=setTimeout(t,100),a[5]()}),j(window,"resize",a[6]),j(c,"click",oe)],w=!0)},p(i,[h]){h&1&&!e&&(e=!0,clearTimeout(n),scrollTo(window.pageXOffset,i[0]),n=setTimeout(t,100)),(!l||h&1&&b!==(b="fixed bottom-0 w-full duration-200 flex p-10 z-[10] "+(i[0]>0?"opacity-full pointer-events-auto":"pointer-events-none  opacity-0")))&&m(r,"class",b);const E={};h&1&&(E.y=i[0]),d.$set(E),_&&_.p&&(!l||h&8)&&X(_,q,i,i[3],l?J(q,i[3],h,null):Y(i[3]),null)},i(i){l||(C(d.$$.fragment,i),C(_,i),C(p.$$.fragment,i),l=!0)},o(i){A(d.$$.fragment,i),A(_,i),A(p.$$.fragment,i),l=!1},d(i){i&&$(s),R(d),_&&_.d(i),R(p),w=!1,K(S)}}}function oe(){document.body.scrollIntoView()}function ie(a,e,t){let{$$slots:n={},$$scope:s}=e,r,c=0,u=0;function b(){t(0,r=window.pageYOffset)}function v(){t(1,c=window.innerHeight),t(2,u=window.innerWidth)}return a.$$set=d=>{"$$scope"in d&&t(3,s=d.$$scope)},[r,c,u,s,n,b,v]}class pe extends O{constructor(e){super(),D(this,e,ie,re,I,{})}}export{pe as component};
