"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1986],{7540:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=n(4848),i=n(8453),t=n(4028),l=(n(6393),n(2644)),o=n(1612);const c={sidebar_label:"Generating Kubeconfig",sidebar_position:2},a="Generating Kubeconfig for Easy Cluster Access",d={id:"cluster/k8s",title:"Generating Kubeconfig for Easy Cluster Access",description:"To access your EKS cluster, follow these simple steps:",source:"@site/docs/cluster/k8s.mdx",sourceDirName:"cluster",slug:"/cluster/k8s",permalink:"/es/cluster/k8s",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Generating Kubeconfig",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"More on cluster creation options",permalink:"/es/cluster/node_provisioning"},next:{title:"Add-ons",permalink:"/es/cluster/plugins"}},h={},u=[];function g(e){const s={a:"a",code:"code",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"generating-kubeconfig-for-easy-cluster-access",children:"Generating Kubeconfig for Easy Cluster Access"})}),"\n",(0,r.jsx)(s.p,{children:"To access your EKS cluster, follow these simple steps:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Log in to the SleakOps dashboard."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Navigate to the Cluster tab."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:['Click on the "Generate Kubeconfig" ',(0,r.jsx)(o.pXu,{})," button on the cluster you want to access. As shown in the picture"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,r.jsx)("img",{src:"/img/cluster/generate_kubeconfig.png",alt:"clusters-dashboard"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Complete the steps given and download your kubeconfig file."}),"\n"]}),"\n",(0,r.jsx)(t.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,r.jsx)("img",{src:"/img/cluster/kubeconfig_steps.png",alt:"clusters-dashboard"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["With the kubeconfig file in hand, you can seamlessly interact with your EKS cluster using familiar Kubernetes tools and commands, like ",(0,r.jsxs)(s.a,{href:"https://k8slens.dev/",children:["Lens ",(0,r.jsx)(l.HaR,{})]}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,r.jsx)("img",{src:"/img/cluster/lens-kubeconfig.png",alt:"kubeconfig-to-lens"})}),"\n",(0,r.jsx)(s.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"While accessing your EKS cluster, you may encounter connectivity issues, especially if the DNS server of the Virtual Private Cloud (VPC) fails to resolve all domains within the VPC. In such cases, Lens might attempt to connect to the cluster through its public IP address, leading to connection timeouts or errors."}),"\n"]}),"\n",(0,r.jsx)(t.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,r.jsx)("img",{src:"/img/cluster/lens-timeout.png",alt:"lens-connection-error"})}),"\n",(0,r.jsx)(s.p,{children:"To resolve this issue, follow these steps:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Find the VPC DNS Server IP Address"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Switch role to the desired AWS account."}),"\n",(0,r.jsx)(s.li,{children:"Navigate to the VPC service."}),"\n",(0,r.jsx)(s.li,{children:"Locate a VPC associated with the account. Typically, VPCs are named according to the account they belong to."}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"VPC_DNS_SERVER_IP"})," will be the VPC ip ending in '.2'. For example if the VPC network is 10.10.0.0/24 then VPC_DNS_SERVER_IP will be 10.10.0.2"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Add VPC DNS Server"}),": Ensure that the VPC DNS server is included in the list of system DNS servers. This step helps Lens and other tools resolve cluster domain names correctly."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsxs)(s.strong,{children:["Update ",(0,r.jsx)(s.code,{children:"resolv.conf"})," File"]}),": For Linux users, a quick fix involves adding the VPC DNS server to the ",(0,r.jsx)(s.code,{children:"resolv.conf"})," file. You can do this by appending the VPC DNS server address as a new 'nameserver' entry."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'echo "nameserver VPC_DNS_SERVER_IP" | sudo tee -a /etc/resolv.conf\n\n'})})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},6393:()=>{}}]);