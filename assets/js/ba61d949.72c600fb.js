"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1415],{5065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=t(4848),s=t(8453),r=t(2644),l=t(1470),i=t(9365);const o={},u="CLI",c={id:"cli",title:"CLI",description:"Streamline CI/CD with SleakOps CLI",source:"@site/docs/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/cli",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VarGroup",permalink:"/vargroup/"},next:{title:"Shared Responsibility Model",permalink:"/responsability-model"}},d={},p=[{value:"Streamline CI/CD with SleakOps CLI",id:"streamline-cicd-with-sleakops-cli",level:2},{value:"1. Authentication",id:"1-authentication",level:3},{value:"2. Create a Build",id:"2-create-a-build",level:3},{value:"3. Make a Deploy",id:"3-make-a-deploy",level:3},{value:"CI/CD Examples",id:"cicd-examples",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"cli",children:"CLI"})}),"\n",(0,a.jsx)(n.h2,{id:"streamline-cicd-with-sleakops-cli",children:"Streamline CI/CD with SleakOps CLI"}),"\n",(0,a.jsx)(n.p,{children:"SleakOps CLI is a Python package designed to simplify your CI/CD workflows.\nWith just two straightforward subcommands, you can effortlessly create builds and deploy your applications, ensuring a smooth and efficient development process.\nTo get started, simply install SleakOps using pip:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"pip install sleakops\n"})}),"\n",(0,a.jsx)(n.h3,{id:"1-authentication",children:"1. Authentication"}),"\n",(0,a.jsxs)(n.p,{children:["To authenticate with the SleakOps CLI, you need an API_KEY. You can obtain this key from the ",(0,a.jsxs)(n.a,{href:"https://console.sleakops.com/settings/apikey",children:["console ",(0,a.jsx)(r.HaR,{})]})," by clicking on Generate API-Key.\nEach company is allowed to have only one active API_KEY at a time. If you request a new API_KEY, the old one will be automatically revoked. The page shows the company keys and who generated them."]}),"\n",(0,a.jsx)(n.p,{children:"Once you have your API_KEY, you can use it as an argument when running SleakOps commands or set it as an environment variable named SLEAKOPS_KEY."}),"\n",(0,a.jsx)(n.h3,{id:"2-create-a-build",children:"2. Create a Build"}),"\n",(0,a.jsx)(n.p,{children:"To create a build for your application, use the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"sleakops build [options]\n"})}),"\n",(0,a.jsx)(n.p,{children:"This command initiates the build process, and SleakOps takes care of compiling your code, running tests, and packaging the application for deployment. You can specify additional options to tailor the build process to your specific needs."}),"\n",(0,a.jsxs)(n.p,{children:["There are two required arguments ",(0,a.jsx)(n.strong,{children:"project"})," and ",(0,a.jsx)(n.strong,{children:"branch"}),", which are used to know what to build.\nBesides, you might add a ",(0,a.jsx)(n.strong,{children:"commit"})," to build a previous commit, a ",(0,a.jsx)(n.strong,{children:"tag"})," for the image, and the ",(0,a.jsx)(n.em,{children:"provider"})," if you need to specify it."]}),"\n",(0,a.jsx)(n.p,{children:"As previously mentioned the key might be an input here or a environment variable."}),"\n",(0,a.jsxs)(n.p,{children:["Also, you might mark if you want the process to ",(0,a.jsx)(n.strong,{children:"wait"})," the build to be finished or not."]}),"\n",(0,a.jsx)(n.h3,{id:"3-make-a-deploy",children:"3. Make a Deploy"}),"\n",(0,a.jsx)(n.p,{children:"Once your build is ready, you can effortlessly deploy your application using the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"sleakops deploy [options]\n"})}),"\n",(0,a.jsx)(n.p,{children:"SleakOps seamlessly handles the deployment process, ensuring that your application is up and running in no time. You can specify deployment options to fine-tune the process according to your requirements."}),"\n",(0,a.jsxs)(n.p,{children:["Here ",(0,a.jsx)(n.strong,{children:"project"})," and ",(0,a.jsx)(n.strong,{children:"environment"})," are the required arguments. User might add a ",(0,a.jsx)(n.strong,{children:"build"})," or ",(0,a.jsx)(n.strong,{children:"tag"})," image to specify an image. Here the ",(0,a.jsx)(n.strong,{children:"wait"})," and ",(0,a.jsx)(n.strong,{children:"key"})," options are present to, the usage is the same as in the build command."]}),"\n",(0,a.jsx)(n.h2,{id:"cicd-examples",children:"CI/CD Examples"}),"\n",(0,a.jsx)(n.p,{children:"With SleakOps CLI, you can integrate your CI/CD pipelines, automate the build and deployment process, and focus on delivering exceptional applications without the hassle of manual intervention.\nEnjoy a seamless development experience with SleakOps, and make your custom CI/CD workflows."}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(i.A,{value:"GitHub",children:(0,a.jsx)("code",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"name: Deploy\n\non:\n  push:\n      branches:\n      - main\njobs:\n  build:\n      runs-on: ubuntu-latest\n      steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Install SleakOps CLI\n        run: pip install sleakops\n\n      - name: Run SleakOps build\n        env:\n          SLEAKOPS_KEY: ${{ secrets.SLEAKOPS_KEY }}\n        run: sleakops build -p core -b main -w\n  deploy:\n      needs: [build]\n      runs-on: ubuntu-latest\n      steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Install SleakOps CLI\n        run: pip install sleakops\n\n      - name: Run SleakOps deploy\n        env:\n          SLEAKOPS_KEY: ${{ secrets.SLEAKOPS_KEY }}\n        run: sleakops deploy -p core -e main -w\n"})})})}),(0,a.jsx)(i.A,{value:"GitLab",children:(0,a.jsx)("code",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"image: python:3.9\n\nstages:\n  - build\n  - deploy\n\nbuild:\n  stage: deploy\n  script:\n      - apt-get update -qy\n      - apt-get install -y python3-pip\n      - pip3 install sleakops\n      - sleakops build -p core -b main -w\n\ndeploy:\n  stage: deploy\n  needs:\n    - build\n  script:\n      - apt-get update -qy\n      - apt-get install -y python3-pip\n      - pip3 install sleakops\n      - sleakops deploy -p core -e main -w\n"})})})}),(0,a.jsx)(i.A,{value:"BitBucket",children:(0,a.jsx)("code",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"image: python:3.9\n\npipelines:\n  default:\n    - step:\n      name: Deploy\n      script:\n      - apt-get update -qy\n      - apt-get install -y python3-pip\n      - pip3 install sleakops\n      - sleakops build -p core -b main -w\n      - sleakops deploy -p core -e main -w\n"})})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var a=t(8215);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(6540),s=t(8215),r=t(3104),l=t(6347),i=t(205),o=t(7485),u=t(1682),c=t(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=m({queryString:t,groupId:s}),[y,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),f=(()=>{const e=u??y;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==a&&(u(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=y(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(x,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}}}]);