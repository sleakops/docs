"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=i,f=p["".concat(l,".").concat(y)]||p[y]||d[y]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="More on cluster creation options",s={unversionedId:"cluster/node_provisioning",id:"cluster/node_provisioning",title:"More on cluster creation options",description:"Node Provisioning with Karpenter Technology",source:"@site/docs/cluster/node_provisioning.mdx",sourceDirName:"cluster",slug:"/cluster/node_provisioning",permalink:"/cluster/node_provisioning",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generating Kubeconfig for Easy Cluster Access",permalink:"/cluster/k8s"},next:{title:"Essential Add-ons for a High-Functioning EKS Cluster",permalink:"/cluster/plugins"}},l={},c=[{value:"Node Provisioning with Karpenter Technology",id:"node-provisioning-with-karpenter-technology",level:2},{value:"High-Availability for Reliability",id:"high-availability-for-reliability",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"more-on-cluster-creation-options"},"More on cluster creation options"),(0,i.kt)("h2",{id:"node-provisioning-with-karpenter-technology"},"Node Provisioning with Karpenter Technology"),(0,i.kt)("p",null,"In the process of creating your EKS cluster, the crucial task of node provisioning is handled seamlessly with the advanced Karpenter technology.\nThis sophisticated system ensures that nodes are provisioned automatically, with only the required amount of resources requested.\nYou can rest assured that the cluster will efficiently scale based on the actual resource demands of your applications, eliminating the need to worry about deprovisioning."),(0,i.kt)("p",null,"Karpenter's intelligent resource management allows you to define the upper limits for memory and CPU resources during cluster creation. By setting these limits, you ensure that your resources are allocated efficiently, preventing any potential over-commitment. As your workload fluctuates, Karpenter automatically adjusts the number of nodes and resources to meet the demands of your applications, ensuring optimal performance and resource utilization."),(0,i.kt)("p",null,"With Karpenter, you can be confident that your EKS cluster operates with the right amount of resources at all times, providing a scalable and cost-effective infrastructure to run your containerized applications. This hassle-free approach to node provisioning allows you to focus on your core tasks and development, while Karpenter handles the underlying infrastructure dynamically and intelligently."),(0,i.kt)("h2",{id:"high-availability-for-reliability"},"High-Availability for Reliability"),(0,i.kt)("p",null,"To achieve high availability and ensure constant and reliable availability of your critical systems and services, the High-Availability (HA) feature can be enabled.\nWith HA, your EKS cluster is distributed across multiple Availability Zones (AZs), providing redundancy and fault tolerance.\nThis way, even in the event of an Availability Zone failure, your cluster continues to function seamlessly, guaranteeing uninterrupted operations."),(0,i.kt)("p",null,"When the High-Availability feature is enabled, the EKS cluster leverages on-demand instances, ensuring consistent and reliable performance with reserved capacity.\nOn the other hand, if High-Availability is disabled, spot instances are used, providing cost-effective resources that take advantage of available spare capacity in AWS data centers.\nThe combination of on-demand and spot instances allows you to strike a balance between performance and cost efficiency, tailoring the cluster to suit your specific needs."),(0,i.kt)("p",null,"With high availability enabled, your EKS cluster is equipped to handle various scenarios and workload fluctuations, ensuring the utmost reliability and cost-effectiveness.\nThis approach allows you to optimize your resources while maintaining a robust and resilient infrastructure for your containerized applications."))}d.isMDXComponent=!0}}]);