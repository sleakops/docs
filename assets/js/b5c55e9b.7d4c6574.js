"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4787],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return t?n.createElement(b,l(l({ref:r},c),{},{components:t})):n.createElement(b,l({ref:r},c))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9545:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const a={},l="Release",s={unversionedId:"deployment/release",id:"deployment/release",title:"Release",description:"What is a Release?",source:"@site/docs/deployment/release.mdx",sourceDirName:"deployment",slug:"/deployment/release",permalink:"/deployment/release",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"More on Deployments:",permalink:"/deployment/more_on_deployment"},next:{title:"Variable Group",permalink:"/vargroup/"}},i={},u=[{value:"What is a Release?",id:"what-is-a-release",level:2},{value:"Release Creation",id:"release-creation",level:2},{value:"Helm Chart Resources",id:"helm-chart-resources",level:3},{value:"Web Service:",id:"web-service",level:4},{value:"Worker:",id:"worker",level:4},{value:"Hook:",id:"hook",level:4},{value:"Cron Job:",id:"cron-job",level:4}],c={toc:u},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release"},"Release"),(0,o.kt)("h2",{id:"what-is-a-release"},"What is a Release?"),(0,o.kt)("p",null,"In Sleakops, a release represents a deployable state of all the services (web services, workers, cron jobs, and jobs) of a ",(0,o.kt)("a",{parentName:"p",href:"/project"},"project")," in an ",(0,o.kt)("a",{parentName:"p",href:"/environment"},"environment"),"."),(0,o.kt)("h2",{id:"release-creation"},"Release Creation"),(0,o.kt)("p",null,"Sleakops administers releases for you. Every time you modify, delete, or add a service, worker, hook, or cron job, Sleakops gives you the option to publish the changes. Each time you publish those changes, Sleakops creates a new release with auto-incremented versions."),(0,o.kt)("h3",{id:"helm-chart-resources"},"Helm Chart Resources"),(0,o.kt)("h4",{id:"web-service"},"Web Service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Kubernetes deployment"),(0,o.kt)("li",{parentName:"ul"},"A Kubernetes service"),(0,o.kt)("li",{parentName:"ul"},"A Kubernetes HPA (Horizontal Pod Autoscaler)"),(0,o.kt)("li",{parentName:"ul"},"A Kubernetes ingress")),(0,o.kt)("p",null,"The ingress generates its hosts using <service_name>.<environment_name>.<organization_name>.<yourdomain",".","com>"),(0,o.kt)("h4",{id:"worker"},"Worker:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Kubernetes deployment"),(0,o.kt)("li",{parentName:"ul"},"A Kubernetes HPA")),(0,o.kt)("h4",{id:"hook"},"Hook:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Kubernetes job")),(0,o.kt)("p",null,"This job uses Kubernetes hooks to start."),(0,o.kt)("h4",{id:"cron-job"},"Cron Job:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Kubernetes cron job")))}m.isMDXComponent=!0}}]);