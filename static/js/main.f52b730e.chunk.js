(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,n){e.exports=n(397)},173:function(e,t,n){},199:function(e,t){},201:function(e,t){},233:function(e,t){},234:function(e,t){},303:function(e,t){},397:function(e,t,n){"use strict";n.r(t);n(168);var a=n(6),o=n.n(a),c=n(160),i=n.n(c),r=(n(173),n(161)),l=n(162),s=n(166),m=n(163),u=n(47),h=n(165),b=n(164),d=n.n(b),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={email:""},n.submitEmail=n.submitEmail.bind(Object(u.a)(n)),n.onChange=n.onChange.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({email:e.target.value})}},{key:"submitEmail",value:function(){var e=this,t={encoding:"UTF-8",method:"POST",uri:"https://crm.zoho.com/crm/WebToLeadForm",headers:{"Content-Type":"x-www-form-urlencoded"},form:{xnQsjsdp:"6894d049cf0933024c1dbe585181e58e70b9a23da40771969ba1745ae7c8f1fd",zc_gad:"",xmIwtLD:"41fe22b1c8549ef266e82589846ecb9cf957a70ecda827906e23352f7d4e41fc",actionType:"TGVhZHM=",returnURL:"https://mstreet3.github.io/collect-emails",Company:"PreLaunchSignUp","Last Name":"web2LeadForm",Email:this.state.email}};return d()(t).then(function(e){console.log("Response went through!"),console.log("Response is: ".concat(JSON.stringify(e)))}).catch(function(e){return console.log(e)}).finally(function(){return e.setState({email:""})})}},{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submitEmail},o.a.createElement("div",{className:"input-group mb-3"},o.a.createElement("label",{htmlFor:"subscriberEmail",className:"sr-only"},"Email"),o.a.createElement("input",{type:"email",className:"form-control",id:"subscriberEmail",placeholder:"Enter your email for updates on the launch.",onChange:this.onChange,value:this.state.email}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-dark",type:"submit"},"Submit"))))}}]),t}(a.Component);function p(){return o.a.createElement("div",null,o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-4"},"Email Collector"),o.a.createElement("p",{className:"lead"},"This is an app to collect emails and store them in Zoho CRM."))),o.a.createElement("div",{className:"container"},o.a.createElement(f,null)),o.a.createElement("div",{className:"form-group text-center"},o.a.createElement("a",{href:"https://mstreet3.github.io/unsubscribe.html",className:"btn btn-danger"},"Unsubscribe")))}var E=function(){return o.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.f52b730e.chunk.js.map