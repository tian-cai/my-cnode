(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{512:function(e,t,a){"use strict";var n={tab:[{name:"全部",value:"all"},{name:"分享",value:"share"},{name:"问答",value:"ask"},{name:"招聘",value:"job"},{name:"测试",value:"dev"}],tabColor:{share:"#42c67d",ask:"#ff955b",job:"#857dea",dev:"#56c4e1"},tabName:{share:"分享",ask:"问答",job:"招聘",dev:"测试"},messageType:{reply:"回复",at:"@"}};t.a=n},521:function(e,t,a){"use strict";a.r(t);a(501);var n=a(502),r=a.n(n),o=(a(208),a(125)),s=a.n(o),i=a(1),l=a.n(i),c=a(126),u=a.n(c),m=a(16),p=a(512),f=function(){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}();var g=function(e){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.markMsg=t.markMsg.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,l.a.Component),f(a,[{key:"markMsg",value:function(){this.props.mark(this.props.message.id)}},{key:"render",value:function(){var e=this.props.message;return l.a.createElement("li",{className:"item",style:{lineHeight:"34px"}},l.a.createElement(m.b,{title:e.author.loginname,className:"float-left",to:"/user/"+e.author.loginname},l.a.createElement("img",{src:e.author.avatar_url})),l.a.createElement("div",{className:"item-content"},l.a.createElement("div",{className:"item-content-title"},l.a.createElement(m.b,{to:"/user/"+e.author.loginname},e.author.loginname),l.a.createElement("span",{style:{margin:"0px 10px"}},"在话题"),l.a.createElement(m.b,{to:"/topic/"+e.topic.id},e.topic.title),l.a.createElement("span",{style:{margin:"0px 10px"}},p.a.messageType[e.type]+"了你"),!e.has_read&&l.a.createElement("a",{href:"javascript:;",onClick:this.markMsg,className:"float-right"},"已读"))))}}]),a}(),h=a(127),d=a(33),b=function(){function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}}();var y=function(e){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={hasReadMeg:[],notReadMsg:[],loading:!1},t.getMessage=t.getMessage.bind(t),t.markAll=t.markAll.bind(t),t.markMsg=t.markMsg.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,l.a.Component),b(a,[{key:"componentWillMount",value:function(){this.getMessage()}},{key:"getMessage",value:function(){var t=this,e=d.a.isLogin(),a=this.props,n=a.history,r=a.match;if(!e)return s.a.warn("您处于未登录状态，2秒后自动跳装至登录页面"),setTimeout(function(){n.push("/login",{preUrl:r.path})},2e3),!1;var o=h.a.USER_MESSAGE_ALL;this.setState({loading:!0}),u.a.get(o,{params:{accesstoken:localStorage.getItem("userToken"),mdrender:"false"}}).then(function(e){t.setState({hasReadMeg:e.data.data.has_read_messages,notReadMsg:e.data.data.hasnot_read_messages,loading:!1}),t.props.changeMsgCount(e.data.data.hasnot_read_messages.length)}).catch(function(e){t.setState({loading:!1}),s.a.error(e)})}},{key:"markAll",value:function(){var e=h.a.MARK_MESSAGE_ALL,t=this;u.a.post(e,{accesstoken:localStorage.getItem("userToken")}).then(function(e){t.getMessage()}).catch(function(e){s.a.error(e)})}},{key:"markMsg",value:function(e){var t=h.a.MARK_MESSAGE.replace("{msgId}",e),a=this;u.a.post(t,{accesstoken:localStorage.getItem("userToken")}).then(function(e){a.getMessage()}).catch(function(e){s.a.error(e)})}},{key:"render",value:function(){var a=this,e=this.state.hasReadMeg,t=this.state.notReadMsg;return this.state.loading?l.a.createElement(r.a,{tip:"正在加载...",size:"large"}):l.a.createElement("div",null,l.a.createElement("h3",{className:"block-title mt20"},l.a.createElement("a",{href:"javascript:;",onClick:this.markAll,className:"float-right"},"全部已读"),l.a.createElement(m.b,{to:"/"},"首页"),l.a.createElement("span",{className:"bread-split"},"/"),"未读消息"),t.length?l.a.createElement("ul",null,t.map(function(e,t){return l.a.createElement(g,{message:e,key:e.id,mark:a.markMsg})})):l.a.createElement("div",{className:"item",style:{lineHeight:"34px"}},"暂无消息"),l.a.createElement("h3",{className:"block-title mt20"},"已读消息"),e.length?l.a.createElement("ul",null,e.map(function(e,t){return l.a.createElement(g,{message:e,key:t})})):l.a.createElement("div",{className:"item",style:{lineHeight:"34px"}},"暂无消息"))}}]),a}();t.default=y}}]);