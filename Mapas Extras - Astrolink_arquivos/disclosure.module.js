import{j as e,r as i}from"./chunks/index-ycoutxhihi.module.js";import{U as t,h as n,i as o,F as s,a}from"./chunks/utils-5llq1ltvwr.module.js";import{s as r,A as l,W as d,L as c}from"./chunks/styled-components.browser.esm-k4wpfcn1n5.module.js";import{r as m}from"./chunks/index-3jn0o15lwh.module.js";import{A as h}from"./chunks/index-cpy49hurhh.module.js";import{P as u,B as p,S as g,C as x}from"./chunks/checkoutsuccessful-le8bkufvyj.module.js";import{S as f,A as b,R as j}from"./chunks/index-t4bxqkqmww.module.js";import{A as w}from"./chunks/apppaymentlegacy-dm9ki73mca.module.js";import{E as y}from"./chunks/env-sd0h1h2xwt.module.js";import{P as $,a as v,m as k,I as E,D as C}from"./chunks/base-kotvp0jcnm.module.js";import{U as A}from"./chunks/updateterms-0shtxzy31w.module.js";import{U as M}from"./chunks/user-ldjzgkh6wj.module.js";import{E as I,u as O}from"./chunks/usecountdown-x40xkkjddb.module.js";import{a as N,b as T,c as L,d as S,e as R,f as z,g as P,E as B,h as _,i as D,j as W,k as F,l as U}from"./chunks/types-akrxpgqc5g.module.js";import{e as H,f as q,B as K,L as G}from"./chunks/metrics-ky1kqbbm0g.module.js";import{E as V}from"./chunks/experimentservice-8e6jdheerm.module.js";import{G as X}from"./chunks/guide-idklilkgew.module.js";import{t as Y}from"./chunks/translatehookts-vranyk2i7o.module.js";import{c as Z,u as J}from"./chunks/index.modern-torafnhwuq.module.js";import{U as Q}from"./chunks/url-uhxnixgn.module.js";import{M as ee}from"./chunks/metrics-hskcz4iyww.module.js";import{B as ie}from"./chunks/button-rdbgok5gn0.module.js";import{C as te,a as ne,T as oe,E as se}from"./chunks/index-jwlgk55xii.module.js";import{b as ae,R as re,G as le}from"./chunks/chevronleft-zkmt49vohy.module.js";import{P as de}from"./chunks/picture-6thbhlpb88.module.js";import{C as ce,F as me,W as he}from"./chunks/variables-ailypepbte.module.js";import{T as ue}from"./chunks/themes-te59xnlr2j.module.js";import{B as pe}from"./chunks/snackbar-tbquynxjd3.module.js";import"./chunks/card-zfdaes0wjx.module.js";import"./chunks/feedback-xbkcmnbuob.module.js";import{S as ge}from"./chunks/modal-wytt7m1gol.module.js";import{S as xe}from"./chunks/styledutils-5ko0qfbxcd.module.js";import{P as fe}from"./chunks/paymentmodal-mef8fyuguj.module.js";/* empty css                   */import"./chunks/_commonhelpers-uc47qmi7ob.module.js";import"./chunks/es-zu7u9oou5a.module.js";import"./chunks/auto-tyb0k6rzia.module.js";import"./chunks/pt-br-gq6z60sl9z.module.js";import"./chunks/index-gxcxegniqa.module.js";import"./chunks/index-kshk6yylq1.module.js";import"./chunks/lodash-ftobjjb6yr.module.js";import"./chunks/baseapi-eb3ub24fzi.module.js";import"./chunks/fetch-09y3izhagd.module.js";import"./chunks/localstorage-bbzxffem0x.module.js";import"./chunks/utilsts-wtamd32xn3.module.js";import"./chunks/index-uaoszovbuh.module.js";import"./chunks/modal-75tmiyra7a.module.js";import"./chunks/select-27a3w3copj.module.js";import"./chunks/place-zivx8ht8tf.module.js";import"./chunks/index-mbwy72irnh.module.js";import"./chunks/translatehook-bxscdgufze.module.js";import"./chunks/validate-2sardnm6zb.module.js";import"./chunks/isobjectlike-ytzpddneyl.module.js";const be="emptyPlans",je="fetchPlans",we="promoExpired",ye=({userId:e,trigger:i,promoId:t,promoSkus:n={},isSubscriber:o})=>{const[s,a]=m.useState(),[r,l]=m.useState(),[d,c]=m.useState(!1),p=m.useMemo((()=>new f),[]),g=m.useMemo((()=>new u({isSubscriber:o})),[o]),x=m.useMemo((()=>h.releaseValidate($)),[]),j=m.useMemo((()=>h.releaseValidate(y.GOOGLE_PLAY_BILLING_APP_RELEASE_UPDATE)),[]),v=m.useMemo((()=>h.releaseValidate(y.GOOGLE_PLAY_SKUS_PRESENT_VALIDATION)),[]),k=void 0!==t,E=(e,i)=>{const{id:t,days:o}=e,s=Object.values(n||{});return o>=i[0]&&o<i[1]&&!s.includes(t)};const C=m.useCallback((async(e,i)=>{const o=e.map((e=>i?g.formatAppPlan(e):g.formatPlan(e))),s=g.filterStandardPlans(o),a=s.find((e=>E(e,[30,35]))),r=s.find((e=>E(e,[90,95]))),l=s.find((e=>E(e,[180,185])));return{promo:o.find((e=>"promo"===e.type&&e.id===t))||void 0,monthly:a,quarterly:r,semiannual:l,...function(e){const i={};for(const[t,o]of Object.entries(n)){const n=e.find((e=>e.id===o));n&&(i[t]=n)}return i}(o)||{}}}),[t,n,g]),A=m.useCallback((()=>{if(s||!e||!v)return;if(j){const i=new b({userId:e,promoSkus:n,isPromotion:k,isSubscriber:o});return i.errorFallback=()=>l(be),i.successFallback=async e=>{if(!e||!e.subscriptions)return void l(be);const{subscriptions:i}=e;try{if(!i)return void l(be);const e=await C(i,!0);if(!e||k&&!e.promo)return void l(we);a(e)}catch{l(be)}},i.startIAP(),void c(!0)}const i=new w(o,e,!0);i.errorFallback=()=>l(be),i.successFallback=async e=>{try{if(!e.plans.length)return void l(be);const i=e.plans.find((e=>e.productId.includes("monthly"))),t=await C([...e.plans,{...i,introductoryPrice:"0",introductoryPriceAsAmountAndroid:"0",introductoryPricePeriodAndroid:"",introductoryPriceCyclesAndroid:"0"}],!0);if(!t||k&&!t.promo)return void l(we);a(t)}catch{l(be)}},i.init(),c(!0)}),[e,n,o,s,d,j]),M=m.useCallback((async()=>{if(!s)try{const e=await p.getPlans();if(!e.length)return void l(be);const i=await C(e);if(!i)return void l(we);a(i)}catch(e){l(je)}}),[s,t,p]);return m.useEffect((()=>{i&&(x?A():M())}),[i,x]),[s,r,d]};var $e=(e=>(e.S="S",e.N="N",e))($e||{});class ve{static getRequiredData(){return new Promise((e=>{const i=t.isApp(),n=window.USER_COUNTRY,o=t.getLang(),s=v.get(k),a=i?N.APP:E?N.MOBILE:N.DESKTOP;e({lang:o,country:n,release:s,platform:t.isIos()?T.IOS:E?T.ANDROID:T.WEB,environment:a})}))}static releaseValidate(e,i){return!!i&&(!!i.release&&parseInt(i.release.replace(/\./g,""))>=e)}static validate(e,i){if(!i)return[L.ENVIRONMENT,!1,[He.NO_ENVIRONMENT]];const{environment:t,platform:n}=i,o=t===N.APP,s=n===T.IOS,a=e[0],r=e[1],l=e[2],d={[S.ALL]:()=>!0,[S.APP]:()=>o,[S.WEB]:()=>!o,[S.IOS]:()=>o&&s,[S.ANDROID]:()=>o&&!s,[S.MOBILE]:()=>t===N.MOBILE,[S.DESKTOP]:()=>t===N.DESKTOP,[S.APP_RELEASE]:()=>void 0!==l&&ve.releaseValidate(l,i)},c=r.map((e=>d[e]())),m=c.some((e=>e)),h=(e=>{if(!m)return c.map(((i,t)=>{if(!i)return`${e}-${r[t]}`})).filter((e=>e))})(a);return[L.ENVIRONMENT,m,h]}static validatePaymentEnvironment(e,i){const t={[R.ALL]:()=>!0,[R.NONE]:()=>!1,[R.APP]:()=>i.environment===N.APP,[R.WEB]:()=>i.environment===N.WEB,[R.IOS]:()=>i.platform===T.IOS,[R.MOBILE]:()=>i.environment===N.MOBILE,[R.ANDROID]:()=>i.platform===T.ANDROID};return e.some((e=>t[e]()))}}const ke={cookies:{expires:15},barConfig:{canCloseBar:!0,canOpenModal:!0}},Ee="yearly-trial",Ce="modal-trial";var Ae=(e=>(e.B="b",e.A="a",e.CONTROL="cn",e))(Ae||{});const Me={...ke,id:"trial",metrics:{...H},cookies:{...C.TRIAL},barConfig:ke.barConfig,payment:{scopes:[R.ANDROID],ref:"9c1cf91ffcace650a00303e223a72d7f",promoSkus:{[`${Ee}`]:"astrolinkpremiumyearlytrial3"}},requirements:[[L.USER,z.FIRST_SUBSCRIPTION],[L.LOCALE,P.BLOCK,[B.BRAZIL]],[L.ENVIRONMENT,[S.APP_RELEASE],y.GOOGLE_PLAY_SKUS_PRESENT_VALIDATION],[L.COMBINED,[[[L.LOCALE,P.ALLOW,[B.UNITED_STATES]],[L.ENVIRONMENT,[S.ANDROID]]],[[L.USER,z.FIRST_ACCESS],[L.LOCALE,P.BLOCK,[B.UNITED_STATES]],[L.ENVIRONMENT,[S.ANDROID]]]]]]},Ie={...ke,id:"countdown-promotion",metrics:{...q},cookies:{...C.COUNTDOWN},payment:{scopes:[R.WEB,R.MOBILE],ref:"5a06b2db16cedd623e7ef3e08f6161f3",promoPlanId:"assinet-promo-count-pagseguro-std"},countdown:{type:I.FROM_SIGN_UP,end:["1","day"]},requirements:[[L.USER,z.NON_SUBSCRIBER],[L.USER,z.FROM_SIGN_UP_MAX,"1","day"],[L.ENVIRONMENT,[S.WEB,S.MOBILE]],[L.CAMPAIGN,_.NOT_IN,"joaobidu"],[L.LOCALE,P.ALLOW,[B.BRAZIL]]]},Oe="#000",Ne="#FFF6C5",Te="#F56003",Le="#C32626",Se="#F6C776",Re={...ke,id:"guide2025",metrics:{FEATURE:"guide-2025",BANNER:"guide-2025-banner",CATEGORY_BAR:"guide-2025-bar",WANT_BAR:"want-guide-2025-bar",CLOSE_BAR:"guide-2025-close-bar",CATEGORY_MODAL:"guide-2025-modal",UNLOCK_BAR:"guide-2025-unlock-bar",WANT_MODAL:"want-guide-2025-modal",CLOSE_MODAL:"guide-2025-close-modal",UNLOCK_MODAL:"guide-2025-unlock-modal"},cookies:{...ke.cookies,BAR:"ast_guide_2025_bar",MODAL:"ast_guide_2025_modal"},payment:{scopes:[R.ALL],ref:"c680f83124c86b64e67832c9bade1f58"},requirements:[[L.LANG,P.ALLOW,[D.ptBr,D.en,D.es]],[L.USER,z.NON_SUBSCRIBER]]},ze={...ke,id:"biorhythm",metrics:{...K},cookies:{...C.BIORHYTHM},barConfig:{...ke.barConfig,redirectLink:"common.routes.subscription"},modalConfig:{redirectLink:"common.routes.subscription"},payment:{scopes:[R.WEB,R.MOBILE],ref:"7d2e728f198323f343f2e02fae596cfa"},requirements:[[L.USER,z.NON_SUBSCRIBER],[L.LANG,P.ALLOW,[D.de,D.fr,D.it]]]},Pe={...ke,id:"loveMap",metrics:{...G},cookies:{...C.LOVE_MAP,expires:15},barConfig:{...ke.barConfig},requirements:[[L.LOCALE,P.ALLOW,[B.BRAZIL]],[L.LANG,P.ALLOW,[D.ptBr]],[L.ENVIRONMENT,[S.ALL]],[L.OTS,_.NOT_IN,W.LOVE_MAP],[L.DATETIME,F.IS_BEFORE,y.BLACK_FRIDAY_END_DATE]]},Be=[Me,Ie,Re,Pe,ze],_e=Me.id,De=Ie.id,We=Re.id,Fe=ze.id,Ue=Pe.id;var He=(e=>(e.NO_USER="NO_USER",e.FETCH_ITENS="FETCH_ITENS",e.NO_CAMPAIGN="NO_CAMPAIGN",e.NO_EXPERIMENT="NO_EXPERIMENT",e.NO_ENVIRONMENT="NO_ENVIRONMENT",e.NO_OTS_DATA="NO_OTS_DATA",e))(He||{});const qe=class e{constructor(e){this.user=null==e?void 0:e.user,this.environment=null==e?void 0:e.environment,this.$RequirementService=new ei({user:null==e?void 0:e.user,campaigns:null==e?void 0:e.campaigns,experiments:null==e?void 0:e.experiments,environment:null==e?void 0:e.environment,ots:null==e?void 0:e.ots})}static buildPropsFromData(e){var i,t,n,o,s;const a=null==(i=e.find((e=>e.type===L.USER)))?void 0:i.data,r=null==(t=e.find((e=>e.type===L.CAMPAIGN)))?void 0:t.data,l=null==(n=e.find((e=>e.type===L.EXPERIMENT)))?void 0:n.data;return{user:a,campaigns:r,environment:null==(o=e.find((e=>e.type===L.ENVIRONMENT)))?void 0:o.data,experiments:l,ots:null==(s=e.find((e=>e.type===L.OTS)))?void 0:s.data}}static checkCookies(e){return{...e,cookies:{...e.cookies,exists:{bar:void 0!==v.get(e.cookies.BAR),modal:void 0!==v.get(e.cookies.MODAL)}}}}static getAllAvailableItems(){return new Promise((i=>{i([...Be].map(e.checkCookies).filter((e=>{var i,t;return!((null==(i=e.cookies.exists)?void 0:i.bar)&&(null==(t=e.cookies.exists)?void 0:t.modal))})))}))}static async validateItemWithData(i,t){var n,o;const s=null==(n=t.find((e=>e.type===L.USER)))?void 0:n.data,a=null==(o=t.find((e=>e.type===L.ENVIRONMENT)))?void 0:o.data,r=e.getFinalCountdownData(s,i.countdown),l=e.getFinalPaymentData(a,i.payment);return{...i,payment:l,countdown:r}}validateItemRequirements(e){const i=e.requirements.map((e=>this.$RequirementService.validateRequirement(e))),t=i.length?i.filter((e=>!e[1])):[];return[0===t.length,e.id,t]}getActive(e){return e.map((e=>this.validateItemRequirements(e))).filter((e=>e[0]))}};qe.getFinalPaymentData=(e,i)=>{if(!i)return;return ve.validatePaymentEnvironment(i.scopes,e)?i:void 0},qe.getFinalCountdownData=(e,i)=>{if(!i)return;return{[I.FIXED]:()=>({...i,start:n(i.start).toISOString(),end:n(i.end).toISOString()}),[I.FROM_SIGN_UP]:()=>{const t=n(e.usu_datacadastro),[o,s]=i.end;return{...i,start:t.toISOString(),end:t.add(o,s).toISOString()}}}[i.type]()};let Ke=qe;class Ge{static fromSignUp(e,i,t,o){if(!e.isValid())return!1;const s=n(),a=e.clone().add(i,t);return o?a.isAfter(s):a.isBefore(s)}static getRequiredData(){return new Promise((async e=>{const i=new M,{user:t}=await i.getUser();e(t)}))}static validate(e,i){if(!i)return[L.USER,!1,[He.NO_USER]];const t=e[0],o=e[1],s=n(i.usu_datacadastro),a="0"!=i.usu_ex_assinante,r={[z.FORMER_SUBSCRIBER]:()=>a,[z.SUBSCRIBER]:()=>i.usu_assinante===$e.S,[z.FIRST_ACCESS]:()=>Number(i.usu_total_acessos)<=1,[z.NON_SUBSCRIBER]:()=>i.usu_assinante===$e.N,[z.FIRST_SUBSCRIPTION]:()=>i.usu_assinante===$e.N&&!a,[z.FROM_SIGN_UP_MIN]:()=>{const i=parseFloat(e[2]),t=e[3];return Ge.fromSignUp(s,i,t,!1)},[z.FROM_SIGN_UP_MAX]:()=>{const i=parseFloat(e[2]),t=e[3];return Ge.fromSignUp(s,i,t,!0)}}[o](),l=r?void 0:[`${t}-${o}`];return[L.USER,r,l]}}class Ve{static getRequiredData(e){return new Promise((async(i,t)=>{try{const t=new M,n=e[2];i({mnemonic:n,status:await t.getCampaign(n)})}catch(n){t(n)}}))}static validate(e,i){if(!i)return[L.CAMPAIGN,!1,[He.NO_CAMPAIGN]];const t=e[0],n=e[1],o=e[2],s=i.find((e=>e.mnemonic===o)),a={[_.IN]:()=>!!s&&(null==s?void 0:s.status),[_.NOT_IN]:()=>!!s&&!(null==s?void 0:s.status)}[n](),r=a?void 0:[`${t}-${n}`];return[L.CAMPAIGN,a,r]}}class Xe{static getRequiredData(e){return new Promise((async(i,t)=>{try{const t=new V,n=e[2];i({mnemonic:n,group:await t.getExperiment(n,"",!0)})}catch(n){t(n)}}))}static validate(e,i){if(!i)return[L.EXPERIMENT,!1,[He.NO_ENVIRONMENT]];const t=e[0],n=e[3],o=e[1],s=e[2],a=i.find((e=>e.mnemonic===s)),r={[_.IN]:()=>(null==a?void 0:a.group)===n,[_.NOT_IN]:()=>(null==a?void 0:a.group)!==n}[o](),l=r?void 0:[`${t}-${o}`];return[L.EXPERIMENT,r,l]}}class Ye{static getRequiredData(e){return new Promise((async(i,t)=>{try{const t=new X,n=e[2];i({mnemonic:n,hasAccess:!!(await t.getUserOTSPurchase(n))})}catch(n){t(n)}}))}static validate(e,i){if(!i)return[L.OTS,!1,[He.NO_ENVIRONMENT]];const t=e[0],n=e[1],o=e[2],s=i.find((e=>e.mnemonic===o));if(!s)return[L.OTS,!1,[He.NO_OTS_DATA]];const a={[_.IN]:()=>null==s?void 0:s.hasAccess,[_.NOT_IN]:()=>!(null==s?void 0:s.hasAccess)}[n](),r=a?void 0:[`${t}-${n}`];return[L.EXPERIMENT,a,r]}}const Ze=[L.USER],Je=[L.USER,L.LANG,L.LOCALE,L.DATETIME,L.ENVIRONMENT],Qe=[L.CAMPAIGN,L.EXPERIMENT,L.OTS];class ei{constructor(e){this.user=null==e?void 0:e.user,this.campaigns=null==e?void 0:e.campaigns,this.environment=null==e?void 0:e.environment,this.experiments=null==e?void 0:e.experiments,this.ots=null==e?void 0:e.ots,this.validateLang=this.validateLang.bind(this),this.validateLocale=this.validateLocale.bind(this),this.validateCombined=this.validateCombined.bind(this),this.validateRequirement=this.validateRequirement.bind(this),this.validateDateTime=this.validateDateTime.bind(this)}static filterUnique(e,i,t){return i===t.indexOf(e)}static filterDynamic(e,i,t){return Qe.includes(e[0])}static async getDynamicRequirementData(e){return new Promise((async(i,t)=>{try{const t={[L.CAMPAIGN]:()=>Ve.getRequiredData(e),[L.EXPERIMENT]:()=>Xe.getRequiredData(e),[L.OTS]:()=>Ye.getRequiredData(e)},n=e[0];i({type:n,data:await t[n]()})}catch(n){t(n)}}))}static async getStaticRequirementData(e){const i={[L.LANG]:()=>Promise.resolve(),[L.LOCALE]:()=>Promise.resolve(),[L.DATETIME]:()=>Promise.resolve(),[L.USER]:()=>Ge.getRequiredData(),[L.ENVIRONMENT]:()=>ve.getRequiredData()};return{type:e,data:await i[e]()}}static mapUniqueTypes(e){return e.requirements.map((e=>e[0])).filter(ei.filterUnique)}static getStaticRequimentsFromList(e){const i=e.map((e=>ei.mapUniqueTypes(e))).reduce(((e,i)=>e.concat(i))).filter((e=>Je.includes(e)));return[...Ze,...i].filter(ei.filterUnique)}static getDynamicRequimentsFromList(e){return e.map((e=>e.requirements.filter(ei.filterDynamic)))}static getRequimentsFromList(e){return[ei.getStaticRequimentsFromList(e),ei.getDynamicRequimentsFromList(e).reduce(((e,i)=>e.concat(i))).filter(ei.filterUnique)]}static groupDynamicData(e){const i=[],t=[],n=[],o=new Map;e.forEach((e=>{Qe.includes(e.type)?n.push(e):i.push(e)})),n.forEach((e=>{const i=e.type,t=o.get(e.type);t?o.set(i,[...t,{...e.data}]):o.set(i,[e.data])}));for(let[s,a]of o)t.push({type:s,data:a});return[...i,...t]}static async getMissingData(e,i){const t=[],n=new Map,o=i.map((e=>e.type)),s=o.includes(L.USER),a=o.includes(L.ENVIRONMENT);e.payment&&(s||n.set(L.USER,!0),a||e.payment.scopes.includes(R.ALL)||n.set(L.ENVIRONMENT,!0));for(let r of n.keys()){const e=await ei.getStaticRequirementData(r);t.push(e)}return[...i,...t]}validateDateTime(e){const i=e[0],t=e[1],o=n().millisecond(0),s=n(e[2]).millisecond(0),a=n(e[3]).millisecond(0),r={[F.IS_AFTER]:()=>s.isAfter(o),[F.IS_BEFORE]:()=>s.isBefore(o),[F.IS_BETWEEN]:()=>o.isBetween(s,a)}[t](),l=r?void 0:[`${i}-${t}`];return[L.DATETIME,r,l]}validateLang(e){if(!this.environment)return[L.LANG,!1,[He.NO_ENVIRONMENT]];const i=e[0],t=e[1],n=e[2],o=this.environment.lang,s={[P.ALLOW]:()=>n.includes(o),[P.BLOCK]:()=>!n.includes(o)}[t](),a=s?void 0:[`${i}-${t}`];return[L.LANG,s,a]}validateLocale(e){if(!this.environment)return[L.LANG,!1,[He.NO_ENVIRONMENT]];const i=e[0],t=e[1],n=e[2],o=this.environment.country.toLowerCase(),s={[P.ALLOW]:()=>n.includes(o),[P.BLOCK]:()=>!n.includes(o)}[t](),a=s?void 0:[`${i}-${t}`];return[L.LOCALE,s,a]}validateCombined(e,i){const t=e[1],n=[];return t.forEach((e=>{if(Array.isArray(e[0])){const t=e.map((e=>{const t=e[0];return(0,i[t])(e)[1]}));n.push(t.every((e=>!0===e)))}else{const t=e[0],o=i[t];n.push(o(e)[1])}})),[L.COMBINED,n.some((e=>!0===e)),void 0]}validateRequirement(e){const i={[L.LANG]:this.validateLang,[L.LOCALE]:this.validateLocale,[L.DATETIME]:this.validateDateTime,[L.USER]:e=>Ge.validate(e,this.user),[L.CAMPAIGN]:e=>Ve.validate(e,this.campaigns),[L.EXPERIMENT]:e=>Xe.validate(e,this.experiments),[L.ENVIRONMENT]:e=>ve.validate(e,this.environment),[L.OTS]:e=>Ye.validate(e,this.ots)},t=e[0];if(t===L.COMBINED)return this.validateCombined(e,i);return(0,i[t])(e)}}const ii={isBarOpen:!1,isModalOpen:!1},ti=Z({...ii,plans:void 0,user:{},item:{},getById:()=>null,onBarClick:()=>null,onBarClose:()=>null,setMetrics:()=>null,setIsBarOpen:()=>null,onModalClose:()=>null,setIsModalOpen:()=>null}),ni=({item:i,data:t,children:n})=>{var o,s,a,r,l;const[d,c]=m.useState({...ii,isBarOpen:!(null==(o=i.cookies.exists)?void 0:o.bar),isModalOpen:!(null==(s=i.cookies.exists)?void 0:s.modal)}),u=null==(a=t.find((e=>e.type===U.PAYMENT)))?void 0:a.data,p=(null==(r=t.find((e=>e.type===L.EXPERIMENT)))?void 0:r.data)||[],g=null==(l=t.find((e=>e.type===L.USER)))?void 0:l.data;g.experiments=p;const x=m.useMemo((()=>new ee),[]),f=(()=>{const e=t.find((e=>e.type===L.ENVIRONMENT));return!!e&&e.environment===N.APP})(),b=(e,t=!1,n=!1)=>{const o=n?"MODAL":"BAR",s=i.metrics[`CLOSE_${o}`];if(!t)return s;const a=i.metrics[`WANT_${o}`],r=i.metrics[`UNLOCK_${o}`];return e?a:r};return e.jsx(ti.Provider,{value:{...d,item:i,user:g,plans:u,getById:e=>{if(!u)return null;let i=null;return Object.keys(u).forEach((t=>{u[t]&&String(u[t].id)===e&&(i=u[t])})),i},setMetrics:(e,i,t,n)=>x.setMetrics(e,i,t,n),onBarClick:()=>{i.metrics&&x.setMetrics(i.metrics.FEATURE,i.metrics.CATEGORY_BAR,i.metrics.UNLOCK_BAR,"")},onBarClose:(e,t=!1)=>{const n=b(e,t);x.setMetricsWithResponse(i.metrics.FEATURE,i.metrics.CATEGORY_BAR,n,"").finally((()=>{var e;v.set(i.cookies.BAR,"1",{expires:i.cookies.expires}),t&&Q.location(Q.base(null==(e=i.barConfig)?void 0:e.redirectLink))})),f&&h.setCookieOnApp(i.cookies.BAR)},onModalClose:(e,t=!1)=>{v.remove(i.cookies.MODAL);const n=b(e,t,!0);x.setMetricsWithResponse(i.metrics.FEATURE,i.metrics.CATEGORY_MODAL,n,"").finally((()=>{var e;v.set(i.cookies.MODAL,"1",{expires:i.cookies.expires}),t&&Q.location(Q.base(null==(e=i.modalConfig)?void 0:e.redirectLink))})),f&&h.setCookieOnApp(i.cookies.MODAL)},setIsBarOpen:e=>c({...d,isBarOpen:e}),setIsModalOpen:e=>c({...d,isModalOpen:e})},children:n})},oi=r.svg``,si=oi,ai=({color:i="#FFF"})=>e.jsxs(oi,{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",children:[e.jsx("path",{opacity:".2",fill:i,d:"M20.201 5.169c-8.254 0-14.946 6.692-14.946 14.946 0 8.255 6.692 14.946 14.946 14.946s14.946-6.691 14.946-14.946c-.001-8.254-6.692-14.946-14.946-14.946zm0 26.58c-6.425 0-11.634-5.208-11.634-11.634 0-6.425 5.209-11.634 11.634-11.634 6.425 0 11.633 5.209 11.633 11.634 0 6.426-5.208 11.634-11.633 11.634z"}),e.jsx("path",{fill:i,d:"M26.013 10.047l1.654-2.866a14.855 14.855 0 0 0-7.466-2.012v3.312c2.119 0 4.1.576 5.812 1.566z",children:e.jsx("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"})})]}),ri="#2c0230",li="#DAB5FF",di="#b203ce",ci="#FFF",mi="#ff01e6",hi="#ffd66c",ui=r.p`
    padding: 7px 13px;
    border-radius: 6px;
    color: ${({theme:e})=>e.colors.white};
    background-image: linear-gradient(to right, ${mi}, ${di});
`,pi=r.div`
    width: 100vw;
    font-size: 16px;
    min-height: 100vh;
    position: relative;
    background-color: ${ri};

    &,
    > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    > button {
        all: unset;
        top: 24px;
        right: 24px;
        cursor: pointer;
        position: absolute;

        > ${ae.Container} {
            width: 21px;
            height: 21px;
        }
    }

    > img {
        width: 100%;
        height: 311px;
        object-fit: contain;
    }

    > div {
        padding: 24px 29px 32px;

        > ${ui} {
            font-size: 0.6875em;
            margin-bottom: 32.5px;
        }

        > p,
        > h2,
        li > span {
            color: ${({theme:e})=>e.colors.white};
        }

        > h2 {
            font-size: 2em;
            margin-bottom: 8px;
            font-weight: ${({theme:e})=>e.fontWeights.black};

            &,
            + p {
                text-align: center;
            }

            + p {
                font-size: 1.125em;
                max-width: 16.75em;
                margin-bottom: 24px;
                color: ${hi};
                font-weight: ${({theme:e})=>e.fontWeights.bold};
            }
        }

        > ${te} {
            margin-bottom: 36px;
            padding-bottom: 0px;

            ${({openAdvantages:e})=>!e&&l`
                margin-bottom: 66px;
                padding-bottom: 20px;
            `};

            ${ne}::after {
                display: none;
            }

            ${oe} {
                width: 100%;
                bottom: -30px;

                button {
                    width: 100%;
                    height: auto;
                    justify-content: flex-start;
                    padding: 7px 10.1px 7px 11.1px;
                    background-color: rgba(217, 217, 217, 0.1);
                    border: solid 1px rgba(255, 255, 255, 0.5);

                    > span {
                        width: 100%;
                        display: flex;
                        font-size: 1.125em;
                        align-items: center;
                        justify-content: space-between;
                        color: ${({theme:e})=>e.colors.white};
                        font-weight: ${({theme:e})=>e.fontWeights.bold};

                        > ${re.Container} {
                            width: 1.375em;
                            height: 1.375em;
                        }
                    }
                }
            }

            ul {
                padding: 0;

                > li {
                    width: 100%;
                    display: flex;
                    margin-inline: 0px;
                    margin-bottom: 20px;
                    opacity: ${({openAdvantages:e})=>e?1:0};

                    &:nth-child(1), &:nth-child(2) {
                        opacity: 1;
                    }

                    &:last-of-type {
                        margin-bottom: 0px;
                    }

                    > ${le.Container} {
                        width: 22px;
                        height: 22px;
                        margin-top: 2px;
                        margin-right: 16px;
                    }

                    > span {
                        font-size: 1.125em;
                    }
                }
            }
        }

        > button {
            width: 100%;
            height: auto;
            min-height: 4.5em;
            position: relative;
            margin-bottom: 26px;

            + p {
                font-size: 0.875em;
                text-align: center;
                max-width: 18.75em;
            }

            > span {
                position: relative;
            }

            span {
                > strong {
                    font-size: 1.375em;
                    font-weight: ${({theme:e})=>e.fontWeights.black};
                }

                > p {
                    margin: 0;
                    font-size: 0.875em;
                    color: ${({theme:e})=>e.colors.white};
                    font-weight: ${({theme:e})=>e.fontWeights.normal};
                }

                > ${si} {
                    top: 50%;
                    left: 50%;
                    width: 85px;
                    height: 85px;
                    position: absolute;
                    transform: translate(-50%, -50%);
                }

                ${({loading:e})=>e&&l`
                    > span {
                        opacity: 0;
                    }
                `}
            }
        }
    }

    @media only screen and (max-height: 700px) {
        > img {
            max-height: 210px;
            object-fit: cover;
        }
    }

    @media only screen and (min-width: 395px) {
        > div > ${te} ${oe} {
            bottom: -16px;
        }
    }
`,gi={loading:!1,openAdvantages:!1},xi=o((({intl:i,item:n,user:o,plans:r,handleClose:l,setMetrics:d})=>{const[c,h]=m.useState(gi),u=m.useMemo((()=>{var e;return new b({userId:o.usu_id,promoSkus:null==(e=n.payment)?void 0:e.promoSkus,isSubscriber:o.usu_assinante===$e.S})}),[]),p=m.useMemo((()=>{var e;try{return null==(e=o.experiments.find((e=>e.mnemonic===Ce)))?void 0:e.group}catch{return Ae.B}}),[o]),g=m.useMemo((()=>(i.formatMessage({id:"disclosure.trial.modal.advantages"})||"").split(";").map((e=>({uuid:t.getUUID(),advantage:e})))),[i]),x=()=>h({...c,openAdvantages:!c.openAdvantages});u.errorFallback=e=>{var t;(null==e?void 0:e.type)===j.payment&&("E_USER_CANCELLED"!=(null==(t=null==e?void 0:e.error)?void 0:t.code)?Q.location(`/${i.formatMessage({id:"common.routes.subscriptionError"})}`):h({...c,loading:!1}))},u.successFallback=e=>{(null==e?void 0:e.type)===j.payment&&Q.location(`/${i.formatMessage({id:"common.routes.subscriptionSuccess"})}`)},m.useEffect((()=>{if(!c.loading)return;d(n.metrics.FEATURE,n.metrics.CATEGORY_MODAL,n.metrics.WANT_MODAL,"");const e=u.getOfferToken(Ee,!0);u.requestPayment(Ee,e)}),[c.loading,u,n]),m.useEffect((()=>{if(!u)return;(async()=>{await u.startIAP()})()}),[u]),m.useEffect((()=>{p===Ae.B&&window.addEventListener("beforeunload",(function(e){l()}))}),[]);const f=m.useCallback((()=>c.openAdvantages?e.jsx(e.Fragment,{}):e.jsxs(ie,{buttonType:"button",variation:"ghost",onClick:x,children:[e.jsx(s,{id:"disclosure.trial.modal.expansiveTrigger",children:i=>e.jsx(e.Fragment,{children:i})}),e.jsx(re.Root,{})]})),[c.openAdvantages]);return e.jsxs(pi,{openAdvantages:c.openAdvantages,loading:c.loading,children:[e.jsx("button",{onClick:l,children:e.jsx(ae.Root,{color:li})}),e.jsx("img",{alt:"",src:Q.image("disclosure/trial/banner-modal.webp"),onLoad:e=>e.target.style.height="auto"}),e.jsxs("div",{children:[e.jsx(s,{id:"disclosure.trial.modal.giftTag",children:i=>e.jsx(ui,{children:i})}),e.jsx(s,{id:"disclosure.trial.title",children:i=>e.jsx("h2",{children:i})}),e.jsx(s,{id:"disclosure.trial.modal.description",children:i=>e.jsx("p",{children:i})}),e.jsx(se,{open:c.openAdvantages,visibleSize:"6em",trigger:f(),children:e.jsx("ul",{children:g.map((({advantage:i,uuid:t})=>e.jsxs("li",{children:[e.jsx(le.Root,{}),e.jsx("span",{children:i})]},t)))})}),e.jsxs(ie,{rounded:!0,buttonType:"button",variation:"gradient",onClick:()=>h({...c,loading:!0}),gradient:{colorTwo:di,colorOne:mi,fontColor:ci},children:[c.loading&&e.jsx(ai,{}),e.jsx(a,{id:"disclosure.trial.modal.button",values:{priceWithCurrency:r[Ee].value.full}})]}),e.jsx(s,{id:"disclosure.trial.modal.renewalNotice",children:i=>e.jsx("p",{children:i})})]})]})})),fi=r.div`
    width: 100%;
    row-gap: 6px;
    display: grid;
    font-size: 16px;
    padding: 12px 16px;
    align-items: center;
    background-size: cover;
    grid-template-rows: auto;
    background-repeat: no-repeat;
    grid-template-columns: 1fr auto;
    background-image: url(${Q.image("disclosure/trial/banner-bar.webp")});
    grid-template-areas: "title button"
                         "description button";

    > p,
    > h3,
    > button span {
        margin: 0;
        color: ${({theme:e})=>e.colors.white};
    }

    > h3 {
        grid-area: title;
        font-size: 1.125em;
        font-weight: ${({theme:e})=>e.fontWeights.black}
    }

    > p {
        font-size: 0.875em;
        grid-area: description;
    }

    > button {
        height: auto;
        border: none;
        box-shadow: none;
        grid-area: button;
        padding: 7px 13px;
        background-image: linear-gradient(to right, ${mi}, ${di});

        span > span {
            font-size: 0.875em;
        }
    }

`,bi=m.forwardRef((({handleClickButton:i,handleClose:t,user:n},o)=>{const a=m.useMemo((()=>{var e;try{return null==(e=n.experiments.find((e=>e.mnemonic===Ce)))?void 0:e.group}catch{return Ae.B}}),[n]);return m.useEffect((()=>{a===Ae.B&&t(!1)}),[a]),e.jsxs(fi,{ref:o,children:[e.jsx(s,{id:"disclosure.trial.title",children:i=>e.jsx("h3",{children:i})}),e.jsx(s,{id:"disclosure.trial.bar.description",children:i=>e.jsx("p",{children:i})}),e.jsx(ie,{buttonType:"button",onClick:i,rounded:!0,children:e.jsx(s,{id:"disclosure.trial.bar.button"})})]})})),ji="#ff1473",wi="#29d6d9",yi="#4df6ff",$i="#00b3af",vi=r(ie)`
    height: auto;
    border: none;
    padding: 8px 23px;
    position: relative;
    border-radius: 1.375em;
    background-image: linear-gradient(to top, ${yi} 0%, ${$i} 100%);

    > span {
        color: ${({theme:{colors:e}})=>e.white};
    }

    &:hover {
        filter: brightness(1.2);

        > span {
            color: ${({theme:{colors:e}})=>e.white};
        }
    }

    &[data-loading="true"] {
        > span {
            opacity: 0;
        }

        &:after {
            top: 50%;
            left: 50%;
            width: 100%;
            content: '';
            height: 100%;
            position: absolute;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            transform: translate(-50%, -50%);
            background-image: url(${Q.image("loader/inverted.svg")});
        }
    }
`,ki="%h : %m : %s",Ei=r.div`
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    > p {
        margin: 0;
        width: 17.2857em;
        max-width: 300px;
        text-align: center;
        font-size: 1.0714em;
        color: ${ce.WHITE};

        > strong {
            font-weight: ${me.BLACK}
        }
    }

    @media only screen and (min-width: ${he.TABLET.MIN}) {
        width: auto;
        height: 100%;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        
        > p {
            width: 26.5714em;
        }
    }
`,Ci=r.div`
   display: flex;
   align-items: start;
   flex-direction: column;
`,Ai=r.span`
    display: block;
    line-height: normal;
    font-size: 1.2143em;
    color: ${ce.WHITE};
    font-weight: ${me.BLACK};
`,Mi=r.span`
    display: block;
    text-align: center;
    line-height: normal;
    font-size: 1.0714em;
    color: ${ce.WHITE};
    font-weight: ${me.NORMAL};

    > strong {
        font-weight: ${me.BLACK};
    }
`,Ii=r.div`
    display: flex;
    flex-direction: row;
`,Oi=r.div`
    height: 100%;
    display: flex;
    margin-top: .5em;
    flex-direction: column;    
    justify-content: center;
`,Ni=r.span`
    opacity: 0.8;
    line-height: normal;
    font-size: 1.2143em;
    color: ${ce.WHITE};
`,Ti=r.span`
    font-weight: 900;
    line-height: normal;
    font-size: 1.2143em;
    color: ${ce.WHITE};

    > strong {
        font-size: 1.55em;
        font-weight: ${me.BLACK};
    }
`,Li=r.a`
    border: none;
    display: flex;
    width: 8.1429em;
    height: 2.4286em;
    min-width: 115px;
    align-items: center;
    border-radius: 1.5714em;
    justify-content: center;
    padding: 0.7143em 0.9em;

    &:hover,
    &:focus {
        outline: none;
        text-decoration: none;
    }

    > span {
        font-size: 1em;
        color: ${ce.WHITE};
        font-weight: ${me.BOLD};
    }
`,Si=r.img.attrs((()=>({src:Q.image("close.svg")})))`
    width: 1.143em;
    height: 1.143em;
    cursor: pointer;
    margin-right: 1em;
    object-fit: contain;
`,Ri=r.div`
    width: 100%;
    display: flex;
    font-size: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    @media only screen and (min-width: ${he.TABLET.MIN}) {
        position: relative;

        & ${Ci} {
            margin: .7143em 0;
            align-items: center;
        }

        & ${Ai} {
            font-size: 1.7857em;
        }

        & ${Mi} {
            font-size: 1.4286em;
        }

    }
    
    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        & ${Li} {
            width: 13.8571em;
            height: 3.1429em;
            margin-left: .7143em;
            
            > span {
                font-size: 1.2857em;
            }
        }

        & ${Si} {
            margin: 0;
            width: 1.4286em;
            right: 2.2857em;
            height: 1.4286em;
            position: absolute;
            top: calc(50% - .7143em);
        }
    }
`,zi="380px",Pi="#4e0047",Bi="#f2c4d3",_i="0, 0, 0, 0.5",Di=r(Li)` 
    z-index: 1;
    margin-left: auto;
    margin-right: 10px;
    background-color: ${Pi};
    box-shadow: 0 0.1429em 0.2857em 0 rgba(${_i});

    > span {
        color: ${ce.WHITE};
        font-weight: ${me.BLACK};
    }

    @media only screen and (max-width: ${zi}) {
        margin-left: 5px;
        margin-right: 5px;
    }
`,Wi=r(Si).attrs((()=>({src:Q.image("close-dark.svg")})))`
    right: 1.5vw;
`,Fi=r.div`
    display: flex;
`,Ui=r.picture`
    left: 0;
    height: 60px;
    margin-right: 10px;
    
    > img {
        height: 60px;
    }
`,Hi=r.div`
    display: flex;
    margin: auto 0;
    flex-direction: column;
    color: ${Pi}; 
    
    > small {
        font-size: 13px;
    }
`;r.picture`
    > img {
        max-height: 28px;
    }

    @media only screen and (max-width: ${zi}) {
        > img {
            max-height: 29px;
        }
    }
`;const qi=r(Ii)`
    flex: 1;
    justify-content: center;
`;r(Oi)`
    margin: 0;
`,r(Ni)`
    color: ${Pi};

    > span {
        margin-right: 5px;
    }
`,r(Ti)`
    color: ${Pi};
`,r.picture`
    margin: 8px 0 8px 20px;

    > img {
        max-height: 44px;
    }
`;const Ki=r(Ei)`
    margin: 0;
    max-height: 60px;
    justify-content: flex-start;

    > span {
        flex: 1;
        max-width: 23ch;
        line-height: 1.17;
        text-align: center;
        font-size: 1.2143em;
        color: ${Pi};
    }
`,Gi=r(Ri)`
    min-height: 60px;
    background-color: ${Bi};

    @media only screen and (min-width: ${he.TABLET.MIN}) {
        justify-content: flex-start;

        ${Wi} {
            right: 15px;
        }
       
        ${Ui} {
            > img {
                max-width: 50vw;
            }
        }

        ${Hi} {
            > small {
                font-size: 15px;
            }
        }

        ${Ki} {
            width: 100%;
            margin: 0 3vw;
            justify-content: center;

            > span {
                margin: 0 20px;
            }
        }

        ${Di} {
            margin: 0;
        }
    }

    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        ${Di} {
            margin-right: 10px;
        }

        ${qi} {
            flex: unset;
            margin: 0 20px;
        }
    }
