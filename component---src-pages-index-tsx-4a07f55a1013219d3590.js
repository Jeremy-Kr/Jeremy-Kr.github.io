"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{4020:function(e){var t="%[a-f0-9]{2}",r=new RegExp("("+t+")|([^%]+?)","gi"),n=new RegExp("("+t+")+","gi");function a(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function o(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r)||[];return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(e);a;){try{r[a[0]]=decodeURIComponent(a[0])}catch(t){var i=o(a[0]);i!==a[0]&&(r[a[0]]=i)}a=n.exec(e)}r["%C2"]="�";for(var s=Object.keys(r),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),r[c])}return e}(e)}}},1267:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var n={};r.r(n),r.d(n,{exclude:function(){return J},extract:function(){return _},parse:function(){return B},parseUrl:function(){return G},pick:function(){return H},stringify:function(){return T},stringifyUrl:function(){return K}});var a=r(7294),o=r(4316),i=r(3723),s=r(917);const l=(0,o.Z)(i.G,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"});var c=e=>{let{profileImage:t}=e;return(0,s.tZ)(l,{image:t,alt:"Profile Image"})};const p=(0,o.Z)("header",{target:"e160b013"})({name:"1fehigg",styles:"width:100%;background-image:linear-gradient(60deg, #a9cefb 0%, #f3b4b3 100%);color:#333"}),u=(0,o.Z)("div",{target:"e160b012"})({name:"17ggb49",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:330px;margin:0 auto;@media (max-width: 768px){width:100%;height:250px;padding:0 20px;}"}),d=(0,o.Z)("div",{target:"e160b011"})({name:"1qq3kxc",styles:"font-size:22px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),f=(0,o.Z)("div",{target:"e160b010"})({name:"1mgdphf",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:25px;}"});var g=e=>{let{profileImage:t}=e;return(0,s.tZ)(p,null,(0,s.tZ)(u,null,(0,s.tZ)(c,{profileImage:t}),(0,s.tZ)("div",null,(0,s.tZ)(d,null,"만나서 반가워요!"),(0,s.tZ)(f,null,"주니어 프론트엔드 개발자 이정익입니다."))))},m=r(1883);const y=(0,o.Z)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),x=(0,o.Z)((e=>{let{active:t,...r}=e;return(0,s.tZ)(m.rU,r)}),{target:"e1kn8q5k0"})("margin-right:15px;margin-bottom:10px;padding:10px;font-size:18px;font-weight:",(e=>{let{active:t}=e;return t?"800":"400"}),";cursor:pointer;background-color:",(e=>{let{active:t}=e;return t?"#ffd83b":"#fdf086"}),";border-radius:5px;transition:0.3s;&:hover{background-color:#ffd83b;scale:1.03;}&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}");var b=e=>{let{selectedCategory:t,categoryList:r}=e;return(0,s.tZ)(y,null,Object.entries(r).map((e=>{let[r,n]=e;return(0,s.tZ)(x,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},h=r(7462);const k=(0,o.Z)(m.rU,{target:"e1eg5kak7"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),w=(0,o.Z)(i.G,{target:"e1eg5kak6"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),v=(0,o.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),Z=(0,o.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),j=(0,o.Z)("div",{target:"e1eg5kak3"})({name:"148rk6b",styles:"font-size:14px;font-weight:400;opacity:0.7;color:#777"}),I=(0,o.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),F=(0,o.Z)("div",{target:"e1eg5kak1"})({name:"zaj2ak",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:#408250;font-size:14px;font-weight:700;color:white"}),O=(0,o.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"});var S=e=>{let{title:t,date:r,categories:n,summary:a,thumbnail:{childImageSharp:{gatsbyImageData:o}},link:i}=e;return(0,s.tZ)(k,{to:i},(0,s.tZ)(w,{image:o,alt:"Post Item Image"}),(0,s.tZ)(v,null,(0,s.tZ)(Z,null,t),(0,s.tZ)(j,null,r),(0,s.tZ)(I,null,n.map((e=>(0,s.tZ)(F,{key:e},e)))),(0,s.tZ)(O,null,a)))};var E=(e,t)=>{const r=(0,a.useRef)(null),n=(0,a.useRef)(null),{0:o,1:i}=(0,a.useState)(1),s=r.current,l=(0,a.useMemo)((()=>t.filter((t=>{let{node:{frontmatter:{categories:r}}}=t;return"All"===e||r.includes(e)}))),[e]);return(0,a.useEffect)((()=>{n.current=new IntersectionObserver(((e,t)=>{e[0].isIntersecting&&(i((e=>e+1)),t.unobserve(e[0].target))}))}),[]),(0,a.useEffect)((()=>i(1)),[e]),(0,a.useEffect)((()=>{10*o>=l.length||null===s||0===s.children.length||null===n.current||n.current.observe(s.children[s.children.length-1])}),[o,e]),{containerRef:r,postList:l.slice(0,10*o)}};const C=(0,o.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"});var R=e=>{let{selectedCategory:t,posts:r}=e;const{containerRef:n,postList:a}=E(t,r);return(0,s.tZ)(C,{ref:n},a.map((e=>{let{node:{id:t,fields:{slug:r},frontmatter:n}}=e;return(0,s.tZ)(S,(0,h.Z)({},n,{link:r,key:t}))})))},A=r(4020),N=r(500);function U(e,t){const r={};if(Array.isArray(t))for(const n of t){const t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(const n of Reflect.ownKeys(e)){const a=Object.getOwnPropertyDescriptor(e,n);if(a.enumerable){t(n,e[n],e)&&Object.defineProperty(r,n,a)}}return r}const $=Symbol("encodeFragmentIdentifier");function z(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function q(e,t){return t.encode?t.strict?encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)):encodeURIComponent(e):e}function L(e,t){return t.decode?A(e):e}function P(e){return Array.isArray(e)?e.sort():"object"==typeof e?P(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function D(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function M(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function _(e){const t=(e=D(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function B(e,t){z((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...t}).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"colon-list-separator":return(e,r,n)=>{t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[...n[e],r]:n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&L(r,e).includes(e.arrayFormatSeparator);r=o?L(r,e):r;const i=a||o?r.split(e.arrayFormatSeparator).map((t=>L(t,e))):null===r?r:L(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{const a=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!a)return void(n[t]=r?L(r,e):r);const o=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>L(t,e)));void 0!==n[t]?n[t]=[...n[t],...o]:n[t]=o};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[...[r[e]].flat(),t]:r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){if(""===a)continue;let[e,o]=N(t.decode?a.replace(/\+/g," "):a,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:L(o,t),r(L(e,t),o,n)}for(const[a,o]of Object.entries(n))if("object"==typeof o&&null!==o)for(const[e,r]of Object.entries(o))o[e]=M(r,t);else n[a]=M(o,t);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=P(r):e[t]=r,e}),Object.create(null))}function T(e,t){if(!e)return"";z((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[q(t,e),"[",a,"]"].join("")]:[...r,[q(t,e),"[",q(a,e),"]=",q(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[q(t,e),"[]"].join("")]:[...r,[q(t,e),"[]=",q(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[q(t,e),":list="].join("")]:[...r,[q(t,e),":list=",q(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,a)=>void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a?n:(a=null===a?"":a,0===n.length?[[q(r,e),t,q(a,e)].join("")]:[[n,q(a,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,q(t,e)]:[...r,[q(t,e),"=",q(n,e)].join("")]}}(t),a={};for(const[i,s]of Object.entries(e))r(i)||(a[i]=s);const o=Object.keys(a);return!1!==t.sort&&o.sort(t.sort),o.map((r=>{const a=e[r];return void 0===a?"":null===a?q(r,t):Array.isArray(a)?0===a.length&&"bracket-separator"===t.arrayFormat?q(r,t)+"[]":a.reduce(n(r),[]).join("&"):q(r,t)+"="+q(a,t)})).filter((e=>e.length>0)).join("&")}function G(e,t){t={decode:!0,...t};const[r,n]=N(e,"#");return{url:r?.split("?")?.[0]??"",query:B(_(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:L(n,t)}:{}}}function K(e,t){t={encode:!0,strict:!0,[$]:!0,...t};const r=D(e.url).split("?")[0]||"";let n=T({...B(_(e.url),{sort:!1}),...e.query},t);n&&(n=`?${n}`);let a=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);if(e.fragmentIdentifier){const n=new URL(r);n.hash=e.fragmentIdentifier,a=t[$]?n.hash:`#${e.fragmentIdentifier}`}return`${r}${n}${a}`}function H(e,t,r){r={parseFragmentIdentifier:!0,[$]:!1,...r};const{url:n,query:a,fragmentIdentifier:o}=G(e,r);return K({url:n,query:U(a,t),fragmentIdentifier:o},r)}function J(e,t,r){return H(e,Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r),r)}var Q=n,V=r(6450);var W=e=>{let{location:{search:t},data:{site:{siteMetadata:{title:r,description:n,siteUrl:o}},allMarkdownRemark:{edges:i},file:{childImageSharp:{gatsbyImageData:l},publicURL:c}}}=e;const p=Q.parse(t),u="string"==typeof p.category&&p.category?p.category:"All",d=(0,a.useMemo)((()=>i.reduce(((e,t)=>{let{node:{frontmatter:{categories:r}}}=t;return r.forEach((t=>{void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})),[]);return(0,s.tZ)(V.Z,{title:r,description:n,url:o,image:c},(0,s.tZ)(g,{profileImage:l}),(0,s.tZ)(b,{selectedCategory:u,categoryList:d}),(0,s.tZ)(R,{selectedCategory:u,posts:i}))}},500:function(e){e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4a07f55a1013219d3590.js.map