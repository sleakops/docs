"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4147],{5037:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=s(4848),r=s(8453),n=s(4028);s(6393);const a={},c="Volumes",l={id:"cluster/volumes",title:"Volumes",description:"In the context of Sleakops, volumes refer to AWS/Kubernetes storage resources attached to a cluster. They serve as general storage for specified containers. Pods can only interact with these volumes if they are explicitly attached to them.",source:"@site/docs/cluster/volumes.mdx",sourceDirName:"cluster",slug:"/cluster/volumes",permalink:"/cluster/volumes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Details on shutdown",permalink:"/cluster/nightly_shutdown"},next:{title:"Environment",permalink:"/environment"}},i={},u=[];function h(e){const t={a:"a",h1:"h1",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"volumes",children:"Volumes"})}),"\n",(0,o.jsx)(t.p,{children:"In the context of Sleakops, volumes refer to AWS/Kubernetes storage resources attached to a cluster. They serve as general storage for specified containers. Pods can only interact with these volumes if they are explicitly attached to them."}),"\n",(0,o.jsxs)(t.p,{children:["You can define the volumes in the ",(0,o.jsx)(t.a,{href:"/project",children:"Project"})," form:"]}),"\n",(0,o.jsx)(n.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,o.jsx)("img",{src:"/img/project/PROJECT-volumes-form.png",alt:"PROJECT-volumes-form",style:{height:"250px",width:"auto"}})}),"\n",(0,o.jsxs)(t.p,{children:["Whenever a volume is needed, Sleakops deploys an EFS CSI Driver within the ",(0,o.jsx)(t.a,{href:"/cluster",children:"cluster"}),". This allows every Project to have its own unique volume mount, storing folders based on the paths you specify."]}),"\n",(0,o.jsx)(t.p,{children:"A practical use-case for Volumes is when you want all your pods to access the same files, such as a shared folder that requires its content to be persistent."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6393:()=>{},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var o=s(6540);const r={},n=o.createContext(r);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);