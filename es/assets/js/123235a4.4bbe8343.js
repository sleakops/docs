"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2390],{8472:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=i(4848),o=i(8453);const r={sidebar_label:"More on cluster creation options",sidebar_position:1},a="More on cluster creation options",s={id:"cluster/node_provisioning",title:"More on cluster creation options",description:"Node Provisioning with Karpenter Technology",source:"@site/docs/cluster/node_provisioning.mdx",sourceDirName:"cluster",slug:"/cluster/node_provisioning",permalink:"/es/cluster/node_provisioning",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"More on cluster creation options",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/es/cluster/gettingstarted"},next:{title:"Generating Kubeconfig",permalink:"/es/cluster/k8s"}},l={},c=[{value:"Node Provisioning with Karpenter Technology",id:"node-provisioning-with-karpenter-technology",level:2},{value:"High-Availability for Reliability",id:"high-availability-for-reliability",level:2}];function u(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"more-on-cluster-creation-options",children:"More on cluster creation options"})}),"\n",(0,n.jsx)(t.h2,{id:"node-provisioning-with-karpenter-technology",children:"Node Provisioning with Karpenter Technology"}),"\n",(0,n.jsx)(t.p,{children:"In the process of creating your EKS cluster, the crucial task of node provisioning is handled seamlessly with the advanced Karpenter technology.\nThis sophisticated system ensures that nodes are provisioned automatically, with only the required amount of resources requested.\nYou can rest assured that the cluster will efficiently scale based on the actual resource demands of your applications, eliminating the need to worry about deprovisioning."}),"\n",(0,n.jsx)(t.p,{children:"Karpenter's intelligent resource management allows you to define the upper limits for memory and CPU resources during cluster creation. By setting these limits, you ensure that your resources are allocated efficiently, preventing any potential over-commitment. As your workload fluctuates, Karpenter automatically adjusts the number of nodes and resources to meet the demands of your applications, ensuring optimal performance and resource utilization."}),"\n",(0,n.jsx)(t.p,{children:"With Karpenter, you can be confident that your EKS cluster operates with the right amount of resources at all times, providing a scalable and cost-effective infrastructure to run your containerized applications. This hassle-free approach to node provisioning allows you to focus on your core tasks and development, while Karpenter handles the underlying infrastructure dynamically and intelligently."}),"\n",(0,n.jsx)(t.h2,{id:"high-availability-for-reliability",children:"High-Availability for Reliability"}),"\n",(0,n.jsx)(t.p,{children:"To achieve high availability and ensure constant and reliable availability of your critical systems and services, the High-Availability (HA) feature can be enabled.\nWith HA, your EKS cluster is distributed across multiple Availability Zones (AZs), providing redundancy and fault tolerance.\nThis way, even in the event of an Availability Zone failure, your cluster continues to function seamlessly, guaranteeing uninterrupted operations."}),"\n",(0,n.jsx)(t.p,{children:"When the High-Availability feature is enabled, the EKS cluster leverages on-demand instances, ensuring consistent and reliable performance with reserved capacity.\nOn the other hand, if High-Availability is disabled, spot instances are used, providing cost-effective resources that take advantage of available spare capacity in AWS data centers.\nThe combination of on-demand and spot instances allows you to strike a balance between performance and cost efficiency, tailoring the cluster to suit your specific needs."}),"\n",(0,n.jsx)(t.p,{children:"With high availability enabled, your EKS cluster is equipped to handle various scenarios and workload fluctuations, ensuring the utmost reliability and cost-effectiveness.\nThis approach allows you to optimize your resources while maintaining a robust and resilient infrastructure for your containerized applications."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(6540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);