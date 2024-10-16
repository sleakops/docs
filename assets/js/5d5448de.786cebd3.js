"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4834],{96:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var r=o(4848),s=o(8453),n=o(4028);o(6393);const c={},a="Volumes",i={id:"project/volumes",title:"Volumes",description:"In the context of Sleakops, volumes refer to AWS/Kubernetes storage resources attached to a cluster. They serve as general storage for specified containers. Pods can only interact with these volumes if they are explicitly attached to them.",source:"@site/docs/project/volumes.mdx",sourceDirName:"project",slug:"/project/volumes",permalink:"/project/volumes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"More on ProjectEnv:",permalink:"/project/more_on_project"},next:{title:"Service",permalink:"/service/"}},l={},u=[];function h(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"volumes",children:"Volumes"})}),"\n",(0,r.jsx)(t.p,{children:"In the context of Sleakops, volumes refer to AWS/Kubernetes storage resources attached to a cluster. They serve as general storage for specified containers. Pods can only interact with these volumes if they are explicitly attached to them."}),"\n",(0,r.jsxs)(t.p,{children:["You can define the volumes in the ",(0,r.jsx)(t.a,{href:"/project",children:"Project"})," form:"]}),"\n",(0,r.jsx)(n.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,r.jsx)("img",{src:"/img/project/PROJECT-volumes-form.png",alt:"PROJECT-volumes-form",style:{height:"250px",width:"auto"}})}),"\n",(0,r.jsxs)(t.p,{children:["Whenever a volume is needed, Sleakops deploys an EFS CSI Driver within the ",(0,r.jsx)(t.a,{href:"/cluster",children:"cluster"}),". This allows every Project to have its own unique volume mount, storing folders based on the paths you specify."]}),"\n",(0,r.jsx)(t.p,{children:"A practical use-case for Volumes is when you want all your pods to access the same files, such as a shared folder that requires its content to be persistent."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6393:()=>{},8453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>a});var r=o(6540);const s={},n=r.createContext(s);function c(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);