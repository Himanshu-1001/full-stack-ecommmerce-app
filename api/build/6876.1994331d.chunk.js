"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[6876],{46876:(S,M,s)=>{s.r(M),s.d(M,{default:()=>z});var t=s(19968),a=s(16048),c=s(70516),P=s(49008),I=s(61952),R=s(62552),_=s(5e3),r=s(48936),m=s(63358),C=s(35676),U=s(28724),h=s(70996),l=s(62492),B=s(25352),T=s(48112),f=s(28464),W=s(42816),F=s(37776),E=s(54223),L=s(14632),K=s(17872),j=s(51168),D=s(33104),Q=s(97820),as=s(48632),ns=s(17892),es=s(31212),is=s(60056),os=s(54320),_s=s(5240),ds=s(91892),rs=s(36196),ls=s(20880),Es=s(21424),Ms=s(18424),Ps=s(99568),Ds=s(21968),Os=s(12132),cs=s(85676),ms=s(35184),hs=s(96556),gs=s(56781),vs=s(79804),Rs=s(87144),Cs=s(30680),Ls=s(30840),As=s(99256),us=s(38955);const p=({disabled:d,role:n,values:i,errors:o,onChange:A,onBlur:g})=>{const{formatMessage:e}=(0,L.c)();return(0,t.jsx)(_.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(r.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(r.C,{justifyContent:"space-between",children:[(0,t.jsxs)(_.k,{children:[(0,t.jsx)(_.k,{children:(0,t.jsx)(m.O,{fontWeight:"bold",children:n?n.name:e({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(_.k,{children:(0,t.jsx)(m.O,{textColor:"neutral500",variant:"pi",children:n?n.description:e({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(C.Z,{disabled:!0,variant:"secondary",children:e({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:n.usersCount})})]}),(0,t.jsxs)(U.y,{gap:4,children:[(0,t.jsx)(h.C,{col:6,children:(0,t.jsx)(l.g,{disabled:d,name:"name",error:o.name&&e({id:o.name}),label:e({id:"global.name",defaultMessage:"Name"}),onChange:A,onBlur:g,required:!0,value:i.name||""})}),(0,t.jsx)(h.C,{col:6,children:(0,t.jsx)(B.A,{disabled:d,label:e({id:"global.description",defaultMessage:"Description"}),id:"description",error:o.name&&e({id:o.name}),onChange:A,onBlur:g,children:i.description||""})})]})]})})};p.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},p.propTypes={disabled:D.bool,errors:D.object.isRequired,onBlur:D.func.isRequired,onChange:D.func.isRequired,role:D.object,values:D.object};const Z=Q.kt().shape({name:Q.Qb().required(a.aO.required)}),$=()=>{const d=(0,a.eo)(),{formatMessage:n}=(0,L.c)(),{params:{id:i}}=(0,P.SU)("/settings/roles/:id"),{put:o}=(0,a.Qn)(),[A,g]=(0,R.useState)(!1),e=(0,R.useRef)(),{lockApp:J,unlockApp:G}=(0,a.H6)(),{trackUsage:V}=(0,a.m4)(),{formatAPIError:Y}=(0,a.An)(),{isLoading:X,data:b}=(0,j.u)(i,{cacheTime:0}),{roles:[O={}],isLoading:x,refetch:w}=(0,K.u)({id:i},{cacheTime:0}),{permissions:k,isLoading:H}=(0,j.a)({id:i},{cacheTime:0}),q=async u=>{try{J(),g(!0);const{permissionsToSend:v,didUpdateConditions:y}=e.current.getPermissions();await o(`/admin/roles/${i}`,u),O.code!=="strapi-super-admin"&&(await o(`/admin/roles/${i}/permissions`,{permissions:v}),y&&V("didUpdateConditions")),e.current.setFormAfterSubmit(),await w(),d({type:"success",message:{id:"notification.success.saved"}})}catch(v){d({type:"warning",message:Y(v)})}finally{g(!1),G()}},N=!x&&O.code==="strapi-super-admin";return(0,t.jsxs)(T.G,{children:[(0,t.jsx)(a.K8,{name:"Roles"}),(0,t.jsx)(E.QJ,{enableReinitialize:!0,initialValues:{name:O.name,description:O.description},onSubmit:q,validationSchema:Z,validateOnChange:!1,children:({handleSubmit:u,values:v,errors:y,handleChange:ss,handleBlur:ts})=>(0,t.jsxs)("form",{onSubmit:u,children:[(0,t.jsx)(f.a,{primaryAction:(0,t.jsx)(r.C,{gap:2,children:(0,t.jsx)(C.Z,{disabled:O.code==="strapi-super-admin",onClick:u,loading:A,size:"L",children:n({id:"global.save",defaultMessage:"Save"})})}),title:n({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:n({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(a.cH,{startIcon:(0,t.jsx)(F.c,{}),to:"/settings/roles",children:n({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(W.S,{children:(0,t.jsxs)(r.C,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)(p,{isLoading:x||H,disabled:N,errors:y,values:v,onChange:ss,onBlur:ts,role:O}),!X&&!x&&!H?(0,t.jsx)(_.k,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(j.P,{isFormDisabled:N,permissions:k,ref:e,layout:b})}):(0,t.jsx)(_.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(a.Wm,{})})]})})]})})]})},z=()=>{const d=(0,c.w1)(I.s),{isLoading:n,allowedActions:{canRead:i,canUpdate:o}}=(0,a.aU)({read:d.settings.roles.read,update:d.settings.roles.update});return n?(0,t.jsx)(a.Wm,{}):!i&&!o?(0,t.jsx)(P.YJ,{to:"/"}):(0,t.jsx)($,{})}},17872:(S,M,s)=>{s.d(M,{u:()=>I});var t=s(62552),a=s(16048),c=s(14632),P=s(48632);const I=(R={},_={})=>{const{id:r="",...m}=R,{get:C}=(0,a.Qn)(),{locale:U}=(0,c.c)(),h=(0,a.In)(U,{sensitivity:"base"}),{data:l,error:B,isError:T,isLoading:f,refetch:W}=(0,P.useQuery)(["roles",r,m],async()=>{const{data:E}=await C(`/admin/roles/${r??""}`,{params:m});return E},_);return{roles:t.useMemo(()=>{let E=[];return l&&(Array.isArray(l.data)?E=l.data:E=[l.data]),[...E].sort((L,K)=>h.compare(L.name,K.name))},[l,h]),error:B,isError:T,isLoading:f,refetch:W}}},37776:(S,M,s)=>{s.d(M,{c:()=>c});var t=s(19968);const a=P=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...P,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),c=a}}]);
