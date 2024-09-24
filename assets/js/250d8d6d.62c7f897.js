"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3998],{5283:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var n=a(4848),r=a(8453),s=a(2644),l=a(1470),o=a(9365);const i={},c="AWS MySQL",u={id:"dependency/mysql-aws",title:"AWS MySQL",description:"Sleakops enables effortless utilization of MySQL databases through Amazon RDS.",source:"@site/docs/dependency/mysql-aws.mdx",sourceDirName:"dependency",slug:"/dependency/mysql-aws",permalink:"/dependency/mysql-aws",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Memcached",permalink:"/dependency/memcached"},next:{title:"AWS OpenSearch",permalink:"/dependency/opensearch"}},d={},h=[{value:"How to create a dump for MySQL",id:"how-to-create-a-dump-for-mysql",level:2},{value:"How to import a database dump to RDS",id:"how-to-import-a-database-dump-to-rds",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"aws-mysql",children:"AWS MySQL"})}),"\n",(0,n.jsx)(t.p,{children:"Sleakops enables effortless utilization of MySQL databases through Amazon RDS.\nThis managed database service provides a reliable and scalable data storage solution, allowing your applications to handle varying workloads with ease.\nBy leveraging Sleakops for this integration, you can streamline the setup and management of MySQL databases in your EKS environment."}),"\n",(0,n.jsxs)(t.p,{children:["You can read more about those benefits in this ",(0,n.jsxs)(t.a,{href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html#Welcome.Concepts.RDS",children:["link ",(0,n.jsx)(s.HaR,{})]}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"Values and credentials for the next sections should be retrieved from Sleakops console on the edition page\nof the vargroups corresponding to the Dependency."})}),"\n",(0,n.jsx)(t.h2,{id:"how-to-create-a-dump-for-mysql",children:"How to create a dump for MySQL"}),"\n",(0,n.jsx)(t.p,{children:"There are multiple ways to create a dump for a MySQL database. Simplest one is to create a dump from the server with the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mysqldump -h MYSQL_ADDRESS -u MYSQL_USERNAME -p MYSQL_PASSWORD > dump.sql \n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more information on how to create a dump read the ",(0,n.jsxs)(t.a,{href:"https://dev.mysql.com/doc/mysql-replication-excerpt/8.0/en/replication-howto-mysqldump.html",children:["official documentation",(0,n.jsx)(s.HaR,{})]}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-import-a-database-dump-to-rds",children:"How to import a database dump to RDS"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"../vpn/vpn_user_connection",children:"Connect to the VPN"})," of the account where the RDS is."]}),"\n",(0,n.jsx)(t.li,{children:"Connect to the database"}),"\n"]}),"\n",(0,n.jsxs)(l.A,{children:[(0,n.jsxs)(o.A,{value:" Using docker (Recommended)",children:[(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"A prerequisite to this method is to have the docker installed on your local machine."})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Run a container with the mysql image. The attached volume is the folder with your dump."}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker run -it --name mysql-container -v ./initial_data/:/tmp/data/ -e MYSQL_ROOT_PASSWORD=MYSQL_PASSWORD -d mysql bash\n"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Attach to the terminal to run the mysql command"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker exec -t -i mysql-container bash\n"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Run the following command:"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mysql -h MYSQL_ADDRESS -u MYSQL_USERNAME -p < /tmp/data/dump.sql\n"})})]}),(0,n.jsxs)(o.A,{value:" Using local machine",children:[(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"A prerequisite to this method is to have MySQL installed on your local machine."})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Simply run the following command:"}),"\n"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mysql -h MYSQL_ADDRESS -u MYSQL_USERNAME -p MYSQL_PASSWORD < /tmp/data/dump.sql\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9365:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var n=a(8215);const r={tabItem:"tabItem_Ymn6"};var s=a(4848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},1470:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(6540),r=a(8215),s=a(3104),l=a(6347),o=a(205),i=a(7485),c=a(1682),u=a(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:a,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),y=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var S=a(4848);function v(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),r=o[a].value;r!==n&&(c(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,S.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,S.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,S.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=f(e);return(0,S.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,S.jsx)(v,{...t,...e}),(0,S.jsx)(x,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,S.jsx)(g,{...e,children:d(e.children)},String(t))}}}]);