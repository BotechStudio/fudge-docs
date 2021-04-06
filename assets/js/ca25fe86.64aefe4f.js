(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(97)),i={id:"auth-middleware",title:"The auth middleware"},c={unversionedId:"auth-middleware",id:"auth-middleware",isDocsHomePage:!1,title:"The auth middleware",description:"Intro",source:"@site/docs/auth-middleware.md",slug:"/auth-middleware",permalink:"/docs/auth-middleware",version:"current",sidebar:"someSidebar",previous:{title:"Add field to DB model",permalink:"/docs/adding-field-DB"},next:{title:"Localization",permalink:"/docs/using-translations"}},s=[{value:"Intro",id:"intro",children:[]},{value:"The auth logic",id:"the-auth-logic",children:[]},{value:"The auth usage",id:"the-auth-usage",children:[]},{value:"Admin auth",id:"admin-auth",children:[]}],l={toc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"intro"},"Intro"),Object(o.a)("p",null,"The fudge's team, created a simple and secure ",Object(o.a)("strong",{parentName:"p"},"authentication")," process that enable to expose loged in users to sensitive information and block unloged users from it."),Object(o.a)("p",null,"down below, you will find all the information about the ",Object(o.a)("strong",{parentName:"p"},"proccess"),", how it works and how to update it by your needs."),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",{parentName:"div",className:"admonition-heading"},Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",{parentName:"h5",className:"admonition-icon"},Object(o.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.a)("div",{parentName:"div",className:"admonition-content"},Object(o.a)("p",{parentName:"div"},"Please navigate to ",Object(o.a)("strong",{parentName:"p"},"server > middleware > auth.js")," and follow the steps down below."))),Object(o.a)("h3",{id:"the-auth-logic"},"The auth logic"),Object(o.a)("p",null,"Inside the auth file, we can find all the ",Object(o.a)("strong",{parentName:"p"},"authentication logic")," of our app. in fudge, we are using the auth as a middleware, you can read more about it at the official express ",Object(o.a)("a",{parentName:"p",href:"https://expressjs.com/en/guide/using-middleware.html"},"docs"),"."),Object(o.a)("p",null,"As we can see, the first thing happnes is the token validation.\nfudge is making use of ",Object(o.a)("a",{parentName:"p",href:"https://jwt.io"},"JWT")," for the authentication process to verify the user identity."),Object(o.a)("p",null,"after taking the token from the request header, we are verifying the token:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},"const data = jwt.verify(token, process.env.JWT_KEY);\n")),Object(o.a)("p",null,"by verifying the token, we can indicate whether or not the user is signed up, logged in or can be found at the DB."),Object(o.a)("h3",{id:"the-auth-usage"},"The auth usage"),Object(o.a)("p",null,"the use of auth located inside the routes as an argument, example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},"router.post('/users/logout', auth, controller.logOut);\n")),Object(o.a)("p",null,"can be found at ",Object(o.a)("strong",{parentName:"p"},"server > routers > user.js"),"."),Object(o.a)("h3",{id:"admin-auth"},"Admin auth"),Object(o.a)("p",null,"The auth proccess can include admin authentication also, as we can see at ",Object(o.a)("strong",{parentName:"p"},"server > conrollers > data.js"),".\nthe routes we are looking at are protected and visible for admins only, what cousing that is:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},"const { isAdmin } = req.user\nif(!isAdmin) return res.send('User is not admin')\n")),Object(o.a)("p",null,"as we can see, the user object is returned from the auth middleware, then we check for ",Object(o.a)("inlineCode",{parentName:"p"},"isAdmin")," field.\nif the the field holds positive value (true) the user is admin and he gain an access to that route."))}u.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);