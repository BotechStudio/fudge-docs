(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{89:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(97)),c={id:"add-page",title:"Add new page"},i={unversionedId:"add-page",id:"add-page",isDocsHomePage:!1,title:"Add new page",description:"Please navigate to the main client folder ('/fudgeProject/client') in your project before you start following the creation steps.",source:"@site/docs/add-page.md",slug:"/add-page",permalink:"/docs/add-page",version:"current",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Add new end point",permalink:"/docs/add-end-point"}},p=[{value:"Intro",id:"intro",children:[]},{value:"Creating new page",id:"creating-new-page",children:[]},{value:"Adding private/public route",id:"adding-privatepublic-route",children:[]},{value:"Add public page",id:"add-public-page",children:[]},{value:"Add privage page",id:"add-privage-page",children:[]},{value:"Loadable component",id:"loadable-component",children:[]},{value:"PrivateRoute component",id:"privateroute-component",children:[]}],l={toc:p};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.a)("div",{parentName:"div",className:"admonition-heading"},Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",{parentName:"h5",className:"admonition-icon"},Object(o.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.a)("div",{parentName:"div",className:"admonition-content"},Object(o.a)("p",{parentName:"div"},"Please navigate to the main client folder ('/fudgeProject/client') in your project before you start following the creation steps."))),Object(o.a)("h3",{id:"intro"},"Intro"),Object(o.a)("p",null,"As part of the Authentication proccess we implemented in Fudge, the end-user exposed to both ",Object(o.a)("strong",{parentName:"p"},"public")," and ",Object(o.a)("strong",{parentName:"p"},"private")," pages."),Object(o.a)("p",null,"Here's how we can add ",Object(o.a)("strong",{parentName:"p"},"public")," and ",Object(o.a)("strong",{parentName:"p"},"private")," pages in 2 simple steps:"),Object(o.a)("h3",{id:"creating-new-page"},"Creating new page"),Object(o.a)("p",null,"1.1 Navigate to ",Object(o.a)("strong",{parentName:"p"},"client > app > containers"),","),Object(o.a)("p",null,"1.2 Create a container folder for the public page, for example it will be named NewPage."),Object(o.a)("p",null,"1.3 Inside the container folder, create an index.js file with next file content (React component):"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nexport function newPage() {\n  return (\n    <div>\n      <h1>This is a new page</h1>\n    </div>\n  );\n}\n')),Object(o.a)("h3",{id:"adding-privatepublic-route"},"Adding private/public route"),Object(o.a)("p",null,"2.1 Navigate to ",Object(o.a)("strong",{parentName:"p"},"client > app > containers > App > index.js"),",\nand import the container folder you just created at the imports section (top)."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'import { newPage } from "NewPage";\n')),Object(o.a)("h3",{id:"add-public-page"},"Add public page"),Object(o.a)("p",null,"2.2 Inside index.js, create a route using ",Object(o.a)("strong",{parentName:"p"},"Route")," method (imported) and place it between the ",Object(o.a)("inlineCode",{parentName:"p"},"<Switch>")," tags."),Object(o.a)("p",null,"Please make sure you are using a unique path for the path prop and fill the component prop with the component you just imported."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'<Route path="/public-page/example" component={newPage} />\n')),Object(o.a)("p",null,'For more information about the "Route" or "Switch" methods please check the react-router official ',Object(o.a)("a",{parentName:"p",href:"https://reactrouter.com"},"docs"),"."),Object(o.a)("h3",{id:"add-privage-page"},"Add privage page"),Object(o.a)("p",null,"2.2 Inside index.js, create a route using ",Object(o.a)("strong",{parentName:"p"},"PrivateRoute")," method (imported) and place it between the ",Object(o.a)("inlineCode",{parentName:"p"},"<Switch>")," tags."),Object(o.a)("p",null,"Please make sure you are using a unic path for the path prop and fill the component prop with the component you just imported."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-javascript"},'<PrivateRoute path="/private-page/example" component={newPage} />\n')),Object(o.a)("p",null,"See the ",Object(o.a)("a",{parentName:"p",href:"#privateroute-component"},"PrivateRoute")," component documentation below."),Object(o.a)("h3",{id:"loadable-component"},"Loadable component"),Object(o.a)("p",null,"There are options to lazy load your page using Loadable HOC. You may see examples in other Fudge pages (PrivatePage, PublicPage). It is uses ",Object(o.a)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactlazy"},"React.lazy()")," and ",Object(o.a)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactsuspense"},"React.Suspense()"),"."),Object(o.a)("h3",{id:"privateroute-component"},"PrivateRoute component"),Object(o.a)("p",null,"The PrivateRoute component built with ",Object(o.a)("inlineCode",{parentName:"p"},"<Route />")," and ",Object(o.a)("inlineCode",{parentName:"p"},"<Redirect />")," which provided by react-router, more about react-router methods can be found in the official ",Object(o.a)("a",{parentName:"p",href:"https://reactrouter.com"},"docs"),".",Object(o.a)("br",{parentName:"p"}),"\n","The component detect's authenticated user's by checking redux state, and decide wether to give them access to the protected route, or to make a redirect to the login page instead.",Object(o.a)("br",{parentName:"p"}),"\n","You can find it in the ",Object(o.a)("strong",{parentName:"p"},"client > app > components > PrivateRoute")," folder."))}d.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return a?r.a.createElement(b,i(i({ref:t},l),{},{components:a})):r.a.createElement(b,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);