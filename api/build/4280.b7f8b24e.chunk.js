"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[4280],{24280:(g,d,s)=>{s.r(d),s.d(d,{LoginEE:()=>v});var _=s(19968),i=s(6912),a=s(5e3),E=s(48936),P=s(63358),r=s(16048),D=s(14632),M=s(48632),l=s(69372),O=s(60056),e=s(85332),o=s(54320),c=s(5240),t=s(91892),h=s(36196),C=s(20880),n=s(21424),U=s(62552),W=s(70516),x=s(54223),K=s(18424),j=s(97820),f=s(99568),y=s(21968),u=s(12132),S=s(85676),$=s(35184);const m=(0,l.cp)(i.c)`
  flex: 1;
`,v=L=>{const{formatMessage:B}=(0,D.c)(),{get:A}=(0,r.Qn)(),{isLoading:I,data:R=[]}=(0,M.useQuery)(["ee","providers"],async()=>{const{data:T}=await A("/admin/providers");return T},{enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!I&&R.length===0?(0,_.jsx)(O.L,{...L}):(0,_.jsx)(O.L,{...L,children:(0,_.jsx)(a.k,{paddingTop:7,children:(0,_.jsxs)(E.C,{direction:"column",alignItems:"stretch",gap:7,children:[(0,_.jsxs)(E.C,{children:[(0,_.jsx)(m,{}),(0,_.jsx)(a.k,{paddingLeft:3,paddingRight:3,children:(0,_.jsx)(P.O,{variant:"sigma",textColor:"neutral600",children:B({id:"Auth.login.sso.divider"})})}),(0,_.jsx)(m,{})]}),(0,_.jsx)(e.S,{providers:R,displayAllProviders:!1})]})})})}},85332:(g,d,s)=>{s.d(d,{S:()=>O});var _=s(19968),i=s(28724),a=s(70996),E=s(70544),P=s(48936),r=s(63358),D=s(14632),M=s(39380),l=s(69372);const O=({providers:t,displayAllProviders:h})=>{const{formatMessage:C}=(0,D.c)();return h?(0,_.jsx)(i.y,{gap:4,children:t.map(n=>(0,_.jsx)(a.C,{col:4,children:(0,_.jsx)(o,{provider:n})},n.uid))}):t.length>2&&!h?(0,_.jsxs)(i.y,{gap:4,children:[t.slice(0,2).map(n=>(0,_.jsx)(a.C,{col:4,children:(0,_.jsx)(o,{provider:n})},n.uid)),(0,_.jsx)(a.C,{col:4,children:(0,_.jsx)(E.o,{label:C({id:"global.see-more"}),children:(0,_.jsx)(c,{as:M.cH,to:"/auth/providers",children:(0,_.jsx)("span",{"aria-hidden":!0,children:"\u2022\u2022\u2022"})})})})]}):(0,_.jsx)(e,{justifyContent:"center",children:t.map(n=>(0,_.jsx)(o,{provider:n},n.uid))})},e=(0,l.cp)(P.C)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:t})=>t.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:t})=>t.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:t})=>t.spaces[2]};
  }
`,o=({provider:t})=>(0,_.jsx)(E.o,{label:t.displayName,children:(0,_.jsx)(c,{href:`${window.strapi.backendURL}/admin/connect/${t.uid}`,children:t.icon?(0,_.jsx)("img",{src:t.icon,"aria-hidden":!0,alt:"",height:"32px"}):(0,_.jsx)(r.O,{children:t.displayName})})}),c=l.cp.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:t})=>t.colors.neutral150};
  border-radius: ${({theme:t})=>t.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:t})=>t.colors.neutral600};
`}}]);