`,Vi="#4df6ff",Xi="#00b3af",Yi="0, 0, 0, 0.5",Zi="1400px";r(Ki)`
    font-size: 3.5rem;
    color: ${ce.WHITE};
    font-weight: ${me.BOLD};
    justify-content: space-around !important;

    > span {
        max-width: 21ch;
        color: ${ce.WHITE};

        > strong {
            font-weight: ${me.BLACK}
        }
    }

    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        margin: 0 !important;
        max-width: ${he.HD} !important;
    }
`,r(Fi)`
    align-items: center;
    justify-content: space-around;
`;const Ji=r(Ui)`
    margin: 0;
`;r(Hi)`
    width: 8.9rem;
    text-align: center;
    color: ${ce.WHITE}; 

    > span {
        font-size: 1.6rem;
        font-weight: ${me.BOLD};
    }

    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        width: 25rem;

        > span {
            font-size: 2.5rem !important;
        }
    }
    
    @media only screen and (min-width: ${he.DESKTOP.MAX}) {
        width: 35rem;

        > span {
            font-size: 3.5rem !important;
        }
    }

    @media only screen and (min-width: ${Zi}) {
        margin-left: 1rem;
    }
`,r.div`
    margin-top: 0.5rem;

    > small {
        font-size: 1.3rem;
    }
    
    @media only screen and (min-width: ${he.DESKTOP.MAX}) {
        > small {
            font-size: 1.8rem;
        }
    }
