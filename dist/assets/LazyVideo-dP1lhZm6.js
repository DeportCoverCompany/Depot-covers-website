import{n as b,s as n,q as u}from"./index-gNEh0EQK.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=b("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);function y({src:l,poster:a,className:d,label:p,autoPlay:s=!0,rootMargin:o="200px"}){const c=n.useRef(null),i=n.useRef(null),[r,f]=n.useState(!1);return n.useEffect(()=>{const t=c.current;if(!t||typeof IntersectionObserver>"u"){f(!0);return}const e=new IntersectionObserver(v=>{v.some(m=>m.isIntersecting)&&(f(!0),e.disconnect())},{rootMargin:o});return e.observe(t),()=>e.disconnect()},[o]),n.useEffect(()=>{if(!r||!s)return;const t=i.current;if(!t)return;const e=t.play();e&&typeof e.catch=="function"&&e.catch(()=>{})},[r,s]),u.jsx("div",{ref:c,className:d,children:u.jsx("video",{ref:i,src:r?l:void 0,poster:a,autoPlay:s&&r,muted:!0,loop:!0,playsInline:!0,preload:"none","aria-label":p,className:"h-full w-full object-cover"})})}export{x as C,y as L};
