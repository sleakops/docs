"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5317],{3178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(4848),i=n(8453);const s={},r="More on Deployments:",a={id:"deployment/more_on_deployment",title:"More on Deployments:",description:"This section serves as an extension of the primary Deployment documentation. It's recommended to read that first for a foundational understanding.",source:"@site/docs/deployment/more_on_deployment.mdx",sourceDirName:"deployment",slug:"/deployment/more_on_deployment",permalink:"/deployment/more_on_deployment",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/deployment/"},next:{title:"Release",permalink:"/deployment/release"}},l={},d=[{value:"How SleakOps Handles Deployments",id:"how-sleakops-handles-deployments",level:2},{value:"Forced Deployments",id:"forced-deployments",level:3}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"more-on-deployments",children:"More on Deployments:"})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["This section serves as an extension of the primary ",(0,o.jsx)(t.a,{href:"/deployment",children:"Deployment documentation"}),". It's recommended to read that first for a foundational understanding."]})}),"\n",(0,o.jsx)(t.h2,{id:"how-sleakops-handles-deployments",children:"How SleakOps Handles Deployments"}),"\n",(0,o.jsxs)(t.p,{children:["To execute a deployment, SleakOps utilizes the ",(0,o.jsx)(t.a,{href:"/project/build",children:"Build"})," images stored in your project's image repository (AWS ECR), which are created either with the ",(0,o.jsx)(t.a,{href:"/project",children:"ProjectEnv"})," entity during the ",(0,o.jsx)(t.a,{href:"/project/build/initial-build",children:"Initial Build"})," or with the creation of a Build entity that pushes to the ECR. Whenever a Deployment is initiated, we fetch the image corresponding to the designated Build."]}),"\n",(0,o.jsx)(t.p,{children:"The next phase involves constructing and deploying the Helm chart. This is accomplished using generally purpose-built templates. Once constructed, we upload the Helm chart to the same ECR utilized for the Build images and proceed to deploy a Helm Release into the Kubernetes cluster, specifically within the ProjectEnv namespace."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"All these resources reside in your own AWS Accounts. Sleakops does not exclusively store any data."})}),"\n",(0,o.jsx)(t.h3,{id:"forced-deployments",children:"Forced Deployments"}),"\n",(0,o.jsx)(t.admonition,{title:"Forced Deployment",type:"caution",children:(0,o.jsx)(t.p,{children:"Hace in mind that under certain circumstances, SleakOps forces a Deploy."})}),"\n",(0,o.jsxs)(t.p,{children:["While multiple methods for generating a Deployment were highlighted in the primary ",(0,o.jsx)(t.a,{href:"/deployment",children:"Deployment documentation"}),", it's crucial to understand that SleakOps sometimes enforces Deployments. The rationale behind this is to optimize uptime, safeguard the current state of the deployed infrastructure, and mitigate potential service downtimes on the Cluster. This imperative arises because Helm templates should always synchronize with the Kubernetes Secrets present in the namespace to avert deployment failures."]}),"\n",(0,o.jsx)(t.p,{children:"As you may already know, if it's not a 'forced' deployment, you'll be presented with an option (switcher) to determine if you wish to deploy your modifications. Deployments are forced in the following scenarios."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/service/",children:"Service"})," Alias Configuration Changes: A Deployment is forced if any alterations are made to the 'alias' configuration."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/dependency",children:"Dependency"}),": Always forces a Deployment to synchronize its associated VariableGroup state with the templates of the Helm Chart ensuring that Services operation is not affected."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/vargroup",children:"VariableGroup"})," Deletion: Same case as Dependency deletion."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(6540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);