`,r.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        width: 40rem;
    }

    @media only screen and (min-width: ${he.DESKTOP.MAX}) {
        width: 45rem;
    }
    
    @media only screen and (min-width: ${Zi}) {
        width: 50rem;
    }
`,r.div`
    width: 13rem;
    display: flex;
    margin-top: 0.4rem;
    align-items: center;
    flex-direction: column;

    @media only screen and (max-width: ${he.MOBILE.MAX}) {
        font-size: 3rem;
        align-items: flex-start;
    }
`,r.div`
    width: 15rem;
    display: flex;
    font-size: 1.3rem;
    margin-top: 0.4rem;
    margin-left: 2.3rem;
    justify-content: space-between;
`,r(Di)` 
    margin: 0;
    padding: 0;
    height: 4rem;
    width: 12.3rem;
    background-image: linear-gradient(${Vi}, ${Xi});
    box-shadow: 0 0.1429em 0.2857em 0 rgba(${Yi});

    > span {
        font-size: 2rem;
        color: ${ce.WHITE};
    }

    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        max-width: 20rem;
        max-height: 4.5rem;

        > span {
            font-size: 2rem !important;
        }
    }
    
    @media only screen and (min-width: ${he.DESKTOP.MAX}) {
        max-width: 25rem;
    }
`;const Qi=r(Gi)`
    flex: 1;
    height: 60px;
    background-size: cover;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: url(${Q.image("disclosure/countdown/countdown-bar-mobile.png")});
    
    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        height: auto; 
    }
`,et=r(Ki)`
    justify-content: space-around !important;
    color: ${({theme:e})=>e.colors.white};
    font-weight: ${({theme:e})=>e.fontWeights.bold};

    > span {
        max-width: 21ch;
        color: ${({theme:e})=>e.colors.white};

        > strong {
            font-weight: ${({theme:e})=>e.fontWeights.black};
        }
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.desktop.min}) {
        margin: 0 !important;
        max-width: ${({theme:e})=>e.breakpoints.hd} !important;
    }
`,it=r(Hi)`
    margin: 0; 
    padding: 0;
    text-align: center;
    color: ${({theme:e})=>e.colors.white}; 

    > span {
        font-size: 1.6rem;
        font-weight: ${({theme:e})=>e.fontWeights.bold};
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.desktop.min}) {
        width: 25rem;

        > span {
            font-size: 2.5rem !important;
        }
    }
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.desktop.max}) {
        width: 35rem;

        > span {
            font-size: 3.5rem !important;
        }
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.wide.min}) {
        margin-left: 1rem;
    }

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: auto;
    }
`,tt=r.div`
    margin-left: 0; 
    margin-right: 0; 
    padding: 0; 

    > small {
        font-size: 1.3rem;
    }
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.desktop.max}) {
        > small {
            font-size: 1.8rem;
        }
    }

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: auto;
    }
`,nt=r(Fi)`
    align-items: center;
    justify-content: space-around;
    
    > div {
        display: flex;
        flex-direction: row; 
        align-items: center; 
        text-align: center;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) and (max-width: ${({theme:e})=>e.breakpoints.tablet.max}){
        > div {
            flex-direction: column;

            ${it} {
                width: auto;
            }

            ${tt} {
                margin: 0;
            }
        }
    }

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.tablet.max}) {
        gap: 1rem; 
    }
`,ot=r.div`
    display: flex;
    font-size: 3rem;
    align-items: center;
    justify-content: space-around;

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        padding: 1rem 1rem;
        flex-direction: row;
        align-items: center;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        flex: 1;
        font-size: 3.5rem;

        > a {
            flex: 1;

            > span {
                font-size: 1em;
            }
        }
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.desktop.min}) {
        width: 55rem;
        max-width: 550px;
    }
`,st=r.div`
    display: flex;
    font-size: 1em;
    line-height: initial;
    align-items: baseline;
    margin-right: 1rem;

    > span {
        font-size: .75em;
        margin-right: 5px;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        flex: 1;
        justify-content: center;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.desktop.min}) {
        flex: unset;
    }

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        font-size: 0.8em;
        
        > span {
            margin-right: 3px;
        }

        margin-right: 2rem; 
    }
`,at=r(Di)` 
    margin: 0;
    padding: 0;
    height: 4rem;
    width: 12.3rem;
    box-shadow: none;
    background-image: linear-gradient(${yi}, ${$i});

    > span {
        font-size: 2rem;
        color: ${({theme:e})=>e.colors.white};
        text-align: center;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        font-size: 1.5rem;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.desktop.min}) {
        max-width: 20rem;
        max-height: 4.5rem;

        > span {
            font-size: 2rem !important;
        }
    }
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.desktop.max}) {
        max-width: 25rem;
    }

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 80%;
    }
`,rt=o(m.forwardRef(((i,t)=>{const{intl:n,handleClickButton:o}=i,{plans:r,item:l}=J(ti,(e=>({item:e.item,plans:e.plans}))),d=O(l.countdown.end,l.countdown.start,{mask:ki}),c=(()=>{const e=d.split(":");return{hours:e[0],minutes:e[1],seconds:e[2]}})(),h=E.phone?"disclosure.countdown.learnMore":"disclosure.countdown.wannaEnjoy",u=m.useMemo((()=>E.phone?null:e.jsx(de,{Container:Ji,path:"disclosure/countdown/countdown-img-bar",alt:n.formatMessage({id:"disclosure.countdown.imageAlt"})})),[n]),p=m.useMemo((()=>r&&r.promo?e.jsx(it,{children:e.jsx(a,{id:"disclosure.countdown.price",values:{price:r.promo.value.full}})}):null),[r]);return e.jsx(Qi,{children:e.jsxs(et,{children:[e.jsxs(nt,{children:[u,e.jsxs("div",{children:[p,!E.phone&&e.jsx(tt,{children:e.jsx(s,{id:"disclosure.countdown.limitedTime",children:i=>e.jsx("small",{children:i})})})]})]}),e.jsxs(ot,{children:[e.jsxs(st,{children:[c.hours,e.jsx("span",{children:"h"}),c.minutes,e.jsx("span",{children:"m"}),c.seconds,e.jsx("span",{children:"s"})]}),e.jsx(at,{ref:t,onClick:o,children:e.jsx(s,{id:h})})]})]})})}))),lt=r(Ri)`
    height: 60px;
    padding: 0 6px;
    background-size: cover;
    justify-content: center;
    background-repeat: no-repeat;
    background-color: ${Oe};
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.mobile.min}) {
        background-image: url(${Q.image("disclosure/guide2025/bar/bar_bg_mobile.jpg")});
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        background-image: url(${Q.image("disclosure/guide2025/bar/bar_bg_desk.jpg")});
    }
`,dt=r(Ei)`
    height: 100%;
    justify-content: space-evenly;
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 100%;
        margin: 0 35px;
        justify-content: space-between;
    }

    @media only screen and (min-width: 1921px) {
        width: 100%;
        margin: 0 auto;
        max-width: 1920px;
        justify-content: space-between;
    }
`,ct=r.div`
    display: flex;
    justify-content: space-between;
    gap: ${({theme:e})=>e.space.mouse};
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        justify-content: flex-end;
        margin-right: ${({theme:e})=>e.space.mouse};
    }
`,mt=r(ie)`
    max-height: 40px;
    min-width: fit-content;
    background: linear-gradient(101deg, ${Se}, ${Le});
    border-radius: 20px;
    border: none;

    :active { 
        box-shadow: inset 0 0 6px 2px rgba(0,0,0, 0.4);
    }

    > span,
    :hover > span {
        color: ${({theme:e})=>e.colors.white};
    }

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.mobile.max}) {
        padding: ${({theme:e})=>e.space.butterfly};
    }
`,ht=r.picture`
    img {
        max-height: 60px;
        max-width: 60vw;
    }
`,ut=o(m.forwardRef((({intl:i,...n},o)=>{const a=t.getLang(),{breakpoints:r}=ue.light;return e.jsx(lt,{children:e.jsxs(dt,{children:[e.jsxs(ht,{children:[e.jsx("source",{type:"image/png",media:`(max-width: ${r.mobile.max})`,srcSet:Q.image(`disclosure/guide2025/bar/bar_mobile_${a}.png`)}),e.jsx("source",{type:"image/png",media:`(min-width: ${r.tablet.min})`,srcSet:Q.image(`disclosure/guide2025/bar/bar_desk_${a}.png`)}),e.jsx("img",{src:Q.image(`disclosure/guide2025/bar/bar_mobile_${a}.png`),alt:"Guide 2025"})]}),e.jsxs(ct,{children:[e.jsx(mt,{ref:o,variation:"contained",onClick:n.handleClickButton,children:e.jsx(s,{id:"disclosure.IWant"})}),e.jsx("img",{onClick:n.handleClose,src:Q.image("close.svg"),alt:i.formatMessage({id:"common.close"})})]})]})})}))),pt="#000",gt="#D01600",xt="#09a359",ft="#FF1B00",bt="#8B0F00",jt=r(ie)`
    border: none;
    display: flex;
    font-size: 18px;
    border-radius: 25px;
    background-image: linear-gradient(to bottom, ${bt}, ${ft} 99%);
    
    > span,
    :hover > span {
        display: flex;
        align-items: center;
        gap: ${({theme:e})=>e.space.bee};
        color: ${({theme:e})=>e.colors.white};
    }

    img {
        width: 25px;
        height: 23px;
    }
`;window.SITE_URL=y.URL_INTERNATIONAL;const wt=r(Ri)`
    height: 60px;
    padding: 0 6px;
    background-size: cover;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: url(${Q.image("disclosure/biorhythm/bar/bar-mobile-bg.webp")});

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        justify-content: flex-end;
        padding: ${({theme:e})=>`0 ${e.space.bee}`};
        background-image: url(${Q.image("disclosure/biorhythm/bar/bar-desk-bg.webp")});
    }
`,yt=r(Ei)`
    gap: 10px;
    height: 100%;
    justify-content: space-evenly;
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 100%;
        margin: 0 35px;
        justify-content: space-between;
    }

    @media only screen and (min-width: 1921px) {
        max-width: 1920px;
        margin: 0 auto;
        width: 100%;
        justify-content: space-between;
    }
`,$t=r(ie)`
    max-height: 40px;
    min-width: fit-content;
    background: linear-gradient(101deg, ${bt}, ${ft});
    border-radius: 20px;
    border: none;

    :active { 
        box-shadow: inset 0 0 6px 2px rgba(0,0,0, 0.4);
    }

    > span,
    :hover > span {
        color: ${({theme:e})=>e.colors.white};
    }

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.mobile.max}) {
        padding: ${({theme:e})=>e.space.butterfly};
    }
`,vt=r.img`
    height: 33px;
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        height: 40px;
    }
`,kt=r.span`
    text-align: center;
    line-height: normal;
    color: ${({theme:e})=>e.colors.white};
    font-weight: ${({theme:e})=>e.fontWeights.black};
    font-size: ${({smallText:e})=>e?"0.7143em":"0.8571em"};

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        flex: 1;
        text-align: start;
        margin-left: 10px;
        font-size: 1.4286em;
    }
`,Et=r.div`
    flex: 1;
    display: flex;
    min-width: 50vw;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${({theme:e})=>e.space.mouse};
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        margin-right: 16px;
        justify-content: flex-end;
    }
`,Ct=o(m.forwardRef(((i,n)=>{const{intl:o,handleClose:a,handleClickButton:r}=i,l=m.useMemo((()=>t.getLang()),[]),d=m.useMemo((()=>{const i=o.formatMessage({id:"disclosure.biorhythm.logoAlt"}),t=Q.image(`disclosure/biorhythm/logo/logo-${l}.webp`);return e.jsx(vt,{alt:i,src:t})}),[o,l]),c=l!==D.de,h=l===D.it||l===D.fr;return e.jsx(wt,{children:e.jsxs(yt,{children:[d,e.jsxs(Et,{children:[c&&e.jsx(s,{id:"disclosure.biorhythm.bar.message",children:i=>e.jsx(kt,{smallText:h,children:i})}),e.jsx($t,{ref:n,variation:"contained",onClick:r,children:e.jsx(s,{id:"disclosure.biorhythm.learnMore"})}),e.jsx("img",{onClick:a,src:Q.image("close.svg")})]})]})})}))),At=r(Ri)`
    height: 60px;
    padding-right: ${({theme:e})=>`${e.space.bee}`};
    background-size: cover;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: url(${Q.image("disclosure/love-map/bar/bar-mobile-bg.webp")}), linear-gradient(to right, 
        #783c8b 0%, 
        #913780 62%, 
        #b32f70 110%
    );

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        justify-content: flex-end;
        background-image: url(${Q.image("disclosure/love-map/bar/bar-desk-bg.webp")}), linear-gradient(to right, 
        #783c8b 0%, 
        #913780 57%, 
        #b32f70 101%
    );
    }
`,Mt=r(Ei)`
    height: 100%;
    justify-content: space-evenly;
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 100%;
        justify-content: space-between;
        gap: 10px;
    }
`,It=r(ie)`
    max-height: 40px;
    width: auto;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #19a8b2;
    border: none;
    display: ${({miniButton:e})=>e?"flex":"none"};
    font-size: 0.857em;
    white-space: nowrap;

    :active { 
        box-shadow: inset 0 0 6px 2px rgba(0,0,0, 0.4);
    }

    > span,
    :hover > span {
        color: ${({theme:e})=>e.colors.white};
    }

    span.hide-mobile {
        display: none;
    }
    
    @media only screen and (min-width: 411px) {
        display: ${({miniButton:e})=>e?"none":"flex"};
        font-size: 1em;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        span.hide-mobile {
            display: inline;
        }
    }

    @media only screen and (max-width: ${({theme:e})=>e.breakpoints.mobile.max}) {
        padding: ${({theme:e})=>e.space.butterfly};
    }
`,Ot=r.img`
    height: 100%;
`,Nt=r.span`
    text-align: center;
    line-height: normal;
    color: ${({theme:e})=>e.colors.white};
    font-size: 0.8571em;
    display: none;
    flex: 1;

    @media only screen and (min-width: 411px) {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        font-size: 1em;
        margin-left: -50px;
    }
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        justify-content: initial;
        flex: 1;
        text-align: start;
        margin-left: 0;
        font-size: 1.4286em;
    }
`,Tt=r.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    gap: ${({theme:e})=>e.space.mouse};
    
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        margin-right: 16px;
        justify-content: flex-end;
    }

    @media only screen and (max-width: 410px) {
        min-width: 50vw;
    }
