(this["webpackJsonpweb-dev-reference"]=this["webpackJsonpweb-dev-reference"]||[]).push([[6],{11:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(24),c=(r(79),r(80),r(34)),a=r(30),s=r(7),i=r(36),o=r(39),d=r(40),u=r(27),l=r(0),j=r.n(l),f=r(2),b=j.a.createContext(void 0);t.b=function(){var e=Object(l.useState)([{id:0,referenceTitle:"React",referenceSections:[{id:0,sectionTitle:"Getting started",path:"react-reference/GettingStarted"},{id:1,sectionTitle:"Context API",path:"react-reference/ContextAPI"}]},{id:1,referenceTitle:"Python",referenceSections:[{id:0,sectionTitle:"Py Plot",path:"python-reference/PyPlot"}]}]),t=Object(n.a)(e,2),r=t[0],j=(t[1],Object(l.useState)([{title:"React reference",description:"A Javascript framework for reactive webpages",imagePath:"images/ReactCarousel.jpg",clickPath:"/reference",referenceId:0,sectionId:0,id:0},{title:"Bootstrap reference",description:"The most famous CSS JS library",imagePath:"images/BootstrapCarousel.jpg",clickPath:"/reference",referenceId:1,sectionId:0,id:1}])),h=Object(n.a)(j,2),x=h[0],O=(h[1],Object(l.useState)(0)),m=Object(n.a)(O,2),p=m[0],v=m[1],g=Object(l.useState)(0),C=Object(n.a)(g,2),I=C[0],N=C[1];return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(b.Provider,{value:{references:r,changeCurrentReference:v,currentReferenceId:p,currentSectionId:I,changeCurrentSection:N},children:Object(f.jsxs)(a.a,{basename:"/DevReference",children:[Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)(c.default,{})}),Object(f.jsx)("div",{children:Object(f.jsx)(u.a,{fluid:!0,children:Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{path:"/about",children:Object(f.jsx)(o.default,{})}),Object(f.jsx)(s.a,{path:"/reference",children:Object(f.jsx)(d.default,{})}),Object(f.jsx)(s.a,{path:"/",children:Object(f.jsx)(i.default,{carouselItems:x})})]})})})]})})})}},18:function(e,t,r){"use strict";r.r(t);var n=r(7),c=r(2);t.default=function(e){var t=e.children,r=e.to,a=Object(n.f)();return Object(c.jsx)("a",{onClick:function(e){a.push(r)},className:Object(n.g)().pathname===r?"text-primary cursorPointer nav-link":"text-secondary cursorPointer nav-link",children:t})}},34:function(e,t,r){"use strict";r.r(t);var n=r(56),c=r(52),a=r(51),s=r(18),i=r(0),o=r(11),d=r(35),u=r(2);t.default=function(){var e=Object(i.useContext)(o.a);return Object(u.jsxs)(n.a,{bg:"light",expand:"lg",className:"mb-2",children:[Object(u.jsx)(s.default,{to:"/",children:Object(u.jsx)("a",{className:"brand cursorPointer navbar-brand",children:"Web dev reference"})}),Object(u.jsx)(n.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(n.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(c.a,{className:"mr-auto",children:[Object(u.jsx)(s.default,{to:"/",children:"Home"}),Object(u.jsx)(s.default,{to:"/about",children:"About"}),Object(u.jsx)(a.a,{title:"References",id:"basic-nav-dropdown",children:e.references.map((function(e){return Object(u.jsx)(d.default,{reference:e},e.id)}))})]})})]})}},35:function(e,t,r){"use strict";r.r(t);var n=r(18),c=r(7),a=r(11),s=r(0),i=r(2);t.default=function(e){var t=e.reference,r=Object(s.useContext)(a.a),o=Object(c.f)();return Object(i.jsxs)("div",{className:"dropdown-item cursorPointer",onClick:function(){o.push("/reference"),r.changeCurrentReference(t.id),r.changeCurrentSection(0)},children:[Object(i.jsx)(n.default,{to:"/reference",children:t.referenceTitle})," "]})}},36:function(e,t,r){"use strict";r.r(t);var n=r(33),c=r(37),a=r(2);t.default=function(e){var t=e.carouselItems;return Object(a.jsx)("div",{children:Object(a.jsx)(n.a,{children:t.map((function(e){return Object(a.jsx)(n.a.Item,{children:Object(a.jsx)(c.default,{carouselItem:e})},e.id)}))})})}},37:function(e,t,r){"use strict";r.r(t);var n=r(33),c=r(38),a=r(2);t.default=function(e){var t=e.carouselItem;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.default,{carouselItem:t}),Object(a.jsxs)(n.a.Caption,{children:[Object(a.jsx)("h3",{className:"text-dark",children:t.title}),Object(a.jsx)("p",{className:"text-dark",children:t.description})]})]})}},38:function(e,t,r){"use strict";r.r(t);var n=r(7),c=r(11),a=r(0),s=r(2);t.default=function(e){var t=e.carouselItem,r=Object(a.useContext)(c.a),i=Object(n.f)();return Object(s.jsx)("img",{style:{height:"25rem"},className:"d-block w-100",src:t.imagePath,alt:"Slide",onClick:function(e){i.push(t.clickPath),r.changeCurrentReference(t.referenceId),r.changeCurrentSection(t.sectionId)}})}},39:function(e,t,r){"use strict";r.r(t);var n=r(27),c=r(28),a=r(2);t.default=function(){return Object(a.jsxs)(n.a,{fluid:!0,className:"bg-secondary rounded py-2 text-center px-5 text-light",children:[Object(a.jsx)("h2",{className:"text-center text-light py-2",children:"About"}),Object(a.jsx)("p",{className:"",children:"My created webpage to quickly see the reference code and resources I need weather would it be Web development or doing custom charts"}),Object(a.jsx)("p",{className:"",children:"Created using ReactJS and stylized using Bootstrap css library and components"}),Object(a.jsx)("p",{className:"pt-2",children:"Features include:"}),Object(a.jsxs)(c.a,{variant:"flush",className:"bg-dark text-left",children:[Object(a.jsx)(c.a.Item,{className:"bg-secondary",children:"Easy integration with APIs"}),Object(a.jsx)(c.a.Item,{className:"bg-secondary",children:"Automatic reference and section data rendering"}),Object(a.jsx)(c.a.Item,{className:"bg-secondary",children:"Responsive design for all device sizes"}),Object(a.jsx)(c.a.Item,{className:"bg-secondary",children:"Carousel design in Home page"})]})]})}},40:function(e,t,r){"use strict";r.r(t);var n=r(64),c=r(57),a=r(41),s=r(43),i=r(2);t.default=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(n.a,{children:[Object(i.jsx)(c.a,{xs:2,children:Object(i.jsx)(a.default,{})}),Object(i.jsx)(c.a,{xs:10,children:Object(i.jsx)(s.default,{})})]})})}},41:function(e,t,r){"use strict";r.r(t);var n=r(52),c=r(0),a=r(11),s=r(42),i=r(2);t.default=function(){var e=Object(c.useContext)(a.a);return Object(i.jsxs)(n.a,{className:"col-md-12 d-none d-md-block bg-light sidebar py-3",children:[Object(i.jsx)("div",{className:"sidebar-sticky"}),e.references.find((function(t){return t.id===e.currentReferenceId})).referenceSections.map((function(e){return Object(i.jsx)(s.default,{section:e},e.id)}))]})}},42:function(e,t,r){"use strict";r.r(t);var n=r(51),c=r(11),a=r(0),s=r(2);t.default=function(e){var t=e.section,r=Object(a.useContext)(c.a);return Object(s.jsx)("div",{className:"pb-2",children:Object(s.jsx)(n.a.Item,{onClick:function(){r.changeCurrentSection(t.id)},className:r.currentSectionId===t.id?"text-primary":"text-secondary",children:t.sectionTitle})})}},43:function(e,t,r){"use strict";r.r(t);var n=r(62),c=r.n(n),a=r(67),s=r(24),i=r(27),o=r(0),d=r.n(o),u=r(11),l=r(2),j=function(e){return Object(o.lazy)((function(){return r(91)("./".concat(e)).catch((function(){return console.log("Didnt find")}))}))};t.default=function(){var e=Object(o.useState)(),t=Object(s.a)(e,2),r=t[0],n=t[1],f=Object(o.useContext)(u.a);return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.references.find((function(e){return e.id===f.currentReferenceId})).referenceSections.find((function(e){return e.id===f.currentSectionId})).path,e.next=3,j(t);case 3:r=e.sent,n(Object(l.jsx)(r,{}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f.currentSectionId,f.currentReferenceId]),Object(l.jsx)(i.a,{fluid:!0,className:"bg-light",children:Object(l.jsx)(d.a.Suspense,{fallback:"Loading views...",children:Object(l.jsx)("div",{children:r})})})}},74:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(19),s=r.n(a),i=r(11),o=r(2);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(i.b,{})}),document.getElementById("root"))},79:function(e,t,r){},91:function(e,t,r){var n={"./About":[39],"./About.js":[39],"./CarouselImage":[38],"./CarouselImage.js":[38],"./CarouselItem":[37],"./CarouselItem.js":[37],"./Home":[36],"./Home.js":[36],"./NavLink":[18],"./NavLink.js":[18],"./NavigationBar":[34],"./NavigationBar.js":[34],"./NavigationBarDropDown":[35],"./NavigationBarDropDown.js":[35],"./NavigationSideBar":[41],"./NavigationSideBar.js":[41],"./NavigationSideBarPiece":[42],"./NavigationSideBarPiece.js":[42],"./ReferenceCodeSnippet":[68,3],"./ReferenceCodeSnippet.js":[68,3],"./ReferenceContainer":[43],"./ReferenceContainer.js":[43],"./ReferencePage":[40],"./ReferencePage.js":[40],"./ReferenceSectionHeader":[69,4],"./ReferenceSectionHeader.js":[69,4],"./ReferenceSectionText":[70,5],"./ReferenceSectionText.js":[70,5],"./python-reference/PyPlot":[71,0],"./python-reference/PyPlot.js":[71,0],"./react-reference/ContextAPI":[72,1],"./react-reference/ContextAPI.js":[72,1],"./react-reference/GettingStarted":[73,2],"./react-reference/GettingStarted.js":[73,2]};function c(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(c)}))}c.keys=function(){return Object.keys(n)},c.id=91,e.exports=c}},[[74,7,8]]]);
//# sourceMappingURL=main.afee03d1.chunk.js.map