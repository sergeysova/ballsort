(this.webpackJsonpballsort=this.webpackJsonpballsort||[]).push([[0],{28:function(e,n,t){e.exports=t(41)},33:function(e,n,t){},34:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var l,r,a,o,c,i,m,u,d,s,b=t(0),p=t(22),f=(t(33),t(27)),h=(t(34),function(e){var n=e.children;return b.createElement(b.Fragment,null,b.createElement("main",null,n),b.createElement("nav",{className:"navigation"},b.createElement("a",{href:"https://effector.now.sh"},"Effector"),b.createElement("a",{href:"https://github.com/sergeysova/ball.sova.dev"},"Source Code")))}),g=t(26),x=t(8),E=t(16),v=t(9),F=t(2),k=Object(F.c)({name:"startClicked",sid:"aj4fq2"}),j=Object(F.c)({name:"restartClicked",sid:"gy6whh"}),w=Object(F.c)({name:"toMainMenuClicked",sid:"-dqq0gj"}),O=Object(F.c)({name:"tubeClicked",sid:"mp9kl2"}),y=Object(F.d)("won",{name:"$state",sid:"6rhifi"}),C=Object(F.d)(0,{name:"$moves",sid:"-604ov6"}),B=function(){return b.createElement(D,null,b.createElement(M,null,b.createElement("span",null,"BALL"),"SORT"),b.createElement(J,{onClick:k,text:"Start game"}))},A=y.map((function(e){return"won"===e})),N=function(){var e=Object(E.a)(A);return b.createElement(b.Fragment,null,b.createElement("div",null,b.createElement(J,{onClick:w,text:"\u2190"}),b.createElement(J,{onClick:j,text:"Restart"}),b.createElement(L,null)),b.createElement(R,null,b.createElement(q,{tube:{balls:[0,1,2],over:null,complete:!1},position:0,onClick:O}),b.createElement(q,{tube:{balls:[3,4,5],over:null,complete:!1},position:1,onClick:O}),b.createElement(q,{tube:{balls:[6,7,8],over:null,complete:!1},position:2,onClick:O})),e&&b.createElement(z,null))},q=function(e){var n=e.tube,t=e.position,l=e.onClick;return b.createElement(H,{onClick:l,"data-position":t},b.createElement(I,null,null!==n.over?b.createElement(Y,{ball:n.over}):null),b.createElement(T,{"data-complete":n.complete},n.balls.map((function(e,n){return b.createElement(Y,{key:n,ball:e})}))))},S={0:["#8F7E22","#FFE600"],1:["#247516","#70FF00"],2:["#466799","#00B2FF"],3:["#29777C","#00FFF0"],4:["#17206F","#4A72FF"],5:["#BABABA","#FFFFFF"],6:["#4C3283","#9D50FF"],7:["#8B11C5","#FF00F5"],8:["#9D0D41","#FF60B5"],9:["#4B0000","#FF0000"],10:["#79480F","#FF7A00"],11:["#343434","#B1B1B1"]},z=function(){var e=Object(E.a)(C);return b.createElement($,null,b.createElement("h1",null,"You won!"),b.createElement("h2",null,"In ",e," moves"),b.createElement(J,{onClick:w,text:"New game"}))},D=v.a.div(l||(l=Object(x.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n"]))),M=v.a.h2(r||(r=Object(x.a)(["\n  font-size: 3rem;\n  font-weight: 300;\n\n  & span {\n    text-decoration: underline;\n  }\n"]))),J=v.a.button.attrs((function(e){var n=e.selected;return{"data-selected":null!==n&&void 0!==n&&n,type:"button",children:e.text}}))(a||(a=Object(x.a)(["\n  background-color: white;\n  color: black;\n  padding: 0.6rem 1rem;\n  font-size: 1.3rem;\n  margin: 0 0.2rem;\n  border: 2px solid lightgray;\n  cursor: pointer;\n  position: relative;\n\n  &:hover {\n    background-color: #f1f1f1;\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 4px lightblue;\n    border-color: lightblue;\n  }\n\n  &[data-selected='true'] {\n    border-color: gray;\n    background-color: gray;\n    color: white;\n  }\n"]))),L=Object(v.a)((function(e){var n=e.className,t=Object(E.a)(C);return b.createElement("span",{className:n},"Moves: ",t)}))(o||(o=Object(x.a)(["\n  padding: 0.6rem 0.4rem;\n  font-size: 1.3rem;\n  margin: 0;\n"]))),R=v.a.div(c||(c=Object(x.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 38rem;\n"]))),$=v.a.div(i||(i=Object(x.a)(["\n  display: flex;\n  flex-flow: column;\n  position: fixed;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(255, 255, 255, 0.6);\n  backdrop-filter: blur(6px);\n  align-items: center;\n  padding-top: 5rem;\n\n  h1,\n  h2,\n  h3 {\n    color: black;\n    text-shadow: 0 0 2px white;\n  }\n\n  & > * + * {\n    margin-top: 1rem;\n  }\n"]))),H=v.a.div(m||(m=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n"]))),I=v.a.div(u||(u=Object(x.a)(["\n  display: flex;\n  height: 3rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-bottom: 4px solid lightgray;\n"]))),T=v.a.div(d||(d=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  flex-shrink: 0;\n  align-items: center;\n  border: 2px solid lightgray;\n  border-top: none;\n  width: 3rem;\n  height: 10rem;\n  padding-bottom: 0.4rem;\n  padding-top: 0.4rem;\n  border-bottom-left-radius: 2.4rem;\n  border-bottom-right-radius: 2.4rem;\n\n  &[data-complete='true'] {\n    background-color: lightgray;\n  }\n"]))),Y=Object(v.a)((function(e){var n=e.className,t=e.children,l=e.ball;return b.createElement("div",{className:n,style:{"--main-color":S[l][0],"--light-color":S[l][1]},"data-number":l},t)}))(s||(s=Object(x.a)(["\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  border: 2px solid black;\n  margin: 1px;\n  flex-shrink: 0;\n  background: radial-gradient(\n    circle at 65% 15%,\n    white 1px,\n    var(--light-color) 3%,\n    var(--main-color) 60%,\n    var(--light-color) 100%\n  );\n  position: relative;\n\n  &::after {\n    content: '' attr(data-number) '';\n    position: absolute;\n    top: 6px;\n    left: 10px;\n    color: white;\n    text-shadow: 0 0 1px black;\n    display: none;\n  }\n"]))),G=[{path:"/",exact:!0,component:function(){return"start"===Object(E.a)(y)?b.createElement(B,null):b.createElement(N,null)}},{path:"*",component:function(){return b.createElement("div",null,"Here not found")}}],K=function(){return Object(g.a)(G)},P=function(){return b.createElement(f.a,null,b.createElement(h,null,b.createElement(K,null)))};p.render(b.createElement(P,null),document.querySelector("#root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.27a6270b.chunk.js.map