`,Lt=o(m.forwardRef(((i,n)=>{const{intl:o,handleClose:r,handleClickButton:l}=i,d=m.useMemo((()=>t.getLang()),[]),c=m.useMemo((()=>{const i=o.formatMessage({id:"disclosure.biorhythm.logoAlt"}),t=Q.image("disclosure/love-map/bar/bar-angel.webp");return e.jsx(Ot,{alt:i,src:t})}),[o,d]);return e.jsx(At,{children:e.jsxs(Mt,{children:[c,e.jsx(Nt,{children:e.jsx(a,{id:"disclosure.lovemap.bar.message"})}),e.jsxs(Tt,{children:[e.jsx(It,{ref:n,variation:"contained",onClick:l,rounded:!0,children:e.jsx(a,{id:"disclosure.lovemap.bar.button"})}),e.jsx(It,{miniButton:!0,ref:n,variation:"contained",onClick:l,rounded:!0,children:e.jsx(s,{id:"disclosure.lovemap.bar.miniButton"})}),e.jsx("img",{onClick:r,src:Q.image("close.svg"),alt:o.formatMessage({id:"common.close"})})]})]})})}))),St=e=>{var i;return{item:e.item,user:e.user,isBarOpen:e.isBarOpen,onBarClick:e.onBarClick,onBarClose:e.onBarClose,setIsBarOpen:e.setIsBarOpen,setIsModalOpen:e.setIsModalOpen,isSubscriber:(null==(i=e.user)?void 0:i.usu_assinante)===$e.S}},Rt=()=>{const i=m.useRef(null),{item:t,user:n,isBarOpen:o,isSubscriber:s,onBarClose:a,onBarClick:r,setIsBarOpen:l,setIsModalOpen:d}=J(ti,St);if(!t)return null;const c=e=>{var n;e&&e.stopPropagation(),(null==(n=t.barConfig)?void 0:n.canCloseBar)&&(e=>{var t;e&&(null==(t=i.current)||t.classList.add("button--loading")),l(!1),a(s,e)})(!1)},h=()=>{var e;r(s),(null==(e=t.barConfig)?void 0:e.canOpenModal)&&d(!0)},u={[_e]:e.jsx(bi,{user:n,handleClose:c,handleClickButton:h}),[De]:e.jsx(rt,{ref:i,handleClickButton:h}),[We]:e.jsx(ut,{ref:i,handleClose:c,handleClickButton:h}),[Fe]:e.jsx(Ct,{ref:i,handleClose:c,handleClickButton:h}),[Ue]:e.jsx(Lt,{ref:i,handleClose:c,handleClickButton:h})}[t.id];return e.jsx(pe,{closeBar:!o,children:u})},zt=["profile.profileEdit.link","common.routes.subscription","common.routes.deleteAccount","common.routes.subscriptionBF","common.routes.subscriptionBFPlus","common.routes.loveMap","common.routes.otsError","common.routes.otsSuccess"],Pt={synchronous:1},Bt=200,_t="INTRO",Dt="SELECTION",Wt="COMPARISON",Ft="640px",Ut=t.isSafari(),Ht=d`
    0% { transform: translateX(100%) }
    80% { transform: translateX(0) }
    100% { transform: translateX(0) }
`,qt=d`
    0% { transform: translateX(0) }
    80% { transform: translateX(-100%) }
    100% { transform: translateX(-100%) }
`,Kt=l`
    @media only screen and (min-width: ${he.TABLET.MIN}) {
        width: auto;
        height: 52em;
    }
`,Gt=l`
    border: 0;
    display: flex;
    max-height: 60px;
    align-items: center;
    min-height: 3.8571em;
    max-width: 21.4286em;
    margin-bottom: 1.5em;
    border-radius: 2.0714em;
    justify-content: center;
    padding: 1.1429em 2.8571em;

    &:focus,
    &:hover,
    &:active {
        text-decoration: none;
    }

    > span {
        color: ${ce.WHITE};
        font-weight: ${me.BOLD};
    }

    ${E.apple.phone&&"height: 4.14em;"}
`,Vt=r.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`,Xt=e=>{if(!e)return null;const i=-1!==e.indexOf("Reverse"),t=((e,i)=>e?i?Ht:qt:i?qt:Ht)(-1===e.indexOf("slideIn"),i);return l`animation: ${t} ease-in ${"200ms"} ${i&&"reverse"};`},Yt=r(Vt)`
    max-width: 100vw;
    position: relative;
    justify-content: start;
    background-size: cover;
    padding: 2.143em 1.1429em;
    background-position: center;
    background-repeat: no-repeat;

    ${E.apple.phone&&"\n        padding: 1.143em 1.1429em;"}
`,Zt=r.div`
    width: 100%;
    height: 100%;
    display: flex;
    max-width: 100%;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    background-size: cover;
    padding: 2.143em 1.1429em;
    background-position: center;
    background-repeat: no-repeat;
    overflow-x: hidden;

    ${E.apple.phone&&"padding: 1.143em 1.1429em;"}

    ${({animation:e})=>Xt(e)};

    @media only screen and (max-height: ${Ft}) {
        ${E.apple.phone&&"max-height: calc(100vh - 4.286em);"}
    }
`,Jt=r.div`
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 3vh;
    font-size: 1.2857em;
    flex-direction: row;
    color: ${ce.WHITE};
    justify-content: center;
    min-height: fit-content;
    min-height: -webkit-fit-content;

    b {
        font-weight: ${me.BLACK};
    }
`,Qt=r.img.attrs((()=>({src:Q.image("disclosure/arrow-back.svg"),alt:"arrow-select"})))`
    left: 0;
    cursor: pointer;
    position: absolute;
    object-fit: contain;
`,en=r.span`
    display: block;
    max-width: 310px;
    text-align: center;
    line-height: normal;
    margin-bottom: .2333em;
    color: ${ce.WHITE};
    font-weight: ${me.BLACK};
`,tn=r.span`
    display: block;
    text-align: center;
    font-size: 1.4286em;
    line-height: normal;
    color: ${ce.WHITE};
    font-weight: ${me.BOLD};
`,nn=r.img.attrs((()=>({src:Q.image("close.svg")})))`
    z-index: 2;
    top: 1.214em;
    right: 1.214em;
    width: 1.143em;
    min-width: 20px;
    height: 1.143em;
    cursor: pointer;
    min-height: 20px;
    position: absolute;
    object-fit: contain;
`,on=r.a.attrs((()=>({className:"button"})))`
    ${Gt}

    > span {
        font-size: 1.429em;
    }

    ${E.apple.phone&&"\n        height: 4.14em;\n    "}
`,sn=r(Vt)`
    width: 100vw;
    background-size: cover;
    background-repeat: no-repeat;
    height: ${Ut?"calc(100vh - 25px)":"100vh"};

    @media only screen and (max-height: ${Ft}) {

        ${Yt} {
            max-height: 100vh;
            padding: 1.143em 1.1429em;
        }

        ${Jt} {
            font-size: 1.1em;
            margin-bottom: 1vh;
        }
        
        ${tn} {
            font-size: 1em;
            margin-bottom: .8em;
        }

        ${on} {
            margin-bottom: 1em;

            > span {
                font-size: 1.229em;
            }
        
            ${E.apple.phone&&"height: 9.14em;"}
        }
    }
    
    @media only screen and (max-width: ${he.MOBILE.MAX}) {
        ${Yt} {
            padding: 1.125em;
        }
    }

    @media only screen and (min-width: ${he.TABLET.MIN}) {
        width: 100%;
        height: 100%;

        ${Yt} {
            padding: 1.7857em 1.1429em;
        }
    }

    @media only screen and (max-width: ${he.TABLET.MIN}) and (min-height: ${he.HD}) {
        ${tn} {
            margin-bottom: 1em;
        }

        ${on} {
            margin-bottom: 1em;
        }
    }

    @media only screen and (min-width: ${he.DESKTOP.MIN}){
        max-height: 95vh;
    }
`,an=r(Yt)`
    width: 26.643em;
`,rn=r(nn).attrs((()=>({src:Q.image("close.svg")})))``,ln=r(sn)`    
    ${p} {
        background-image: none;
        background-image: linear-gradient(to bottom, ${yi} 0%, ${$i} 100%);
        
        > b {
            color: ${({theme:e})=>e.colors.white};
        }
    }
    
    ${g} {
        color: ${({theme:e})=>e.colors.white};
    }
`,dn=({handleClose:i})=>e.jsxs(ln,{children:[e.jsx(rn,{onClick:()=>i(!0)}),e.jsx(an,{children:e.jsx(x,{isModal:!0,isExperiment:!0})})]}),cn=r(Jt)`
    font-size: 24px;
    margin-bottom: 25px;
    color: ${ce.WHITE};
    font-weight: ${me.BLACK};
`,mn=r.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`,hn=r.table`
    width: 100%;
    font-size: 16px;

    tbody,
    thead th:not(:first-child) {
        background-color: ${ce.WHITE};
    }

    tbody {
        tr:first-child td {
            padding-top: .8571em;

            &:first-child {
                border-top-left-radius: .7143em;
            }
        }

        tr:nth-child(2) td:nth-child(2) {
            font-size: 16px;
            font-weight: ${me.BLACK};
        }

        tr:last-child td {
            padding-bottom: .8571em;

            &:first-child {
                border-bottom-left-radius: .7143em;
            }

            &:last-child {
                border-bottom-right-radius: .7143em;
            }
        }
    }

    tr {
        > td:first-child {
            padding-right: 0;
            text-align: left;
            font-weight: ${me.BLACK};
        }
        
        > td:last-child {
            font-weight: ${me.BLACK};
        }
    }

    th,
    td {
        font-size: .875em;
        text-align: center;

        &:nth-child(2) {
            padding: 0 8px;
            border-right: 1px solid ${xe.transparentize(ce.BLACK,.2)};
        }
    }

    th {
        padding: .5em 0.4286em;
        
        &:nth-child(2) {
            border-top-left-radius: .7143em;
            font-weight: ${me.NORMAL};
        }

        &:last-child {
            border-top-right-radius: .7143em;
        }
    }

    td {
        padding: .4286em 1.2857em;
    }

    @media only screen and (min-height: ${Ft}) {
        margin: 28px 0;
    }

    @media only screen and (max-height: ${he.MOBILE.MAX}) {
        margin-bottom: ${E.apple.phone?".8vh":"1.5vh"}
    }
