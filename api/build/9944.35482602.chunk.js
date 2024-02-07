"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[9944],{9944:(K,m,s)=>{s.r(m),s.d(m,{default:()=>ht});var t=s(19968),o=s(16048),h=s(70516),x=s(61952),l=s(62552),p=s(3400),S=s(20596),D=s(48112),L=s(28464),r=s(74432),g=s(63358),b=s(35676),q=s(42816),w=s(5e3),_=s(42848),tt=s(89616),st=s(20464),F=s(76512),d=s(9752),k=s(19576),et=s(35480),nt=s(48744),O=s(48936),z=s(69372);const $=z.cp.div`
  background: ${({theme:a})=>a.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:a})=>a?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:a})=>a.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:a})=>a.spaces[1]};
    top: ${({theme:a})=>a.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,ot=z.cp.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${$} {
    background: ${({theme:a})=>a.colors.success500};
  }

  &[aria-checked='true'] ${$}:before {
    transform: translateX(1rem);
  }
`,at=l.forwardRef(({label:a,onChange:u,onLabel:v="On",offLabel:c="Off",selected:M,visibleLabels:n=!1,...j},f)=>(0,t.jsx)(ot,{ref:f,role:"switch","aria-checked":M,"aria-label":a,onClick:u,visibleLabels:n,type:"button",...j,children:(0,t.jsxs)(O.C,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)("span",{children:v}),(0,t.jsx)("span",{children:c})]}),n&&(0,t.jsx)(w.k,{as:"span","aria-hidden":!0,paddingLeft:2,color:M?"success600":"danger600",children:M?v:c})]})}));var V=s(23264),it=s(36132),B=s(48636),N=s(71324),dt=s(89940),lt=s(79848),rt=s(14632),P=s(48632),G=s(49008),pt=s(17892),St=s(31212),Dt=s(60056),Lt=s(54320),Ot=s(5240),$t=s(91892),Bt=s(36196),Pt=s(20880),At=s(21424),It=s(54223),Ut=s(18424),Wt=s(97820),Rt=s(99568),Kt=s(21968),wt=s(12132),Ft=s(85676),kt=s(35184),zt=s(96556);const ct=()=>{const[a,u]=(0,l.useState)(!1),[v,c]=(0,l.useState)([]),M=(0,h.w1)(x.s),{formatMessage:n}=(0,rt.c)(),{formatAPIError:j}=(0,o.An)(),f=(0,o.eo)();(0,o.G0)();const{push:gt}=(0,G.Uz)(),{pathname:H}=(0,G.IT)(),{isLoading:xt,allowedActions:{canCreate:A,canUpdate:Q,canDelete:Z}}=(0,o.aU)(M.settings.webhooks),{get:ut,post:mt,put:vt}=(0,o.Qn)(),{notifyStatus:Y}=(0,p.O)(),jt="webhooks",{isLoading:ft,data:C,error:I,refetch:X}=(0,P.useQuery)(jt,async()=>{const{data:{data:e}}=await ut("/admin/webhooks");return e});(0,l.useEffect)(()=>{if(I){f({type:"warning",message:j(I)});return}C&&Y(n({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[C,I,f,n,Y,j]);const J=(0,P.useMutation)(async()=>{await mt("/admin/webhooks/batch-delete",{ids:v})},{onError(e){f({type:"warning",message:j(e)}),u(!1)},onSuccess(){c([]),u(!1),X()}}),Ct=(0,P.useMutation)(async({isEnabled:e,id:i})=>{const{id:E,...R}=C.find(Et=>Et.id===i)??{},Tt={...R,isEnabled:e};await vt(`/admin/webhooks/${i}`,Tt)},{onError(e){f({type:"warning",message:j(e)})},onSuccess(){X()}}),Mt=()=>J.mutate(),yt=e=>c(e?C.map(i=>i.id):[]),bt=(e,i)=>c(e?E=>[...E,i]:E=>E.filter(R=>R!==i)),U=e=>gt(`${H}/${e}`),W=xt||ft,T=C?.length??0,y=v.length;return(0,t.jsxs)(S._,{children:[(0,t.jsx)(o.K8,{name:"Webhooks"}),(0,t.jsxs)(D.G,{"aria-busy":W,children:[(0,t.jsx)(L.a,{title:n({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:n({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:A&&!W&&(0,t.jsx)(o.EZ,{startIcon:(0,t.jsx)(B.c,{}),variant:"default",to:`${H}/create`,size:"S",children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),y>0&&Z&&(0,t.jsx)(r.U,{startActions:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.O,{variant:"epsilon",textColor:"neutral600",children:n({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:y})}),(0,t.jsx)(b.Z,{onClick:()=>u(!0),startIcon:(0,t.jsx)(N.c,{}),size:"L",variant:"danger-light",children:n({id:"global.delete",defaultMessage:"Delete"})})]})}),(0,t.jsx)(q.S,{children:W?(0,t.jsx)(w.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Wm,{})}):T>0?(0,t.jsxs)(_.o,{colCount:5,rowCount:T+1,footer:(0,t.jsx)(tt.U,{onClick:()=>A?U("create"):{},icon:(0,t.jsx)(B.c,{}),children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[(0,t.jsx)(st.o,{children:(0,t.jsxs)(F.Tr,{children:[(0,t.jsx)(d.Th,{children:(0,t.jsx)(k.c,{"aria-label":n({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:y>0&&y<T,value:y===T,onValueChange:yt})}),(0,t.jsx)(d.Th,{width:"20%",children:(0,t.jsx)(g.O,{variant:"sigma",textColor:"neutral600",children:n({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(d.Th,{width:"60%",children:(0,t.jsx)(g.O,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),(0,t.jsx)(d.Th,{width:"20%",children:(0,t.jsx)(g.O,{variant:"sigma",textColor:"neutral600",children:n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),(0,t.jsx)(d.Th,{children:(0,t.jsx)(et.K,{children:n({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(nt.K,{children:C.map(e=>(0,t.jsxs)(F.Tr,{...(0,o.on)({fn:()=>U(e.id),condition:Q}),children:[(0,t.jsx)(d.Td,{...o.Ii,children:(0,t.jsx)(k.c,{"aria-label":`${n({id:"global.select",defaultMessage:"Select"})} ${e.name}`,value:v?.includes(e.id),onValueChange:i=>bt(i,e.id),name:"select"})}),(0,t.jsx)(d.Td,{children:(0,t.jsx)(g.O,{fontWeight:"semiBold",textColor:"neutral800",children:e.name})}),(0,t.jsx)(d.Td,{children:(0,t.jsx)(g.O,{textColor:"neutral800",children:e.url})}),(0,t.jsx)(d.Td,{children:(0,t.jsx)(O.C,{children:(0,t.jsx)(at,{onLabel:n({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:n({id:"global.disabled",defaultMessage:"Disabled"}),label:`${e.name} ${n({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:e.isEnabled,onChange:i=>{i.stopPropagation(),Ct.mutate({isEnabled:!e.isEnabled,id:e.id})},visibleLabels:!0})})}),(0,t.jsx)(d.Td,{children:(0,t.jsxs)(O.C,{gap:1,children:[Q&&(0,t.jsx)(V.w,{label:n({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:(0,t.jsx)(dt.c,{}),noBorder:!0}),Z&&(0,t.jsx)(V.w,{onClick:i=>{i.stopPropagation(),c([e.id]),u(!0)},label:n({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:(0,t.jsx)(N.c,{}),noBorder:!0})]})})]},e.id))})]}):(0,t.jsx)(it.S,{icon:(0,t.jsx)(lt.c,{width:"160px"}),content:n({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:(0,t.jsx)(b.Z,{variant:"secondary",startIcon:(0,t.jsx)(B.c,{}),onClick:()=>A?U("create"):{},children:n({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})})})]}),(0,t.jsx)(o.cz,{isOpen:a,onToggleDialog:()=>u(e=>!e),onConfirm:Mt,isConfirmButtonLoading:J.isLoading})]})},ht=()=>{const a=(0,h.w1)(x.s);return(0,t.jsx)(o.rF,{permissions:a.settings.webhooks.main,children:(0,t.jsx)(ct,{})})}},74432:(K,m,s)=>{s.d(m,{U:()=>h});var t=s(19968),o=s(48936);const h=({startActions:x,endActions:l})=>!x&&!l?null:(0,t.jsxs)(o.C,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(o.C,{gap:2,wrap:"wrap",children:x}),(0,t.jsx)(o.C,{gap:2,shrink:0,wrap:"wrap",children:l})]})},89616:(K,m,s)=>{s.d(m,{U:()=>L});var t=s(19968),o=s(69372),h=s(5e3),x=s(6912),l=s(48936),p=s(63358);const S=(0,o.cp)(h.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:r})=>r.colors.primary600};
  }
`,D=(0,o.cp)(h.k)`
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,L=({children:r,icon:g,...b})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(x.c,{}),(0,t.jsx)(D,{as:"button",background:"primary100",padding:5,...b,children:(0,t.jsxs)(l.C,{children:[(0,t.jsx)(S,{"aria-hidden":!0,background:"primary200",children:g}),(0,t.jsx)(h.k,{paddingLeft:3,children:(0,t.jsx)(p.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:r})})]})})]})}}]);
