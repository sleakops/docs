"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[733],{5755:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=s(7462),r=(s(7294),s(3905)),o=s(9378),a=(s(7435),s(6893)),l=s(9583);const i={sidebar_label:"Generating Kubeconfig",sidebar_position:2},c="Generating Kubeconfig for Easy Cluster Access",u={unversionedId:"cluster/k8s",id:"cluster/k8s",title:"Generating Kubeconfig for Easy Cluster Access",description:"To access your EKS cluster, follow these simple steps:",source:"@site/docs/cluster/k8s.mdx",sourceDirName:"cluster",slug:"/cluster/k8s",permalink:"/cluster/k8s",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Generating Kubeconfig",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"More on cluster creation options",permalink:"/cluster/node_provisioning"},next:{title:"Add-ons",permalink:"/cluster/plugins"}},p={},d=[],m={toc:d},k="wrapper";function g(e){let{components:t,...s}=e;return(0,r.kt)(k,(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generating-kubeconfig-for-easy-cluster-access"},"Generating Kubeconfig for Easy Cluster Access"),(0,r.kt)("p",null,"To access your EKS cluster, follow these simple steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Log in to the SleakOps dashboard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Navigate to the Cluster tab.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click on the "Generate Kubeconfig" ',(0,r.kt)(l.q2z,{mdxType:"FaKey"})," button on the cluster you want to access. As shown in the picture"),(0,r.kt)(o.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,r.kt)("img",{src:"/img/cluster/generate_kubeconfig.png",alt:"clusters-dashboard"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Complete the steps given and download your kubeconfig file."),(0,r.kt)(o.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,r.kt)("img",{src:"/img/cluster/kubeconfig_steps.png",alt:"clusters-dashboard"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With the kubeconfig file in hand, you can seamlessly interact with your EKS cluster using familiar Kubernetes tools and commands, like ",(0,r.kt)("a",{parentName:"p",href:"https://k8slens.dev/"},"Lens ",(0,r.kt)(a.AlO,{mdxType:"FiExternalLink"})),". "),(0,r.kt)(o.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,r.kt)("img",{src:"/img/cluster/lens-kubeconfig.png",alt:"kubeconfig-to-lens"})))),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"While accessing your EKS cluster, you may encounter connectivity issues, especially if the DNS server of the Virtual Private Cloud (VPC) fails to resolve all domains within the VPC. In such cases, Lens might attempt to connect to the cluster through its public IP address, leading to connection timeouts or errors.")),(0,r.kt)(o.Z,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",mdxType:"Zoom"},(0,r.kt)("img",{src:"/img/cluster/lens-timeout.png",alt:"lens-connection-error"})),(0,r.kt)("p",null,"To resolve this issue, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Find the VPC DNS Server IP Address"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Switch role to the desired AWS account."),(0,r.kt)("li",{parentName:"ul"},"Navigate to the VPC service."),(0,r.kt)("li",{parentName:"ul"},"Locate a VPC associated with the account. Typically, VPCs are named according to the account they belong to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VPC_DNS_SERVER_IP")," will be the VPC ip ending in '.2'. For example if the VPC network is 10.10.0.0/24 then VPC_DNS_SERVER_IP will be 10.10.0.2"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Add VPC DNS Server"),": Ensure that the VPC DNS server is included in the list of system DNS servers. This step helps Lens and other tools resolve cluster domain names correctly."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update ",(0,r.kt)("inlineCode",{parentName:"strong"},"resolv.conf")," File"),": For Linux users, a quick fix involves adding the VPC DNS server to the ",(0,r.kt)("inlineCode",{parentName:"p"},"resolv.conf")," file. You can do this by appending the VPC DNS server address as a new 'nameserver' entry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "nameserver VPC_DNS_SERVER_IP" | sudo tee -a /etc/resolv.conf\n')))}g.isMDXComponent=!0},7435:()=>{}}]);