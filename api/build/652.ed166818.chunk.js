"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[652],{85332:(v,O,s)=>{s.d(O,{S:()=>C});var t=s(19968),M=s(28724),a=s(70996),i=s(70544),d=s(48936),e=s(63358),h=s(14632),c=s(39380),P=s(69372);const C=({providers:_,displayAllProviders:D})=>{const{formatMessage:E}=(0,h.c)();return D?(0,t.jsx)(M.y,{gap:4,children:_.map(n=>(0,t.jsx)(a.C,{col:4,children:(0,t.jsx)(l,{provider:n})},n.uid))}):_.length>2&&!D?(0,t.jsxs)(M.y,{gap:4,children:[_.slice(0,2).map(n=>(0,t.jsx)(a.C,{col:4,children:(0,t.jsx)(l,{provider:n})},n.uid)),(0,t.jsx)(a.C,{col:4,children:(0,t.jsx)(i.o,{label:E({id:"global.see-more"}),children:(0,t.jsx)(r,{as:c.cH,to:"/auth/providers",children:(0,t.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,t.jsx)(m,{justifyContent:"center",children:_.map(n=>(0,t.jsx)(l,{provider:n},n.uid))})},m=(0,P.cp)(d.C)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:_})=>_.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:_})=>_.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:_})=>_.spaces[2]};
  }
`,l=({provider:_})=>(0,t.jsx)(i.o,{label:_.displayName,children:(0,t.jsx)(r,{href:`${window.strapi.backendURL}/admin/connect/${_.uid}`,children:_.icon?(0,t.jsx)("img",{src:_.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,t.jsx)(e.O,{children:_.displayName})})}),r=P.cp.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:_})=>_.colors.neutral150};
  border-radius: ${({theme:_})=>_.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:_})=>_.colors.neutral600};
`},30652:(v,O,s)=>{s.r(O),s.d(O,{FORMS:()=>R});var t=s(19968),M=s(48112),a=s(5e3),i=s(63358),d=s(48936),e=s(89296),h=s(35676),c=s(6912),P=s(5540),C=s(16048),m=s(14632),l=s(48632),r=s(49008),_=s(39380),D=s(69372),E=s(60056),n=s(85332),W=s(54320),I=s(5240),K=s(91892),f=s(36196),u=s(20880),y=s(21424),p=s(62552),S=s(70516),$=s(54223),F=s(18424),z=s(97820),N=s(99568),Q=s(21968),G=s(12132),H=s(85676),J=s(35184);const A=()=>{const{push:B}=(0,r.Uz)(),{formatMessage:o}=(0,m.c)(),{get:L}=(0,C.Qn)(),{isLoading:x,data:j=[]}=(0,l.useQuery)(["ee","providers"],async()=>{const{data:T}=await L("/admin/providers");return T},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),U=()=>{B("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!x&&j.length===0?(0,t.jsx)(r.YJ,{to:"/auth/login"}):(0,t.jsx)(E.U,{children:(0,t.jsxs)(M.G,{children:[(0,t.jsxs)(E.e,{children:[(0,t.jsxs)(E.C,{children:[(0,t.jsx)(E.f,{}),(0,t.jsx)(a.k,{paddingTop:6,paddingBottom:1,children:(0,t.jsx)(i.O,{as:"h1",variant:"alpha",children:o({id:"Auth.form.welcome.title"})})}),(0,t.jsx)(a.k,{paddingBottom:7,children:(0,t.jsx)(i.O,{variant:"epsilon",textColor:"neutral600",children:o({id:"Auth.login.sso.subtitle"})})})]}),(0,t.jsxs)(d.C,{direction:"column",alignItems:"stretch",gap:7,children:[x?(0,t.jsx)(d.C,{justifyContent:"center",children:(0,t.jsx)(e.c,{children:o({id:"Auth.login.sso.loading"})})}):(0,t.jsx)(n.S,{providers:j}),(0,t.jsxs)(d.C,{children:[(0,t.jsx)(g,{}),(0,t.jsx)(a.k,{paddingLeft:3,paddingRight:3,children:(0,t.jsx)(i.O,{variant:"sigma",textColor:"neutral600",children:o({id:"or"})})}),(0,t.jsx)(g,{})]}),(0,t.jsx)(h.Z,{fullWidth:!0,size:"L",onClick:U,children:o({id:"Auth.form.button.login.strapi"})})]})]}),(0,t.jsx)(d.C,{justifyContent:"center",children:(0,t.jsx)(a.k,{paddingTop:4,children:(0,t.jsx)(P.c,{as:_.Af,to:"/auth/forgot-password",children:(0,t.jsx)(i.O,{variant:"pi",children:o({id:"Auth.link.forgot-password"})})})})})]})})},g=(0,D.cp)(c.c)`
  flex: 1;
`,R={providers:A}}}]);
