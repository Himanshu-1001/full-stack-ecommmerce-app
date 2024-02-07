"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[2364],{89616:(Ct,F,n)=>{n.d(F,{U:()=>B});var t=n(19968),_=n(69372),$=n(5e3),f=n(6912),C=n(48936),Z=n(63358);const S=(0,_.cp)($.k)`
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
    fill: ${({theme:x})=>x.colors.primary600};
  }
`,N=(0,_.cp)($.k)`
  border-radius: 0 0 ${({theme:x})=>x.borderRadius} ${({theme:x})=>x.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,B=({children:x,icon:X,...w})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(f.c,{}),(0,t.jsx)(N,{as:"button",background:"primary100",padding:5,...w,children:(0,t.jsxs)(C.C,{children:[(0,t.jsx)(S,{"aria-hidden":!0,background:"primary200",children:X}),(0,t.jsx)($.k,{paddingLeft:3,children:(0,t.jsx)(Z.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:x})})]})})]})},64744:(Ct,F,n)=>{n.r(F),n.d(F,{default:()=>wt});var t=n(19968),_=n(48936),$=n(55716),f=n(5e3),C=n(63358),Z=n(42848),S=n(20464),N=n(76512),B=n(9752),x=n(35676),X=n(89616),w=n(23264),Et=n(28464),xt=n(42816),c=n(16048),yt=n(39716),L=n(48636),at=n(89940),Mt=n(71324),Dt=n(73560),Ot=n(98168),Tt=n(53305),jt=n(37776),O=n(85676),Pt=n(56781),rt=n(13192),lt=n(30840),W=n(14632),J=n(49008),U=n(62552),o=n(33104),d=n(83260),E=n(69372),Vt=n(21424),Yt=n(40748),Ht=n(35184),Gt=n(57520),Xt=n(61397),Jt=n(83180),Qt=n(96556),qt=n(97820),te=n(30680),ee=n(37132),ne=n(70516),oe=n(81112),se=n(12132),ie=n(64772),ae=n(42552),re=n(61152),le=n(18424),de=n(21968),ce=n(87144);const dt=E.cp.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,c.W8)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,c.W8)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:e,isChildOfDynamicZone:s,theme:i})=>s?`background-color: ${i.colors.primary200};`:e?`background-color: ${i.colors.primary200};`:`background: ${i.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function z({customRowComponent:e,component:s,isFromDynamicZone:i,isNestedInDZComponent:a,firstLoopComponentUid:p}){const{modifiedData:l}=(0,d.u)(),{schema:{attributes:g}}=O(l,["components",s],{schema:{attributes:[]}});return(0,t.jsx)(dt,{isChildOfDynamicZone:i,className:"component-row",children:(0,t.jsx)("td",{colSpan:12,children:(0,t.jsx)(V,{customRowComponent:e,items:g,targetUid:s,firstLoopComponentUid:p||s,editTarget:"components",isFromDynamicZone:i,isNestedInDZComponent:a,isSub:!0,secondLoopComponentUid:p?s:null})})})}z.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},z.propTypes={component:o.string,customRowComponent:o.func,firstLoopComponentUid:o.string,isFromDynamicZone:o.bool,isNestedInDZComponent:o.bool};function Q({isActive:e,icon:s}){return(0,t.jsx)(_.C,{alignItems:"center",background:e?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:(0,t.jsx)($.G,{as:d.C[s]||d.C.cube,height:5,width:5})})}Q.defaultProps={isActive:!1,icon:"Cube"},Q.propTypes={isActive:o.bool,icon:o.string};const ct=(0,E.cp)(f.k)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,c.W8)(8)};

  svg {
    width: ${(0,c.W8)(10)};
    height: ${(0,c.W8)(10)};

    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,vt=(0,E.cp)(_.C)`
  width: ${(0,c.W8)(140)};
  height: ${(0,c.W8)(80)};
  position: relative;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  background: ${({theme:e})=>e.colors.neutral100};
  border-radius: ${({theme:e})=>e.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};

    ${ct} {
      display: block;
    }

    ${C.O} {
      color: ${({theme:e})=>e.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:e})=>e.colors.primary200};
      color: ${({theme:e})=>e.colors.primary600};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.primary600};
        }
      }
    }
  }
