(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/sky-background.9751730c.jpg"},,,function(e,t,n){e.exports=n.p+"static/media/apple.1fc1361a.png"},function(e,t,n){e.exports=n.p+"static/media/timer.d25a4846.png"},function(e,t,n){e.exports=n(21)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),o=n.n(i),c=(n(17),n(1)),s=n(2),l=n(4),u=n(3),p=n(5),m=(n(19),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(e){e.preventDefault(),console.log(e.nativeEvent.type),n.props.onClick(n.props.buttonNum)},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.xPos,n=e.yPos;return r.a.createElement("rect",{width:"120",height:"120",stroke:"black",strokeWidth:"4",fill:"burlywood",y:n,x:t,onTouchStart:this.onClick,onTouchEnd:function(e){return e.preventDefault()},onClick:this.onClick})}}]),t}(r.a.Component)),h=n(9),d=n.n(h),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.xPos,n=e.yPos;return r.a.createElement("image",{x:t,y:n,height:"120",width:"120",className:"Apple",xlinkHref:d.a})}}]),t}(r.a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("rect",{height:"100%",stroke:"black",strokeWidth:"4",fill:"black",id:"resetGameOverlay",opacity:"0.85"}),r.a.createElement("rect",{height:"15%",fill:"black",y:"210"}),r.a.createElement("text",{x:"225",y:"300",fill:"darkred",id:"youDiedText"},"YOU DIED"),r.a.createElement("text",{fontSize:"32",x:"190",y:"425",fill:"orange"},"Your score is "+this.props.score),r.a.createElement("text",{fontSize:"32",x:"150",y:"500",onClick:this.props.onClick,fill:"orange"},"Press here to restart."))}}]),t}(r.a.Component),v=n(6),k=n.n(v),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("image",{height:"100%",xlinkHref:k.a,id:"startGameOverlay",onClick:this.props.onClick}),r.a.createElement("text",{fontSize:"32",x:"150",y:"500",id:"gameStartText",onClick:this.props.onClick},"Press anywhere to begin!"))}}]),t}(r.a.Component),y=n(10),E=n.n(y),O=15,j=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).intervalID=null,n.updateTimer=function(){var e=n.state.secondsRemaining;e-=1,n.state.gameEnded||(e>0?n.setState({secondsRemaining:e}):(n.setState({gameEnded:!0,secondsRemaining:e}),console.log(n.state.secondsRemaining+" seconds remaining")))},n.handleButtonClick=function(e){if(!n.state.gameEnded){var t=n.state.appleLocations.slice(),a=n.state.score,r=n.state.gameEnded;t.pop()===e?(a+=1,t=n.generateApple(t),n.setState({appleLocations:t,score:a})):(r=!0,n.setState({gameEnded:r}))}},n.restartGame=function(){clearInterval(n.intervalID),n.intervalID=setInterval(n.updateTimer,1e3);var e=n.setupApples();n.setState({appleLocations:e,score:0,gameEnded:!1,secondsRemaining:O,gameStarted:!0})};var a=n.setupApples();return n.state={appleLocations:a,score:0,gameEnded:!1,secondsRemaining:O,gameStarted:!1},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"setupApples",value:function(){for(var e=[],t=0;t<8;t++){var n=Math.floor(5*Math.random());e.unshift(n)}return e}},{key:"generateApple",value:function(e){var t=Math.floor(5*Math.random());return e.unshift(t),e}},{key:"renderButtons",value:function(){for(var e=[],t=0;t<5;t++)e.push(r.a.createElement(m,{yPos:880,xPos:120*t,onClick:this.handleButtonClick,buttonNum:t,key:t}));return e}},{key:"renderApples",value:function(){for(var e=[],t=0;t<8;t++)e.push(r.a.createElement(f,{yPos:1e3-120*(8-t),xPos:120*this.state.appleLocations[t],key:t}));return e}},{key:"render",value:function(){return r.a.createElement("div",{className:"game",id:"game"},r.a.createElement("meta",{name:"viewport",content:"width=device-width,user-scalable=no"}),r.a.createElement("div",{className:"game-contents"},r.a.createElement("svg",{id:"apple-clicker-canvas",viewBox:"0 0 600 1000"},r.a.createElement("image",{height:"100%",xlinkHref:k.a,width:600}),this.renderButtons(),this.renderApples(),r.a.createElement("text",{fontSize:"32",x:"30",y:"35",fill:"orange"},this.state.score),r.a.createElement("image",{xlinkHref:E.a,height:"3.5%",x:"510",y:"5"}),r.a.createElement("text",{fontSize:"32",x:"550",y:"35"},this.state.secondsRemaining),this.state.gameEnded&&r.a.createElement(g,{onClick:this.restartGame,score:this.state.score}),!this.state.gameStarted&&r.a.createElement(b,{onClick:this.restartGame})),r.a.createElement("div",{className:"bottombar"})))}}]),t}(r.a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(j,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.89e38200.chunk.js.map