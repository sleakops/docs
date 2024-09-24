"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9091],{449:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(4848),r=s(8453);const o={},a="SleakOps resources overview",i={id:"sleakops-overview",title:"SleakOps resources overview",description:"Here you can check the main resources that SleakOps uses by default to allow you to easily deploy a highly scalable application hosted on the cloud in just some hours. Here we will not talk about the details of how all these are connected, how the permissions policies work, roles or all the things that make everything works correctly.",source:"@site/docs/sleakops-overview.mdx",sourceDirName:".",slug:"/sleakops-overview",permalink:"/es/sleakops-overview",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shared Responsibility Model",permalink:"/es/responsability-model"},next:{title:"User",permalink:"/es/user/"}},l={},c=[{value:"Main Structure and Networking",id:"main-structure-and-networking",level:2},{value:"Cluster",id:"cluster",level:2},{value:"Dependencies and Services",id:"dependencies-and-services",level:2},{value:"Releases, Deployments and VariableGroup",id:"releases-deployments-and-variablegroup",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"sleakops-resources-overview",children:"SleakOps resources overview"})}),"\n",(0,n.jsx)(t.p,{children:"Here you can check the main resources that SleakOps uses by default to allow you to easily deploy a highly scalable application hosted on the cloud in just some hours. Here we will not talk about the details of how all these are connected, how the permissions policies work, roles or all the things that make everything works correctly."}),"\n",(0,n.jsxs)(t.p,{children:["The initial and main thing SleakOps uses to organize everything is the ",(0,n.jsx)(t.a,{href:"/provider/accounts",children:"Reference Architecture"})," so you will need to understand this structure, most of this stuff is created on the ",(0,n.jsx)(t.a,{href:"/es/provider/",children:"Provider"})," step of the Onboarding."]}),"\n",(0,n.jsx)(t.h2,{id:"main-structure-and-networking",children:"Main Structure and Networking"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"AWS Organization: We will create an organization on your root account in case you don't have one."}),"\n",(0,n.jsx)(t.li,{children:"AWS Account: Following the architecture, at this moment we create three, 'management', 'development' and 'production'."}),"\n",(0,n.jsx)(t.li,{children:"Virtual Private Cloud (VPC): Each Account will have its own VPC where SleakOps deploy all the cloud resources, we do not only create the VPC but also all the Networking needs for the resources to work correctly."}),"\n",(0,n.jsx)(t.li,{children:"ec2.Instance: The installation of the Pritunl VPN server is done inside a 't3.medium' instance with all the networking rules it requires."}),"\n",(0,n.jsx)(t.li,{children:"Route53: Route53 is the DNS service we use to make your applications visible to everyone on the internet, for that we require you to delegate your domain to us on AWS and we handle all the subdomains."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cluster",children:"Cluster"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/es/cluster/",children:"Cluster"})," on its own can't do anything, we give it the required permissions and install inside it some utilities we take advantage of to deploy the application. The most crucial pieces here are:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"EKS Cluster (Kubernetes): Clusters are deployed only in the Accounts you define when you create them."}),"\n",(0,n.jsx)(t.li,{children:"Cluster nodes: These are also defined by you when you create a cluster, nodes are an EC2 instance that uses its resources following Kubernetes management."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/es/cluster/plugins",children:"Cluster Plugins"}),": A Cluster has many plugins that facilitate infrastructure management."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The Cluster Namespaces are a good way to separate different environments of the infrastructure so we also exploit its benefits by creating them to differentiate what we call 'ProjectEnv' which is just an object that combines a Project and an Environment. As individuals, we create an ECR repository inside the 'management account' for every Project and every Environment will be a subdomain of your deployed domain which is a Route53 HostedZone."}),"\n",(0,n.jsx)(t.h2,{id:"dependencies-and-services",children:"Dependencies and Services"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"/es/dependency/",children:"Dependency"})," is a cloud resource your application needs to work correctly, for example, a MySql or Postgresql database (RDS Instance), an S3 bucket where to stores static files and so on. Every time you create a Dependency, a cloud resource is created on Aws and a Secret on the Cluster containing useful variables. Each of the dependencies requires many configurations, for that, at this moment, via SleakOps, we let you specify some of its most important configurations."]}),"\n",(0,n.jsxs)(t.p,{children:["Every ",(0,n.jsx)(t.a,{href:"/es/service/",children:"Service"})," is installed inside the Cluster and on its corresponding Namespace depending on its ProjectEnv, they are deployed from a template we create taking the configurations you set on its creation, like the Command it executes, the resources of the nodes it uses, etc."]}),"\n",(0,n.jsx)(t.h2,{id:"releases-deployments-and-variablegroup",children:"Releases, Deployments and VariableGroup"}),"\n",(0,n.jsx)(t.p,{children:"These three objects are part of the final deployment of your application and are installed inside the Cluster, on its own they do not set up any cloud resource:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/es/deployment/release",children:"Releases"}),": Creates the Chart and every template of the services you will deploy.\nIt's a Helm release that contains a Chart with every template of the services you will deploy."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/es/deployment/",children:"Deployment"}),": It is the actual deployment of the Helm release created before. These steps also use the values of the VariableGroup objects of the ProjectEnv (Namespace) to apply them to the services or the application"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/vargroup",children:"VariableGroup"}),": They are sets of key-value pairs that are used to configure a service or the applications as a whole. On SleakOps we consider three types of VariableGroups: Globals, Service VarGroups and Dependency VarGroups which are created at the same time a Dependency is created."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);