"use strict";(self.webpackChunkapi=self.webpackChunkapi||[]).push([[3168],{63168:(R,a,t)=>{t.r(a),t.d(a,{UserListPageEE:()=>f});var n=t(19968),e=t(68160),M=t(75228),D=t(16048),P=t(70516),l=t(61952),i=t(62552),L=t(48632),d=t(17892),o=t(31212),s=t(60056),E=t(54320),I=t(5240),O=t(91892),C=t(36196),T=t(20880),U=t(21424),r=t(54223),_=t(18424),A=t(97820),v=t(99568),m=t(21968),B=t(12132),K=t(85676),W=t(35184),c=t(96556),u=t(74253),g=t(76232),h=t(20900),S=t(81136),y=t(34564);function f(){return(0,M.u)(),(0,n.jsx)(e.U,{})}},75228:(R,a,t)=>{t.d(a,{u:()=>o});var n=t(62552),e=t(16048),M=t(81136),D=t(14632),P=t(49008),l=t(34564);const i="strapi-notification-seat-limit",L="https://cloud.strapi.io/profile/billing",d="https://strapi.io/billing/request-seats",o=()=>{const{formatMessage:s}=(0,D.c)(),{license:E,isError:I,isLoading:O}=(0,l.u)(),C=(0,e.eo)(),{pathname:T}=(0,P.IT)(),{enforcementUserCount:U,permittedSeats:r,licenseLimitStatus:_,isHostedOnStrapiCloud:A}=E;n.useEffect(()=>{if(I||O)return;const v=!M(r)&&!window.sessionStorage.getItem(`${i}-${T}`)&&(_==="AT_LIMIT"||_==="OVER_LIMIT");let m;_==="OVER_LIMIT"?m="warning":_==="AT_LIMIT"&&(m="softWarning"),v&&C({type:m,message:s({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:_}),title:s({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:_,enforcementUserCount:U,permittedSeats:r}),link:{url:A?L:d,label:s({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:A})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${T}`,"true")}})},[C,E,T,s,O,r,_,U,A,I])}},34564:(R,a,t)=>{t.d(a,{u:()=>D});var n=t(62552),e=t(16048),M=t(48632);function D({enabled:P}={enabled:!0}){const{get:l}=(0,e.Qn)(),{data:i,isError:L,isLoading:d}=(0,M.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:E}}=await l("/admin/license-limit-information");return E},{enabled:P}),o=n.useMemo(()=>i??{},[i]),s=n.useCallback(E=>(o?.features??[]).find(O=>O.name===E)?.options??{},[o?.features]);return{license:o,getFeature:s,isError:L,isLoading:d}}}}]);