(self.webpackChunkapi=self.webpackChunkapi||[]).push([[1168],{92268:G=>{function U(c,o,g,j){for(var C=-1,E=c==null?0:c.length;++C<E;){var y=c[C];o(j,y,g(y),c)}return j}G.exports=U},20456:(G,U,c)=>{var o=c(80232);function g(j,C,E,y){return o(j,function(B,P,L){C(y,B,E(B),L)}),y}G.exports=g},4068:(G,U,c)=>{var o=c(92268),g=c(20456),j=c(24020),C=c(75516);function E(y,B){return function(P,L){var Z=C(P)?o:g,ee=B?B():{};return Z(P,y,j(L,2),ee)}}G.exports=E},99256:(G,U,c)=>{var o=c(78456),g=1/0;function j(C){var E=C==null?0:C.length;return E?o(C,g):[]}G.exports=j},30680:(G,U,c)=>{var o=c(92188),g=c(4068),j=Object.prototype,C=j.hasOwnProperty,E=g(function(y,B,P){C.call(y,P)?y[P].push(B):o(y,P,[B])});G.exports=E},51168:(G,U,c)=>{"use strict";c.d(U,{P:()=>Tt,a:()=>Dt,u:()=>vt});var o=c(19968),g=c(62552),j=c(35676),C=c(48936),E=c(63358),y=c(5e3),B=c(32912),P=c(11208),L=c(2931),Z=c(25824),ee=c(3548),H=c(19576),D=c(32568),A=c(28724),k=c(70996),X=c(42616),w=c(34404),le=c(12248),ce=c(6496),se=c(53804),Y=c(80700),W=c(16048),J=c(56781),N=c(79804),r=c(33104),K=c(14632),Ae=c(43164),be=c(87144),_=c(69372),de=c(46596),Oe=c(14520),Te=c(64472),Xe=c(79484),T=c(85676),je=c(21968),ve=c(5848),Ee=c(39820),he=c(29088),ue=c(30680),Ce=c(30840),Es=c(99256),ne=c(38955),Ms=c(36196),Q=c(35184),De=c(96556),Ye=c(48632);const[Rs,Ps]=(0,Ae.G)("PermissionsDataManager"),pe=()=>Ps("usePermissionsDataManager"),As=_.cp.div`
  position: relative;

  ${({hasConditions:e,disabled:s,theme:n})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${s?n.colors.neutral100:n.colors.primary600};
    }
  `}
`,$e=({onClick:e,className:s,hasConditions:n,variant:t})=>{const{formatMessage:i}=(0,K.c)();return(0,o.jsx)(As,{hasConditions:n,className:s,children:(0,o.jsx)(j.Z,{variant:t,startIcon:(0,o.jsx)(de.c,{}),onClick:e,children:i({id:"global.settings",defaultMessage:"Settings"})})})};$e.defaultProps={className:null,hasConditions:!1,variant:"tertiary"},$e.propTypes={onClick:r.func.isRequired,className:r.string,hasConditions:r.bool,variant:r.string};const Me=(0,_.cp)($e)``,Ts=e=>Object.values(e).map(s=>Object.entries(s).filter(([,n])=>n).map(([n])=>n)).flat(),vs=e=>e.reduce((s,[n,t])=>(s.push({label:Ce(n),children:t.map(i=>({label:i.displayName,value:i.id}))}),s),[]),Ds=(e,s)=>e.map(([,n])=>n).flat().reduce((n,t)=>({[t.id]:s.includes(t.id),...n}),{}),Qe=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:s,isGrey:n,label:t,name:i,onChange:a,value:l})=>{const{formatMessage:d}=(0,K.c)(),p=u=>{a(i,Ds(e,u))};return(0,o.jsxs)(C.C,{as:"li",background:n?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,o.jsxs)(C.C,{paddingLeft:6,style:{width:180},children:[(0,o.jsxs)(E.O,{variant:"sigma",textColor:"neutral600",children:[d({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,o.jsx)(E.O,{variant:"sigma",title:t,textColor:"primary600",ellipsis:!0,children:d({id:`Settings.roles.form.permissions.${t.toLowerCase()}`,defaultMessage:t})}),(0,o.jsxs)(E.O,{variant:"sigma",textColor:"neutral600",children:["\xA0",d({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,o.jsx)(y.k,{style:{maxWidth:430,width:"100%"},children:(0,o.jsx)(B.U,{id:i,customizeContent:u=>`${u.length} currently selected`,onChange:p,value:Ts(l),options:vs(e),disabled:s})})]})};Qe.propTypes={arrayOfOptionsGroupedByCategory:r.array.isRequired,isFormDisabled:r.bool.isRequired,isGrey:r.bool.isRequired,label:r.string.isRequired,name:r.string.isRequired,value:r.object.isRequired,onChange:r.func.isRequired};const $s=(e,s)=>e.reduce((n,t)=>(n[t.id]=T(s,t.id,!1),n),{}),Ss=(e,s)=>e.reduce((n,t)=>{const[i,a]=t,l=$s(a,s);return n[i]=l,n},{}),Ls=(e,s,n)=>e.reduce((t,i)=>{const a=T(s,[...i.pathToConditionsObject,"conditions"],{}),l=Ss(n,a);return t[i.pathToConditionsObject.join("..")]=l,t},{}),Se=({actions:e,headerBreadCrumbs:s,isFormDisabled:n,onClosed:t,onToggle:i})=>{const{formatMessage:a}=(0,K.c)(),{availableConditions:l,modifiedData:d,onChangeConditions:p}=pe(),u=(0,g.useMemo)(()=>Object.entries(ue(l,"category")),[l]),m=e.filter(({isDisplayed:h,hasSomeActionsSelected:R,hasAllActionsSelected:O})=>h&&(R||O)),x=(0,g.useMemo)(()=>Ls(m,d,u),[m,d,u]),[b,$]=(0,g.useState)(x),M=(h,R)=>{$((0,he.cp)(O=>{O[h]||(O[h]={}),O[h].default||(O[h].default={}),O[h].default=R}))},f=()=>{const h=Object.entries(b).reduce((R,O)=>{const[v,V]=O,I=Object.values(V).reduce((F,S)=>({...F,...S}),{});return R[v]=I,R},{});p(h),i()};return(0,o.jsxs)(P.E,{labelledBy:"condition-modal-breadcrumbs",onClose:t,children:[(0,o.jsx)(L.k,{children:(0,o.jsx)(ve.M,{id:"condition-modal-breadcrumbs",label:s.join(", "),children:s.map((h,R,O)=>(0,o.jsx)(Ee.i,{isCurrent:R===O.length-1,children:Ce(a({id:h,defaultMessage:h}))},h))})}),(0,o.jsxs)(Z.a,{children:[m.length===0&&(0,o.jsx)(E.O,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,o.jsx)("ul",{children:m.map(({actionId:h,label:R,pathToConditionsObject:O},v)=>{const V=O.join("..");return(0,o.jsx)(Qe,{arrayOfOptionsGroupedByCategory:u,label:R,isFormDisabled:n,isGrey:v%2===0,name:V,onChange:M,value:T(b,V,{})},h)})})]}),(0,o.jsx)(ee._,{startActions:(0,o.jsx)(j.Z,{variant:"tertiary",onClick:i,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,o.jsx)(j.Z,{onClick:f,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})};Se.propTypes={actions:r.arrayOf(r.shape({actionId:r.string.isRequired,checkboxName:r.string,hasSomeActionsSelected:r.bool.isRequired,hasAllActionsSelected:r.bool,isDisplayed:r.bool.isRequired,label:r.string})).isRequired,headerBreadCrumbs:r.arrayOf(r.string).isRequired,isFormDisabled:r.bool.isRequired,onClosed:r.func.isRequired,onToggle:r.func.isRequired};const ge=`${120/16}rem`,Le=`${200/16}rem`,Re=`${53/16}rem`,Ie=_.cp.div`
  width: ${ge};
`,ze=(0,_.cp)(C.C)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,Be=({children:e,isCollapsable:s,isActive:n,isFormDisabled:t,label:i,onChange:a,onClick:l,checkboxName:d,someChecked:p,value:u})=>{const{formatMessage:m}=(0,K.c)();return(0,o.jsxs)(C.C,{alignItems:"center",paddingLeft:6,style:{width:Le,flexShrink:0},children:[(0,o.jsx)(y.k,{paddingRight:2,children:(0,o.jsx)(H.c,{name:d,"aria-label":m({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:i}),disabled:t,onValueChange:x=>a({target:{name:d,value:x}}),indeterminate:p,value:u})}),(0,o.jsxs)(ze,{title:i,alignItems:"center",isCollapsable:s,...s&&{onClick:l,"aria-expanded":n,onKeyDown:({key:x})=>(x==="Enter"||x===" ")&&l(),tabIndex:0,role:"button"},children:[(0,o.jsx)(E.O,{fontWeight:n?"bold":"",textColor:n?"primary600":"neutral800",ellipsis:!0,children:Ce(i)}),e]})]})};Be.defaultProps={children:null,checkboxName:"",onChange(){},value:!1,someChecked:!1,isCollapsable:!1},Be.propTypes={checkboxName:r.string,children:r.node,label:r.string.isRequired,isCollapsable:r.bool,isFormDisabled:r.bool.isRequired,onChange:r.func,onClick:r.func.isRequired,someChecked:r.bool,value:r.bool,isActive:r.bool.isRequired};const Ze=(0,g.memo)(Be),oe=e=>ne(e)?Es(Object.values(e).map(s=>ne(s)?oe(s):s)):[],ke=e=>e?Object.keys(e).reduce((s,n)=>(n!=="conditions"&&(s[n]=e[n]),s),{}):null,ie=e=>{const s=ke(e),n=oe(s);if(!n.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const t=n.every(a=>a),i=n.some(a=>a)&&!t;return{hasAllActionsSelected:t,hasSomeActionsSelected:i}},ye=(0,_.cp)(Oe.c)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,xe=e=>`
  ${E.O} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold}
  }
  ${ye} {
    display: block;
    path {
      fill: ${e.colors.primary600}
    };
  }
`,Is=(e,s,n)=>e.map(({actionId:t,isDisplayed:i,applyToProperties:a,label:l})=>{if(!i)return{actionId:t,hasSomeActionsSelected:!1,isDisplayed:i};const d=[...n.split(".."),t],p=N(a)?[...d,"properties","enabled"]:d,u=p.join(".."),m=T(s,[...d,"conditions"],null),x=oe(m).some(f=>f);if(N(a)){const f=T(s,p,!1);return{actionId:t,checkboxName:u,hasAllActionsSelected:f,hasConditions:x,hasSomeActionsSelected:f,isDisplayed:i,isParentCheckbox:!1,label:l,pathToConditionsObject:d}}const b=T(s,p,null),{hasAllActionsSelected:$,hasSomeActionsSelected:M}=ie(b);return{actionId:t,checkboxName:u,hasAllActionsSelected:$,hasConditions:x,hasSomeActionsSelected:M,isDisplayed:i,isParentCheckbox:!0,label:l,pathToConditionsObject:d}}),We=(e,s)=>`
  ${Je} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
  }
  ${ss} {
    display: flex;
  }
  ${Me} {
    display: block;
  }
  &:hover {
   ${xe(e)}
  }

  &:focus-within {
    ${({theme:n,isActive:t})=>We(n,t)}
  }
  
