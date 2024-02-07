"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[8],{82728:(x,_,s)=>{s.d(_,{a:()=>g,s:()=>c});var e=s(97820),t=s(16048);const a={firstname:e.Qb().trim().required(t.aO.required),lastname:e.Qb(),email:e.Qb().email(t.aO.email).lowercase().required(t.aO.required),username:e.Qb().nullable(),password:e.Qb().min(8,t.aO.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:e.Qb().min(8,t.aO.minLength).oneOf([e.IL("password"),null],"components.Input.error.password.noMatch").when("password",(E,n)=>E?n.required(t.aO.required):n)},c={...a,currentPassword:e.Qb().when(["password","confirmPassword"],(E,n,u)=>E||n?u.required(t.aO.required):u),preferedLanguage:e.Qb().nullable()},d={roles:e.M$().min(1,t.aO.required).required(t.aO.required)},g=e.kt().shape({...a,isActive:e.SK(),...d})},71944:(x,_,s)=>{s.d(_,{f:()=>e});const e=({data:t})=>{try{return Object.keys(t).reduce((a,c)=>{const d=t[c][0];return a[c]={id:d,defaultMessage:d},a},{})}catch{return{}}}},20900:(x,_,s)=>{s.d(_,{M:()=>U,S:()=>R,a:()=>v});var e=s(19968),t=s(33104),a=s(14632),c=s(60056),d=s(23264),g=s(35933),E=s(13384),n=s(16048),u=s(32680),r=s(24144),C=s(48632),h=s(69372);const v=({children:p,target:l})=>{const T=(0,n.eo)(),{formatMessage:K}=(0,a.c)(),{copy:W}=(0,n.UC)(),j=K({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),P=async()=>{await W(l)&&T({type:"info",message:{id:"notification.link-copied"}})};return(0,e.jsx)(n._y,{endAction:(0,e.jsx)(d.w,{label:j,noBorder:!0,icon:(0,e.jsx)(u.c,{}),onClick:P}),title:l,titleEllipsis:!0,subtitle:p,icon:(0,e.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})};v.propTypes={children:t.oneOfType([t.element,t.string]).isRequired,target:t.string.isRequired};const U=({registrationToken:p})=>{const{formatMessage:l}=(0,a.c)(),T=`${window.location.origin}${(0,c.T)()}/auth/register?registrationToken=${p}`;return(0,e.jsx)(v,{target:T,children:l({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})};U.defaultProps={registrationToken:""},U.propTypes={registrationToken:t.string};const M=(0,h.xZ)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,$=h.cp.div`
  animation: ${M} 2s infinite linear;
