(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1536:function(e,s,o){"use strict";o.d(s,{Z:function(){return M}});var n=o(3366),t=o(7462),i=o(7294),r=o(6010),l=o(9766),a=o(4780),c=o(7621),h=o(8974);let d=(0,h.ZP)();var p=o(6986),x=o(9707),k=o(6500),y=o(5408),j=o(8700),u=o(5893);let v=["component","direction","spacing","divider","children","className","useFlexGap"],m=(0,k.Z)(),f=d("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function g(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:m})}let w=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],b=({ownerState:e,theme:s})=>{let o=(0,t.Z)({display:"flex",flexDirection:"column"},(0,y.k9)({theme:s},(0,y.P$)({values:e.direction,breakpoints:s.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let n=(0,j.hB)(s),t=Object.keys(s.breakpoints.values).reduce((s,o)=>(("object"==typeof e.spacing&&null!=e.spacing[o]||"object"==typeof e.direction&&null!=e.direction[o])&&(s[o]=!0),s),{}),i=(0,y.P$)({values:e.direction,base:t}),r=(0,y.P$)({values:e.spacing,base:t});"object"==typeof i&&Object.keys(i).forEach((e,s,o)=>{let n=i[e];if(!n){let n=s>0?i[o[s-1]]:"column";i[e]=n}});let a=(s,o)=>e.useFlexGap?{gap:(0,j.NA)(n,s)}:{"& > :not(style) + :not(style)":{margin:0,[`margin${w(o?i[o]:e.direction)}`]:(0,j.NA)(n,s)}};o=(0,l.Z)(o,(0,y.k9)({theme:s},r,a))}return(0,y.dt)(s.breakpoints,o)};var N=o(948),T=o(1657);let D=function(e={}){let{createStyledComponent:s=f,useThemeProps:o=g,componentName:l="MuiStack"}=e,h=()=>(0,a.Z)({root:["root"]},e=>(0,c.Z)(l,e),{}),d=s(b),p=i.forwardRef(function(e,s){let l=o(e),a=(0,x.Z)(l),{component:c="div",direction:p="column",spacing:k=0,divider:y,children:j,className:m,useFlexGap:f=!1}=a,g=(0,n.Z)(a,v),w=h();return(0,u.jsx)(d,(0,t.Z)({as:c,ownerState:{direction:p,spacing:k,useFlexGap:f},ref:s,className:(0,r.Z)(w.root,m)},g,{children:y?function(e,s){let o=i.Children.toArray(e).filter(Boolean);return o.reduce((e,n,t)=>(e.push(n),t<o.length-1&&e.push(i.cloneElement(s,{key:`separator-${t}`})),e),[])}(j,y):j}))});return p}({createStyledComponent:(0,N.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>(0,T.Z)({props:e,name:"MuiStack"})});var M=D},1464:function(e,s,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(1969)}])},9369:function(e,s,o){"use strict";var n=o(5893);o(7294);let t={logo:()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/favicon/android-chrome-192x192.png",width:32,height:32}),(0,n.jsx)("span",{style:{fontWeight:"bold",fontSize:"1.2rem",paddingLeft:10,paddingRight:10},children:"Typia"}),(0,n.jsx)("span",{children:"Superfast Runtime Validator"})]}),project:{link:"https://github.com/samchon/typia",icon:(0,n.jsx)("img",{alt:"Typia Github repo stars",src:"https://img.shields.io/github/stars/samchon/typia?style=social"})},docsRepositoryBase:"https://github.com/samchon/typia/blob/master/website",footer:{text:()=>(0,n.jsxs)("span",{children:["Made by"," ",(0,n.jsx)("a",{href:"https://github.com/samchon",target:"_blank",style:{color:"blue"},children:(0,n.jsx)("u",{children:" Samchon "})})]})},useNextSeoProps:()=>({defaultTitle:"Typia Guide Documents",titleTemplate:"Typia Guide Documents - %s",additionalLinkTags:[{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"},{rel:"manifest",href:"/favicon/site.webmanifest"},...[16,32].map(e=>({rel:"icon",type:"image/png",sizes:"".concat(e,"x").concat(e),href:"/favicon/favicon-".concat(e,"x").concat(e,".png")}))],additionalMetaTags:[{property:"og:image",content:"/og.jpg"},{property:"og:type",content:"object"},{property:"og:title",content:"Typia Guide Documents"},{property:"og:description",content:"Superfast Runtime Validator with only one line"},{property:"og:site_name",content:"Typia Guide Documents"},{property:"og:url",content:"https://typia.io"}]})};s.Z=t},1969:function(e,s,o){"use strict";o.r(s);var n=o(5893),t=o(4319),i=o(7900),r=o(9369);o(9966);var l=o(1151);o(5675);var a=o(693),c=o(1536);function h(e){let s=Object.assign({h2:"h2",a:"a",img:"img",pre:"pre",code:"code",span:"span",p:"p",ul:"ul",li:"li",strong:"strong"},(0,l.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{"http-equiv":"refresh",content:"0; url=/docs"}),"\n",(0,n.jsx)(s.h2,{id:"outline",children:"Outline"}),"\n",(0,n.jsx)("span",{style:{display:"flex",flexDirection:"row"},children:[["MIT License","https://img.shields.io/badge/license-MIT-blue.svg","https://github.com/samchon/typia/blob/master/LICENSE"],["NPM Version","https://img.shields.io/npm/v/typia.svg","https://www.npmjs.com/package/typia"],["NPM Downloads","https://img.shields.io/npm/dm/typia.svg","https://www.npmjs.com/package/typia"],["Build Status","https://github.com/samchon/typia/workflows/build/badge.svg","https://github.com/samchon/typia/actions?query=workflow%3Abuild"],["Guide Documents","https://img.shields.io/badge/guide-documents-forestgreen","https://typia.io/docs/"]].map(e=>{let[o,t,i]=e;return(0,n.jsx)(s.a,{href:i,style:{marginTop:"30px",marginRight:"6px"},children:(0,n.jsx)(s.img,{src:t,alt:o})})})}),"\n",(0,n.jsx)(s.pre,{"data-language":"typescript","data-theme":"default",hasCopyCode:!0,children:(0,n.jsxs)(s.code,{"data-language":"typescript","data-theme":"default",children:[(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// RUNTIME VALIDATORS"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"is"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">(input"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"unknown"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" input "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"is"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// returns boolean"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"assert"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">(input"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"unknown"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// throws TypeGuardError"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"validate"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">(input"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"unknown"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IValidation"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// detailed"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"customValidators"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"CustomValidatorMap"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// customizable"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ENHANCED JSON"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"application"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<..."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Args"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">()"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IJsonApplication"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// JSON schema"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"assertParse"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">(input"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// type safe parser"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"assertStringify"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">(input"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"string"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// safe and faster"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// +) isParse, validateParse "})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// +) stringify, isStringify, validateStringify"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// RANDOM DATA GENERATOR"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"random"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">(g"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Partial"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"IRandomGenerator"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">)"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Primitive"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]})]})}),"\n",(0,n.jsx)(s.p,{children:"Typia is a transformer library, supporting those features:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Super-fast Runtime Validators"}),"\n",(0,n.jsx)(s.li,{children:"Safe JSON parse and fast stringify"}),"\n",(0,n.jsx)(s.li,{children:"JSON schema generator"}),"\n",(0,n.jsx)(s.li,{children:"Random data generator"}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(c.Z,{spacing:1,children:[(0,n.jsx)(a.Z,{severity:"warning",children:(0,n.jsxs)(s.p,{children:["Only ",(0,n.jsx)(s.strong,{children:"one line"})," required, with pure TypeScript type"]})}),(0,n.jsx)(a.Z,{severity:"success",children:(0,n.jsxs)(s.p,{children:["Runtime validator is ",(0,n.jsx)(s.strong,{children:"20,000x"})," faster than ",(0,n.jsx)(s.code,{children:"class-validator"})]})}),(0,n.jsx)(a.Z,{severity:"info",children:(0,n.jsxs)(s.p,{children:["JSON serialization is ",(0,n.jsx)(s.strong,{children:"200x faster"})," than ",(0,n.jsx)(s.code,{children:"class-transformer"})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"sponsors",children:"Sponsors"}),"\n",(0,n.jsx)(s.p,{children:"Thanks for your support."}),"\n",(0,n.jsxs)(s.p,{children:["Your donation would encourage ",(0,n.jsx)(s.code,{children:"typia"})," development."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://opencollective.com/typia",children:(0,n.jsx)(s.img,{src:"https://opencollective.com/typia/backers.svg?width=1000",alt:"Backers"})})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.ah)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/index.mdx",route:"/",headings:[{depth:2,value:"Outline",id:"outline"},{depth:2,value:"Sponsors",id:"sponsors"}],timestamp:168188553e4,pageMap:[{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"MdxPage",name:"index",route:"/docs"},{kind:"Folder",name:"json",route:"/docs/json",children:[{kind:"MdxPage",name:"parse",route:"/docs/json/parse"},{kind:"MdxPage",name:"schema",route:"/docs/json/schema"},{kind:"MdxPage",name:"stringify",route:"/docs/json/stringify"},{kind:"Meta",data:{stringify:"stringify() functions",parse:"parse() functions",schema:"JSON Schema"}}]},{kind:"MdxPage",name:"random",route:"/docs/random"},{kind:"MdxPage",name:"setup",route:"/docs/setup"},{kind:"Folder",name:"utilization",route:"/docs/utilization",children:[{kind:"MdxPage",name:"nestjs",route:"/docs/utilization/nestjs"},{kind:"MdxPage",name:"trpc",route:"/docs/utilization/trpc"},{kind:"Meta",data:{nestjs:"NestJS",trpc:"tRPC"}}]},{kind:"Folder",name:"validators",route:"/docs/validators",children:[{kind:"MdxPage",name:"assert",route:"/docs/validators/assert"},{kind:"MdxPage",name:"comment-tags",route:"/docs/validators/comment-tags"},{kind:"MdxPage",name:"is",route:"/docs/validators/is"},{kind:"MdxPage",name:"validate",route:"/docs/validators/validate"},{kind:"Meta",data:{is:"is() function",assert:"assert() function",validate:"validate() function","comment-tags":"Comment Tags"}}]},{kind:"Meta",data:{index:"\uD83D\uDE4B\uD83C\uDFFB‍♂️ Introduction",setup:"\uD83D\uDEE0 Setup","-- features":{type:"separator",title:"\uD83D\uDCD6 Features"},validators:"Runtime Validators",json:"Enhanced JSON",random:"Random Generator","-- appendix":{type:"separator",title:"\uD83D\uDD17 Appendix"},utilization:"Utilization Cases",benchmark:{title:"⇲ Benchmark Result",href:"https://github.com/samchon/typia/tree/master/benchmark/results/11th%20Gen%20Intel(R)%20Core(TM)%20i5-1135G7%20%40%202.40GHz",newWindow:!0},articles:{title:"⇲ dev.to Articles",href:"https://dev.to/samchon/series/22474",newWindow:!0}}}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Meta",data:{index:{title:"Introduction",type:"page",hidden:!0,display:"hidden"},docs:{title:"\uD83D\uDCD6 Guide Documents",type:"page"},playground:{title:"\uD83D\uDCBB Playground",type:"page",href:"https://stackblitz.com/edit/node-qssdpq?file=src/index.ts&view=editor",newWindow:!0},contact:{title:"✉ Contant Me",type:"page",href:"mailto:samchon.github@gmail.com"}}}],flexsearch:{codeblocks:!0},title:"Index"},pageNextRoute:"/",nextraLayout:i.ZP,themeConfig:r.Z};s.default=(0,t.j)(d)}},function(e){e.O(0,[393,851,774,888,179],function(){return e(e.s=1464)}),_N_E=e.O()}]);