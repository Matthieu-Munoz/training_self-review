"use strict";(self.webpackChunkreview=self.webpackChunkreview||[]).push([[179],{6886:(e,n,t)=>{var r=t(3935),s=t(5998),c=t(8193),i=t(1633),o="SELECT_RATING",a="TOGGLE_COMMENT",u="INPUT_COMMENT",l="SUBMIT_REVIEW",v="SWITCH_SUCCES",_="GO_BACK",m="TOGGLE_ERROR",p=t(5893);const d=function(){var e=(0,s.v9)((function(e){return e.rate})),n=(0,s.I0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.oHP,{className:"review__succes__icon",onClick:function(){return n({type:_})}}),(0,p.jsx)("img",{src:i,alt:"",className:"review__succes__img"}),(0,p.jsxs)("div",{className:"review__succes__rate",children:["Une note de ",e," sur 5 !"]}),(0,p.jsx)("h2",{className:"review__succes__title",children:"Merci !"}),(0,p.jsx)("p",{className:"review__succes__text",children:"D'avoir pris le temps de donner une note. Si jamais vous voulez plus d'information, n'hésitez pas à me contacter !"})]})};var f=t(7913),w=t(4184),j=t.n(w),h=(t(1249),t(7516));const O=function(){var e=(0,s.v9)((function(e){return e.rate})),n=(0,s.v9)((function(e){return e.comment.isOpen})),t=j()("review__ratings__btn","review__ratings__btn--comment",{"review__ratings__btn--selected":n}),r=(0,s.I0)();return(0,p.jsxs)("div",{className:"review__ratings",children:[[1,2,3,4,5].map((function(n){var t=j()("review__ratings__btn",{"review__ratings__btn--selected":e===n});return(0,p.jsx)("button",{type:"button",onClick:function(){return r({type:o,value:n})},className:t,children:n},"rate=".concat(n))})),(0,p.jsx)("button",{type:"button",onClick:function(){return r({type:a})},className:t,children:(0,p.jsx)(h.Tn9,{})})]})};var b=t(4042);const g=function(){var e=(0,s.v9)((function(e){return e.comment.value})),n=(0,s.I0)();return(0,p.jsx)("div",{className:"review__comment",children:(0,p.jsx)(b.Z,{placeholder:"Ecrire un message ici...",className:"review__comment__input",style:{minHeight:50,maxHeight:100},value:e,onChange:function(e){return n((t=e.currentTarget.value,{type:u,value:t}));var t}})})};const x=function(){var e=(0,s.v9)((function(e){return e.comment.isOpen})),n=(0,s.v9)((function(e){return e.rate})),t=(0,s.v9)((function(e){return e.error})),r=j()("review__submit",{"review__submit--error":t}),i=j()("",{"Merci de séléctionner une note":t}),o=(0,s.I0)();function a(){return o(0!==n?{type:l}:{type:m,value:!0})}return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("header",{className:"review__header",children:(0,p.jsx)(c.pHD,{className:"review__header__icon"})}),(0,p.jsxs)("div",{className:"review__content",children:[(0,p.jsx)("h2",{className:"review__content__title",children:"Qu'en avez-vous pensé ?"}),(0,p.jsx)("p",{className:"review__content__text",children:"Vous pouvez donner votre avis sur ce que vous venez de voir. Tous les commentaires comptent pour m'aider à m'améliorer !"})]}),(0,p.jsx)(O,{}),e&&(0,p.jsx)(g,{}),(0,p.jsx)(f.Z,{place:"right",effect:"solid",type:"error"}),(0,p.jsx)("button",{className:r,"data-tip":i,type:"button",onClick:function(){return a()},children:"Envoyer"})]})};const y=function(){var e=(0,s.v9)((function(e){return e.rewiewSent}));return(0,p.jsx)("div",{className:"review",children:(0,p.jsx)("div",{className:"review--content",children:e?(0,p.jsx)(d,{}):(0,p.jsx)(x,{})})})};var N=t(3828);t(9070),t(7941),t(2526),t(7327),t(1539),t(5003),t(9554),t(4747),t(9337),t(3321);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){S(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var T={rewiewSent:!1,rate:0,error:!1,comment:{isOpen:!1,value:""}};const P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case o:return C(C({},e),{},{rate:n.value,error:!1});case a:return C(C({},e),{},{comment:C(C({},e.comment),{},{isOpen:!e.comment.isOpen})});case u:return C(C({},e),{},{comment:C(C({},e.comment),{},{value:n.value})});case m:return C(C({},e),{},{error:n.value});case v:return C(C({},e),{},{rewiewSent:!0});case _:return C(C({},e),{},{rewiewSent:!1,rate:0,comment:C(C({},e.comment),{},{isOpen:!1,value:""})});default:return e}};const I=function(){return function(e){return function(n){e(n)}}};const k=function(e){return function(n){return function(t){if(t.type===l){var r=e.getState(),s=r.comment,c=s.isOpen,i=s.value,o=r.rate;console.log("L'utilisateur a laissé une note de ".concat(o," sur 5.")),c&&""!==i&&(console.log("Le commentaire suivant a aussi été soumis :"),console.log(i)),e.dispatch({type:v})}else n(t)}}};var M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||N.qC;const D=(0,N.MT)(P,M((0,N.md)(I,k)));(0,r.render)((0,p.jsx)(s.zt,{store:D,children:(0,p.jsx)(y,{})}),document.getElementById("root"))},9193:()=>{},1633:(e,n,t)=>{e.exports=t.p+"fonts/e8e07e6156aea9224174.svg"}},e=>{var n=n=>e(e.s=n);e.O(0,[631],(()=>(n(9193),n(6886))));e.O()}]);