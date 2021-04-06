(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(97)),c={id:"adding-font",title:"Add new font"},i={unversionedId:"adding-font",id:"adding-font",isDocsHomePage:!1,title:"Add new font",description:"Intro",source:"@site/docs/adding-font.md",slug:"/adding-font",permalink:"/docs/adding-font",version:"current",sidebar:"someSidebar",previous:{title:"Socket.io notifications",permalink:"/docs/socket-notifications"},next:{title:"Responsiveness",permalink:"/docs/responsiveness"}},s=[{value:"Intro",id:"intro",children:[]},{value:"Use case",id:"use-case",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.a)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.a)("h3",{id:"intro"},"Intro"),Object(r.a)("p",null,"In order to create an maintainable and efficient application, fudge's team making use of ",Object(r.a)("a",{parentName:"p",href:"https://styled-components.com"},"styled-components"),", an advanced and modern styling tool."),Object(r.a)("p",null,"the font loaded using the styled components technology inside one specific component and enable to make use of it freely."),Object(r.a)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.a)("div",{parentName:"div",className:"admonition-heading"},Object(r.a)("h5",{parentName:"div"},Object(r.a)("span",{parentName:"h5",className:"admonition-icon"},Object(r.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.a)("div",{parentName:"div",className:"admonition-content"},Object(r.a)("p",{parentName:"div"},"The file tht holds the main styles called ",Object(r.a)("strong",{parentName:"p"},"global-styles.js"),", and can be found at ",Object(r.a)("strong",{parentName:"p"},"client > app > global-styles.js"),".\nfor the example we will make a use of ",Object(r.a)("a",{parentName:"p",href:"https://fonts.google.com"},"google-fonts"),"."))),Object(r.a)("h3",{id:"use-case"},"Use case"),Object(r.a)("p",null,"Inside global-styles.js, we are making use of ",Object(r.a)("strong",{parentName:"p"},"createGlobalStyle")," method by styled-components, to create the main styles."),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",className:"language-javascript"},"const GlobalStyle = createGlobalStyle`\n  body {\n    font-family: 'SB Body', 'Roboto', sans-serif;\n  }\n`;\n")),Object(r.a)("p",null,"please make sure to import the font at the ",Object(r.a)("strong",{parentName:"p"},"index.html")," file or the css file:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",className:"language-javascript"},'<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">\n')),Object(r.a)("p",null,"in order to apply different font or styles, please import the wanted font and use it inside the component created. make sure to put it inside the correct section or create a new one."),Object(r.a)("p",null,"example:"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",className:"language-javascript"},".specialHeader {\n    font-family: 'SB Heading', 'Roboto', sans-serif;\n}\n")))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,u=m["".concat(c,".").concat(f)]||m[f]||d[f]||r;return n?o.a.createElement(u,i(i({ref:t},l),{},{components:n})):o.a.createElement(u,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);