`,un=r.td`
    background-size: 15px;
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
`,pn=r(un)`
    background-image: url(${Q.image("disclosure/countdown/checked.svg")});
`,gn=r(un)`
    background-image: url(${Q.image("disclosure/countdown/unchecked.svg")});
`,xn=r.div`
    gap: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 29px;
    color: ${ce.WHITE};
    flex-direction: column;
    min-height: fit-content;
    min-height: -webkit-fit-content;

    span {
        margin-bottom: 3px;
        font-size: 1.0714em;
    }

    div {
        width: 85%;
        display: flex;
        justify-content: space-around;

        img {
            max-width: 50px;
            max-height: 24px;
        }
    };

    @media only screen and (max-height: ${Ft}) {
        margin: 14.5px 0;
    }
    
    @media only screen and (max-height: ${({theme:e})=>e.breakpoints.mobile.max}) {
        margin: 1vh 0;
    }
`,fn=r.a.attrs((()=>({className:"button"})))`
    ${Gt};

    > span {
        display: flex;
        text-align: center;
        flex-direction: column;

        span {
            font-size: 1.4286em;
            font-weight: ${me.BLACK};

            small {
                font-size: 1em;
                color: ${ce.WHITE};
            }
        }
    }

    @media only screen and (max-height: ${Ft}) {
        height: auto;
        min-height: 1em;
        padding: .7em 1em;
        margin-bottom: 10px;

        span {
            font-size: .8em;
        }
    }
`,bn=r(Vt)`
    margin-bottom: 1.9286em;
    justify-content: flex-end;

    @media only screen and (max-height: ${Ft}) {
        margin-bottom: 1em;
    }

    @media only screen and (max-width: ${he.TABLET.MIN}) and (min-height: ${he.HD}) {
        margin-bottom: 1em;
    }
`,jn=r.div`
    display: flex;
    flex-direction: column;    
`,wn=r.span`
    opacity: 0.8;
    line-height: normal;
    font-size: 1.4286em;
    color: ${ce.WHITE};
`,yn=r.span`
    font-weight: 900;
    font-size: 1.2857em;
    line-height: normal;
    color: ${ce.WHITE};

    > strong {
        font-size: 1.7222em;
        font-weight: ${me.BLACK};
    }
`,$n=r.span`
    font-size: 1em;
    text-align: center;
    color: ${ce.WHITE};
    margin-bottom: 1.5714em;

    @media only screen and (max-height: ${Ft}) {
        margin-bottom: 1em;
    }
    
    @media only screen and (max-width: ${he.TABLET.MIN}) and (min-height: ${he.HD}) {
        margin-bottom: 1em;
    }
`,vn=r.a`
  font-size: 1em;
  text-align: center;
  color: ${ce.WHITE};
  text-decoration: underline;

  &:hover {
    color: ${ce.WHITE};
  }
`,kn="#48003d",En="#f2c4d3",Cn="0, 0, 0, 0.5";r(Vt)``,r(Yt)``;const An=r(Zt)`
    padding: .8571em 1.7143em 1.5em 1.7143em;
`;r(Jt)`
    color: ${ce.BLACK};
`,r(Qt).attrs((()=>({src:Q.image("disclosure/arrow-back-dark.svg")})))``;const Mn=r(en)`
    margin: 30px 0 0 0;

    > span {
       font-size: 1.2143em;

       > strong {
           display: block;
           font-size: 1.8824em;
       }
   }

    @media only screen and (max-width: ${he.MOBILE.MAX}) {
        margin-top: 15px;

        > span {
            font-size: 1em;
        }
    }

    @media only screen and (min-width: ${he.TABLET.MIN}) {
        ${An} {
            padding: .8571em;
        }
    }

    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        > span {
            font-size: 1em;
        }
    }
    

    @media only screen and (max-height: ${Ft}) {
       > span {
           font-size: .8571em;
        }
    }
`;r(tn)`
    color: ${kn};
`,r(nn).attrs((()=>({src:Q.image("close-dark.svg")})))`
`,r(on)`
    background-color: ${kn};
    box-shadow: 0 2px 5px 0 rgba(${Cn});

    &:focus,
    &:hover,
    &:active {
        background-color: ${kn};
    }

    > span {
        font-size: 1.2857em;
        color: ${ce.WHITE};
        font-weight: ${me.BLACK};
    }
`,r(sn)`
    background-color: ${En};

    @media only screen and (min-width: ${he.TABLET.MIN}) {
        max-width: 27em;
    }

    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        ${Mn} {
            > span {
                font-size: 1em;
            }
        }
    }
    
    @media only screen and (max-width: ${he.MOBILE.MAX}) {
        ${Mn} {
            margin-top: 15px;
    
            > span {
                font-size: 1em;
            }
        }
    }

    @media only screen and (max-height: ${Ft}) {
        ${Mn} {
            > span {
               font-size: .8571em;
            }
        }

        ${An} {
            padding: 1em;
        }
    }
`;const In="#FFFFFF",On="#FFD179",Nn="#4DF6FF",Tn="#00B3AF";r(Vt)``,r(Yt)``;const Ln=r(Zt)`
    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 26.643em;
    }
`;r(Jt)`
    color: ${ce.WHITE};
`;const Sn=r(Qt).attrs((()=>({src:Q.image("disclosure/arrow-back.svg")})))``;r(Mn)``;const Rn=r(tn)`
    color: ${ce.WHITE};
`,zn=r(nn).attrs((()=>({src:Q.image("close.svg")})))``,Pn=r(on)`
    background-image: linear-gradient(to bottom, ${Nn}, ${Tn});

    &:focus,
    &:hover,
    &:active {
        background-image: linear-gradient(to bottom, ${Nn}, ${Tn});
    }

    > span {
        color: ${In};
    }
`,Bn=r(sn)`
    background-image: url(${Q.image("disclosure/countdown/countdown-modal.png")});

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        max-width: 26.643em;
    }

    @media only screen and (max-height: ${Ft}) {
        ${Ln} {
            padding: 1em;
        }
    }
`,_n="#09a359",Dn="#3f3f3f",Wn=r(Jt)`
    font-size: 2.4rem;
    margin-bottom: 3.5rem;
    color: ${ce.WHITE};
    font-weight: ${me.BLACK};
`,Fn=r(hn)`
    margin: 2rem 0;
    border-collapse: separate;

    tbody,
    thead {
        th:not(:first-child) {
            background-color: ${ce.WHITE};
        }
    
        th:last-child {
            font-weight: ${me.BLACK};
        }
    }

    tbody {
        tr:nth-child(2) td:nth-child(2) {
            font-size: 1.3rem;
            color: ${_n};
            font-weight: ${me.BOLD};
        }
    }

    tr {
        color: ${Dn};

        > td:nth-child(2), td:last-child {
            color: ${_n};
            font-weight: ${me.NORMAL};
        }

        > td:first-child {
            font-weight: ${me.NORMAL};
        }
    }

    th:nth-child(2),
    td:nth-child(2) {
        border-right: solid 1px ${ce.GREY.TWENTY};
    }

    th {
        &:not(:first-child) {
            border-bottom: none;
        }
        
        &:nth-child(2) {
            color: ${Dn};
            border-top-left-radius: .7143em;
            border-right: solid 1px ${ce.GREY.TWENTY};
        }
        
        &:last-child {
            border-left: none;
            border-top-right-radius: .7143em;
            color: ${Dn};
        }
    }
    
    @media (max-height: ${"570px"}) {
        td {
            font-size: 12px;
        }
    }
`,Un=r(un)`
    background-image: url(${Q.image("disclosure/countdown/checked.svg")});
`,Hn=r(un)`
    background-image: url(${Q.image("disclosure/countdown/unchecked.svg")});
`,qn=r(xn)`
    margin-bottom: 2rem;

    > span {
        color: ${ce.WHITE};
    }
`,Kn=r(fn)`
    background-image: linear-gradient(to bottom, ${Nn}, ${Tn});
    
    &:focus,
    &:hover,
    &:active {
        background-image: linear-gradient(to bottom, ${Nn}, ${Tn});
    }

    small,
    span {
        color: ${ce.WHITE};
    }
`,Gn=r(vn)`
    max-width: 26ch;
    font-size: 1.1429em;
    color: ${ce.WHITE};
    font-weight: ${({theme:e})=>e.fontWeights.black};

    &:focus,
    &:hover,
    &:active {
        color: ${ce.WHITE};
    }
`,Vn=o((({intl:i,price:n,animation:o,isPromotional:r,handleClickNext:l,handleClickPrevious:d,handleClose:c,item:m})=>{var h;return e.jsxs(Ln,{animation:o,children:[e.jsx(zn,{onClick:()=>c(!1),alt:i.formatMessage({id:"common.close"})}),e.jsxs(Wn,{children:[e.jsx(Sn,{onClick:d}),e.jsx(a,{id:"disclosure.countdown.astrolinkPremium"})]}),e.jsx(Rn,{children:e.jsx(s,{id:"disclosure.comparison.unlock"})}),e.jsxs(Fn,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx(s,{id:"disclosure.comparison.free",children:i=>e.jsx("th",{children:i})}),e.jsx(s,{id:"disclosure.comparison.premium",children:i=>e.jsx("th",{children:i})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(s,{id:"disclosure.comparison.complete",children:i=>e.jsx("td",{children:i})}),e.jsx(Un,{}),e.jsx(Un,{})]}),e.jsxs("tr",{children:[e.jsx(s,{id:"disclosure.comparison.extra",children:i=>e.jsx("td",{children:i})}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"ilimitado"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Compatibilidade/ Sinastria"}),e.jsx(Hn,{}),e.jsx(Un,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tarot ilimitado"}),e.jsx(Hn,{}),e.jsx(Un,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Horóscopo Personalizado"}),e.jsx(Un,{}),e.jsx(Un,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Horóscopo Futuro"}),e.jsx(Hn,{}),e.jsx(Un,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Biorritmo"}),e.jsx(Hn,{}),e.jsx(Un,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Ciclo Lunar"}),e.jsx(Hn,{}),e.jsx(Un,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nodos Lunares"}),e.jsx(Hn,{}),e.jsx(Un,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Guias Astrológicos"}),e.jsx(Hn,{}),e.jsx(Un,{})]})]})]}),e.jsxs(qn,{children:[e.jsxs("div",{children:[e.jsx("img",{src:Q.image("disclosure/mastercard-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Mastercard"})}),e.jsx("img",{src:Q.image("disclosure/visa-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Visa"})}),e.jsx("img",{src:Q.image("disclosure/elo-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Elo"})}),e.jsx("img",{src:Q.image("disclosure/hipercard-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Hipercard"})})]}),e.jsx(s,{id:"disclosure.comparison.cardOption"})]}),e.jsx(Kn,{onClick:l,children:r?e.jsx(a,{id:"disclosure.comparison.signFor",values:{price:n}}):e.jsx("span",{children:e.jsx(s,{id:"disclosure.unlockNow"})})}),!t.isInternational()&&e.jsx(Gn,{href:`/assinar?ref=${null==(h=m.payment)?void 0:h.ref}`,children:e.jsx(s,{id:"disclosure.intro.otherPayMethodsNoPromo"})})]})}));r.img``,r.span`
    margin: 2vh 0;
    text-align: center;
    font-size: 1.4286em;
    line-height: normal;
    color: ${kn};

    @media only screen and (min-width: ${he.TABLET.MIN}) {
        margin: 29px 0 25px 0;
    }

    @media only screen and (max-height: ${Ft}) {
        margin-top: 3vh;
        font-size: 1.1em;
    }
`;const Xn=r.div`
    display: grid;
    margin: 15px 0;
    min-width: 100%;
    min-height: 228px;
    place-content: center;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${Q.image("disclosure/love-tarot/love-tarot-cards-promo.png")});

    @media only screen and (max-height: ${Ft}) {
        min-height: 30vh;
    }
`,Yn=r(bn)`
    height: auto;
    margin-bottom: 4vh;
    
    @media only screen and (max-height: ${Ft}) {
        margin-bottom: 10vh;
    }

    @media only screen and (min-width: ${he.DESKTOP.MIN}) {
        justify-content: flex-start;
    }
`;r(jn)``;const Zn=r(wn)`
    text-align: center;
    color: ${kn};

    @media only screen and (max-height: ${Ft}) {
        font-size: 1.3em;
    }
`,Jn=r(yn)`
    color: ${kn};

    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;

    > strong {
        font-size: 38px;
        font-weight: ${me.BLACK};
    }


    > span:nth-child(1) {
        font-size: 28px;
        font-weight: ${me.NORMAL};;
    }

    > span:nth-child(3) {
        display: block;
        text-align: center;
    }
    
    @media only screen and (max-height: ${Ft}) {
        font-size: 1.1em;
    }
`;r($n)`
    color: ${kn};
`,r(vn)`
    color: ${kn};

    &:hover {
        color: ${kn};
    }
`,r.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > span {
        text-align: center;
        font-size: 1.0714em;
        margin: 14px auto 16px auto;
        color: ${kn};
        max-width: ${t.isInternational()?"35ch":"29ch"};

        b {
            font-weight: ${me.BLACK};
        }
    } 

    > picture {
        margin-bottom: 27px;

        > img {
            max-width: 100%;
        }
    }

    @media only screen and (max-height: ${Ft}) {
        flex: initial;
        min-height: 42vh;
        align-items: center;
        justify-content: space-around;

        > picture {
            margin-bottom: 0;
        }

        > span {
            margin: initial;
        }
    }
`;const Qn=r.picture`
    > img {
        width: 100%;
    }

    @media only screen and (max-height: ${Ft}) {
        width: 70%;
        margin: 0 auto;
    }
    
    @media only screen and (min-width: ${he.TABLET.MIN}) {
        margin-bottom: 7px;

        ${Xn} {
            min-height: 258px;
        }
    }
`;r.picture`
    @media only screen and (max-height: ${Ft}) {
        width: 70%;
    }
`;const eo=r.img``,io=r(Qn)`
    width: 32rem;
    
    @media only screen and (max-height: ${Ft}) {
        width: 21rem;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 25rem;
    }
`;r.span`
    font-size: 18px;
    margin-top: 41px;
    line-height: 1.33;
    text-align: center;
    color: ${"#eeddff"};

    > strong {
        font-weight: ${me.BLACK};
    }

    @media only screen and (max-height: ${Ft}) {
        margin-top: 3vh;
    }
`,r.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    ${io} > img {
        max-width: 239px;
        margin-top: 27px;
    }
`,r(Yn)`
    display: flex;
    margin: 20px 0;
    min-height: 300px;
    align-items: center;
    justify-content: center;
    
    @media only screen and (max-height: ${Ft}) {
        margin: 10px 0;
    }
`;const to=r.div`
    display: flex;
    height: 5.3rem;
    font-size: 3rem;
    align-items: center;
    line-height: initial;
    color: ${ce.WHITE};
    justify-content: center;
    width: calc(100% + 1.7143em);
    font-weight: ${me.BLACK};
    background-color: rgba(255, 20, 115, 0.3);
`;r(Zn)`
    color: ${ce.WHITE};
    
    @media only screen and (max-height: ${Ft}) {
        font-size: 1.2em;
    }
`,r(Jn)`
    color: ${On};
    
    > span:nth-child(3) {
        color: ${ce.WHITE};
    }   

    @media only screen and (max-height: ${Ft}) {
        > strong {
            font-size: 1.7em;
        }
    }
