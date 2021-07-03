(this["webpackJsonpweb-dev-reference"]=this["webpackJsonpweb-dev-reference"]||[]).push([[8],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(18),c=(n(84),n(85),n(86),n(44)),a=n(27),i=n(7),s=n(36),o=n(43),l=n(39),u=n(29),d=n(0),f=n.n(d),j=n(2),C=f.a.createContext(void 0);t.b=function(){var e=Object(d.useState)([{id:0,referenceTitle:"React",referenceSections:[{id:0,sectionTitle:"Getting started",path:"react-reference/GettingStarted"},{id:1,sectionTitle:"Context API",path:"react-reference/ContextAPI"},{id:2,sectionTitle:"Deploying",path:"react-reference/Deployement"},{id:3,sectionTitle:"Routing",path:"react-reference/Router"}]},{id:1,referenceTitle:"Python",referenceSections:[{id:0,sectionTitle:"Py Plot",path:"python-reference/PyPlot"}]}]),t=Object(r.a)(e,1)[0],n=Object(d.useState)([{title:"React reference",description:"A Javascript framework for reactive webpages",imagePath:"images/ReactCarousel.jpg",clickPath:"/reference",referenceId:0,sectionId:0,id:0},{title:"Bootstrap reference",description:"The most famous CSS JS library",imagePath:"images/BootstrapCarousel.jpg",clickPath:"/reference",referenceId:1,sectionId:0,id:1}]),f=Object(r.a)(n,1)[0],b=Object(d.useState)(0),m=Object(r.a)(b,2),h=m[0],p=m[1],O=Object(d.useState)(0),x=Object(r.a)(O,2),v=x[0],g=x[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(C.Provider,{value:{references:t,changeCurrentReference:p,currentReferenceId:h,currentSectionId:v,changeCurrentSection:g},children:Object(j.jsxs)(a.a,{basename:"/DevReference",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(c.default,{})}),Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{fluid:!0,children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/about",children:Object(j.jsx)(o.default,{})}),Object(j.jsx)(i.a,{path:"/reference",children:Object(j.jsx)(l.default,{})}),Object(j.jsx)(i.a,{path:"/",children:Object(j.jsx)(s.default,{carouselItems:f})})]})})})]})})})}},19:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(2);t.default=function(e){var t=e.children,n=e.to,a=e.className,i=Object(r.f)();return Object(c.jsx)("button",{className:"navLinkButton ".concat(a),onClick:function(e){i.push(n)},children:t})}},34:function(e,t,n){"use strict";n.r(t);var r=n(18),c=n(0),a=n.n(c),i=n(2);t.default=function(e){var t=e.children,n=e.title,s=e.className,o=Object(c.useState)("0"),l=Object(r.a)(o,2),u=l[0],d=l[1],f=function(){d("0"===u?"1":"0")};return window.onclick=function(e){if(!e.target.matches(".navDropdownLinkButton")){var t,n=document.getElementsByClassName("nav-dropdown-content");for(t=0;t<n.length;t++)d("0")}},Object(i.jsxs)("div",{className:"nav-dropdown",children:[Object(i.jsx)("button",{className:"navDropdownLinkButton navLinkButton ".concat(s),onClick:f,children:n}),Object(i.jsx)("div",{className:"nav-dropdown-content bg-light rounded border",style:{opacity:"".concat(u)},children:t.map((function(e){return a.a.cloneElement(e,{buttonPressed:f})}))})]})}},35:function(e,t,n){"use strict";n.r(t);var r=n(19),c=n(7),a=n(11),i=n(0),s=n(2);t.default=function(e){var t=e.reference,n=e.buttonPressed,o=Object(i.useContext)(a.a),l=Object(c.f)();return Object(s.jsxs)("div",{className:"dropdown-item cursorPointer",onClick:function(){l.push("/reference"),o.changeCurrentReference(t.id),o.changeCurrentSection(0),n()},children:[Object(s.jsx)(r.default,{className:"/reference"===Object(c.g)().pathname&&t.id===o.currentReferenceId?"text-primary":"text-secondary",to:"/reference",children:t.referenceTitle})," "]})}},36:function(e,t,n){"use strict";n.r(t);var r=n(33),c=n(37),a=n(2);t.default=function(e){var t=e.carouselItems;return Object(a.jsx)("div",{children:Object(a.jsx)(r.a,{children:t.map((function(e){return Object(a.jsx)(r.a.Item,{children:Object(a.jsx)(c.default,{carouselItem:e})},e.id)}))})})}},37:function(e,t,n){"use strict";n.r(t);var r=n(33),c=n(38),a=n(2);t.default=function(e){var t=e.carouselItem;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.default,{carouselItem:t}),Object(a.jsxs)(r.a.Caption,{children:[Object(a.jsx)("h3",{className:"text-dark",children:t.title}),Object(a.jsx)("p",{className:"text-dark",children:t.description})]})]})}},38:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(11),a=n(0),i=n(98),s=n(2);t.default=function(e){var t=e.carouselItem,n=Object(a.useContext)(c.a),o=Object(r.f)();return Object(s.jsx)("div",{style:{width:"90%",height:"auto"},className:"mx-auto",children:Object(s.jsx)(i.a,{aspectRatio:"21by9",children:Object(s.jsx)("embed",{type:"image/svg+xml",alt:"Slide",onClick:function(e){o.push(t.clickPath),n.changeCurrentReference(t.referenceId),n.changeCurrentSection(t.sectionId)},src:t.imagePath})})})}},39:function(e,t,n){"use strict";n.r(t);var r=n(65),c=n(58),a=n(40),i=n(42),s=n(2);t.default=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(r.a,{children:[Object(s.jsx)(c.a,{xs:2,children:Object(s.jsx)(a.default,{})}),Object(s.jsx)(c.a,{xs:10,children:Object(s.jsx)(i.default,{})})]})})}},40:function(e,t,n){"use strict";n.r(t);var r=n(53),c=n(0),a=n(11),i=n(41),s=n(2);t.default=function(){var e=Object(c.useContext)(a.a);return Object(s.jsxs)(r.a,{className:"col-md-12 d-none d-md-block bg-light sidebar py-3",children:[Object(s.jsx)("div",{className:"sidebar-sticky"}),e.references.find((function(t){return t.id===e.currentReferenceId})).referenceSections.map((function(e){return Object(s.jsx)(i.default,{section:e},e.id)}))]})}},41:function(e,t,n){"use strict";n.r(t);var r=n(70),c=n(11),a=n(0),i=n(2);t.default=function(e){var t=e.section,n=Object(a.useContext)(c.a);return Object(i.jsx)("div",{className:"pb-2",children:Object(i.jsx)(r.a.Item,{onClick:function(){n.changeCurrentSection(t.id)},className:n.currentSectionId===t.id?"text-primary":"text-secondary",children:t.sectionTitle})})}},42:function(e,t,n){"use strict";n.r(t);var r=n(63),c=n.n(r),a=n(69),i=n(18),s=n(29),o=n(0),l=n.n(o),u=n(11),d=n(2),f=function(e){return Object(o.lazy)((function(){return n(97)("./".concat(e)).catch((function(){return console.log("Didnt find")}))}))};t.default=function(){var e=Object(o.useState)(),t=Object(i.a)(e,2),n=t[0],r=t[1],j=Object(o.useContext)(u.a);return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.references.find((function(e){return e.id===j.currentReferenceId})).referenceSections.find((function(e){return e.id===j.currentSectionId})).path,e.next=3,f(t);case 3:n=e.sent,r(Object(d.jsx)(n,{}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[j.currentSectionId,j.currentReferenceId,j.references]),Object(d.jsx)(s.a,{fluid:!0,className:"bg-light",children:Object(d.jsx)(l.a.Suspense,{fallback:"Loading views...",children:Object(d.jsx)("div",{children:n})})})}},43:function(e,t,n){"use strict";n.r(t);var r,c=n(29),a=n(25),i=n(0),s=["title","titleId"];function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function u(e,t){var n=e.title,c=e.titleId,a=l(e,s);return i.createElement("svg",o({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},a),void 0===n?i.createElement("title",{id:c},"GitHub"):n?i.createElement("title",{id:c},n):null,r||(r=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))}var d,f=i.forwardRef(u),j=(n.p,["title","titleId"]);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function m(e,t){var n=e.title,r=e.titleId,c=b(e,j);return i.createElement("svg",C({role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),void 0===n?i.createElement("title",{id:r},"LinkedIn"):n?i.createElement("title",{id:r},n):null,d||(d=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))}var h=i.forwardRef(m),p=(n.p,n(2));t.default=function(){var e=Object(i.useRef)(null);return Object(i.useLayoutEffect)((function(){var t=e.current.getBoundingClientRect().top+30,n=function(){var e=window.scrollY+window.innerHeight;t<e&&document.documentElement.style.setProperty("--aboutLinksTransform","1")};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n),document.documentElement.style.setProperty("--aboutLinksTransform","0")}}),[]),Object(p.jsxs)(c.a,{fluid:!0,className:"bg-secondary rounded py-2 text-center px-5 text-light my-2",children:[Object(p.jsx)("h2",{className:"text-center text-light py-2",children:"About"}),Object(p.jsx)("p",{className:"",children:"My created webpage to quickly see the reference code and resources I need weather would it be Web development or doing custom charts"}),Object(p.jsx)("p",{className:"",children:"Created using ReactJS and stylized using Bootstrap css library and components"}),Object(p.jsx)("p",{className:"pt-2",children:"Features include:"}),Object(p.jsxs)(a.a,{variant:"flush",className:"text-left about",children:[Object(p.jsx)(a.a.Item,{className:"bg-secondary",animationoffset:"1.0",children:"Easy integration with APIs"}),Object(p.jsx)(a.a.Item,{className:"bg-secondary",animationoffset:"1.0",children:"Automatic reference and section data rendering"}),Object(p.jsx)(a.a.Item,{className:"bg-secondary",animationoffset:"1.0",children:"Responsive design for all device sizes"}),Object(p.jsx)(a.a.Item,{className:"bg-secondary",animationoffset:"1.0",children:"Carousel design in Home page"}),Object(p.jsx)(a.a.Item,{className:"bg-secondary",animationoffset:"1.0",children:"Different CSS powered animations initiated by hover and scroll events"}),Object(p.jsx)(a.a.Item,{className:"bg-secondary",animationoffset:"1.0",children:"SVG format animations"})]}),Object(p.jsx)("h2",{className:"text-center py-2",children:"Created by:"}),Object(p.jsx)("h4",{className:"about-name",children:"Simonas Riauka"}),Object(p.jsx)("a",{ref:e,className:"about-links",href:"https://github.com/simonuks221",animate:"20%",children:Object(p.jsx)(f,{})}),Object(p.jsx)("a",{className:"about-links",href:"https://linkedin.com/in/simonas-riauka-851a7017b",children:Object(p.jsx)(h,{})})]})}},44:function(e,t,n){"use strict";n.r(t);var r,c,a=n(57),i=n(53),s=n(34),o=n(19),l=n(7),u=n(0),d=n(11),f=n(35),j=["title","titleId"];function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function m(e,t){var n=e.title,a=e.titleId,i=b(e,j);return u.createElement("svg",C({width:220,height:60,viewBox:"0 0 220 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},i),n?u.createElement("title",{id:a},n):null,r||(r=u.createElement("g",{id:"Frame 1",clipPath:"url(#clip0)"},u.createElement("g",{id:"TriangleGroup"},u.createElement("path",{id:"Triangle2",d:"M55 30L10 55.9808V4.01924L55 30Z",fillOpacity:.89}),u.createElement("path",{id:"Triangle1",d:"M55 30L10 55.9808V4.01924L55 30Z",fillOpacity:.89})),u.createElement("g",{id:"TextGroup"},u.createElement("path",{id:"BrandText",d:"M21.7471 34.6055L24.4814 21.2266H27.5454L23.4438 39H20.4897L17.1084 26.0239L13.6538 39H10.6875L6.58594 21.2266H9.6499L12.4087 34.5811L15.8022 21.2266H18.3901L21.7471 34.6055ZM34.9429 39.2441C33.063 39.2441 31.5371 38.6541 30.3652 37.4741C29.2015 36.286 28.6196 34.7072 28.6196 32.7378V32.3716C28.6196 31.0532 28.8719 29.8773 29.3765 28.8438C29.8892 27.8021 30.6053 26.9924 31.5249 26.4146C32.4445 25.8368 33.4699 25.5479 34.6011 25.5479C36.3996 25.5479 37.7871 26.1216 38.7637 27.269C39.7484 28.4165 40.2407 30.04 40.2407 32.1396V33.3359H31.6104C31.6999 34.4264 32.062 35.2891 32.6968 35.9238C33.3397 36.5586 34.1453 36.876 35.1138 36.876C36.4728 36.876 37.5796 36.3267 38.4341 35.228L40.0332 36.7539C39.5042 37.5433 38.7962 38.1577 37.9092 38.5972C37.0303 39.0285 36.0415 39.2441 34.9429 39.2441ZM34.5889 27.9282C33.7751 27.9282 33.1159 28.2131 32.6113 28.7827C32.1149 29.3524 31.7975 30.1458 31.6592 31.1631H37.311V30.9434C37.2459 29.9505 36.9814 29.2018 36.5176 28.6973C36.0537 28.1846 35.4108 27.9282 34.5889 27.9282ZM54.1445 32.5303C54.1445 34.5811 53.6847 36.2127 52.7651 37.4253C51.8537 38.6379 50.5964 39.2441 48.9932 39.2441C47.4469 39.2441 46.2425 38.6867 45.3799 37.5718L45.2334 39H42.5479V20.25H45.5142V27.0615C46.3687 26.0524 47.5202 25.5479 48.9688 25.5479C50.5801 25.5479 51.8455 26.146 52.7651 27.3423C53.6847 28.5386 54.1445 30.2109 54.1445 32.3594V32.5303ZM51.1782 32.2739C51.1782 30.8416 50.9259 29.7674 50.4214 29.0513C49.9168 28.3351 49.1844 27.9771 48.2241 27.9771C46.9383 27.9771 46.035 28.5386 45.5142 29.6616V35.106C46.0431 36.2534 46.9546 36.8271 48.2485 36.8271C49.1763 36.8271 49.8924 36.4813 50.397 35.7896C50.9015 35.0978 51.1619 34.0521 51.1782 32.6523V32.2739ZM62.311 32.2983C62.311 30.2638 62.783 28.6322 63.7271 27.4033C64.6711 26.1663 65.9365 25.5479 67.5234 25.5479C68.9232 25.5479 70.0544 26.0361 70.917 27.0127V20.25H73.8833V39H71.1978L71.0513 37.6328C70.1642 38.707 68.9801 39.2441 67.499 39.2441C65.9528 39.2441 64.6995 38.6216 63.7393 37.3765C62.7871 36.1313 62.311 34.4386 62.311 32.2983ZM65.2773 32.5547C65.2773 33.8975 65.5337 34.9473 66.0464 35.7041C66.5672 36.4528 67.3037 36.8271 68.2559 36.8271C69.4684 36.8271 70.3555 36.286 70.917 35.2036V29.564C70.3717 28.506 69.4928 27.9771 68.2803 27.9771C67.32 27.9771 66.5794 28.3595 66.0586 29.1245C65.5378 29.8813 65.2773 31.0247 65.2773 32.5547ZM82.7944 39.2441C80.9146 39.2441 79.3887 38.6541 78.2168 37.4741C77.0531 36.286 76.4712 34.7072 76.4712 32.7378V32.3716C76.4712 31.0532 76.7235 29.8773 77.228 28.8438C77.7407 27.8021 78.4569 26.9924 79.3765 26.4146C80.2961 25.8368 81.3215 25.5479 82.4526 25.5479C84.2511 25.5479 85.6387 26.1216 86.6152 27.269C87.5999 28.4165 88.0923 30.04 88.0923 32.1396V33.3359H79.4619C79.5514 34.4264 79.9136 35.2891 80.5483 35.9238C81.1912 36.5586 81.9969 36.876 82.9653 36.876C84.3244 36.876 85.4312 36.3267 86.2856 35.228L87.8848 36.7539C87.3558 37.5433 86.6478 38.1577 85.7607 38.5972C84.8818 39.0285 83.8931 39.2441 82.7944 39.2441ZM82.4404 27.9282C81.6266 27.9282 80.9674 28.2131 80.4629 28.7827C79.9665 29.3524 79.6491 30.1458 79.5107 31.1631H85.1626V30.9434C85.0975 29.9505 84.833 29.2018 84.3691 28.6973C83.9053 28.1846 83.2624 27.9282 82.4404 27.9282ZM94.8916 35.2402L97.687 25.792H100.751L96.1733 39H93.5977L88.9834 25.792H92.0596L94.8916 35.2402ZM115.753 28.502C115.363 28.4368 114.96 28.4043 114.545 28.4043C113.186 28.4043 112.27 28.9251 111.798 29.9668V39H108.832V25.792H111.664L111.737 27.269C112.453 26.1216 113.446 25.5479 114.716 25.5479C115.139 25.5479 115.489 25.6048 115.766 25.7188L115.753 28.502ZM123.2 39.2441C121.32 39.2441 119.794 38.6541 118.622 37.4741C117.458 36.286 116.876 34.7072 116.876 32.7378V32.3716C116.876 31.0532 117.129 29.8773 117.633 28.8438C118.146 27.8021 118.862 26.9924 119.782 26.4146C120.701 25.8368 121.727 25.5479 122.858 25.5479C124.656 25.5479 126.044 26.1216 127.021 27.269C128.005 28.4165 128.498 30.04 128.498 32.1396V33.3359H119.867C119.957 34.4264 120.319 35.2891 120.954 35.9238C121.597 36.5586 122.402 36.876 123.371 36.876C124.73 36.876 125.836 36.3267 126.691 35.228L128.29 36.7539C127.761 37.5433 127.053 38.1577 126.166 38.5972C125.287 39.0285 124.298 39.2441 123.2 39.2441ZM122.846 27.9282C122.032 27.9282 121.373 28.2131 120.868 28.7827C120.372 29.3524 120.054 30.1458 119.916 31.1631H125.568V30.9434C125.503 29.9505 125.238 29.2018 124.774 28.6973C124.311 28.1846 123.668 27.9282 122.846 27.9282ZM131.854 39V27.9893H129.84V25.792H131.854V24.5835C131.854 23.1187 132.261 21.9875 133.075 21.1899C133.889 20.3924 135.028 19.9937 136.493 19.9937C137.014 19.9937 137.567 20.0669 138.153 20.2134L138.08 22.5327C137.755 22.4676 137.376 22.4351 136.945 22.4351C135.529 22.4351 134.821 23.1634 134.821 24.6201V25.792H137.506V27.9893H134.821V39H131.854ZM145.197 39.2441C143.317 39.2441 141.791 38.6541 140.619 37.4741C139.455 36.286 138.874 34.7072 138.874 32.7378V32.3716C138.874 31.0532 139.126 29.8773 139.63 28.8438C140.143 27.8021 140.859 26.9924 141.779 26.4146C142.698 25.8368 143.724 25.5479 144.855 25.5479C146.653 25.5479 148.041 26.1216 149.018 27.269C150.002 28.4165 150.495 30.04 150.495 32.1396V33.3359H141.864C141.954 34.4264 142.316 35.2891 142.951 35.9238C143.594 36.5586 144.399 36.876 145.368 36.876C146.727 36.876 147.833 36.3267 148.688 35.228L150.287 36.7539C149.758 37.5433 149.05 38.1577 148.163 38.5972C147.284 39.0285 146.295 39.2441 145.197 39.2441ZM144.843 27.9282C144.029 27.9282 143.37 28.2131 142.865 28.7827C142.369 29.3524 142.051 30.1458 141.913 31.1631H147.565V30.9434C147.5 29.9505 147.235 29.2018 146.771 28.6973C146.308 28.1846 145.665 27.9282 144.843 27.9282ZM159.723 28.502C159.333 28.4368 158.93 28.4043 158.515 28.4043C157.156 28.4043 156.24 28.9251 155.768 29.9668V39H152.802V25.792H155.634L155.707 27.269C156.423 26.1216 157.416 25.5479 158.686 25.5479C159.109 25.5479 159.459 25.6048 159.735 25.7188L159.723 28.502ZM167.169 39.2441C165.29 39.2441 163.764 38.6541 162.592 37.4741C161.428 36.286 160.846 34.7072 160.846 32.7378V32.3716C160.846 31.0532 161.098 29.8773 161.603 28.8438C162.116 27.8021 162.832 26.9924 163.751 26.4146C164.671 25.8368 165.696 25.5479 166.828 25.5479C168.626 25.5479 170.014 26.1216 170.99 27.269C171.975 28.4165 172.467 30.04 172.467 32.1396V33.3359H163.837C163.926 34.4264 164.289 35.2891 164.923 35.9238C165.566 36.5586 166.372 36.876 167.34 36.876C168.699 36.876 169.806 36.3267 170.661 35.228L172.26 36.7539C171.731 37.5433 171.023 38.1577 170.136 38.5972C169.257 39.0285 168.268 39.2441 167.169 39.2441ZM166.815 27.9282C166.002 27.9282 165.342 28.2131 164.838 28.7827C164.341 29.3524 164.024 30.1458 163.886 31.1631H169.538V30.9434C169.472 29.9505 169.208 29.2018 168.744 28.6973C168.28 28.1846 167.637 27.9282 166.815 27.9282ZM177.533 25.792L177.619 27.3179C178.595 26.1379 179.877 25.5479 181.464 25.5479C184.215 25.5479 185.614 27.1226 185.663 30.272V39H182.697V30.4429C182.697 29.6047 182.514 28.9862 182.147 28.5874C181.789 28.1805 181.199 27.9771 180.377 27.9771C179.181 27.9771 178.29 28.5182 177.704 29.6006V39H174.738V25.792H177.533ZM194.123 36.876C194.863 36.876 195.478 36.6603 195.966 36.229C196.454 35.7977 196.715 35.2646 196.747 34.6299H199.542C199.51 35.4518 199.254 36.2209 198.773 36.937C198.293 37.645 197.642 38.2065 196.82 38.6216C195.998 39.0366 195.111 39.2441 194.159 39.2441C192.312 39.2441 190.847 38.646 189.765 37.4497C188.682 36.2534 188.141 34.6014 188.141 32.4937V32.1885C188.141 30.1784 188.678 28.5711 189.752 27.3667C190.827 26.1541 192.292 25.5479 194.147 25.5479C195.718 25.5479 196.995 26.0076 197.98 26.9272C198.973 27.8387 199.494 29.0391 199.542 30.5283H196.747C196.715 29.7715 196.454 29.1489 195.966 28.6606C195.486 28.1724 194.871 27.9282 194.123 27.9282C193.162 27.9282 192.422 28.2782 191.901 28.978C191.38 29.6698 191.116 30.7236 191.107 32.1396V32.6157C191.107 34.048 191.364 35.1182 191.876 35.8262C192.397 36.526 193.146 36.876 194.123 36.876ZM207.599 39.2441C205.719 39.2441 204.193 38.6541 203.021 37.4741C201.858 36.286 201.276 34.7072 201.276 32.7378V32.3716C201.276 31.0532 201.528 29.8773 202.033 28.8438C202.545 27.8021 203.262 26.9924 204.181 26.4146C205.101 25.8368 206.126 25.5479 207.257 25.5479C209.056 25.5479 210.443 26.1216 211.42 27.269C212.405 28.4165 212.897 30.04 212.897 32.1396V33.3359H204.267C204.356 34.4264 204.718 35.2891 205.353 35.9238C205.996 36.5586 206.802 36.876 207.77 36.876C209.129 36.876 210.236 36.3267 211.09 35.228L212.689 36.7539C212.16 37.5433 211.452 38.1577 210.565 38.5972C209.687 39.0285 208.698 39.2441 207.599 39.2441ZM207.245 27.9282C206.431 27.9282 205.772 28.2131 205.268 28.7827C204.771 29.3524 204.454 30.1458 204.315 31.1631H209.967V30.9434C209.902 29.9505 209.638 29.2018 209.174 28.6973C208.71 28.1846 208.067 27.9282 207.245 27.9282Z",fill:"black"})))),c||(c=u.createElement("defs",null,u.createElement("clipPath",{id:"clip0"},u.createElement("rect",{width:220,height:60,fill:"white"})))))}var h=u.forwardRef(m),p=(n.p,n(2));t.default=function(){var e=Object(u.useContext)(d.a);return Object(p.jsxs)(a.a,{bg:"light",expand:"lg",className:"mb-2",children:[Object(p.jsx)(o.default,{to:"/",className:"p-2",children:Object(p.jsx)(h,{className:"brand",onClick:function(e){return function(e){var t=["red","green","blue","cyan","orange","pink"],n=function(){return t[Math.floor(Math.random()*t.length)]};document.documentElement.style.cssText="--triangle1Color: ".concat(n(),";\n             --triangle2Color: ").concat(n(),";")}()}})}),Object(p.jsx)(a.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(a.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(i.a,{className:"mr-auto",children:[Object(p.jsx)(o.default,{className:"/"===Object(l.g)().pathname?"text-primary":"text-secondary",to:"/",children:"Home"}),Object(p.jsx)(o.default,{className:"/about"===Object(l.g)().pathname?"text-primary":"text-secondary",to:"/about",children:"About"}),Object(p.jsx)(s.default,{title:"References",className:"/reference"===Object(l.g)().pathname?"text-primary":"text-secondary",children:e.references.map((function(e){return Object(p.jsx)(f.default,{reference:e},e.id)}))})]})})]})}},79:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),i=n.n(a),s=n(11),o=n(2);i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(s.b,{})}),document.getElementById("root"))},84:function(e,t,n){},86:function(e,t,n){},97:function(e,t,n){var r={"./About":[43],"./About.js":[43],"./CarouselImage":[38],"./CarouselImage.js":[38],"./CarouselItem":[37],"./CarouselItem.js":[37],"./Home":[36],"./Home.js":[36],"./NavDropdown":[34],"./NavDropdown.js":[34],"./NavLink":[19],"./NavLink.js":[19],"./NavigationBar":[44],"./NavigationBar.js":[44],"./NavigationBarDropDown":[35],"./NavigationBarDropDown.js":[35],"./NavigationSideBar":[40],"./NavigationSideBar.js":[40],"./NavigationSideBarPiece":[41],"./NavigationSideBarPiece.js":[41],"./ReferenceCodeSnippet":[71,5],"./ReferenceCodeSnippet.js":[71,5],"./ReferenceContainer":[42],"./ReferenceContainer.js":[42],"./ReferencePage":[39],"./ReferencePage.js":[39],"./ReferenceSectionHeader":[72,6],"./ReferenceSectionHeader.js":[72,6],"./ReferenceSectionText":[73,7],"./ReferenceSectionText.js":[73,7],"./python-reference/PyPlot":[74,0],"./python-reference/PyPlot.js":[74,0],"./react-reference/ContextAPI":[75,1],"./react-reference/ContextAPI.js":[75,1],"./react-reference/Deployement":[76,2],"./react-reference/Deployement.js":[76,2],"./react-reference/GettingStarted":[77,3],"./react-reference/GettingStarted.js":[77,3],"./react-reference/Router":[78,4],"./react-reference/Router.js":[78,4]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=97,e.exports=c}},[[79,9,10]]]);
//# sourceMappingURL=main.a735f827.chunk.js.map