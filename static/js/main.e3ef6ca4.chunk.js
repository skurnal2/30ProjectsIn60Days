(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(1),s=a(2),c=a(4),u=a(3),i=a(0),l=a.n(i),o=a(6),d=a.n(o);a(14);function m(e){return l.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={squares:Array(9).fill(null),xIsNext:!0},r}return Object(s.a)(a,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();f(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(m,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=f(this.state.squares);return e=t&&0!==t?"Winner: "+t:0===t?"Game Draw":(this.state.xIsNext?"X":"O")+"'s turn",l.a.createElement("div",null,l.a.createElement("div",{className:"status"},e),l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),a}(l.a.Component),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(h,null)),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null),l.a.createElement("ol",null)))}}]),a}(l.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=[3],n=0;n<t.length;n++){var s=Object(r.a)(t[n],3),c=s[0],u=s[1],i=s[2];if(e[c]&&e[c]===e[u]&&e[c]===e[i])return e[c];n<=2&&!0!==a[n]&&e[c]&&e[u]&&e[i]&&(a[n]=!0)}return a[0]===a[1]===a[2]?0:null}d.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.e3ef6ca4.chunk.js.map