`,Je=_.cp.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: ${Re};
  background-color: ${({isGrey:e,theme:s})=>e?s.colors.neutral100:s.colors.neutral0};
  border: 1px solid transparent;
`,Bs=_.cp.div`
  display: inline-flex;
  min-width: 100%;

  ${Me} {
    display: none;
  }
  ${({isActive:e,theme:s})=>e&&We(s,e)}
  &:hover {
    ${({theme:e,isActive:s})=>We(e,s)}
  }
`,es=(0,_.cp)(C.C)`
  width: ${ge};
  position: relative;
`,ss=(0,_.cp)(y.k)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,ts=_.cp.span`
  position: absolute;
  top: -6px;
  left: 37px;
  width: 6px;
  height: 6px;
  border-radius: 20px;
  background: ${({theme:e})=>e.colors.primary600};
`,ks=(0,_.cp)(y.k)`
  position: absolute;
  right: 9px;
  transform: translateY(10px);
`,ns=({availableActions:e,isActive:s,isGrey:n,isFormDisabled:t,label:i,onClickToggle:a,pathToData:l})=>{const[d,p]=(0,g.useState)(!1),{formatMessage:u}=(0,K.c)(),{modifiedData:m,onChangeParentCheckbox:x,onChangeSimpleCheckbox:b}=pe(),$=()=>{p(I=>!I)},M=()=>{p(!1)},f=T(m,l.split(".."),{}),h=(0,g.useMemo)(()=>Object.keys(f).reduce((I,F)=>(I[F]=je(f[F],"conditions"),I),{}),[f]),{hasAllActionsSelected:R,hasSomeActionsSelected:O}=ie(h),v=(0,g.useMemo)(()=>Is(e,m,l),[e,m,l]),V=v.some(({hasConditions:I})=>I);return(0,o.jsxs)(Bs,{isActive:s,children:[(0,o.jsxs)(Je,{isGrey:n,children:[(0,o.jsx)(Ze,{isCollapsable:!0,isFormDisabled:t,label:i,checkboxName:l,onChange:x,onClick:a,someChecked:O,value:R,isActive:s,children:(0,o.jsx)(ss,{paddingLeft:2,children:s?(0,o.jsx)(Te.c,{}):(0,o.jsx)(Xe.c,{})})}),(0,o.jsx)(C.C,{style:{flex:1},children:v.map(({actionId:I,hasConditions:F,hasAllActionsSelected:S,hasSomeActionsSelected:z,isDisplayed:me,isParentCheckbox:q,checkboxName:te,label:_e})=>me?q?(0,o.jsxs)(es,{justifyContent:"center",alignItems:"center",children:[F&&(0,o.jsx)(ts,{}),(0,o.jsx)(H.c,{disabled:t,name:te,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${_e} ${i}`}),onValueChange:re=>{x({target:{name:te,value:re}})},indeterminate:z,value:S})]},I):(0,o.jsxs)(es,{justifyContent:"center",alignItems:"center",children:[F&&(0,o.jsx)(ts,{}),(0,o.jsx)(H.c,{disabled:t,indeterminate:F,name:te,onValueChange:re=>{b({target:{name:te,value:re}})},value:S})]},I):(0,o.jsx)(Ie,{},I))}),d&&(0,o.jsx)(Se,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:v,isFormDisabled:t,onClosed:M,onToggle:$})]}),(0,o.jsx)(ks,{children:(0,o.jsx)(Me,{onClick:$,hasConditions:V})})]})};ns.propTypes={availableActions:r.array.isRequired,isActive:r.bool.isRequired,isGrey:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggle:r.func.isRequired,pathToData:r.string.isRequired};const Ws=_.cp.span`
  color: ${({theme:e})=>e.colors.danger700};
  padding-left: ${({theme:e})=>e.spaces[1]}px;
`,os=()=>(0,o.jsx)(Ws,{children:"*"}),Ks=(e,s)=>e.map(n=>{const t=Array.isArray(n.subjects)&&n.subjects.indexOf(s)!==-1;return{...n,isDisplayed:t}}),Us=(0,_.cp)(y.k)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,Fs=_.cp.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:s})=>e.colors[s]};
  }
`,Ke=e=>(0,o.jsx)(Us,{children:(0,o.jsx)(Fs,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})});Ke.defaultProps={fill:"primary200"},Ke.propTypes={fill:r.string};const Ns=(0,g.memo)(Ke),is=(0,_.cp)(C.C)`
  width: ${ge};
  position: relative;
`,Gs=(0,_.cp)(C.C)`
  height: ${Re};
`,Vs=(0,_.cp)(y.k)`
  padding-left: ${31/16}rem;
`,ws=(0,_.cp)(y.k)`
  border-left: ${({isVisible:e,theme:s})=>e?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,qs=(0,_.cp)(C.C)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${ye} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${xe(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&xe(s)};
`,Hs=_.cp.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Ue=({childrenForm:e,isFormDisabled:s,recursiveLevel:n,pathToDataFromActionRow:t,propertyActions:i,parentName:a,propertyName:l})=>{const{formatMessage:d}=(0,K.c)(),{modifiedData:p,onChangeParentCheckbox:u,onChangeSimpleCheckbox:m}=pe(),[x,b]=(0,g.useState)(null),$=f=>{b(h=>h===f?null:f)},M=(0,g.useMemo)(()=>x?e.find(({value:f})=>f===x):null,[x,e]);return(0,o.jsxs)(Vs,{children:[(0,o.jsx)(Hs,{}),e.map(({label:f,value:h,required:R,children:O},v)=>{const V=v+1<e.length,I=Array.isArray(O),F=x===h;return(0,o.jsxs)(ws,{isVisible:V,children:[(0,o.jsxs)(Gs,{children:[(0,o.jsx)(Ns,{color:"primary200"}),(0,o.jsxs)(C.C,{style:{flex:1},children:[(0,o.jsx)(qs,{level:n,isActive:F,isCollapsable:I,children:(0,o.jsxs)(ze,{alignItems:"center",isCollapsable:I,...I&&{onClick:()=>$(h),"aria-expanded":F,onKeyDown:({key:S})=>(S==="Enter"||S===" ")&&$(h),tabIndex:0,role:"button"},title:f,children:[(0,o.jsx)(E.O,{ellipsis:!0,children:Ce(f)}),R&&(0,o.jsx)(os,{}),(0,o.jsx)(ye,{$isActive:F})]})}),(0,o.jsx)(C.C,{style:{flex:1},children:i.map(({actionId:S,label:z,isActionRelatedToCurrentProperty:me})=>{if(!me)return(0,o.jsx)(Ie,{},S);const q=[...t.split(".."),S,"properties",l,...a.split(".."),h],te=T(p,q,!1);if(!O)return(0,o.jsx)(is,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(H.c,{disabled:s,name:q.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${f} ${z}`}),onValueChange:ae=>{m({target:{name:q.join(".."),value:ae}})},value:te})},z);const{hasAllActionsSelected:_e,hasSomeActionsSelected:re}=ie(te);return(0,o.jsx)(is,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(H.c,{disabled:s,name:q.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${f} ${z}`}),onValueChange:ae=>{u({target:{name:q.join(".."),value:ae}})},value:_e,indeterminate:re},z)},z)})})]})]}),M&&F&&(0,o.jsx)(y.k,{paddingBottom:2,children:(0,o.jsx)(Ue,{isFormDisabled:s,parentName:`${a}..${h}`,pathToDataFromActionRow:t,propertyActions:i,propertyName:l,recursiveLevel:n+1,childrenForm:M.children})})]},h)})]})};Ue.propTypes={childrenForm:r.array.isRequired,isFormDisabled:r.bool.isRequired,parentName:r.string.isRequired,pathToDataFromActionRow:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,recursiveLevel:r.number.isRequired};const Xs=(0,g.memo)(Ue),Ys=e=>e.reduce((n,t)=>(t.isActionRelatedToCurrentProperty&&n.push(t.actionId),n),[]),Qs=(e,s,n,t,i)=>{const l=Ys(e).reduce((d,p)=>{const u=[...n.split(".."),p,"properties",t,i],m=T(s,u,!1);return d[p]=m,d},{});return ie(l)},rs=(0,_.cp)(C.C)`
  width: ${ge};
  position: relative;
`,zs=(0,_.cp)(C.C)`
  height: ${Re};
  flex: 1;

  ${({isCollapsable:e,theme:s})=>e&&`
      ${ye} {
        display: block;
        color: ${s.colors.neutral100};
      }
      &:hover {
        ${xe(s)}
      }
  `}
  ${({isActive:e,theme:s})=>e&&xe(s)};
`,Fe=({childrenForm:e,label:s,isFormDisabled:n,name:t,required:i,pathToData:a,propertyActions:l,propertyName:d,isOdd:p})=>{const{formatMessage:u}=(0,K.c)(),[m,x]=(0,g.useState)(null),{modifiedData:b,onChangeCollectionTypeLeftActionRowCheckbox:$,onChangeParentCheckbox:M,onChangeSimpleCheckbox:f}=pe(),h=m===t,R=(0,g.useMemo)(()=>Array.isArray(e)?e:[],[e]),O=R.length>0,v=(0,g.useCallback)(()=>{O&&x(S=>S===t?null:t)},[O,t]),V=({target:{value:S}})=>{$(a,d,t,S)},{hasAllActionsSelected:I,hasSomeActionsSelected:F}=(0,g.useMemo)(()=>Qs(l,b,a,d,t),[l,b,a,d,t]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(zs,{alignItems:"center",isCollapsable:O,isActive:h,background:p?"neutral100":"neutral0",children:(0,o.jsxs)(C.C,{children:[(0,o.jsxs)(Ze,{onChange:V,onClick:v,isCollapsable:O,isFormDisabled:n,label:s,someChecked:F,value:I,isActive:h,children:[i&&(0,o.jsx)(os,{}),(0,o.jsx)(ye,{$isActive:h})]}),(0,o.jsx)(C.C,{children:l.map(({label:S,isActionRelatedToCurrentProperty:z,actionId:me})=>{if(!z)return(0,o.jsx)(Ie,{},S);const q=[...a.split(".."),me,"properties",d,t];if(!O){const ae=T(b,q,!1);return(0,o.jsx)(rs,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(H.c,{disabled:n,name:q.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${S}`}),onValueChange:$t=>{f({target:{name:q.join(".."),value:$t}})},value:ae})},me)}const te=T(b,q,{}),{hasAllActionsSelected:_e,hasSomeActionsSelected:re}=ie(te);return(0,o.jsx)(rs,{justifyContent:"center",alignItems:"center",children:(0,o.jsx)(H.c,{disabled:n,name:q.join(".."),onValueChange:ae=>{M({target:{name:q.join(".."),value:ae}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${S}`}),value:_e,indeterminate:re})},S)})})]})}),h&&(0,o.jsx)(Xs,{childrenForm:R,isFormDisabled:n,parentName:t,pathToDataFromActionRow:a,propertyName:d,propertyActions:l,recursiveLevel:0})]})};Fe.defaultProps={childrenForm:[],required:!1},Fe.propTypes={childrenForm:r.array,label:r.string.isRequired,isFormDisabled:r.bool.isRequired,name:r.string.isRequired,pathToData:r.string.isRequired,propertyActions:r.array.isRequired,propertyName:r.string.isRequired,required:r.bool,isOdd:r.bool.isRequired};const Zs=(0,g.memo)(Fe),as=(0,_.cp)(C.C)`
  width: ${ge};
  flex-shrink: 0;
`,Js=(0,_.cp)(C.C)`
  width: ${Le};
  height: ${Re};
  flex-shrink: 0;
`,ls=({headers:e,label:s})=>{const{formatMessage:n}=(0,K.c)(),t=n({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s});return(0,o.jsxs)(C.C,{children:[(0,o.jsx)(Js,{alignItems:"center",paddingLeft:6,children:(0,o.jsx)(E.O,{variant:"sigma",textColor:"neutral500",children:t})}),e.map(i=>i.isActionRelatedToCurrentProperty?(0,o.jsx)(as,{justifyContent:"center",children:(0,o.jsx)(E.O,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${i.label.toLowerCase()}`,defaultMessage:i.label})})},i.label):(0,o.jsx)(as,{},i.label))]})};ls.propTypes={headers:r.arrayOf(r.shape({label:r.string.isRequired,isActionRelatedToCurrentProperty:r.bool.isRequired})).isRequired,label:r.string.isRequired};const et=(e,s)=>e.map(n=>{const t=Array.isArray(n.applyToProperties)&&n.applyToProperties.indexOf(s)!==-1&&n.isDisplayed;return{label:n.label,actionId:n.actionId,isActionRelatedToCurrentProperty:t}}),st=_.cp.div`
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
`,cs=({availableActions:e,childrenForm:s,isFormDisabled:n,label:t,pathToData:i,propertyName:a})=>{const l=(0,g.useMemo)(()=>et(e,a),[e,a]);return(0,o.jsxs)(st,{children:[(0,o.jsx)(ls,{label:t,headers:l}),(0,o.jsx)(y.k,{children:s.map(({children:d,label:p,value:u,required:m},x)=>(0,o.jsx)(Zs,{childrenForm:d,label:p,isFormDisabled:n,name:u,required:m,propertyActions:l,pathToData:i,propertyName:a,isOdd:x%2===0},u))})]})};cs.propTypes={childrenForm:r.array.isRequired,availableActions:r.array.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,pathToData:r.string.isRequired,propertyName:r.string.isRequired};const tt=_.cp.div`
  flex-direction: column;
  display: inline-flex;
  min-width: 100%;
  ${({theme:e,isActive:s})=>s&&`border: 1px solid ${e.colors.primary600};`}
`,ds=({allActions:e,contentTypeName:s,label:n,index:t,isActive:i,isFormDisabled:a,onClickToggleCollapse:l,pathToData:d,properties:p})=>{const u=(0,g.useCallback)(()=>{l(s)},[s,l]),m=(0,g.useMemo)(()=>Ks(e,s),[e,s]);return(0,o.jsxs)(tt,{isActive:i,children:[(0,o.jsx)(ns,{availableActions:m,isActive:i,isGrey:t%2===0,isFormDisabled:a,label:n,onClickToggle:u,pathToData:d}),i&&p.map(({label:x,value:b,children:$})=>(0,o.jsx)(cs,{availableActions:m,childrenForm:$,isFormDisabled:a,label:x,pathToData:d,propertyName:b},b))]})};ds.propTypes={allActions:r.array.isRequired,contentTypeName:r.string.isRequired,index:r.number.isRequired,isActive:r.bool.isRequired,isFormDisabled:r.bool.isRequired,label:r.string.isRequired,onClickToggleCollapse:r.func.isRequired,pathToData:r.string.isRequired,properties:r.array.isRequired};const Ne=({actions:e,isFormDisabled:s,pathToData:n,subjects:t})=>{const[i,a]=(0,g.useState)(null),l=d=>{a(i===d?null:d)};return t.map(({uid:d,label:p,properties:u},m)=>(0,o.jsx)(ds,{allActions:e,contentTypeName:d,label:p,isActive:i===d,isFormDisabled:s,index:m,onClickToggleCollapse:l,pathToData:`${n}..${d}`,properties:u},d))};Ne.defaultProps={actions:[],subjects:[]},Ne.propTypes={actions:r.array.isRequired,isFormDisabled:r.bool.isRequired,pathToData:r.string.isRequired,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))};const nt=(0,g.memo)(Ne),ot=e=>e.filter(({subjects:s})=>s&&s.length),it=e=>e.map(({actionId:s})=>s),rt=(e,s)=>e.reduce((n,t)=>(Object.keys(s).forEach(i=>{const a=T(s,[i,t],{}),l={[i]:ke(a)};n[t]?n[t]={...n[t],...l}:n[t]=l}),n),{}),at=(e,s)=>{const n=it(e),t=rt(n,s);return Object.keys(t).reduce((a,l)=>(a[l]=ie(t[l]),a),{})},lt=(0,_.cp)(C.C)`
  width: ${ge};
  flex-shrink: 0;
`,Ge=({actions:e,isFormDisabled:s,kind:n})=>{const{formatMessage:t}=(0,K.c)(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:a}=pe(),l=(0,g.useMemo)(()=>ot(e),[e]),d=(0,g.useMemo)(()=>at(l,i[n]),[i,l,n]);return(0,o.jsx)(y.k,{paddingBottom:4,paddingTop:6,style:{paddingLeft:Le},children:(0,o.jsx)(C.C,{gap:0,children:l.map(({label:p,actionId:u})=>(0,o.jsxs)(lt,{direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,o.jsx)(E.O,{variant:"sigma",textColor:"neutral500",children:t({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),(0,o.jsx)(H.c,{disabled:s,onValueChange:m=>{a(n,u,m)},name:u,"aria-label":t({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:t({id:`Settings.roles.form.permissions.${p.toLowerCase()}`,defaultMessage:p})}),value:T(d,[u,"hasAllActionsSelected"],!1),indeterminate:T(d,[u,"hasSomeActionsSelected"],!1)})]},u))})})};Ge.defaultProps={actions:[]},Ge.propTypes={actions:r.arrayOf(r.shape({label:r.string.isRequired,actionId:r.string.isRequired,subjects:r.array.isRequired})),isFormDisabled:r.bool.isRequired,kind:r.string.isRequired};const ct=(0,g.memo)(Ge),dt=(0,_.cp)(y.k)`
  overflow-x: auto;
`,us=({isFormDisabled:e,kind:s,layout:{actions:n,subjects:t}})=>{const i=be([...t],"label");return(0,o.jsxs)(dt,{background:"neutral0",children:[(0,o.jsx)(ct,{actions:n,kind:s,isFormDisabled:e}),(0,o.jsx)(nt,{actions:n,isFormDisabled:e,pathToData:s,subjects:i})]})};us.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.shape({actions:r.array,subjects:r.arrayOf(r.shape({uid:r.string.isRequired,label:r.string.isRequired,properties:r.array.isRequired}))}).isRequired};const ps=(0,g.memo)(us),ut=(e,s,n)=>e.map(t=>{const i=[...n,t.action,"properties","enabled"],a=T(s,i,!1),l=T(s,[...n,t.action,"conditions"],{}),d=oe(l).some(p=>p);return{...t,isDisplayed:a,checkboxName:i.join(".."),hasSomeActionsSelected:a,value:a,hasConditions:d,label:t.displayName,actionId:t.action,pathToConditionsObject:[...n,t.action]}}),pt=e=>{const s=Object.entries(e).reduce((t,i)=>{const[a,{conditions:l}]=i;return t[a]=l,t},{});return oe(s).some(t=>t)},gt=_.cp.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,mt=_.cp.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:s,theme:n})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${s?n.colors.neutral100:n.colors.primary600};
    }
  `}
`,gs=({categoryName:e,isFormDisabled:s,subCategoryName:n,actions:t,pathToData:i})=>{const[a,l]=(0,g.useState)(!1),{modifiedData:d,onChangeParentCheckbox:p,onChangeSimpleCheckbox:u}=pe(),{formatMessage:m}=(0,K.c)(),x=T(d,i,{}),b=(0,g.useMemo)(()=>Object.keys(x).reduce((v,V)=>(v[V]=ke(x[V]),v),{}),[x]),{hasAllActionsSelected:$,hasSomeActionsSelected:M}=ie(b),f=()=>{l(v=>!v)},h=()=>{l(!1)},R=ut(t,d,i),O=pt(T(d,[...i],{}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(y.k,{children:[(0,o.jsxs)(C.C,{justifyContent:"space-between",alignItems:"center",children:[(0,o.jsx)(y.k,{paddingRight:4,children:(0,o.jsx)(E.O,{variant:"sigma",textColor:"neutral600",children:n})}),(0,o.jsx)(gt,{}),(0,o.jsx)(y.k,{paddingLeft:4,children:(0,o.jsx)(D.y,{name:i.join(".."),disabled:s,onValueChange:v=>{p({target:{name:i.join(".."),value:v}})},indeterminate:M,value:$,children:m({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,o.jsxs)(C.C,{paddingTop:6,paddingBottom:6,children:[(0,o.jsx)(A.y,{gap:2,style:{flex:1},children:R.map(({checkboxName:v,value:V,action:I,displayName:F,hasConditions:S})=>(0,o.jsx)(k.C,{col:3,children:(0,o.jsx)(mt,{disabled:s,hasConditions:S,children:(0,o.jsx)(D.y,{name:v,disabled:s,onValueChange:z=>{u({target:{name:v,value:z}})},value:V,children:F})})},I))}),(0,o.jsx)(Me,{hasConditions:O,onClick:f})]})]}),a&&(0,o.jsx)(Se,{headerBreadCrumbs:[e,n],actions:R,isFormDisabled:s,onClosed:h,onToggle:f})]})};gs.propTypes={actions:r.array.isRequired,categoryName:r.string.isRequired,isFormDisabled:r.bool.isRequired,subCategoryName:r.string.isRequired,pathToData:r.array.isRequired};const Ve=({childrenForm:e,kind:s,name:n,isOpen:t,isFormDisabled:i,isWhite:a,onOpenCategory:l,pathToData:d})=>{const{formatMessage:p}=(0,K.c)(),u=()=>{l(n)},m=(0,g.useMemo)(()=>n.split("::").pop(),[n]);return(0,o.jsxs)(X.G,{expanded:t,onToggle:u,id:`accordion-${n}`,variant:a?"primary":"secondary",children:[(0,o.jsx)(w.M,{title:Ce(m),description:`${p({id:"Settings.permissions.category"},{category:m})} ${s==="plugins"?"plugin":s}`}),(0,o.jsx)(le.u,{children:(0,o.jsx)(y.k,{padding:6,children:e.map(({actions:x,subCategoryName:b,subCategoryId:$})=>(0,o.jsx)(gs,{actions:x,categoryName:m,isFormDisabled:i,subCategoryName:b,pathToData:[...d,$]},b))})})]})};Ve.defaultProps={},Ve.propTypes={childrenForm:r.array.isRequired,isOpen:r.bool.isRequired,isFormDisabled:r.bool.isRequired,isWhite:r.bool.isRequired,kind:r.string.isRequired,name:r.string.isRequired,onOpenCategory:r.func.isRequired,pathToData:r.array.isRequired};const we=({isFormDisabled:e,kind:s,layout:n})=>{const[t,i]=(0,g.useState)(null),a=l=>{i(l===t?null:l)};return(0,o.jsx)(y.k,{padding:6,background:"neutral0",children:n.map(({category:l,categoryId:d,childrenForm:p},u)=>(0,o.jsx)(Ve,{childrenForm:p,kind:s,isFormDisabled:e,isOpen:t===l,isWhite:u%2===1,name:l,onOpenCategory:a,pathToData:[s,d]},l))})};we.propTypes={isFormDisabled:r.bool.isRequired,kind:r.string.isRequired,layout:r.arrayOf(r.shape({category:r.string.isRequired,categoryId:r.string.isRequired,childrenForm:r.arrayOf(r.shape({actions:r.array.isRequired})).isRequired}).isRequired).isRequired};const ms=(e,s,n)=>e.find(t=>t.action===s&&t.subject===n),hs=(e,s=[])=>e.reduce((n,t)=>(n[t.id]=s.indexOf(t.id)!==-1,n),{}),Cs=({children:e},s,n="")=>e.reduce((t,i)=>{if(i.children)return{...t,[i.value]:Cs(i,s,`${n}${i.value}.`)};const a=s.indexOf(`${n}${i.value}`)!==-1;return t[i.value]=a,t},{}),ht=(e,s,n)=>e.reduce((t,i)=>{const a=s.properties.find(({value:l})=>l===i);if(a){const l=T(n,["properties",a.value],[]),d=Cs(a,l);t.properties[i]=d}return t},{properties:{}}),Ct=(e,s)=>s.reduce((n,t)=>{const i=e.find(({uid:a})=>a===t)||null;return i&&(n[t]=i),n},{}),ys=({subjects:e},s,n,t=[])=>s.reduce((i,a)=>{const l=a.subjects,d=Ct(e,l);if(N(d))return i;const p=Object.keys(d).reduce((u,m)=>{const{actionId:x,applyToProperties:b}=a,f=d[m].properties.map(({value:v})=>v).every(v=>(b||[]).indexOf(v)===-1),h=ms(t,x,m),R=hs(n,T(h,"conditions",[]));if(N(b)||f)return Q(u,[m,x],{properties:{enabled:h!==void 0},conditions:R}),u;const O=ht(b,d[m],h);return Q(u,[m,x],{...O,conditions:R}),u},{});return Ms(i,p)},{}),yt=(e,s,n)=>e.reduce((t,i)=>{const a=ms(n,i.action,null);return t[i.action]={properties:{enabled:a!==void 0},conditions:hs(s,a?.conditions??[])},t},{}),xt=(e,s,n)=>e.reduce((t,i)=>(t[i.subCategoryId]=yt(i.actions,s,n),t),{}),xs=(e,s,n=[])=>e.reduce((t,{categoryId:i,childrenForm:a})=>{const l=xt(a,s,n);return t[i]=l,t},{}),fs=e=>e.split(" ").join("-"),_s=(e,s)=>Object.entries(ue(e,s)).map(([n,t])=>({category:n,categoryId:fs(n),childrenForm:Object.entries(ue(t,"subCategory")).map(([i,a])=>({subCategoryName:i,subCategoryId:fs(i),actions:a}))})),ft=(e,s)=>{const{conditions:n,sections:{collectionTypes:t,singleTypes:i,plugins:a,settings:l}}=e,d={collectionTypes:t,singleTypes:i,plugins:_s(a,"plugin"),settings:_s(l,"category")},p={collectionTypes:ys(t,t.actions||[],n,s),singleTypes:ys(i,i.actions||[],n,s),plugins:xs(d.plugins,n,s),settings:xs(d.settings,n,s)};return{initialData:p,modifiedData:p,layouts:d}},Pe=e=>Object.keys(e).reduce((s,n)=>{const t=e[n];if(ne(t)&&!J(t,"conditions"))return{...s,[n]:Pe(t)};if(ne(t)&&J(t,"conditions")&&!oe(je(t,"conditions")).some(a=>a)){const a=Object.keys(t.conditions).reduce((l,d)=>(l[d]=!1,l),{});return{...s,[n]:{...t,conditions:a}}}return s[n]=t,s},{}),fe=(e,s,n=!1)=>Object.keys(e).reduce((t,i)=>{const a=e[i];return i==="conditions"&&!n?(t[i]=a,t):ne(a)?{...t,[i]:fe(a,s,i==="fields")}:(t[i]=s,t)},{}),_t={initialData:{},modifiedData:{},layouts:{}},bt=(e,s)=>(0,he.cp)(e,n=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:t,actionId:i,value:a}=s,l=["modifiedData",t];Object.keys(T(e,l)).forEach(d=>{const p=T(e,[...l,d,i],void 0);if(p){let u=fe(p,a);if(!a&&u.conditions){const m=fe(u.conditions,!1);u={...u,conditions:m}}Q(n,[...l,d,i],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:t,propertyName:i,rowName:a,value:l}=s;let d=De(e.modifiedData);const p=t.split(".."),u=T(d,p,{});Object.keys(u).forEach(m=>{if(J(u[m],`properties.${i}`)){const x=T(u,[m,"properties",i,a]),b=[...p,m,"properties",i,a];if(!ne(x))Q(d,b,l);else{const $=fe(x,l);Q(d,b,$)}}}),l||(d=Pe(d)),Q(n,"modifiedData",d);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(t=>{const[i,a]=t;Q(n,["modifiedData",...i.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let t=De(e.modifiedData);Q(t,[...s.keys.split("..")],s.value),s.value||(t=Pe(t)),Q(n,"modifiedData",t);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:t,value:i}=s,a=[...t.split("..")];let l=De(e.modifiedData);const d=T(l,a,{}),p=fe(d,i);Q(l,a,p),i||(l=Pe(l)),Q(n,["modifiedData"],l);break}case"RESET_FORM":{n.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{n.initialData=e.modifiedData;break}default:return n}}),qe=e=>Object.entries(e).filter(([,s])=>s).map(([s])=>s),Ot=e=>{const[s,{conditions:n}]=e;return{action:s,subject:null,conditions:qe(n),properties:{}}},jt=e=>Object.values(e).reduce((s,n)=>{const t=Object.entries(n).reduce((i,a)=>{const[,{properties:{enabled:l}}]=a;if(!l)return i;const d=Ot(a);return i.push(d),i},[]);return[...s,...t]},[]),bs=e=>Object.values(e).reduce((s,n)=>{const t=jt(n);return[...s,...t]},[]),Os=(e,s="")=>Object.entries(e).reduce((n,t)=>{const[i,a]=t;return ne(a)?[...n,...Os(a,`${s}${i}.`)]:(a&&!ne(a)&&n.push(`${s}${i}`),n)},[]),Et=(e,s,{conditions:n,properties:t})=>Object.entries(t).reduce((i,a)=>{const[l,d]=a;return i.properties[l]=Os(d),i},{action:e,subject:s,conditions:qe(n),properties:{}}),Mt=(e,s,{conditions:n})=>({action:e,subject:s,properties:{},conditions:qe(n)}),Rt=(e,s)=>Object.entries(s).reduce((t,i)=>{const[a,l]=i;if(!oe(l).some(u=>u))return t;if(!l?.properties?.enabled){const u=Et(a,e,l);return[...t,u]}if(!l.properties.enabled)return t;const p=Mt(a,e,l);return t.push(p),t},[]),js=e=>Object.entries(e).reduce((n,t)=>{const[i,a]=t,l=Rt(i,a);return[...n,...l]},[]),Pt=e=>{const s=bs(e.plugins),n=bs(e.settings),t=js(e.collectionTypes),i=js(e.singleTypes);return[...s,...n,...t,...i]},At=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],He=(0,g.forwardRef)(({layout:e,isFormDisabled:s,permissions:n},t)=>{const[{initialData:i,layouts:a,modifiedData:l},d]=(0,g.useReducer)(bt,_t,()=>ft(e,n)),{formatMessage:p}=(0,K.c)();(0,g.useImperativeHandle)(t,()=>({getPermissions(){const M=(0,W.o1)(i.collectionTypes,l.collectionTypes),f=(0,W.o1)(i.singleTypes,l.singleTypes),h={...M,...f};let R;return N(h)?R=!1:R=Object.values(h).some(O=>Object.values(O).some(v=>J(v,"conditions"))),{permissionsToSend:Pt(l),didUpdateConditions:R}},resetForm(){d({type:"RESET_FORM"})},setFormAfterSubmit(){d({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(M,f,h,R)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:M,propertyName:f,rowName:h,value:R})},m=(M,f,h)=>{d({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:M,actionId:f,value:h})},x=M=>{d({type:"ON_CHANGE_CONDITIONS",conditions:M})},b=(0,g.useCallback)(({target:{name:M,value:f}})=>{d({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:M,value:f})},[]),$=(0,g.useCallback)(({target:{name:M,value:f}})=>{d({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:M,value:f})},[]);return(0,o.jsx)(Rs,{availableConditions:e.conditions,modifiedData:l,onChangeConditions:x,onChangeSimpleCheckbox:b,onChangeParentCheckbox:$,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:m,children:(0,o.jsxs)(ce.M,{id:"tabs",label:p({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,o.jsx)(se.k,{children:At.map(M=>(0,o.jsx)(se.s,{children:p({id:M.labelId,defaultMessage:M.defaultMessage})},M.id))}),(0,o.jsxs)(Y.o,{style:{position:"relative"},children:[(0,o.jsx)(Y.G,{children:(0,o.jsx)(ps,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:s})}),(0,o.jsx)(Y.G,{children:(0,o.jsx)(ps,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:s})}),(0,o.jsx)(Y.G,{children:(0,o.jsx)(we,{layout:a.plugins,kind:"plugins",isFormDisabled:s})}),(0,o.jsx)(Y.G,{children:(0,o.jsx)(we,{layout:a.settings,kind:"settings",isFormDisabled:s})})]})]})})});He.defaultProps={permissions:[],layout:{conditions:[],sections:{collectionTypes:{},singleTypes:{actions:[]},settings:[],plugins:[]}}},He.propTypes={layout:r.object,isFormDisabled:r.bool.isRequired,permissions:r.array};const Tt=(0,g.memo)(He),vt=(e,s={})=>{const{get:n}=(0,W.Qn)(),{data:t,error:i,isError:a,isLoading:l}=(0,Ye.useQuery)(["permissions",e],async()=>{const{data:{data:d}}=await n("/admin/permissions",{params:{role:e}});return d},s);return{data:t,error:i,isError:a,isLoading:l}},Dt=(e={id:null},s={})=>{const{id:n,...t}=e,{get:i}=(0,W.Qn)(),{data:a,error:l,isError:d,isLoading:p,refetch:u}=(0,Ye.useQuery)(["roles",n,"permissions",t],async()=>{const{data:{data:m}}=await i(`/admin/roles/${n}/permissions`,{params:t});return m},s);return{permissions:a,error:l,isError:d,isLoading:p,refetch:u}}},42616:(G,U,c)=>{"use strict";c.d(U,{G:()=>H,Q:()=>Z});var o=c(19968),g=c(62552),j=c(69372),C=c(10900),E=c(37856),y=c(63358),B=c(48936),P=c(5e3);const L=({theme:D,expanded:A,variant:k,disabled:X,error:w})=>w?`1px solid ${D.colors.danger600} !important`:X?`1px solid ${D.colors.neutral150}`:A?`1px solid ${D.colors.primary600}`:k==="primary"?`1px solid ${D.colors.neutral0}`:`1px solid ${D.colors.neutral100}`,Z=(0,j.cp)(y.O)``,ee=(0,j.cp)(P.k)`
  border: ${L};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:D})=>D.colors.primary600};

    ${Z} {
      color: ${({theme:D,expanded:A})=>A?void 0:D.colors.primary700};
    }

    ${y.O} {
      color: ${({theme:D,expanded:A})=>A?void 0:D.colors.primary600};
    }

    & > ${B.C} {
      background: ${({theme:D})=>D.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:D})=>D.colors.primary200};
    }
  }
`,H=({children:D,disabled:A=!1,error:k,expanded:X=!1,hasErrorMessage:w=!0,id:le,onToggle:ce,toggle:se,size:Y="M",variant:W="primary",shadow:J})=>{const N=(0,E.I)(le),r=g.useMemo(()=>({expanded:X,onToggle:ce,toggle:se,id:N,size:Y,variant:W,disabled:A}),[A,X,N,ce,Y,se,W]);return(0,o.jsxs)(C.O.Provider,{value:r,children:[(0,o.jsx)(ee,{"data-strapi-expanded":X,disabled:A,"aria-disabled":A,expanded:X,hasRadius:!0,variant:W,error:k,shadow:J,children:D}),k&&w&&(0,o.jsx)(P.k,{paddingTop:1,children:(0,o.jsx)(y.O,{variant:"pi",textColor:"danger600",children:k})})]})}},12248:(G,U,c)=>{"use strict";c.d(U,{u:()=>C});var o=c(19968),g=c(10900),j=c(5e3);const C=({children:E,...y})=>{const{expanded:B,id:P}=(0,g.y)();if(!B)return null;const L=`accordion-content-${P}`,Z=`accordion-label-${P}`,ee=`accordion-desc-${P}`;return(0,o.jsx)(j.k,{role:"region",id:L,"aria-labelledby":Z,"aria-describedby":ee,...y,children:E})}},10900:(G,U,c)=>{"use strict";c.d(U,{O:()=>g,y:()=>j});var o=c(62552);const g=(0,o.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),j=()=>(0,o.useContext)(g)},34404:(G,U,c)=>{"use strict";c.d(U,{M:()=>D});var o=c(19968),g=c(14520),j=c(69372),C=c(42616),E=c(10900);const y=({expanded:A,disabled:k,variant:X})=>{let w="neutral100";return A?w="primary100":k?w="neutral150":X==="primary"&&(w="neutral0"),w};var B=c(82800),P=c(55716),L=c(48936),Z=c(63358);const ee=(0,j.cp)(B.c)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:A,expanded:k})=>k?A.colors.primary600:A.colors.neutral500};
    }
  }
`,H=(0,j.cp)(L.C)`
  min-height: ${({theme:A,size:k})=>A.sizes.accordions[k]};
  border-radius: ${({theme:A,expanded:k})=>k?`${A.borderRadius} ${A.borderRadius} 0 0`:A.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:A})=>A.colors.primary600};
      }
    }
  }
`,D=({title:A,description:k,as:X="span",togglePosition:w="right",action:le,...ce})=>{const{onToggle:se,toggle:Y,expanded:W,id:J,size:N,variant:r,disabled:K}=(0,E.y)(),Ae=`accordion-content-${J}`,be=`accordion-label-${J}`,_=`accordion-desc-${J}`,de=N==="M"?6:4,Oe=N==="M"?de:de-2,Te=y({expanded:W,disabled:K,variant:r}),T={as:X,fontWeight:N==="S"?"bold":void 0,id:be,textColor:W?"primary600":"neutral700",ellipsis:!0,variant:N==="M"?"delta":void 0},je=W?"primary600":"neutral600",ve=W?"primary200":"neutral200",Ee=N==="M"?`${32/16}rem`:`${24/16}rem`,he=()=>{K||(Y&&!se?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),Y()):se&&se())},ue=(0,o.jsx)(L.C,{justifyContent:"center",borderRadius:"50%",height:Ee,width:Ee,transform:W?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:ve,cursor:K?"not-allowed":"pointer",onClick:he,shrink:0,children:(0,o.jsx)(P.G,{as:g.c,width:N==="M"?`${11/16}rem`:`${8/16}rem`,color:W?"primary600":"neutral600"})});return(0,o.jsx)(H,{paddingBottom:Oe,paddingLeft:de,paddingRight:de,paddingTop:Oe,background:Te,expanded:W,size:N,justifyContent:"space-between",cursor:K?"not-allowed":"",children:(0,o.jsxs)(L.C,{gap:3,flex:1,maxWidth:"100%",children:[w==="left"&&ue,(0,o.jsx)(ee,{onClick:he,"aria-disabled":K,"aria-expanded":W,"aria-controls":Ae,"aria-labelledby":be,"data-strapi-accordion-toggle":!0,expanded:W,type:"button",flex:1,minWidth:0,...ce,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(C.Q,{...T,children:A}),k&&(0,o.jsx)(Z.O,{as:"p",id:_,textColor:je,children:k})]})}),w==="right"&&(0,o.jsxs)(L.C,{gap:3,children:[ue,le]}),w==="left"&&le]})})}},32912:(G,U,c)=>{"use strict";c.d(U,{U:()=>C});var o=c(19968),g=c(69372),j=c(5928);const C=({options:y,...B})=>(0,o.jsx)(j.e,{...B,children:y.map(P=>"children"in P?(0,o.jsx)(j.OK,{label:P.label,values:P.children.map(L=>L.value.toString()),children:P.children.map(L=>(0,o.jsx)(E,{value:L.value,children:L.label},L.value))},P.label):(0,o.jsx)(j.eI,{value:P.value,children:P.label},P.value))}),E=(0,g.cp)(j.eI)`
  padding-left: ${({theme:y})=>y.spaces[7]};
`}}]);
