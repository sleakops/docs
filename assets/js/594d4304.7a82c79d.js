"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4762],{9302:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=o(4848),n=o(8453);o(6393);const s={},a="Project",i={id:"project/index",title:"Project",description:"In Sleakops a project represents a codebase and it is managed by a git repository. Once you have a cluster  and an environment  has been created, you can create projects for your company. Create as many projects as repositories your application has.",source:"@site/docs/project/index.mdx",sourceDirName:"project",slug:"/project/",permalink:"/project/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment",permalink:"/environment"},next:{title:"Build",permalink:"/project/build/"}},c={},l=[{value:"Create ProjectEnvs",id:"create-projectenvs",level:2}];function p(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"project",children:"Project"})}),"\n",(0,r.jsxs)(t.p,{children:["In Sleakops a project represents a codebase and it is managed by a git repository. Once you have a ",(0,r.jsx)(t.a,{href:"/cluster/",children:"cluster "})," and an ",(0,r.jsx)(t.a,{href:"/environment",children:"environment "})," has been created, you can create projects for your company. Create as many projects as repositories your application has.\nTo differentiate we call it ProjectEnv and in the cluster it acts as a Namespace."]}),"\n",(0,r.jsx)(t.h2,{id:"create-projectenvs",children:"Create ProjectEnvs"}),"\n",(0,r.jsx)(t.p,{children:"To create a project you need to give Sleakops authorization to access repositories from an external git provider account where the sources of your project are hosted.\nSleakops integrates these third-party git applications:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Github"}),"\n",(0,r.jsxs)(t.li,{children:["GitLab. If your GitLab is self-hosted, please follow these ",(0,r.jsx)(t.a,{href:"/project/gitlab",children:"instructions"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Bitbucket"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Completing this first step now you are allowed to create a Project, you have to select which of the repositories you want to use, the branch this ProjectEnv will use and the location of the Dockerfile in your repository. Optionally you can also set Kubernetes volumes if you need them, more info on ",(0,r.jsx)(t.a,{href:"/project/more_on_project",children:"More on ProjectEnv "}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"Docker Args",type:"info",children:(0,r.jsx)(t.p,{children:"If your Dockerfile requires Docker Args you will have to set them after the ProjectEnv creation. You can do this in the ProjectEnv list."})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},6393:()=>{},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var r=o(6540);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);