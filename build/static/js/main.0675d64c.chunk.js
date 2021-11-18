(window.webpackJsonpproject_chat_application=window.webpackJsonpproject_chat_application||[]).push([[0],{117:function(e,a){},138:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){},176:function(e,a,t){},177:function(e,a,t){},178:function(e,a,t){},179:function(e,a,t){},182:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),s=t(66),o=t.n(s),l=t(74),m=t(6),i=t(34),u=t.n(i),A=t(67),E=t.n(A),p=t(68),g=t.n(p),f=t(69),h=t.n(f),d=t(21),v=t.n(d),N=(t(138),function(e){var a=e.users;return c.a.createElement("div",{className:"textContainer"},c.a.createElement("div",null,c.a.createElement("h1",null,"Realtime Chat Application ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),c.a.createElement("h2",null,"Created with React, Express, Node and Socket.IO ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),c.a.createElement("h2",null,"Try it out right now! ",c.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f"))),a?c.a.createElement("div",null,c.a.createElement("h1",null,"People currently chatting:"),c.a.createElement("div",{className:"activeContainer"},c.a.createElement("h2",null,a.map(function(e){var a=e.name;return c.a.createElement("div",{key:a,className:"activeItem"},a,c.a.createElement("img",{alt:"Online Icon",src:v.a}))})))):null)}),j=t(70),b=t.n(j),C=(t(174),t(13)),O=t.n(C),I=function(e){var a=e.message,t=a.text,n=a.user,r=a.time,s=!1,o=e.name.trim().toLowerCase();return n===o&&(s=!0),s?c.a.createElement("div",{className:"messageContainer justifyEnd"},c.a.createElement("p",{className:"sentText pr-10"},o),c.a.createElement("div",{className:"messageBox backgroundBlue"},c.a.createElement("p",{className:"messageText colorWhite"},O.a.emojify(t)),c.a.createElement("p",{className:"timeText colorWhite"},O.a.emojify(r)))):c.a.createElement("div",{className:"messageContainer justifyStart"},c.a.createElement("div",{className:"messageBox backgroundLight"},c.a.createElement("p",{className:"messageText colorDark"},O.a.emojify(t)),c.a.createElement("p",{className:"timeText colorDark"},O.a.emojify(r))),c.a.createElement("p",{className:"sentText pl-10 "},n))},x=(t(175),function(e){var a=e.messages,t=e.name;return c.a.createElement(b.a,{className:"messages"},a.map(function(e,a){return c.a.createElement("div",{key:a},c.a.createElement(I,{message:e,name:t}))}))}),S=t(71),y=t.n(S),w=(t(176),function(e){var a=e.room;return c.a.createElement("div",{className:"infoBar"},c.a.createElement("div",{className:"leftInnerContainer"},c.a.createElement("img",{className:"onlineIcon",src:v.a,alt:"online icon"}),c.a.createElement("h3",null,a)),c.a.createElement("div",{className:"rightInnerContainer"},c.a.createElement("a",{href:"/"},c.a.createElement("img",{src:y.a,alt:"close icon"}))))}),R=(t(177),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}}),c.a.createElement("button",{className:"sendButton",onClick:function(e){return t(e)}},"Send"))}),k=(t(178),function(e){var a=e.location,t=Object(r.useState)(""),s=Object(m.a)(t,2),o=s[0],i=s[1],A=Object(r.useState)(""),p=Object(m.a)(A,2),f=p[0],d=(p[1],Object(r.useState)("")),v=Object(m.a)(d,2),j=v[0],b=v[1],C=Object(r.useState)(""),O=Object(m.a)(C,2),I=O[0],S=O[1],y=Object(r.useState)(""),k=Object(m.a)(y,2),B=k[0],M=k[1],U=Object(r.useState)([]),D=Object(m.a)(U,2),Q=D[0],T=D[1];Object(r.useEffect)(function(){var e=u.a.parse(a.search),t=e.name,r=e.room;console.log("location.search===",a.search),n=E()("http://localhost:5000"),b(r),i(t),n.emit("join",{name:t,room:r},function(e){e&&alert(e)})},["http://localhost:5000",a.search]),Object(r.useEffect)(function(){var e=u.a.parse(a.search),t=(e.name,{room_name:e.room.trim().toLowerCase()});g.a.post("https://test-g5y7.randomforest.ee/api/roomData",t).then(function(e){for(var a=e.data.response,t=[],n=0;n<a.length;n++){var r={};r.user=a[n].user_name,r.text=a[n].message,r.time=h()(a[n].created_at).format("h:mm a"),t.push(r)}T(t)}),n.on("message",function(e){T(function(a){return[].concat(Object(l.a)(a),[e])}),console.log("messages==>",Q),console.log("message-----",e)}),n.on("roomData",function(e){var a=e.users;S(a)})},[]);return c.a.createElement("div",{className:"outerContainer"},c.a.createElement("div",{className:"container"},c.a.createElement(w,{room:j}),c.a.createElement(x,{messages:Q,name:o,time:f}),c.a.createElement(R,{message:B,setMessage:M,sendMessage:function(e){e.preventDefault(),B&&n.emit("sendMessage",B,function(){return M("")})}})),c.a.createElement(N,{users:I}))}),B=t(22);t(179);function M(){var e=Object(r.useState)(""),a=Object(m.a)(e,2),t=a[0],n=a[1],s=Object(r.useState)(""),o=Object(m.a)(s,2),l=o[0],i=o[1];return c.a.createElement("div",{className:"joinOuterContainer"},c.a.createElement("div",{className:"joinInnerContainer"},c.a.createElement("h1",{className:"heading"},"Join"),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return i(e.target.value)}})),c.a.createElement(B.b,{onClick:function(e){return t&&l?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(l)},c.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}var U=t(7),D=function(){return c.a.createElement(B.a,null,c.a.createElement(U.a,{path:"/",exact:!0,component:M}),c.a.createElement(U.a,{path:"/chat",component:k}))};o.a.render(c.a.createElement(D,null),document.getElementById("root"))},21:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},71:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},75:function(e,a,t){e.exports=t(182)}},[[75,1,2]]]);
//# sourceMappingURL=main.0675d64c.chunk.js.map