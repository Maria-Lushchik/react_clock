(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),a=n(2),o=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),b=(n(12),n(0)),d=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={time:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;setInterval((function(){t.updateTime(),console.log(t.state.time)}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"updateTime",value:function(){this.setState({time:(new Date).toLocaleTimeString()})}},{key:"render",value:function(){var t=this.state.time;return Object(b.jsx)("div",{"data-cy":"time",children:t})}}]),n}(u.a.Component),h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.showClock=function(){return t.setState({isClockVisible:!0})},t.hideClock=function(){return t.setState({isClockVisible:!1})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.isClockVisible;return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsxs)("h2",{className:"app__clock",children:["Current time:",t&&Object(b.jsx)(d,{})]}),Object(b.jsxs)("div",{className:"app__buttons",children:[Object(b.jsx)("button",{className:"app__button",type:"button",onClick:this.showClock,disabled:t,children:"Show Clock"}),Object(b.jsx)("button",{className:"app__button",type:"button",onClick:this.hideClock,disabled:!t,children:"Hide Clock"})]})]})}}]),n}(u.a.Component),p=h;i.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9dfc3a4f.chunk.js.map