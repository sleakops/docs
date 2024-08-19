"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),a=r(9378);r(7435);const s={},i="User",c={unversionedId:"user/index",id:"user/index",title:"User",description:"User Creation",source:"@site/docs/user/index.mdx",sourceDirName:"user",slug:"/user/",permalink:"/user/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SleakOps resources overview",permalink:"/sleakops-overview"},next:{title:"AWS Console Authentication",permalink:"/user/aws_console_authentication"}},l={},u=[{value:"User Creation",id:"user-creation",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"user"},"User"),(0,o.kt)("h2",{id:"user-creation"},"User Creation"),(0,o.kt)("p",null,"Sleakops has three fundamental fields of user permissions:\nRole: Defines what the user is allowed to do inside SleakOps, it's separated into three roles, 'Admin', 'Editor' and 'Read Only'."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Viewer: Read-only user."),(0,o.kt)("li",{parentName:"ul"},"Editor: It has PowerUser permissions which allows them to create infrastructure resources in Sleakops and AWS but not to manage users. You have to select to which accounts the User will have permissions. "),(0,o.kt)("li",{parentName:"ul"},"Admin: Same as Editors but with the addition that they can manage other users permissions and they have complete access to every account. ")),(0,o.kt)("p",null,"AWS Account Accesses: This field shows you every account, here you select to which accounts the user (Editor or Read-only) will have access.\nVPN Account Accesses: It's similar to the AWS account accesses field but here you set if a user it's also created on the VPN Server of the account you give. More information can be checked on ",(0,o.kt)("a",{parentName:"p",href:"/vpn/"},"VPN documentation")),(0,o.kt)(a.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,o.kt)("img",{src:"/img/users/USER-creation-form.png",alt:"USER-creation-form"})),(0,o.kt)("p",null,"For access into the AWS accounts SleakOps initially sets a random password and sends it to the email of the created user. The user can login with that password but it will be obligated to change its password on the first login. For SleakOps platform access we use the password that was set on the User form."),(0,o.kt)("p",null,"After this user creation an AWS User will be created on the 'security' Account, this account is where we control acesses to all the SleakOps AWS accounts. We will also create, depending on the configuration, users on the VPN servers, read how to use them on the corresponding ",(0,o.kt)("a",{parentName:"p",href:"/vpn/vpn_user_connection"},"documentation ")," and on the SleakOps user."))}h.isMDXComponent=!0},7435:()=>{}}]);