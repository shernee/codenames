(this.webpackJsonpwebjs=this.webpackJsonpwebjs||[]).push([[0],[,,function(e){e.exports=JSON.parse('{"English":["AFRICA","BELT","CROSS","DRAFT","EGYPT","FIGHTER","GENIUS","HELICOPTER","IVORY","JUPITER","KNIFE","LITTER","MICROSCOPE","NINJA","OPERA","PART","QUEEN","ROBIN","SCHOOL","TEMPLE","UNDERTAKER","VET","WALL","YARD","LIFE"],"colorCode":[["dodgerblue","#D80000","peachpuff","#D80000","dodgerblue"],["#D80000","dodgerblue","#D80000","peachpuff","dodgerblue"],["dodgerblue","#D80000","black","#D80000","peachpuff"],["peachpuff","dodgerblue","#D80000","peachpuff","dodgerblue"],["dodgerblue","#D80000","peachpuff","dodgerblue","peachpuff"]]}')},,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),s=(a(14),a(5)),o=a(6),c=a(1),u=a(8),d=a(7),h=a(2);a(15);function b(e){var t=e.turn?"Blue":"Red",a=t+"'s turn",n="End "+a;return r.a.createElement("div",{className:"status-line"},r.a.createElement("div",null,r.a.createElement("span",{style:{color:"blue"}},e.blue)," - ",r.a.createElement("span",{style:{color:"red"}},e.red)),r.a.createElement("div",{className:"title-turn"},r.a.createElement("h5",{style:{color:t}},a)),r.a.createElement("div",{className:"title-button"},r.a.createElement("button",{onClick:function(){return e.handleButtonClick()}},n)))}function E(e){var t=[e.r,e.c],a={color:"black",backgroundColor:e.stateGridCell};return r.a.createElement("div",{className:"cell-style",style:a,onClick:function(){return e.handleClick(t)}},e.cell)}function f(e){return r.a.createElement("div",{className:"row-style"},e.row.map((function(t,a){return r.a.createElement(E,{key:a,r:e.r,c:a,cell:t,handleClick:e.handleClick,stateGridCell:e.stateGridRow[a]})})))}function m(e){return r.a.createElement("div",{className:"board-style"},e.wordGrid.map((function(t,a){return r.a.createElement(f,{key:a,row:t,r:a,handleClick:e.handleClick,stateGridRow:e.stateGrid[a]})})))}var k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(s.a)(this,a),n=t.call(this,e);var r=h.English;n.colorGrid=h.colorCode,n.wordGrid=[];for(var l=[],i=0;i<5;i++){var o=r.splice(0,5);n.wordGrid.push(o),l.push(new Array(5).fill("lightgray"))}return n.state={stateGrid:l,blueTurn:!0,bluePoint:9,redPoint:8,gameOver:!1},n.handleClick=n.handleClick.bind(Object(c.a)(n)),n.handleButtonClick=n.handleButtonClick.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"handleButtonClick",value:function(){this.setState({blueTurn:!this.state.blueTurn})}},{key:"getkeyByValue",value:function(e){var t={0:"dodgerblue",1:"#D80000",2:"peachpuff",3:"black"};return Object.keys(t).find((function(a){return t[a]===e}))}},{key:"handleClick",value:function(e){var t=this.state.stateGrid.slice(),a=e[0],n=e[1],r=t[a][n],l=this.colorGrid[a][n];if("lightgray"===r){var i=this.getkeyByValue(l);console.log(i,l),t[a][n]=l,this.setState({stateGrid:t})}switch(parseInt(i)){case 0:this.state.blueTurn?this.setState({bluePoint:this.state.bluePoint-1}):this.setState({bluePoint:this.state.bluePoint-1,blueTurn:!this.state.blueTurn});break;case 1:this.state.blueTurn?this.setState({redPoint:this.state.redPoint-1,blueTurn:!this.state.blueTurn}):this.setState({redPoint:this.state.redPoint-1});break;case 2:this.setState({blueTurn:!this.state.blueTurn});break;case 3:this.setState({gameOver:!this.state.gameOver})}console.log(this.state.bluePoint,this.state.redPoint)}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("h2",null,"CODENAMES"),r.a.createElement("hr",null),r.a.createElement(b,{turn:this.state.blueTurn,blue:this.state.bluePoint,red:this.state.redPoint,handleButtonClick:this.handleButtonClick}),r.a.createElement(m,{wordGrid:this.wordGrid,stateGrid:this.state.stateGrid,handleClick:this.handleClick}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.b64c5771.chunk.js.map