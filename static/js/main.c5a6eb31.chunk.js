(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){e.exports=a.p+"static/media/Bart_Simpson.1973cdec.png"},function(e,t,a){e.exports=a.p+"static/media/Bugs_Bunny.beb0d37a.png"},function(e,t,a){e.exports=a.p+"static/media/Foghorn_Leghorn.12733528.png"},function(e,t,a){e.exports=a.p+"static/media/Fred_Flinstone.c109fa07.png"},function(e,t,a){e.exports=a.p+"static/media/Homer_Simpson.a41e4019.png"},function(e,t,a){e.exports=a.p+"static/media/Jerry.9d939552.png"},function(e,t,a){e.exports=a.p+"static/media/Marvin.5cbf8fe2.png"},function(e,t,a){e.exports=a.p+"static/media/Peter_Griffin.a8669b5d.png"},function(e,t,a){e.exports=a.p+"static/media/Pink_Panther.30031b6a.png"},function(e,t,a){e.exports=a.p+"static/media/Popeye.dd440f3e.png"},function(e,t,a){e.exports=a.p+"static/media/Scooby.6eed493d.png"},function(e,t,a){e.exports=a.p+"static/media/Wile_E_Coyote.2346adc1.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(6),a(1)),s=a(2),l=a(4),p=a(3),u=a(5),m=(a(7),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",Object.assign({style:this.props.randomColor},this.props),this.props.children)}}]),t}(n.Component)),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container pb-5"},this.props.children)}}]),t}(n.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row "+this.props.className},this.props.children)}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).style={maxHeight:"200px",maxWidth:"200px",height:"auto",width:"auto"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("img",{style:this.style,src:this.props.src,alt:this.props.name})}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{className:"btn "+this.props.className,"data-id":this.props.dataId,"data-character-name":this.props.dataName,onClick:this.props.handleOnClick.bind(this,this.props.dataName)},this.props.children)}}]),t}(n.Component),O={BartSimpson:{id:1,image:a(15)},Bugs_Bunny:{id:2,image:a(16)},Foghorn_Leghorn:{id:3,image:a(17)},Fred_Flinstone:{id:4,image:a(18)},Homer_Simpson:{id:6,image:a(19)},Jerry:{id:7,image:a(20)},Marvin:{id:8,image:a(21)},Peter_Griffin:{id:9,image:a(22)},Pink_Panther:{id:10,image:a(23)},Popeye:{id:11,image:a(24)},Scooby:{id:12,image:a(25)},Wile_E_Coyote:{id:13,image:a(26)}},j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.children)}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",{className:"display-4"},this.props.children)}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("p",{className:"lead"},this.props.children)}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron-fluid "+this.props.className},r.a.createElement("div",{className:"container"},r.a.createElement(g,null,"Don't Forget your Click!!"),r.a.createElement(y,null,"Click on the characters below but be careful not to click on any one character more than once!")))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={guessedArray:[],Score:0,HighScore:0},a.handleOnClick=function(e){var t=a.state.guessedArray;t.includes(e)?(a.state.Score>a.state.HighScore&&a.setState({HighScore:a.state.Score}),a.setState({guessedArray:[],Score:0})):(t.push(e),a.setState({guessedArray:t,Score:a.state.Score+1}))},a.randomizeColors=function(){return{backgroundColor:"hsl("+Math.floor(360*Math.random())+", 100%, 80%)"}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(h,null,r.a.createElement(j,null,r.a.createElement(d,{className:"pt-5"},r.a.createElement(m,{className:"col-6 text-center"},r.a.createElement("h4",null,"Score: ",r.a.createElement("span",{className:"score"}," ",this.state.Score))),r.a.createElement(m,{className:"col-6 text-center"},r.a.createElement("h4",null,"High Score: ",r.a.createElement("span",{className:"score"}," ",this.state.HighScore))))),r.a.createElement(d,null,Object.keys(O).map((function(t,a){return r.a.createElement(m,{key:a,style:e.randomizeColors(),className:"user-shadow text-center  col-sm-5 col-md-4 col-lg-3 p-3 col"},r.a.createElement(f,{className:"no-focus-shadow",key:O[t].id,dataName:t,handleOnClick:e.handleOnClick.bind(t)},r.a.createElement(b,{src:O[t].image})))})).sort((function(){return.5-Math.random()})))))}}]),t}(n.Component);i.a.render(r.a.createElement(k,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.c5a6eb31.chunk.js.map