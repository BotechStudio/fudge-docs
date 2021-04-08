(window.webpackJsonp=window.webpackJsonp||[]).push([[27,28],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(106),c=a(101);t.default=function(){return o.a.createElement(r.a,{title:"Page Not Found"},o.a.createElement("main",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},o.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),o.a.createElement("p",null,o.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),o.a.createElement("p",null,o.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},142:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},96:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return a?o.a.createElement(b,l(l({ref:t},i),{},{components:a})):o.a.createElement(b,l({ref:t},i))}));m.displayName="MDXCreateElement";var b=a(16),h=a(27),y=a(106),f=a(3),g=a(100),v=a(99),j=a(113),k=a(117),O=a(118),E=a(116),N=a(103),C=a(108),T=a(119);var x=e=>o.a.createElement("svg",Object(f.a)({width:"20",height:"20",role:"img"},e),o.a.createElement("g",{fill:"#7a7a7a"},o.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),w=a(121),P=a(101),S=a(71),_=a.n(S);const B=(e,t)=>"link"===e.type?Object(v.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>B(e,t)));function I({item:e,onItemClick:t,collapsible:a,activePath:r,...c}){const{items:l,label:s}=e,i=B(e,r),u=function(e){const t=Object(n.useRef)(e);return Object(n.useEffect)((()=>{t.current=e}),[e]),t.current}(i),[d,p]=Object(n.useState)((()=>!!a&&(!i&&e.collapsed))),m=Object(n.useRef)(null),[b,h]=Object(n.useState)(void 0),y=(e=!0)=>{var t;h(e?(null===(t=m.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((()=>{i&&!u&&d&&p(!1)}),[i,u,d]);const v=Object(n.useCallback)((e=>{e.preventDefault(),b||y(),setTimeout((()=>p((e=>!e))),100)}),[b]);return 0===l.length?null:o.a.createElement("li",{className:Object(g.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:s},o.a.createElement("a",Object(f.a)({className:Object(g.a)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&i,[_.a.menuLinkText]:!a}),onClick:a?v:void 0,href:a?"#!":void 0},c),s),o.a.createElement("ul",{className:"menu__list",ref:m,style:{height:b},onTransitionEnd:()=>{d||y(!1)}},l.map((e=>o.a.createElement(A,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:a,activePath:r})))))}function L({item:e,onItemClick:t,activePath:a,collapsible:n,...r}){const{href:c,label:l}=e,s=B(e,a);return o.a.createElement("li",{className:"menu__list-item",key:l},o.a.createElement(N.a,Object(f.a)({className:Object(g.a)("menu__link",{"menu__link--active":s,[_.a.menuLinkExternal]:!Object(C.a)(c)}),to:c},Object(C.a)(c)&&{isNavLink:!0,exact:!0,onClick:t},r),l))}function A(e){switch(e.item.type){case"category":return o.a.createElement(I,e);case"link":default:return o.a.createElement(L,e)}}var D=function({path:e,sidebar:t,sidebarCollapsible:a=!0,onCollapse:r,isHidden:c}){const[l,s]=Object(n.useState)(!1),{navbar:{hideOnScroll:i},hideableSidebar:u}=Object(v.useThemeConfig)(),{isAnnouncementBarClosed:d}=Object(j.a)(),{scrollY:p}=Object(E.a)();Object(k.a)(l);const m=Object(O.a)();return Object(n.useEffect)((()=>{m===O.b.desktop&&s(!1)}),[m]),o.a.createElement("div",{className:Object(g.a)(_.a.sidebar,{[_.a.sidebarWithHideableNavbar]:i,[_.a.sidebarHidden]:c})},i&&o.a.createElement(T.a,{tabIndex:-1,className:_.a.sidebarLogo}),o.a.createElement("div",{className:Object(g.a)("menu","menu--responsive","thin-scrollbar",_.a.menu,{"menu--show":l,[_.a.menuWithAnnouncementBar]:!d&&0===p})},o.a.createElement("button",{"aria-label":l?Object(P.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(P.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{s(!l)}},l?o.a.createElement("span",{className:Object(g.a)(_.a.sidebarMenuIcon,_.a.sidebarMenuCloseIcon)},"\xd7"):o.a.createElement(w.a,{className:_.a.sidebarMenuIcon,height:24,width:24})),o.a.createElement("ul",{className:"menu__list"},t.map((t=>o.a.createElement(A,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),s(!1)},collapsible:a,activePath:e}))))),u&&o.a.createElement("button",{type:"button",title:Object(P.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(P.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(g.a)("button button--secondary button--outline",_.a.collapseSidebarButton),onClick:r},o.a.createElement(x,{className:_.a.collapseSidebarButtonIcon})))},R={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},M={Prism:a(24).a,theme:R};function $(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var z=/\r\n|\r|\n/,H=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},W=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},J=function(e,t){var a=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,a){var n=a.languages,o=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=F({},e[t],o);e[t]=a})),e}),n);return o.root=a,o.plain=F({},a,{backgroundColor:null}),o};function V(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var K=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),$(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?J(e.theme,e.language):void 0;return t.themeDict=a})),$(this,"getLineProps",(function(e){var a=e.key,n=e.className,o=e.style,r=F({},V(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==o&&(r.style=void 0!==r.style?F({},r.style,o):o),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),$(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,o=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return r[a[0]];var c=n?{display:"inline-block"}:{},l=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(l))}})),$(this,"getTokenProps",(function(e){var a=e.key,n=e.className,o=e.style,r=e.token,c=F({},V(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?F({},c.style,o):o),void 0!==a&&(c.key=a),n&&(c.className+=" "+n),c})),$(this,"tokenize",(function(e,t,a,n){var o={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,o=e.children,r=this.getThemeDict(this.props),c=t.languages[a];return o({tokens:function(e){for(var t=[[]],a=[e],n=[0],o=[e.length],r=0,c=0,l=[],s=[l];c>-1;){for(;(r=n[c]++)<o[c];){var i=void 0,u=t[c],d=a[c][r];if("string"==typeof d?(u=c>0?u:["plain"],i=d):(u=W(u,d.type),d.alias&&(u=W(u,d.alias)),i=d.content),"string"==typeof i){var p=i.split(z),m=p.length;l.push({types:u,content:p[0]});for(var b=1;b<m;b++)H(l),s.push(l=[]),l.push({types:u,content:p[b]})}else c++,t.push(u),a.push(i),n.push(0),o.push(i.length)}c--,t.pop(),a.pop(),n.pop(),o.pop()}return H(l),s}(void 0!==c?this.tokenize(t,n,c,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var U=a(142),X=a.n(U),Y={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},q=a(107);var G=()=>{const{prism:e}=Object(v.useThemeConfig)(),{isDarkTheme:t}=Object(q.a)(),a=e.theme||Y,n=e.darkTheme||a;return t?n:a},Q=a(72),Z=a.n(Q);const ee=/{([\d,-]+)}/,te=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)},ae=/(?:title=")(.*)(?:")/;function ne({children:e,className:t,metastring:a}){const{prism:r}=Object(v.useThemeConfig)(),[c,l]=Object(n.useState)(!1),[s,i]=Object(n.useState)(!1);Object(n.useEffect)((()=>{i(!0)}),[]);const u=Object(n.useRef)(null);let d=[],p="";const m=G(),b=Array.isArray(e)?e.join(""):e;if(a&&ee.test(a)){const e=a.match(ee)[1];d=X()(e).filter((e=>e>0))}a&&ae.test(a)&&(p=a.match(ae)[1]);let h=t&&t.replace(/language-/,"");!h&&r.defaultLanguage&&(h=r.defaultLanguage);let y=b.replace(/\n$/,"");if(0===d.length&&void 0!==h){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return te(["js","jsBlock"]);case"jsx":case"tsx":return te(["js","jsBlock","jsx"]);case"html":return te(["js","jsBlock","html"]);case"python":case"py":return te(["python"]);default:return te()}})(h),a=b.replace(/\n$/,"").split("\n");let n;for(let o=0;o<a.length;){const r=o+1,c=a[o].match(t);if(null!==c){switch(c.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=r+",";break;case"highlight-start":n=r;break;case"highlight-end":e+=`${n}-${r-1},`}a.splice(o,1)}else o+=1}d=X()(e),y=a.join("\n")}const j=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),n&&n.focus()}(y),l(!0),setTimeout((()=>l(!1)),2e3)};return o.a.createElement(K,Object(f.a)({},M,{key:String(s),theme:m,code:y,language:h}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:r})=>o.a.createElement("div",{className:Z.a.codeBlockContainer},p&&o.a.createElement("div",{style:t,className:Z.a.codeBlockTitle},p),o.a.createElement("div",{className:Object(g.a)(Z.a.codeBlockContent,h)},o.a.createElement("div",{tabIndex:0,className:Object(g.a)(e,Z.a.codeBlock,"thin-scrollbar",{[Z.a.codeBlockWithTitle]:p})},o.a.createElement("div",{className:Z.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return d.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(f.a)({key:t},a),e.map(((e,t)=>o.a.createElement("span",Object(f.a)({key:t},r({token:e,key:t}))))))})))),o.a.createElement("button",{ref:u,type:"button","aria-label":Object(P.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(g.a)(Z.a.copyButton),onClick:j},c?o.a.createElement(P.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(P.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(73);var oe=a(74),re=a.n(oe);var ce=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(v.useThemeConfig)();return t?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(g.a)("anchor",{[re.a.enhancedAnchor]:!n}),id:t}),a.children,o.a.createElement("a",{className:"hash-link",href:"#"+t,title:Object(P.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,a)};var le={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(ne,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(N.a,e),pre:e=>{const{children:t}=e;return o.a.createElement(ne,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:ce("h1"),h2:ce("h2"),h3:ce("h3"),h4:ce("h4"),h5:ce("h5"),h6:ce("h6")},se=a(109),ie=a(23),ue=a(75),de=a.n(ue);function pe({currentDocRoute:e,versionMetadata:t,children:a}){var r,c;const{siteConfig:l,isClient:s}=Object(b.default)(),{pluginId:i,permalinkToSidebar:u,docsSidebars:p,version:m}=t,h=u[e.path],f=p[h],[j,k]=Object(n.useState)(!1),[O,E]=Object(n.useState)(!1),N=Object(n.useCallback)((()=>{O&&E(!1),k(!j)}),[O]);return o.a.createElement(y.a,{key:s,wrapperClassName:"main-docs-wrapper",searchMetadatas:{version:m,tag:Object(v.docVersionSearchTag)(i,m)}},o.a.createElement("div",{className:de.a.docPage},f&&o.a.createElement("div",{className:Object(g.a)(de.a.docSidebarContainer,{[de.a.docSidebarContainerHidden]:j}),onTransitionEnd:e=>{e.currentTarget.classList.contains(de.a.docSidebarContainer)&&j&&E(!0)},role:"complementary"},o.a.createElement(D,{key:h,sidebar:f,path:e.path,sidebarCollapsible:null===(r=null===(c=l.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===r||r,onCollapse:N,isHidden:O}),O&&o.a.createElement("div",{className:de.a.collapsedDocSidebar,title:Object(P.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(P.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},o.a.createElement(x,{className:de.a.expandSidebarButtonIcon}))),o.a.createElement("main",{className:Object(g.a)(de.a.docMainContainer,{[de.a.docMainContainerEnhanced]:j})},o.a.createElement("div",{className:Object(g.a)("container padding-vert--lg",de.a.docItemWrapper,{[de.a.docItemWrapperEnhanced]:j})},o.a.createElement(d,{components:le},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,r=t.find((e=>Object(ie.matchPath)(n.pathname,e)));return r?o.a.createElement(pe,{currentDocRoute:r,versionMetadata:a},Object(h.a)(t)):o.a.createElement(se.default,e)}}}]);