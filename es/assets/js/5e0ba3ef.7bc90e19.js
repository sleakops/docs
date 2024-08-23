"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8182],{1418:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=s(4848),r=s(8453),n=s(2644),a=s(4028);s(6393);const i={},c="More on ProjectEnv:",l={id:"project/more_on_project",title:"More on ProjectEnv:",description:"Projects are related to several other Sleakops entities like environments and services. The union of a project with an environment makes a namespace for the cluster and this is one of the main SleakOps entities, we call it ProjectEnv.",source:"@site/docs/project/more_on_project.mdx",sourceDirName:"project",slug:"/project/more_on_project",permalink:"/es/project/more_on_project",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gitlab",permalink:"/es/project/gitlab"},next:{title:"Service",permalink:"/es/service/"}},h={},u=[{value:"Kubernetes Volumes",id:"kubernetes-volumes",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"more-on-projectenv",children:"More on ProjectEnv:"})}),"\n",(0,o.jsx)(t.p,{children:"Projects are related to several other Sleakops entities like environments and services. The union of a project with an environment makes a namespace for the cluster and this is one of the main SleakOps entities, we call it ProjectEnv."}),"\n",(0,o.jsxs)(t.p,{children:["If you create a ProjectEnv SleakOps creates an ",(0,o.jsxs)(t.a,{href:"https://aws.amazon.com/ecr/",children:["AWS ECR ",(0,o.jsx)(n.HaR,{})]})," that is where we save all the charts and its templates and also the build images that we use to later do the Deployments on the EKS Cluster. As previously stated, we consider this ProjectEnv a Cluster ",(0,o.jsxs)(t.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:["Namespace ",(0,o.jsx)(n.HaR,{})]})," where we allocate all the services that are deployed on the Kubernetes Deployment."]}),"\n",(0,o.jsxs)(t.p,{children:["At this point we analyze with simple tools the correctness of your Dockerfile and how you are configurating it and also we Build an Image of that Dockerfile that are later used to deploy all your services, for this we use Kaniko, for more info of this third party tool checks its ",(0,o.jsxs)(t.a,{href:"https://github.com/GoogleContainerTools/kaniko",children:["Documentation ",(0,o.jsx)(n.HaR,{})]}),". When you submit the form we run the first build, more info ",(0,o.jsx)(t.a,{href:"/es/project/build/initial-build",children:"here "}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Something else that we manage as directly related to the ProjectEnv is a ",(0,o.jsxs)(t.a,{href:"https://aws.amazon.com/ecr/",children:["Service Account ",(0,o.jsx)(n.HaR,{})]}),", it is a Kubernetes resource that allows us to manage the permissions of the resources we create inside the cluster so they are able to connect with the AWS services you create."]}),"\n",(0,o.jsx)(t.h2,{id:"kubernetes-volumes",children:"Kubernetes Volumes"}),"\n",(0,o.jsxs)(t.p,{children:["In some cases you need that many of your Services use a unique storage volume that is found inside the Kubernetes cluster. For this implementation we use the ",(0,o.jsxs)(t.a,{href:"https://kubernetes.io/docs/concepts/storage/volumes/",children:["Kubernetes Volumes ",(0,o.jsx)(n.HaR,{})]}),". These volumes are storage units allocated inside the cluster that can be used from any of its pods/containers. To create them you can do it by editing a ProjectEnv or on its creation, when you enable the volumes you can start adding them by defining its mount path and the storage capacity each has.\nAs we work on AWS we install and use the ",(0,o.jsxs)(t.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/efs-csi.html",children:["EFS CSI Driver ",(0,o.jsx)(n.HaR,{})]})," to use EFS file systems as EKS Volumes."]}),"\n",(0,o.jsx)(t.p,{children:"An example of how you create a Volume would be:"}),"\n",(0,o.jsx)(a.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,o.jsx)("img",{src:"/img/project/PROJECT-form.png",alt:"PROJECT-form",style:{height:"500px",width:"auto"}})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},6393:()=>{}}]);