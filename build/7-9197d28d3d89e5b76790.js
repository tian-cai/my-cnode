(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"J/Mn":function(e,t,a){"use strict";a.r(t);a("Rbek");var n=a("MM9K"),r=a.n(n),o=(a("q5v/"),a("QpBz")),s=a.n(o),i=a("q1tI"),l=a.n(i),c=a("vDqi"),u=a.n(c),m=a("eO8H"),p=a("Tyhb"),f=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.markMsg=a.markMsg.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.a.Component),f(t,[{key:"markMsg",value:function(){this.props.mark(this.props.message.id)}},{key:"render",value:function(){var e=this.props.message;return l.a.createElement("li",{className:"item",style:{lineHeight:"34px"}},l.a.createElement(m.b,{title:e.author.loginname,className:"float-left",to:"/user/"+e.author.loginname},l.a.createElement("img",{src:e.author.avatar_url})),l.a.createElement("div",{className:"item-content"},l.a.createElement("div",{className:"item-content-title"},l.a.createElement(m.b,{to:"/user/"+e.author.loginname},e.author.loginname),l.a.createElement("span",{style:{margin:"0px 10px"}},"在话题"),l.a.createElement(m.b,{to:"/topic/"+e.topic.id},e.topic.title),l.a.createElement("span",{style:{margin:"0px 10px"}},p.a.messageType[e.type]+"了你"),!e.has_read&&l.a.createElement("a",{href:"javascript:;",onClick:this.markMsg,className:"float-right"},"已读"))))}}]),t}(),g=a("UQ5x"),b=a("rOIg"),d=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={hasReadMeg:[],notReadMsg:[],loading:!1},a.getMessage=a.getMessage.bind(a),a.markAll=a.markAll.bind(a),a.markMsg=a.markMsg.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.a.Component),d(t,[{key:"componentWillMount",value:function(){this.getMessage()}},{key:"getMessage",value:function(){var e=this,t=b.a.isLogin(),a=this.props,n=a.history,r=a.match;if(!t)return s.a.warn("您处于未登录状态，2秒后自动跳装至登录页面"),setTimeout(function(){n.push("/login",{preUrl:r.path})},2e3),!1;var o=g.a.USER_MESSAGE_ALL;this.setState({loading:!0}),u.a.get(o,{params:{accesstoken:localStorage.getItem("userToken"),mdrender:"false"}}).then(function(t){e.setState({hasReadMeg:t.data.data.has_read_messages,notReadMsg:t.data.data.hasnot_read_messages,loading:!1}),e.props.changeMsgCount(t.data.data.hasnot_read_messages.length)}).catch(function(t){e.setState({loading:!1}),s.a.error(t)})}},{key:"markAll",value:function(){var e=g.a.MARK_MESSAGE_ALL,t=this;u.a.post(e,{accesstoken:localStorage.getItem("userToken")}).then(function(e){t.getMessage()}).catch(function(e){s.a.error(e)})}},{key:"markMsg",value:function(e){var t=g.a.MARK_MESSAGE.replace("{msgId}",e),a=this;u.a.post(t,{accesstoken:localStorage.getItem("userToken")}).then(function(e){a.getMessage()}).catch(function(e){s.a.error(e)})}},{key:"render",value:function(){var e=this,t=this.state.hasReadMeg,a=this.state.notReadMsg;return this.state.loading?l.a.createElement(r.a,{tip:"正在加载...",size:"large"}):l.a.createElement("div",null,l.a.createElement("h3",{className:"block-title mt20"},l.a.createElement("a",{href:"javascript:;",onClick:this.markAll,className:"float-right"},"全部已读"),l.a.createElement(m.b,{to:"/"},"首页"),l.a.createElement("span",{className:"bread-split"},"/"),"未读消息"),a.length?l.a.createElement("ul",null,a.map(function(t,a){return l.a.createElement(h,{message:t,key:t.id,mark:e.markMsg})})):l.a.createElement("div",{className:"item",style:{lineHeight:"34px"}},"暂无消息"),l.a.createElement("h3",{className:"block-title mt20"},"已读消息"),t.length?l.a.createElement("ul",null,t.map(function(e,t){return l.a.createElement(h,{message:e,key:t})})):l.a.createElement("div",{className:"item",style:{lineHeight:"34px"}},"暂无消息"))}}]),t}();t.default=y},Tyhb:function(e,t,a){"use strict";var n={tab:[{name:"全部",value:"all"},{name:"分享",value:"share"},{name:"问答",value:"ask"},{name:"招聘",value:"job"},{name:"测试",value:"dev"}],tabColor:{share:"#42c67d",ask:"#ff955b",job:"#857dea",dev:"#56c4e1"},tabName:{share:"分享",ask:"问答",job:"招聘",dev:"测试"},messageType:{reply:"回复",at:"@"}};t.a=n}}]);