`;function q({component:e,dzName:s,index:i,isActive:a,isInDevelopmentMode:p,onClick:l}){const{modifiedData:g,removeComponentFromDynamicZone:T}=(0,d.u)(),{schema:{icon:M,displayName:y}}=O(g,["components",e],{schema:{}}),m=r=>{r.stopPropagation(),T(s,i)};return(0,t.jsxs)(vt,{alignItems:"center",direction:"column",className:a?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:l,role:"tab",tabIndex:a?0:-1,cursor:"pointer","aria-selected":a,"aria-controls":`dz-${s}-panel-${i}`,id:`dz-${s}-tab-${i}`,children:[(0,t.jsx)(Q,{icon:M,isActive:a}),(0,t.jsx)(f.k,{marginTop:1,maxWidth:"100%",children:(0,t.jsx)(C.O,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:y})}),p&&(0,t.jsx)(ct,{as:"button",onClick:m,children:(0,t.jsx)(yt.c,{})})]})}q.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},q.propTypes={component:o.string,dzName:o.string.isRequired,index:o.number.isRequired,isActive:o.bool,isInDevelopmentMode:o.bool,onClick:o.func};const bt=(0,E.cp)(L.c)`
  width: ${(0,c.W8)(32)};
  height: ${(0,c.W8)(32)};
  padding: ${(0,c.W8)(9)};
  border-radius: ${(0,c.W8)(64)};
  background: ${({theme:e})=>e.colors.primary100};
  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Rt=(0,E.cp)(f.k)`
  height: ${(0,c.W8)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,It=(0,E.cp)(_.C)`
  width: 100%;
  overflow-x: auto;
`,At=(0,E.cp)(f.k)`
  padding-top: ${(0,c.W8)(90)};
`,Bt=(0,E.cp)(_.C)`
  flex-shrink: 0;
  width: ${(0,c.W8)(140)};
  height: ${(0,c.W8)(80)};
  justify-content: center;
  align-items: center;
`;function tt({customRowComponent:e,components:s,addComponent:i,name:a,targetUid:p}){const{isInDevelopmentMode:l}=(0,d.u)(),[g,T]=(0,U.useState)(0),{formatMessage:M}=(0,W.c)(),y=r=>{g!==r&&T(r)},m=()=>{i(a)};return(0,t.jsx)(dt,{className:"dynamiczone-row",isFromDynamicZone:!0,children:(0,t.jsxs)("td",{colSpan:12,children:[(0,t.jsx)(Rt,{paddingLeft:8,children:(0,t.jsxs)(It,{gap:2,children:[l&&(0,t.jsx)("button",{type:"button",onClick:m,children:(0,t.jsxs)(Bt,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(bt,{}),(0,t.jsx)(C.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:M({id:(0,d.g)("button.component.add"),defaultMessage:"Add a component"})})]})}),(0,t.jsx)(_.C,{role:"tablist",gap:2,children:s.map((r,u)=>(0,t.jsx)(q,{dzName:a,index:u,component:r,isActive:g===u,isInDevelopmentMode:l,onClick:()=>y(u)},r))})]})}),(0,t.jsx)(At,{children:s.map((r,u)=>{const h={customRowComponent:e,component:r};return(0,t.jsx)(f.k,{id:`dz-${a}-panel-${u}`,role:"tabpanel",tabindex:0,"aria-labelledby":`dz-${a}-tab-${u}`,style:{display:g===u?"block":"none"},children:(0,t.jsx)("table",{children:(0,t.jsx)("tbody",{children:(0,U.createElement)(z,{...h,isFromDynamicZone:!0,targetUid:p,key:r})})})},r)})})]})})}tt.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},tt.propTypes={addComponent:o.func,components:o.instanceOf(Array),customRowComponent:o.func,name:o.string,targetUid:o.string.isRequired};const Wt=(0,E.cp)(f.k)`
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
    fill: ${({theme:e,color:s})=>e.colors[`${s}600`]};
  }
