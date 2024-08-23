"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3579],{4960:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=i(4848),n=i(8453),a=i(2644);const l={},d="Build",r={id:"project/build/index",title:"Build",description:"We have repeteadly talked about Build in both Project documentation  and Initial Build documentation. A build is basically a template of an OS, libraries and other dependencies of the project you deploy.",source:"@site/docs/project/build/index.mdx",sourceDirName:"project/build",slug:"/project/build/",permalink:"/project/build/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Project",permalink:"/project/"},next:{title:"Initial image build",permalink:"/project/build/initial-build"}},s={},c=[{value:"Build creation",id:"build-creation",level:3},{value:"Why do we need to Build a Docker image?",id:"why-do-we-need-to-build-a-docker-image",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"build",children:"Build"})}),"\n",(0,o.jsxs)(t.p,{children:["We have repeteadly talked about Build in both ",(0,o.jsx)(t.a,{href:"/project/",children:"Project documentation "})," and ",(0,o.jsx)(t.a,{href:"/project/",children:"Initial Build documentation"}),". A build is basically a template of an OS, libraries and other dependencies of the project you deploy."]}),"\n",(0,o.jsx)(t.h3,{id:"build-creation",children:"Build creation"}),"\n",(0,o.jsx)(t.p,{children:"To create a Build you only need four parameters, only the Project field is required as the other three are, if not set, wait until this access is automatically enabled are chosen by default:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Project: Refers to what we call ProjectEnv, here you choose which ProjectEnv you want to build."}),"\n",(0,o.jsx)(t.li,{children:"Branch: Lets you choose any branch of the repository that you've chosen as Project. Defaults to Environment name."}),"\n",(0,o.jsx)(t.li,{children:"Commit hash: You can also choose the commit has to build a specific commit and not the last one as we do by default. Defaults to last commit."}),"\n",(0,o.jsx)(t.li,{children:"Tag: Just a tag to differentiate builds. Defaults to 'latest'."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"why-do-we-need-to-build-a-docker-image",children:"Why do we need to Build a Docker image?"}),"\n",(0,o.jsxs)(t.p,{children:["As we use ",(0,o.jsxs)(t.a,{href:"https://helm.sh/docs/",children:["Helm charts ",(0,o.jsx)(a.HaR,{})]})," we need the image because is what they use to deploy a Kubernetes Release."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Remember that you need a Build to update the code that the Deployment runs inside the Kubernetes Cluster."})}),"\n",(0,o.jsx)(t.admonition,{title:"CI/CD integration with SleakOps",type:"tip",children:(0,o.jsxs)(t.p,{children:["SleakOps has its own CLI Tool that you can use to automate Builds and Deployments in your CI/CD. More info ",(0,o.jsx)(t.a,{href:"/cli",children:"here"}),"."]})})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);