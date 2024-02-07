"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[2580],{42580:(v,i,s)=>{s.r(i),s.d(i,{AdminSeatInfoEE:()=>R});var t=s(19968),O=s(70996),_=s(63358),e=s(48936),M=s(70544),l=s(55716),o=s(5540),a=s(16048),D=s(30048),n=s(73648),P=s(14632),E=s(70516),C=s(61952),L=s(34564),j=s(62552),S=s(48632),p=s(17892),y=s(31212),F=s(60056),G=s(54320),H=s(5240),N=s(91892),Q=s(36196),$=s(20880),V=s(21424),z=s(54223),J=s(18424),X=s(97820),Y=s(99568),Z=s(21968),b=s(12132),k=s(85676),w=s(35184),q=s(96556);const U="https://cloud.strapi.io/profile/billing",c="https://strapi.io/billing/request-seats",R=()=>{const{formatMessage:d}=(0,P.c)(),B=(0,E.w1)(C.s),{isLoading:m,allowedActions:{canRead:T,canCreate:W,canUpdate:g,canDelete:K}}=(0,a.aU)(B.settings.users),{license:{licenseLimitStatus:h,enforcementUserCount:A,permittedSeats:r,isHostedOnStrapiCloud:I},isError:f,isLoading:u}=(0,L.u)({enabled:!m&&T&&W&&g&&K});return f||(m||u)||!r?null:(0,t.jsxs)(O.C,{col:6,s:12,children:[(0,t.jsx)(_.O,{variant:"sigma",textColor:"neutral600",children:d({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})}),(0,t.jsxs)(e.C,{gap:2,children:[(0,t.jsx)(e.C,{children:(0,t.jsx)(_.O,{as:"p",children:d({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:r,enforcementUserCount:A,text:x=>(0,t.jsx)(_.O,{fontWeight:"semiBold",textColor:A>r?"danger500":null,children:x})})})}),h==="OVER_LIMIT"&&(0,t.jsx)(M.o,{description:d({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),children:(0,t.jsx)(l.G,{width:`${(0,a.W8)(14)}rem`,height:`${(0,a.W8)(14)}rem`,color:"danger500",as:D.c})})]}),(0,t.jsx)(o.c,{href:I?U:c,isExternal:!0,endIcon:(0,t.jsx)(n.c,{}),children:d({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:I})})]})}},34564:(v,i,s)=>{s.d(i,{u:()=>e});var t=s(62552),O=s(16048),_=s(48632);function e({enabled:M}={enabled:!0}){const{get:l}=(0,O.Qn)(),{data:o,isError:a,isLoading:D}=(0,_.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:E}}=await l("/admin/license-limit-information");return E},{enabled:M}),n=t.useMemo(()=>o??{},[o]),P=t.useCallback(E=>(n?.features??[]).find(L=>L.name===E)?.options??{},[n?.features]);return{license:n,getFeature:P,isError:a,isLoading:D}}}}]);