`,$t=(0,E.cp)(f.k)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,pt=({children:e,icon:s,color:i,...a})=>(0,t.jsx)($t,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...a,children:(0,t.jsxs)(_.C,{children:[(0,t.jsx)(Wt,{color:i,"aria-hidden":!0,background:`${i}200`,children:s}),(0,t.jsx)(f.k,{paddingLeft:3,children:(0,t.jsx)(C.O,{variant:"pi",fontWeight:"bold",textColor:`${i}600`,children:e})})]})});pt.propTypes={color:o.string.isRequired,children:o.string.isRequired,icon:o.node.isRequired};const Lt=(0,E.cp)(f.k)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:e})=>e.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:e})=>e.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:e})=>e.colors.neutral600};
    outline-offset: -4px;
  }
`;function V({addComponentToDZ:e,customRowComponent:s,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,isMain:l,isNestedInDZComponent:g,isSub:T,items:M,secondLoopComponentUid:y,targetUid:m}){const{formatMessage:r}=(0,W.c)(),{trackUsage:u}=(0,c.m4)(),{isInDevelopmentMode:h,modifiedData:I,isInContentTypeView:P}=(0,d.u)(),{onOpenModalAddField:b}=(0,d.a)(),j=()=>{u("hasClickedCTBAddFieldBanner"),b({forTarget:i,targetUid:m})};return m?M.length===0&&l?(0,t.jsxs)(Z.o,{colCount:2,rowCount:2,children:[(0,t.jsx)(S.o,{children:(0,t.jsxs)(N.Tr,{children:[(0,t.jsx)(B.Th,{children:(0,t.jsx)(C.O,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(B.Th,{children:(0,t.jsx)(C.O,{variant:"sigma",textColor:"neutral600",children:r({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(c.YZ,{action:(0,t.jsx)(x.Z,{onClick:j,size:"L",startIcon:(0,t.jsx)(L.c,{}),variant:"secondary",children:r({id:(0,d.g)("table.button.no-fields"),defaultMessage:"Add new field"})}),colSpan:2,content:P?{id:(0,d.g)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,d.g)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})]}):(0,t.jsxs)(Lt,{children:[(0,t.jsx)(f.k,{paddingLeft:6,paddingRight:l?6:0,...l&&{style:{overflowX:"auto"}},children:(0,t.jsxs)("table",{children:[l&&(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(C.O,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)("th",{colSpan:"2",children:(0,t.jsx)(C.O,{variant:"sigma",textColor:"neutral600",children:r({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)("tbody",{children:M.map(v=>{const{type:A}=v,K=s;return(0,t.jsxs)(U.Fragment,{children:[(0,t.jsx)(K,{...v,isNestedInDZComponent:g,targetUid:m,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,secondLoopComponentUid:y}),A==="component"&&(0,t.jsx)(z,{...v,customRowComponent:s,targetUid:m,isNestedInDZComponent:p,editTarget:i,firstLoopComponentUid:a}),A==="dynamiczone"&&(0,t.jsx)(tt,{...v,customRowComponent:s,addComponent:e,targetUid:m})]},v.name)})})]})}),l&&h&&(0,t.jsx)(X.U,{icon:(0,t.jsx)(L.c,{}),onClick:j,children:r({id:(0,d.g)(`form.button.add.field.to.${I.contentType?I.contentType.schema.kind:i||"collectionType"}`),defaultMessage:"Add another field"})}),T&&h&&(0,t.jsx)(pt,{icon:(0,t.jsx)(L.c,{}),onClick:j,color:p?"primary":"neutral",children:r({id:(0,d.g)("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):(0,t.jsxs)(Z.o,{colCount:2,rowCount:2,children:[(0,t.jsx)(S.o,{children:(0,t.jsxs)(N.Tr,{children:[(0,t.jsx)(B.Th,{children:(0,t.jsx)(C.O,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),(0,t.jsx)(B.Th,{children:(0,t.jsx)(C.O,{variant:"sigma",textColor:"neutral600",children:r({id:"global.type",defaultMessage:"Type"})})})]})}),(0,t.jsx)(c.YZ,{colSpan:2,content:{id:(0,d.g)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}})]})}V.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},V.propTypes={addComponentToDZ:o.func,customRowComponent:o.func,editTarget:o.string.isRequired,firstLoopComponentUid:o.string,isFromDynamicZone:o.bool,isNestedInDZComponent:o.bool,isMain:o.bool,items:o.instanceOf(Array),secondLoopComponentUid:o.string,targetUid:o.string,isSub:o.bool};const Ut=(0,E.cp)(f.k)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e,color:s})=>e.colors[s]};
    display: block;
  }
`,Kt=E.cp.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,ut=e=>(0,t.jsx)(Ut,{children:(0,t.jsx)(Kt,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})});ut.propTypes={color:o.string.isRequired};const et=({content:e})=>lt(e);et.defaultProps={content:null},et.propTypes={content:o.string};const kt=(0,E.cp)(f.k)`
  position: relative;
`,nt=({type:e,customField:s,repeatable:i})=>{const{formatMessage:a}=(0,W.c)();let p=e;return["integer","biginteger","float","decimal"].includes(e)?p="number":["string"].includes(e)&&(p="text"),s?(0,t.jsx)(C.O,{children:a({id:(0,d.g)("attribute.customField"),defaultMessage:"Custom field"})}):(0,t.jsxs)(C.O,{children:[a({id:(0,d.g)(`attribute.${p}`),defaultMessage:e}),"\xA0",i&&a({id:(0,d.g)("component.repeatable"),defaultMessage:"(repeatable)"})]})};nt.defaultProps={customField:null,repeatable:!1},nt.propTypes={type:o.string.isRequired,customField:o.string,repeatable:o.bool};function ot({configurable:e,customField:s,editTarget:i,firstLoopComponentUid:a,isFromDynamicZone:p,name:l,onClick:g,relation:T,repeatable:M,secondLoopComponentUid:y,target:m,targetUid:r,type:u}){const{contentTypes:h,isInDevelopmentMode:I,removeAttribute:P}=(0,d.u)(),{formatMessage:b}=(0,W.c)(),j=u==="relation"&&T.includes("morph"),v=["integer","biginteger","float","decimal"].includes(u)?"number":u,A=O(h,[m],{}),K=O(A,["schema","displayName"],""),k=O(A,"plugin"),it=m?"relation":v,Y=()=>{j||e!==!1&&g(i,y||a||r,l,u,s)};let R;return y&&a?R=2:a?R=1:R=0,(0,t.jsxs)(kt,{as:"tr",...(0,c.on)({fn:Y,condition:I&&e&&!j}),children:[(0,t.jsxs)("td",{style:{position:"relative"},children:[R!==0&&(0,t.jsx)(ut,{color:p?"primary200":"neutral150"}),(0,t.jsxs)(_.C,{paddingLeft:2,gap:4,children:[(0,t.jsx)(d.A,{type:it,customField:s}),(0,t.jsx)(C.O,{fontWeight:"bold",children:l})]})]}),(0,t.jsx)("td",{children:m?(0,t.jsxs)(C.O,{children:[b({id:(0,d.g)(`modelPage.attribute.${j?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",(0,t.jsxs)("span",{style:{fontStyle:"italic"},children:[(0,t.jsx)(et,{content:K}),"\xA0",k&&`(${b({id:(0,d.g)("from"),defaultMessage:"from"})}: ${k})`]})]}):(0,t.jsx)(nt,{type:u,customField:s,repeatable:M})}),(0,t.jsx)("td",{children:I?(0,t.jsx)(_.C,{justifyContent:"flex-end",...c.Ii,children:e?(0,t.jsxs)(_.C,{gap:1,children:[!j&&(0,t.jsx)(w.w,{onClick:Y,label:`${b({id:"app.utils.edit",defaultMessage:"Edit"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(at.c,{})}),(0,t.jsx)(w.w,{onClick:H=>{H.stopPropagation(),P(i,l,y||a||"")},label:`${b({id:"global.delete",defaultMessage:"Delete"})} ${l}`,noBorder:!0,icon:(0,t.jsx)(Mt.c,{})})]}):(0,t.jsx)(Dt.c,{})}):(0,t.jsx)(f.k,{height:(0,c.W8)(32)})})]})}ot.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},ot.propTypes={configurable:o.bool,customField:o.string,editTarget:o.string.isRequired,firstLoopComponentUid:o.string,isFromDynamicZone:o.bool,name:o.string.isRequired,onClick:o.func,relation:o.string,repeatable:o.bool,secondLoopComponentUid:o.string,target:o.string,targetUid:o.string,type:o.string};const Ft=(0,U.memo)(ot),Zt=e=>{let s;switch(e){case"date":case"datetime":case"time":case"timestamp":s="date";break;case"integer":case"biginteger":case"decimal":case"float":s="number";break;case"string":case"text":s="text";break;case"":s="relation";break;default:s=e}return s},St={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},st=({disabled:e,isTemporary:s,isInContentTypeView:i,contentTypeKind:a,targetUid:p})=>{const{formatMessage:l}=(0,W.c)(),{push:g}=(0,J.Uz)(),{collectionTypesConfigurations:T,componentsConfigurations:M,singleTypesConfigurations:y}=St,m=l({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let r=T;const u=()=>(s||g(i?`/content-manager/collectionType/${p}/configurations/edit`:`/content-manager/components/${p}/configurations/edit`),!1);return i&&a==="singleType"&&(r=y),i||(r=M),(0,t.jsx)(c.Yj,{permissions:r,children:(0,t.jsx)(x.Z,{startIcon:(0,t.jsx)(Ot.c,{}),variant:"tertiary",onClick:u,disabled:s||e,children:m})})};st.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},st.propTypes={disabled:o.bool.isRequired,contentTypeKind:o.string,isInContentTypeView:o.bool,isTemporary:o.bool,targetUid:o.string};const Nt=(0,U.memo)(st),wt=()=>{const{initialData:e,modifiedData:s,isInDevelopmentMode:i,isInContentTypeView:a,submitData:p}=(0,d.u)(),{formatMessage:l}=(0,W.c)(),{trackUsage:g}=(0,c.m4)(),T=(0,J.SU)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:M,onOpenModalAddField:y,onOpenModalEditField:m,onOpenModalEditSchema:r,onOpenModalEditCustomField:u}=(0,d.a)(),h=a?"contentType":"component",I=[h,"schema","attributes"],P=O(s,[h,"uid"]),b=O(s,[h,"isTemporary"],!1),j=O(s,[h,"schema","kind"],null),v=O(s,I,[]),A=Pt(e,[h,"plugin"]),K=!rt(s,e),k=a?"contentType":"component",it=D=>{M({dynamicZoneTarget:D,targetUid:P})},Y=async(D,gt,mt,ht,_t)=>{const ft=Zt(ht);_t?u({forTarget:D,targetUid:gt,attributeName:mt,attributeType:ft,customFieldUid:_t}):m({forTarget:D,targetUid:gt,attributeName:mt,attributeType:ft,step:ht==="component"?"2":null})};let R=O(s,[h,"schema","displayName"],"");const H=O(s,[h,"schema","kind"],""),G=T?.params.currentUID==="create-content-type";!R&&G&&(R=l({id:(0,d.g)("button.model.create"),defaultMessage:"Create new collection type"}));const zt=()=>{const D=H||h;D==="collectionType"&&g("willEditNameOfContentType"),D==="singleType"&&g("willEditNameOfSingleType"),r({modalType:h,forTarget:h,targetUid:P,kind:D})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(J.K2,{message:D=>D.hash==="#back"?!1:l({id:(0,d.g)("prompt.unsaved")}),when:K}),(0,t.jsx)(Et.a,{id:"title",primaryAction:i&&(0,t.jsxs)(_.C,{gap:2,children:[!G&&(0,t.jsx)(x.Z,{startIcon:(0,t.jsx)(L.c,{}),variant:"secondary",onClick:()=>{y({forTarget:k,targetUid:P})},children:l({id:(0,d.g)("button.attributes.add.another"),defaultMessage:"Add another field"})}),(0,t.jsx)(x.Z,{startIcon:(0,t.jsx)(Tt.c,{}),onClick:()=>p(),type:"submit",disabled:rt(s,e),children:l({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:i&&!A&&!G&&(0,t.jsx)(x.Z,{startIcon:(0,t.jsx)(at.c,{}),variant:"tertiary",onClick:zt,children:l({id:"app.utils.edit",defaultMessage:"Edit"})}),title:lt(R),subtitle:l({id:(0,d.g)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:(0,t.jsx)(c.cH,{startIcon:(0,t.jsx)(jt.c,{}),to:"/plugins/content-type-builder/",children:l({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(xt.S,{children:(0,t.jsxs)(_.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsx)(_.C,{justifyContent:"flex-end",children:(0,t.jsx)(_.C,{gap:2,children:(0,t.jsx)(Nt,{targetUid:P,isTemporary:b,isInContentTypeView:a,contentTypeKind:j,disabled:G},"link-to-cm-settings-view")})}),(0,t.jsx)(f.k,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(V,{items:v,customRowComponent:D=>(0,t.jsx)(Ft,{...D,onClick:Y}),addComponentToDZ:it,targetUid:P,editTarget:k,isMain:!0})})]})})]})}}}]);
