"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7920],{2027:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var r=a(7294),n=a(2263),l=a(179),s=a(5742),c=a(9960),u=a(5999),o=a(373);const m=["zero","one","two","few","many","other"];function h(e){return m.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function p(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=p();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}var g=a(4104),f=a(6550),y=a(412);const E=function(){const e=(0,f.k6)(),t=(0,f.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)();return{searchValue:y.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const r=new URLSearchParams(t.search);a?r.set("q",a):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var I=a(22),S=a(8202),R=a(2539),w=a(726),P=a(1073),b=a(311);const F={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};var v=a(3926);function k(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),t=(0,g.gA)();let a=e;const{preferredVersion:l}=(0,o.J)(t?.pluginId);l&&!l.isLast&&(a=l.path+"/");const{selectMessage:c}=d(),{searchValue:m,updateSearchPath:h}=E(),[i,p]=(0,r.useState)(m),[f,y]=(0,r.useState)(),[R,w]=(0,r.useState)(),P=(0,r.useMemo)((()=>i?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:i}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[i]);(0,r.useEffect)((()=>{h(i),f&&(i?f(i,(e=>{w(e)})):w(void 0))}),[i,f]);const v=(0,r.useCallback)((e=>{p(e.target.value)}),[]);return(0,r.useEffect)((()=>{m&&m!==i&&p(m)}),[m]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,I.w)(a);y((()=>(0,S.v)(e,t,100)))}()}),[a]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,P)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,P),r.createElement("input",{type:"search",name:"q",className:F.searchQueryInput,"aria-label":"Search",onChange:v,value:i,autoComplete:"off",autoFocus:!0}),!f&&i&&r.createElement("div",null,r.createElement(b.Z,null)),R&&(R.length>0?r.createElement("p",null,c(R.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:R.length}))):r.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,R&&R.map((e=>r.createElement(C,{key:e.document.i,searchResult:e}))))))}function C(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:n.b).slice(),h=o?t.s:t.t;return u||m.push(n.t),r.createElement("article",{className:F.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,R.C)(h,l):(0,w.o)(h,(0,P.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:F.searchResultItemPath},(0,v.e)(m)),o&&r.createElement("p",{className:F.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,w.o)(t.t,(0,P.m)(s,"t"),l,100)}}))}const _=function(){return r.createElement(l.Z,null,r.createElement(k,null))}}}]);