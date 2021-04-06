(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{66:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),o=(r(0),r(97)),c={id:"add-end-point",title:"Add new end point"},p={unversionedId:"add-end-point",id:"add-end-point",isDocsHomePage:!1,title:"Add new end point",description:"Intro",source:"@site/docs/add-end-point.md",slug:"/add-end-point",permalink:"/docs/add-end-point",version:"current",sidebar:"someSidebar",previous:{title:"Add new page",permalink:"/docs/add-page"},next:{title:"Getting data from server",permalink:"/docs/getting-data-server"}},s=[{value:"Intro",id:"intro",children:[]},{value:"Step one",id:"step-one",children:[]},{value:"Step two",id:"step-two",children:[]},{value:"Step three",id:"step-three",children:[]}],i={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h3",{id:"intro"},"Intro"),Object(o.a)("p",null,"Fudge's server created by using Node & Express js.\nBy using those cutting edge technologies, we created an authentication system that allows to\nprotect some routes and expose others."),Object(o.a)("p",null,"In this light and easy tutorial, we will guide you step by step how to create a completly new server end point with or without ",Object(o.a)("strong",{parentName:"p"},"auth"),"."),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",{parentName:"div",className:"admonition-heading"},Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",{parentName:"h5",className:"admonition-icon"},Object(o.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.a)("div",{parentName:"div",className:"admonition-content"},Object(o.a)("p",{parentName:"div"},"Please navigate to the main ",Object(o.a)("strong",{parentName:"p"},"server")," folder in your project before you start following the creation steps."))),Object(o.a)("h3",{id:"step-one"},"Step one"),Object(o.a)("p",null,"1.1 Navigate to ",Object(o.a)("strong",{parentName:"p"},"server > controllers"),"."),Object(o.a)("p",null,"1.2 Create a new file that will hold the end point ",Object(o.a)("strong",{parentName:"p"},"logic"),"."),Object(o.a)("p",null,"1.3 Inside the file, create an async function with the params ",Object(o.a)("strong",{parentName:"p"},"req")," and ",Object(o.a)("strong",{parentName:"p"},"res"),", you can find more about express routes in the express official ",Object(o.a)("a",{parentName:"p",href:"http://expressjs.com"},"docs"),"."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'//Make sure to export the function with "exports" like so:\nexports.exampleRoute = async (req, res) => {\n  try {\n      /* Logic goes here */\n    res.status(200).send();\n  } catch (error) {\n    res.status(400).send(error);\n  }\n}\n')),Object(o.a)("h3",{id:"step-two"},"Step two"),Object(o.a)("p",null,"2.1 Navigate to ",Object(o.a)("strong",{parentName:"p"},"server > router"),' and create a "routes container" file.'),Object(o.a)("p",null,"2.2  In the file, make sure to import express, express router, the new route you just created, and the auth middleware if you want to create a protected route."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst controller = require('../controllers/user');\nconst auth = require('../middleware/auth');\nconst router = express.Router();\n")),Object(o.a)("p",null,"2.3 Connect the express router to the route you have just created and imported like the example below:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},"// No auth - Public.\nrouter.post('/example/public', controller.exampleRoute);\n// With auth - Protected.\nrouter.post('/example/protected', auth, controller.exampleRoute);\n\n//Make sure the routers exported like below:\nmodule.exports = router;\n")),Object(o.a)("p",null,"pay attension, the first route created above, is not protected.\nwhice means every user can hit this end point."),Object(o.a)("p",null,"the second one on the other hand, is a protected route, only authenticated users are allowd to call this\nend point."),Object(o.a)("h3",{id:"step-three"},"Step three"),Object(o.a)("p",null,"3.1 Navigate to ",Object(o.a)("strong",{parentName:"p"},"server > app.js"),"."),Object(o.a)("p",null,"3.2 Import the router you just created:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'const exampleRouter = require("./routers/example");\n')),Object(o.a)("p",null,'3.3 Sign the router to the app with "use" method which provided by express'),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},"app.use(exampleRouter);\n")))}l.isMDXComponent=!0},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return r?a.a.createElement(h,p(p({ref:t},i),{},{components:r})):a.a.createElement(h,p({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);