`;const no=r($n)`
    margin: 0;
    width: 28rem;
    font-size: 1.8rem;
    padding-top: 0.4rem;
    color: ${ce.WHITE};
    font-weight: ${me.BOLD};

    strong {
        font-weight: ${me.BLACK};
    }
`;r(vn)`
    color: ${ce.WHITE};
`,r.picture``;const oo=r.div`
    display: flex;
    font-size: 5rem;
    margin-top: 24px;
    align-items: center;
    color: ${ce.WHITE};
    font-weight: ${me.BLACK};

    > div {
        display: flex;
        align-items: center;
        flex-direction: column;

        > span {
            line-height: initial;
        }
    }
`,so=r.div`
    font-size: 1.5rem;
    font-weight: ${me.BOLD};
`,ao=r.div`
    flex: 4;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`,ro=r.div`
    flex: 4;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-height: ${Ft}) {
        flex: 1;
    }
`,lo=r.div`
    flex: 1;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`,co=o((({intl:i,...t})=>{const{item:n,plans:o,animation:r,handleClose:l,handleClickNext:d}=t,c=O(n.countdown.end,n.countdown.start,{mask:ki}),h=(()=>{const e=c.split(":");return{hours:e[0],minutes:e[1],seconds:e[2]}})(),u=m.useMemo((()=>o&&o.promo?e.jsx(to,{children:e.jsx(a,{id:"disclosure.countdown.price",values:{price:o.promo.value.full}})}):null),[o]);return e.jsxs(Ln,{animation:r,children:[e.jsx(zn,{onClick:()=>l(!1),alt:i.formatMessage({id:"common.close"})}),e.jsx(eo,{src:Q.image("disclosure/countdown/logo-astrolink.svg"),alt:i.formatMessage({id:"disclosure.logoAlt"})}),e.jsx(ro,{children:e.jsx(de,{Container:io,path:"disclosure/countdown/countdown-img-modal",alt:i.formatMessage({id:"disclosure.lovetarot.text"})})}),e.jsxs(ao,{children:[u,e.jsx(no,{children:e.jsx(a,{id:"disclosure.countdown.discountText"})}),e.jsxs(oo,{children:[e.jsxs("div",{children:[e.jsx("span",{children:h.hours}),e.jsx(so,{children:e.jsx(s,{id:"disclosure.countdown.hour"})})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[":",h.minutes,":"]}),e.jsx(so,{children:e.jsx(s,{id:"disclosure.countdown.minute"})})]}),e.jsxs("div",{children:[e.jsx("span",{children:h.seconds}),e.jsx(so,{children:e.jsx(s,{id:"disclosure.countdown.second"})})]})]})]}),e.jsx(lo,{children:e.jsx(Pn,{onClick:d,children:e.jsx(s,{id:"disclosure.countdown.wannaEnjoy"})})})]})})),mo="#a625c2",ho=r.div`
    display: flex;
    margin-bottom: 27px;
    font-size: 1.0625em;
    align-items: flex-end;
    justify-content: center;
    font-weight: ${({theme:{fontWeights:e}})=>e.black};

    div {
        display: flex;
        align-items: flex-end;
        
        &:first-child span:last-child {
            line-height: 1;
            font-size: 2.7059em;
        }

        &:last-child {
            margin-left: 3px;
            flex-direction: column;
            align-items: flex-start;

            span:last-child {
                font-weight: ${({theme:{fontWeights:e}})=>e.normal};
            }
        }
    }
`,uo=l`
    transform: scale(105%);

    > h3,
    > div {
        border: 2px solid ${mo};
    }

    > h3 {
        border-bottom: none;
        border: 3px solid ${xe.transparentize(mo,.8)};
    }

    > div {
        border-radius: 8px;
        background-color: ${({theme:{colors:e}})=>e.white};
        border: 3px solid ${xe.transparentize(mo,.8)};
    }

    &[data-best-choice="true"] > div {
        border-radius: 0 0 8px 8px;
    }
`,po=r.div`
    font-size: 16px;
    cursor: pointer;
    will-change: border-color;
    border: 3px solid transparent;
    transition: transform 250ms ease-in, 
                border-color 250ms ease-in;

    > h3 {
        margin: 0;
        display: none;
        padding: 2px 0;
        font-size: 13px;
        text-align: center;
        transform: translateY(1px);
        border-radius: 7px 7px 0 0;
        border-bottom: none !important;
        background-color: ${mo};
        color:  ${({theme:{colors:e}})=>e.white};
    }

    h3 {
        transition: border-color 250ms ease-in, border-radius 250ms ease-in;
    }

    > div {
        height: 30vh;
        max-height: 220px;
        padding: 22px 8px;
        border-radius: 7px;
        will-change: border-color;
        transition: border-color 250ms ease-in;
        background-color: ${({theme:{colors:e}})=>xe.transparentize(e.white,.8)};

        h2 {
            display: flex;
            margin: 0 0 17px 0;
            font-size: .9375em;
            align-items: center;
            flex-direction: column;

            span {
                text-align: center;
            }
    
            b {
                display: block;
                font-size: 1.1333em;
                font-weight: ${({theme:{fontWeights:e}})=>e.black};
            }
        }

        > div {
            will-change: color;
            transition: color 250ms ease-in;
        }

        > span {
            display: block;
            line-height: 1;
            font-size: .875em;
            text-align: center;
        }
    }

    &:hover {
        cursor: pointer;
    }

    &[data-best-choice="true"] {
        h2 > b {
            color: ${mo}
        }

        > h3 {
            display: inherit;
        }

        > div {
            border-radius: 0 0 7px 7px;
            border-top: none !important;
        }
    }

    ${({isSelected:e})=>e&&uo};
`,go=({plan:i,isSelected:t,bestChoice:n,onClick:o})=>i?e.jsxs(po,{onClick:o,isSelected:t,"data-selected":t,"data-best-choice":n,children:[e.jsx(s,{id:"disclosure.selection.bestChoice",children:i=>e.jsx("h3",{children:i})}),e.jsxs("div",{children:[e.jsx("h2",{dangerouslySetInnerHTML:{__html:i.title}}),e.jsxs(ho,{children:[e.jsxs("div",{children:[i.currency,e.jsx("span",{children:i.installment.int})]}),e.jsxs("div",{children:[e.jsxs("span",{children:[",",i.installment.float]}),e.jsx(a,{id:"disclosure.selection.month"})]})]}),e.jsx(s,{id:"disclosure.selection.chargeFor.title",values:{price:i.value.full,currency:i.currency},children:t=>e.jsxs("span",{children:[t," ",i.chargeFor]})})]})]}):null;r.h1`
    display: grid;
    grid-template-columns: 0.5em 1fr 0.5em;
`;const xo=r(Zt)`
    font-size: 16px;
    padding: 11px 22px;

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 26.643em;
        background-size: 100% 100%;
    }
`,fo=r.div`
    flex: 1;
    gap: 15px;
    display: flex;
    min-height: 30%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > span {
        font-size: 1.125em;
        text-align: center;
        color: ${({theme:{colors:e}})=>e.white};

        > strong {
            font-weight: ${({theme:{fontWeights:e}})=>e.black};
        }

        &:nth-of-type(2) {
            font-size: 1.125em;
        }
    }
`,bo=r.div`
    flex: 2;

    > div {
        display: flex;
        height: fit-content;
        align-items: flex-end;
    }
`,jo=r(xo)`
    display: grid;
    padding-bottom: 40px;

    p, h1 {
        margin: 0;
        text-align: center;
        color: ${({theme:{colors:e}})=>e.white};
    }

    > img {
        top: 16px;
        left: 16px;
        width: 11px;
        cursor: pointer;
        position: absolute;
        object-fit: contain;
    }

    > h1 {
        font-size: 1.5em;
        font-weight: ${({theme:{fontWeights:e}})=>e.black};
    }

    > div {
        display: flex;
    }

    ${po} {
        h2,
        h2 > b,
        > span {
            color: ${({theme:{colors:e}})=>e.gray800};
        }
        
        h2 > b {
            color: ${ji};
        }

        > h3 {
            background-color: ${wi};
        }

        &[data-selected="true"] {
            > h3,
            > div {
                border-color: ${wi};
            }
        }
    }

    > ${vi} {
        height: 3.5em;
        width: 17.375em;
        max-width: 100%;
        max-height: 80px;
        border-radius: 27px;

        > span {
            font-size: 1.25em;
        }
    }

    @media only screen and (min-height: 600px) {
        display: flex;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        padding-bottom: 20px;
    }
`,wo=o((({intl:i,plans:t,animation:n,selectedPlan:o,handleClickPrevious:a,handleClickPayment:r,handleClickPlan:l,handleClose:d})=>e.jsxs(jo,{animation:n,children:[e.jsx("img",{src:Q.image("disclosure/arrow-back.svg"),onClick:a}),e.jsx(s,{id:"disclosure.alPremium",children:i=>e.jsx("h1",{children:i})}),e.jsxs(fo,{children:[e.jsx(s,{id:"disclosure.countdown.firstMonth",values:{price:t.promo.value.full},children:i=>e.jsx("span",{children:e.jsx("strong",{children:i})})}),e.jsx(s,{id:"disclosure.countdown.chooseAPlan",children:i=>e.jsx("span",{children:e.jsx("strong",{children:i})})}),e.jsx(s,{id:"disclosure.intro.cancelAtWill",children:i=>e.jsx("span",{children:i})})]}),e.jsxs(bo,{children:[e.jsx(zn,{onClick:()=>d(!1),alt:i.formatMessage({id:"common.close"})}),e.jsxs("div",{children:[e.jsx(go,{bestChoice:!0,isSelected:o===t.semiannual.id,onClick:()=>l(t.semiannual.id),plan:{...t.semiannual,title:i.formatMessage({id:"disclosure.selection.semiannual"}),chargeFor:i.formatMessage({id:"disclosure.selection.chargeFor.semiannual"})}},t.semiannual.id),e.jsx(go,{isSelected:o===t.monthly.id,onClick:()=>l(t.monthly.id),plan:{...t.monthly,title:i.formatMessage({id:"disclosure.selection.monthly"}),chargeFor:i.formatMessage({id:"disclosure.selection.chargeFor.month"})}},t.monthly.id)]})]}),e.jsx(vi,{disabled:!o,onClick:r,children:e.jsx(s,{id:"disclosure.selection.goToPayment"})})]}))),yo={step:_t,animation:void 0,selectedPlan:void 0,checkoutSucceeded:!1},$o=o((({intl:i,item:n,user:o,plans:s,getById:a,handleClose:r,setMetrics:l})=>{var d;const[c,h]=m.useState(yo),u=m.useRef(null),p=n&&(null==(d=n.payment)?void 0:d.promoPlanId)&&s&&s.promo,g=()=>{var e;if(!c.selectedPlan)return;l(q.FEATURE,q.CATEGORY_MODAL,q.UNLOCK_MODAL,"");const i=p?s.promo:c.selectedPlan,t=document.querySelector('meta[name="csrfToken"]').content||"";null==(e=u.current)||e.openModal({coupon:"",id:"plan_id",token:t,countryCode:"BR",countryName:"Brasil",planId:i.id,userName:o.usu_nome,userEmail:o.usu_email,amountTotal:i.amount,reference:n.payment.ref,renewPlanId:c.selectedPlan.id,currencyCode:i.currency,amount:i.installment.full,route:`${window.SITE_URL}/assinar/checkout`})},x=(e,i)=>{h({...c,animation:void 0});const t="slideIn"+(i?"Reverse":""),n="slideOut"+(i?"Reverse":"");h({...c,animation:n}),setTimeout((()=>((e,i)=>{h({...c,step:e,animation:i}),setTimeout((()=>h({...c,step:e,animation:void 0})),Bt)})(e,t)),Bt)},f=()=>x(c.step===Wt?_t:Wt,!0),b=()=>{if(t.isInternational()){const e=i.formatMessage({id:"common.subscriptionButton.link"});Q.location(Q.base(`${e}?ref=${n.payment.ref}`))}else x(c.step===_t?Wt:Dt,!1)},j=e=>{const i=a(e);i&&h({...c,selectedPlan:i})};return e.jsxs(Bn,{children:[(()=>{if(c.checkoutSucceeded)return e.jsx(dn,{handleClose:r});return{[Dt]:e.jsx(wo,{plans:s,handleClose:r,animation:c.animation,isPromotional:p,handleClickPlan:j,handleClickPayment:g,handleClickPrevious:f,selectedPlan:c.selectedPlan&&c.selectedPlan.id}),[Wt]:e.jsx(Vn,{handleClose:r,animation:c.animation,isPromotional:p,handleClickNext:b,handleClickPrevious:f,price:s&&s.promo&&s.promo.value.full,item:n}),[_t]:e.jsx(co,{item:n,plans:s,handleClose:r,animation:c.animation,handleClickNext:b})}[t.isInternational()?_t:c.step]})(),c.selectedPlan&&e.jsx(fe,{hideCoupon:!0,name:o.usu_nome,ref:u,email:o.usu_email})]})})),vo=r(Yt)`
    width: 26.643em;
`,ko=r(nn).attrs((()=>({src:Q.image("close.svg")})))``,Eo=r(sn)`  
    background-size: cover;
    background-position: top center;
    background-color: ${Oe};
    background-image: url(${Q.image("disclosure/biorhythm/modal/subscribe-bg.webp")});
    
    ${p} {
        background-image: none;
        background-image: linear-gradient(to bottom, ${Se} 0%, ${Le} 100%);
        
        > b {
            color: ${({theme:e})=>e.colors.white};
        }
    }
    
    ${g} {
        color: ${({theme:e})=>e.colors.white};
    }
`,Co=({handleClose:i,redirectTo:t})=>e.jsxs(Eo,{children:[e.jsx(ko,{onClick:()=>i(!0)}),e.jsx(vo,{children:e.jsx(x,{isModal:!0,isGuide:!0,isExperiment:!0,redirectTo:t})})]});r.h1`
    display: grid;
    grid-template-columns: 0.5em 1fr 0.5em;
`;const Ao=r(Zt)`
    font-size: 16px;
    padding: 11px 22px;

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 26.643em;
        background-size: 100% 100%;
    }
`,Mo=r(ie)`
    border: none;
    min-width: 200px;
    border-radius: ${({theme:e})=>e.radii.round};
    background: linear-gradient(101deg, ${Se}, ${Le});

    &[disabled] { 
        background: ${({theme:e})=>e.colors.gray500};
    }

    :active { 
        box-shadow: inset 0 0 6px 2px rgba(0,0,0, 0.4);
    }

    > span,
    :hover > span {
        font-size: 1.2857em;
        color: ${({theme:e})=>e.colors.white};
        font-weight: ${({theme:e})=>e.fontWeights.bold};
    }
`,Io=r(Zt)`
    padding: 0;
    justify-content: flex-start;
`,Oo=r.span`
    flex-grow: 0;
    font-weight: 900;
    font-family: Lato;
    font-style: normal;
    text-align: center;
    font-stretch: normal;
    letter-spacing: normal;
    color: ${Ne};
    line-height: ${({lineHeight:e})=>e||"normal"};
    font-size: ${({fontSize:e})=>`${e}em`||"1.5em"};
`,No=r.div`
    display: flex;
    font-size: 13px;
    flex-direction: column;

    @media (max-width: ${({theme:e})=>e.breakpoints.mobile.max}) and (min-height: ${({theme:e})=>e.breakpoints.mobile.max}) {
        font-size: 20px;
    }
`,To=r.div`
    display: flex;
    margin-bottom: 3vh;
    align-items: center;
    flex-direction: column;
`,Lo=r($n)`
    font-size: 16px;
    line-height: normal;
    margin: ${({theme:e})=>e.space.butterfly} 0;
`,So=r.picture`
    z-index: 1;

    > img {
        max-width: 100%;
    }
`,Ro=r.div`
    flex: 1;
    z-index: 2;
    display: flex;
    margin-top: -100px;
    flex-direction: column;
    justify-content: space-between;
