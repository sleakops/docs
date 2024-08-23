"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8221],{2805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(4848),r=t(8453),s=t(4028);const o={sidebar_label:"Accounts",sidebar_position:1},c="Accounts",a={id:"provider/accounts",title:"Accounts",description:"Provider's Accounts",source:"@site/docs/provider/accounts.mdx",sourceDirName:"provider",slug:"/provider/accounts",permalink:"/es/provider/accounts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Accounts",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Providers",permalink:"/es/provider/"},next:{title:"Deleting a Provider",permalink:"/es/provider/deleting-a-provider"}},l={},d=[{value:"Provider&#39;s Accounts",id:"providers-accounts",level:2},{value:"Security Account",id:"security-account",level:3},{value:"<strong>Management Account</strong>",id:"management-account",level:3},{value:"<strong>Development Account</strong>",id:"development-account",level:3},{value:"Production Account",id:"production-account",level:3},{value:"Selecting an Account in SleakOps",id:"selecting-an-account-in-sleakops",level:3}];function u(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"accounts",children:"Accounts"})}),"\n",(0,i.jsx)(n.h2,{id:"providers-accounts",children:"Provider's Accounts"}),"\n",(0,i.jsx)(n.p,{children:"Sleakops implements a well-defined infrastructure architecture designed to optimize operational excellence while ensuring a secure and scalable environment for users. The architecture consists of four accounts, each serving distinct purposes and isolated from one another."}),"\n",(0,i.jsx)(n.p,{children:"Each account has a VPN instance generated upon the creation of the first cluster."}),"\n",(0,i.jsxs)(n.p,{children:["Once the Accounts are up, we set to each one of them what we call ",(0,i.jsx)(n.a,{href:"https://www.notion.so/Network-Module-8878f087137540debda5660b2eaa0efa?pvs=21",children:"Network Module"}),"  it contains a lot of different AWS services that are used to make the network connections inside accounts."]}),"\n",(0,i.jsx)(s.A,{overlayBgColorEnd:"rgba(255, 255, 255, 0.8)",children:(0,i.jsx)("img",{src:"/img/provider/aws/craftech-reference-architecture.png",alt:"reference-architecture"})}),"\n",(0,i.jsx)(n.h3,{id:"security-account",children:"Security Account"}),"\n",(0,i.jsxs)(n.p,{children:["The Security Account serves as a centralized hub for managing IAM users and their access to the system. Learn how to switch between accounts in ",(0,i.jsx)(n.a,{href:"../user/aws_console_authentication",children:"AWS Console Autentication"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"management-account",children:(0,i.jsx)(n.strong,{children:"Management Account"})}),"\n",(0,i.jsx)(n.p,{children:"Designed to maintain internal services used for application maintenance, regardless of whether they are shared across accounts. Example: Sentry."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contains an EKS cluster with integrated CI/CD (GitHub and HashiCorp Vault)."}),"\n",(0,i.jsx)(n.li,{children:"Vault manages credentials for CloudWatch, enhancing monitoring capabilities."}),"\n",(0,i.jsx)(n.li,{children:"VPC Peering enables private connections to other accounts."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"development-account",children:(0,i.jsx)(n.strong,{children:"Development Account"})}),"\n",(0,i.jsx)(n.p,{children:"For the different stages of your application before it goes into production."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contains three environments: dev, QA, and staging."}),"\n",(0,i.jsx)(n.li,{children:"Replicas of the prod environment for code writing, testing, and pre-releases."}),"\n",(0,i.jsx)(n.li,{children:"Ensures isolated testing to prevent issues for external users."}),"\n",(0,i.jsx)(n.li,{children:"Similar architecture to prod but without RDS Slave for reduced high availability requirements."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"production-account",children:"Production Account"}),"\n",(0,i.jsx)(n.p,{children:"This account is intended for your application to be installed in a production environment, isolated from the rest of your application's stages."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Supports external users and requires a fully functional database (RDS Master)."}),"\n",(0,i.jsx)(n.li,{children:"Utilizes Private DB Subnet for RDS Master, RDS Slave, and ElastiCache, each on different Availability Zones (AZs) for high availability."}),"\n",(0,i.jsx)(n.li,{children:"Backend Deployment with replicas distributed across different AZs."}),"\n",(0,i.jsx)(n.li,{children:"Frontend Deployment with LoadBalancer for even distribution of network load."}),"\n",(0,i.jsx)(n.li,{children:"Route53 serves as DNS and performs health checks for the application."}),"\n",(0,i.jsx)(n.li,{children:"AWS CloudFront serves static frontend content from an S3 bucket."}),"\n",(0,i.jsx)(n.li,{children:"RDS Slave acts as a replica of RDS Master for failover scenarios, maximizing uptime."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"selecting-an-account-in-sleakops",children:"Selecting an Account in SleakOps"}),"\n",(0,i.jsxs)("div",{style:{display:"flex",alignItems:"flex-start"},children:[(0,i.jsx)("img",{src:"/img/provider/provideraccountselect.png",alt:"reference-architecture",style:{marginRight:"20px",maxWidth:"200px"}}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{children:"To select an account and be able to work on it, select it from the left pane."}),(0,i.jsx)("p",{children:"The left icon refers to the Provider that groups the accounts."})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);