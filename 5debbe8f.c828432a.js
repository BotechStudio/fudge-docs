(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(82)),i={id:"auth-middleware",title:"The auth middleware"},c={unversionedId:"auth-middleware",id:"auth-middleware",isDocsHomePage:!1,title:"The auth middleware",description:"Intro",source:"@site/docs\\auth-middleware.md",slug:"/auth-middleware",permalink:"/docs/auth-middleware",version:"current",sidebar:"someSidebar",previous:{title:"Add field to DB model",permalink:"/docs/adding-field-DB"},next:{title:"Localization",permalink:"/docs/using-translations"}},s=[{value:"Intro",id:"intro",children:[]},{value:"The auth logic",id:"the-auth-logic",children:[]},{value:"The auth usage",id:"the-auth-usage",children:[]},{value:"Admin auth",id:"admin-auth",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"intro"},"Intro"),Object(o.b)("p",null,"The fudge's team, created a simple and secure ",Object(o.b)("strong",{parentName:"p"},"authentication")," process that enable to expose loged in users to sensitive information and block unloged users from it."),Object(o.b)("p",null,"down below, you will find all the information about the ",Object(o.b)("strong",{parentName:"p"},"proccess"),", how it works and how to update it by your needs."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please navigate to ",Object(o.b)("strong",{parentName:"p"},"server > middleware > auth.js")," and follow the steps down below."))),Object(o.b)("h3",{id:"the-auth-logic"},"The auth logic"),Object(o.b)("p",null,"Inside the auth file, we can find all the ",Object(o.b)("strong",{parentName:"p"},"authentication logic")," of our app. in fudge, we are using the auth as a middleware, you can read more about it at the official express ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://expressjs.com/en/guide/using-middleware.html"}),"docs"),"."),Object(o.b)("p",null,"As we can see, the first thing happnes is the token validation.\nfudge is making use of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jwt.io"}),"JWT")," for the authentication process to verify the user identity."),Object(o.b)("p",null,"after taking the token from the request header, we are verifying the token:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const data = jwt.verify(token, process.env.JWT_KEY);\n")),Object(o.b)("p",null,"by verifying the token, we can indicate whether or not the user is signed up, logged in or can be found at the DB."),Object(o.b)("h3",{id:"the-auth-usage"},"The auth usage"),Object(o.b)("p",null,"the use of auth located inside the routes as an argument, example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"router.post('/users/logout', auth, controller.logOut);\n")),Object(o.b)("p",null,"can be found at ",Object(o.b)("strong",{parentName:"p"},"server > routers > user.js"),"."),Object(o.b)("h3",{id:"admin-auth"},"Admin auth"),Object(o.b)("p",null,"The auth proccess can include admin authentication also, as we can see at ",Object(o.b)("strong",{parentName:"p"},"server > conrollers > data.js"),".\nthe routes we are looking at are protected and visible for admins only, what cousing that is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { isAdmin } = req.user\nif(!isAdmin) return res.send('User is not admin')\n")),Object(o.b)("p",null,"as we can see, the user object is returned from the auth middleware, then we check for ",Object(o.b)("inlineCode",{parentName:"p"},"isAdmin")," field.\nif the the field holds positive value (true) the user is admin and he gain an access to that route."))}l.isMDXComponent=!0},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,h=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(h,c(c({ref:t},u),{},{components:n})):r.a.createElement(h,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);