`,zo="disclosure.guide2025.intro",Po=o((({intl:i,...n})=>{const o=t.getLang();return e.jsxs(Io,{animation:n.animation,children:[e.jsx(nn,{onClick:()=>n.handleClose(!1),alt:i.formatMessage({id:"common.close"})}),e.jsxs(So,{children:[e.jsx("source",{type:"image/jpg",media:`(min-height: ${ue.light.breakpoints.mobile.max})`,srcSet:Q.image(`disclosure/guide2025/modal/bg_intro_${o}.jpg`)}),e.jsx("img",{src:Q.image(`disclosure/guide2025/modal/bg_intro_mini_${o}.jpg`),alt:i.formatMessage({id:"disclosure.comparison.guide"})})]}),e.jsxs(Ro,{children:[e.jsx(No,{children:o===D.ptBr?e.jsxs(e.Fragment,{children:[e.jsx(Oo,{fontSize:2,lineHeight:"1.2",children:e.jsx(s,{id:`${zo}.personalForecast`})}),e.jsx(Oo,{fontSize:1.5,lineHeight:"1.44",children:e.jsx(s,{id:`${zo}.tarotAndCalendar`})}),e.jsx(Oo,{fontSize:1.75,children:e.jsx(s,{id:`${zo}.yearNumerology`})}),e.jsx(Oo,{fontSize:1.375,children:e.jsx(s,{id:`${zo}.articlesAndMore`})})]}):o===D.es?e.jsxs(e.Fragment,{children:[e.jsx(Oo,{fontSize:1.75,lineHeight:"1.28",children:e.jsx(s,{id:`${zo}.personalForecast`})}),e.jsx(Oo,{fontSize:2,children:e.jsx(s,{id:`${zo}.worldAstrology`})}),e.jsx(Oo,{fontSize:1.75,lineHeight:"1.2",children:e.jsx(s,{id:`${zo}.articlesAndCalendar`})})]}):e.jsxs(e.Fragment,{children:[e.jsx(Oo,{fontSize:2,lineHeight:"1.07",children:e.jsx(s,{id:`${zo}.personalForecast`})}),e.jsx(Oo,{fontSize:1.5,lineHeight:"1.38",children:e.jsx(s,{id:`${zo}.features`})})]})}),e.jsxs(To,{children:[e.jsx(Lo,{children:e.jsx(a,{id:"disclosure.guide2025.bePremium"})}),e.jsx(Mo,{variation:"contained",onClick:n.handleClickNext,children:e.jsx(s,{id:"disclosure.IWant"})})]})]})]})})),Bo=r.div` 
    flex: 1;
    gap: 15px;
    display: flex;
    min-height: 30%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > span {
        font-size: 1.125em;
        text-align: center;
        color: ${({theme:{colors:e}})=>e.white};

        > strong {
            font-weight: ${({theme:{fontWeights:e}})=>e.black};
        }

        &:nth-of-type(2) {
            font-size: 1.125em;
        }
    }
`,_o=r.div`
    flex: 2;

    > div {
        display: flex;
        height: fit-content;
        align-items: flex-end;
        gap: ${({theme:{space:e}})=>e.mouse};
    }
`,Do=r(Ao)`
    display: grid;
    padding-bottom: 40px;
    background-size: cover;
    background-image: url(${Q.image("disclosure/guide2025/modal/modal-bg.jpg")});

    p, h1 {
        margin: 0;
        text-align: center;
        color: ${({theme:{colors:e}})=>e.white};
    }

    > img {
        top: 16px;
        left: 16px;
        width: 11px;
        cursor: pointer;
        position: absolute;
        object-fit: contain;
    }

    > h1 {
        font-size: 1.5em;
        font-weight: ${({theme:{fontWeights:e}})=>e.black};
    }

    > div {
        display: flex;
    }

    ${po} {
        h2,
        h2 > b,
        > span {
            color: ${({theme:{colors:e}})=>e.gray800};
        }
        
        h2 > b {
            color: ${Te};
        }

        > h3 {
            background-color: ${Te};
        }

        &[data-selected="true"] {
            > h3,
            > div {
                border-color: ${Te};
            }
        }
    }

    @media only screen and (min-height: 600px) {
        display: flex;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        padding-bottom: 20px;
    }
`,Wo=o((({intl:i,plans:t,animation:n,selectedPlan:o,handleClickPrevious:r,handleClickPayment:l,handleClickPlan:d})=>e.jsxs(Do,{animation:n,children:[e.jsx("img",{src:Q.image("disclosure/arrow-back.svg"),onClick:r}),e.jsx(s,{id:"disclosure.alPremium",children:i=>e.jsx("h1",{children:i})}),e.jsxs(Bo,{children:[e.jsx(a,{id:"disclosure.guide2025.selection.chooseAPlan"}),e.jsx(s,{id:"disclosure.intro.cancelAtWill"})]}),e.jsx(_o,{children:e.jsxs("div",{children:[e.jsx(go,{bestChoice:!0,isSelected:o===t.semiannual.id,onClick:()=>d(t.semiannual.id),plan:{...t.semiannual,title:i.formatMessage({id:"disclosure.selection.semiannual"}),chargeFor:i.formatMessage({id:"disclosure.selection.chargeFor.semiannual"})}},t.semiannual.id),e.jsx(go,{isSelected:o===t.monthly.id,onClick:()=>d(t.monthly.id),plan:{...t.monthly,title:i.formatMessage({id:"disclosure.selection.monthly"}),chargeFor:i.formatMessage({id:"disclosure.selection.chargeFor.month"})}},t.monthly.id)]})}),e.jsx(Mo,{variation:"containedRound",disabled:!o,onClick:l,children:e.jsx(s,{id:"disclosure.selection.goToPayment"})})]}))),Fo=o((({intl:i})=>e.jsxs(xn,{children:[e.jsxs("div",{children:[e.jsx("img",{src:Q.image("disclosure/mastercard-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Mastercard"})}),e.jsx("img",{src:Q.image("disclosure/visa-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Visa"})}),e.jsx("img",{src:Q.image("disclosure/elo-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Elo"})}),e.jsx("img",{src:Q.image("disclosure/hipercard-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Hipercard"})})]}),e.jsx(s,{id:"disclosure.comparison.cardOption"})]}))),Uo=[{lang:"disclosure.comparison.orbia",free:!0,premium:!0},{lang:"disclosure.comparison.complete",free:!0,premium:!0},{lang:"disclosure.comparison.extra",free:"disclosure.comparison.two",premium:"disclosure.comparison.unlimited"},"disclosure.comparison.compatibility","disclosure.comparison.tarot","disclosure.comparison.horoscope","disclosure.comparison.biorhythm","disclosure.comparison.moonCicle","disclosure.comparison.moonNodes","disclosure.comparison.guides","disclosure.comparison.noAds"],Ho=r.td`
    background-position: center;
    background-repeat: no-repeat;
`,qo=r(Ho)`
    background-size: 23px;
    background-image: url(${Q.image("disclosure/countdown/checked.svg")});
    `,Ko=r(Ho)`
    background-size: 16px;
    background-image: url(${Q.image("disclosure/countdown/unchecked.svg")});
`,Go=r.table`
    width: 100%;
    font-size: 16px;

    tbody,
    thead th:not(:first-child) {
        background-color: ${({theme:e})=>e.colors.white};
    }

    tbody {
        tr:first-child td {
            padding-top: .8571em;

            &:first-child {
                border-top-left-radius: .7143em;
            }
        }

        tr:nth-child(2) td:nth-child(2) {
            font-size: 16px;
            font-weight: ${({theme:e})=>e.fontWeights.black};
        }

        tr:last-child td {
            padding-bottom: .8571em;

            &:first-child {
                border-bottom-left-radius: .7143em;
            }

            &:last-child {
                border-bottom-right-radius: .7143em;
            }
        }
    }

    tr {
        &:first-child > td:not(:first-child){
            font-weight: ${({theme:e})=>e.fontWeights.black};
        }
        
        & > td:not(:first-child){
            padding: 0;
            color: #07A90E;
            font-weight: ${({theme:e})=>e.fontWeights.bold};
        }
        
        > td:first-child {
            font-size: 1em;
            padding-right: 0;
            text-align: left;
            font-weight: ${({theme:e})=>e.fontWeights.normal};
        }
    }

    th,
    td {
        text-align: center;

        &:nth-child(2) {
            padding: 0 8px;
            border-right: ${({theme:e})=>`1px solid ${xe.transparentize(e.colors.black,.2)};`};
        }
    }

    th {
        padding: .8em 0.4286em;
        
        &:nth-child(2) {
            border-top-left-radius: .7143em;
            font-weight: ${({theme:e})=>e.fontWeights.normal};
        }

        &:last-child {
            border-top-right-radius: .7143em;
        }
    }

    td {
        padding: .4286em 1.2857em;
    }

    @media only screen and (min-height: ${Ft}) {
        margin: 28px 0;
    }

    @media only screen and (max-height: ${({theme:e})=>e.breakpoints.mobile.max}) {
        margin-bottom: ${E.apple.phone?"1vh":"1.5vh"}
    }
`,Vo=({itemList:i=Uo})=>{const t=i=>"string"==typeof i?e.jsx(s,{id:i,children:i=>e.jsx("td",{children:i})}):i?e.jsx(qo,{}):e.jsx(Ko,{});return e.jsxs(Go,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx(s,{id:"disclosure.comparison.free",children:i=>e.jsx("th",{children:i})}),e.jsx(s,{id:"disclosure.comparison.premium",children:i=>e.jsx("th",{children:i})})]})}),e.jsx("tbody",{children:i.map((i=>"string"==typeof i?e.jsxs("tr",{children:[e.jsx(s,{id:i,children:i=>e.jsx("td",{children:i})}),e.jsx(Ko,{}),e.jsx(qo,{})]},i.split(".").at(-1)):e.jsxs("tr",{children:[e.jsx(s,{id:i.lang,children:i=>e.jsx("td",{children:i})}),t(i.free),t(i.premium)]},i.lang.split(".").at(-1))))})]})},Xo=r(Zt)`
    background-size: cover;
    background-image: url(${Q.image("disclosure/guide2025/modal/modal-bg.jpg")});
`,Yo=r.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.space.mouse};
`,Zo=r(ie)`
    > span {
        font-size: 16px;
        color: ${({theme:e})=>e.colors.white};
    }
`,Jo=o((({item:i,intl:t,animation:n,handleClickNext:o,handleClickPrevious:r})=>{var l;const d=Q.base(`${t.formatMessage({id:"common.routes.subscription"})}?ref=${null==(l=i.payment)?void 0:l.ref}`);return e.jsxs(Xo,{animation:n,children:[e.jsxs(cn,{children:[e.jsx(Qt,{onClick:r}),e.jsx(a,{id:"disclosure.countdown.astrolinkPremium"})]}),e.jsx(tn,{children:e.jsx(s,{id:"disclosure.comparison.unlock"})}),e.jsxs(mn,{children:[e.jsx(Vo,{}),e.jsx(Fo,{})]}),e.jsxs(Yo,{children:[e.jsx(Mo,{variation:"containedRound",onClick:o,children:e.jsx(s,{id:"disclosure.unlockNow"})}),e.jsx(Zo,{variation:"text",href:d,children:e.jsx(s,{id:"disclosure.intro.otherPayMethods"})})]})]})})),Qo={step:_t,animation:void 0,selectedPlan:void 0,checkoutSucceeded:!1},es=r(sn)`
    background-color: ${({theme:e})=>e.colors.black};

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 40vw;
        max-width: 390px;
    }

    &,
    > div {
        overflow: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            width: 0px;
            height: 0px;
        }
    }
`,is=o((({intl:i,item:n,user:o,plans:s,getById:a,handleClose:r,setMetrics:l})=>{var d;const[c,h]=m.useState(Qo),u=m.useRef(null),p=o.usu_assinante===$e.S,g=n&&(null==(d=n.payment)?void 0:d.promoPlanId)&&s&&s.promo,x=()=>{var e,i;if(!c.selectedPlan)return;l(q.FEATURE,q.CATEGORY_MODAL,q.UNLOCK_MODAL,"");const t=g?s.promo:c.selectedPlan,a=document.querySelector('meta[name="csrfToken"]').content||"";null==(i=u.current)||i.openModal({coupon:"",id:"plan_id",token:a,countryCode:"BR",countryName:"Brasil",planId:t.id,userName:o.usu_nome,userEmail:o.usu_email,amount:t.value.full,amountTotal:t.amount,renewPlanId:c.selectedPlan.id,currencyCode:t.currency,reference:null==(e=n.payment)?void 0:e.ref,route:`${window.SITE_URL}/assinar/checkout`})},f=(e,i)=>{h({...c,animation:void 0});const t="slideIn"+(i?"Reverse":""),n="slideOut"+(i?"Reverse":"");h({...c,animation:n}),setTimeout((()=>((e,i)=>{h({...c,step:e,animation:i}),setTimeout((()=>h({...c,step:e,animation:void 0})),Bt)})(e,t)),Bt)},b=()=>f(c.step===Wt?_t:Wt,!0),j=()=>{var e;if(p)return Q.location(Q.base(i.formatMessage({id:"common.routes.features.biorhythm"})));if(t.isInternational()||t.isApp()){const t=i.formatMessage({id:"common.subscriptionButton.link"});Q.location(Q.base(`${t}?ref=${null==(e=Re.payment)?void 0:e.ref}`))}else f(c.step===_t?Wt:Dt,!1)},w=e=>{const i=a(e);i&&h({...c,selectedPlan:i})};return e.jsxs(es,{children:[(()=>{if(c.checkoutSucceeded)return e.jsx(Co,{handleClose:r,redirectTo:Q.base(i.formatMessage({id:"common.routes.features.biorhythm"}))});return{[Dt]:e.jsx(Wo,{plans:s,animation:c.animation,handleClickPlan:w,handleClickPayment:x,handleClickPrevious:b,selectedPlan:c.selectedPlan&&c.selectedPlan.id}),[Wt]:e.jsx(Jo,{item:n,animation:c.animation,handleClickNext:j,handleClickPrevious:b,price:s.promo&&s.promo.value.full}),[_t]:e.jsx(Po,{animation:c.animation,handleClose:r,handleClickNext:j})}[c.step]})(),c.selectedPlan&&e.jsx(fe,{hideCoupon:!0,name:o.usu_nome,ref:u,email:o.usu_email})]})})),ts=r(ie)`
    border: none;
    display: flex;
    font-size: 1em;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background-color: #19a8b2;
    
    > span,
    :hover > span {
        display: flex;
        align-items: center;
        gap: ${({theme:e})=>e.space.bee};
        color: ${({theme:e})=>e.colors.white};
    }
`,ns=r(sn)`
    background-size: 100% 100%;
    background-position: center;
    background-image: url(${Q.image("disclosure/love-map/modal/modal-bg.webp")}), linear-gradient(to right, 
        #783c8b 0%, 
        #913780 57%, 
        #b32f70 101%
    );

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 40vw;
        max-width: 390px;
    }

    &,
    > div {
        overflow: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            width: 0px;
            height: 0px;
        }
    }
`,os=r(Zt)`
    background: transparent;
    padding: ${({theme:e})=>e.space.mouse};;
`,ss=r.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({theme:e})=>e.space.bee};;
    margin-bottom: ${({theme:e})=>e.space.bee};
`,as=r.img` 
    max-width: 70px;
`,rs=r.img` 
    max-width: 232px;
`,ls=r.img` 
    height: auto;
    width: 100%;
    max-width: 360px;
`,ds=r.span`
    max-width: 36ch;
    font-size: 1em;
    text-align: center;
    color: ${({theme:e})=>e.colors.white};
    margin: 1em 0 0;

     strong {
        font-weight: ${({theme:e})=>e.fontWeights.bold};
     }
`,cs=r.div`
    margin-top: 0.857em;
`,ms=o((({intl:i,handleClose:t})=>e.jsx(ns,{children:e.jsxs(os,{children:[e.jsx(nn,{onClick:()=>t(!1),alt:i.formatMessage({id:"common.close"})}),e.jsxs(ss,{children:[e.jsx(as,{alt:i.formatMessage({id:"disclosure.lovemap.modal.astroLogoAlt"}),src:Q.image("disclosure/love-map/logo/astrolink-logo.webp")}),e.jsx(rs,{src:Q.image("disclosure/love-map/logo/logo.webp"),alt:i.formatMessage({id:"disclosure.lovemap.modal.logoAlt"})})]}),e.jsx(ls,{src:Q.image("disclosure/love-map/modal/modal-img.webp"),alt:i.formatMessage({id:"disclosure.lovemap.modal.imageAlt"})}),e.jsx(ds,{children:e.jsx(a,{id:"disclosure.lovemap.modal.paragraph1"})}),e.jsx(ds,{children:e.jsx(a,{id:"disclosure.lovemap.modal.paragraph2"})}),e.jsx(ds,{children:e.jsx(a,{id:"disclosure.lovemap.modal.paragraph3"})}),e.jsx(cs,{children:e.jsx(ts,{rounded:!0,variation:"contained",href:i.formatMessage({id:"common.routes.loveMap"}),children:e.jsx(s,{id:"disclosure.lovemap.learnMore"})})})]})}))),hs=r(Zt)`
    background: transparent;
`,us=r.div`
    margin-bottom: ${({theme:e})=>e.space.butterfly};
`,ps=r.img` 
    max-width: 155px;
`,gs=r.img` 
    height: 55vh;
    max-height: 380px;
`,xs=r.span`
    max-width: 36ch;
    font-size: 1.25em;
    text-align: center;
    margin-bottom: 10px;
    color: ${({theme:e})=>e.colors.white};
    line-height: ${({theme:e})=>e.lineHeights[1]};
    font-weight: ${({theme:e})=>e.fontWeights.bold};
`,fs=r.span`
    font-size: 1em;
    max-width: 37ch;
    text-align: center;
    margin-bottom: 10px;
    color: ${({theme:e})=>e.colors.white};
    line-height: ${({theme:e})=>e.lineHeights[1]};