`,F=()=>(0,e.jsx)($,{children:(0,e.jsx)(r.c,{})}),Y=async()=>{const{get:p}=(0,n.YF)(),{data:l}=await p("/admin/roles");return l.data},R=({disabled:p,error:l,onChange:T,value:K})=>{const{status:W,data:j}=(0,C.useQuery)(["roles"],Y,{staleTime:5e4}),{formatMessage:P}=(0,a.c)(),S=l?P({id:l,defaultMessage:l}):"",Z=P({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),w=P({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),V=P({id:"app.components.Select.placeholder",defaultMessage:"Select"}),X=W==="loading"?(0,e.jsx)(F,{}):void 0;return(0,e.jsx)(g.M,{id:"roles",disabled:p,error:S,hint:w,label:Z,name:"roles",onChange:O=>{T({target:{name:"roles",value:O}})},placeholder:V,multi:!0,startIcon:X,value:K.map(O=>O.toString()),withTags:!0,required:!0,children:(j||[]).map(O=>(0,e.jsx)(E.c,{value:O.id.toString(),children:P({id:`global.${O.code}`,defaultMessage:O.name})},O.id))})};R.defaultProps={disabled:!1,error:void 0},R.propTypes={disabled:t.bool,error:t.string,onChange:t.func.isRequired,value:t.array.isRequired}},30008:(x,_,s)=>{s.r(_),s.d(_,{default:()=>os});var e=s(19968),t=s(62552),a=s(16048),c=s(70516),d=s(49008),g=s(61952),E=s(48112),n=s(28464),u=s(35676),r=s(42816),C=s(5e3),h=s(48936),v=s(63358),U=s(28724),M=s(70996),$=s(53305),F=s(37776),Y=s(54223),R=s(85676),p=s(21968),l=s(20880),T=s(33104),K=s(14632),W=s(74253),j=s(60056),P=s(71944),S=s(20900),Z=s(82728),w=s(48632),V=s(17892),X=s(31212),O=s(35184),_s=s(96556),cs=s(54320),ms=s(5240),Es=s(91892),Ms=s(36196),gs=s(21424),us=s(18424),ps=s(97820),Ps=s(99568),Os=s(12132);const ts=async(L,i)=>{const{put:I}=(0,a.YF)(),{data:y}=await I(`/admin/users/${L}`,i);return y.data},ns=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],k=["email","firstname","lastname","username","isActive","roles"],q=({canUpdate:L})=>{const{formatMessage:i}=(0,K.c)(),{params:{id:I}}=(0,d.SU)("/settings/users/:id"),{push:y}=(0,d.Uz)(),{setUserDisplayName:b}=(0,a.s7)(),f=(0,a.eo)(),{lockApp:J,unlockApp:G}=(0,a.H6)(),ss=(0,j.p)(S.M,async()=>(await s.e(892).then(s.bind(s,50892))).MagicLinkEE);(0,a.G0)();const{users:[z],isLoading:rs}=(0,W.u)({id:I},{cacheTime:0,onError(o){const{status:m}=o.response;m===403?(f({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),y("/")):f({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),is=async(o,m)=>{J();try{const D=await ts(I,p(o,"confirmPassword"));f({type:"success",message:i({id:"notification.success.saved",defaultMessage:"Saved"})});const B=a.cJ.getUserInfo();if(I.toString()===B.id.toString()){a.cJ.setUserInfo(D);const Q=R(o,"username")||(0,g.g)(o.firstname,o.lastname);b(Q)}m.setValues(l(o,k))}catch(D){const B=(0,P.f)(D.response.data),Q=Object.keys(B).reduce((H,A)=>(H[A]=B[A].id,H),{});m.setErrors(Q),f({type:"warning",message:R(D,"response.data.error.message","notification.error")})}G()},es=rs||!ss,ds=es?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},N=Object.keys(l(z,k)).reduce((o,m)=>m==="roles"?(o[m]=(z?.roles||[]).map(({id:D})=>D),o):(o[m]=z?.[m],o),{}),ls=N.username||(0,g.g)(N.firstname,N.lastname),as=i(ds,{name:ls});return es?(0,e.jsxs)(E.G,{"aria-busy":"true",children:[(0,e.jsx)(a.K8,{name:"Users"}),(0,e.jsx)(n.a,{primaryAction:(0,e.jsx)(u.Z,{disabled:!0,startIcon:(0,e.jsx)($.c,{}),type:"button",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:as,navigationAction:(0,e.jsx)(a.cH,{startIcon:(0,e.jsx)(F.c,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(r.S,{children:(0,e.jsx)(a.Wm,{})})]}):(0,e.jsxs)(E.G,{children:[(0,e.jsx)(a.K8,{name:"Users"}),(0,e.jsx)(Y.QJ,{onSubmit:is,initialValues:N,validateOnChange:!1,validationSchema:Z.a,children:({errors:o,values:m,handleChange:D,isSubmitting:B,dirty:Q})=>(0,e.jsxs)(a.QF,{children:[(0,e.jsx)(n.a,{primaryAction:(0,e.jsx)(u.Z,{disabled:B||!L?!0:!Q,startIcon:(0,e.jsx)($.c,{}),loading:B,type:"submit",size:"L",children:i({id:"global.save",defaultMessage:"Save"})}),title:as,navigationAction:(0,e.jsx)(a.cH,{startIcon:(0,e.jsx)(F.c,{}),to:"/settings/users?pageSize=10&page=1&sort=firstname",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsxs)(r.S,{children:[z?.registrationToken&&(0,e.jsx)(C.k,{paddingBottom:6,children:(0,e.jsx)(ss,{registrationToken:z.registrationToken})}),(0,e.jsxs)(h.C,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(C.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(h.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(v.O,{variant:"delta",as:"h2",children:i({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})}),(0,e.jsx)(U.y,{gap:5,children:ns.map(H=>H.map(A=>(0,e.jsx)(M.C,{...A.size,children:(0,e.jsx)(a.u,{...A,disabled:!L,error:o[A.name],onChange:D,value:m[A.name]||""})},A.name)))})]})}),(0,e.jsx)(C.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(h.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(v.O,{variant:"delta",as:"h2",children:i({id:"global.roles",defaultMessage:"User's role"})}),(0,e.jsx)(U.y,{gap:5,children:(0,e.jsx)(M.C,{col:6,xs:12,children:(0,e.jsx)(S.S,{disabled:!L,error:o.roles,onChange:D,value:m.roles})})})]})})]})]})]})})]})};q.propTypes={canUpdate:T.bool.isRequired};const os=()=>{const L=(0,a.eo)(),i=(0,c.w1)(g.s),I=t.useMemo(()=>({read:i.settings.users.read,update:i.settings.users.update}),[i.settings.users]),{isLoading:y,allowedActions:{canRead:b,canUpdate:f}}=(0,a.aU)(I),{state:J}=(0,d.IT)(),G=J?.from??"/";return(0,t.useEffect)(()=>{y||!b&&!f&&L({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[y,b,f,L]),y?(0,e.jsx)(a.Wm,{}):!b&&!f?(0,e.jsx)(d.YJ,{to:G}):(0,e.jsx)(q,{canUpdate:f})}},74253:(x,_,s)=>{s.d(_,{u:()=>c});var e=s(62552),t=s(16048),a=s(48632);function c(d={},g={}){const{id:E="",...n}=d,{get:u}=(0,t.Qn)(),{data:r,isError:C,isLoading:h,refetch:v}=(0,a.useQuery)(["users",E,n],async()=>{const{data:{data:M}}=await u(`/admin/users/${E}`,{params:n});return M},g);return{users:e.useMemo(()=>{let M=[];return r&&("results"in r?Array.isArray(r.results)&&(M=r.results):M=[r]),M},[r]),pagination:e.useMemo(()=>(r&&"pagination"in r)??null,[r]),isLoading:h,isError:C,refetch:v}}},37776:(x,_,s)=>{s.d(_,{c:()=>a});var e=s(19968);const t=c=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...c,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=t}}]);
