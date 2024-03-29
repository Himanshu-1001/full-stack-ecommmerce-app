"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[5816],{92508:(C,_,s)=>{s.d(_,{c:()=>c});var e=s(19968);const n=u=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...u,children:[(0,e.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),c=n},15816:(C,_,s)=>{s.d(_,{ProtectedSettingsPage:()=>W});var e=s(19968),n=s(62552),c=s(48112),u=s(28464),j=s(42816),o=s(48936),y=s(5e3),p=s(63358),f=s(28724),r=s(70996),h=s(62492),T=s(35933),A=s(13384),R=s(35676),i=s(16048),S=s(92508),L=s(14632),D=s(48632),I=s(69372),E=s(97820),B=s(81891);const v=E.kt().shape({email:E.Qb().email(i.aO.email).required(i.aO.required)}),K=I.cp.a`
  color: ${({theme:g})=>g.colors.primary600};
`,W=()=>(0,e.jsx)(i.rF,{permissions:B.P.settings,children:(0,e.jsx)(U,{})}),U=()=>{const g=(0,i.eo)(),{formatMessage:t}=(0,L.c)(),{lockApp:b,unlockApp:F}=(0,i.H6)(),{get:Z,post:V}=(0,i.Qn)(),[a,H]=n.useState(""),[Q,P]=n.useState(!1),[O,$]=n.useState({}),{data:d,isLoading:x}=(0,D.useQuery)(["email","settings"],async()=>{const l=await Z("/email/settings"),{data:{config:m}}=l;return m}),M=(0,D.useMutation)(async l=>{await V("/email/test",l)},{onError(){g({type:"warning",message:t({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:a})})},onSuccess(){g({type:"success",message:t({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:a})})},retry:!1});(0,i.G0)(),n.useEffect(()=>{v.validate({email:a},{abortEarly:!1}).then(()=>P(!0)).catch(()=>P(!1))},[a]);const G=l=>{H(()=>l.target.value)},N=async l=>{l.preventDefault();try{await v.validate({email:a},{abortEarly:!1})}catch(m){m instanceof E.$D&&$((0,i.CK)(m))}b(),M.mutate({to:a}),F()};return(0,e.jsxs)(c.G,{labelledBy:"title","aria-busy":x||M.isLoading,children:[(0,e.jsx)(i.K8,{name:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),(0,e.jsx)(u.a,{id:"title",title:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:t({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),(0,e.jsx)(j.S,{children:x?(0,e.jsx)(i.Wm,{}):d&&(0,e.jsx)("form",{onSubmit:N,children:(0,e.jsxs)(o.C,{direction:"column",alignItems:"stretch",gap:7,children:[(0,e.jsx)(y.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(o.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsxs)(o.C,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(p.O,{variant:"delta",as:"h2",children:t({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),(0,e.jsx)(p.O,{children:t({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:(0,e.jsx)(K,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:t({id:"email.link",defaultMessage:"Link"})})})})]}),(0,e.jsxs)(f.y,{gap:5,children:[(0,e.jsx)(r.C,{col:6,s:12,children:(0,e.jsx)(h.g,{name:"shipper-email",label:t({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:d.settings.defaultFrom})}),(0,e.jsx)(r.C,{col:6,s:12,children:(0,e.jsx)(h.g,{name:"response-email",label:t({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:d.settings.defaultReplyTo})}),(0,e.jsx)(r.C,{col:6,s:12,children:(0,e.jsx)(T.M,{name:"email-provider",label:t({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,value:d.provider,children:(0,e.jsx)(A.c,{value:d.provider,children:d.provider})})})]})]})}),(0,e.jsxs)(o.C,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[(0,e.jsx)(p.O,{variant:"delta",as:"h2",children:t({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),(0,e.jsxs)(f.y,{gap:5,children:[(0,e.jsx)(r.C,{col:6,s:12,children:(0,e.jsx)(h.g,{id:"test-address-input",name:"test-address",onChange:G,label:t({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:a,error:O.email?.id&&t({id:`email.${O.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:t({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})}),(0,e.jsx)(r.C,{col:7,s:12,children:(0,e.jsx)(R.Z,{loading:M.isLoading,disabled:!Q,type:"submit",startIcon:(0,e.jsx)(S.c,{}),children:t({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})}}}]);