`,bs=r.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: ${({theme:e})=>e.space.bee};
`,js=o((({intl:i,...n})=>{const{animation:o,handleClose:a,handleClickNext:r}=n,l=m.useMemo((()=>t.getLang()),[]),d=m.useMemo((()=>Q.image(`disclosure/biorhythm/logo/logo-${l}.webp`)),[l]);return e.jsxs(hs,{animation:o,children:[e.jsx(nn,{onClick:()=>a(!1),alt:i.formatMessage({id:"common.close"})}),e.jsx(us,{children:e.jsx(ps,{src:d,alt:i.formatMessage({id:"disclosure.biorhythm.logoAlt"})})}),e.jsx(xs,{children:e.jsx(s,{id:"disclosure.biorhythm.modal.title"})}),e.jsx(fs,{children:e.jsx(s,{id:"disclosure.biorhythm.modal.subtitle"})}),e.jsx(gs,{src:Q.image(`disclosure/biorhythm/modal/biorhythm-mockup-${l}.webp`),alt:i.formatMessage({id:"disclosure.biorhythm.modal.phoneImageAlt"})}),e.jsxs(bs,{children:[e.jsxs(jt,{variation:"contained",onClick:r,children:[e.jsx(s,{id:"disclosure.intro.wannaBePremium"}),e.jsx("img",{src:Q.image("disclosure/synastry/icon-key.png")})]}),e.jsx($n,{children:e.jsx(s,{id:"disclosure.intro.cancelAtWill"})})]})]})}));r.h1`
    display: grid;
    grid-template-columns: 0.5em 1fr 0.5em;
`;const ws=r(Zt)`
    font-size: 16px;
    padding: 11px 22px;

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 26.643em;
        background-size: 100% 100%;
    }
`,ys=r.div`
    flex: 1;
    gap: 15px;
    display: flex;
    min-height: 30%;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > span {
        font-size: 1.125em;
        text-align: center;
        color: ${({theme:{colors:e}})=>e.white};

        > strong {
            font-weight: ${({theme:{fontWeights:e}})=>e.black};
        }

        &:nth-of-type(2) {
            font-size: 1.125em;
        }
    }
`,$s=r.div`
    flex: 2;

    > div {
        display: flex;
        height: fit-content;
        align-items: flex-end;
        gap: ${({theme:{space:e}})=>e.mouse};
    }
`,vs=r(ws)`
    display: grid;
    padding-bottom: 40px;
    background: transparent;

    p, h1 {
        margin: 0;
        text-align: center;
        color: ${({theme:{colors:e}})=>e.white};
    }

    > img {
        top: 16px;
        left: 16px;
        width: 11px;
        cursor: pointer;
        position: absolute;
        object-fit: contain;
    }

    > h1 {
        font-size: 1.5em;
        font-weight: ${({theme:{fontWeights:e}})=>e.black};
    }

    > div {
        display: flex;
    }

    ${po} {
        h2,
        h2 > b,
        > span {
            color: ${({theme:{colors:e}})=>e.gray800};
        }
        
        h2 > b {
            color: ${gt};
        }

        > h3 {
            background-color: ${gt};
        }

        &[data-selected="true"] {
            > h3,
            > div {
                border-color: ${gt};
            }
        }
    }

    @media only screen and (min-height: 600px) {
        display: flex;
    }

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        padding-bottom: 20px;
    }
`,ks=r(jt)`
    &[disabled] { 
        background: #adadad;
    }
`,Es=o((({intl:i,plans:t,animation:n,selectedPlan:o,handleClickPrevious:a,handleClickPayment:r,handleClickPlan:l})=>e.jsxs(vs,{animation:n,children:[e.jsx("img",{src:Q.image("disclosure/arrow-back.svg"),onClick:a}),e.jsx(s,{id:"disclosure.alPremium",children:i=>e.jsx("h1",{children:i})}),e.jsxs(ys,{children:[e.jsx(s,{id:"disclosure.countdown.chooseAPlan",children:i=>e.jsx("span",{children:e.jsx("strong",{children:i})})}),e.jsx(s,{id:"disclosure.intro.cancelAtWill",children:i=>e.jsx("span",{children:i})})]}),e.jsx($s,{children:e.jsxs("div",{children:[e.jsx(go,{bestChoice:!0,isSelected:o===t.semiannual.id,onClick:()=>l(t.semiannual.id),plan:{...t.semiannual,title:i.formatMessage({id:"disclosure.selection.semiannual"}),chargeFor:i.formatMessage({id:"disclosure.selection.chargeFor.semiannual"})}},t.semiannual.id),e.jsx(go,{isSelected:o===t.monthly.id,onClick:()=>l(t.monthly.id),plan:{...t.monthly,title:i.formatMessage({id:"disclosure.selection.monthly"}),chargeFor:i.formatMessage({id:"disclosure.selection.chargeFor.month"})}},t.monthly.id)]})}),e.jsx(ks,{variation:"containedRound",disabled:!o,onClick:r,children:e.jsx(s,{id:"disclosure.selection.goToPayment"})})]}))),Cs=r(Zt)`
    max-height: 100%;
    background-size: cover;
    background-color: ${bt};
    background-image: url(${Q.image("disclosure/biorhythm/modal/modal-bg.webp")});
`,As=r.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme:e})=>e.space.mouse};
`,Ms=r(ie)`
    > span {
        font-size: 16px;
        color: ${({theme:e})=>e.colors.white};
    }
`,Is=r(hn)`
    tr > td:first-child {
        font-weight: ${({theme:e})=>e.fontWeights.normal};
    }
    
    tr:first-child > td:not(:first-child) {
        font-weight: ${({theme:e})=>e.fontWeights.black};
    }

    tbody tr:nth-child(2) td {
        color: ${xt};
    }
`,Os=o((({intl:i,animation:t,handleClickNext:n,handleClickPrevious:o})=>e.jsxs(Cs,{animation:t,children:[e.jsxs(cn,{children:[e.jsx(Qt,{onClick:o}),e.jsx(a,{id:"disclosure.countdown.astrolinkPremium"})]}),e.jsx(tn,{children:e.jsx(s,{id:"disclosure.comparison.unlock"})}),e.jsxs(mn,{children:[e.jsxs(Is,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{}),e.jsx(s,{id:"disclosure.comparison.free",children:i=>e.jsx("th",{children:i})}),e.jsx(s,{id:"disclosure.comparison.premium",children:i=>e.jsx("th",{children:i})})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx(s,{id:"disclosure.comparison.complete",children:i=>e.jsx("td",{children:i})}),e.jsx(pn,{}),e.jsx(pn,{})]}),e.jsxs("tr",{children:[e.jsx(s,{id:"disclosure.comparison.extra",children:i=>e.jsx("td",{children:i})}),e.jsx("td",{children:"2"}),e.jsx("td",{children:"ilimitado"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Compatibilidade/ Sinastria"}),e.jsx(gn,{}),e.jsx(pn,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Tarot ilimitado"}),e.jsx(gn,{}),e.jsx(pn,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Horóscopo Personalizado"}),e.jsx(gn,{}),e.jsx(pn,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Biorritmo"}),e.jsx(gn,{}),e.jsx(pn,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Ciclo Lunar"}),e.jsx(gn,{}),e.jsx(pn,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Nodos Lunares"}),e.jsx(gn,{}),e.jsx(pn,{})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"Guias Astrológicos"}),e.jsx(gn,{}),e.jsx(pn,{})]})]})]}),e.jsxs(xn,{children:[e.jsxs("div",{children:[e.jsx("img",{src:Q.image("disclosure/mastercard-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Mastercard"})}),e.jsx("img",{src:Q.image("disclosure/visa-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Visa"})}),e.jsx("img",{src:Q.image("disclosure/elo-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Elo"})}),e.jsx("img",{src:Q.image("disclosure/hipercard-logo.png"),alt:i.formatMessage({id:"disclosure.comparison.banner"},{banner:"Hipercard"})})]}),e.jsx(s,{id:"disclosure.comparison.cardOption"})]})]}),e.jsxs(As,{children:[e.jsxs(jt,{variation:"containedRound",onClick:n,children:[e.jsx(s,{id:"disclosure.unlockNow"}),e.jsx("img",{src:Q.image("disclosure/synastry/icon-key.png")})]}),e.jsx(Ms,{variation:"text",href:`/assinar?ref=${Pt.reference}`,children:e.jsx(s,{id:"disclosure.intro.otherPayMethods"})})]})]}))),Ns=r(Yt)`
    width: 26.643em;
`,Ts=r(nn).attrs((()=>({src:Q.image("close.svg")})))``,Ls=r(sn)`  
    background-size: cover;
    background-color: ${pt};
    background-image: url(${Q.image("disclosure/biorhythm/modal/subscribe-bg.webp")});
    background-position: top center;
    
    ${p} {
        background-image: none;
        background-image: linear-gradient(to bottom, ${bt} 0%, ${ft} 100%);
        
        > b {
            color: ${({theme:e})=>e.colors.white};
        }
    }
    
    ${g} {
        color: ${({theme:e})=>e.colors.white};
    }
`,Ss=({handleClose:i,redirectTo:t})=>e.jsxs(Ls,{children:[e.jsx(Ts,{onClick:()=>i(!0)}),e.jsx(Ns,{children:e.jsx(x,{redirectTo:t,isModal:!0,isExperiment:!0,isGuide:!0})})]}),Rs={step:_t,animation:void 0,selectedPlan:void 0,checkoutSucceeded:!1},zs=r(sn)`
    background-size: 100% 100%;
    background-position: center;
    background-image: url(${Q.image("disclosure/biorhythm/modal/modal-bg.webp")}), linear-gradient(187deg,
        red,
        salmon,
        orange,
        yellow,
        mediumseagreen,
        blue,
        purple
    );

    @media only screen and (min-width: ${({theme:e})=>e.breakpoints.tablet.min}) {
        width: 40vw;
        max-width: 390px;
    }

    &,
    > div {
        overflow: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            width: 0px;
            height: 0px;
        }
    }
`,Ps=o((({intl:i,item:n,user:o,plans:s,getById:a,handleClose:r,setMetrics:l})=>{var d;const[c,h]=m.useState(Rs),u=m.useRef(null),p=o.usu_assinante===$e.S,g=n&&(null==(d=n.payment)?void 0:d.promoPlanId)&&s&&s.promo,x=()=>{var e;if(!c.selectedPlan)return;l(q.FEATURE,q.CATEGORY_MODAL,q.UNLOCK_MODAL,"");const i=g?s.promo:c.selectedPlan,t=document.querySelector('meta[name="csrfToken"]').content||"";null==(e=u.current)||e.openModal({coupon:"",id:"plan_id",token:t,countryCode:"BR",countryName:"Brasil",planId:i.id,userName:o.usu_nome,userEmail:o.usu_email,amount:i.value.full,amountTotal:i.amount,renewPlanId:c.selectedPlan.id,currencyCode:i.currency,reference:n.payment.ref,route:`${window.SITE_URL}/assinar/checkout`})},f=(e,i)=>{h({...c,animation:void 0});const t="slideIn"+(i?"Reverse":""),n="slideOut"+(i?"Reverse":"");h({...c,animation:n}),setTimeout((()=>((e,i)=>{h({...c,step:e,animation:i}),setTimeout((()=>h({...c,step:e,animation:void 0})),Bt)})(e,t)),Bt)},b=()=>f(c.step===Wt?_t:Wt,!0),j=()=>{var e;if(p)return Q.location(Q.base(i.formatMessage({id:"common.routes.features.biorhythm"})));if(t.isInternational()||t.isApp()){const t=i.formatMessage({id:"common.subscriptionButton.link"});Q.location(Q.base(`${t}?ref=${null==(e=ze.payment)?void 0:e.ref}`))}else f(c.step===_t?Wt:Dt,!1)},w=e=>{const i=a(e);i&&h({...c,selectedPlan:i})};return e.jsxs(zs,{children:[(()=>{if(c.checkoutSucceeded)return e.jsx(Ss,{redirectTo:Q.base(i.formatMessage({id:"common.routes.features.biorhythm"})),handleClose:r});return{[Dt]:e.jsx(Es,{plans:s,animation:c.animation,handleClickPlan:w,handleClickPayment:x,handleClickPrevious:b,selectedPlan:c.selectedPlan&&c.selectedPlan.id}),[Wt]:e.jsx(Os,{animation:c.animation,handleClickNext:j,handleClickPrevious:b,price:s.promo&&s.promo.value.full}),[_t]:e.jsx(js,{animation:c.animation,handleClose:r,handleClickNext:j})}[c.step]})(),c.selectedPlan&&e.jsx(fe,{hideCoupon:!0,name:o.usu_nome,ref:u,email:o.usu_email})]})}));window.SITE_URL=location.origin;const Bs=e=>{var i;return{user:e.user,item:e.item,plans:e.plans,getById:e.getById,setMetrics:e.setMetrics,isModalOpen:e.isModalOpen,onModalClose:e.onModalClose,setIsModalOpen:e.setIsModalOpen,isSubscriber:(null==(i=e.user)?void 0:i.usu_assinante)===$e.S}},_s={monthly:{},quarterly:{},semiannual:{},promo:void 0},Ds=()=>{const i=m.useRef(null),{item:t,user:n,isModalOpen:o,isSubscriber:s,getById:a,setMetrics:r,onModalClose:l,setIsModalOpen:d,plans:c=_s}=J(ti,Bs),h=m.useMemo((()=>{var e;if(!t)return!1;const i=!(null==(e=t.payment)?void 0:e.promoPlanId)||void 0!==(null==c?void 0:c.promo);return void 0!==c&&i}),[t,c]),u=e=>{e&&i.current&&i.current.classList.add("button--loading"),d(!1),l(s,e)};return h?e.jsx(ge,{isFullScreen:!0,isTransparent:!0,openModal:o,childStyle:Kt,dataTestId:"modal-disclosure",children:{[_e]:e.jsx(xi,{item:t,user:n,plans:c,getById:a,handleClose:u,setMetrics:r}),[De]:e.jsx($o,{item:t,user:n,plans:c,getById:a,handleClose:u,setMetrics:r}),[We]:e.jsx(is,{item:t,user:n,plans:c,getById:a,handleClose:u,setMetrics:r}),[Fe]:e.jsx(Ps,{item:t,user:n,plans:c,getById:a,handleClose:u,setMetrics:r}),[Ue]:e.jsx(ms,{item:t,user:n,plans:c,getById:a,handleClose:u,setMetrics:r})}[t.id]}):null},Ws=Y(o((({intl:i})=>{const[t,n]=(({intl:e})=>{var i,t,n;const[o,s]=m.useState(),[a,r]=m.useState(),[l,d]=m.useState(),c=null==(i=null==o?void 0:o.find((e=>e.type===L.USER)))?void 0:i.data,[h]=ye({isSubscriber:!1,userId:c?c.usu_id:void 0,promoId:null==(t=null==a?void 0:a.payment)?void 0:t.promoPlanId,promoSkus:null==(n=null==a?void 0:a.payment)?void 0:n.promoSkus,trigger:void 0!==(null==a?void 0:a.payment)}),u=m.useMemo((()=>new A),[]),p=m.useMemo((()=>{if(!o)return null;const e=Ke.buildPropsFromData(o);return new Ke(e)}),[o]),g=m.useMemo((async()=>{const e=localStorage.getItem("interact-terms-modal");if(e)return"true"===e;try{return await u.fetchTermsIsAccept(),!0}catch(i){return!1}}),[]),x=m.useCallback((()=>new Promise((async(e,i)=>{try{e(await Ke.getAllAvailableItems())}catch(t){throw new Error(`${t}`)}}))),[]),f=m.useCallback((async e=>new Promise((async(i,t)=>{const[n,o]=ei.getRequimentsFromList(e);try{const e=await Promise.all([...n.map((e=>ei.getStaticRequirementData(e))),...o.map((e=>ei.getDynamicRequirementData(e)))]);i(ei.groupDynamicData(e).filter((e=>e.data)))}catch(s){t(s)}}))),[]),b=m.useCallback((async()=>{const e=await x();if(!e.length)return;const i=await f(e);s(i),d(e)}),[x,f]),j=m.useCallback((i=>{if(i)return i.redirectLink?{...i,redirectLink:e.formatMessage({id:i.redirectLink})}:i}),[]),w=m.useCallback((async(e,i)=>{const t=await ei.getMissingData(e,i),n=await Ke.validateItemWithData(e,t),o=j(e.barConfig),a=j(e.modalConfig);s(t),r({...n,modalConfig:a,barConfig:o})}),[]);m.useEffect((()=>{if(a||!p||!l)return;const e=p.getActive(l);if(!e.length)return;const i=l.find((i=>i.id===e[0][1]));w(i,o)}),[p,l,a,o]),m.useEffect((()=>{g&&b()}),[g,b]);const y=m.useMemo((()=>h&&o?[...o,{type:U.PAYMENT,data:h}]:o),[h,o]);return[m.useMemo((()=>{if(a&&(!a.payment||h))return a}),[a,h]),y]})({intl:i});return t&&n?e.jsx(c,{theme:ue.dark,children:e.jsxs(ni,{item:t,data:n,children:[e.jsx(Rt,{}),e.jsx(Ds,{})]})}):null})));(async()=>{const n=document.querySelector("disclosure"),o=(()=>{const e=window.location.href,i=t.getIntl();return zt.map((e=>i.messages[e])).map((i=>!e.includes(i))).reduce(((e,i)=>e&&i))})();n&&o&&i.render(e.jsx(Ws,{}),n)})();