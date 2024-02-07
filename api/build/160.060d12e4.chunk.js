"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[160],{20596:(ie,C,s)=>{s.d(C,{_:()=>A});var e=s(19968),p=s(69372),R=s(5e3);const U=(0,p.cp)(R.k)`
  display: grid;
  grid-template-columns: ${({hasSideNav:M})=>M?"auto 1fr":"1fr"};
`,j=(0,p.cp)(R.k)`
  overflow-x: hidden;
`,A=({sideNav:M,children:I})=>(0,e.jsxs)(U,{hasSideNav:Boolean(M),children:[M,(0,e.jsx)(j,{paddingBottom:10,children:I})]})},10160:(ie,C,s)=>{s.r(C),s.d(C,{ProvidersPage:()=>Y,default:()=>Oe});var e=s(19968),p=s(62552),R=s(28216),U=s(62492),j=s(11208),A=s(2931),M=s(25824),I=s(48936),re=s(28724),ne=s(70996),de=s(3548),k=s(35676),oe=s(20596),le=s(48112),ue=s(28464),_e=s(42816),ce=s(42848),me=s(20464),G=s(76512),v=s(9752),D=s(63358),ge=s(35480),pe=s(48744),Ee=s(23264),r=s(16048),Pe=s(89940),he=s(30840),B=s(14632),K=s(48632),Me=s(5848),ve=s(39820),be=s(54223),a=s(33104),n=s(90896),Te=s(79804),t=s(97820);const W=({description:o,disabled:b,intlLabel:E,error:c,name:_,onChange:O,placeholder:d,providerToEditName:P,type:g,value:u})=>{const{formatMessage:l}=(0,B.c)(),h=_==="noName"?`${window.strapi.backendURL}/api/connect/${P}/callback`:u,f=l({id:E.id,defaultMessage:E.defaultMessage},{provider:P,...E.values}),m=o?l({id:o.id,defaultMessage:o.defaultMessage},{provider:P,...o.values}):"";if(g==="bool")return(0,e.jsx)(R.a,{"aria-label":_,checked:u,disabled:b,hint:m,label:f,name:_,offLabel:l({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:l({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:L=>{O({target:{name:_,value:L.target.checked}})}});const N=d?l({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",q=c?l({id:c,defaultMessage:c}):"";return(0,e.jsx)(U.g,{"aria-label":_,disabled:b,error:q,label:f,name:_,onChange:O,placeholder:N,type:g,value:h})};W.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},W.propTypes={description:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}),disabled:a.bool,error:a.string,intlLabel:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}).isRequired,name:a.string.isRequired,onChange:a.func.isRequired,placeholder:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}),providerToEditName:a.string.isRequired,type:a.string.isRequired,value:a.oneOfType([a.bool,a.string])};const Q=({headerBreadcrumbs:o,initialData:b,isSubmiting:E,layout:c,isOpen:_,onSubmit:O,onToggle:d,providerToEditName:P})=>{const{formatMessage:g}=(0,B.c)();return _?(0,e.jsxs)(j.E,{onClose:d,labelledBy:"title",children:[(0,e.jsx)(A.k,{children:(0,e.jsx)(Me.M,{label:o.join(", "),children:o.map((u,l,h)=>(0,e.jsx)(ve.i,{isCurrent:l===h.length-1,children:u},u))})}),(0,e.jsx)(be.QJ,{onSubmit:u=>O(u),initialValues:b,validationSchema:c.schema,validateOnChange:!1,children:({errors:u,handleChange:l,values:h})=>(0,e.jsxs)(r.QF,{children:[(0,e.jsx)(M.a,{children:(0,e.jsx)(I.C,{direction:"column",alignItems:"stretch",gap:1,children:(0,e.jsx)(re.y,{gap:5,children:c.form.map(f=>f.map(m=>(0,e.jsx)(ne.C,{col:m.size,xs:12,children:(0,e.jsx)(W,{...m,error:u[m.name],onChange:l,value:h[m.name],providerToEditName:P})},m.name)))})})}),(0,e.jsx)(de._,{startActions:(0,e.jsx)(k.Z,{variant:"tertiary",onClick:d,type:"button",children:g({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(k.Z,{type:"submit",loading:E,children:g({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};Q.defaultProps={initialData:null,providerToEditName:null},Q.propTypes={headerBreadcrumbs:a.arrayOf(a.string).isRequired,initialData:a.object,layout:a.shape({form:a.arrayOf(a.array),schema:a.object}).isRequired,isOpen:a.bool.isRequired,isSubmiting:a.bool.isRequired,onSubmit:a.func.isRequired,onToggle:a.func.isRequired,providerToEditName:a.string};const J={id:(0,n.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},V={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},S={id:(0,n.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},F={id:(0,n.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},Z={id:(0,n.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},w={id:(0,n.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},y={id:(0,n.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},X={id:(0,n.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},z={email:{form:[[{intlLabel:F,name:"enabled",type:"bool",description:S,size:6}]],schema:t.kt().shape({enabled:t.SK().required(r.aO.required)})},providers:{form:[[{intlLabel:F,name:"enabled",type:"bool",description:S,size:6,validations:{required:!0}}],[{intlLabel:Z,name:"key",type:"text",placeholder:y,size:12,validations:{required:!0}}],[{intlLabel:X,name:"secret",type:"text",placeholder:y,size:12,validations:{required:!0}}],[{intlLabel:J,placeholder:V,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:w,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:t.kt().shape({enabled:t.SK().required(r.aO.required),key:t.Qb().when("enabled",{is:!0,then:t.Qb().required(r.aO.required),otherwise:t.Qb()}),secret:t.Qb().when("enabled",{is:!0,then:t.Qb().required(r.aO.required),otherwise:t.Qb()}),callback:t.Qb().when("enabled",{is:!0,then:t.Qb().required(r.aO.required),otherwise:t.Qb()})})},providersWithSubdomain:{form:[[{intlLabel:F,name:"enabled",type:"bool",description:S,size:6,validations:{required:!0}}],[{intlLabel:Z,name:"key",type:"text",placeholder:y,size:12,validations:{required:!0}}],[{intlLabel:X,name:"secret",type:"text",placeholder:y,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,n.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:y,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,n.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,n.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:J,placeholder:V,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:w,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:t.kt().shape({enabled:t.SK().required(r.aO.required),key:t.Qb().when("enabled",{is:!0,then:t.Qb().required(r.aO.required),otherwise:t.Qb()}),secret:t.Qb().when("enabled",{is:!0,then:t.Qb().required(r.aO.required),otherwise:t.Qb()}),subdomain:t.Qb().when("enabled",{is:!0,then:t.Qb().required(r.aO.required),otherwise:t.Qb()}),callback:t.Qb().when("enabled",{is:!0,then:t.Qb().required(r.aO.required),otherwise:t.Qb()})})}},Y=()=>{const{formatMessage:o,locale:b}=(0,B.c)(),E=(0,K.useQueryClient)(),{trackUsage:c}=(0,r.m4)(),[_,O]=p.useState(!1),[d,P]=p.useState(null),g=(0,r.eo)(),{lockApp:u,unlockApp:l}=(0,r.H6)(),{get:h,put:f}=(0,r.Qn)(),{formatAPIError:m}=(0,r.An)(),N=(0,r.In)(b,{sensitivity:"base"});(0,r.G0)();const{isLoading:q,allowedActions:{canUpdate:L}}=(0,r.aU)({update:n.P.updateProviders}),{isLoading:fe,data:H}=(0,K.useQuery)(["users-permissions","get-providers"],async()=>{const{data:i}=await h("/users-permissions/providers");return i},{initialData:{}}),ee=(0,K.useMutation)(i=>f("/users-permissions/providers",i),{async onSuccess(){await E.invalidateQueries(["users-permissions","providers"]),g({type:"success",message:{id:(0,n.g)("notification.success.submit")}}),c("didEditAuthenticationProvider"),$(),l()},onError(i){g({type:"warning",message:m(i)}),l()},refetchActive:!1}),T=Object.entries(H).reduce((i,[x,xe])=>{const{icon:te,enabled:Ce,subdomain:Re}=xe;return i.push({name:x,icon:te==="envelope"?["fas","envelope"]:["fab",te],enabled:Ce,subdomain:Re}),i},[]).sort((i,x)=>N.compare(i.name,x.name)),De=fe||q,se=p.useMemo(()=>d?!!T.find(x=>x.name===d)?.subdomain:!1,[T,d]),ye=p.useMemo(()=>d==="email"?z.email:se?z.providersWithSubdomain:z.providers,[d,se]),$=()=>{O(i=>!i)},ae=i=>{L&&(P(i.name),$())},Le=async i=>{u(),c("willEditAuthenticationProvider"),ee.mutate({providers:{...H,[d]:i}})};return(0,e.jsxs)(oe._,{children:[(0,e.jsx)(r.K8,{name:o({id:(0,n.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,e.jsxs)(le.G,{children:[(0,e.jsx)(ue.a,{title:o({id:(0,n.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),De?(0,e.jsx)(r.Wm,{}):(0,e.jsx)(_e.S,{children:(0,e.jsxs)(ce.o,{colCount:3,rowCount:T.length+1,children:[(0,e.jsx)(me.o,{children:(0,e.jsxs)(G.Tr,{children:[(0,e.jsx)(v.Th,{children:(0,e.jsx)(D.O,{variant:"sigma",textColor:"neutral600",children:o({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(v.Th,{children:(0,e.jsx)(D.O,{variant:"sigma",textColor:"neutral600",children:o({id:(0,n.g)("Providers.status"),defaultMessage:"Status"})})}),(0,e.jsx)(v.Th,{children:(0,e.jsx)(D.O,{variant:"sigma",children:(0,e.jsx)(ge.K,{children:o({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,e.jsx)(pe.K,{children:T.map(i=>(0,e.jsxs)(G.Tr,{...(0,r.on)({fn:()=>ae(i),condition:L}),children:[(0,e.jsx)(v.Td,{width:"45%",children:(0,e.jsx)(D.O,{fontWeight:"semiBold",textColor:"neutral800",children:i.name})}),(0,e.jsx)(v.Td,{width:"65%",children:(0,e.jsx)(D.O,{textColor:i.enabled?"success600":"danger600","data-testid":`enable-${i.name}`,children:i.enabled?o({id:"global.enabled",defaultMessage:"Enabled"}):o({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,e.jsx)(v.Td,{...r.Ii,children:L&&(0,e.jsx)(Ee.w,{onClick:()=>ae(i),noBorder:!0,icon:(0,e.jsx)(Pe.c,{}),label:"Edit"})})]},i.name))})]})})]}),(0,e.jsx)(Q,{initialData:H[d],isOpen:_,isSubmiting:ee.isLoading,layout:ye,headerBreadcrumbs:[o({id:(0,n.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),he(d)],onToggle:$,onSubmit:Le,providerToEditName:d})]})},Oe=()=>(0,e.jsx)(r.rF,{permissions:n.P.readProviders,children:(0,e.jsx)(Y,{})})}}]);
