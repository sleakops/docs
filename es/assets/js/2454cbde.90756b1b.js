"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7360],{1116:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=o(4848),t=o(8453),i=o(4028);const r={},a="Node Pools",l={id:"cluster/nodepools/index",title:"Node Pools",description:"A node pool is essentially a collection of nodes within a Kubernetes cluster that have similar configurations, such as the same machine type, operating system, and instance size.",source:"@site/docs/cluster/nodepools/index.mdx",sourceDirName:"cluster/nodepools",slug:"/cluster/nodepools/",permalink:"/es/cluster/nodepools/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cluster Addons",permalink:"/es/cluster/addons"},next:{title:"Creating a Node Pool",permalink:"/es/cluster/nodepools/creating-nodepool"}},d={},c=[];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"node-pools",children:"Node Pools"})}),"\n",(0,s.jsx)(n.p,{children:"A node pool is essentially a collection of nodes within a Kubernetes cluster that have similar configurations, such as the same machine type, operating system, and instance size."}),"\n",(0,s.jsx)(n.p,{children:"All nodes in a node pool are configured identically, making it easier to manage and maintain consistency across your cluster. This is especially useful when scaling the cluster, as additional nodes added to the pool will have the same specifications."}),"\n",(0,s.jsx)(n.p,{children:"When a Cluster is created on SleakOps, a set of node pools are created, based on the architecture type you\u2019ve selected  during the cluster selection."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sleakops-build-arm64 & sleakops-build-amd64:"})," A default ones to run properly your builds. They can\u2019t be edited or deleted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sleakops-core:"})," Ensures the scalability of the critical components and cluster addons."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ondemand-arm/amd:"})," Ready for you to use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"spot-arm/amd:"})," Ready for you to use."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Do not delete manually the following node pools: sleakops-build-arm64, sleakops-build-amd64, sleakops-core."})}),"\n",(0,s.jsx)(i.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,s.jsx)("img",{src:"/img/cluster/nodepool-example-schema.png",alt:"nodepool-example-schema"})}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"What are the different kind of node pools?"})})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"On-Demand:"}),"  are instances in a Kubernetes cluster that run with a fixed pricing model, providing reliable access to compute resources without the risk of interruption. Can be used:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Critical Workloads:"})," Applications that require consistent uptime, such as databases, financial systems, or other critical services."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Long-Running Tasks:"})," Tasks that cannot be interrupted without significant consequence."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Spot:"})," are instances that take advantage of spare capacity in a cloud provider\u2019s data center. They are available at a significant discount compared to On-Demand instances, but they come with the risk of being terminated if the provider needs the capacity back. Ideal for:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Stateless Applications:"})," Suitable for workloads that can tolerate interruptions, such as batch processing jobs, testing environments, and distributed computing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Cost-Sensitive Workloads:"})," Ideal for tasks where cost savings are a priority over availability."]}),"\n"]}),"\n"]}),"\n"]})]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How many Node Pools can I have?"})})}),(0,s.jsx)(n.p,{children:"SleakOps base plan, allows you to have three extra node pool besides the build ones. If you need more, contact us."})]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Can I convert a spot node pool into an on demand and viceversa?"})})}),(0,s.jsx)(n.p,{children:"You can't directly convert a Spot node pool into an On-Demand node pool or vice versa, but you can achieve the desired outcome through a series of steps in SleakOps. Here\u2019s how you can transition between node pools types:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a Node Pool of the new desired type."}),"\n",(0,s.jsx)(n.li,{children:"Updade your executions and projects to run into the new Node Pool."}),"\n",(0,s.jsx)(n.li,{children:"Delete the old node pool if it is not longer needed."}),"\n"]})]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Can I convert a ARM node pool into an X86 and viceversa?"})})}),(0,s.jsx)(n.p,{children:"You can't change the architect type of a node pool, but you can achieve the desired outcome through a series of steps in SleakOps. Here\u2019s how you can transition between node pools architectures:"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a Node Pool of the new desired architecture."}),"\n",(0,s.jsx)(n.li,{children:"Updade your executions and projects to run into the new Node Pool."}),"\n",(0,s.jsx)(n.li,{children:"Delete the old node pool if it is not longer needed."}),"\n"]})]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How do I create a Node Pool?"})})}),(0,s.jsxs)(n.p,{children:["Follow ",(0,s.jsx)(n.a,{href:"/cluster/nodepools/creating-nodepool",children:"Creating a Node Pool"})]})]}),"\n",(0,s.jsxs)(o,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"How do I manage my  a Node Pool?"})})}),(0,s.jsxs)(n.p,{children:["Follow ",(0,s.jsx)(n.a,{href:"/cluster/nodepools/managing-nodepool",children:"Managing a Node Pool"})]})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var s=o(6540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);