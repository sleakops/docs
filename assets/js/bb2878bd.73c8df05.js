"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4324],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=o.createContext({}),c=function(e){var t=o.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,v=s["".concat(d,".").concat(m)]||s[m]||u[m]||a;return r?o.createElement(v,i(i({ref:t},p),{},{components:r})):o.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var o=r(7462),n=(r(7294),r(3905)),a=r(9378);const i={sidebar_label:"Deleting a Provider",sidebar_position:2},l="Deleting a Provider",d={unversionedId:"provider/deleting-a-provider",id:"provider/deleting-a-provider",title:"Deleting a Provider",description:"- This feature allows you to delete a Provider and all that was created under it.",source:"@site/docs/provider/deleting-a-provider.mdx",sourceDirName:"provider",slug:"/provider/deleting-a-provider",permalink:"/provider/deleting-a-provider",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Deleting a Provider",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Accounts",permalink:"/provider/accounts"},next:{title:"Common Errors",permalink:"/provider/common-errors"}},c={},p=[{value:"How to delete a Provider",id:"how-to-delete-a-provider",level:2},{value:"1. Select the provider to be deleted",id:"1-select-the-provider-to-be-deleted",level:3},{value:"2. Confirm the procedure",id:"2-confirm-the-procedure",level:3},{value:"3. Manually remove the Organization and its Accounts",id:"3-manually-remove-the-organization-and-its-accounts",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deleting-a-provider"},"Deleting a Provider"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This feature allows you to delete a Provider and all that was created under it."),(0,n.kt)("li",{parentName:"ul"},"Only Providers ",(0,n.kt)("em",{parentName:"li"},"Successfully Created")," and in ",(0,n.kt)("em",{parentName:"li"},"Error")," can be deleted. So, if you do not see the feature, probably it is in other status.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f The created ",(0,n.kt)("em",{parentName:"p"},"Organization")," and its accounts (management, development, production, and security) will not be automatically deleted. While keeping these accounts under your AWS Root Account does not incur any costs, ",(0,n.kt)("strong",{parentName:"p"},"we recommend removing")," them manually.")),(0,n.kt)("h2",{id:"how-to-delete-a-provider"},"How to delete a Provider"),(0,n.kt)("h3",{id:"1-select-the-provider-to-be-deleted"},"1. Select the provider to be deleted"),(0,n.kt)("p",null,"Once you are in the ",(0,n.kt)("em",{parentName:"p"},"Providers")," section, choose a provider and click on the Three Dots *",(0,n.kt)("em",{parentName:"p"},"button to display the "),"Delete* option.  Click on it. "),(0,n.kt)(a.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,n.kt)("img",{src:"/img/provider/providerdelete.png",alt:"provider-delete"})),(0,n.kt)("h3",{id:"2-confirm-the-procedure"},"2. Confirm the procedure"),(0,n.kt)("p",null,"You'll see a modal to confirm the action. Remember this action will remove all the infrastructure created on AWS under this Provider. "),(0,n.kt)(a.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,n.kt)("img",{src:"/img/provider/providerconfirmdelete.png",alt:"provider-confirm-delete"})),(0,n.kt)("h3",{id:"3-manually-remove-the-organization-and-its-accounts"},"3. Manually remove the Organization and its Accounts"),(0,n.kt)("p",null,"As it was mentioned before the created ",(0,n.kt)("em",{parentName:"p"},"Organization")," and its accounts (management, development, production, and security) will not be automatically deleted. "),(0,n.kt)("p",null,"Access your AWS Root Account to manually remove them by going to ",(0,n.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/organizations/v2/home/accounts"},"AWS Organizations"),"."),(0,n.kt)(a.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,n.kt)("img",{src:"/img/provider/aws/managment-account-helper.png",alt:"management-account"})))}m.isMDXComponent=!0}}]);