(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(25)},,,,,,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(7),c=n.n(r),i=(n(15),n(8)),l=n(1),s=n(2),u=n(4),d=n(3),p=n(5),h=(n(17),n(19),function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={active:!1},n.onClick=function(){n.props.delTodo(n.props.todo.name)},n.checkTodo=function(){n.props.changeComplete(n.props.todo.name)},n.getTodoStyle=function(){return{textDecoration:n.props.todo.isDone?"line-through":"none"}},n.handleHoverEnter=function(){n.setState({active:!0})},n.handleHoverLeave=function(){n.setState({active:!1})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"todo-item",onMouseEnter:this.handleHoverEnter,onMouseLeave:this.handleHoverLeave},a.a.createElement("input",{type:"checkbox",onChange:this.checkTodo,checked:this.props.todo.isDone}),a.a.createElement("span",{style:this.getTodoStyle()},this.props.todo.name),a.a.createElement("button",{onClick:this.onClick,className:this.state.active?"show-delete-button":void 0},"X"))}}]),e}(o.Component)),f=function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(h,{key:e.id,todo:e,delTodo:t.props.delTodo,changeComplete:t.props.changeComplete})})}}]),e}(o.Component),m=(n(21),function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={input:"",allTick:!1},n.onChange=function(t){n.setState({input:t.target.value})},n.onClick=function(t){t.preventDefault(),n.props.addTodo(n.state.input),n.setState({input:""})},n.tickAll=function(){n.setState({input:n.state.input,allTick:!n.state.allTick}),n.props.changeCompleteAll(n.state.allTick)},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",null,a.a.createElement("span",{id:"toggle-all-todo",onClick:this.tickAll,className:this.state.allTick?"full-opacity":void 0},"\u276f"),a.a.createElement("input",{value:this.state.input,placeholder:"Add new task...",onChange:this.onChange,id:"addTodoInput"}),a.a.createElement("button",{onClick:this.onClick},"X"))}}]),e}(o.Component)),b=(n(23),function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).handlePlural=function(){return n.props.todos.filter(function(t){return!t.isDone}).length>1?"s":""},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{id:"footer-section"},a.a.createElement("span",null,this.props.todos.filter(function(t){return!t.isDone}).length," task",this.handlePlural()," left"))}}]),e}(o.Component)),v=function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[{name:"Finish this app",isDone:!1,id:1},{name:"Go to eat",isDone:!1,id:2}]},n.addTodo=function(t){if(""===t)return!1;var e={name:t,isDone:!1,id:n.state.todos.length>0?n.state.todos[n.state.todos.length-1].id+1:1};n.setState({todos:[].concat(Object(i.a)(n.state.todos),[e])})},n.delTodo=function(t){var e=[];n.state.todos.forEach(function(n){n.name!==t&&e.push(n)}),n.setState({todos:e})},n.changeCompleteAll=function(t){n.setState({todos:n.state.todos.map(function(e){return e.isDone=!t,e})})},n.changeComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.name===t&&(e.isDone=!e.isDone),e})})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"title"},"Todos"),a.a.createElement("div",{className:"App"},a.a.createElement(m,{addTodo:this.addTodo,changeCompleteAll:this.changeCompleteAll}),a.a.createElement(f,{todos:this.state.todos,delTodo:this.delTodo,changeComplete:this.changeComplete}),a.a.createElement(b,{todos:this.state.todos})),a.a.createElement("h3",{className:"copyright"},"Made with ",a.a.createElement("span",{id:"coffee",role:"img","aria-label":"coffee"},"\u2615")," by"," ",a.a.createElement("a",{href:"http://github.com/brrrouillard/",target:"_blank",noopener:!0,noreferrer:!0},"brrrouillard")))}}]),e}(o.Component);c.a.render(a.a.createElement(v,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.38253825.chunk.js.map