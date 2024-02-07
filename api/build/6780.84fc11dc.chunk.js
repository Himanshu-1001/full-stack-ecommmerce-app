"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[6780],{36780:(us,K,s)=>{s.r(K),s.d(K,{default:()=>is});var e=s(19968),E=s(16048),i=s(70516),j=s(61952),f=s(62552),$=s(35676),T=s(48936),G=s(89296),A=s(63358),J=s(53305),I=s(54223),X=s(35184),b=s(14632),q=s(48632),ss=s(49008),es=s(17872),ts=s(50040),o=s(71545),os=s(34564),v=s(63096),c=s(46276),l=s(48132),ns=s(70064),ws=s(17892),Cs=s(31212),Ls=s(60056),Ts=s(54320),As=s(5240),Is=s(91892),Rs=s(36196),Ws=s(20880),ys=s(21424),Bs=s(18424),ps=s(97820),Us=s(99568),Ks=s(21968),js=s(12132),xs=s(85676),Ss=s(96556),ks=s(80740),Fs=s(29576),zs=s(79804),Ns=s(79371),Ys=s(61152),Vs=s(38955),Qs=s(8532),Hs=s(13192),Zs=s(6841);function as(){const{workflowId:P}=(0,ss.W4)(),ls=(0,i.w1)(j.s),{formatMessage:n}=(0,b.c)(),g=(0,i.OY)(),{put:rs}=(0,E.Qn)(),{formatAPIError:_s}=(0,E.An)(),h=(0,E.eo)(),{isLoading:D,meta:u,workflows:w,refetch:ds}=(0,ns.u)(),{collectionTypes:x,singleTypes:S,isLoading:R}=(0,ts.u)(),Es=(0,i.w1)(o.j),gs=(0,i.w1)(o.a),r=(0,i.w1)(o.b),k=(0,i.w1)(o.k),F=(0,i.w1)(o.c),O=(0,i.w1)(o.s),{allowedActions:{canDelete:fs,canUpdate:W}}=(0,E.aU)(ls.settings["review-workflows"]),[C,L]=f.useState({}),{getFeature:cs,isLoading:z}=(0,os.u)(),{isLoading:y,roles:N}=(0,es.u)(void 0,{retry:!1}),[Y,M]=f.useState(!1),[Ms,V]=f.useState(null),Q=w.find(t=>t.id===parseInt(P,10)),H=w.filter(t=>t.id!==parseInt(P,10)).flatMap(t=>t.contentTypes),{mutateAsync:Ds,isLoading:Os}=(0,q.useMutation)(async({workflow:t})=>{const{data:{data:a}}=await rs(`/admin/review-workflows/workflows/${t.id}`,{data:t});return a},{onSuccess(){h({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}})}}),ms=async t=>{V(null);try{return await Ds({workflow:{...t,stages:t.stages.map(d=>{let m=!0;const p=Es.workflow.stages.find(U=>U.id===d?.id);return p&&(m=p.permissions?.length!==d.permission?.length||!p.permissions.every(U=>!!d.permissions.find(hs=>hs.role===U.role))),{...d,permissions:m?d.permissions:void 0}})}})}catch(a){return a.response.data?.error?.name==="ValidationError"&&a.response.data?.error?.details?.errors?.length>0&&V(a.response.data?.error?.details?.errors.reduce((d,m)=>(X(d,m.path,m.message),d),{})),h({type:"warning",message:_s(a)}),null}},Z=async()=>{await ms(r),await ds(),L({})},vs=async()=>{await Z()},Ps=()=>{L({})},B=(0,I.KO)({enableReinitialize:!0,initialErrors:Ms,initialValues:r,async onSubmit(){const t=r.contentTypes.some(a=>H.includes(a));_?.[l.C]&&u?.workflowCount>parseInt(_[l.C],10)?M("workflow"):_?.[l.a]&&r.stages.length>parseInt(_[l.a],10)?M("stage"):k||t?(k&&L(a=>({...a,hasDeletedServerStages:!0})),t&&L(a=>({...a,hasReassignedContentTypes:!0}))):Z()},validate(t){return(0,o.v)({values:t,formatMessage:n})}});(0,o.u)(l.R,o.i);const _=cs("review-workflows");return f.useEffect(()=>(D||(g((0,o.l)({workflow:Q})),g((0,o.d)({workflows:w}))),R||g((0,o.e)({collectionTypes:x,singleTypes:S})),y||g((0,o.f)(N)),g((0,o.g)(D||R||y)),()=>{g((0,o.r)())}),[x,g,R,D,y,N,S,Q,w]),f.useEffect(()=>{!D&&!z&&(_?.[l.C]&&u?.workflowCount>parseInt(_[l.C],10)?M("workflow"):_?.[l.a]&&r.stages.length>parseInt(_[l.a],10)&&M("stage"))},[r.stages.length,z,D,_,u?.workflowCount,u.workflowsTotal]),f.useEffect(()=>{!O&&F.length===0&&h({blockTransition:!0,type:"warning",message:n({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[n,O,F,h]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(v.D,{}),(0,e.jsx)(I.uo,{value:B,children:(0,e.jsxs)(I.QF,{onSubmit:B.handleSubmit,children:[(0,e.jsx)(v.H,{navigationAction:(0,e.jsx)(v.B,{href:"/settings/review-workflows"}),primaryAction:W&&(0,e.jsx)($.Z,{startIcon:(0,e.jsx)(J.c,{}),type:"submit",size:"M",disabled:!gs,loading:!Object.keys(C).length>0&&Os,children:n({id:"global.save",defaultMessage:"Save"})}),subtitle:!O&&n({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:r.stages.length}),title:r.name}),(0,e.jsx)(v.R,{children:O?(0,e.jsx)(T.C,{justifyContent:"center",children:(0,e.jsx)(G.c,{children:n({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})})}):(0,e.jsxs)(T.C,{alignItems:"stretch",direction:"column",gap:7,children:[(0,e.jsx)(o.W,{canUpdate:W}),(0,e.jsx)(o.S,{canDelete:fs,canUpdate:W,stages:B.values?.stages})]})})]})}),(0,e.jsx)(E.cz.Root,{isConfirmButtonLoading:O,isOpen:Object.keys(C).length>0,onToggleDialog:Ps,onConfirm:vs,children:(0,e.jsx)(E.cz.Body,{children:(0,e.jsxs)(T.C,{direction:"column",gap:5,children:[C.hasDeletedServerStages&&(0,e.jsx)(A.O,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),C.hasReassignedContentTypes&&(0,e.jsx)(A.O,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:H.filter(t=>r.contentTypes.includes(t)).length})}),(0,e.jsx)(A.O,{textAlign:"center",variant:"omega",children:n({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,e.jsxs)(c.L,{isOpen:Y==="workflow",onClose:()=>M(!1),children:[(0,e.jsx)(c.T,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,e.jsx)(c.B,{children:n({id:"Settings.review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,e.jsxs)(c.L,{isOpen:Y==="stage",onClose:()=>M(!1),children:[(0,e.jsx)(c.T,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,e.jsx)(c.B,{children:n({id:"Settings.review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}function is(){const P=(0,i.w1)(j.s);return(0,e.jsx)(E.rF,{permissions:P.settings["review-workflows"].main,children:(0,e.jsx)(as,{})})}}}]);
