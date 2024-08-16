"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_label:"Getting Started",sidebar_position:3},a="Getting Starter",s={unversionedId:"gettingstarted",id:"gettingstarted",title:"Getting Starter",description:"Sign in with your email",source:"@site/docs/gettingstarted.mdx",sourceDirName:".",slug:"/gettingstarted",permalink:"/gettingstarted",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Getting Started",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Basic Concepts",permalink:"/basicconcepts"},next:{title:"Providers",permalink:"/provider/"}},l={},c=[{value:"Sign in with your email",id:"sign-in-with-your-email",level:2},{value:"Requirements to Join",id:"requirements-to-join",level:3}],p=(u="Zoom",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const m={toc:c},d="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-starter"},"Getting Starter"),(0,o.kt)("h2",{id:"sign-in-with-your-email"},"Sign in with your email"),(0,o.kt)("p",null,"Sign in to our\xa0",(0,o.kt)("a",{parentName:"p",href:"https://console.sleakops.com/login/"},"web app"),"."),(0,o.kt)(p,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,o.kt)("img",{src:"/img/gslogin.png",alt:"getting-started-login"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In case you do not have an account with us, you need to subscribe using AWS. Follow ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/prodview-c6e4g3knpgtgs"},"How to subscribe to SleakOps using AWS"),".")),(0,o.kt)("h3",{id:"requirements-to-join"},"Requirements to Join"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have a root user on AWS. It is the initial account created with full permissions to manage all resources and services, serving as the primary account for AWS Organizations. \xa0",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/organizations/v2/home/accounts"},"Go to AWS Organizations"),"."),(0,o.kt)("li",{parentName:"ul"},"You need access to your code repositories (GitLab, Bitbucket or GitHub)."),(0,o.kt)("li",{parentName:"ul"},"You need your services in Docker files."),(0,o.kt)("li",{parentName:"ul"},"You need to be able to manage your domains.")))}g.isMDXComponent=!0}}]);