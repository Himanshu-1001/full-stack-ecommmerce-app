"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[1040],{1040:(Y,m,s)=>{s.r(m),s.d(m,{default:()=>b});var e=s(19968),D=s(3400),_=s(48112),u=s(28464),E=s(42816),y=s(35676),A=s(5e3),x=s(48936),L=s(63358),T=s(28724),p=s(70996),C=s(35933),R=s(13384),a=s(16048),S=s(53305),j=s(54223),I=s(14632),r=s(48632),t=s(90896),k=s(79804),o=s(97820);const U=[{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,t.g)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,t.g)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],f=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),W=o.kt().shape({email_confirmation_redirection:o.Er().when("email_confirmation",{is:!0,then:o.Qb().matches(f).required(),otherwise:o.Qb().nullable()}),email_reset_password:o.Qb(a.aO.string).matches(f,a.aO.regex).nullable()}),b=()=>(0,e.jsx)(a.rF,{permissions:t.P.readAdvancedSettings,children:(0,e.jsx)(K,{})}),K=()=>{const{formatMessage:d}=(0,I.c)(),l=(0,a.eo)(),{lockApp:B,unlockApp:M}=(0,a.H6)(),{notifyStatus:F}=(0,D.O)(),Q=(0,r.useQueryClient)(),{get:z,put:w}=(0,a.Qn)(),{formatAPIError:N}=(0,a.An)();(0,a.G0)();const{isLoading:H,allowedActions:{canUpdate:h}}=(0,a.aU)({update:t.P.updateAdvancedSettings}),{isLoading:G,data:v}=(0,r.useQuery)(["users-permissions","advanced"],async()=>{const{data:n}=await z("/users-permissions/advanced");return n},{onSuccess(){F(d({id:(0,t.g)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){l({type:"warning",message:{id:(0,t.g)("notification.error"),defaultMessage:"An error occured"}})}}),J=H||G,O=(0,r.useMutation)(n=>w("/users-permissions/advanced",n),{async onSuccess(){await Q.invalidateQueries(["users-permissions","advanced"]),l({type:"success",message:{id:(0,t.g)("notification.success.saved"),defaultMessage:"Saved"}}),M()},onError(n){l({type:"warning",message:N(n)}),M()},refetchActive:!0}),{isLoading:V}=O,X=async n=>{B(),O.mutate({...n,email_confirmation_redirection:n.email_confirmation?n.email_confirmation_redirection:""})};return J?(0,e.jsxs)(_.G,{"aria-busy":"true",children:[(0,e.jsx)(a.K8,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(u.a,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(E.S,{children:(0,e.jsx)(a.Wm,{})})]}):(0,e.jsxs)(_.G,{"aria-busy":V,children:[(0,e.jsx)(a.K8,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,e.jsx)(j.QJ,{onSubmit:X,initialValues:v.settings,validateOnChange:!1,validationSchema:W,enableReinitialize:!0,children:({errors:n,values:c,handleChange:P,isSubmitting:Z,dirty:$})=>(0,e.jsxs)(a.QF,{children:[(0,e.jsx)(u.a,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:(0,e.jsx)(y.Z,{loading:Z,type:"submit",disabled:h?!$:!h,startIcon:(0,e.jsx)(S.c,{}),size:"S",children:d({id:"global.save",defaultMessage:"Save"})})}),(0,e.jsx)(E.S,{children:(0,e.jsx)(A.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,e.jsxs)(x.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(L.O,{variant:"delta",as:"h2",children:d({id:"global.settings",defaultMessage:"Settings"})}),(0,e.jsxs)(T.y,{gap:6,children:[(0,e.jsx)(p.C,{col:6,s:12,children:(0,e.jsx)(C.M,{label:d({id:(0,t.g)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:c.default_role,hint:d({id:(0,t.g)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:i=>P({target:{name:"default_role",value:i}}),children:v.roles.map(i=>(0,e.jsx)(R.c,{value:i.type,children:i.name},i.type))})}),U.map(i=>{let g=c[i.name];return g||(g=i.type==="bool"?!1:""),(0,e.jsx)(p.C,{...i.size,children:(0,e.jsx)(a.u,{...i,value:g,error:n[i.name],disabled:i.name==="email_confirmation_redirection"&&c.email_confirmation===!1,onChange:P})},i.name)})]})]})})})]})})]})}}}]);
